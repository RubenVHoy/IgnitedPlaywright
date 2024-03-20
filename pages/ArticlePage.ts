import { expect, Locator, Page } from '@playwright/test';
import {BasePage} from "./BasePage";

export class ArticlePage extends BasePage{

        //ArticlePage
        readonly addToBasketBtn: Locator;
        readonly addedToBasketMsg: Locator;
        readonly continueToShoppingCartBtn: Locator;
        readonly firstArticleInBasket: Locator;

        constructor(page: Page) {
            super(page);
      
            //ArticlePage Locators
            this.addToBasketBtn = page.locator('[data-test="add-to-basket"]');
            this.addedToBasketMsg = page.locator('[data-test="message"]');
            this.continueToShoppingCartBtn = page.locator('[data-test="add-on-page-header"] [data-test="btn-go-to-shoppingcart"]');
            this.firstArticleInBasket = page.locator('.product-details__title').first();
        }
    
    async addArticleToBasket(article: string) {
        await this.addToBasketBtn.click();
        await this.addedToBasketMsg.isVisible();
        await this.continueToShoppingCartBtn.click();
    }

    async expectArticleInBasket(article:string) {
        await expect(this.firstArticleInBasket).toHaveText(article);
    }
}