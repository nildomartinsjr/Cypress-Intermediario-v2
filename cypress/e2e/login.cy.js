describe('GitLab', () => {
  it('login com sucesso', () => {
    cy.visit('http://localhost/')
    cy.get('#user_login').type('root')
    cy.get('#user_password').type('12345678')
    cy.get('input[type="submit"][value="Sign in"]').click()
    cy.get('.header-user-avatar')
    .should('be.visible')

  })
})