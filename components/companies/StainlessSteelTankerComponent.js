import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const StainlessSteelTankerComponent = () => {
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
            <h4 className="w-title">Stainless steel water tanker body.</h4>
          </div>
          <div class="mini_head_block mt-5 mb-2">
            <p className="">
            The Stainless Steel Water Tanker Body from Wishwakarma Motor Works is engineered for safe, hygienic, and long-lasting water transport across municipal, industrial, and agricultural applications. Fabricated from high-grade stainless steel sheets, the cylindrical tank is precision-welded with leak-proof seams and reinforced with stiffeners to withstand dynamic loads during transit. Stainless steel construction ensures corrosion resistance, extended service life, and suitability for potable water distribution, making it ideal for drinking water supply, irrigation, and emergency relief operations.
 
            </p>
            <p className="" >
            The tanker body is mounted securely on a heavy-duty chassis with optimized weight distribution for stability. It is equipped with inlet and outlet valves, manholes, ladders, and sight glasses for easy filling, discharge, and inspection. Optional baffles inside the tank minimize water surge during movement, while pressure release valves and secure sealing systems enhance safety. With customizable capacities ranging from 7,500 to 10,000 liters, Wishwakarma Motor Works offers tailored solutions to meet diverse client needs. By combining durability, hygiene, and compliance with transport standards, Wishwakarma Motor Works positions this Stainless Steel Water Tanker Body as a premium solution for municipalities, contractors, and industries requiring reliable bulk water supply.
            </p>

            <h4>Key Features</h4>
            <ul>
              <li><b>High-Grade Stainless Steel Construction –</b> Corrosion-resistant, hygienic, and suitable for potable water.</li>
              <li><b>Leak-Proof Welding –</b> Precision fabrication ensures durability and safety.
</li>
              <li><b>Reinforced Tank Design –</b> Stiffeners and rings for structural strength under heavy loads.
</li>
              <li><b>Convenient Access –</b> Manholes, ladders, and inspection points for easy maintenance.
.</li>
              <li><b>Efficient Water Handling – </b>Inlet/outlet valves, discharge pipes, and optional flow meters.
</li>

<li><b>Safety Systems –</b>  
 Pressure release valves and secure sealing to prevent spillage.</li>

<li><b>Customization Options –</b> 
 Capacities from 7,500–10,000 liters, baffles, sight glasses, and specialized fittings.</li>






            </ul>




          </div>

        </div>

      </div>
    </div>
  )
}

export default StainlessSteelTankerComponent
