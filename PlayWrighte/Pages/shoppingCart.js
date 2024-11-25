const { expect } = require("playwright/test")

exports.shoppingCart = class shoppingCart {

    constructor(page) {
        this.page = page
        this.goodsName = page.getByRole('main').getByText('ANASTASIA MAK 1121 зелёный')
        this.goodsPrice = page.locator('//div[@class="cart cart--new"]//p[contains(text(),"184.45")]')
        this.dressSize = page.locator('//div[@class="cart cart--new"]//p[contains(text(),"Размер 50")]')
    }
    async toHaveText(){
       await expect(this.goodsName).toHaveText('ANASTASIA MAK 1121 зелёный');
       await expect(this.goodsPrice).toHaveText('260.4 184.45 BYN');
       await expect(this.dressSize).toHaveText("Размер 50");
    }
}