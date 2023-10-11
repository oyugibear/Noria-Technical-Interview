"use client"

import React, { useEffect, useState } from 'react'
import sitedata from '@/data/site_data.json'; 
import ProfileCard from '@/components/Home/ProfileCard';

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


export default function ProfileList(): JSX.Element {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        function getUsersFromJson(): User[] {
            try {
                const data: { users: User[] } = JSON.parse(JSON.stringify(sitedata));
                if (data.users && Array.isArray(data.users)) {
                    return data.users;
                } else {
                    throw new Error("Invalid JSON format: 'users' property not found or not an array.");
                }
            } catch (error) {
                console.error("Error parsing JSON data: " + error);
                return [];
            }
        }

        // Fetch users' data from sitedata.json and set it to the state
        const fetchedUsers = getUsersFromJson();
        setUsers(fetchedUsers);
    }, []);

    // console.log(users)

  return (
    <div className='py-12 my-8 brand-color flex w-full items-center justify-center px-4'>
        <div className='max-w-[1440px] flex flex-col w-full text-center md:text-start'>
            <h2 className='subhead-text text-white'>Lover Profiles</h2>
            <div className='my-8 flex flex-wrap gap-4 justify-evenly text-start'>
                {users.map((user) => (
                    <ProfileCard key={user.id} user={user}/>
                ))}
                
            </div>
        </div>
    </div>
  )
}
