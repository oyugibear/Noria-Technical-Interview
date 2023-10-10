import Image from 'next/image'
import React from 'react'
import {  } from 'next/font/google'

export default function Navbar() {
  return (
    <div className='flex flex-row w-full justify-center p-4 items-center shadow-md'>
        <div className='max-w-[1440px] flex flex-row justify-between w-full my-2'>
            <Image src='/assets/logo.png' alt='logo picture' width={120} height={100} className='max-w-[150px] w-full' />

            <button className=''>
                Profiles
            </button>
        </div>
    </div>
  )
}
