import {test,} from '@playwright/test';
import {CommonPage} from "../pages/CommonPage";
import {ArticlePage} from "../pages/ArticlePage";
import {BasketPage} from "../pages/BasketPage";
import {LoginPage} from "../pages/LoginPage";

const articles = ['Silver Surfer By Slott & Allred Omnibus', 'Naarland'];
let commonPage: CommonPage
let articlePage: ArticlePage
let basketPage: BasketPage
let loginPage: LoginPage

test.beforeEach(async ({ page }) => {
  commonPage = new CommonPage(page);
  articlePage = new ArticlePage(page);
  basketPage = new BasketPage(page);
  loginPage = new LoginPage(page);
  await commonPage.navigateToBol();
})

for (const article of articles) {
  test('Search for article ' + article, async ({page}) => {
    await commonPage.searchForArticle(article);
    await commonPage.expectSearchResultToBe(article);
  })
}
for (const article of articles) {
  test('Add article ' + article + ' to the basket', async ({page}) => {
    await commonPage.searchForArticle(article);
    await articlePage.addArticleToBasket(article);
    await articlePage.expectArticleInBasket(article);
  })
}
for (const article of articles) {
  test('Add article ' + article + ' to the basket and remove it from basket', async ({page}) => {
    await commonPage.searchForArticle(article);
    await articlePage.addArticleToBasket(article);
    await basketPage.removeArticleFromBasket();
  })
}
test("Login to Bol", async ({page}) => {
    await loginPage.login(process.env.USER1, process.env.PASSWORD);
})

