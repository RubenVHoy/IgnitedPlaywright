import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

        //LoginPage
        readonly goToLoginPageBtn: Locator;
        readonly usernameInputField: Locator;
        readonly passwordInputField: Locator;
        readonly loginBtn: Locator;
        readonly accountPageHeading: Locator;
    
        constructor(page: Page) {
            super(page);
            //LoginPage Locators
            this.goToLoginPageBtn = page.locator('[data-test="login-link"]');
            this.usernameInputField = page.getByLabel('E-mailadres');
            this.passwordInputField = page.getByLabel('Wachtwoord');
            this.loginBtn = page.getByRole('button', { name: 'Inloggen' });
            this.accountPageHeading = page.getByRole('heading', { name: 'Accountoverzicht' })
        }

    async login(username: string, password: string) {
        await this.goToLoginPageBtn.click();
        await this.usernameInputField.fill(username);
        await this.passwordInputField.fill(password);
        await this.loginBtn.click();
        await expect(this.accountPageHeading).toBeVisible();
    }
}