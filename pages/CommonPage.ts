import { expect, Locator, Page } from '@playwright/test';
import {AbstractPage} from "./AbstractPage";

export class CommonPage extends AbstractPage{
 
    async navigateToBol() {
        await this.page.goto('');
        await this.privacyRejectBtn.click();
        await this.countrySelectBelgium.click();
        await this.continueBtn.click();
    }
    async searchForArticle(article: string) {
        await this.selectSearchFor.fill(article);
        await this.searchButton.click()
        await expect(this.searchResult).toHaveText(article);
    }
}