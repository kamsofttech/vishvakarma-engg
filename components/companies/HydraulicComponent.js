import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const HydraulicComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
        navigation={true}
        className="marine_swiper">
        <div className='busi_img'>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/lightDuty1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/lightduty2.jpg" />
          </SwiperSlide>
        </div>
      </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
          <div className='head-block pt-4'>
            <h4 className="w-title">Light-Duty Dump Body</h4>
          </div>
          <div class="mini_head_block mt-5 mb-2">
            <p className="">
            Vishwakarma Engineering brings you a compact yet powerful dump truck body designed for everyday utility and construction tasks. Built with precision and durability in mind, this light-duty body is ideal for transporting soil, debris, sand, and other bulk materials across urban and semi-rural sites. The structure is fabricated from high-strength steel, with reinforced joints and a smooth hydraulic lift system that ensures reliable tipping and easy unloading.
            </p>
            <p className="" >
            Its clean, functional design makes it perfect for municipal work, landscaping, and small-scale construction, offering a dependable solution where maneuverability and efficiency matter most.
            </p>

            <h4>Key Features</h4>
            <ul>
              <li>Compact size suitable for urban or semi-rural operations.</li>
              <li>Hydraulic lift mechanism for tilting the bed during unloading.</li>
              <li>Ideal for construction, landscaping, and municipal work.</li>




            </ul>




          </div>

        </div>

      </div>
    </div>
  )
}

export default HydraulicComponent
