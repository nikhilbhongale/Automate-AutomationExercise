import {test} from '../Fixtures/Fixture'

test('Test Login Feature', async({login})=>{
    await login.logIntoSite();
})