import {Locator, Page } from '@playwright/test';
import {AbstractPage} from "./AbstractPage";

export class BasketPage extends AbstractPage{

    async removeArticleFromBasket(){
        await this.removeArticleFromBasketBtn.click();
    }
}