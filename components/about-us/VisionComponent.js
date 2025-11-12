import React from 'react'
import styles from './abt.module.css'
import { Card } from 'antd'

const VisionComponent = () => {
  return (
    <div className={`${styles.dif_class} diff-class`}>
    <div className='container'>
        <div className='head-block-center text-center'>
              <h4 className="w-title">Director profile</h4>
              <p className='w-title1'>A skilled leader who excels in guiding teams</p>
            </div>
            <div className='row pt-4'>
                <div className='col-md-6 text-center'>
                    <Card hoverable>
                        <h1>1.</h1>
                        <h3>BACKGROUND AND EXPERTISE</h3>
                        <h6>
                        Mrs. Poonam Raicar holds a Degree in B.Com and has dedicated her career to the advancement of technical services and spare parts supply. Her profound understanding of the industry dynamics, coupled with her visionary leadership, has propelled Apurva Engineering to new heights of success.
</h6>
                    </Card>
                </div>
                <div className='col-md-6 text-center'>
                    <Card hoverable>
                        <h1>2.</h1>
                        <h3>LEADERSHIP AND MANAGEMENT</h3>
                        <h6>Under Mrs. Raicar's Leadership, Apurva Engineering has flourished into a trusted partner for clients seeking reliable and innovative solutions. Her strategic vision and commitment to excellence have been instrumental in shaping the company's growth trajectory and solidifying its reputation as a leader in the field.
</h6>

                    </Card>
                </div>
                <div className='col-md-6 text-center'>
                    <Card hoverable>
                        <h1>3.</h1>
                        <h3>COLLABORATIVE APPROACH</h3>
                        <h6>Mrs. Raicar collaborates closely with the management team, including Mr. Amar T Raicar and Mr. Samir U S Juwarkar, both seasoned Mechanical Engineers with extensive experience in the marine and industrial sectors. Together, they leverage their collective expertise to drive innovation, streamline operations, and deliver exceptional value to clients.
</h6>
                    </Card>
                </div>
                <div className='col-md-6 text-center'>
                    <Card hoverable>
                        <h1>4.</h1>
                        <h3>COMMITMENT TO QUALITY</h3>
                        <h6>Our unwavering commitment to quality, integrity, and customer satisfaction serves as the cornerstone of Apurva Engineering's ethos. We ensure that the company adheres to the highest standards of professionalism and ethics in all its endeavours, fostering long-term relationships based on trust and transparency.
                        </h6>
                    </Card>
                </div>
            </div>
      </div>
      </div>
  )
}

export default VisionComponent