<%--
  Created by IntelliJ IDEA.
  User: Suryaraj
  Date: 7/22/2016
  Time: 1:17 PM
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>CPU</title>
    <link href="${resource(dir: 'media/css',file: 'jquery.dataTables.min.css')}" rel="stylesheet"  type="text/css">
    <link href="${resource(dir: 'bootstrap/css',file: 'bootstrap.min.css')}" rel="stylesheet"  type="text/css">
    <script src="${resource(dir: 'media/js',file: 'jquery.js')}" type="text/javascript"></script>
    <script src="${resource(dir: 'media/js',file: 'jquery.dataTables.min.js')}" type="text/javascript"></script>
    <script src="${resource(dir: 'bootstrap/js',file: 'bootstrap.min.js')}" type="text/javascript"></script>
</head>

<body>
%{----}%
%{--<g:link controller="assetsType" action="CPU"><button>New CPU</button></g:link>--}%
%{--<g:link controller="monitor" action="list"><button>New Monitor</button></g:link>--}%
%{--<g:link controller="laptop" action="list"><button>New Laptop</button></g:link>--}%
<sec:ifAllGranted roles="ROLE_ADMIN">
    <button class="btn btn-primary pull-left" onclick="addCPU()">Add CPU</button>
</sec:ifAllGranted>

<div style="overflow-x: scroll; margin-left: 2%;width: 1445px;">

    <table id="cpu-table" class="display">
        <thead>
        <tr>
            <th>Date Of Purchase</th>
            <th>Invoice No.</th>
            <th>Price</th>
            <th>CPU Name</th>
            <th>Serial No.</th>
            <th>Pin No.</th>
            <th>Username</th>
            <th>Model</th>
            <th>Assets ID</th>
            <th>Status</th>
            <th>OS</th>
            <th>Processor</th>
            <th>RAM</th>
            <th>MAC Address</th>
            <th>HIPAA-23 Compliant</th>
            <th>Files</th>
            <th>Remarks</th>

        </tr>
        </thead>

        <tbody>
        <g:each in="${cpuList}" var="cpu">

            <tr onclick="update(${cpu.id})">
                <td>${cpu.dateOfPurchase}</td>
                <td>${cpu.invoiceNo}</td>
                <td>${cpu.price}</td>
                <td>${cpu.cpuName}</td>
                <td>${cpu.serialNo}</td>
                <td>${cpu.pinNo}</td>
                <td>${cpu.username}</td>
                <td>${cpu.model}</td>
                <td>${cpu.assetsID}</td>
                <td>${cpu.status}</td>
                <td>${cpu.os}</td>
                <td>${cpu.processor}</td>
                <td>${cpu.ram}</td>
                <td>${cpu.macAddress}</td>
                <td>${cpu.hipaa23Compliant}</td>
                <td>${cpu.files}</td>
                <td>${cpu.remarks}</td>
            </tr>
        </g:each>
        </tbody>

    </table>

</div>
<div style="display: none;height: 100px;margin-left: 2%;margin-top: 2%" id="update" >
    <button class="btn btn-primary" id="edit" onclick="editFunction()">Edit</button>
    <button class="btn btn-danger" id="delete" onclick="deleteFunction()">Delete</button>
</div>

