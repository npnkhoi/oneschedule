import { getRandomCourses } from '../../src/utils/course'

describe.skip('Schedule', function() {
  const searchAndChoose = (course, numTimeBlocks) => {
    // console.log('adding', course.id);
    cy.get('#search-input').type(course.id + '{enter}', {force: true})
    const ret = numTimeBlocks + course.schedule.length
    cy.get('.fc-event-main').should('have.length', ret)
    return ret
  }

  const trash = (course, numTimeBlocks) => {
    cy.get('.selected-course').contains(course.id).parent().parent().parent().parent().get('.togglers').get('.trash').last().click()
    const ret = numTimeBlocks - course.schedule.length
    cy.get('.fc-event-main').should('have.length', ret)
    return ret
  }

  const hide = (course, numTimeBlocks) => {
    cy.get('.selected-course').contains(course.id).parent().parent().parent().parent().get('.togglers').get('.eye').last().click()
    const ret = numTimeBlocks - course.schedule.length
    cy.get('.fc-event-main').should('have.length', ret)
    return ret
  }
  

  beforeEach(function() {
    cy.viewport('macbook-15')
    cy.visit('')
  })

  it('add one course', function() {  
    const course = getRandomCourses(1)[0]
    searchAndChoose(course, 0)
  })

  it('add and trash one course', function() {
    const course = getRandomCourses(1)[0]
    let numTimeBlocks = 0
    numTimeBlocks = searchAndChoose(course, numTimeBlocks)
    trash(course, numTimeBlocks)
  })

  it('add and hide one course', function() {
    const course = getRandomCourses(1)[0]
    let numTimeBlocks = 0
    numTimeBlocks = searchAndChoose(course, numTimeBlocks)
    hide(course, numTimeBlocks)
  })
})