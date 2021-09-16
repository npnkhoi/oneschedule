import { getLevel, getMajor, getSchedule } from "./course"

describe('course utils', () => {
  // TODO: Test the course file (exist, have enough fields)

  const COURSES = [
    {id: 'CS101_Spring2022_S01', major: 'CS', level: '100'},
    {id: 'ARTS321_Spring2022', major: 'ARTS', level: '300'},
    {id: 'ENG201_Fall9999_S02', major: 'ENG', level: '200'},
  ]

  it('get major', () => {
    COURSES.forEach((course) => {
      expect(getMajor(course.id) === course.major)
    })
  })

  it('get level', () => {
    COURSES.forEach((course) => {
      expect(getLevel(course.id) === course.level)
    })  
  })

  it('get schedule', () => {
    const course = {
      schedule: [
        {
          day: 'Wednesday',
          start_time: '12:00',
          end_time: '14:00'
        }
      ]
    }

    const scheduleText = 'Wednesday 12:00 - 14:00'

    expect(getSchedule(course)).toBe(scheduleText)
  })
})