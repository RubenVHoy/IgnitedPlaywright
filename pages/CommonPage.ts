import { expect, Locator, Page } from '@playwright/test';
import {BasePage} from "./BasePage";

export class CommonPage extends BasePage{
 
    async navigateToBol() {
        await this.page.goto('');
        await this.privacyRejectBtn.click();
        await this.countrySelectBelgium.click();
        await this.continueBtn.click();
    }
    async searchForArticle(article: string) {
        await this.selectSearchFor.fill(article);
        await this.searchButton.click()
    }
    async expectSearchResultToBe(article: string) {
        await expect(this.searchResult).toHaveText(article);
    }
}