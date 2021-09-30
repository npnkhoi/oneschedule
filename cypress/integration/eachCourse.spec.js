const { courseData, availableTerms } = require("../../src/data")

describe('Info available for each course', function() {
  it('Visit each course', function() {
    courseData[availableTerms[0]].forEach(course => {
      cy.visit(`/courses/${course.id}`)
      cy.contains(course.title)
      cy.contains(course.instructor)
    })
  })
})