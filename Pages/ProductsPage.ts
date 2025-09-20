import {Page, expect} from '@playwright/test';
import {commonLocators} from '../Locators/locators.ts';

export class ProductsPage{
    page: Page;
    constructor(page: Page){
        this.page =page;
    }

    async goToProductsPage(){
        await this.page.locator(commonLocators.anchorContainsText('Products')).click();
    }

    async validateProductsCategory(){   
        await expect(this.page.locator(commonLocators.h2WithText('Category'))).toHaveText('Category');
        await expect(this.page.locator(commonLocators.h2WithText('All Products'))).toHaveText('All Products');
        const expectedCategories = await this.page.locator(`//div[@id='accordian']//h4[@class='panel-title']/a`).allTextContents();
        const cleanedCategories = expectedCategories.map(text => text.trim());
        const actualCategories = ['Women', 'Men', 'Kids'];
        expect(cleanedCategories).toEqual(actualCategories);
    }

    async validateMenSection(){
        await this.page.locator(`//div[@class='panel-heading']/h4/a[@href='#Men']`).click();
        const expectedMenSections = await this.page.locator(`//div[@id='Men']/div/ul/li/a`).allTextContents();
        const cleanedMenSections = expectedMenSections.map(text => text.trim());
        const actualMenSections = ['Tshirts', 'Jeans'];
        expect(cleanedMenSections).toEqual(actualMenSections);
    }
        
    async validateWomenSection(){
        await this.page.locator(`//div[@class='panel-heading']/h4/a[@href='#Women']`).click();
        const expectedWomenSections = await this.page.locator(`//div[@id='Women']/div/ul/li/a`).allTextContents();
        const cleanedWomenSections = expectedWomenSections.map(text => text.trim());
        const actualWomenSections = ['Dress', 'Tops', 'Saree'];
        expect(cleanedWomenSections).toEqual(actualWomenSections);
    }

    async validateWomenClothing(){
        await this.page.locator(`//div[@class='panel-heading']/h4/a[@href='#Women']`).click();
        await this.page.locator(`//div[@id='Women']/div/ul/li${commonLocators.anchorContainsText('Dress')}`).click();
        await expect(this.page.locator(commonLocators.h2WithText(`Women - Dress Products`))).toBeVisible();
    }

    async validateMenClothing(){
        await this.page.locator(`//div[@class='panel-heading']/h4/a[@href='#Men']`).click();
        await this.page.locator(`//div[@id='Men']/div/ul/li${commonLocators.anchorContainsText('Jeans')}`).click();       
        await this.page.locator(`//div[@id='Men']/div/ul/li${commonLocators.anchorContainsText('Tshirts')}`).click();
    }
};