exports.SearchPage = class{

    constructor(page){

        this.page = page
        this.searchBox = '//input[@id="twotabsearchtextbox"]'
        this.searchSuggestions = '//div[contains(@class,"s-suggestion s-suggestion-ellipsis-direction")]'
        
    }

    async searchProducts(productName){

        await this.page.locator(this.searchBox).fill(productName)
        //await this.page.waitforselector(this.searchSuggestions)
        const suggestedList= await this.page.$$(this.searchSuggestions)

        for(const product of suggestedList ){

            const producttext = await product.textcontent()

            if (producttext.include(productName)){
                await product.click()

            }


        }

    }
}