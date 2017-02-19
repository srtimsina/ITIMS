<%--
  Created by IntelliJ IDEA.
  User: Suryaraj
  Date: 11/19/2016
  Time: 5:38 PM
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Network Switch</title>
</head>

<body>
<button class="btn btn-primary" onclick="addSwitch()">Add Switch</button>
<hr>
<div style="overflow-x: scroll;">

    <table id="switch-table" class="display">
        <thead>
        <tr>
            <th>Date Of Purchase</th>
            <th>Invoice No.</th>
            <th>Price</th>
            <th>Switch Name</th>
            <th>Serial No.</th>
            <th>Pin No.</th>
            <th>Location</th>
            <th>IP Address</th>
            <th>Model</th>
            <th>Assets ID</th>
            <th>Banner</th>
            <th>HTTPS</th>
            <th>Status</th>
            <th>MAC Address</th>
            <th>Files</th>
            <th>Remarks</th>
        </tr>
        </thead>

        <tbody>
        <g:each in="${switchList}" var="sInstance">

            <tr onclick="update(${sInstance.id})">
                <td>${sInstance.dateOfPurchase}</td>
                <td>${sInstance.invoiceNo}</td>
                <td>${sInstance.price}</td>
                <td>${sInstance.switchName}</td>
                <td>${sInstance.serialNo}</td>
                <td>${sInstance.pinNo}</td>
                <td>${sInstance.location}</td>
                <td>${sInstance.ipAddress}</td>
                <td>${sInstance.model}</td>
                <td>${sInstance.assetsID}</td>
                <td>${sInstance.banner}</td>
                <td>${sInstance.https}</td>
                <td>${sInstance.status}</td>
                <td>${sInstance.macAddress}</td>
                <td>${sInstance.files}</td>
                <td>${sInstance.remarks}</td>
            </tr>
        </g:each>
        </tbody>


    </table>

</div>
<div style="display: none;height: 100px;margin-left: 2%;margin-top: 2%" id="update" >
    <button class="btn btn-primary" id="edit" onclick="editFunction()">Edit</button>
    <button class="btn btn-danger" id="delete" onclick="deleteFunction()">Delete</button>
</div>

<div id="insert-switch" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog" style="width: 90%" >

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Add New Switch</h4>
            </div>

            <div class="modal-body" style="height: 470px">

                <g:form id="switch-form" controller="networkSwitch" action="save" enctype="multipart/form-data">

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
                        <label for="switchName" class="col-sm-6 control-label">Switch Name</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" id="switchName" name="switchName"/>
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
                        <label for="ipAddress" class="col-sm-6 control-label">IP Address</label>
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
                        <label for="https" class="col-sm-6 control-label">HTTPS</label>
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
        $('#switch-table').DataTable();
    })

    function addSwitch(){

        $('#insert-switch').modal();
    }

    function update(id){
        document.getElementById("update").style.display = "block";

        $("#delete").attr("value",id)
    }


    function deleteFunction(){
        var id = document.getElementById("delete").value;

        $.ajax({
            type: 'post',
            url: "${createLink(controller: 'networkSwitch',action: 'delete')}",
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

    function editFunction() {
        var id = document.getElementById("delete").value;

        $.ajax({
            type: 'post',
            url: "${createLink(controller: 'networkSwitch',action: 'edit')}",
            data: "id=" + id,
            success: function (data) {

                $('#dateOfPurchaseU').val(data.dateOfPurchase);
                $('#invoiceNoU').val(data.invoiceNo);
                $('#priceU').val(data.price);
                $('#switchNameU').val(data.switchName);
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

                $('#update-networkSwitch').modal();
                $('#networkSwitch_id').attr("value", data.id);
            },
            error: function (err) {
                alert("Error" + err);
            }
        });
    }

</script>

<g:form controller="networkSwitch" action="uploadCSV" enctype="multipart/form-data">
    <input type="file" name="csvFile" id="csvFile"/>
    <input type="submit" value="Upload"/>
</g:form>

</body>
</html>