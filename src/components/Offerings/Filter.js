import { useSelector } from 'react-redux'
import Select from 'react-select'
import { selectCurrentTerm } from '../../store/selectors'
import { CATEGORIES, LEVELS, MAJORS } from '../../utils/course'

const Filter = (props) => {
  const courses = useSelector(selectCurrentTerm)
  // Instructor options for filter
  // NOTE: Majors and levels are saved as constants
  const instructors = courses
    .map(course => course.instructor)
    .filter((value, index, self) => self.indexOf(value) === index)
    .map(name => ({value: name, label: name}))

  return (
    <div className='bg-light p-3 border rounded'>
      <p className='o-heading border-bottom pb-1'>Filters</p>

      <div className='mt-3 mb-1'>Majors</div>
      <Select options={MAJORS} isMulti 
        onChange={props.setMajorFilter}
        />
      
      <div className='mt-3 mb-1'>Instructors</div>
      <Select options={instructors} isMulti
        onChange={props.setInstructorFilter}
      />

      <div className='mt-3 mb-1'>Levels</div>
      <Select options={LEVELS} isMulti
        onChange={props.setLevelFilter}
      />

      <div className='mt-3 mb-1'>Categories (BETA)</div>
      <Select options={CATEGORIES} isMulti
        onChange={props.setCategoryFilter}
      />

    </div>
  )
}

export default Filter