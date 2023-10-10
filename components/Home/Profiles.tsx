import React from 'react'
import ProfileCard from './ProfileCard'

export default function Profiles() {
  return (
    <div className='py-12 my-8 brand-color flex w-full items-center justify-center px-4'>
        <div className='max-w-[1440px] flex flex-col w-full text-center md:text-start'>
            <h2 className='subhead-text text-white'>Lover Profiles</h2>
            <div className='my-8 flex flex-wrap gap-4 justify-evenly text-start'>
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div>
        </div>
    </div>
  )
}
