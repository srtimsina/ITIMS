package itims

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured
import org.springframework.web.multipart.commons.CommonsMultipartFile

@Secured('permitAll')
class AccessPointController {

    def springSecurityService

    def index() {
        if (springSecurityService.isLoggedIn()) {
            redirect(action: 'list')
        } else {
            redirect(controller: 'login', action: 'auth')
        }
    }

    def AccessPoint() {

    }

    def save() {
        CommonsMultipartFile formFile = request.getFile('files')
        final String fileName = formFile.getOriginalFilename()
        params.myFile = formFile
        params.files = fileName

        def accessPointInstance = new AccessPoint(params)
        if (accessPointInstance.save(flush: true)) {
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
                if (valList.size() == 14) {
                    AccessPoint accessPoint = new AccessPoint()
//            router.id=Integer.parseInt(valList.get(0))
                    accessPoint.dateOfPurchase = valList.get(1)
                    accessPoint.invoiceNo = valList.get(2)
                    accessPoint.price = valList.get(3)
                    accessPoint.accessPointName = valList.get(4)
                    accessPoint.serialNo = valList.get(5)
                    accessPoint.pinNo = valList.get(6)
                    accessPoint.assetsID = valList.get(7)
                    accessPoint.location = valList.get(8)
                    accessPoint.ipAddress = valList.get(9)
                    accessPoint.model = valList.get(10)
                    accessPoint.status = valList.get(11)
                    accessPoint.macAddress = valList.get(12)
                    accessPoint.remarks = valList.get(13)
                    if (accessPoint.save(flush: true, failOnError: true)) {
                        println "Successfully stored into database with id " + accessPoint.id
                    } else {
                        println "Error while storing into database"
                    }
                }

            }

        }

        redirect(action: 'list')

    }

    def list() {

        def accessPointList = AccessPoint.list()

        [accessPointList: accessPointList]
    }

    def delete() {
        def accessPointInstance = AccessPoint.findById(params.id as long)

        def messageType = [:];

        accessPointInstance.delete(flush: true)

        messageType["message"] = "success"

        render(messageType as JSON)
    }

    def edit() {
        def accessPointInstance = AccessPoint.get(params.id as long)

        render(accessPointInstance as JSON);
    }

    def update() {
        CommonsMultipartFile formFile = request.getFile('files')
        final String fileName = formFile.getOriginalFilename()
        params.myFile = formFile
        params.files = fileName

        def accessPointInstance = AccessPoint.findById(params.accessPoint_id as long);

        accessPointInstance.properties = params;

        println(params);

        accessPointInstance.save(flush: true);
        fileUpload(params)
        redirect(action: 'list');
    }
}
