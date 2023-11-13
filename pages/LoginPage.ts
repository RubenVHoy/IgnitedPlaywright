import { expect, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async login(username: string, password: string) {
        await this.page.fill('[data-test="username"]', username);
        await this.page.fill('[data-test="password"]', password);
        await this.page.click('[data-test="login-button"]');
        await expect(this.page.locator('[data-test="login-button"]')).toBeVisible();
    }
}