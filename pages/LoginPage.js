exports.LoginPage = class{

    constructor(page){
       this.page = page
        this.signInBtn = '//a[@id="nav-link-accountList"]'
        this.userName = '//input[@id="ap_email_login"]'
        this.continueBtn = "//input[@type='submit']"
        this.pswd = "//input[@id='ap_password']"
        this.loginInBtn = "//input[@id='signInSubmit']"

    }

    async userSignIn(username, password){
        await this.page.goto('https://www.amazon.in')
        
        await this.page.locator(this.signInBtn).click()
        await this.page.locator(this.userName).fill(username)
        await this.page.locator(this.continueBtn).click()
        await this.page.locator(this.pswd).fill(password)
        await this.page.locator(this.loginInBtn).click()
        

    }

}
