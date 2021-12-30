describe('Navigation through main views', function() {
  beforeEach(function() {
    cy.visit('')
  })
  it('Visit Offerings', function() {
    cy.get('.navbar-btn').get('.fa-list-alt').click()
    cy.contains('Filters')
  })

  it('Visit Contribute', function() {
    cy.get('.navbar-btn').get('.fa-star').click()
    cy.contains('OneSchedule')
  })

  it('Visit About', function() {
    cy.get('.navbar-btn').get('.fa-info').click()
    cy.contains('OneSchedule')
  })

  // TODO: Test Updates site?
})