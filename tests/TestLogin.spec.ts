import {test} from '../Fixtures/Fixture'

test('Test Login Feature', {tag: ['@login','@regression']}, async({login})=>{
    await login.logIntoSite();
})