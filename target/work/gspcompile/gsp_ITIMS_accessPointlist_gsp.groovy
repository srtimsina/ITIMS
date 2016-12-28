import org.codehaus.groovy.grails.plugins.metadata.GrailsPlugin
import org.codehaus.groovy.grails.web.pages.GroovyPage
import org.codehaus.groovy.grails.web.taglib.*
import org.codehaus.groovy.grails.web.taglib.exceptions.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_ITIMS_accessPointlist_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/accessPoint/list.gsp" }
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
invokeTag('wrapTitleTag','sitemesh',12,[:],2)
printHtmlPart(4)
expressionOut.print(resource(dir: 'media/css', file: 'jquery.dataTables.min.css'))
printHtmlPart(5)
expressionOut.print(resource(dir: 'bootstrap/css', file: 'bootstrap.min.css'))
printHtmlPart(6)
expressionOut.print(resource(dir: 'media/js', file: 'jquery.js'))
printHtmlPart(7)
expressionOut.print(resource(dir: 'media/js', file: 'jquery.dataTables.min.js'))
printHtmlPart(7)
expressionOut.print(resource(dir: 'bootstrap/js', file: 'bootstrap.min.js'))
printHtmlPart(8)
})
invokeTag('captureHead','sitemesh',17,[:],1)
printHtmlPart(0)
createTagBody(1, {->
printHtmlPart(9)
for( accessPoint in (accessPointList) ) {
printHtmlPart(10)
expressionOut.print(accessPoint.id)
printHtmlPart(11)
expressionOut.print(accessPoint.dateOfPurchase)
printHtmlPart(12)
expressionOut.print(accessPoint.invoiceNo)
printHtmlPart(12)
expressionOut.print(accessPoint.price)
printHtmlPart(12)
expressionOut.print(accessPoint.accessPointName)
printHtmlPart(12)
expressionOut.print(accessPoint.serialNo)
printHtmlPart(12)
expressionOut.print(accessPoint.pinNo)
printHtmlPart(12)
expressionOut.print(accessPoint.location)
printHtmlPart(12)
expressionOut.print(accessPoint.ipAddress)
printHtmlPart(12)
expressionOut.print(accessPoint.model)
printHtmlPart(12)
expressionOut.print(accessPoint.assetsID)
printHtmlPart(12)
expressionOut.print(accessPoint.status)
printHtmlPart(12)
expressionOut.print(accessPoint.macAddress)
printHtmlPart(12)
expressionOut.print(accessPoint.files)
printHtmlPart(12)
expressionOut.print(accessPoint.remarks)
printHtmlPart(13)
}
printHtmlPart(14)
createClosureForHtmlPart(15, 2)
invokeTag('form','g',212,['id':("accessPoint-form"),'controller':("accessPoint"),'action':("save"),'enctype':("multipart/form-data")],2)
printHtmlPart(16)
createClosureForHtmlPart(17, 2)
invokeTag('form','g',362,['id':("accessPoint-form"),'controller':("accessPoint"),'action':("update"),'enctype':("multipart/form-data")],2)
printHtmlPart(18)
expressionOut.print(createLink(controller: 'accessPoint',action: 'delete'))
printHtmlPart(19)
expressionOut.print(createLink(controller: 'accessPoint',action: 'edit'))
printHtmlPart(20)
createClosureForHtmlPart(21, 2)
invokeTag('form','g',446,['controller':("accessPoint"),'action':("uploadCSV"),'enctype':("multipart/form-data")],2)
printHtmlPart(0)
})
invokeTag('captureBody','sitemesh',446,[:],1)
printHtmlPart(22)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1482684077710L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
