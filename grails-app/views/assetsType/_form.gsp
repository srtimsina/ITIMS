<%@ page import="itims.FieldInfo; itims.AssetsType" %>



<div class="form-group">
	<label for="assetsName">
		<g:message code="assetsType.assetsName.label" default="Assets Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField class="form-control" name="assetsName" required="" value="${assetsTypeInstance?.assetsName}"/>

</div>

<div class="form-group">
	<label for="fieldInfo">
		<g:message code="assetsType.fieldInfo.label" default="Field Info" />
		<span class="required-indicator">*</span>
	</label>
	<g:select id="fieldInfo" multiple="multiple" name="fieldInfo"
			  from="${FieldInfo.list()}" optionKey="id" required="" optionValue="fieldName"
			  class="many-to-one form-control"/>
</div>

