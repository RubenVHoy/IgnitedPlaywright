import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
    //CommonPage
    readonly page: Page;
    readonly privacyRejectBtn: Locator;
    readonly countrySelectBelgium: Locator;
    readonly continueBtn: Locator;
    readonly selectSearchFor: Locator;
    readonly searchButton: Locator;
    readonly searchResult: Locator;   
    //ArticlePage
    readonly addToBasketBtn: Locator;
    readonly addedToBasketMsg: Locator;
    readonly continueToShoppingCartBtn: Locator;
    readonly firstArticleInBasket: Locator;
    //BasketPage
    readonly removeArticleFromBasketBtn: Locator;
    //LoginPage
    readonly goToLoginPageBtn: Locator;
    readonly usernameInputField: Locator;
    readonly passwordInputField: Locator;
    readonly loginBtn: Locator;
    readonly accountPageHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        //CommonPage Locators
        this.privacyRejectBtn = page.locator('[data-test="consent-modal-ofc-reject-btn"]');
        this.countrySelectBelgium = page.locator('[data-test="radio-button-be"]');
        this.continueBtn = page.locator('[data-test="continue-button"]');
        this.selectSearchFor = page.locator('[data-test="search_input_trigger"]');
        this.searchButton = page.locator('[data-test="search-button"]');
        this.searchResult = page.locator('[data-test="product-title"]');
        //ArticlePage Locators
        this.addToBasketBtn = page.locator('[data-test="add-to-basket"]');
        this.addedToBasketMsg = page.locator('[data-test="message"]');
        this.continueToShoppingCartBtn = page.locator('[data-test="add-on-page-header"] [data-test="btn-go-to-shoppingcart"]');
        this.firstArticleInBasket = page.locator('.product-details__title').first();
        //BasketPage Locators
        this.removeArticleFromBasketBtn = page.getByTestId('remove-item');
        //LoginPage Locators
        this.goToLoginPageBtn = page.locator('[data-test="login-link"]');
        this.usernameInputField = page.getByLabel('E-mailadres');
        this.passwordInputField = page.getByLabel('Wachtwoord');
        this.loginBtn = page.getByRole('button', { name: 'Inloggen' });
        this.accountPageHeading = page.getByRole('heading', { name: 'Accountoverzicht' })
    }
}
