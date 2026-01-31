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
            <img className='img-fluid' src="/images/servicesimages/Mild-steel-water-tanker-body.jpg" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/tanker2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/tanker3.jpg" />
          </SwiperSlide> */}
        </div>
      </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
          <div className='head-block pt-4'>
            <h4 className="w-title">Mild steel water tanker body</h4>
          </div>
          <div class="mini_head_block mt-5 mb-2">
            <p className="">
            The Mild Steel Water Tanker Body from Wishwakarma Motor Worls is purpose-built for the safe storage and transport of potable and non-potable water across municipal, industrial, and agricultural applications. Fabricated from high-grade mild steel sheets, the cylindrical tank is reinforced with internal stiffeners and external rings to ensure structural integrity under varying load conditions. The body is mounted on a robust chassis with precision-engineered supports, distributing weight evenly for stability during transit.
            </p>
            <p className="" >
            Equipped with inlet and outlet valves, manholes, and a ladder for easy access, the tanker body is designed for operator convenience and efficient water handling. Anti-corrosion coatings and leak-proof welding techniques extend service life, while optional features such as baffles (to reduce water surge), sight glasses, and flow meters enhance functionality. Safety is prioritized through pressure release valves and secure sealing systems, ensuring reliable performance in diverse environments. By combining durability, practicality, and compliance with transport standards, Wishwakarma Motor Works positions this Mild Steel Water Tanker Body as a dependable solution for municipalities, contractors, and industries requiring bulk water supply. Its customizable capacities and fittings make it adaptable for drinking water distribution, irrigation projects, construction sites, and emergency relief operations.

            </p>

            <h4>Key Features</h4>
            <ul>
              <li><b>Heavy-Duty Mild Steel Construction –</b> Cylindrical tank with reinforced rings and stiffeners.</li>
              <li><b>Leak-Proof Welding –</b> Ensures durability and long service life.</li>
              <li><b>Anti-Corrosion Coating –</b> Protects against rust and weather damage.</li>
              <li><b>Convenient Access –</b> Manholes, ladders, and inspection points for easy maintenance.</li>
              <li><b>Efficient Water Handling –</b> Inlet/outlet valves, discharge pipes, and optional flow meters.</li>
              <li><b>Safety Systems –</b> Pressure release valves and secure sealing to prevent spillage.</li>
              <li><b>Customization Options –</b> Tank capacities, baffles, sight glasses, and specialized fittings.</li>




            </ul>




          </div>

        </div>

      </div>
    </div>
  )
}



export default WindlessServiceComponent
