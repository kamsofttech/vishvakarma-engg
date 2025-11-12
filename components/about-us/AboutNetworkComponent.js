import React from 'react'
import { Button, Progress } from 'antd'
const AboutNetworkComponent = () => {
  return (
    <>
            <div className="section-full network wow fadeIn" >
            <div className='slider_video_box'>
                <img src='/images/about-us/network1.jpg'/>
            </div>
                <div className='network_img_bg'>
                <div className="container">
                    <div className='intro1-block'>
                        <div className='row'>
                             <div className='col-md-6 '>
                                <div className='net_box mt-20p'>
                                    <div className='net_box_cont'>
                                        <div>
                                            <div className='net_box_ico'>
                                                <div className='net_box_img'>
                                                    <img src='images/icon/netIco1-min.png'/>
                                                </div>
                                                <div className='net_box_ico_cont'>
                                                    <p class="g-sec-title">20+</p>
                                                    <p class="g-sec-desc ">Employess</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div>
                                            <div className='net_box_ico'>
                                                <div className='net_box_img'>
                                                    <img src='images/icon/netIco2-min.png'/>
                                                </div>
                                                <div className='net_box_ico_cont'>
                                                    <p class="g-sec-title">5+</p>
                                                    <p class="g-sec-desc ">States</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div>
                                            <div className='net_box_ico'>
                                                <div className='net_box_img'>
                                                    <img src='images/icon/netIco3-min.png'/>
                                                </div>
                                                <div className='net_box_ico_cont'>
                                                    <p class="g-sec-title">40+</p>
                                                    <p class="g-sec-desc ">Customers</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div>
                                            <div className='net_box_ico'>
                                                <div className='net_box_img'>
                                                    <img src='images/icon/netIco4-min.png'/>
                                                </div>
                                                <div className='net_box_ico_cont'>
                                                    <p class="g-sec-title">10+</p>
                                                    <p class="g-sec-desc ">Experience</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className='net_lic'>
                                        <p className='text-white'>
                                            

Vishwakarma Engineering– Discover the difference that Vishwakarma Engineering can make for your vehicle
.</p>
                                    </div>
                                
                                </div>
                               
                            </div>
                            <div className='col-md-6 pd-r40'>
                                <div className='net_box_right'>

                                    <div className='head-block text-white'>
                                        <h4 className="w-title">OUR VALUE</h4>
                                        <p className='w-title1 text-white'> 10 years of experience in custom vehicle body building</p>
                                    </div>
                                    <div className='progress_box'>
                                        <div className='prg_item'>
                                            <p className='text-white'>Municipal & Utility Vehicles</p>
                                            <Progress size='small' percent={80}/>
                                        </div>
                                        <div className='prg_item'>
                                            <p className='text-white'>Commercial Transport Bodies</p>
                                            <Progress size='small' percent={60}/>
                                        </div>
                                        <div className='prg_item'>
                                            <p className='text-white'>Engineering & Industrial Builds</p>

                                            <Progress size='small' percent={50}/>
                                        </div>
                                        
                                        <div className='prg_item'>

                                            <p className='text-white'>Custom Fabrication & Prototyping</p>

                                            <Progress size='small' percent={50}/>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>


                </div>
                </div>
                
            </div>
        </>
  )
}

export default AboutNetworkComponent
