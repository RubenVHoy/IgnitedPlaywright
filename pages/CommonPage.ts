import { expect, Locator, Page } from '@playwright/test';

export class CommonPage {
    readonly page: Page;
    readonly privacyRejectBtn: Locator;
    readonly countrySelectBelgium: Locator;
    readonly continueBtn: Locator;
    readonly selectSearchFor: Locator;
    readonly searchButton: Locator;
    readonly searchResult: Locator;


    constructor(page: Page) {
        this.page = page;
        this.privacyRejectBtn = page.locator('[data-test="consent-modal-ofc-reject-btn"]');
        this.countrySelectBelgium = page.locator('[data-test="radio-button-be"]');
        this.continueBtn = page.locator('[data-test="continue-button"]');
        this.selectSearchFor = page.locator('[data-test="search_input_trigger"]');
        this.searchButton = page.locator('[data-test="search-button"]');
        this.searchResult = page.locator('[data-test="product-title"]');

    }

    async navigateToBol() {
        await this.page.goto('https://www.bol.com/be/nl/');
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