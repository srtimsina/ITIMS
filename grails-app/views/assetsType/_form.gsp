<%@ page import="itims.FieldInfo; itims.AssetsType" %>



<div class="fieldcontain ${hasErrors(bean: assetsTypeInstance, field: 'assetsName', 'error')} required">
	<label for="assetsName">
		<g:message code="assetsType.assetsName.label" default="Assets Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="assetsName" required="" value="${assetsTypeInstance?.assetsName}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: assetsTypeInstance, field: 'fieldInfo', 'error')} required">
	<label for="fieldInfo">
		<g:message code="assetsType.fieldInfo.label" default="Field Info" />
		<span class="required-indicator">*</span>
	</label>
	<g:select id="fieldInfo" multiple="multiple" name="fieldInfo" from="${FieldInfo.list()}" optionKey="id" required="" optionValue="fieldName" class="many-to-one"/>

</div>

