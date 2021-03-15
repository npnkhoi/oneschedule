import avatar from './ConNgon.jpg'
import './Help.css'


const Help = () => {
  return (
    <div 
      className="help ml-4 pl-4 d-flex flex-column justify-content-between"
    >
      <img alt="Khoi avatar" src={avatar} className="avatar mb-2"></img>

      <div className="help-text text-left">
        <p>OneSchedule is a quick and simple tool that visualizes your course schedule. Works best with Google Chrome. Made by Nguyen Phung Nhat Khoi (Co23)</p>
        <p className="help-heading">How to use OneSchedule?</p>
        <ul>
          <li> Search for your course </li>
          <li> Add course to timetable </li>
          <li> Remove/hide courses (if needed) </li>
          <li> See your timetable with bare eyes! </li>
        </ul>
        <div>
          <button className="btn">Feedback</button> |
          <button className="btn">Report an issue</button>
        </div>
        
        <p className="help-heading">OneSchedule is free!</p>
        <p>I believe every student has the right to look at their schedule at the best visualization, FOR FREE.</p>

      </div>

      <button 
        className="donate-cta py-2 mt-2 d-flex flex-row justify-content-center align-items-center"
        data-toggle="modal" data-target="#exampleModalCenter"
      >
        <span>Buy me a coffee</span>
        <i className="fas fa-coffee ml-2 text-white"></i>
      </button>

      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title help-heading" id="exampleModalLongTitle">Buy me a coffee</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Momo: 0928714623 </p>
              <p>ACB: 7132717</p>
              <p>Your support means a lot to me.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Help