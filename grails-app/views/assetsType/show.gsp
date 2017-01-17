
<%@ page import="itims.AssetsType" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'assetsType.label', default: 'AssetsType')}" />
		<title><g:message code="default.show.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#show-assetsType" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="list" action="index"><g:message code="default.list.label" args="[entityName]" /></g:link></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="show-assetsType" class="content scaffold-show" role="main">
			<h1><g:message code="default.show.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<ol class="property-list assetsType">
			
				<g:if test="${assetsTypeInstance?.assetsName}">
				<li class="fieldcontain">
					<span id="assetsName-label" class="property-label"><g:message code="assetsType.assetsName.label" default="Assets Name" /></span>
					
						<span class="property-value" aria-labelledby="assetsName-label"><g:fieldValue bean="${assetsTypeInstance}" field="assetsName"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${assetsTypeInstance?.fieldInfo}">
				<li class="fieldcontain">
					<span id="fieldInfo-label" class="property-label"><g:message code="assetsType.fieldInfo.label" default="Field Info" /></span>
					
						<span class="property-value" aria-labelledby="fieldInfo-label"><g:link controller="fieldInfo" action="show" id="${assetsTypeInstance?.fieldInfo?.id}">${assetsTypeInstance?.fieldInfo?.encodeAsHTML()}</g:link></span>
					
				</li>
				</g:if>
			
			</ol>
			<g:form url="[resource:assetsTypeInstance, action:'delete']" method="DELETE">
				<fieldset class="buttons">
					<g:link class="edit" action="edit" resource="${assetsTypeInstance}"><g:message code="default.button.edit.label" default="Edit" /></g:link>
					<g:actionSubmit class="delete" action="delete" value="${message(code: 'default.button.delete.label', default: 'Delete')}" onclick="return confirm('${message(code: 'default.button.delete.confirm.message', default: 'Are you sure?')}');" />
				</fieldset>
			</g:form>
		</div>
	</body>
</html>
