import {test,} from '@playwright/test';
import {CommonPage} from "../pages/CommonPage";
import {ArticlePage} from "../pages/ArticlePage";
import {BasketPage} from "../pages/BasketPage";

const articles = ['Silver Surfer By Slott & Allred Omnibus', 'Naarland'];

test.beforeEach(async ({ page }) => {
  const homePage = new CommonPage(page);
  await homePage.navigateToBol();
})

for (const article of articles) {
  test('Search for article ' + article, async ({page}) => {
    const homePage = new CommonPage(page);
    await homePage.searchForArticle(article);
  })
}
for (const article of articles) {
  test('Add article ' + article + ' to the basket', async ({page}) => {
    const homePage = new CommonPage(page);
    const articlePage = new ArticlePage(page);
    await homePage.searchForArticle(article);
    await articlePage.addArticleToBasket(article);
  })
}
for (const article of articles) {
  test('Add article ' + article + ' to the basket and remove it from basket', async ({page}) => {
    const homePage = new CommonPage(page);
    const articlePage = new ArticlePage(page);
    const basketPage = new BasketPage(page);
    await homePage.searchForArticle(article);
    await articlePage.addArticleToBasket(article);
    await basketPage.removeArticleFromBasket();
  })
}
