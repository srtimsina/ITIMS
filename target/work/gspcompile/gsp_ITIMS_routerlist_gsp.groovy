import org.codehaus.groovy.grails.plugins.metadata.GrailsPlugin
import org.codehaus.groovy.grails.web.pages.GroovyPage
import org.codehaus.groovy.grails.web.taglib.*
import org.codehaus.groovy.grails.web.taglib.exceptions.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_ITIMS_routerlist_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/router/list.gsp" }
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
for( router in (routerList) ) {
printHtmlPart(10)
expressionOut.print(router.id)
printHtmlPart(11)
expressionOut.print(router.dateOfPurchase)
printHtmlPart(12)
expressionOut.print(router.invoiceNo)
printHtmlPart(12)
expressionOut.print(router.price)
printHtmlPart(12)
expressionOut.print(router.routerName)
printHtmlPart(12)
expressionOut.print(router.serialNo)
printHtmlPart(12)
expressionOut.print(router.pinNo)
printHtmlPart(12)
expressionOut.print(router.location)
printHtmlPart(12)
expressionOut.print(router.ipAddress)
printHtmlPart(12)
expressionOut.print(router.model)
printHtmlPart(12)
expressionOut.print(router.assetsID)
printHtmlPart(12)
expressionOut.print(router.banner)
printHtmlPart(12)
expressionOut.print(router.https)
printHtmlPart(12)
expressionOut.print(router.status)
printHtmlPart(12)
expressionOut.print(router.macAddress)
printHtmlPart(12)
expressionOut.print(router.files)
printHtmlPart(12)
expressionOut.print(router.remarks)
printHtmlPart(13)
}
printHtmlPart(14)
createClosureForHtmlPart(15, 2)
invokeTag('form','g',233,['id':("router-form"),'controller':("router"),'action':("save"),'enctype':("multipart/form-data")],2)
printHtmlPart(16)
createClosureForHtmlPart(17, 2)
invokeTag('form','g',399,['id':("router-form"),'controller':("router"),'action':("update"),'enctype':("multipart/form-data")],2)
printHtmlPart(18)
expressionOut.print(createLink(controller: 'assetsType',action: 'delete'))
printHtmlPart(19)
expressionOut.print(createLink(controller: 'router',action: 'edit'))
printHtmlPart(20)
createClosureForHtmlPart(21, 2)
invokeTag('form','g',485,['controller':("router"),'action':("uploadCSV"),'enctype':("multipart/form-data")],2)
printHtmlPart(0)
})
invokeTag('captureBody','sitemesh',485,[:],1)
printHtmlPart(22)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1482684077938L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
