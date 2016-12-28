package itims

class Laptop {

    String dateOfPurchase
    String invoiceNo
    String price
    String laptopName
    String serialNo
    String pinNo
    String username
    String model
    String assetsID
    String status
    String os
    String processor
    String ram
    String ethernetMacAddress
    String wifiMacAddress
    String hipaa23Compliant
    String windowsGenuineKey
    String batteryBackup
    String files
    String remarks

    static constraints = {

        dateOfPurchase nullable: true
        invoiceNo nullable: true
        price nullable: true
        laptopName nullable: true
        serialNo nullable: true
        pinNo nullable: true
        username nullable: true
        model nullable: true
        assetsID nullable: true
        status nullable: true
        os nullable: true
        processor nullable: true
        ram nullable: true
        ethernetMacAddress nullable: true
        wifiMacAddress nullable: true
        hipaa23Compliant nullable: true
        windowsGenuineKey nullable: true
        batteryBackup nullable: true
        files nullable: true
        remarks nullable: true

    }
}
