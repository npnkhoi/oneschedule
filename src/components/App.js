import './App.scss';
import React  from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {HashRouter as Router } from 'react-router-dom'
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column flex-md-row w-100">
        <NavBar />
        <div className='d-flex flex-column w-100'>
          <Main/>
          <Footer />
        </div>
      </div>
      <ToastContainer autoClose={7000} position={"bottom-left"} hideProgressBar={false}/>
    </Router>
  );
}
export default App;
