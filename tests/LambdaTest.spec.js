import{test, expect} from '@playwright/test'
import { LambdaHomePage } from '../pages/LambdaHomePage'
import { LambdaProductPage } from '../pages/LambdaProductPage'
import { LambdaCartPage } from '../pages/LambdaCartPage'

test('LambdaHomePage',async({page})=>{

const LHP = new LambdaHomePage(page)
const LPP = new LambdaProductPage(page)
const LCP = new LambdaCartPage(page)

await page.goto(process.env.URL)

await page.waitForTimeout(5000)
await LHP.clickOnProductList('Cameras')
await page.waitForTimeout(3000)

await LPP.addProductToCart('Palm Treo Pro')
const toastMsg= await page.locator('(//a[contains(text(),"Palm Treo Pro")])[3]').textContent()
expect(toastMsg).toContain('Palm Treo Pro')

await LCP.addToCartBtnOnToast()
await page.waitForTimeout(3000)
await LCP.verifyProductInCart('Palm Treo Pro')
await page.waitForTimeout(3000)


})