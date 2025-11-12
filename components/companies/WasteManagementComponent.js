import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const WasteManagementComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
        navigation={true}
        className="marine_swiper">
        <div className='busi_img'>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/wastecollection1.jpg" />
          </SwiperSlide>
        </div>
      </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
          <div className='head-block pt-4'>
            <h4 className="w-title">Waste Collection Body</h4>
          </div>
          <div class="mini_head_block mt-5 mb-2">
            <p className="">
            In the ever-evolving landscape of waste management, the demand for robust and reliable solid waste equipment is paramount. As environmental concerns escalate and regulations tighten, businesses and municipalities alike seek innovative solutions to tackle waste effectively. At Vishwakarma Engineering, we are dedicated to transforming the industry with advanced solid waste equipment solutions engineered to maximize efficiency and sustainability
            </p>
            <p className="" >
            Whether deployed for household waste pickup, community cleanups, or rural sanitation drives, this build reflects Vishwakarma Engineering’s commitment to civic utility, structural integrity, and field-ready performance.
            </p>

            <h4>Key Features</h4>
            <ul>
              <li>Fixed container mounted on the truck bed.</li>
              <li>Rear or side access for manual or mechanical loading.</li>
              <li>Suitable for village panchayat or municipal use, especially in rural or semi-urban zones.</li>




            </ul>




          </div>

        </div>

      </div>
    </div>
  )
}

export default WasteManagementComponent
