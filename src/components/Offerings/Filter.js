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
      <div className='o-heading border-bottom pb-1'>Filters</div>

      <div className='d-flex flex-row flex-wrap justify-content-around'>
        <div className='filter-card d-flex flex-column mt-3 mx-4 mx-lg-0'>
          <div className='mb-1'>Majors</div>
          <Select options={MAJORS} isMulti 
          onChange={props.setMajorFilter}
          defaultValue={props.majorFilter}
          />
        </div>

        <div className='filter-card d-flex flex-column mt-3 mx-4 mx-lg-0'>
          <div className='mb-1'>Instructors</div>
          <Select options={instructors} isMulti
          onChange={props.setInstructorFilter}
          />
        </div>

        <div className='filter-card d-flex flex-column mt-3 mx-4 mx-lg-0'>
          <div className='mb-1'>Levels</div>
          <Select options={LEVELS} isMulti
          onChange={props.setLevelFilter}
          />
        </div>

        <div className='filter-card d-flex flex-column mt-3 mx-4 mx-lg-0'>
          <div className='mb-1'>Categories</div>
          <Select options={CATEGORIES} isMulti
          onChange={props.setCategoryFilter}
          />
        </div>
      </div>
    </div>
  )
}

export default Filter