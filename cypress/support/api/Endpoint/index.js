/// <reference types="Cypress" />

import { apiServer } from '../../../../cypress.json'
import payload from '../../payloads/nomeEndpoint'

class EndPoint {
    insert(token) {
        cy.request({
            method: 'POST',
            url: `${apiServer}/federalService`,
            headers: {
                authorization: 'Bearer ' + token
            },
            body: payload
        })
    }

    remove(token, id) {
        cy.request({
            method: 'DELETE',
            url: `${apiServer}/federalService/${id}`,
            headers: {
                authorization: 'Bearer ' + token
            }
        }).then(function (response) {
            expect(response.status).to.eq(200)
        })
    }
}

export default new FederalServiceApi()