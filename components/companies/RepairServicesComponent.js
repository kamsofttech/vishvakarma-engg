import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const RepairServicesComponent = () => {
    return (
        <div>
            <Swiper slidesPerView={1} spaceBetween={20}
                navigation={true}
                className="marine_swiper">
                <div className='busi_img'>
                    <SwiperSlide>
                        <img className='img-fluid' src="/images/servicesimages/flatbody1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='img-fluid' src="/images/servicesimages/flatbody2.jpg" />
                    </SwiperSlide>
                
                </div>
            </Swiper>

            <div className='iron_trade_cont'>
                <div className='iron_trade_sec'>
                    <div className='head-block pt-4'>
                        <h4 className="w-title">Flatbed Body</h4>
                    </div>
                    <div class="mini_head_block mt-5 mb-2">
                        <p className="">
                            Vishwakarma Engineering proudly introduces a flatbed tow truck body — a rugged, thoughtfully designed solution built for real-world recovery and transport needs. Made from high-grade structural steel with reinforced welds, this body is built to last through heavy-duty use and tough terrain. Its low-profile deck is treated with an anti-slip surface, making vehicle loading safer and more secure, while the overall design ensures smooth, reliable operation even in demanding conditions. Whether you're towing, transporting, or recovering vehicles, this flatbed body delivers the strength and confidence professionals rely on.
                        </p>

                        <h4>Key Features</h4>
                        <ul>
                            <li><b>Long, flat platform:</b> Ideal for carrying cars, bikes, or machinery.</li>
                            <li><b>Rear ramps:</b> Allow vehicles to be driven or winched onto the bed. </li>
                            <li><b>No side panels:</b> Offers flexibility for loading from any direction. </li>
                            <li><b>Hydraulic tilt/lift (optional):</b> Some models include a tilting mechanism to ease loading.</li>



                        </ul>




                    </div>

                </div>

            </div>
        </div>
    )
}

export default RepairServicesComponent