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

// This is a command for select module name
Cypress.Commands.add("selectModule", (moduleName) => {
          cy.get('.navbar-collapse > :nth-child(1) > .nav-item').each(($el,index,$list)=>{
             if($el.text().includes(moduleName))
                 {
                  cy.get('.navbar-collapse > :nth-child(1) > .nav-item').eq(index).click()
                  //cy.get('.nav-link').eq(index).click()
                 }

      } )
})

// This is a command for select links
Cypress.Commands.add("selectLinks", (linksName) => {

          cy.get('#summary-table > thead > tr>th').each(($el,index,$list)=>{
              if($el.text().includes(linksName))
                  {
                  cy.config('pageLoadTimeout')

                  cy.get('#summary-table > tbody > tr>td').eq(index).click()
                  }

          } )
  })


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