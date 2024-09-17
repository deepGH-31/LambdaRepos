const { expect } = require("@playwright/test")

exports.GoogleHomePage = class{

    constructor(page){
        this.page = page
        this.searchBox = page.locator('#APjFqb')

    }

    async searchAnyText(searchtext){
        await expect(this.searchBox).toBeEnabled()
        await this.searchBox.click()
        await this.searchBox.fill(searchtext)
        await this.searchBox.press('Enter')

    }
}