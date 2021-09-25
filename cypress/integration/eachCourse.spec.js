import {COURSES} from '../../src/data'

describe('Info available for each course', function() {
  it('Visit each course', function() {
    COURSES.forEach(course => {
      cy.visit(`/courses/${course.id}`)
      cy.contains(course.title)
      cy.contains(course.instructor)
    })
  })
})