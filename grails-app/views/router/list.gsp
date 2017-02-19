<%--
  Created by IntelliJ IDEA.
  User: Suryaraj
  Date: 12/8/2016
  Time: 10:40 PM
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Router</title>
</head>

<body>
<button class="btn btn-primary" onclick="addRouter()">Add Router</button>
<hr>
<div style="overflow-x: scroll;">

    <table id="router-table" class="display">
        <thead>
        <tr>
            <th>Date Of Purchase</th>
            <th>Invoice No.</th>
            <th>Price</th>
            <th>Router Name</th>
            <th>Serial No.</th>
            <th>Pin No.</th>
            <th>Location</th>
            <th>ipAddress</th>
            <th>Model</th>
            <th>Assets ID</th>
            <th>Banner</th>
            <th>Https</th>
            <th>Status</th>
            <th>MAC Address</th>
            <th>Files</th>
            <th>Remarks</th>

        </tr>
        </thead>

        <tbody>
        <g:each in="${routerList}" var="router">

            <tr onclick="update(${router.id})">
                <td>${router.dateOfPurchase}</td>
                <td>${router.invoiceNo}</td>
                <td>${router.price}</td>
                <td>${router.routerName}</td>
                <td>${router.serialNo}</td>
                <td>${router.pinNo}</td>
                <td>${router.location}</td>
                <td>${router.ipAddress}</td>
                <td>${router.model}</td>
                <td>${router.assetsID}</td>
                <td>${router.banner}</td>
                <td>${router.https}</td>
                <td>${router.status}</td>
                <td>${router.macAddress}</td>
                <td>${router.files}</td>
                <td>${router.remarks}</td>
            </tr>
        </g:each>
        </tbody>

    </table>

</div>

<div style="display: none;height: 100px;margin-left: 2%;margin-top: 2%" id="update">
    <button class="btn btn-primary" id="edit" onclick="editFunction()">Edit</button>
    <button class="btn btn-danger" id="delete" onclick="deleteFunction()">Delete</button>
</div>

<div id="insert-Router" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog" style="width: 90%">

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Add New Router</h4>
            </div>

            <div class="modal-body" style="height: 470px">

                <g:form id="router-form" controller="router" action="save" enctype="multipart/form-data">

                    <div class="form-group col-sm-3">
                        <label for="dateOfPurchase" class="col-sm-6 control-label">Date of Purchase</label>

                        <div class="col-sm-6">
                            <input type="date" class="form-control" id="dateOfPurchase" name="dateOfPurchase">
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
                        <label for="routerName" class="col-sm-6 control-label">Router Name</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="routerName" name="routerName"/>
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
                        <label for="location" class="col-sm-6 control-label">Location</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="location" name="location"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="ipAddress" class="col-sm-6 control-label">ipAddress</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="ipAddress" name="ipAddress"/>
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
                        <label for="banner" class="col-sm-6 control-label">Banner</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="banner" name="banner"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="https" class="col-sm-6 control-label">Https</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="https" name="https"/>
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
                        <label for="macAddress" class="col-sm-6 control-label">MAC Address</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="macAddress" name="macAddress"/>
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


<div id="update-Router" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog" style="width: 90%">

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Add New Router</h4>
            </div>

            <div class="modal-body" style="height: 470px">

                <g:form id="router-form" controller="router" action="update" enctype="multipart/form-data">

                    <input type="hidden" name="router_id" id="router_id">

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
                        <label for="routerName" class="col-sm-6 control-label">Router Name</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="routerNameU" name="routerName"/>
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
                        <label for="location" class="col-sm-6 control-label">Location</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="locationU" name="location"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="ipAddress" class="col-sm-6 control-label">ipAddress</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="ipAddressU" name="ipAddress"/>
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
                        <label for="banner" class="col-sm-6 control-label">Banner</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="bannerU" name="banner"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="https" class="col-sm-6 control-label">Https</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="httpsU" name="https"/>
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
                        <label for="macAddress" class="col-sm-6 control-label">MAC Address</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="macAddressU" name="macAddress"/>
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
    $(document).ready(function () {
        $('#router-table').DataTable();
    })

    function addRouter() {

        $('#insert-Router').modal();
    }

    function update(id) {
        document.getElementById("update").style.display = "block";

        $("#delete").attr("value", id)
    }

    function deleteFunction() {
        var id = document.getElementById("delete").value;

        $.ajax({
            type: 'post',
            url: "${createLink(controller: 'assetsType',action: 'delete')}",
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
            url: "${createLink(controller: 'router',action: 'edit')}",
            data: "id=" + id,
            success: function (data) {

                alert
                $('#dateOfPurchaseU').val(data.dateOfPurchase);
                $('#invoiceNoU').val(data.invoiceNo);
                $('#priceU').val(data.price);
                $('#routerNameU').val(data.routerName);
                $('#serialNoU').val(data.serialNo);
                $('#pinNoU').val(data.pinNo);
                $('#locationU').val(data.location);
                $('#ipAddressU').val(data.ipAddress);
                $('#modelU').val(data.model);
                $('#assetsIDU').val(data.assetsID);
                $('#bannerU').val(data.banner);
                $('#httpsU').val(data.https);
                $('#statusU').val(data.status);
                $('#macAddressU').val(data.macAddress);
                $('#remarksU').val(data.remarks);

                $('#update-Router').modal();
                $('#router_id').attr("value", data.id);
            },
            error: function (err) {
                alert("Error" + err);
            }
        });
    }
</script>

<g:form controller="router" action="uploadCSV" enctype="multipart/form-data">
    <input type="file" name="csvFile" id="csvFile"/>
    <input type="submit" value="Upload"/>
</g:form>

</body>
</html>