import React from 'react'
import Logo from './logo'
import { footerLinks } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='px-3 py-4 md:px-8 text-gray-800 border-t-2'>
      <div className='sm:flex justify-between gap-5'>
        <div className='text-sm font-medium items-start mb-3'>
          <Logo/>
          <p>Car Hub {year}</p>
          <p>All rights reserved &copy;</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 font-mono'>
          {footerLinks.map((link)=>(
            <div key={link.title}>
              <h3 className='text-xl font-bold text-blue-700'>{link.title}</h3>
              {link.links.map((item)=>(
                <Link className='grid text-sm font-normal' key={item.title} href={item.url}>
                {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className=' py-3 grid sm:grid-cols-2 justify-between text-sm font-serif font-normal'>
        <p>&copy;{year} Car Hub ,Alright Reserved.</p>
        <div className='sm:flex justify-evenly'>
          <Link href='/Policy'>Privacy Policy</Link>
          <p>Terms of use</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer