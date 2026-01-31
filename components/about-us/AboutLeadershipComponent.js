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
          <h3 className={`pt-3 ${styles.fon}`}>To be a leading name in vehicle body building by embracing innovation, sustainability, and customer-centric design.


          </h3>
          {/* <Button>Meet Our team</Button> */}
        </div>
        </div>
      </div>
  )
}

export default AboutLeadershipComponent
