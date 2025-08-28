import {test} from '../Fixtures/login'

test('Test Login Feature', async({login})=>{
    await login.logIntoSite();
})