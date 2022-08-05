/// <reference types="Cypress" />

import {el} from './elements'
import toast from '../../components/toast'

class LoginPage {
    constructor() {
        this.toast = toast
    }

    go() {
        cy.visit('/')
    }

    fillForm(user) {
        cy.get(el.inputUserName).type(user.login)
        cy.get(el.inputPass).type(user.pass)
        cy.get(el.selectCountry).select(user.country)
    }

    submit() {
        cy.get(el.btnLogin).click()
    }
}

export default new LoginPage()