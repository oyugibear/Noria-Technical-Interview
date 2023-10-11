"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {TbMail, TbPhoneCall} from 'react-icons/tb'
import ProfileList from '../ProfileList'
import sitedata from "@/data/site_data.json"

interface User {
  id: number;
  name: string;
  age: number;
  gender: string;
  interests: string[];
  phone: string;
  email: string;
  description: string;
  career: string;
  avatar: string;
}

interface PageProps {
  params: {
    id: string | number; // assuming id is a string in the params object
  };
}

export default function page({params} : PageProps ) {
  
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    function getUserById(id: number): User | undefined {
      try {
        const data: { users: User[] } = JSON.parse(JSON.stringify(sitedata));
        if (data.users && Array.isArray(data.users)) {
          const user = data.users.find((user) => user.id === id);
          return user;
        }
      } catch (error) {
        console.error("Error parsing JSON data: " + error);
      }
      return undefined;
    }
  
    const userId = typeof params.id === 'string' ? parseInt(params.id, 10) : params.id;
  
    if (!isNaN(userId)) {
      const foundUser = getUserById(userId);
  
      if (foundUser) {
        setUser(foundUser);
      }
        // } else {
      //   console.log(`User with id ${userId} not found in sitedata:`, data.users);
      // }
    } else {
      console.log(`Invalid user id: ${params.id}`);
    }
  }, [params.id]);

  // console.log("user**********", user)

  return (
    <div className='flex flex-col w-full items-center justify-center  p-text'>
      <div className='max-w-[1042px] my-12 py-12 gap-6 w-full flex flex-col md:flex-row items-center justify-center px-4'>
        <Image src='/assets/Profiles/Man.png' width={526} height={411} alt="Profile Image" className=' max-h-[411px] rounded-md' />
        <div className='flex flex-col items-center md:items-start justify-center gap-4 '>
          <h1 className='head-text my-4'>{user?.name}</h1>
          <div className='flex flex-wrap gap-4 justify-evenly'>
            <div className='flex flex-row gap-2'>
              <p className='brand-text-color'>Age: </p>
              <p>{user?.age} </p>
            </div>
            <div className='flex flex-row gap-2'>
              <p className='brand-text-color'>Career: </p>
              <p>{user?.career} </p>
            </div>
            <div className='flex flex-row gap-2'>
              <p className='brand-text-color'>Gender: </p>
              <p>{user?.gender} </p>
            </div>
          </div>
          <div className='flex flex-col gap-4 justify-evenly items-center md:items-start my-4'>
            <p className='brand-text-color'>Interests: </p>
            <div className='flex flex-wrap justify-evenly gap-4 w-full'>
              {user?.interests.map((interest) => (
                <p>{interest}</p>
              ))}
            </div>
          </div>
          <div className='mt-4 flex flex-col text-center md:text-start md:items-start'>
            <p className='brand-text-color'>Description:</p>
            <p className='max-w-[600px]'>
              {user?.description}
            </p>
          </div>
          <div className='mt-8 flex flex-row gap-4'>
            <button
              onClick={() => {
                const phoneNumber = user?.phone; // Replace this with the actual phone number
                const telUrl = `tel:${phoneNumber}`;
                window.open(telUrl);
              }} 
            className='brand-color px-4 py-2 gap-4 flex flex-row text-white items-center rounded-md'>
              <TbPhoneCall />
              <p>Call</p>
            </button>
            <button 
            onClick={() => {
                const email = user?.email; 
                const subject = 'Wanna Grab A Coffee Junito?'; 
                const body = `My name is ${user?.name}, i wanna get to know you and buy you a coffee`; 
                const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.open(mailtoUrl, '_blank');
            }} 
            className='brand-color px-4 py-2 gap-4 flex flex-row text-white items-center rounded-md'>
              <TbMail/>
              <p>Email</p>
            </button>
          </div>
        </div>
      </div>
      <ProfileList />
    </div>
  )
}
