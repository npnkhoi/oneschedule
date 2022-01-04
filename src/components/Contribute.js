import React from 'react'
import { Helmet } from 'react-helmet'
import './About.scss'
import CTA from './utils/CTA'


const Contribute = () => {
  return (
    <div className='col-10 col-md-8 fs-5 m-auto'>
      <Helmet>
        <title>Contribute - OneSchedule</title>
      </Helmet>
      <h1 className='display-4 mb-4'>4 ways to contribute to OneSchedule</h1>
      <div className='text-start'>
        <h3>1. Give feedback</h3>
        <p>If you find a bug in the app, or simpy want to let us know your thoughts, we would love to here it. That is really the best and easiest way to support this app.</p>
        <CTA 
          text='Give feedback'
          link='https://docs.google.com/forms/d/e/1FAIpQLScIRIBsSk_ciXC_peeanPJXyeh7MB56eaGhOvNWWoznSaM_6g/viewform'
        />

        <h3>2. Code</h3>
        <p>The best way to learn is doing meaningful things under appropriate guidance. Same for coding. OneSchedule is open-source under MIT License. That means you can contribute, copy or redistribute however you want.</p>
        <p>If you know the drill, head toward our Github repository and raise a pull request. Otherwise, talk to me, you are more than welcome!</p>
        <CTA 
          text='Go to Github'
          link='https://github.com/npnkhoi/oneschedule'
        />

        <h3>3. Design</h3>
        <p>Things can be more beautiful when you help to make it. Send us your design ideas via khoi.nguyen.190037@student.fulbright.edu.vn. </p>
        <p>Examples are: interface analysis, new design proposal (big or small), or simply visual feedback.</p>

        <h3>4. Donate</h3>
        <p>
          Every dollar you donate will greatly help me deliver more features for OneSchedule (redit planning, classroom map, course review, nicer domain, etc.)
        </p>
        <p>You can donate to OneSchedule via 2 following channels:</p>
        <ol>
          <li>ACB Bank
            <ul>
              <li>Account number: 7132717</li>
              <li>Name: Nguyen Phung Nhat Khoi</li>
              <li>Branch: South Saigon</li>
              <li>Message: OneSchedule Donation</li>
            </ul>
          </li>

          <li>Momo
            <ul>
              <li>Phone number: 0343059217</li>
              <li>Name: Nguyen Phung Nhat Khoi</li>
              <li>Message: OneSchedule Donation</li>
            </ul>
          </li>
        </ol>

      </div>
    </div>
  )
}

export default Contribute
