/// <reference types="Cypress" />

import { apiServer } from '../../../../cypress.json'

class FederalServiceApi {
    insert(token) {
        const payload ={
            nbsId: 2,
            cisGroup: "984352",
            federalCode: 2312,
            description: "Teste de filtro",
            disconsiderProviderSameCity: false,
            federalServiceTaxConfigurations: [
                {
                    id: 0,
                    applyBaseReduction: false,
                    code: "ISS",
                    excluded: false,
                    revenueCode: 1,
                    tax: {
                        code: "ISS"
                    },
                    taxId: 3,
                    tributeCode: null,
                    tributeSpecification: null,
                    type: 1,
                    value: 25.80
                }
             ] 
        }
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