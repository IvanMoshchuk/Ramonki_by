const { test, expect } = require('@playwright/test');
import { startPage } from '../../Pages/startPage'
import { clothesPage } from '../../Pages/clothesPage'
import {dressesPage} from '../../Pages/dressesPage'
import { shoppingCart } from '../../Pages/shoppingCart'




test('has title', async ({ page }) => {

  const FirstPage = new startPage(page)
  await FirstPage.gotostartPage()
  await FirstPage.clickOnButton()

  const SecondPage = new clothesPage(page)
  await SecondPage.ClickOnButton()

  const ThirdPage = new dressesPage(page)
  await ThirdPage.clickOnButton()

  const FourthPge = new shoppingCart(page)
  await FourthPge.toHaveText()


})
