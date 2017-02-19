package itims

import grails.plugin.springsecurity.annotation.Secured

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
@Secured("ROLE_ADMIN")
class AssetsTypeController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond AssetsType.list(params), model: [assetsTypeInstanceCount: AssetsType.count()]
    }

    def show(AssetsType assetsTypeInstance) {
        respond assetsTypeInstance
    }

    def create() {
        respond new AssetsType(params)
    }

    @Transactional
    def save() {
        def fieldList =  params.list("fieldInfo")
        def assetName = params.assetsName
        fieldList.each{
            def assetType = new AssetsType()
            assetType.assetsName = assetName
            assetType.fieldInfo = FieldInfo.get(it as long)
            assetType.save(flush: true,failOnError: true)
        }
        redirect(action:'create')
    }

    def edit(AssetsType assetsTypeInstance) {
        respond assetsTypeInstance
    }

    @Transactional
    def update(AssetsType assetsTypeInstance) {
        if (assetsTypeInstance == null) {
            notFound()
            return
        }

        if (assetsTypeInstance.hasErrors()) {
            respond assetsTypeInstance.errors, view: 'edit'
            return
        }

        assetsTypeInstance.save flush: true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'AssetsType.label', default: 'AssetsType'), assetsTypeInstance.id])
                redirect assetsTypeInstance
            }
            '*' { respond assetsTypeInstance, [status: OK] }
        }
    }

    @Transactional
    def delete(AssetsType assetsTypeInstance) {

        if (assetsTypeInstance == null) {
            notFound()
            return
        }

        assetsTypeInstance.delete flush: true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'AssetsType.label', default: 'AssetsType'), assetsTypeInstance.id])
                redirect action: "index", method: "GET"
            }
            '*' { render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'assetsType.label', default: 'AssetsType'), params.id])
                redirect action: "index", method: "GET"
            }
            '*' { render status: NOT_FOUND }
        }
    }

    def customList(){
        def assetName = params.assetName

        def assetType = AssetsType.findAllByAssetsName(assetName)
        def data = []


        def rowNumber = AssetTypeData.all.rowNumber
        long maxRow = rowNumber?.max()?rowNumber?.max():0

        def assetDataId = []
        (0..maxRow).each {rowNo->
            def assetsDataMap = [:]
            def eachAssetDataId = []
            assetType.each{eachAsset->
                def assetData = AssetTypeData.findByRowNumberAndAssetsType(rowNo as Integer,eachAsset)
                assetsDataMap.put(eachAsset?.fieldInfo?.fieldName,assetData?.fieldValue)
                eachAssetDataId.add(assetData?.id)
            }
            assetDataId.add(eachAssetDataId)
            data.add(assetsDataMap)
        }

        render view:'customAssets.gsp',model: [data:data,assetType:assetType,assetName:assetName,assetDataId:assetDataId]
    }

    @Transactional
    def saveCustomAssetData(){
        def assetName = params.assetName
        def assetType = AssetsType.findAllByAssetsName(assetName)

        long maxRow = 0

        def rowNumber = AssetTypeData.all.rowNumber
        maxRow = rowNumber?.max() >=0 ?(rowNumber?.max()+1):0

        assetType.each {eachAsset->
            def fieldValue = params.get(eachAsset?.fieldInfo?.fieldName)
            fieldValue = fieldValue?fieldValue:""

            try{
                def assetData = new AssetTypeData(assetsType: eachAsset,fieldValue: fieldValue,rowNumber: maxRow)
                assetData.save(flush: true,failOnError:true)
            }catch (Exception ex){
                ex.printStackTrace()
            }
        }
        redirect controller:'assetsType',action:'customList',params:[assetName: assetName]
    }

    def editAssetData(){
        def assetsId = params.list("assetsId")
        def assetsDataList = []
        assetsId.each {
            def assetData = AssetTypeData.findById(it as long)
            assetsDataList.add(assetData)
        }
        render view:"editAssetsData",model:[assetsDataList:assetsDataList,assetName:params.assetName]
    }

    @Transactional
    def deleteAssetData(){
        def assetsId = params.list("assetsId")
        assetsId.each {
            def assetData = AssetTypeData.findById(it as long)
            assetData.delete(flush: true,failOnError:true)
        }
        redirect controller:'assetsType',action:'customList',params:[assetName: params.assetName]
    }

    @Transactional
    def updateCustomAssetData(){
        def assetsId = params.list("assetsId")
        assetsId.each {
            def assetData = AssetTypeData.findById(it as long)
            assetData?.fieldValue = params.get(it)
            assetData.save(flush: true,failOnError:true)
        }
        redirect controller:'assetsType',action:'customList',params:[assetName: params.assetName]
    }


}

