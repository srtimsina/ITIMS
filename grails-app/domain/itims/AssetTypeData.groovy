package itims

class AssetTypeData {

    AssetsType assetsType
    String fieldValue
    Integer rowNumber

    static constraints = {
        assetsType nullable: false
        fieldValue nullable: true, blank: true
        rowNumber nullable: false
    }
}
