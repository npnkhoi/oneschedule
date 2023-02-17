import { Dispatch, SetStateAction } from 'react'
import { useSelector } from 'react-redux'
import Select, { Options } from 'react-select'
import { selectCurrentTerm } from '../../store/selectors'
import { CATEGORIES, LEVELS, MAJORS } from '../../utils/course'

// type StringStateSetter = Dispatch<SetStateAction<string>>

// interface FilterProps {
//   majorFilter: string,
//   setMajorFilter: StringStateSetter,
//   instructorFilter: string,
//   setInstructorFilter: Dispatch<SetStateAction<string>>,
//   levelFilter: string,
//   setLevelFilter: Dispatch<SetStateAction<string>>,
//   categoryFilter: string,
//   setCategoryFilter: Dispatch<SetStateAction<string>>
// }

// const fooOptions: Options<string> = ['abc']

const Filter = (props) => {
  const courses = useSelector(selectCurrentTerm)
  // Instructor options for filter
  // NOTE: Majors and levels are saved as constants
  const instructors = courses
    .map(course => course.instructor)
    .filter((value, index, self) => self.indexOf(value) === index)
    .map(name => ({value: name, label: name}))

  return (
    <div className='bg-light p-3 border rounded collapse show' id='collapsable-filters'>
      <h4 className='border-bottom pb-1'>Filters</h4>

      <div className='d-flex flex-column align-items-center'>
        <div className='filter-card d-flex flex-column'>
          <div className='mb-1'>Majors</div>
          <Select options={MAJORS} isMulti 
          value={props.majorFilter}
          onChange={props.setMajorFilter}
          />
        </div>

        <div className='filter-card d-flex flex-column mt-3'>
          <div className='mb-1'>Instructors</div>
          <Select options={instructors} isMulti
          onChange={props.setInstructorFilter}
          value={props.instructorFilter}
          />
        </div>

        <div className='filter-card d-flex flex-column mt-3'>
          <div className='mb-1'>Levels</div>
          <Select options={LEVELS} isMulti
          onChange={props.setLevelFilter}
          value={props.levelFilter}
          />
        </div>

        <div className='filter-card d-flex flex-column mt-3'>
          <div className='mb-1'>Categories</div>
          <Select options={CATEGORIES} isMulti
          onChange={props.setCategoryFilter}
          value={props.categoryFilter}
          />
        </div>
      </div>
    </div>
  )
}

export default Filter