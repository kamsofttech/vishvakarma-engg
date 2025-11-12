import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const SteeringMarineComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
        navigation={true}
        className="marine_swiper">
        <div className='busi_img'>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/dumpbody1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/dumpbody2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='img-fluid' src="/images/servicesimages/dumpbody3.jpg" />
          </SwiperSlide>
        </div>
      </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
          <div className='head-block pt-4'>
            <h4 className="w-title">Standard dump truck body</h4>
          </div>
          <div class="mini_head_block mt-5 mb-2">
            <p className="">
              Vishwakarma Engineering presents a robust and reliable dump truck body built to handle the toughest jobs in construction, mining, and material transport. Designed with real-world conditions in mind, this body combines strength, efficiency, and safety in one powerful package. Constructed from heavy-duty steel and reinforced at critical stress points, the dump bed is built to endure repeated loading and unloading of sand, gravel, rubble, and other bulk materials.
            </p>
            <p className="" >
              The hydraulic lift system ensures smooth and controlled tipping, while the high side panels prevent spillage during transit. Every detail — from the tailgate locking mechanism to the corrosion-resistant finish — reflects Vishwakarma Engineering’s commitment to durability and field-tested performance. Whether you're operating in rural infrastructure, industrial zones, or urban development sites, this dump body delivers the reliability and ruggedness professionals demand.
            </p>

            <h4>Key Features</h4>
            <ul>
              <li>Hydraulic lift mechanism to raise the bed and dump contents.</li>
              <li>High side panels to contain bulk material during transit.</li>
              <li>Rear tailgate that opens automatically or manually during unloading.</li>




            </ul>




          </div>

        </div>

      </div>
    </div>
  )
}

export default SteeringMarineComponent
