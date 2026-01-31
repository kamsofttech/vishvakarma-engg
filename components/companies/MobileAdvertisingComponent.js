import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const MobileAdvertisingComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
        navigation={true}
        className="marine_swiper">
        <div className='busi_img'>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/Mobile-Advertising-Vehicle-Body.jpg" />
          </SwiperSlide>
        </div>
      </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
          <div className='head-block pt-4'>
            <h4 className="w-title">Mobile Advertising Vehicle Body</h4>
          </div>
          <div class="mini_head_block mt-5 mb-2">
            <p className="">
            The Mobile Advertising Vehicle Body developed by Wishwakarma Motor Works is engineered to serve as a versatile, high-impact promotional platform on wheels. Designed with a reinforced steel framework and smooth aluminum composite panels, the body provides expansive surfaces for vinyl wraps, flex banners, or LED video walls, ensuring maximum brand visibility in both urban and rural settings.
            </p>
            <p className="" >
            The vehicle is equipped with a reliable power supply through a generator and inverter system, lockable storage for promotional materials, and weather-resistant cladding to ensure durability across diverse environments. By combining mobility, safety, and customization, Wishwakarma Motor Works positions this body as a cost-effective alternative to static billboards, offering clients the flexibility to take their message directly to the people and create memorable, interactive experiences wherever the road leads.
            </p>

            <h4>Key Features</h4>
            <ul>
              <li><b>High-Impact Display Panels: </b>Large side panels engineered for vinyl wraps, LED screens, or backlit flex boards.</li>
              <li><b>Integrated Audio-Visual System: </b>Roof‑mounted speakers and optional LED video walls for live promotions. Power-efficient system with inverter and battery backup.
</li>
              <li><b>Customizable Body Layouts: </b>Options for open stage format, enclosed display cabin, or hybrid setups. Retractable awnings for street activations and product demos.
</li>
              <li><b>Durability & Safety: </b>Reinforced steel framework with weather-resistant cladding. Anti-slip flooring and ergonomic access points for staff.
.</li>
              <li><b>Mobility & Reach: </b>Compact turning radius for city roads. Long-haul capability for regional campaigns.
</li>





            </ul>




          </div>

        </div>

      </div>
    </div>
  )
}

export default MobileAdvertisingComponent
