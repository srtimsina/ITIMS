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
}
