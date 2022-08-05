/// <reference types="Cypress" />

import {el} from './elements'

class Toast {
    shouldHaveText(expectedText) {
        cy.contains(el.toast, expectedText)
            .should('be.visible')
    }
}

export default new Toast()