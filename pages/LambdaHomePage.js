exports.LambdaHomePage = class{

    constructor(page){

        this.page = page
        this.shopBycategory = page.locator('//a[normalize-space()="Shop by Category"]')
        this.cameras = page.locator('//span[normalize-space()="Cameras"]')
 }

 async clickOnProductList(productListName){

    await this.shopBycategory.click()
    await this.cameras.click()
 }


}