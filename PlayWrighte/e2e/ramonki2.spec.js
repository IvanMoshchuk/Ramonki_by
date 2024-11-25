import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ramonki.by/');
  await page.getByRole('button', { name: 'Принять все' }).click();
  await page.getByRole('button', { name: 'Каталог' }).click();
  await page.getByRole('link', { name: 'Вся женская одежда' }).click();
  await page.getByText('Платья и сарафаны 17790').click();
  await page.getByRole('link', { name: '1 / 5 2 / 5 3 / 5 4 / 5 5 / 5 29% Дискаунтер icon 260.4184.45 BYN Платье ANASTASIA MAK 1121 зелёный 50, 52, 54, 56, 58, 60 icon Быстрый просмотр', exact: true }).click();
  await page.getByRole('button', { name: 'Добавить в корзину' }).click();
  await page.getByRole('dialog').getByText('50 Размер: 50Рост:').click();
  await page.getByRole('button', { name: 'Выбрать' }).click();
  await page.getByRole('dialog').locator('span').click();
  await page.getByRole('link', { name: 'Корзина' }).click();
  await page.getByText('Рост 164').click();
  await page.getByText('Размер 50').click();
  await page.getByRole('main').getByText('ANASTASIA MAK 1121 зелёный').click();
});


// async firstPage() {
//     await this.cookie_files.click();
//     await this.catalog_button.click();