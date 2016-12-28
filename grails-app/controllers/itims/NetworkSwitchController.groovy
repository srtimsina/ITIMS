package itims

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured
import org.springframework.web.multipart.commons.CommonsMultipartFile

@Secured('permitAll')
class NetworkSwitchController {

    def springSecurityService

    def index() {
        if (springSecurityService.isLoggedIn()) {
            redirect(action: 'list')
        } else {
            redirect(controller: 'login', action: 'auth')
        }
    }

    def Switch() {

    }

    def save() {
        println(params)

        CommonsMultipartFile formFile = request.getFile('files')
        final String fileName = formFile.getOriginalFilename()
        params.myFile = formFile
        params.files = fileName

        def switchInstance = new NetworkSwitch(params)

        if (switchInstance.save(flush: true)) {
            fileUpload(params)
            redirect(action: 'networkSwitch')
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
        redirect(action: 'networkSwitch')
    }

    def networkSwitch() {
        def switchList = NetworkSwitch.list()

        [switchList: switchList]
    }

    def delete() {
        def switchInstance = NetworkSwitch.findById(params.id as long)

        def messageType = [:];

        switchInstance.delete(flush: true)

        messageType["message"] = "success"


        render(messageType as JSON)

    }
}
