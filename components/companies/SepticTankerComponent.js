import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const SepticTankerComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
        navigation={true}
        className="marine_swiper">
        <div className='busi_img'>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/septic-tanker-body.jpg" />
          </SwiperSlide>
        </div>
      </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
          <div className='head-block pt-4'>
            <h4 className="w-title">Septic Tanker Body</h4>
          </div>
          <div class="mini_head_block mt-5 mb-2">
            <p className="">
            The Septic Tanker Body manufactured by Wishwakarma Motor Works is purpose-built for the safe collection, transport, and disposal of sewage and wastewater in municipal and industrial applications. Constructed with a heavy-duty cylindrical tank mounted on a robust chassis, the body is fabricated from corrosion-resistant mild steel or stainless steel to ensure long service life under harsh operating conditions. 
            </p>
            <p className="" >
            The tanker is equipped with a high-capacity vacuum pump and suction hoses that enable efficient extraction of sludge from septic tanks, drains, and manholes, while rear discharge valves and pressure release systems facilitate controlled disposal at treatment facilities. Safety features such as anti-spill sealing, pressure gauges, and reinforced hose storage compartments are integrated to maintain hygiene and operator security. By combining durability, functionality, and compliance with municipal standards, Wishwakarma Motor Works positions this body as a reliable solution for sanitation departments and contractors, ensuring efficient waste management and contributing to cleaner communities.
            </p>

            <h4>Key Features</h4>
            <ul>
              <li><b>Heavy-Duty Cylindrical Tank : </b>Fabricated from corrosion-resistant mild steel or stainless steel, designed for long service life.</li>
              <li><b>High-Capacity Vacuum Pump  : </b>Efficient suction system for rapid extraction of sludge and wastewater from septic tanks and drains.
</li>
              <li><b>Reinforced Suction & Discharge System: </b>Flexible hoses with secure couplings, rear discharge valves, and pressure release mechanisms for safe operation.
</li>
              <li><b>Hygiene & Safety Controls  : </b>Anti-spill sealing, pressure gauges, and leak-proof fittings to maintain sanitation standards.
.</li>
              <li><b>Operator-Friendly Design : </b>Hose storage racks, lockable tool compartments, and optional wash-down systems for ease of use.
</li>

<li><b>Compliance & Roadworthiness: </b>  
Built to meet CMVR standards, ensuring safe transport and municipal approval.</li>

<li><b>Compliance & Roadworthiness: </b> 
Built to meet CMVR standards, ensuring safe transport and municipal approval.</li>






            </ul>




          </div>

        </div>

      </div>
    </div>
  )
}

export default SepticTankerComponent
