import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const ValvesComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
        navigation={true}
        className="marine_swiper">
        <div className='busi_img'>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/protected1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/protected2.jpg" />
          </SwiperSlide>
        </div>
      </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
          <div className='head-block pt-4'>
            <h4 className="w-title">Secure Utility Body</h4>
          </div>
          <div class="mini_head_block mt-5 mb-2">
            <p className="">
            Vishwakarma Engineering presents a compact, secure utility body designed for specialized transport and mobile service applications. Built on the reliable Super Carry platform, this enclosure features a fully enclosed metal cabin with reinforced panels, ideal for safeguarding sensitive cargo or creating a mobile workspace. The structure includes a side ventilation window and a lockable rear access door, offering both functionality and security.
            </p>
            <p className="" >
            Whether used for document handling, mobile operations, or secure delivery, this body reflects Apurva Engineering’s commitment to precision fabrication, durability, and purpose-driven design.
            </p>

            <h4>Key Features</h4>
            <ul>
              <li>Fully enclosed metal compartment with riveted panels.</li>
              <li>Side window for ventilation and visibility.</li>
              <li>Reinforced rear door for controlled access.</li>
              <li>Compact footprint ideal for urban or semi-rural deployment.</li>




            </ul>




          </div>

        </div>

      </div>
    </div>
  )
}

export default ValvesComponent
