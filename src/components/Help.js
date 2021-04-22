import avatar from '../assets/ConNgon.jpg'
import './Help.css'
import MomoQR from '../assets/momo-qr.jpg'

const Help = () => {
  return (
    <div 
      className="help ml-4 pl-4 mb-4 d-flex flex-column justify-content-between"
    >
      <img alt="Khoi avatar" src={avatar} className="avatar mb-2"></img>

      <div className="help-text text-left">
        <p>OneSchedule is a quick and simple tool that visualizes your course schedule. Works best with Google Chrome. Made by Nguyen Phung Nhat Khoi (Co23)</p>
        <p className="heading-2">How to use OneSchedule?</p>
        <ul>
          <li> Search for your course </li>
          <li> Add course to timetable </li>
          <li> Remove/hide courses (if needed) </li>
          <li> See your timetable with bare eyes! </li>
        </ul>
        <div className="mb-3">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScIRIBsSk_ciXC_peeanPJXyeh7MB56eaGhOvNWWoznSaM_6g/viewform?usp=sf_link"
            className="feedback"
            target="_blank"
            rel="noreferrer"
          >
            Feedback or Report an issue
          </a>
        </div>
        
        <p className="heading-2">OneSchedule is free!</p>
        <p>I believe every student has the right to look at their schedule at the best visualization, FOR FREE.</p>

      </div>

      <button 
        className="donate-cta py-2 mb-4 d-flex flex-row justify-content-center align-items-center"
        data-toggle="modal" data-target="#exampleModalCenter"
      >
        <span>Buy me a coffee</span>
        <i className="fas fa-coffee ml-2 text-white"></i>
      </button>

      <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title heading-2" id="exampleModalLongTitle">Buy me a coffee</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>ACB: 7132717 (NGUYEN PHUNG NHAT KHOI) </p>
              <p>Momo: 0928714623 </p>
              <img src={MomoQR} alt="Momo QR Code" className="w-75"></img>
              <p>If you are sending me a gift, don't forget to tell me who you are. Your support means a lot to me.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Help