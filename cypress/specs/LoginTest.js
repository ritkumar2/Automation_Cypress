/// <reference types="Cypress" />
describe('My First Test Suite',function()
{
    it('User on Login Page',function(){

    // open the url
        cy.visit("http://mada-dashboard-qa.decisionresourcesgroup.com/users/sign_in")

    // Enter user credential
            cy.get('input[placeholder="Username"]').type("rikumar")
            cy.get('#user_password').type('::MDQ3&v:<VsbQvC')
            cy.get('.submit').click();
            Cypress.config('pageLoadTimeout')
    // Navigate payer summary page
        cy.get('.nav-link').contains('Payer Summary').click()
        cy.config('pageLoadTimeout')

    } )

} )
