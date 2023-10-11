import Hero from '@/components/Home/Hero'
import Image from 'next/image'
import ProfileList from './profiles/ProfileList'

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <Hero />
      <ProfileList />
    </div>
  )
}
