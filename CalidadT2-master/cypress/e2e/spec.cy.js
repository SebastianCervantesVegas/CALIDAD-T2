describe('Examen T2', () => {
    beforeEach('Iniciar sesion', () => {
        cy.visit(Cypress.env('pageUrl'))
        cy.get('#agBiblioteca').click()
        cy.get('#username').type('admin')
        cy.get('#pass').type('admin')
        cy.get('#login').click()

    })
    it('Agregar y entrar a Biblioteca', () => {
        cy.visit(Cypress.env('pageUrl'))
        cy.get('#agBiblioteca').click()
        cy.get('#biblioteca').click()
        cy.visit(Cypress.env('pageUrl') + '/Biblioteca')
        cy.location('pathname').should('eq', '/Biblioteca')

    })
    it('Seleccionar leyendo en la Biblioteca', () => {
        cy.visit(Cypress.env('pageUrl') + '/Biblioteca')
        cy.get('#leyendo').click()
    })
    it('Seleccionar terminado en la Biblioteca', () => {
        cy.visit(Cypress.env('pageUrl') + '/Biblioteca')
        cy.get('#terminado').click()
    })
})
const { defineConfig } = require("cypress");

module.exports = defineConfig({
    env: {
        pageUrl: 'https://localhost:44320/'
    },
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});