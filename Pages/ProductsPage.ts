import {Page} from '@playwright/test'

export class ProductsPage{
    page: Page;
    constructor(page: Page){
        this.page =page;
    }
}