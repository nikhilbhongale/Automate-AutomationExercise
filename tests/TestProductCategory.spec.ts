import {test} from '../Fixtures/Fixture'

test('Test Product Categories', async({login, product})=>{
    await login.logIntoSite();
    await product.goToProductsPage();
    await product.validateProductsCategory();
    await product.validateMenSection();
    await product.validateWomenSection();
})