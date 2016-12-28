package itims

class AccessPoint {
    String dateOfPurchase
    String invoiceNo
    String price
    String accessPointName
    String serialNo
    String pinNo
    String location
    String ipAddress
    String model
    String assetsID
    String status
    String macAddress
    String files
    String remarks

    static constraints = {
        dateOfPurchase nullable: true
        invoiceNo nullable: true
        price nullable: true
        accessPointName nullable: true
        serialNo nullable: true
        pinNo nullable: true
        location nullable: true
        ipAddress nullable: true
        model nullable: true
        assetsID nullable: true
        macAddress nullable: true
        files nullable: true
        remarks nullable: true
    }
}
