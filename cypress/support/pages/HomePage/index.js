import {el} from './elements'

class HomePage {
    validateUserLogged(user) {
        cy.get(el.footerLoggedUser).should('have.text', user.name)
    }

    waitPageLoad() {
        cy.get(el.inputSearch).should('be.visible')
    }
}

export default new HomePage