<div id="insert-CPU" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog" style="width: 90%" >

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Add New CPU</h4>
            </div>

            <div class="modal-body" style="height: 470px">

                <g:form id="cpu-form" controller="CPU" action="save" enctype="multipart/form-data">

                    <div class="form-group col-sm-3">
                        <label for="dateOfPurchase" class="col-sm-6 control-label">Date of Purchase</label>
                        <div class="col-sm-6">
                            <input type="date"  class="form-control" id="dateOfPurchase" name="dateOfPurchase">
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="invoiceNo" class="col-sm-6 control-label">Invoice No</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="invoiceNo" name="invoiceNo"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="price" class="col-sm-6 control-label">Price</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="price" name="price"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="cpuName" class="col-sm-6 control-label">CPU Name</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="cpuName" name="cpuName"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="serialNo" class="col-sm-6 control-label">Serial No</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="serialNo" name="serialNo"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="pinNo" class="col-sm-6 control-label">Pin No</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="pinNo" name="pinNo"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="username" class="col-sm-6 control-label">Username</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="username" name="username"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="model" class="col-sm-6 control-label">Model</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="model" name="model"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="assetsID" class="col-sm-6 control-label">Assets ID</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="assetsID" name="assetsID"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="status" class="col-sm-6 control-label">Status</label>
                        <div class="col-sm-6">
                            <select name="status" id="status" class="form-control">
                                <option value="select">Select</option>
                                <option value="working">Working</option>
                                <option value="notWorking">Not Working</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="os" class="col-sm-6 control-label">OS</label>
                        <div class="col-sm-6">
                            <select name="os" id="os" class="form-control">
                                <option value="select">Select</option>
                                <option value="windowsXP">WindowsXP</option>
                                <option value="windows7">Windows7</option>
                                <option value="ubuntu">Ubuntu</option>
                                <option value="centOS">CentOS</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="processor" class="col-sm-6 control-label">Processor</label>
                        <div class="col-sm-6">
                            <select name="processor" id="processor" class="form-control">
                                <option value="select">Select</option>
                                <option value="pentiumCore">PentiumCore</option>
                                <option value="i3">i3</option>
                                <option value="i5">i5</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="ram" class="col-sm-6 control-label">RAM</label>
                        <div class="col-sm-6">
                            <select name="ram" id="ram" class="form-control">
                                <option value="select">Select</option>
                                <option value="ddr2">DDR2</option>
                                <option value="ddr3">DDR3</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="macAddress" class="col-sm-6 control-label">MAC Address</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="macAddress" name="macAddress"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="hipaa23Compliant" class="col-sm-6 control-label">HIPAA-23 Compliant</label>
                        <div class="col-sm-6">
                            <select name="hipaa23Compliant" id="hipaa23Compliant" class="form-control">
                                <option value="select">Select</option>
                                <option value="compliant">Compliant</option>
                                <option value="nonCompliant">Non-Compliant</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="files" class="col-sm-6 control-label">Files</label>
                        <div class="col-sm-6">
                            <input type="file" class="form-control" id="files" name="files"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="remarks" class="col-sm-6 control-label">Remarks</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="remarks" name="remarks"/>
                        </div>
                    </div>

                    <br>
                    <div class="form-group col-sm-3 pull-right">
                        <label  class="col-sm-6 control-label"></label>

                        <div class="col-sm-6">
                            <input type="submit" value="Save" class="btn btn-primary">
                        </div>

                    </div>
                </g:form>
            </div>
        </div>

    </div>
</div>

