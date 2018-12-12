/// <reference types="cypress" />

describe('App Component', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Application has the correct title!', () => {
    cy.title().should('include', 'LEAD Points - Kent')
  })
})
