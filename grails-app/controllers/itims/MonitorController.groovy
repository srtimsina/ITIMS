package itims

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured
import org.springframework.web.multipart.commons.CommonsMultipartFile

@Secured('permitAll')
class MonitorController {

    def index() {
        if (springSecurityService.isLoggedIn()){
            redirect(action: 'list')
        }
        else {
            redirect(controller: 'login',action: 'auth')
        }
    }
    def Monitor(){

    }
    def save(){
        println(params)

        CommonsMultipartFile formFile = request.getFile('files')
        final String fileName = formFile.getOriginalFilename()
        params.myFile = formFile
        params.files = fileName

        def monitorInstance = new Monitor(params)

        if(monitorInstance.save(flush: true)){
            fileUpload(params)
            redirect(action: 'list')
        }else {
            render 'failed'
        }
    }
    def fileUpload(params){
        CommonsMultipartFile image = params.myFile
        String fullPath = servletContext.getRealPath("")
        def fos = new FileOutputStream(new File("${fullPath}/files/" + params.myFile))
        image.getBytes().each{
            fos.write(it) }
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
                println valList.size()
                if (valList.size() == 13) {
                    Monitor monitor = new Monitor()
//            monitor.id=Integer.parseInt(valList.get(0))
                    monitor.dateOfPurchase = valList.get(1)
                    monitor.invoiceNo = valList.get(2)
                    monitor.price = valList.get(3)
                    monitor.monitorName = valList.get(4)
                    monitor.serialNo = valList.get(5)
                    monitor.pinNo = valList.get(6)
                    monitor.assetsID = valList.get(7)
                    monitor.username = valList.get(8)
                    monitor.model = valList.get(9)
                    monitor.status = valList.get(10)
                    monitor.vendorName = valList.get(11)
                    monitor.remarks = valList.get(12)
                    if (monitor.save(flush: true, failOnError: true)) {
                        println "Successfully stored into database with id " + monitor.id
                    } else {
                        println "Error while storing into database"
                    }
                }

            }

        }


        redirect(action: 'list')
    }

    def list(){
        def monitorList = Monitor.list()
    [monitorList:monitorList]
    }

    def delete() {

        def monitorInstance = Monitor.findById(params.id as long)

        def messageType = [:];

        monitorInstance.delete(flush: true)

        messageType["message"] = "success"


        render(messageType as JSON)

    }

    def edit() {

        def monitorInstance = Monitor.get(params.id as long)

        render(monitorInstance as JSON);
    }

    def update() {

        CommonsMultipartFile formFile = request.getFile('files')
        final String fileName = formFile.getOriginalFilename()
        params.myFile = formFile
        params.files = fileName

        def monitorInstance = Monitor.findById(params.monitor_id as long);

        monitorInstance.properties = params;

        println(params);

        monitorInstance.save(flush: true);
        fileUpload(params)
        redirect(action: 'list');
    }
}
