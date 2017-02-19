<%--
  Created by IntelliJ IDEA.
  User: Suryaraj
  Date: 11/2/2016
  Time: 10:01 PM
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Monitor</title>

</head>

<body>
%{--<g:link controller="monitor" action="Monitor"><button>New Monitor</button></g:link>--}%
<button class="btn btn-primary" onclick="addMonitor()">Add Monitor</button>
<hr>
<div style="overflow-x: scroll;">

    <table id="monitor-table" class="display">
    <thead>
    <tr>
        <th>Date Of Purchase</th>
        <th>Invoice No.</th>
        <th>Price</th>
        <th>Monitor Name</th>
        <th>Serial No.</th>
        <th>Pin No.</th>
        <th>Username</th>
        <th>Model</th>
        <th>Assets ID</th>
        <th>Status</th>
        <th>Vendor Name</th>
        <th>Files</th>
        <th>Remarks</th>

    </tr>
    </thead>

    <tbody>
    <g:each in="${monitorList}" var="monitor">
        <tr onclick="update(${monitor.id})">
            <td>${monitor.dateOfPurchase}</td>
            <td>${monitor.invoiceNo}</td>
            <td>${monitor.price}</td>
            <td>${monitor.monitorName}</td>
            <td>${monitor.serialNo}</td>
            <td>${monitor.pinNo}</td>
            <td>${monitor.username}</td>
            <td>${monitor.model}</td>
            <td>${monitor.assetsID}</td>
            <td>${monitor.status}</td>
            <td>${monitor.vendorName}</td>
            <td>${monitor.files}</td>
            <td>${monitor.remarks}</td>
        </tr>
    </g:each>
    </tbody>
</table>
</div>

<div style="display: none;height: 100px;margin-left: 2%;margin-top: 2%" id="update">
    <button class="btn btn-primary" id="edit" onclick="editFunction()">Edit</button>
    <button class="btn btn-danger" id="delete" onclick="deleteFunction()">Delete</button>
</div>

<div id="insert-monitor" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog" style="width: 90%" >

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Add New Monitor</h4>
            </div>

            <div class="modal-body" style="height: 470px">

                <g:form id="monitor-form" controller="monitor" action="save" enctype="multipart/form-data">

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
                        <label for="monitorName" class="col-sm-6 control-label">Monitor Name</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="monitorName" name="monitorName"/>
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
                        <label for="vendorName" class="col-sm-6 control-label">Vendor Name</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="vendorName" name="vendorName"/>
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

<div id="update-monitor" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog" style="width: 90%">

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Add New Monitor</h4>
            </div>

            <div class="modal-body" style="height: 470px">

                <g:form id="monitor-form" controller="monitor" action="update" enctype="multipart/form-data">

                    <input type="hidden" name="monitor_id" id="monitor_id">

                    <div class="form-group col-sm-3">
                        <label for="dateOfPurchase" class="col-sm-6 control-label">Date of Purchase</label>

                        <div class="col-sm-6">
                            <input type="date" class="form-control" id="dateOfPurchaseU" name="dateOfPurchase">
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
                        <label for="monitorName" class="col-sm-6 control-label">Monitor Name</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="monitorNameU" name="monitorName"/>
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
                        <label for="vendorName" class="col-sm-6 control-label">Vendor Name</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="vendorNameU" name="vendorName"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="files" class="col-sm-6 control-label">Files</label>

                        <div class="col-sm-6">
                            <input type="file" class="form-control" id="filesU" name="files"/>
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
                        <label class="col-sm-6 control-label"></label>

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
        $('#monitor-table').DataTable();
    })

    function addMonitor(){

        $('#insert-monitor').modal();
    }

    function update(id) {
        document.getElementById("update").style.display = "block";

        $("#delete").attr("value", id)
    }

    function deleteFunction() {
        var id = document.getElementById("delete").value;

        $.ajax({
            type: 'post',
            url: "${createLink(controller: 'monitor',action: 'delete')}",
            data: "id=" + id,
            success: function (data) {

                if (data.message == "success") {
                    alert('Successfully Deleted');

                    location.reload();
                }
            },
            error: function (err) {
                alert("Error" + err);
            }
        });

    }

    function editFunction() {
        var id = document.getElementById("delete").value;

        $.ajax({
            type: 'post',
            url: "${createLink(controller: 'monitor',action: 'edit')}",
            data: "id=" + id,
            success: function (data) {
                $('#dateOfPurchaseU').val(data.dateOfPurchase);
                $('#invoiceNoU').val(data.invoiceNo);
                $('#priceU').val(data.price);
                $('#monitorNameU').val(data.monitorName);
                $('#serialNoU').val(data.serialNo);
                $('#pinNoU').val(data.pinNo);
                $('#usernameU').val(data.username);
                $('#modelU').val(data.model);
                $('#assetsIDU').val(data.assetsID);
                $('#statusU').val(data.status);
                $('#vendorNameU').val(data.vendorName);
                $('#remarksU').val(data.remarks);

                $('#update-monitor').modal();
                $('#monitor_id').attr("value", data.id);
            },
            error: function (err) {
                alert("Error" + err);
            }
        });
    }
</script>

<g:form controller="monitor" action="uploadCSV" enctype="multipart/form-data">
    <input type="file" name="csvFile" id="csvFile"/>
    <input type="submit" value="Upload"/>
</g:form>



</body>
</html>