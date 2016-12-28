package itims

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured
import org.springframework.web.multipart.commons.CommonsMultipartFile

@Secured('permitAll')
class LaptopController {

    def springSecurityService

    def index() {
        if (springSecurityService.isLoggedIn()){
            redirect(action: 'list')
        }
        else {
            redirect(controller: 'login',action: 'auth')
        }
    }
    def Laptop(){

    }
    def save(){

        println(params)

        CommonsMultipartFile formFile = request.getFile('files')
        final String fileName = formFile.getOriginalFilename()
        params.myFile = formFile
        params.files = fileName

        def laptopInstance = new Laptop(params)

        if(laptopInstance.save(flush: true)){
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
                print valList.size()
                if (valList.size() == 20) {
                    Laptop laptop = new Laptop()
//            laptop.id=Integer.parseInt(valList.get(0))
                    laptop.dateOfPurchase = valList.get(1)
                    laptop.invoiceNo = valList.get(2)
                    laptop.price = valList.get(3)
                    laptop.laptopName = valList.get(4)
                    laptop.serialNo = valList.get(5)
                    laptop.pinNo = valList.get(6)
                    laptop.assetsID = valList.get(7)
                    laptop.username = valList.get(8)
                    laptop.model = valList.get(9)
                    laptop.status = valList.get(10)
                    laptop.os = valList.get(11)
                    laptop.processor = valList.get(12)
                    laptop.ram = valList.get(13)
                    laptop.ethernetMacAddress = valList.get(14)
                    laptop.wifiMacAddress = valList.get(15)
                    laptop.hipaa23Compliant = valList.get(16)
                    laptop.windowsGenuineKey = valList.get(17)
                    laptop.batteryBackup = valList.get(18)
                    laptop.remarks = valList.get(19)
                    if (laptop.save(flush: true, failOnError: true)) {
                        println "Successfully stored into database with id " + laptop.id
                    } else {
                        println "Error while storing into database"
                    }
                }

            }

        }


        redirect(action: 'list')
    }

    def list(){
        def laptopList=Laptop.list()
        [laptopList:laptopList]
    }

    def delete() {

        def laptopInstance = Laptop.findById(params.id as long)

        def messageType = [:];

        laptopInstance.delete(flush: true)

        messageType["message"] = "success"


        render(messageType as JSON)

    }

    def edit() {

        def laptopInstance = Laptop.get(params.id as long)

        render(laptopInstance as JSON);
    }

    def update() {

        CommonsMultipartFile formFile = request.getFile('files')
        final String fileName = formFile.getOriginalFilename()
        params.myFile = formFile
        params.files = fileName

        def laptopInstance = Laptop.findById(params.laptop_id as long);

        laptopInstance.properties = params;

        println(params);

        laptopInstance.save(flush: true);
        fileUpload(params)
        redirect(action: 'list');
    }

}
