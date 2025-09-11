import {Page, expect} from '@playwright/test';
import {commonLocators} from '../Locators/locators.ts';

export class ProductsPage{
    page: Page;
    constructor(page: Page){
        this.page =page;
    }

    async productCategory(){
        await this.page.locator(commonLocators.anchorContainsText('Products')).click();
        await expect(this.page.locator(commonLocators.h2WithText('Category'))).toHaveText('Category');
        await expect(this.page.locator(commonLocators.h2WithText('All Products'))).toHaveText('All Products');
        const expectedCategories = await this.page.locator(`//div[@id='accordian']//h4[@class='panel-title']/a`).allTextContents();
        const cleanedCategories = expectedCategories.map(text => text.trim());
        const actualCategories = ['Women', 'Men', 'Kids'];
        expect(cleanedCategories).toEqual(actualCategories);
    }
};