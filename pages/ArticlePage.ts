import { expect, Locator, Page } from '@playwright/test';

export class ArticlePage {
    readonly page: Page;
    readonly addToBasketBtn: Locator;
    readonly addedToBasketMsg: Locator;
    readonly continueToShoppingCartBtn: Locator;
    readonly firstArticleInBasket: Locator;
    constructor(page: Page) {
        this.page = page;
        this.addToBasketBtn = page.locator('[data-test="add-to-basket"]');
        this.addedToBasketMsg = page.locator('[data-test="message"]');
        this.continueToShoppingCartBtn = page.locator('[data-test="add-on-page-header"] [data-test="btn-go-to-shoppingcart"]');
        this.firstArticleInBasket = page.locator('.product-details__title').first();
    }
    async addArticleToBasket(article: string) {
        await this.addToBasketBtn.click();
        await this.addedToBasketMsg.isVisible();
        await this.continueToShoppingCartBtn.click();
        await expect(this.firstArticleInBasket).toHaveText(article);
    }
}