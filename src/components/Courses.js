import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Courses.css'
import Select from 'react-select'

const getMajor = (id) => {
  const head = id.slice(0, id.indexOf('_'))
  const split = head.search(/\d/g)
  return head.slice(0, split)
}

const getLevel = (id) => {
  const head = id.slice(0, id.indexOf('_'))
  const split = head.search(/\d/g)
  return head[split] + '00'
}

const CourseCard = ({course}) => {
  return <Link className='course-card d-flex flex-column align-items-center m-4 shadow overflow-hidden'
    to={`/courses/${course.id}`}
  >
    <div className='thumbnail p-2 w-100 flex-shrink-0 d-flex justify-content-center align-items-center'>
      <div className='thumbnail-text o-heading multiple-lines'>{course.id}</div>
    </div>
    <div className='d-flex flex-column align-items-start p-3 text-start'>
      <div className='fw-bold o-dark-primary mb-2'>{course.title}</div>
      <div>{course.instructor}</div>
    </div>
  </Link>
}

const Courses = ({courses}) => {
  const [compact, setCompact] = useState(true)
  const [majorFilter, setMajorFilter] = useState([])
  const [instructorFilter, setInstructorFilter] = useState([])
  const [levelFilter, setLevelFilter] = useState([])

  const MAJORS = [
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

  const instructors = courses
    .map(course => course.instructor)
    .filter((value, index, self) => self.indexOf(value) === index)
    .map(name => ({value: name, label: name}))
  
  const LEVELS = ['100', '200', '300'].map(
    level => ({label: level, value: level})
  )

  const getFilteredCourses = () => {
    let ret = courses
    if (instructorFilter.length !== 0) {
      ret = ret.filter(course => instructorFilter
        .map(obj => obj.value)
        .includes(course.instructor)
      )
    }
    if (majorFilter.length !== 0) {
      ret = ret.filter(course => majorFilter
        .map(obj => obj.value)
        .includes(getMajor(course.id))
      )
    }
    if (levelFilter.length !== 0) {
      ret = ret.filter(course => levelFilter
        .map(obj => obj.value)
        .includes(getLevel(course.id))
      )
    }
    return ret
  }

  const TableView = () => {
    return <table className='table table-hover table-bordered align-middle'>
      <thead className='table-light'>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Instructor</th>
        </tr>
      </thead>
      <tbody>
        {getFilteredCourses().map(course => (
          <tr key={course.id}>
              <td>{course.id}</td>
              <td>
                <Link to={`/courses/${course.id}`} className='text-decoration-none fw-bold'>
                  {course.title}
                </Link>
              </td>
              <td>{course.instructor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  }

  const GalleryView = () => {
    return <div className='d-flex flex-row flex-wrap justify-content-center'>
      {getFilteredCourses().map(course => (
        <CourseCard course={course} key={course.id}/>
      ))}
    </div>
  }

  return (
    <div>
      <div className='d-flex flex-row justify-content-between'>
        <div className='flex-grow-1'>
          <p className='o-title'>Course Offerings</p>
            {compact ? <TableView /> : <GalleryView />}
        </div>

        <div className='right-bar flex-shrink-0 flex-grow-0 sticky-top'>
          <div className='bg-light p-3 border rounded mb-3'>
            <div class="form-check form-switch d-flex flex-row align-items-center">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                onClick={() => setCompact(!compact)}
              />
              <label className="form-check-label ms-4" for="flexSwitchCheckDefault">Gallery view</label>
            </div>
          </div>

          <div className='bg-light p-3 border rounded'>
            <p className='o-heading border-bottom'>Filters</p>

            <div className='mt-3 mb-1'>Majors</div>
            <Select options={MAJORS} isMulti 
              onChange={setMajorFilter}
              />
            
            <div className='mt-3 mb-1'>Instructors</div>
            <Select options={instructors} isMulti
              onChange={setInstructorFilter}
              />

            <div className='mt-3 mb-1'>Levels</div>
            <Select options={LEVELS} isMulti
              onChange={setLevelFilter}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
