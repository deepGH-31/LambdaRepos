import{expect} from '@playwright/test'

exports.LambdaCartPage = class {

    constructor(page){
        this.page = page
        this.addToCartBtnOnToastMsg = page.locator('//a[normalize-space()="View Cart"]')
        this.producttable = page.locator('table[class="table table-bordered"]')
        this.rowName = page.locator('td[class="text-left"] a')


    }
 async addToCartBtnOnToast(){
    await this.addToCartBtnOnToastMsg.click()

 }

 async verifyProductInCart(productName){
    const table = await this.producttable
    const columns = await table.locator('thead tr th')
    const rows= await table.locator('tbody tr')
    expect(rows).toContainText(productName)
    console.log(rows.textContents())
    
    }
    

 }
    
