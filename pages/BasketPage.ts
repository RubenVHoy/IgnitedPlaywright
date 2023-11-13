import {Locator, Page } from '@playwright/test';

export class BasketPage {
    readonly removeArticleFromBasketBtn: Locator;

    constructor(page: Page) {
        this.removeArticleFromBasketBtn = page.getByTestId('remove-item');
    }

    async removeArticleFromBasket(){
        await this.removeArticleFromBasketBtn.click();
    }
}