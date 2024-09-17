const{chromium}= require("playwright")
const connectToBrowser=async(capability)=>
{
    const browser = await chromium.connect({
        wsEndpoint: 'wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}'
    })
    return browser;
}
module.exports=connectToBrowser