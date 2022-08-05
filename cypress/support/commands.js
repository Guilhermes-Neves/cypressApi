// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginPage from './pages/LoginPage'
import homePage from './pages/HomePage'
import { apiServer } from '../../cypress.json'

Cypress.Commands.add('login', (user) => {
    loginPage.go()    

    loginPage.fillForm(user)
    loginPage.submit()

    homePage.waitPageLoad()
})

Cypress.Commands.add('apiLogin', (user, setLocalStorage = false) => {
    const payload = {
        user: user.login,
        password: user.pass,
        countryId: user.countryId
    }
    cy.request({
        method: 'POST',
        url: `${apiServer}/token`,
        body: payload
    }).then(function (response) {
        expect(response.status).to.eq(200)
        Cypress.env('apiToken', response.body.token)

        if (setLocalStorage) {
            const user = response.body
            window.localStorage.setItem('token', user.token)
            window.localStorage.setItem('user', JSON.stringify(user))
            window.localStorage.setItem('auth', true)

            cy.configureLogin('menu', Cypress.env('apiToken'))
            cy.configureLogin('quick_access', Cypress.env('apiToken'))
            cy.configTaxData(user)
        }
    })
})

Cypress.Commands.add('configTaxData', (user) => {
    const date = new Date().getTime() + (24*60*60*1000)
    const taxData = {
        user: user,
        language: {
            ApplicationLanguage: {},
            UserTranslate: {},
            UserLocale: {
                locale: "en"
            }
        },
        ts: date
    }
    window.localStorage.setItem('taxData', JSON.stringify(taxData))
})

Cypress.Commands.add('configureLogin', (key, token) => {
    cy.request({
        method: 'GET',
        url: `${apiServer}/config/key?q=${key}`,
        headers: {
            authorization: 'Bearer ' + token
        }
    }).then(function (response) {
        expect(response.status).to.eq(200)
        window.localStorage.setItem(key, response.body.content)
    })
})