/// <reference types="Cypress" />

import login from '../support/pages/LoginPage/index'
import userFactory from '../factories/User'
import home from '../support/pages/HomePage/index'
import messageFactory from '../factories/Messages'

describe('Login', () => {
    beforeEach(() => {
        login.go()
    }) 

    it('Valid user', function() {
        var user = userFactory.user()

        login.fillForm(user)
        login.submit()

        home.validateUserLogged(user)
    })

    it('Invalid user', function() {
        var message = messageFactory.message()
        var user = userFactory.user()
        user.pass = 'xpto'
        login.fillForm(user)
        login.submit()

        login.toast.shouldHaveText(message.invalidCredentials)
    })
})