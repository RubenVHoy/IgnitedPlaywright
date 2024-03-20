import {Locator, Page } from '@playwright/test';
import {BasePage} from "./BasePage";

export class BasketPage extends BasePage{

        //BasketPage
        readonly removeArticleFromBasketBtn: Locator;

        constructor(page: Page) {
            super(page);

                //BasketPage Locators
                this.removeArticleFromBasketBtn = page.getByTestId('remove-item');
        }

    async removeArticleFromBasket(){
        await this.removeArticleFromBasketBtn.click();
    }
}