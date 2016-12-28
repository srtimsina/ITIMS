import org.codehaus.groovy.grails.plugins.metadata.GrailsPlugin
import org.codehaus.groovy.grails.web.pages.GroovyPage
import org.codehaus.groovy.grails.web.taglib.*
import org.codehaus.groovy.grails.web.taglib.exceptions.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_ITIMS_monitorlist_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/monitor/list.gsp" }
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
invokeTag('captureHead','sitemesh',18,[:],1)
printHtmlPart(0)
createTagBody(1, {->
printHtmlPart(9)
for( monitor in (monitorList) ) {
printHtmlPart(10)
expressionOut.print(monitor.id)
printHtmlPart(11)
expressionOut.print(monitor.dateOfPurchase)
printHtmlPart(12)
expressionOut.print(monitor.invoiceNo)
printHtmlPart(12)
expressionOut.print(monitor.price)
printHtmlPart(12)
expressionOut.print(monitor.monitorName)
printHtmlPart(12)
expressionOut.print(monitor.serialNo)
printHtmlPart(12)
expressionOut.print(monitor.pinNo)
printHtmlPart(12)
expressionOut.print(monitor.username)
printHtmlPart(12)
expressionOut.print(monitor.model)
printHtmlPart(12)
expressionOut.print(monitor.assetsID)
printHtmlPart(12)
expressionOut.print(monitor.status)
printHtmlPart(12)
expressionOut.print(monitor.vendorName)
printHtmlPart(12)
expressionOut.print(monitor.files)
printHtmlPart(12)
expressionOut.print(monitor.remarks)
printHtmlPart(13)
}
printHtmlPart(14)
createClosureForHtmlPart(15, 2)
invokeTag('form','g',188,['id':("monitor-form"),'controller':("monitor"),'action':("save"),'enctype':("multipart/form-data")],2)
printHtmlPart(16)
createClosureForHtmlPart(17, 2)
invokeTag('form','g',330,['id':("monitor-form"),'controller':("monitor"),'action':("update"),'enctype':("multipart/form-data")],2)
printHtmlPart(18)
expressionOut.print(createLink(controller: 'monitor',action: 'delete'))
printHtmlPart(19)
expressionOut.print(createLink(controller: 'monitor',action: 'edit'))
printHtmlPart(20)
createClosureForHtmlPart(21, 2)
invokeTag('form','g',410,['controller':("monitor"),'action':("uploadCSV"),'enctype':("multipart/form-data")],2)
printHtmlPart(22)
})
invokeTag('captureBody','sitemesh',412,[:],1)
printHtmlPart(23)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1482684078230L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
