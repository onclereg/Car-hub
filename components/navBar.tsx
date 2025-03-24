import React from 'react'
import { Button} from './ui/button'
import Link from 'next/link'
import Logo from './logo'

const NavBar = () => {
  return (
    <div className='p-3 text-2xl z-10 border-b-2'>
      <div className='max-w-7xl mx-auto flex justify-between'>
        <Logo/>      
        <div className='flex gap-4'>
          <div className='hidden md:flex gap-4'>
            <Button className='bg-blue-700 text-white active:bg-gray-500'>
              <Link href="/About" className=''>About</Link>
            </Button>
            <Button className='bg-blue-700 text-white'>
              <Link href="/Blog">Blog</Link>
            </Button>
            <Button className='bg-blue-700 text-white'>
              <Link href="/Privacy">Privacy Policy</Link>
            </Button>
          </div>
          <Button className='bg-blue-700 text-white text-sm '>
            <Link href="/">Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NavBar