import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const EarthMovingComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
        navigation={true}
        className="marine_swiper">
        <div className='busi_img'>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/earthmoving.jpg" />
          </SwiperSlide>
        </div>
      </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
          <div className='head-block pt-4'>
            <h4 className="w-title">Earth Moving Machinery Carrier Body</h4>
          </div>
          <div class="mini_head_block mt-5 mb-2">
            <p className="">
            The Earth Moving Machinery Carrier Body designed by wishwakarma Motor Works is engineered to transport heavy construction equipment such as excavators, loaders, and bulldozers with maximum safety and efficiency. Built on a robust chassis with a reinforced steel platform, the carrier body features heavy-duty flooring, cross‑members, and side supports to withstand concentrated loads and dynamic stresses during transit. The body is equipped with hydraulic or mechanical ramps for easy loading and unloading of machinery, along with anchoring points and chains to secure equipment firmly in place.
            </p>
            <p className="" >
            Anti‑skid surfaces and weather‑resistant coatings enhance durability, while optional toolboxes and side railings provide added utility for operators. Designed in compliance with CMVR standards, the carrier body ensures roadworthiness while meeting the demanding requirements of construction contractors, mining operators, and municipal projects. By combining strength, functionality, and customization, Wishwakarma Motor Works positions this body as a reliable solution for moving earth‑moving machinery across diverse terrains, enabling clients to maximize uptime and streamline operations.
            </p>

            <h4>Key Features</h4>
            <ul>
              <li><b>Heavy-Duty Platform  : </b>Reinforced steel deck with cross‑members designed to carry concentrated loads of excavators, loaders, and bulldozers.</li>
              <li><b>Hydraulic/Mechanical Loading Ramps : </b>Sturdy rear ramps for smooth loading and unloading of heavy machinery, with anti‑skid surfacing.
</li>
              <li><b>Secure Anchoring System: </b>Multiple lashing points, chains, and clamps to firmly secure equipment during transit.

</li>
              <li><b>Durable Flooring & Coating : </b>Anti‑slip flooring with weather‑resistant paint and rust‑proof treatment for long service life.
.</li>
              <li><b>Side & Rear Safety Rails : </b>Optional guard rails to protect operators and prevent accidental slips during loading.
</li>
<li><b>Tool & Utility Storage  : </b>Lockable toolboxes and compartments for chains, straps, and operator equipment.
</li>
<li><b>Compliance & Roadworthiness   : </b>Designed in line with CMVR standards, ensuring safe and legal operation on highways and construction routes.
</li>





            </ul>




          </div>

        </div>

      </div>
    </div>
  )
}

export default EarthMovingComponent
