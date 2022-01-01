import { Link } from "react-router-dom"

const CourseCard = ({course}) => {
  return <Link 
    to={`/courses/${course.id}`}
    className='course-card d-flex flex-column align-items-center m-4 shadow overflow-hidden'
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


const GalleryView = ({filteredCourses}) => {
  return <div className='d-flex flex-row flex-wrap justify-content-center'>
    {filteredCourses.map(course => (
      <CourseCard course={course} key={course.id}/>
    ))}
  </div>
}

export default GalleryView