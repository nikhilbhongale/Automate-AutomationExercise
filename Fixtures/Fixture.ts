import {test as base} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { ProductsPage } from '../Pages/ProductsPage';

export const test = base.extend<{
    login: LoginPage;
    product: ProductsPage;
}>({
    login: async({page}, use)=>{
        const login = new LoginPage(page);
        await use(login);
    },
    product: async({page}, use)=>{
        const product = new ProductsPage(page);
        await use(product);
    }
})