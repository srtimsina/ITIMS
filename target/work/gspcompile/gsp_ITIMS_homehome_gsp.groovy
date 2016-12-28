import org.codehaus.groovy.grails.plugins.metadata.GrailsPlugin
import org.codehaus.groovy.grails.web.pages.GroovyPage
import org.codehaus.groovy.grails.web.taglib.*
import org.codehaus.groovy.grails.web.taglib.exceptions.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_ITIMS_homehome_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/home/home.gsp" }
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
expressionOut.print(resource(dir: 'js',file: 'jQuery-1.12.0.min.js'))
printHtmlPart(7)
})
invokeTag('captureHead','sitemesh',15,[:],1)
printHtmlPart(0)
createTagBody(1, {->
printHtmlPart(8)
expressionOut.print(createLink(controller: 'home',action: 'select'))
printHtmlPart(9)
invokeTag('createLink','g',52,['controller':("assetsType"),'action':("list")],-1)
printHtmlPart(10)
invokeTag('createLink','g',55,['controller':("monitor"),'action':("list")],-1)
printHtmlPart(11)
invokeTag('createLink','g',58,['controller':("laptop"),'action':("list")],-1)
printHtmlPart(12)
invokeTag('createLink','g',62,['controller':("networkSwitch"),'action':("networkSwitch")],-1)
printHtmlPart(13)
invokeTag('createLink','g',64,['controller':("router"),'action':("list")],-1)
printHtmlPart(14)
invokeTag('createLink','g',67,['controller':("accessPoint"),'action':("list")],-1)
printHtmlPart(15)
})
invokeTag('captureBody','sitemesh',74,[:],1)
printHtmlPart(16)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1482684077066L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
