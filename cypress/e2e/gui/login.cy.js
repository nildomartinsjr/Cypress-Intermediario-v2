describe('Login', () => {
  it('successfuly', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')

  })

})