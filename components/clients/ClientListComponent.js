import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image'
const ClientListComponent = () => {
  return (
    <div className='position-realtive '>
                    <Marquee speed={50}>
                        <Image  width={145} height={80} src='/images/clients/c1-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c2-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c3-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c4-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c5-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c6-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c7-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c7-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c8-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c9-min.png' alt=""/>
                    </Marquee>
                </div>
  )
}

export default ClientListComponent