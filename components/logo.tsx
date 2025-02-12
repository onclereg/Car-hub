import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-3 pr-2'>
        <Image src='./logo.svg' alt="car logo" width={150} height={80} />
    </Link>
  )
}

export default Logo