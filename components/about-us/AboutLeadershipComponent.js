import React from 'react';
import styles from './abt.module.css'
import { Button } from 'antd';

const AboutLeadershipComponent = () => {
  return (
    <div className={` ${styles.lead} bg-light-white lead `} >
      <div className={styles.new_C}>
      <div className="container ">
      <div className='head-block pt-6'>
              <h4 className="w-title">Our vision</h4>
              {/* <p className='w-title1'>A legacy of Excellence”</p> */}
            </div>
          <h3 className={`pt-3 ${styles.fon}`}>To be a leading force in the vehicle body building industry by delivering innovative, reliable, and customized engineering solutions that drive progress across transportation and utility sectors. We envision a future where every vehicle we build enhances operational efficiency, safety, and sustainability for our clients.


          </h3>
          {/* <Button>Meet Our team</Button> */}
        </div>
        </div>
      </div>
  )
}

export default AboutLeadershipComponent
