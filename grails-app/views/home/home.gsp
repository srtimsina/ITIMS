<%--
  Created by IntelliJ IDEA.
  User: Suryaraj
  Date: 11/7/2016
  Time: 8:39 AM
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>itims</title>
    <link href="${resource(dir: 'media/css',file: 'jquery.dataTables.min.css')}" rel="stylesheet"  type="text/css">
    <link href="${resource(dir: 'bootstrap/css',file: 'bootstrap.min.css')}" rel="stylesheet"  type="text/css">
    %{--<script src="${resource(dir: 'media/js',file: 'jquery.js')}" type="text/javascript"></script>--}%
    <script type="text/javascript" src="${resource(dir: 'js',file: 'jQuery-1.12.0.min.js')}"></script>
</head>

<body>

<div class="form-group col-sm-3">
    <label for="assetsType" class="col-sm-6 control-label">Assets Type</label>
    <div class="col-sm-6">

        <select name="assetsType" id="assetsType" class="form-control" onchange="functionSelect();">
            <option value="select">Select</option>
            <option value="CPU">CPU</option>
            <option value="monitor">Monitor</option>
            <option value="laptop">Laptop</option>
            <option value="networkSwitch">Network Switch</option>
            <option value="router">Router</option>
            <option value="accessPoint">Access Point</option>
        </select>
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
                        window.location.href = '<g:createLink controller='assetsType' action ='list'/>';
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