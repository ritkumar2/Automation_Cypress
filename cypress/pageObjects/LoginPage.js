class LoginPage
{

    enterUserName(){
        return cy.get('input[placeholder="Username"]')
        }

    enterPassword(){
         return cy.get('#user_password')
        }

        loginBtn(){
          return cy.get('.submit')
        }


}
export default LoginPage;