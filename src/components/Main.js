import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Schedule from './Schedule';
import Offerings from './Offerings';
import OneCourse from './OneCourse';
import About from './About';
import Contribute from './Contribute';
import './Main.scss'

const Main = () => {
  const match = useRouteMatch('/courses/:id')
  
  // If viewing one course, get the info of current course
  const courseId = match
    ? match.params.id
    : null

  return (
  <div className='main w-100 text-center'>
    <div className='container-fluid py-3'>
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
          <Schedule />
        </Route>
        
      </Switch>
    </div>
  </div>
)}

export default Main