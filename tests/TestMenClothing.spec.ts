import {test} from '../Fixtures/Fixture'

test('Test Men clothing', async({login, product})=>{
    await login.logIntoSite();
    await product.goToProductsPage();
    await product.validateMenClothing();
})