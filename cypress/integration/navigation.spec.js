describe('Navigation through main views', function() {
  beforeEach(function() {
    cy.visit('')
  })
  it('Visit Offerings', function() {
    cy.get('.navbar-btn').contains('Offerings').click()
    cy.contains('Course Offerings')
  })

  it('Visit Contribute', function() {
    cy.get('.navbar-btn').contains('Contribute').click()
    cy.contains('OneSchedule')
  })

  it('Visit About', function() {
    cy.get('.navbar-btn').contains('About').click()
    cy.contains('OneSchedule')
  })

  // TODO: Test Updates site?
})