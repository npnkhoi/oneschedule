import { Helmet } from "react-helmet"

const { default: CTA } = require("../utils/CTA")

const Contribute = () => {
  return (
    <div className='d-flex flex-column text-start m-auto col-lg-8'>
      <Helmet>
        <title>Contribute</title>
      </Helmet>
      <h2 className='mb-4'>Contribute to OneSchedule</h2>
      <div className='text-start row g-3'>
      
        <div className="rounded border p-3">
          <h5>1. Donate</h5>
          <p>
            OneSchedule needs financial support to deliver more features: nicer domain, classroom map, credit planning, course review, and maybe an ecosystem of apps for Fulbright students.
          </p>
          <p>You can donate to OneSchedule via 2 following channels:</p>
          <div>
            <ol>
              <li>ACB: 7132717 (NGUYEN PHUNG NHAT KHOI)
              </li>

              <li>Momo: 0343059217 (NGUYEN PHUNG NHAT KHOI)
              </li>
            </ol>
          </div>
          <p>Don&apos;t forget to leave me a message when you donate. You support will be remembered forever.</p>
        </div>

        <div className='border rounded p-3'>
          <h5>2. Give feedback</h5>
          <p>If you find a bug in the app, or simpy want to let us know your thoughts, we would love to here it. That is really the best and easiest way to support this app.</p>
          <CTA
            text='Give feedback'
            link='https://docs.google.com/forms/d/e/1FAIpQLScIRIBsSk_ciXC_peeanPJXyeh7MB56eaGhOvNWWoznSaM_6g/viewform'
          />
        </div>
        <span>Thanks a ton - Khoi</span>
      </div>
    </div>
  )
}

export default Contribute