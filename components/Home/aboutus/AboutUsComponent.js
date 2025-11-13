import React from 'react'
import AboutUsHeaderComponent from './AboutUsHeaderComponent'
import AboutTabComponent from './AboutTabComponent';
import styles from './about.module.css'

const AboutUsComponent = () => {
  return (
      <div className={`container ${styles.tab_cl}`}>
          <AboutTabComponent
         title1='Who we are'
         title2='Our vision'
         title3='Our mission'
        //  title4='Our History'
        head0='We provide '
         head1='Auto Body Building services'
         para1 ='Vishwakarma Engineering is a trusted name in auto body building and fabrication, known for delivering high-quality, cost-effective solutions tailored to meet the evolving needs of our clients. Our organization is led by a team of qualified professionals who bring deep technical expertise and hands-on experience to every project. Under their leadership, our skilled fabrication staff—trained and knowledgeable in every aspect of the craft—ensures precision, durability, and excellence in execution.'
          buttoncon='Request a Quote'
          head2='Our Services'
          list1='Award-winning design'
          list2='Super Fast Customer support'
          list3='Email Design'
          list4='Easy to Customize pages'
          list5='Starter Replacement'
          list6='Powerful Performance'
          head3='Vision'
          para3='To be a leading name in vehicle body building by embracing innovation, sustainability, and customer-centric design.'
          para2='At Apurva Engineering, we take pride in being a leading provider of premium technical services and spare parts for the marine/offshore and industrial sectors'
          head4='+91 9422057468
          '
          head5='Our vision list'
          head6='Since 2017'
          para4='Based in the vibrant coastal region of Goa, India, we have established ourselves as a trusted partner renowned for our reliability, expertise, and commitment to excellence.'
          para5='Apurva Engineering registered as MSME dated 04th October 2017 and moving on fast-track at its milestones.'
          head7='Our Achievements'
          head8='Mission'
          para6='To deliver robust, reliable, and road-ready vehicle bodies that empower our clients to move their business forward with confidence.'
          />
           </div>
  )
}

export default AboutUsComponent