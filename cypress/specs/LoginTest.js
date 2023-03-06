/// <reference types="Cypress" />
import LoginPage from '../pageObjects/LoginPage'
import DashboardPage from '../pageObjects/DashboardPage'
describe('My First Test',function()
{

    before(function(){
        cy.fixture('propertiesFile').then(function(data)
        {
        this.data=data
        })
    })
    it('User on Login Page',function(){


        const loginPage=new LoginPage();
       // const dashboardPage=new DashboardPage();
    // open the url
        cy.visit(Cypress.env('url'))

    // Enter user credential
        loginPage.getEnterUserName().type(this.data.name)
        loginPage.getEnterPassword().type(this.data.password)
        loginPage.getLoginBtn().click();

       Cypress.config('defaultCommandTimeout',8000)
    // Navigate module page
         this.data.moduleName.forEach(function(element){
         cy.selectModule(element)
        })

    // Navigate links
        this.data.linksName.forEach(function(element){
             cy.selectLinks(element)

         })

    } )
})
