import { expect, Locator, Page } from '@playwright/test';
import {BasePage} from "./BasePage";

export class ArticlePage extends BasePage{
    
    async addArticleToBasket(article: string) {
        await this.addToBasketBtn.click();
        await this.addedToBasketMsg.isVisible();
        await this.continueToShoppingCartBtn.click();
    }

    async expectArticleInBasket(article:string) {
        await expect(this.firstArticleInBasket).toHaveText(article);
    }
}