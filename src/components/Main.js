import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Timetable from './Schedule';
import Courses from './Courses';
import OneCourse from './OneCourse';
import courses from '../data/courses.json'

const Main = () => {
  const match = useRouteMatch('/courses/:id')
  const course = match
    ? courses.find(course => course.id === match.params.id)
    : null

  return (
  <div className='p-4 h-100 flex-grow-1'>
    <Switch>
      <Route path='/about'>
        <div>about</div>
      </Route>
      <Route path='/contribute'>
        <div>contribute</div>
      </Route>
      <Route path='/help'>
        <div>help</div>
      </Route>
      <Route path='/courses/:id'>
        <OneCourse course={course}/>
      </Route>
      <Route path='/courses'>
        <Courses />
      </Route>
      <Route path='/'>
        <Timetable />
      </Route>
      
    </Switch>
  </div>
)}

export default Main