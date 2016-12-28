package itims

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured
import org.springframework.web.multipart.commons.CommonsMultipartFile

//import org.springframework.web.multipart.commons.CommonsMultipartFile

@Secured('permitAll')
class AssetsTypeController {

    def springSecurityService

    def index() {

        if (springSecurityService.isLoggedIn()){
            redirect(action: 'list')
        }
        else {
            redirect(controller: 'login',action: 'auth')
        }
    }

    def CPU(){

    }
    def save(){

        CommonsMultipartFile formFile = request.getFile('files')
        final String fileName = formFile.getOriginalFilename()
        params.myFile = formFile
        params.files = fileName

        def cpuInstance = new CPU(params)

        if(cpuInstance.save(flush: true)){
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

    def uploadCSV(){
        CommonsMultipartFile f = request.getFile('csvFile')

        def webrootDir = servletContext.getRealPath("/") //app directory
        println "webrootDir =================================== $webrootDir"
        File fileDest = new File(webrootDir+"csvFiles/",f.getName()+".csv")
        f.transferTo(fileDest)

        File csvFile = new File(webrootDir+"csvFiles/",f.getName()+".csv")


        csvFile.readLines().eachWithIndex {line,index->
            println index
            println line
            if(index!=0){
                def valList = line.split(",").toList()
                if(valList.size()==17){
                    CPU cpu = new CPU()
//            cpu.id=Integer.parseInt(valList.get(0))
                    cpu.dateOfPurchase = valList.get(1)
                    cpu.invoiceNo = valList.get(2)
                    cpu.price = valList.get(3)
                    cpu.cpuName = valList.get(4)
                    cpu.serialNo = valList.get(5)
                    cpu.pinNo = valList.get(6)
                    cpu.assetsID = valList.get(7)
                    cpu.username = valList.get      (8)
                    cpu.model = valList.get(9)
                    cpu.status = valList.get(10)
                    cpu.os = valList.get(11)
                    cpu.processor = valList.get(12)
                    cpu.ram = valList.get(13)
                    cpu.macAddress = valList.get(14)
                    cpu.hipaa23Compliant = valList.get(15)
                    cpu.remarks = valList.get(16)
                    if(cpu.save(flush: true,failOnError: true)){
                        println "Successfully stored into database with id "+cpu.id
                    }else{
                        println "Error while storing into database"
                    }
                }

            }

        }


        redirect(action: 'list')
    }

    def list(){

        def cpuList = CPU.list()

        [cpuList:cpuList]
    }

    def delete(){

        def cpuInstance = CPU.findById(params.id as long)

        def messageType = [:];

        cpuInstance.delete(flush: true)

        messageType["message"] = "success"


        render(messageType as JSON)

    }

    def edit(){

        def cpuInstance = CPU.get(params.id as long)

        render(cpuInstance as JSON);
    }

    def update(){

        CommonsMultipartFile formFile = request.getFile('files')
        final String fileName = formFile.getOriginalFilename()
        params.myFile = formFile
        params.files = fileName

        def cpuInstance = CPU.findById(params.id as long);

        cpuInstance.properties = params;

        println(params);

        cpuInstance.save(flush: true);
        fileUpload(params)
        redirect(action: 'list');
    }
}