<div id="update-CPU" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog" style="width: 90%" >

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Add New CPU</h4>
            </div>

            <div class="modal-body" style="height: 470px">

                <g:form id="cpu-form" controller="CPU" action="update" enctype="multipart/form-data">

                    <input type="hidden" id="cpu_id" name="cpu_id">
                    <div class="form-group col-sm-3">
                        <label for="dateOfPurchase" class="col-sm-6 control-label">Date of Purchase</label>
                        <div class="col-sm-6">
                            <input type="date"  class="form-control" id="dateOfPurchaseU" name="dateOfPurchase">
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="invoiceNo" class="col-sm-6 control-label">Invoice No</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="invoiceNoU" name="invoiceNo"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="price" class="col-sm-6 control-label">Price</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="priceU" name="price"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="cpuName" class="col-sm-6 control-label">CPU Name</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="cpuNameU" name="cpuName"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="serialNo" class="col-sm-6 control-label">Serial No</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="serialNoU" name="serialNo"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="pinNo" class="col-sm-6 control-label">Pin No</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="pinNoU" name="pinNo"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="username" class="col-sm-6 control-label">Username</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="usernameU" name="username"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="model" class="col-sm-6 control-label">Model</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="modelU" name="model"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="assetsID" class="col-sm-6 control-label">Assets ID</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="assetsIDU" name="assetsID"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="status" class="col-sm-6 control-label">Status</label>
                        <div class="col-sm-6">
                            <select name="status" id="statusU" class="form-control">
                                <option value="select">Select</option>
                                <option value="working">Working</option>
                                <option value="notWorking">Not Working</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="os" class="col-sm-6 control-label">OS</label>
                        <div class="col-sm-6">
                            <select name="os" id="osU" class="form-control">
                                <option value="select">Select</option>
                                <option value="windowsXP">WindowsXP</option>
                                <option value="windows7">Windows7</option>
                                <option value="ubuntu">Ubuntu</option>
                                <option value="centOS">CentOS</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="processor" class="col-sm-6 control-label">Processor</label>
                        <div class="col-sm-6">
                            <select name="processor" id="processorU" class="form-control">
                                <option value="select">Select</option>
                                <option value="pentiumCore">PentiumCore</option>
                                <option value="i3">i3</option>
                                <option value="i5">i5</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="ram" class="col-sm-6 control-label">RAM</label>
                        <div class="col-sm-6">
                            <select name="ram" id="ramU" class="form-control">
                                <option value="select">Select</option>
                                <option value="ddr2">DDR2</option>
                                <option value="ddr3">DDR3</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="files" class="col-sm-6 control-label">Files</label>
                        <div class="col-sm-6">
                            <input type="file" class="form-control" id="files" name="files"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="macAddress" class="col-sm-6 control-label">MAC Address</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="macAddressU" name="macAddress"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="hipaa23Compliant" class="col-sm-6 control-label">HIPAA-23 Compliant</label>
                        <div class="col-sm-6">
                            <select name="hipaa23Compliant" id="hipaa23CompliantU" class="form-control">
                                <option value="select">Select</option>
                                <option value="compliant">Compliant</option>
                                <option value="nonCompliant">Non-Compliant</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="remarks" class="col-sm-6 control-label">Remarks</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="remarksU" name="remarks"/>
                        </div>
                    </div>

                    <br>
                    <div class="form-group col-sm-3 pull-right">
                        <label  class="col-sm-6 control-label"></label>

                        <div class="col-sm-6">
                            <input type="submit" value="Save" class="btn btn-primary">
                        </div>

                    </div>
                </g:form>
            </div>
        </div>

    </div>
</div>

<script>
    $(document).ready(function(){
        $('#cpu-table').DataTable();
    })

    function addCPU(){

        $('#insert-CPU').modal();
    }

    function update(id){
        document.getElementById("update").style.display = "block";

        $("#delete").attr("value",id)
    }

    function deleteFunction(){
        var id = document.getElementById("delete").value;

        $.ajax({
            type: 'post',
            url: "${createLink(controller: 'CPU',action: 'delete')}",
            data:"id="+id,
            success: function (data) {

                if(data.message=="success"){
                    alert('Successfully Deleted');

                    location.reload();
                }
            },
            error:function(err){
                alert("Error"+err);
            }
        });

    }

    function editFunction(){

        var id = document.getElementById("delete").value;

        $.ajax({
            type: 'post',
            url: "${createLink(controller: 'CPU',action: 'edit')}",
            data:"id="+id,
            success: function (data) {

                $('#dateOfPurchaseU').val(data.dateOfPurchase);
                $('#invoiceNoU').val(data.invoiceNo);
                $('#priceU').val(data.price);
                $('#cpuNameU').val(data.cpuName);
                $('#serialNoU').val(data.serialNo);
                $('#pinNoU').val(data.pinNo);
                $('#usernameU').val(data.username);
                $('#modelU').val(data.model);
                $('#assetsIDU').val(data.assetsID);
                $('#statusU').val(data.status);
                $('#osU').val(data.os);
                $('#processorU').val(data.processor);
                $('#ramU').val(data.ram);
                $('#macAddressU').val(data.macAddress);
                $('#hipaa23CompliantU').val(data.hipaa23Compliant);
                $('#remarksU').val(data.remarks);

                $('#update-CPU').modal();
                $('#cpu_id').attr("value",data.id);
            },
            error:function(err){
                alert("Error"+err);
            }
        });
    }
</script>

<g:form controller="CPU" action="uploadCSV" enctype="multipart/form-data">
    <input type="file" name="csvFile" id="csvFile"/>
    <input type="submit" value="Upload"/>
</g:form>


</body>
</html>