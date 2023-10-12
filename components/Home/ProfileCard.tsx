import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface UserProps {
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

interface ProfileCardProps {
    user: UserProps;
}

export default function ProfileCard({user} : ProfileCardProps) {
    console.log(user)
  return (
    <div className='flex flex-col max-w-[288px] w-full bg-white rounded-2xl'>
        <Link href={`/profiles/${user.id}`}>
            <Image src={user?.avatar || "/assets/Profiles/incase.jpg"}width={288} height={205} alt='Dating Profile Pic' className='rounded-t-2xl max-h-[205px] h-full' />
            <div className='flex flex-col p-4 p-text pb-4'>
                <p className=' my-2 text-xl font-medium'>{user.name}</p>
                <div className=' flex flex-row justify-between '>
                    <p className='brand-text-color'>Age: </p>
                    <p className=''>{user.age} </p>
                </div>
                <div className=' flex flex-row justify-between '>
                    <p className='brand-text-color'>Career: </p>
                    <p className=''>{user?.career.slice(0, 15) + "..." || "N/A"} </p>
                </div>
                <div className=' flex flex-col justify-between mt-4'>
                    <p className='brand-text-color mb-2'>Looking for: </p>
                    <p>
                        {user?.description.slice(0, 50) + "..." || "N/A"}
                    </p>
                </div>
            </div>
        </Link>
    </div>
  )
}
