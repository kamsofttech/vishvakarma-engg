import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const ContainerBodyComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
        navigation={true}
        className="marine_swiper">
        <div className='busi_img'>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/Container-body.jpg" />
          </SwiperSlide>
        </div>
      </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
          <div className='head-block pt-4'>
            <h4 className="w-title">Container Body</h4>
          </div>
          <div class="mini_head_block mt-5 mb-2">
            <p className="">
            The Container Body manufactured by Wishwakarma Motor Works is designed for the secure, efficient, and versatile transport of goods across industrial, commercial, and logistics applications. Built on a heavy-duty chassis, the body features a robust rectangular framework fabricated from high-grade mild steel sections, clad with corrugated steel sheets for strength and durability. The container body is engineered to withstand heavy loads, rough handling, and long-haul operations, ensuring reliable performance in demanding environments.
 
            </p>
            <p className="" >
            Equipped with double rear doors fitted with heavy-duty hinges and locking mechanisms, the body provides safe loading and unloading of cargo. Side doors or sliding panels can be customized for specific client requirements. The flooring is constructed from marine-grade plywood or steel plates with anti-slip treatment, offering resilience against wear and tear. Ventilation options, weatherproof sealing, and rust-resistant coatings ensure cargo protection under varying climatic conditions. With customizable dimensions and capacities, Wishwakarma Motor Works offers container bodies suitable for transporting FMCG products, industrial equipment, agricultural produce, and municipal supplies. By combining strength, security, and adaptability, the Container Body is positioned as a dependable solution for logistics operators, contractors, and civic bodies seeking efficient goods movement.
            </p>

            <h4>Key Features</h4>
            <ul>
              <li><b>Heavy-Duty Mild Steel Framework –</b> Corrugated steel panels for strength and durability.</li>
              <li><b>Secure Rear Doors –</b> Double doors with heavy-duty hinges and locking systems.
</li>
              <li><b>Customizable Access –</b> Side doors or sliding panels as per client needs.
</li>
              <li><b>Durable Flooring –</b>Marine-grade plywood or steel plates with anti-slip finish.</li>
              <li><b>Weather Protection –</b>Rust-proof coatings, sealed joints, and ventilation options.
</li>

<li><b>Load Versatility –</b> Suitable for FMCG, industrial goods, agricultural produce, and municipal supplies.</li>

<li><b>Compliance & Roadworthiness –</b> Built to meet CMVR standards for safe transport.</li>






            </ul>




          </div>

        </div>

      </div>
    </div>
  )
}

export default ContainerBodyComponent
