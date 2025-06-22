import { faker } from "@faker-js/faker"

describe('Creat New Project with FAKER', ()=>{
    beforeEach(()=>{
        cy.login()
    })

    it('Successfully', ()=>{
    
        cy.get('a.btn.btn-success').click()

        const projectName = `Project-${faker.datatype.uuid()}`
        const descri = faker.lorem.words(6)

        cy.get('#project_name').type(projectName)
        cy.get('#project_description').type(descri)

        cy.get('.qa-initialize-with-readme-checkbox').check()

        cy.contains('Create project').click()
        cy.contains(projectName).should('be.visible')
        cy.contains(descri).should('be.visible')

    })
})
//npx cypress run --spec cypress/e2e/gui/creatnewProject.cy.js