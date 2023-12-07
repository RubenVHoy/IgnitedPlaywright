import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

    async login(username: string, password: string) {
        await this.goToLoginPageBtn.click();
        await this.usernameInputField.fill(username);
        await this.passwordInputField.fill(password);
        await this.loginBtn.click();
        await expect(this.accountPageHeading).toBeVisible();
    }
}