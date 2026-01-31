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
          <h3 className={`pt-3 ${styles.fon}`}>Our mission is to practice responsible auto body building by using eco-friendly processes, reducing waste, and contributing to a cleaner and safer environment.

          </h3>
          {/* <Button>Our Values</Button> */}
        </div>
      </div>
  )
}

export default MissionComponent
