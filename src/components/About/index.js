import { Helmet } from 'react-helmet'
import './index.scss'
import CTA from '../utils/CTA'
import Contributors from './Contributors'

const About = () => {
  return (
    <div className='d-flex flex-column text-start m-auto col-lg-8'>
        <Helmet>
          <title>About</title>
        </Helmet>

      <h2 className='mb-4'>Contribute to OneSchedule</h2>
        <div className='text-start row g-3'>
          <div className="col-md-6">
            <div className='border rounded p-3'>
              <h5>1. Give feedback</h5>
              <p>If you find a bug in the app, or simpy want to let us know your thoughts, we would love to here it. That is really the best and easiest way to support this app.</p>
              <CTA 
                text='Give feedback'
                link='https://docs.google.com/forms/d/e/1FAIpQLScIRIBsSk_ciXC_peeanPJXyeh7MB56eaGhOvNWWoznSaM_6g/viewform'
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="rounded border p-3">
              <h5>2. Donate</h5>
              {/* <p>
                Every dollar you donate will greatly help me deliver more features for OneSchedule (redit planning, classroom map, course review, nicer domain, etc.)
              </p> */}
              <p>You can donate to OneSchedule via 2 following channels:</p>
              <div>
                <ol>
                  <li>ACB Bank
                    <ul>
                      <li>Account number: 7132717</li>
                      <li>Name: Nguyen Phung Nhat Khoi</li>
                      <li>Branch: Nam Sai Gon</li>
                      {/* <li>Message: OneSchedule Donation</li> */}
                    </ul>
                  </li>

                  <li>Momo
                    <ul>
                      <li>Phone number: 0343059217</li>
                      <li>Name: Nguyen Phung Nhat Khoi</li>
                      {/* <li>Message: OneSchedule Donation</li> */}
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>


        </div>

        <h2 className='my-4'>About this website</h2>
          <div className='d-flex flex-column flex-md-row align-items-center justify-content-between'>
            <div className=''>
              <p>This website is mainly created by Khoi, a Fulbright student who programs for fun. He doesn&apos;t like copying class schedule to paper before each semester, when thinking which courses to choose. Therefore, he built OneSchedule to visualize course schedules. This app is inspired by <a href='https://nusmods.com/'>NUSMods</a>.</p>
              <p>
                OneSchedule is not an official channel of Fulbright.
                OneSchedule is free and open-source (
                <a href='https://github.com/npnkhoi/oneschedule'>Github</a>
                ).
              </p>
            </div>
          </div>
        <div>
        <h5>Our developers</h5>
          <Contributors />
        <h5>Special thanks to</h5>
        
        <ul>
          <li>Le Thuc Minh Chau for being the first person to support this idea.</li>
          <li> <a href='https://fullstackopen.com/en/'>Full Stack open course</a> from University of Helsinki for teaching everything about fullstack web development.</li>
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
