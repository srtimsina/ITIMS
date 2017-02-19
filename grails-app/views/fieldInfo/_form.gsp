<%@ page import="itims.FieldInfo" %>



<div class="fieldcontain ${hasErrors(bean: fieldInfoInstance, field: 'fieldName', 'error')} required">
	<label for="fieldName">
		<g:message code="fieldInfo.fieldName.label" default="Field Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="fieldName" required="" value="${fieldInfoInstance?.fieldName}"/>

</div>

