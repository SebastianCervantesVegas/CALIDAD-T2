describe('Calidad T2', () => {
    beforeEach('Login', () => {
        cy.visit(Cypress.env('pageUrl'))
        cy.get('#agBiblioteca').click()
        cy.get('#username').type('admin')
        cy.get('#pass').type('admin')
        cy.get('#login').click()

    })
    it('Agregar Biblioteca', () => {
        cy.visit(Cypress.env('pageUrl'))
        cy.get('#agBiblioteca').click()
        cy.get('#biblioteca').click()
        cy.visit(Cypress.env('pageUrl') + '/Biblioteca')
        cy.location('pathname').should('eq', '/Biblioteca')

    })
    it('Seleccionar Leyendo', () => {
        cy.visit(Cypress.env('pageUrl') + '/Biblioteca')
        cy.get('#leyendo').click()
    })
    it('Seleccionar Terminado', () => {
        cy.visit(Cypress.env('pageUrl') + '/Biblioteca')
        cy.get('#terminado').click()
    })
})
