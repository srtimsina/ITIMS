<%--
  Created by IntelliJ IDEA.
  User: iam
  Date: 2/19/17
  Time: 11:13 PM
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Edit Assets Data</title>
    <meta name="layout" content="main">
</head>

<body>
<div class="row">
    <div class="col-md-6">
        <g:form id="monitor-form" name="monitor-form" controller="assetsType" action="updateCustomAssetData"
                enctype="multipart/form-data">
            <g:each in="${assetsDataList}" var="assetsData">
                <div class="form-group">
                    <label for="${assetsData?.id}" class="col-sm-6 control-label">${assetsData?.assetsType?.fieldInfo?.fieldName?.toUpperCase()}</label>
                    <input type="text" class="form-control"
                           id="${assetsData?.id}"
                           name="${assetsData?.id}"
                           value="${assetsData?.fieldValue}">

                </div>
                <input type="hidden" name="assetsId" value="${assetsData?.id}"/>
            </g:each>
            <input type="hidden" name="assetName" value="${assetName}"/>
            <div class="form-group">
                <input type="submit" value="Update" class="btn btn-primary"/>
            </div>
        </g:form>
    </div>
</div>
</body>
</html>