<%--
  Created by IntelliJ IDEA.
  User: Suryaraj
  Date: 11/4/2016
  Time: 9:19 AM
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Laptop</title>
</head>

<body>
%{--<g:link controller="laptop" action="Laptop"><button>New Laptop</button></g:link>--}%
<button class="btn btn-primary" onclick="addLaptop()">Add Laptop</button>
<hr>
<div style="overflow-x: scroll;">

    <table id="laptop-table" class="display">
    <thead>
    <tr>
        <th>Date Of Purchase</th>
        <th>Invoice No.</th>
        <th>Price</th>
        <th>Laptop Name</th>
        <th>Serial No.</th>
        <th>Pin No.</th>
        <th>Username</th>
        <th>Model</th>
        <th>Assets ID</th>
        <th>Status</th>
        <th>OS</th>
        <th>Processor</th>
        <th>RAM</th>
        <th>Ethernet MAC Address</th>
        <th>WIFI MAC Address</th>
        <th>HIPAA-23 Compliant</th>
        <th>Windows Genuine Key</th>
        <th>Battery Backup</th>
        <th>Files</th>
        <th>Remarks</th>

    </tr>
    </thead>

    <tbody>
    <g:each in="${laptopList}" var="laptop">
        <tr onclick="update(${laptop.id})">
            <td>${laptop.dateOfPurchase}</td>
            <td>${laptop.invoiceNo}</td>
            <td>${laptop.price}</td>
            <td>${laptop.laptopName}</td>
            <td>${laptop.serialNo}</td>
            <td>${laptop.pinNo}</td>
            <td>${laptop.username}</td>
            <td>${laptop.model}</td>
            <td>${laptop.assetsID}</td>
            <td>${laptop.status}</td>
            <td>${laptop.os}</td>
            <td>${laptop.processor}</td>
            <td>${laptop.ram}</td>
            <td>${laptop.ethernetMacAddress}</td>
            <td>${laptop.wifiMacAddress}</td>
            <td>${laptop.hipaa23Compliant}</td>
            <td>${laptop.windowsGenuineKey}</td>
            <td>${laptop.batteryBackup}</td>
            <td>${laptop.files}</td>
            <td>${laptop.remarks}</td>
        </tr>
    </g:each>
    </tbody>
</table>
</div>

<div style="display: none;height: 100px;margin-left: 2%;margin-top: 2%" id="update">

    <button class="btn btn-primary" id="edit" onclick="editFunction()">Edit</button>
    <button class="btn btn-danger" id="delete" onclick="deleteFunction()">Delete</button>
</div>

<div id="insert-laptop" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog" style="width: 90%" >

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Add New Laptop</h4>
            </div>

            <div class="modal-body" style="height: 470px">

                <g:form id="laptop-form" controller="laptop" action="save" enctype="multipart/form-data">

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
                        <label for="laptopName" class="col-sm-6 control-label">Laptop Name</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="laptopName" name="laptopName"/>
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
                        <label for="ethernetMacAddress" class="col-sm-6 control-label">Ethernet MAC Address</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="ethernetMacAddress" name="ethernetMacAddress"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="wifiMacAddress" class="col-sm-6 control-label">WIFI MAC Address</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="wifiMacAddress" name="wifiMacAddress"/>
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
                        <label for="windowsGenuineKey" class="col-sm-6 control-label">Windows Genuine Key</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="windowsGenuineKey" name="windowsGenuineKey"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="batteryBackup" class="col-sm-6 control-label">Battery Backup</label>
                        <div class="col-sm-6">
                            <select name="batteryBackup" id="batteryBackup" class="form-control">
                                <option value="select">Select</option>
                                <option value="low">Low</option>
                                <option value="normal">Normal</option>
                                <option value="excellent">Excellent</option>
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


<div id="update-laptop" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog" style="width: 90%">

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Add New Laptop</h4>
            </div>

            <div class="modal-body" style="height: 470px">

                <g:form id="laptop-form" controller="laptop" action="update" enctype="multipart/form-data">

                    <input type="hidden" name="laptop_id" id="laptop_id">

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
                        <label for="laptopName" class="col-sm-6 control-label">Laptop Name</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="laptopNameU" name="laptopName"/>
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
                        <label for="ethernetMacAddress" class="col-sm-6 control-label">Ethernet MAC Address</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="ethernetMacAddressU" name="ethernetMacAddress"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="wifiMacAddress" class="col-sm-6 control-label">WIFI MAC Address</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="wifiMacAddressU" name="wifiMacAddress"/>
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
                        <label for="windowsGenuineKey" class="col-sm-6 control-label">Windows Genuine Key</label>

                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="windowsGenuineKeyU" name="windowsGenuineKey"/>
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <label for="batteryBackup" class="col-sm-6 control-label">Battery Backup</label>

                        <div class="col-sm-6">
                            <select name="batteryBackup" id="batteryBackupU" class="form-control">
                                <option value="select">Select</option>
                                <option value="low">Low</option>
                                <option value="normal">Normal</option>
                                <option value="excellent">Excellent</option>
                            </select>
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
        $('#laptop-table').DataTable();
    })

    function addLaptop(){

        $('#insert-laptop').modal();
    }

    function update(id) {
        document.getElementById("update").style.display = "block";

        $("#delete").attr("value", id)
    }

    function deleteFunction() {
        var id = document.getElementById("delete").value;

        $.ajax({
            type: 'post',
            url: "${createLink(controller: 'laptop',action: 'delete')}",
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
            url: "${createLink(controller: 'laptop',action: 'edit')}",
            data: "id=" + id,
            success: function (data) {

                $('#dateOfPurchaseU').val(data.dateOfPurchase);
                $('#invoiceNoU').val(data.invoiceNo);
                $('#priceU').val(data.price);
                $('#laptopNameU').val(data.laptopName);
                $('#serialNoU').val(data.serialNo);
                $('#pinNoU').val(data.pinNo);
                $('#usernameU').val(data.username);
                $('#modelU').val(data.model);
                $('#assetsIDU').val(data.assetsID);
                $('#statusU').val(data.status);
                $('#osU').val(data.os);
                $('#processorU').val(data.processor);
                $('#ramU').val(data.ram);
                $('#ethernetMacAddressU').val(data.ethernetMacAddress);
                $('#wifiMacAddressU').val(data.wifiMacAddress);
                $('#hipaa23CompliantU').val(data.hipaa23Compliant);
                $('#windowsGenuineKeyU').val(data.windowsGenuineKey);
                $('#batteryBackupU').val(data.batteryBackup);
                $('#remarksU').val(data.remarks);

                $('#update-laptop').modal();
                $('#laptop_id').attr("value", data.id);
            },
            error: function (err) {
                alert("Error" + err);
            }
        });
    }
</script>

<g:form controller="laptop" action="uploadCSV" enctype="multipart/form-data">
    <input type="file" name="csvFile" id="csvFile"/>
    <input type="submit" value="Upload"/>
</g:form>

</body>
</html>