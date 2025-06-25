import {faker} from '@faker-js/faker'

describe('Creat Project',() => {
beforeEach(() => {    //PRÉ CONDIÇÃO PARA O TESTE
    cy.login()
})
it('successfully', () => {
    const project = {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5)
    }
    cy.gui_createProject(project) //AÇÃO DO TESTE (Comando Customizado)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')     //ASSERÇÃO DO RESULTADO ESPERADO
    cy.contains(project.description).should('be.visible')
  })
})