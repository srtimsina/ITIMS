package itims

class CPU {

    String dateOfPurchase
    String invoiceNo
    String price
    String cpuName
    String serialNo
    String pinNo
    String username
    String model
    String assetsID
    String status
    String os
    String processor
    String ram
    String macAddress
    String hipaa23Compliant
    String files
    String remarks


    static constraints = {
        dateOfPurchase nullable: true
        invoiceNo nullable: true
        price nullable: true
        cpuName nullable: true
        serialNo nullable: true
        pinNo nullable: true
        username nullable: true
        model nullable: true
        assetsID nullable: true
        status nullable: true
        os nullable: true
        processor nullable: true
        ram nullable: true
        macAddress nullable: true
        hipaa23Compliant nullable: true
        files nullable: true
        remarks nullable: true

    }
}
