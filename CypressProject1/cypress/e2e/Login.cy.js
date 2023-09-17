/// <reference types ="cypress"/>


describe('Test orange dummy website', () => {
    it('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
      //login 
      //input username
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .type('Admin')
      cy.wait(1000)
      //Input Password 
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .type('admin123')
      cy.wait(1000)

      //click button login 

      cy.get('.oxd-button').click()
   
    })
  })