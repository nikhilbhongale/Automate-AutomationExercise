import {test, Page} from '@playwright/test'
import { assert } from 'console';
import dotenv from 'dotenv';
dotenv.config();

export class LoginPage{
    page: Page;
    constructor (page: Page){
        this.page = page;
    }
    async logIntoSite(){
        await this.page.goto(`${process.env.URL}`);     //npm install dotenv
        await this.page.locator(`//a[contains(., 'Login')]`).click();
        await this.page.locator(`//form[@action='/login']/input[@placeholder='Email Address']`).fill(`${process.env.EMAILADDRESS}`);
        await this.page.locator(`//form[@action='/login']/input[@placeholder='Password']`).fill(`${process.env.PASSWORD}`);
        await this.page.locator(`//button[text()='Login']`).click();
        await assert(this.page.locator(`//a[contains(., 'Logout')]`).isVisible());
    }
}