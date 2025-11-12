import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const PipelineComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
        navigation={true}
        className="marine_swiper">
        <div className='busi_img'>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/openbody1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/openbody2.jpg" />
          </SwiperSlide>
        </div>
      </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
          <div className='head-block pt-4'>
            <h4 className="w-title">Open Cargo Body</h4>
          </div>
          <div class="mini_head_block mt-5 mb-2">
            <p className="">
            Vishwakarma Engineering presents a versatile open cargo body designed for reliable goods transport across industrial, agricultural, and semi-rural routes.  This body features a reinforced flatbed with a custom-fabricated canopy frame, allowing for flexible loading and optional tarpaulin coverage. The structure is engineered using high-strength steel and precision welds to handle heavy loads while maintaining stability and durability.
            </p>
            <p className="" >
            Whether used for bulk materials, packaged goods, or equipment, this open cargo body offers the adaptability and ruggedness that transport operators demand — all backed by Vishwakarma Engineering’s commitment to quality and field-tested design.
            </p>

            <h4>Key Features</h4>
            <ul>
              <li>Flatbed-style open cargo area for flexible loading.</li>
              <li>Metal frame structure likely used to support a cover or secure tall items.</li>
              <li>Dual rear wheels for enhanced load-bearing capacity.</li>
              <li>Elevated chassis suitable for semi-rural or industrial terrain.</li>




            </ul>




          </div>

        </div>

      </div>
    </div>
  )
}

export default PipelineComponent
