exports.LambdaProductPage = class{

constructor(page){

    this.page = page
    this.productName = page.locator('//div[@class="carousel-item active"]//img[@title="Palm Treo Pro"]')
    this.hiddenAddToCart = page.locator('.btn.btn-cart.cart-29')
    this.toastText = page.locator('(//a[contains(text(),"Palm Treo Pro")])[3]')
    

}
async addProductToCart(productName){

    await this.productName.hover()
    await this.hiddenAddToCart.click()
   


}
}