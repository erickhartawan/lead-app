/// <reference types="cypress" />

describe('Footer Component', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has a closed footer being displayed', () => {
    cy.get('footer')
      .should('have.css', 'height', '24px')
      .and('be.visible')

    cy.get('i')
    cy.contains('remove')
  })

  it('opens and checks the footer content', () => {
    cy.get('footer')
      .click()
      .should('have.css', 'opacity', '1')
      .and('be.visible')

    cy.get('i')
    cy.contains('keyboard_arrow_down')

    cy.get('span')
    cy.contains('Created by Renan Sigolo')

    cy.get('p')
    cy.contains(
      `Mr Renan Ferreira is a student of Kent’s Diploma of Website Development course who offered to create this website as a volunteer project. Kent Institute Australia sincerely thanks Renan and acknowledges the amazing contribution he has made to the LEAD program by volunteering his time and skills to make this service available to his fellow students.`
    ).click()
  })

  it('has a closed footer being displayed', () => {
    cy.get('footer')
      .should('have.css', 'height', '24px')
      .and('be.visible')

    cy.get('i')
    cy.contains('remove')
  })
})
