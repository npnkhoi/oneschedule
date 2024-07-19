import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom'
import Schedule from '../Schedule';
import Offerings from '../Offerings';
import OneCourse from '../Offerings/OneCourse';
import About from '../About';
import Contribute from '../Contribute';
import './Main.scss'
import Rooms from '../Rooms/index';
import CustomSchedule from '../CustomSchedule';

const Main = () => {
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
          <Route path='/courses/:id'>
            <OneCourse />
          </Route>
          <Route path='/courses'>
            <Offerings />
          </Route>
          <Route path='/rooms'>
            <Rooms />
          </Route>
          
          <Route path='/custom-schedule'>
            <CustomSchedule />
          </Route>

          <Route path='/'>
            <Schedule />
          </Route>

        </Switch>
      </div>
    </div>
  )
}

export default Main