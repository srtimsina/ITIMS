package itims

import grails.plugin.springsecurity.annotation.Secured

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
@Secured("ROLE_ADMIN")
class FieldInfoController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond FieldInfo.list(params), model:[fieldInfoInstanceCount: FieldInfo.count()]
    }

    def show(FieldInfo fieldInfoInstance) {
        respond fieldInfoInstance
    }

    def create() {
        respond new FieldInfo(params)
    }

    @Transactional
    def save(FieldInfo fieldInfoInstance) {
        if (fieldInfoInstance == null) {
            notFound()
            return
        }

        if (fieldInfoInstance.hasErrors()) {
            respond fieldInfoInstance.errors, view:'create'
            return
        }

        fieldInfoInstance.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'fieldInfo.label', default: 'FieldInfo'), fieldInfoInstance.id])
                redirect fieldInfoInstance
            }
            '*' { respond fieldInfoInstance, [status: CREATED] }
        }
    }

    def edit(FieldInfo fieldInfoInstance) {
        respond fieldInfoInstance
    }

    @Transactional
    def update(FieldInfo fieldInfoInstance) {
        if (fieldInfoInstance == null) {
            notFound()
            return
        }

        if (fieldInfoInstance.hasErrors()) {
            respond fieldInfoInstance.errors, view:'edit'
            return
        }

        fieldInfoInstance.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'FieldInfo.label', default: 'FieldInfo'), fieldInfoInstance.id])
                redirect fieldInfoInstance
            }
            '*'{ respond fieldInfoInstance, [status: OK] }
        }
    }

    @Transactional
    def delete(FieldInfo fieldInfoInstance) {

        if (fieldInfoInstance == null) {
            notFound()
            return
        }

        fieldInfoInstance.delete flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'FieldInfo.label', default: 'FieldInfo'), fieldInfoInstance.id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'fieldInfo.label', default: 'FieldInfo'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }
}
