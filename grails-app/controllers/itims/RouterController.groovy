package itims

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured
import org.springframework.web.multipart.commons.CommonsMultipartFile

@Secured('permitAll')
class RouterController {

    def springSecurityService

    def index() {
        if (springSecurityService.isLoggedIn()) {
            redirect(action: 'list')
        } else {
            redirect(controller: 'login', action: 'auth')
        }
    }

    def Router() {

    }

    def save() {
        CommonsMultipartFile formFile = request.getFile('files')
        final String fileName = formFile.getOriginalFilename()
        params.myFile = formFile
        params.files = fileName

        def routerInstance = new Router(params)
        if (routerInstance.save(flush: true)) {
            fileUpload(params)
            redirect(action: 'list')
        } else {
            render 'failed'
        }
    }

    def fileUpload(params) {
        CommonsMultipartFile image = params.myFile
        String fullPath = servletContext.getRealPath("")
        def fos = new FileOutputStream(new File("${fullPath}/files/" + params.myFile))
        image.getBytes().each {
            fos.write(it)
        }
        fos.flush()
        fos.close()
    }

    def uploadCSV() {

        CommonsMultipartFile f = request.getFile('csvFile')

        def webrootDir = servletContext.getRealPath("/") //app directory
        println "webrootDir =================================== $webrootDir"
        File fileDest = new File(webrootDir + "csvFiles/", f.getName() + ".csv")
        f.transferTo(fileDest)

        File csvFile = new File(webrootDir + "csvFiles/", f.getName() + ".csv")


        csvFile.readLines().eachWithIndex { line, index ->
            println index
            println line
            if (index != 0) {
                def valList = line.split(",").toList()
                if (valList.size() == 17) {
                    Router router = new Router()
//            router.id=Integer.parseInt(valList.get(0))
                    router.dateOfPurchase = valList.get(1)
                    router.invoiceNo = valList.get(2)
                    router.price = valList.get(3)
                    router.routerName = valList.get(4)
                    router.serialNo = valList.get(5)
                    router.pinNo = valList.get(6)
                    router.assetsID = valList.get(7)
                    router.location = valList.get(8)
                    router.ipAddress = valList.get(9)
                    router.model = valList.get(10)
                    router.banner = valList.get(11)
                    router.https = valList.get(12)
                    router.status = valList.get(13)
                    router.macAddress = valList.get(14)
                    router.hipaa23Compliant = valList.get(15)
                    router.remarks = valList.get(16)
                    if (router.save(flush: true, failOnError: true)) {
                        println "Successfully stored into database with id " + router.id
                    } else {
                        println "Error while storing into database"
                    }
                }

            }

        }

        redirect(action: 'list')

    }

    def list() {

        def routerList = Router.list()

        [routerList: routerList]
    }

    def delete() {

        def routerInstance = Router.findById(params.id as long)

        def messageType = [:];

        routerInstance.delete(flush: true)

        messageType["message"] = "success"


        render(messageType as JSON)
    }

    def edit() {
        def routerInstance = Router.get(params.id as long)

        render(routerInstance as JSON);
    }

    def update() {
        CommonsMultipartFile formFile = request.getFile('files')
        final String fileName = formFile.getOriginalFilename()
        params.myFile = formFile
        params.files = fileName

        def routerInstance = Router.findById(params.router_id as long);

        routerInstance.properties = params;

        println(params);

        routerInstance.save(flush: true);
        fileUpload(params)
        redirect(action: 'list');
    }

}
