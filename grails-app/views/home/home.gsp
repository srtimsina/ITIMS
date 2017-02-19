<%--
  Created by IntelliJ IDEA.
  User: Suryaraj
  Date: 11/7/2016
  Time: 8:39 AM
--%>

<%@ page import="itims.AssetsType" contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>itims</title>
</head>

<body>

<div class="row">
    <div class="col-md-2">
        <g:link controller="assetsType" action="create" class="btn btn-info">Create Asset Type</g:link>
    </div>
    <div class="col-md-6">
        <div class="form-inline">
            <label for="assetsType" class="control-label">Assets Type</label>
            <select name="assetsType" id="assetsType" class="form-control" onchange="functionSelect();">
                <option value="select">Select</option>
                <option value="CPU">CPU</option>
                <option value="monitor">Monitor</option>
                <option value="laptop">Laptop</option>
                <option value="networkSwitch">Network Switch</option>
                <option value="router">Router</option>
                <option value="accessPoint">Access Point</option>
                <g:each in="${AssetsType.all.assetsName.unique()}" var="assetName">
                    <option value="${assetName}">${assetName}</option>
                </g:each>
            </select>
        </div>
    </div>
</div>

<script>

    function functionSelect(){

        var assetType = document.getElementById("assetsType");
        var value = assetType.options[assetType.selectedIndex].value;

        if(value){
            $.ajax({
                type: 'post',
                url: "${createLink(controller: 'home',action: 'select')}",
                data:"assetType="+value,
                success: function (data) {


                    var controllerName = data['controller'];

                    if(controllerName == 'assetsType'){
                        window.location.href = '<g:createLink controller='CPU' action ='list'/>';
                    }
                    else if(controllerName == 'monitor'){
                        window.location.href = '<g:createLink controller='monitor' action ='list'/>';
                    }
                    else if(controllerName == 'laptop'){
                        window.location.href = '<g:createLink controller='laptop' action ='list'/>';
                    }
                    else if(controllerName == 'networkSwitch'){
                        window.location.href = '<g:createLink controller='networkSwitch' action='networkSwitch'/>';
                    }
                    else if (controllerName == 'router') {
                        window.location.href = '<g:createLink controller='router' action='list'/>';
                    }
                    else if (controllerName == 'accessPoint') {
                        window.location.href = '<g:createLink controller='accessPoint' action='list'/>';
                    }
                    else if(controllerName == 'customAssetType'){
                        window.location.href = '/ITIMS/assetsType/customList?assetName='+value;
                    }

                },
                error:function(err){
                    alert("Error"+err);
                }
            });
        }

        else{
            alert("No Item Selected");
        }
    }
</script>
</body>
</html>