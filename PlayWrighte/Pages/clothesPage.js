exports.clothesPage = class clothesPage {

constructor (page) {

    this.page = page
    this.clickOnDresses = page.locator('//div[@class="filter__body"]//span[contains(text(), "Платья и сарафаны")]')
    
}
async ClickOnButton (){
    await this.clickOnDresses.click();
}


}