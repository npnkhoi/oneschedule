import { Helmet } from 'react-helmet'
import './index.scss'
import Contributors from './Contributors'
import CTA from '../utils/CTA'

const About = () => {
  return (
    <div className='d-flex flex-column text-start m-auto col-lg-6'>
      <Helmet>
        <title>About</title>
      </Helmet>
      <h2 className='my-4'>About this website</h2>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-between'>
        <p>
          This website is founded by Khoi, a Fulbright CS student. 
          He didn&apos;t like copying class schedule to paper when selecting courses each semester. 
          Therefore, inspired by <a href='https://nusmods.com/'>NUSMods</a>, 
            he built <b>OneSchedule</b> to help visualize <b>schedules</b> in <b>one</b> minute.
          OneSchedule is not an official channel of Fulbright. 
          It is free, <a href='https://github.com/npnkhoi/oneschedule'>open-source</a>, and maintained by volunteers.
        </p>
      </div>
      <div>
      
      <h5>Our team</h5>
      {/* <div className="alert alert-danger w-100" role="alert">
        As our team is graduating from Fulbright, we are actively looking for a developer from Fulbright 
        to maintain the website. 
        Email npnkhoi@gmail.com if you are interested!
      </div> */}
      <Contributors />

      <h2 className='my-4'>How to thank us</h2>
      <div className='text-start'>
      
        <h5>1. Donate</h5>
        <p>
          OneSchedule is free, and will continue to be so. However, it is built entirely by volunteers, who are also busy humans. 
          Therefore, any donation -- big or small -- will be a great encouragement to the developers.
          Please consider donating to OneSchedule (say, 20K VND) via 2 following channels:
        </p>
        <ol className="border border-primary rounded py-3">
          <li>Vietcombank: 0011004405309 (PHAM LAN PHUONG)
          </li>

          <li>Momo: 0395128700 (PHAM LAN PHUONG)
          </li>
        </ol>

        <p>When you give, don&apos;t forget to leave us a message. Your support will be remembered forever.</p>

        <h5>2. Give feedback</h5>
        <p>If you find a bug in the app, or simply want to let us know your thoughts, we would love to here it. That is really the easiest way to support this app.</p>
        <CTA
          text='Give feedback'
          link='https://docs.google.com/forms/d/e/1FAIpQLScIRIBsSk_ciXC_peeanPJXyeh7MB56eaGhOvNWWoznSaM_6g/viewform'
        />
      </div>

      <h2 className='my-4'>Special thanks to</h2>
      
      <ul>
        <li>Le Thuc Minh Chau for being the first person to support this idea.</li>
        <li> <a href='https://fullstackopen.com/en/'>Full Stack open course</a> from University of Helsinki for teaching Khoi everything about fullstack web development.</li>
        <li>The kind reviewers -- Huyen Nguyen, Tuong Minh, Binh Giang, chi Duyen (Ann), Dan Tam & Huy Vu, anh Vu Le, and many more -- for giving their quality feedback.</li>
      </ul>
      </div>
      <div className="w-100 ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/UROWh3csqLk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default About
