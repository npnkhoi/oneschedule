describe('Navigation through main views', function() {
  beforeEach(function() {
    cy.visit('')
  })
  it('Visit Offerings', function() {
    cy.get('.navbar').contains('Courses').click()
    cy.contains('Filters')
  })

  it('Visit About', function() {
    cy.get('.navbar').contains('About').click()
    cy.contains('Special thanks')
  })

  // TODO: Test Updates site?
})