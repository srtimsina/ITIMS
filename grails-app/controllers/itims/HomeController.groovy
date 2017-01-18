package itims

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured

@Secured('permitAll')
class HomeController {

    def springSecurityService;

    def index() {

        if (springSecurityService.isLoggedIn()) {
            render view: '/home/home'
        } else {
            redirect(controller: 'login', action: 'auth')
        }
    }

    def select() {

        def assetType = params.assetType;
        def redirectResource = [:]

        if (assetType == 'CPU') {
            redirectResource['controller'] = 'assetsType'
        } else if (assetType == 'monitor') {
            redirectResource['controller'] = 'monitor'
        } else if (assetType == 'laptop') {
            redirectResource['controller'] = 'laptop'
        } else if (assetType == 'networkSwitch') {
            redirectResource['controller'] = 'networkSwitch'
        } else if (assetType == 'router') {
            redirectResource['controller'] = 'router'
        } else if (assetType == 'accessPoint') {
            redirectResource['controller'] = 'accessPoint'
        }else {
            redirectResource['controller'] = "customAssetType"
        }
        return render(redirectResource as JSON);
    }
}
