package itims

class Router {
    String dateOfPurchase
    String invoiceNo
    String price
    String routerName
    String serialNo
    String pinNo
    String location
    String ipAddress
    String model
    String assetsID
    String banner
    String https
    String status
    String macAddress
    String files
    String remarks

    static constraints = {
        dateOfPurchase nullable: true
        invoiceNo nullable: true
        price nullable: true
        routerName nullable: true
        serialNo nullable: true
        pinNo nullable: true
        location nullable: true
        ipAddress nullable: true
        model nullable: true
        assetsID nullable: true
        banner nullable: true
        status nullable: true
        macAddress nullable: true
        files nullable: true
        remarks nullable: true
    }
}
