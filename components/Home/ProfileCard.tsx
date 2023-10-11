import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProfileCard() {
  return (
    <div className='flex flex-col max-w-[288px] w-full bg-white rounded-2xl'>
        <Link href='/profiles/11'>
            <Image src='/assets/Profiles/Man.png' width={288} height={205} alt='Dating Profile Pic' className='rounded-t-2xl max-h-[205px]' />
            <div className='flex flex-col p-4 p-text pb-4'>
                <p className=' my-2 text-xl font-medium'>Kamau Wick</p>
                <div className=' flex flex-row justify-between '>
                    <p className='brand-text-color'>Age: </p>
                    <p className=''>23 </p>
                </div>
                <div className=' flex flex-row justify-between '>
                    <p className='brand-text-color'>Career: </p>
                    <p className=''>Developer </p>
                </div>
                <div className=' flex flex-col justify-between mt-4'>
                    <p className='brand-text-color mb-2'>Looking for: </p>
                    <p>
                        Lovely Girl that can have fun
                        and be adventurous… 
                    </p>
                </div>
            </div>
        </Link>
    </div>
  )
}
