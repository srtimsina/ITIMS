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

    <link href="${resource(dir: 'media/css',file: 'jquery.dataTables.min.css')}" rel="stylesheet"  type="text/css">
    <link href="${resource(dir: 'bootstrap/css',file: 'bootstrap.min.css')}" rel="stylesheet"  type="text/css">
    <script src="${resource(dir: 'media/js',file: 'jquery.js')}" type="text/javascript"></script>
    <script src="${resource(dir: 'media/js',file: 'jquery.dataTables.min.js')}" type="text/javascript"></script>
    <script src="${resource(dir: 'bootstrap/js',file: 'bootstrap.min.js')}" type="text/javascript"></script>

    <script type="text/javascript">
        function addCustomAsset(){
            $("#insert-customAsset").modal();
        }
    </script>
</head>

<body>
<button class="btn btn-primary" onclick="addCustomAsset()">Add ${assetName}</button>



<div style="overflow-x: scroll; margin-left: 2%;width: 1445px;">

    <table id="monitor-table" class="display">
        <thead>
        <tr>
            <g:each in="${assetType?.fieldInfo}" var="field">
                <th>${field?.fieldName?.toString()?.toUpperCase()}</th>
            </g:each>
        </tr>
        </thead>

        <tbody>
        <g:each in="${data}" var="d">
            <tr>
                <g:each in="${assetType?.fieldInfo}" var="field">
                    <td>${d[field?.fieldName]}</td>
                </g:each>
            </tr>
        </g:each>
        </tbody>
    </table>
</div>




<div id="insert-customAsset" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog" style="width: 90%" >

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Add New ${assetName}</h4>
            </div>

            <div class="modal-body" style="height: 470px">

                <g:form id="monitor-form" name="monitor-form" controller="assetsType" action="saveCustomAssetData" enctype="multipart/form-data">
                    <g:each in="${assetType?.fieldInfo}" var="fields">
                        <div class="form-group col-sm-3">
                            <label for="${fields?.fieldName}" class="col-sm-6 control-label">${fields?.fieldName?.toString().toUpperCase()}</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="${fields?.fieldName}" name="${fields?.fieldName}">
                            </div>
                        </div>
                    </g:each>
                    <input type="hidden" name="assetName" value="${assetName}"/>
                    <input type="submit" value="save"/>
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