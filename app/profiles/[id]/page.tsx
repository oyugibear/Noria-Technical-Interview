import Profiles from '@/components/Home/Profiles'
import Image from 'next/image'
import React from 'react'
import {TbPhoneCall} from 'react-icons/tb'

export default function page() {
  return (
    <div className='flex flex-col w-full items-center justify-center  p-text'>
      <div className='max-w-[1042px] my-12 py-12 gap-6 w-full flex flex-col md:flex-row items-center justify-center px-4'>
        <Image src='/assets/Profiles/Man.png' width={526} height={411} alt="Profile Image" className=' max-h-[411px] rounded-md' />
        <div className='flex flex-col items-center md:items-start justify-center gap-4 '>
          <h1 className='head-text my-4'>Kamau Wick</h1>
          <div className='flex flex-wrap gap-4 justify-evenly'>
            <div className='flex flex-row gap-2'>
              <p className='brand-text-color'>Age: </p>
              <p>23 </p>
            </div>
            <div className='flex flex-row gap-2'>
              <p className='brand-text-color'>Carrier: </p>
              <p>Developer </p>
            </div>
            <div className='flex flex-row gap-2'>
              <p className='brand-text-color'>Location: </p>
              <p>Nairobi </p>
            </div>
          </div>
          <div className='mt-4 flex flex-col text-center md:text-start md:items-start'>
            <p className='brand-text-color'>Desicription:</p>
            <p className='max-w-[600px]'>
              Looking for an amazing girl to sing with and have adventorus tres around any mountains
            </p>
          </div>
          <div className='mt-8'>
            <button className='brand-color px-4 py-2 gap-4 flex flex-row text-white items-center rounded-md'>
              <TbPhoneCall />
              <p>Call</p>
            </button>
          </div>
        </div>
      </div>
      <Profiles />
    </div>
  )
}
