import React from 'react';
import styles from './abt.module.css'
import { Button } from 'antd';

const MissionComponent = () => {
  return (
    <div className={` ${styles.newl} bg-light-white lead `} >
      <div className="container ">
      <div className='head-block'>
              <h4 className="w-title">Our mission</h4>
              {/* <p className='w-title1'>A legacy of Excellence”</p> */}
            </div>
          <h3 className={`pt-3 ${styles.fon}`}>Our mission is to engineer excellence into every vehicle body we build. We are dedicated to delivering innovative, durable, and tailor-made body building solutions that empower businesses across transportation, logistics, infrastructure, and public service sectors.

          </h3>
          {/* <Button>Our Values</Button> */}
        </div>
      </div>
  )
}

export default MissionComponent
