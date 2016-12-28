package itims

class Monitor {

    String dateOfPurchase
    String invoiceNo
    String price
    String monitorName
    String serialNo
    String pinNo
    String username
    String model
    String assetsID
    String status
    String vendorName
    String files
    String remarks

    static constraints = {
        dateOfPurchase nullable: true
        invoiceNo nullable: true
        price nullable: true
        monitorName nullable: true
        serialNo nullable: true
        pinNo nullable: true
        username nullable: true
        model nullable: true
        assetsID nullable: true
        status nullable: true
        vendorName nullable: true
        files nullable: true
        remarks nullable: true

    }
}
