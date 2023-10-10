import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='flex items-center justify-center w-full  py-12 '>
        <div className='flex max-w-[1440px] flex-col md:flex-row items-center w-full justify-between px-4'>
            <div className='flex flex-col px-4 w-full md:max-w-[600px] items-center md:items-starts text-center md:text-start'>
                <h1 className='head-text'>Have you ever been <br /> in love</h1>
                <p className='p-text mt-2 max-w-[500px] mb-8 md:mb-0'>
                We got you covered, here at Juntos we pride ourselves in our match making abilities, trust us when we say WE GOT YOU
                </p>
            </div>
            <Image src='/assets/Home/Hero/ALT_Home.png' width={716} height={645} alt='Hero picture'  className='md:max-w-[100%]'/>
        </div>
    </div>
  )
}
