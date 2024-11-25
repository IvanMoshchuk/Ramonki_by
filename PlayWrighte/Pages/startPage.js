exports.startPage = class startPage {

    constructor(page) {

        this.page = page
        this.cookie_files = page.locator('//button[text()="Принять все"]')
        this.catalog_button = page.getByRole('button', { name: 'Каталог' })
        this.clothes_button = page.locator('//span[text()="Одежда"]')
    }
    async gotostartPage() {
        await this.page.goto('https://ramonki.by/')
    }

    async clickOnButton() {
        await this.cookie_files.click();
        await this.catalog_button.click();
        await this.clothes_button.click();
    }
}