import {test as base} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'

export const test = base.extend<{
    login: LoginPage;
}>({
    login: async({page}, use)=>{
        const login = new LoginPage(page);
        await use(login);
    }
})