import COURSES from '../data/courses.json'

export const MAJORS = [
  {value: 'ARTS', label: 'Arts and Media'},
  {value: 'CORE', label: 'Core'},
  {value: 'CS', label: 'Computer Science'},
  {value: 'ECON', label: 'Economics'},
  {value: 'ENG', label: 'Engineering'},
  {value: 'FRE', label: 'French'},
  {value: 'HIS', label: 'History'},
  {value: 'IS', label: 'Integrated Science'},
  {value: 'LIT', label: 'Literature'},
  {value: 'MATH', label: 'Mathematics'},
  {value: 'PSY', label: 'Psychology'},
  {value: 'SOCI', label: 'Social Sciences'},
  {value: 'VS', label: 'Vietnamese Studies'},
]

export const LEVELS = ['100', '200', '300'].map(
  level => ({label: level, value: level})
)

export const getCourseInfo = (id) => {
  const matches = COURSES.filter(course => course.id === id)
  if (matches.length > 0) {
    return matches[0]
  } else {
    return null
  }
}

export const getMajor = (id) => {
  const head = id.slice(0, id.indexOf('_'))
  const split = head.search(/\d/g)
  return head.slice(0, split)
}

export const getLevel = (id) => {
  const head = id.slice(0, id.indexOf('_'))
  const split = head.search(/\d/g)
  return head[split] + '00'
}

export const getDates = (course) => `${course.start_date} - ${course.end_date}`

export const getSchedule = (course) => course.schedule
  .map(({day, start_time, end_time}) => `${day} ${start_time} - ${end_time}`)
  .join('\n')

export const getNotes = (course) => course.notes
  .split('\u2022')
  .filter(line => line !== ' ')
  .join('♦ ')

export const getDescription = (course) => (course.description ? course.description : 'N/A')

export const isSelected = (selected, id) => (selected.filter(course => course.id === id).length > 0)