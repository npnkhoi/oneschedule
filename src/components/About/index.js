import { Helmet } from 'react-helmet'
import './index.scss'
import Contributors from './Contributors'

const About = () => {
  return (
    <div className='d-flex flex-column text-start m-auto col-lg-8'>
      <Helmet>
        <title>About</title>
      </Helmet>

      <h2 className='my-4'>About this website</h2>
        <div className='d-flex flex-column flex-md-row align-items-center justify-content-between'>
          <div className=''>
            <p>This website is founded by Khoi, a Fulbright CS student. He doess&apos;t like copying class schedule to paper when selecting courses each semester. Therefore, he built <b>OneSchedule</b> to help visualize <b>schedules</b> in <b>one</b> minute.</p>
            <p>
              OneSchedule is not an official channel of Fulbright. It is free, <a href='https://github.com/npnkhoi/oneschedule'>open-source</a> and maintained by volunteers.
            </p>
            <p>
            This app is inspired by <a href='https://nusmods.com/'>NUSMods</a>.
            </p>
          </div>
        </div>
        <div>
        
        <h5>Our developers</h5>
        <p>This app would not be possible without these dedicated programmers/friends of mine (Khoi):</p>
        <Contributors />

        <h5>Special thanks to</h5>
        
        <ul>
          <li>Le Thuc Minh Chau for being the first person to support this idea.</li>
          <li> <a href='https://fullstackopen.com/en/'>Full Stack open course</a> from University of Helsinki for teaching Khoi everything about fullstack web development.</li>
          <li>The kind reviewers -- Huyen Nguyen, Tuong Minh, Binh Giang, chi Duyen (Ann), Dan Tam & Huy Vu, anh Vu Le, and more -- for giving their quality feedback.</li>
        </ul>
      </div>
      <div className="w-100 ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/KKc_RMln5UY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default About
