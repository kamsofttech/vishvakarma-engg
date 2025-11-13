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
                   Working with Apurva Engineering has been an absolute pleasure. Their team, led by Mr. Samir Juwarkar and Amar Raikar, exhibits unparalleled professionalism 
                  and expertise in the field of engine  repairs. As a client, we have always received prompt and efficient solutions to our technical challenges, thanks to their knowledgeable staff and state-of-the-art facilities. Their commitment to quality and customer satisfaction is truly commendable. 
We highly recommend Apurva Engineering to anyone seeking reliable and innovative solutions for their marine and industrial needs.


                 <h6>Sidith Raiturkar - <span className={styles.color_div}>Director shiptek marine solutions. Goa</span></h6></h5>
                 </SwiperSlide>
                 <SwiperSlide><h5> 
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    <h6>Lorem Ipsum - <span className={styles.color_div}>Lorem Ipsum is simply dummy text of the printing</span></h6></h5></SwiperSlide>
                 <SwiperSlide><h5> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 <h6>Lorem Ipsum - <span className={styles.color_div}>Lorem Ipsum is simply dummy text of the printing.</span></h6></h5></SwiperSlide>
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
