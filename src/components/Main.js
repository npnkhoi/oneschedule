import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Timetable from './Schedule';
import Offerings from './Offerings';
import OneCourse from './OneCourse';
import About from './About';
import Contribute from './Contribute';
import './Main.css'

const Main = () => {
  const match = useRouteMatch('/courses/:id')
  
  // If viewing one course, get the info of current course
  const courseId = match
    ? match.params.id
    : null

  return (
  <div className='main p-3 h-100 flex-grow-1'>
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contribute'>
       <Contribute />
      </Route>
      <Route path='/help'>
        <div>help</div>
      </Route>
      <Route path='/courses/:id'>
        <OneCourse courseId={courseId}/>
      </Route>
      <Route path='/courses'>
        <Offerings />
      </Route>
      <Route path='/'>
        <Timetable />
      </Route>
      
    </Switch>
  </div>
)}

export default Main