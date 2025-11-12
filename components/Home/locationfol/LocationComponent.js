import React from 'react'
import LocationEmailComponent from './LocationEmailComponent';
import {QuestionCircleFilled} from '@ant-design/icons'
import styles from './location.module.css'
import {Popover} from 'antd';

function LocationComponent() {
  const dirContent = (
    <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.1515287590887!2d73.98220817488755!3d15.313998185261314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb175e99eb8dd%3A0xa807b001c6f3beed!2sOur%20Lady%20of%20Snows%20Church%2C%20Raia!5e0!3m2!1sen!2sin!4v1712741506245!5m2!1sen!2sin"></iframe>
    </div>
  )
  const mapcont= (
    <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.9437643787637!2d73.97728967488787!3d15.325290985251547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb107bc92e4eb%3A0xd6e6d0fe28b6fdd7!2sSolva%20Rd%2C%20Camorlim%2C%20Goa%20403718!5e0!3m2!1sen!2sin!4v1712741642472!5m2!1sen!2sin" ></iframe>
      </div>
  )
  const map2cont= (
    <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15387.500905355588!2d73.85413525079002!3d15.383242352663903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb83b2d4bc95d%3A0xe8a864d8ba3af8ba!2sSancoale%20Industrial%20Estate%2C%20Zuarinagar%2C%20Sancoale%2C%20Goa%20403726!5e0!3m2!1sen!2sin!4v1712741770286!5m2!1sen!2sin" ></iframe>
      </div>
  )
  return (
    <div className={`container ${styles.loc_class} loc_class`} >
      <div className='row'>
        <div className='col-md-4'>
        <div className='head-block'>
              <h4 className="w-title">Office
              <Popover className='dirPop' content={dirContent} >
              < QuestionCircleFilled  className='ic-le'/>
              </Popover>
              </h4>
              
            </div>
            <div className='pt-4'>
          <li><i className="ti-location-pin "></i>
            <strong>Address<p>G/7, Sayee Raya Complex, Near Raia Church, 403720</p>
            </strong></li>
            <li><i className="ti-mobile"></i><strong>Phone</strong><p>7841069245</p></li>
            </div>
            <div>
      <li><i className="ti-email"></i><strong>Email</strong><p>admin@apurvaengineering.com</p></li>
    </div>
        </div>
        <div className='col-md-4'>
        <div className='head-block'>
              <h4 className="w-title">Register
              <Popover className='dirPop' content={mapcont} >< QuestionCircleFilled  className='ic-le'/></Popover>
              </h4>
            </div>
            <div className='pt-4'>
          <li><i className="ti-location-pin "></i>
            <strong>Address<p>Hno- 320/C Solva, Raia Salcete Goa 403720</p>
            </strong></li>
            <li><i className="ti-mobile"></i><strong>Phone</strong><p>9822153245 | 9923590507</p></li>
            </div>
            <div>
      <li><i className="ti-email"></i><strong>Email</strong><p>amar.raicar@apurvaengineering.com</p></li>
    </div>
        </div>
        <div className='col-md-4'>
        <div className='head-block'>
              <h4 className="w-title">Workshop
              <Popover className='dirPop' content={map2cont} >< QuestionCircleFilled  className='ic-le'/></Popover>
              </h4>
            </div>
            <div className='pt-4'>
          <li><i className="ti-location-pin "></i>
            <strong>Address<p>share no SA10 Sancoale Industrial Estate Sancoale Goa, 403726</p>
            </strong></li>
            <li><i className="ti-mobile"></i><strong>Phone</strong><p>9822153245 | 9923590507</p></li>
            </div>
            <div>
      <li><i className="ti-email"></i><strong>Email</strong><p>samir.juwarkar@apurvaengineering.com</p></li>
    </div>
        </div>

      </div>
    </div>
  )
}

export default LocationComponent
