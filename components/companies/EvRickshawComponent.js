import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const EvRickshawComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
        navigation={true}
        className="marine_swiper">
        <div className='busi_img'>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/ev-rickshaw-tipper.jpg" />
          </SwiperSlide>
        </div>
      </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
          <div className='head-block pt-4'>
            <h4 className="w-title">EV Rickshaw Tipper</h4>
          </div>
          <div class="mini_head_block mt-5 mb-2">
            <p className="">
            The EV Rickshaw Tipper Body designed by Wishwakarma Motor Works is a compact, eco‑friendly solution for urban and semi‑urban material transport. Built on an electric three‑wheeler chassis, the body integrates a lightweight yet durable steel framework with a hydraulically operated tipping mechanism, enabling efficient loading and unloading of municipal waste, sand, gravel, or construction debris.
            </p>
            <p className="" >
            The tipper body is engineered with reinforced panels and anti‑corrosion coatings to withstand daily operational stresses, while its low‑maintenance electric drivetrain ensures zero emissions and reduced operating costs. Safety features such as side guards, tailgate locks, and anti‑skid flooring are incorporated to protect operators and enhance reliability. With customizable load capacities ranging from 500–800 kg, the EV Rickshaw Tipper Body offers municipalities, contractors, and small businesses a sustainable alternative to conventional fuel‑based carriers. By combining green mobility with practical utility, Wishwakarma Motor Works positions this body as a modern solution for clean, efficient, and cost‑effective urban logistics.

            </p>

            <h4>Key Features</h4>
            <ul>
              <li><b>Eco-Friendly Electric Drivetrain : </b>Zero emissions, low noise, and reduced operating costs.</li>
              <li><b>Hydraulic Tipping Mechanism : </b>Smooth unloading of waste, sand, or construction materials.
</li>
              <li><b>Compact & Agile Design: </b>Ideal for narrow urban lanes and congested areas.
</li>
              <li><b>Durable Construction  : </b>Reinforced steel panels with rust‑proof coating for long service life.
.</li>
              <li><b>Safety Enhancements : </b>Side guards, tailgate locks, and anti‑skid flooring for operator security.
</li>

<li><b>Customizable Load Capacity : </b>  
Options from 500–800 kg to suit different applications.</li>

<li><b>Low Maintenance: </b> 
Simple mechanical systems paired with reliable electric components.</li>






            </ul>




          </div>

        </div>

      </div>
    </div>
  )
}

export default EvRickshawComponent
