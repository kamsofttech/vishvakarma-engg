import { Card } from 'antd'
import styles from './getInTouch.module.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { CheckOutlined } from '@ant-design/icons';

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination]);
import {
    Button,
    message,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
  } from 'antd';
import ClientsComponent from '../../clients/ClientsComponent';
import ClientListComponent from '../../clients/ClientListComponent';
import Axios from 'axios';
function ReviewComponent() {
  const [form] = Form.useForm();
  const onFinishFailed = (errorInfo) => {
    //console.log('Failed:', errorInfo);
  };

  const formItemLayout ='vertical'
  ? {
      labelCol: {
        span: 7,
      },
      wrapperCol: {
        span: 24,
      },
    }
  : null;
  const buttonItemLayout = 'vertical'
    ? {
        wrapperCol: {
          span: 40,
          offset: 0,
        },
      }
    : null;
    
  const onFinish =async (values) => {
    console.log('Success:', values);
    //sendEmail()
    const string={
            userName: values.name,
            email: values.email,
            number: values.phone,
            msg: 'Name:'+values.name+'<br/> Email:'+values.email+'<br/> Mobile:'+values.phone+'<br/>'+values.message
    }
    Axios.post('api/sendEmail',{data:string})
    .then(({data})=>{
        console.log('maildata',data)
            if(data=='1'){
                form.resetFields()
                message.success({
                    content: 'Your message Has been send successfully',
                    className: 'custom-class',
                    style: {
                      marginTop: '40vh',
                    },
                  });
            }else{
                message.error('Your message has not been send');
                message.success({
                    content: 'Your message has not been send',
                    className: 'custom-class',
                    style: {
                      marginTop: '40vh',
                    },
                  });
            }
    })

  }
  return (
    <div className="section-full content-inner bg-gray testi-area">
    <div className={`${styles.review_class} container`}>
      <div className='row'>
        <div className={'col-md-7  swip'}>
            <Card>
                <h2>Check out <span className={styles.head_class}>Review</span></h2>
                <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}>
                 <SwiperSlide><h5>
                 Wishwakarma Motor Works has been a reliable partner for our municipal vehicle body requirements. Their workmanship, durability, and timely delivery have consistently met our operational needs. We appreciate their technical expertise and professional approach.


                 <h6>Calangute Panchayat </h6></h5>
                 </SwiperSlide>
                 <SwiperSlide><h5> 
                 We have been associated with Wishwakarma Motor Works for vehicle body fabrication and modifications. Their understanding of local operating conditions and attention to safety and quality make them a trusted name in the field.
                    <h6>Parra Panchayat</h6></h5></SwiperSlide>
                 <SwiperSlide><h5>The bodies fabricated by Vishwakarma Motor Works are robust, well-finished, and built for long-term use. Their team is responsive and cooperative, ensuring smooth execution from design to delivery.
                 <h6>Arpora Panchayat</h6></h5></SwiperSlide>
                 <SwiperSlide><h5>Wishwakarma Motor Works has supported us with dependable vehicle bodies suited for municipal operations. Their experience shows in the quality of fabrication and compliance with required standards.
                 <h6>Candolim Panchayat</h6></h5></SwiperSlide>
                 <SwiperSlide><h5>We value Wishwakarma Motor Works for their engineering capability and consistent quality. Their vehicle bodies have performed efficiently under demanding municipal conditions.
                 <h6>CCp Panjim</h6></h5></SwiperSlide>
                 <SwiperSlide><h5>Wishwakarma Motor Works delivers sturdy and functional vehicle bodies that meet the needs of civic operations. Their long-standing experience reflects in the durability and practicality of their designs.
                 <h6>Bicholim Municipal Council</h6></h5></SwiperSlide>
                 <SwiperSlide><h5>I have relied on Wishwakarma Motor Works for customized vehicle body solutions. Their commitment to quality, transparent communication, and on-time delivery sets them apart.
                 <h6>Santosh Korgaokar</h6></h5></SwiperSlide>
                 <SwiperSlide><h5>Wishwakarma Motor Works has provided us with well-engineered and reliable body fabrication solutions. Their craftsmanship and after-sales support give us confidence in every project.
                 <h6>Zarapkars, Mapusa</h6></h5></SwiperSlide>
                 <SwiperSlide><h5>The team at Wishwakarma Motor Works understands practical requirements and executes them with precision. Their bodies are strong, functional, and built to last.
                 <h6>P. D. Dessai</h6></h5></SwiperSlide>
                 <SwiperSlide><h5>From design consultation to final delivery, Wishwakarma Motor Works maintains high standards of professionalism. Their technical know-how and attention to detail are commendable.
                 <h6>Raghavendra Dessai</h6></h5></SwiperSlide>
                 
           </Swiper>
        <div className={styles.swip} >
          {/* <ClientListComponent/> */}
           
                 </div>
            </Card>
        </div>
        <div className='col-md-5 get-class'>
        <Card>
            <h2 className='text-center'> Get in Touch</h2>
            <div className={styles.form_cl}>
        <Form
    {...formItemLayout}
    variant="filled"
        layout= 'vertical'
        onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
  >
    <Form.Item
     name="name"
      label="Username"
      className='n-lcass'
      rules={[
        {
          required: true,
          message: 'Name',
        },
      ]}
    >
      <Input className='form-control' placeholder="Name" />
    </Form.Item>
    <Form.Item
    className='n-lcass'
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Email',
        },
      ]}
    >
      <Input className='form-control' placeholder="Email"
      />
    </Form.Item>
    <Form.Item
    className='n-lcass'
      label="Phone"
      name="phone"
      rules={[
        {
          required: true,
          message: 'Phone',
        },
      ]}
    >
      <Input placeholder="Phone"
      />
    </Form.Item>

    <Form.Item
      label="Comment"
      name="message"
      className='comm-in'
      rules={[
        {
          required: true,
          message: 'Comment',
        },
      ]}
    >
      <Input.TextArea placeholder="Comment" />
    </Form.Item>
    <Form.Item {...buttonItemLayout}
    >
      <Button type="primary" htmlType="submit">
        Talk to our Team <CheckOutlined />
      </Button>
      <p className='pt-1'>* We do not spam</p>
    </Form.Item>
    </Form>
    </div>
        </Card>
        </div>

      </div>
    </div>
    </div>
  )
}

export default ReviewComponent
