/// <reference types="Cypress" />
import LoginPage from '../pageObjects/LoginPage'
describe('My First Test Suite',function()
{

    before(function(){
        cy.fixture('propertiesFile').then(function(data)
        {
        this.data=data
        })
    })
    it('User on Login Page',function(){

        const loginPage=new LoginPage();
    // open the url
        cy.visit(this.data.url)

    // Enter user credential
        loginPage.enterUserName().type(this.data.name)
        loginPage.enterPassword().type(this.data.password)
         loginPage.loginBtn().click();

         cy.config('pageLoadTimeout')

    // Navigate module page
         this.data.moduleName.forEach(function(element){
         cy.selectModule(element)
         })
    } )
})
