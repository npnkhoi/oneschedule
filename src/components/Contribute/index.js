import { Helmet } from "react-helmet"
import CTA from "../utils/CTA"

const Contribute = () => {
  return (
    <div className='d-flex flex-column text-start m-auto col-lg-8'>
      <Helmet>
        <title>Contribute</title>
      </Helmet>
      <h2 className='mb-4'>Contribute to OneSchedule</h2>
      <div className='text-start'>
      
        <h5>1. Donate</h5>
        <p>
          OneSchedule is free, and will continue to be so. However, it is built entirely by volunteers, who are also busy humans. 
          Therefore, any donation -- big or small -- will be a great encouragement to the developers.
        </p>
        <p>
          It works like this: you donate, then we are happy and motivated, then we improve OneSchedule, then you visualize your schedule better, then you are happy, then you approach your Meaning of Life.
        </p>
        <p>
          Also, we need financial support to deliver more features: nicer domain, classroom map, credit planning, course review, and maybe an ecosystem of apps for Fulbright students. 
          See our issues and upcoming features <a href="https://github.com/npnkhoi/oneschedule/issues">here</a>. We simply need extrinsic motivation to deliver them.
        </p>
        <p>Please consider donating to OneSchedule (e.g., 20K VND) via 2 following channels:</p>
        <ol className="border border-primary rounded py-3">
          <li>ACB: 7132717 (NGUYEN PHUNG NHAT KHOI, Branch: Nam Sai Gon)
          </li>

          <li>Momo: 0343059217 (NGUYEN PHUNG NHAT KHOI, don&apos;t judge my avatar)
          </li>
        </ol>
        <p>When you give, don&apos;t forget to leave us a message. Your support will be remembered forever.</p>
        {/* <div className="rounded border p-3">
        </div> */}

        <h5>2. Give feedback</h5>
        <p>If you find a bug in the app, or simpy want to let us know your thoughts, we would love to here it. That is really the easiest way to support this app.</p>
        <CTA
          text='Give feedback'
          link='https://docs.google.com/forms/d/e/1FAIpQLScIRIBsSk_ciXC_peeanPJXyeh7MB56eaGhOvNWWoznSaM_6g/viewform'
        />
        <p>
          Cheers,
          <br />
          Khoi
        </p>
      </div>
    </div>
  )
}

export default Contribute
