import {test} from '../Fixtures/Fixture'

test('Test Women clothing', {tag: ['@ProductCategory', '@WomenClothing','@regression']}, async({login, product})=>{
    await login.logIntoSite();
    await product.goToProductsPage();
    await product.validateWomenClothing();
})