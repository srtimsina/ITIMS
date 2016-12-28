import org.codehaus.groovy.grails.plugins.metadata.GrailsPlugin
import org.codehaus.groovy.grails.web.pages.GroovyPage
import org.codehaus.groovy.grails.web.taglib.*
import org.codehaus.groovy.grails.web.taglib.exceptions.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_ITIMS_networkSwitchnetworkSwitch_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/networkSwitch/networkSwitch.gsp" }
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
for( sInstance in (switchList) ) {
printHtmlPart(10)
expressionOut.print(sInstance.id)
printHtmlPart(11)
expressionOut.print(sInstance.dateOfPurchase)
printHtmlPart(12)
expressionOut.print(sInstance.invoiceNo)
printHtmlPart(12)
expressionOut.print(sInstance.price)
printHtmlPart(12)
expressionOut.print(sInstance.switchName)
printHtmlPart(12)
expressionOut.print(sInstance.serialNo)
printHtmlPart(12)
expressionOut.print(sInstance.pinNo)
printHtmlPart(12)
expressionOut.print(sInstance.location)
printHtmlPart(12)
expressionOut.print(sInstance.ipAddress)
printHtmlPart(12)
expressionOut.print(sInstance.model)
printHtmlPart(12)
expressionOut.print(sInstance.assetsID)
printHtmlPart(12)
expressionOut.print(sInstance.banner)
printHtmlPart(12)
expressionOut.print(sInstance.https)
printHtmlPart(12)
expressionOut.print(sInstance.status)
printHtmlPart(12)
expressionOut.print(sInstance.macAddress)
printHtmlPart(12)
expressionOut.print(sInstance.files)
printHtmlPart(12)
expressionOut.print(sInstance.remarks)
printHtmlPart(13)
}
printHtmlPart(14)
createClosureForHtmlPart(15, 2)
invokeTag('form','g',216,['id':("switch-form"),'controller':("networkSwitch"),'action':("save"),'enctype':("multipart/form-data")],2)
printHtmlPart(16)
expressionOut.print(createLink(controller: 'networkSwitch',action: 'delete'))
printHtmlPart(17)
expressionOut.print(createLink(controller: 'networkSwitch',action: 'edit'))
printHtmlPart(18)
createClosureForHtmlPart(19, 2)
invokeTag('form','g',303,['controller':("networkSwitch"),'action':("uploadCSV"),'enctype':("multipart/form-data")],2)
printHtmlPart(0)
})
invokeTag('captureBody','sitemesh',303,[:],1)
printHtmlPart(20)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1482684077564L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
