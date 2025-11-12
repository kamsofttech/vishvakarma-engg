import React from 'react'
import { Drawer,Button } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
const DrawerComponent = ({open, onHide,setOpen}) => {
     
  return (
    <>
    
    <Drawer  placement="right" onClose={()=>setOpen(false)} open={open}>
      <div className='drawer-logo text-center' >
        <a>
          <img className="footer-logo" src="/images/logo/aplogo.png" alt="logo"/>
         
          </a>
      </div>
       <p className='pt-4'>Vishwakarma Engineering is a leading name in the vehicle body building industry, known for its commitment to quality, innovation, and precision. With years of hands-on experience and a deep understanding of engineering dynamics, we specialize in crafting custom-built vehicle bodies tailored to the unique needs of commercial, industrial, and utility sectors.

 </p>
        <Button style={{backgroundColor:'transparent'}} className='bg-moving' size="large" >REQEST A QUOTE</Button>
                      <div className='bg-moving'>
                      <div className='head-block mt-5'>
                            <p className="w-title1">Call Us Today</p>
                        
                        </div>

                        <div className="widget  widget_getintuch ">
                                  
                        <ul ><li><i class="fa fa-mobile arrow-animation">
                        </i><strong>Phone</strong> 
                        +91 9422057468
 </li>
                        
                        
                        {/* <li><i class="ti-email"></i><strong>email</strong>info@example.com</li> */}
                        </ul>
                                </div>
                        
                      </div>
                        

                        <div className='head-block mt-5'>
                            {/*<h4 className="w-title">CALL US TODAY</h4>*/}
                            <p className='w-title1'>Our Office</p>
                        </div>
                        <div className="widget  widget_getintuch ">
                                  
                        <ul ><li><i class="ti-location-pin">
                        </i><strong>Address</strong> 
                        JRVQ+26C, Near Primary Health Centre, Colvale, Bardez, Kolval, Goa 403513 </li>
                        {/* <li><i class="ti-mobile"></i><strong>phone</strong>040-66 383 718 (24/7 Support Line)
                        </li> */}
                        {/* <li><i class="ti-email"></i><strong>email</strong>info@example.com</li> */}
                        </ul>
                                </div>
      </Drawer>
    </>
      
  )
}

export default DrawerComponent