import React from 'react';
import styles from './abt.module.css'

const AboutIhmComponent = () => {
  return (
    <div className={`bg-light-white ${styles.abt_cl}  `} >
      <div className="container ">
      <div className='head-block '>
              <h4 className="w-title">Welcome to Apurva Engineering</h4>
              {/* <p className='w-title1'>A legacy of Excellence”</p> */}
            </div>
        <div className={`row pt-3`}>
          <div className='col-md-6 '>
          <h5>Founded by Mr. Shekhar Chari, Vishwakarma Engineering is a leading name in the vehicle body building industry, known for its commitment to quality, innovation, and precision. With years of hands-on experience and a deep understanding of engineering dynamics, we specialize in crafting custom-built vehicle bodies tailored to the unique needs of commercial, industrial, and utility sectors. Our state-of-the-art fabrication techniques and attention to detail ensure that every build meets the highest standards of safety, durability, and performance.

          </h5></div>
          <div className="col-md-6">
            <p>Driven by Mr. Chari’s vision and leadership, our team adopts a customer-first approach—collaborating closely with clients to deliver solutions that are both functional and future-ready. From structural design to final finishing, every project reflects our dedication to excellence and reliability. Whether you're expanding your fleet or developing a specialized vehicle, Vishwakarma Engineering stands as your trusted partner in delivering robust and customized body building solutions.
</p>
              </div>
        </div>
      </div>
    </div>
  )
}

export default AboutIhmComponent