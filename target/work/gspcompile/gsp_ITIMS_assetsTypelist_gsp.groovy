import org.codehaus.groovy.grails.plugins.metadata.GrailsPlugin
import org.codehaus.groovy.grails.web.pages.GroovyPage
import org.codehaus.groovy.grails.web.taglib.*
import org.codehaus.groovy.grails.web.taglib.exceptions.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_ITIMS_assetsTypelist_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/assetsType/list.gsp" }
public Object run() {
Writer out = getOut()
Writer expressionOut = getExpressionOut()
registerSitemeshPreprocessMode()
printHtmlPart(0)
printHtmlPart(1)
createTagBody(1, {->
printHtmlPart(2)
invokeTag('captureMeta','sitemesh',10,['gsp_sm_xmlClosingForEmptyTag':("/"),'name':("layout"),'content':("main")],-1)
printHtmlPart(2)
createTagBody(2, {->
createClosureForHtmlPart(3, 3)
invokeTag('captureTitle','sitemesh',11,[:],3)
})
invokeTag('wrapTitleTag','sitemesh',11,[:],2)
printHtmlPart(4)
expressionOut.print(resource(dir: 'media/css',file: 'jquery.dataTables.min.css'))
printHtmlPart(5)
expressionOut.print(resource(dir: 'bootstrap/css',file: 'bootstrap.min.css'))
printHtmlPart(6)
expressionOut.print(resource(dir: 'media/js',file: 'jquery.js'))
printHtmlPart(7)
expressionOut.print(resource(dir: 'media/js',file: 'jquery.dataTables.min.js'))
printHtmlPart(7)
expressionOut.print(resource(dir: 'bootstrap/js',file: 'bootstrap.min.js'))
printHtmlPart(8)
})
invokeTag('captureHead','sitemesh',17,[:],1)
printHtmlPart(0)
createTagBody(1, {->
printHtmlPart(9)
createClosureForHtmlPart(10, 2)
invokeTag('ifAllGranted','sec',22,['roles':("ROLE_ADMIN")],2)
printHtmlPart(11)
for( cpu in (cpuList) ) {
printHtmlPart(12)
expressionOut.print(cpu.id)
printHtmlPart(13)
expressionOut.print(cpu.dateOfPurchase)
printHtmlPart(14)
expressionOut.print(cpu.invoiceNo)
printHtmlPart(14)
expressionOut.print(cpu.price)
printHtmlPart(14)
expressionOut.print(cpu.cpuName)
printHtmlPart(14)
expressionOut.print(cpu.serialNo)
printHtmlPart(14)
expressionOut.print(cpu.pinNo)
printHtmlPart(14)
expressionOut.print(cpu.username)
printHtmlPart(14)
expressionOut.print(cpu.model)
printHtmlPart(14)
expressionOut.print(cpu.assetsID)
printHtmlPart(14)
expressionOut.print(cpu.status)
printHtmlPart(14)
expressionOut.print(cpu.os)
printHtmlPart(14)
expressionOut.print(cpu.processor)
printHtmlPart(14)
expressionOut.print(cpu.ram)
printHtmlPart(14)
expressionOut.print(cpu.macAddress)
printHtmlPart(14)
expressionOut.print(cpu.hipaa23Compliant)
printHtmlPart(14)
expressionOut.print(cpu.files)
printHtmlPart(14)
expressionOut.print(cpu.remarks)
printHtmlPart(15)
}
printHtmlPart(16)
createClosureForHtmlPart(17, 2)
invokeTag('form','g',244,['id':("cpu-form"),'controller':("assetsType"),'action':("save"),'enctype':("multipart/form-data")],2)
printHtmlPart(18)
createClosureForHtmlPart(19, 2)
invokeTag('form','g',417,['id':("cpu-form"),'controller':("assetsType"),'action':("update"),'enctype':("multipart/form-data")],2)
printHtmlPart(20)
expressionOut.print(createLink(controller: 'assetsType',action: 'delete'))
printHtmlPart(21)
expressionOut.print(createLink(controller: 'assetsType',action: 'edit'))
printHtmlPart(22)
createClosureForHtmlPart(23, 2)
invokeTag('form','g',499,['controller':("assetsType"),'action':("uploadCSV"),'enctype':("multipart/form-data")],2)
printHtmlPart(24)
})
invokeTag('captureBody','sitemesh',499,[:],1)
printHtmlPart(25)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1482684078562L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
