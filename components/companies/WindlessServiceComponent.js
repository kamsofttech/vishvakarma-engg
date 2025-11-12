import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const WindlessServiceComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
        navigation={true}
        className="marine_swiper">
        <div className='busi_img'>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/tanker1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/tanker2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/tanker3.jpg" />
          </SwiperSlide>
        </div>
      </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
          <div className='head-block pt-4'>
            <h4 className="w-title">Tanker Body</h4>
          </div>
          <div class="mini_head_block mt-5 mb-2">
            <p className="">
            Vishwakarma Engineering proudly builds water tanker bodies that combine rugged construction with reliable performance for daily field operations. Designed to serve municipal, agricultural, and industrial needs, this tanker features a precision-welded cylindrical tank mounted on a reinforced chassis, ensuring safe and efficient transport of water across varied terrain. The body includes a rear dispensing hose system for controlled delivery, while the exterior is finished with corrosion-resistant coatings.
            </p>
            <p className="" >
            Whether supplying water to remote sites or supporting infrastructure projects, this build reflects Vishwakarma Engineering’s commitment to durability, functionality, and field-ready design.
            </p>

            <h4>Key Features</h4>
            <ul>
              <li>Cylindrical tank mounted on the chassis.</li>
              <li>Rear hose outlet for controlled water dispensing.</li>
              <li>Painted and labeled exterior for identification and branding.</li>
              <li>Moderate to large capacity, depending on chassis size and tank volume.</li>




            </ul>




          </div>

        </div>

      </div>
    </div>
  )
}



export default WindlessServiceComponent
