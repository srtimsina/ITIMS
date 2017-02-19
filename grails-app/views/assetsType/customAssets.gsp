<%--
  Created by IntelliJ IDEA.
  User: iam
  Date: 1/18/17
  Time: 8:12 AM
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Custom Assets</title>
    <meta name="layout" content="main">

    <script type="text/javascript">
        function addCustomAsset(){
            $("#insert-customAsset").modal();
        }
    </script>
</head>

<body>
<button class="btn btn-primary" onclick="addCustomAsset()">Add ${assetName}</button>
<hr>
<div style="overflow-x: scroll;">

    <table id="monitor-table" class="display table-bordered">
        <thead>
        <tr>
            <g:each in="${assetType?.fieldInfo}" var="field">
                <th>${field?.fieldName?.toString()?.toUpperCase()}</th>
            </g:each>
            <th>Action</th>
        </tr>
        </thead>

        <tbody>
        <g:each in="${data}" var="d" status="i">
            <tr>
                <%
                    boolean  shouldShow = false
                %>
                <g:each in="${assetType?.fieldInfo}" var="field">
                    <%
                        String value = d[field?.fieldName]
                    %>
                    <td>
                    <g:if test="${value}">
                        ${value}
                        <%
                            shouldShow = true
                        %>
                    </g:if>
                    <g:else>
                        </td>
                    </g:else>
                </g:each>
                <g:if test="${shouldShow}">
                    <td>
                        <g:form controller="assetsType" action="editAssetData" style="display: inline-block">
                            <g:each in="${assetDataId?.get(i)}" var="eachAssetId">
                                <input type="hidden" name="assetsId" value="${eachAssetId}"/>
                            </g:each>
                            <input type="hidden" name="assetName" value="${assetName}"/>
                            <input type="submit" value="Edit" class="btn btn-primary"/>
                        </g:form>
                        <g:form controller="assetsType" action="deleteAssetData" style="display: inline-block">
                            <g:each in="${assetDataId?.get(i)}" var="eachAssetId">
                                <input type="hidden" name="assetsId" value="${eachAssetId}"/>
                            </g:each>
                            <input type="hidden" name="assetName" value="${assetName}"/>
                            <input type="submit" value="Delete" class="btn btn-primary"/>
                        </g:form>
                    </td>
                </g:if>
            </tr>
        </g:each>
        </tbody>
    </table>
</div>




<div id="insert-customAsset" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog" style="width: 60%" >

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Add New ${assetName}</h4>
            </div>

            <div class="modal-body" style="height: 470px">
                <g:form class="form-horizontal col-md-9" id="monitor-form" name="monitor-form" controller="assetsType" action="saveCustomAssetData" enctype="multipart/form-data">
                    <g:each in="${assetType?.fieldInfo}" var="fields">
                        <div class="form-group">
                            <label for="${fields?.fieldName}">${fields?.fieldName?.toString().toUpperCase()}</label>
                            <input type="text" class="form-control" id="${fields?.fieldName}" name="${fields?.fieldName}">
                        </div>
                    </g:each>
                    <input type="hidden" name="assetName" value="${assetName}"/>
                    <div class="form-group">
                        <input type="submit" value="save" class="btn btn-primary"/>
                    </div>
                </g:form>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(document).ready(function(){
        $(document).ready(function(){
            $('#monitor-table').DataTable();
        })
    })
</script>
</body>
</html>