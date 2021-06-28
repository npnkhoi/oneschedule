import { Switch, Route } from 'react-router-dom'
import Timetable from './Timetable';
import Courses from './Courses';

const Main = () => (
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
      <Route path='/courses'>
        <Courses />
      </Route>
      <Route path='/'>
        <Timetable />
      </Route>
      
    </Switch>
  </div>
)

export default Main