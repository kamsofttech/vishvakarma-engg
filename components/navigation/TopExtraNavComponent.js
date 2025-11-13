import { Dropdown, Space,Popover  } from 'antd'
import React from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import VisionComponent from '../about-us/VisionComponent';

const TopExtraNavComponent = ({ isFixed }) => {
    const router = useRouter()
    function handleClick() {
        router.push(`/about-us`)
    }
    const dirContent = (
        <div className='dirCont'>
          <p> Mr. Shekhar Chari is the owner of Vishwakarma Engineering, a leading name in custom vehicle body fabrication. He oversees the strategic 
direction and day-to-day operations of the firm, driving innovation and excellence across every project. With over decades of experience
 in the industrial and automotive sectors,Mr. Shekhar Chari brings unmatched expertise, vision, and leadership to the business. His commitment to
 quality, customer satisfaction, and engineering precision has positioned Vishwakarma Engineering as a trusted partner in the vehicle body building industry.</p>
<a class="read-more" onClick={handleClick}>Read More<i class="fa fa-arrow-right"></i></a>
        </div>
      )
    return (
        <div className='main_top_nav bg-red-c' style={{ display: isFixed !== null ? 'none' : 'block' }}>
            <div className='container clearfix'>
                <div className='top-extra-nav'>
                    <div className='container'>
                        <div className='row d-flex justify-content-between align-items-center'>
                        <div className='klab-topbar-left'>
                        <ul>
                        <li>
                                <a href="#" style={{marginLeft:'6px'}}>
                                    <div className='icon-box'>
                                        <i class="fa fa-money" aria-hidden="true"></i>
                                    </div>

                                    <h6>GST - 
</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{marginLeft:'6px'}}>
                                    <div className='icon-box'>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </div>

                                    <h6>
</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className='icon-box'>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    </div>

                                    <h6>+91 9422057468</h6>
                                </a>
                                
                                
                            </li>
                            <li>
                            <a href="#">
                                    <div className='icon-box'>
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    </div>

                                    <h6>Colvale, Bardez, Kolval, Goa</h6>
                                </a>
                               
                                
                            </li>
                        </ul>
                        </div>
                            <div className='klab-topbar-right header-nav'>
                            
                                <ul className='nav navbar-nav'>
                                    {/* <li><a >Client List <i class="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                    <li><a>VEDANTA LTD </a></li>
                          <li><a>S.A. SHIPPING </a></li>
                          <li><a>NEW ERA SHIPPING</a></li>
                          <li><a>NSS SHIPPING PVT LTD  </a></li>
                          <li><a>OCEAN SPARKLE LTD  </a></li>
                          <li><a>UNITED SHIPPERS</a></li>
                          <li><a>SHAHI SHIPPING</a></li>
                          <li><a>DEMPO SHIPBUILDING LTD </a></li>
                          <li><a>MANDOVI DRY DOCKS</a></li>
                          <li><a>LAVGAN SHIPYARD </a></li>
                          <li><a>S. A. OXY NITRO(VERNA)</a></li>
                                    <li><a>KUNDIL ALLOY(KUNDAIM) </a></li>
                          <li><a>DILIP BUILDCON</a></li>
                          <li><a>GOA SHIPYARD LTD  </a></li>
                          <li><a>THE SHIPPING CORPORATION OF INDIA </a></li>
                          <li><a>VIJAY MARINE SERVICES </a></li>
                          <li><a>BAPU SHIPPING PVT.LTD </a></li>
                          <li><a>PNP MARITIME SERVICES PVT.LTD</a></li>
                          <li><a>ARCADIA SHIPPING & TRADING CO. </a></li>
                          <li><a>AK SHIPPING </a></li>
                          <li><a>SHREEJI SHIPPING</a></li>
                                    </ul>
                                    </li> */}
                                    <li>
                                    <Popover className='dirPop' content={dirContent} title="Mr. Shekhar chari">
                                        <a >Director Profile</a>
                                    </Popover>
                                        
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        
                        
                    </div>

                </div>


            </div>
        </div>


    )
}

export default TopExtraNavComponent