import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const MarineTransmissionComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
        navigation={true}
        className="marine_swiper">
        <div className='busi_img'>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/hydraulic1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/hydraulic2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/hydraulic3.jpg" />
          </SwiperSlide>
        </div>
      </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
          <div className='head-block pt-4'>
            <h4 className="w-title">Hydraulic Dump Body (Compact Class)</h4>
          </div>
          <div class="mini_head_block mt-5 mb-2">
            <p className="">
            Vishwakarma Engineering delivers a smart, compact hydraulic dump body designed for efficient material handling in tight spaces and semi-rural environments. Built on a sturdy utility truck platform, this body features a precision-fitted hydraulic lift system that allows quick and controlled unloading of sand, soil, or debris. The dump bed is fabricated from high-strength steel, offering both durability and visibility on active sites.
            </p>
            <p className="" >
            With its compact footprint and reliable tipping mechanism, this build is ideal for contractors, municipal crews, and small-scale construction teams who need performance without compromising maneuverability.
            </p>

            <h4>Key Features</h4>
            <ul>
              <li>Hydraulic lift mechanism for tilting the bed.</li>
              <li>Compact size ideal for urban, roadside, or semi-rural operations.</li>
              <li>Raised dump bed reveals underbody hydraulic components.</li>
              <li>Green-painted cargo bed often used for visibility or branding.</li>




            </ul>




          </div>

        </div>

      </div>
    </div>
  )
}




export default MarineTransmissionComponent
