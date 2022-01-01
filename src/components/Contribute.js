import React from 'react'
import { Helmet } from 'react-helmet'
import './About.css'
import CTA from './utils/CTA'


const Contribute = () => {
  return (
    <div className='col-10 col-lg-8 m-auto'>
      <Helmet>
        <title>Contribute - OneSchedule</title>
      </Helmet>
      <p className='o-title'>3 ways to contribute to OneSchedule</p>
      <div className='text-start'>
        <p className='o-heading mt-4'>1. Give feedback</p>
        <p>If you find a bug in the app, or simpy want to let us know your thoughts, we would love to here it. That is really the best and easiest way to support this app.</p>
        <CTA 
          text='Give feedback'
          link='https://docs.google.com/forms/d/e/1FAIpQLScIRIBsSk_ciXC_peeanPJXyeh7MB56eaGhOvNWWoznSaM_6g/viewform'
        />

        <p className='o-heading mt-4'>2. Code</p>
        <p>The best way to learn is doing meaningful things under appropriate guidance. Same for coding. OneSchedule is open-source under MIT License. That means you can contribute, copy or redistribute however you want.</p>
        <p>If you know the drill, head toward our Github repository and raise a pull request. Otherwise, talk to me, you are more than welcome!</p>
        <CTA 
          text='Go to Github'
          link='https://github.com/npnkhoi/oneschedule'
        />

        <p className='o-heading mt-4'>3. Design</p>
        <p>Things can be more beautiful when you help to make it. Send us your design ideas via khoi.nguyen.190037@student.fulbright.edu.vn. </p>
        <p>Examples are: interface analysis, new design proposal (big or small), or simply visual feedback.</p>

        {/* <p className='o-heading'>4. Donate</p>
        <p>We are having lots of things to do: hosting public web domain (fuv-schedule.com), add Fulbright classroom map, course review, etc. With limited resources, we currently cannot deliver those features. We need your help! Every dollar we receive will be used to develop OneSchedule.</p>
        <p>You can donate to OneSchedule via 2 following channels:</p>
        <ol>
          <li>ACB Bank
            <ul>
              <li>Account number: 7132717</li>
              <li>Name: Nguyen Phung Nhat Khoi</li>
              <li>Branch: South Saigon</li>
              <li>Message: "OneSchedule"</li>
            </ul>
          </li>

          <li>Momo
            <ul>
              <li>Phone number: 0343059217</li>
              <li>Name: Nguyen Phung Nhat Khoi</li>
              <li>Message: "OneSchedule"</li>
            </ul>
          </li>
        </ol> */}

      </div>
    </div>
  )
}

export default Contribute
