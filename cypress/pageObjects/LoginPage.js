class LoginPage
{

    getEnterUserName(){
        return cy.get('input[placeholder="Username"]')
        }

    getEnterPassword(){
         return cy.get('#user_password')
        }

    getLoginBtn(){
          return cy.get('.submit')
        }


}
export default LoginPage;