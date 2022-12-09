/// <reference types="cypress" />
describe('login to google calendar', () => {
    beforeEach(() => {
        
      })
      it('login', () => {
        cy.visit('https://accounts.google.com')
        // cy.origin('https://accounts.google.com', () => {
            const resizeObserverLoopError = /^[^(ResizeObserver loop limit exceeded)]/;
            Cypress.on('uncaught:exception', (err) => {
                /* returning false here prevents Cypress from failing the test */
                if (resizeObserverLoopError.test(err.message)) {
                return false;
                }
            });
            cy.get('input#identifierId[type="email"]')
            .type(Cypress.env("USERNAME"))

            cy.contains('Next')
            .click()

            cy.get('input[type="password"]')
            .type(Cypress.env("PASSWORD"),{ log: false })

            cy.contains('Next')
            .click();
            cy.visit('https://calendar.google.com')
        });
        
})
