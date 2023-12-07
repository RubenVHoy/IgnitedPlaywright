import {Locator, Page } from '@playwright/test';
import {BasePage} from "./BasePage";

export class BasketPage extends BasePage{

    async removeArticleFromBasket(){
        await this.removeArticleFromBasketBtn.click();
    }
}