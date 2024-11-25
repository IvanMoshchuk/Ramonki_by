exports.dressesPage = class dressesPage {

    constructor (page) {
        this.page = page
        this.addInShoppingCartButton = page.locator('//div[@class="product-card product-card--176203695"]//div[@class="product-card-description__buy"]')
        this.chosenSizeButton = page.locator('//li[contains(text(), "50")]')
        this.enterButton = page.locator('//button[contains(text(), "Выбрать")]')
        this.closeButton = page.locator('//span[@class="v-modal__close"]')
        this.shoppingCartButton = page.getByRole('link', { name: 'Корзина' })
    }
    async clickOnButton(){
        await this.addInShoppingCartButton.click()
        await this.chosenSizeButton.click()
        await this.enterButton.click()
        await this.closeButton.click()
        await this.shoppingCartButton.click()
    }
}