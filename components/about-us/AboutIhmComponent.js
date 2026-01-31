import React from 'react';
import styles from './abt.module.css'

const AboutIhmComponent = () => {
  return (
    <div className={`bg-light-white ${styles.abt_cl}  `} >
      <div className="container ">
      <div className='head-block '>
              <h4 className="w-title">Welcome to Wishwakarma Motor Works</h4>
              {/* <p className='w-title1'>A legacy of Excellence”</p> */}
            </div>
        <div className={`row pt-3`}>
          <div className='col-md-6 '>
          <h5>The company was established in 1969 by Mr. Sakharam Raghunath Chari during a highly challenging period, when Goa 
            was just beginning to emerge as a mining hub. At that time, transportation infrastructure was extremely limited, 
            and the availability of raw materials was scarce. Procuring essential materials often required extensive travel to 
            Delhi, Kolkata, and neighboring states, reflecting the determination and vision behind the company’s foundation. A 
            major milestone was achieved with the introduction of Goa’s first tipper body built on the Tata 1210D chassis, 
            which proved to be a remarkable success and set the foundation for sustained growth.



          </h5></div>
          <div className="col-md-6">
            <p>In the late 1990s, Goa experienced a construction boom, resulting in a sharp increase in demand for sand and 
              aggregates. Due to Goa’s narrow and compact road networks, there was a growing need for smaller, more 
              maneuverable tippers. Around the same time, three Japanese pioneers—Mazda, Eicher, and Toyota—entered 
              the Indian market with new vehicle models. Recognizing this opportunity, we designed and developed compact 
              tipper bodies in-house, specifically tailored to meet Goa’s unique transportation requirements. This period 
              marked our evolution as specialized truck body builders in Goa, a position we proudly hold to this day. Guided 
              by our history and experience, we continue to transform pioneering ideas into practical, reliable solutions, 
              consistently delivering innovation, quality, and durability to our customers.
</p>
              </div>
        </div>
      </div>
    </div>
  )
}

export default AboutIhmComponent