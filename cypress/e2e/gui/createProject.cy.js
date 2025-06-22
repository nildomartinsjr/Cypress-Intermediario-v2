import { faker } from '@faker-js/faker'

describe('Create Project', () => {
  beforeEach(() => { //PRÉ CONDIÇÕES para rodar o teste
    cy.login()
  })

  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.gui_createProject(project) //AÇÕES para rodar o teste
                                                                                                           
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)     //ASSERÇÕES dos resultadosdo teste
    cy.contains(project.name).should('be.visible')                                                                         //esperados 
    cy.contains(project.description).should('be.visible')
  })
})
