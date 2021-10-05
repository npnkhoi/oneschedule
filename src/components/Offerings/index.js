import React, { useState } from 'react'
import './index.css'
import { getLevel, getMajor } from '../../utils/course'
import { useSelector } from 'react-redux'
import moment from 'moment'
import config from '../../utils/config'
import TermSwitch from '../TermSwitch'
import { selectCurrentCourseSelection, selectCurrentTerm, selectTerm } from '../../store/selectors'
import { Helmet } from 'react-helmet'
import TableView from './TableView'
import GalleryView from './GalleryView'
import Filter from './Filter'

const Offerings = () => {
  const [compact, setCompact] = useState(true)
  const selectedCourses = useSelector(selectCurrentCourseSelection)
  const courses = useSelector(selectCurrentTerm)
  const term = useSelector(selectTerm)

  const [majorFilter, setMajorFilter] = useState([])
  const [instructorFilter, setInstructorFilter] = useState([])
  const [levelFilter, setLevelFilter] = useState([])
  const [categoryFilter, setCategoryFilter] = useState([])

  const getFilteredCourses = () => {
    const oneFilter = (filterList, courses, getDetail, manyToMany=false) => {
      if (filterList.length !== 0) {
        return courses.filter(course => {
          // Determine if a course passes the filterList
          const matchers = filterList
          .map(obj => obj.value)
          if (manyToMany) {
            return matchers.filter(matcher => getDetail(course).includes(matcher))
              .length > 0
          } else {
            return matchers.includes(getDetail(course))
          }
        })
      } else {
        return courses
      }
    }
    let ret = courses
    // Filter the course list over 3 filters
    ret = oneFilter(instructorFilter, ret, (course) => course.instructor)
    ret = oneFilter(majorFilter, ret, (course) => getMajor(course.id))
    ret = oneFilter(levelFilter, ret, (course) => getLevel(course.id))
    ret = oneFilter(categoryFilter, ret, (course) => course.categories, true)

    return ret
  }

  const filteredCourses = getFilteredCourses()

  return (
    <div>
      <Helmet>
        <title>{term} Offerings - OneSchedule</title>
      </Helmet>
      
      <div className='d-flex flex-column flex-lg-row justify-content-between'>
        <div className='d-flex flex-column flex-grow-1 align-items-center order-2 order-lg-1'>
          <TermSwitch />

          <div className="alert alert-primary w-100" role="alert">
              <b>Last update: {moment(config.last_updated).fromNow()}. </b>
              When in doubt, please double-check on OneStop.
          </div>
          {compact 
          ? <TableView filteredCourses={filteredCourses} 
              selectedCourses={selectedCourses}
            /> 
          : <GalleryView filteredCourses={filteredCourses} />}
        </div>

        <div className='right-bar flex-shrink-0 col-lg-2 ms-lg-4 order-1 order-lg-2'>
          <div className='gallery-view bg-light p-3 border rounded mb-3'>
            <div className="form-check form-switch d-flex flex-row align-items-center">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                onClick={() => setCompact(!compact)}
              />
              <label className="form-check-label ms-4" htmlFor="flexSwitchCheckDefault">Gallery view</label>
            </div>
          </div>

          <Filter
            majorFilter={majorFilter}            
            instructorFilter={instructorFilter}            
            categoryFilter={categoryFilter}            
            levelFilter={levelFilter}
            setMajorFilter={setMajorFilter}            
            setInstructorFilter={setInstructorFilter}            
            setCategoryFilter={setCategoryFilter}            
            setLevelFilter={setLevelFilter}
          />

          <div className='right-bar-course-count mt-3 fw-bold'> {filteredCourses.length} course(s) found </div>
        </div>
      </div>
    </div>
  )
}

export default Offerings
