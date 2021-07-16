import './App.css';
import './textStyles.css';
import React  from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {HashRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-row w-100">
        <NavBar />
        <div className='d-flex flex-column w-100'>
          <Main/>
          <Footer />
        </div>
      </div>
      <ToastContainer autoClose={7000} position={"bottom-left"} hideProgressBar={true}/>
    </Router>
  );
}
export default App;
