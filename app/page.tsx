import Hero from '@/components/Home/Hero'
import Profiles from '@/components/Home/Profiles'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <Hero />
      <Profiles />
    </div>
  )
}
