import COURSES from './courses.json'

describe('Course data', () => {
  it('is a list', () => {
    expect(COURSES).toBeInstanceOf(Array)
  })

  it('each element has all required fields', () => {
    const REQUIRED_FIELDS = ['id', 'title', 'instructor', 'credits', 'description', 'schedule']
    COURSES.forEach(course => {
      REQUIRED_FIELDS.forEach(field => {
        expect(course[field]).toBeDefined()
      })
    })
  })

  it('schedule attribute has correct format', () => {
    COURSES.forEach(course => {
      course.schedule.forEach(block => {
        const timeMatcher = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/gm
        expect(timeMatcher.test(block.start_time)).toBeTruthy
        expect(timeMatcher.test(block.end_time)).toBeTruthy

        const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        expect(DAYS.includes(block.day)).toBeTruthy()
      })
    })
  })
})