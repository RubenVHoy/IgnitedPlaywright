import {test,} from '@playwright/test';
import {CommonPage} from "../Pages/CommonPage";

const articles = ['Silver Surfer By Slott & Allred Omnibus', 'Naarland'];

test.beforeEach(async ({ page }) => {
  const homePage = new CommonPage(page);
  await homePage.navigateToBol();
})

for (const article of articles) {
  test('SearchForArticle ' + article, async ({page}) => {
    const homePage = new CommonPage(page);
    await homePage.searchForArticle(article);
  })
}

for (const article of articles) {
  test('Add Articles To Basket ' + article, async ({page}) => {
    const homePage = new CommonPage(page);
    await homePage.searchForArticle(article);
    await homePage.addArticleToBasket(article);
  })
}
