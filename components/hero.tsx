import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'


const Hero = () => {
  return (
    <div className='bg-white  max-w-7xl mx-auto grid md:grid-cols-2 items-center h-[80vh] w-full gap-2 text-gray-800'>
        <div className='flex flex-col gap-3 items-start justify-center p-3 md:p-10'>
            <p className='text-2xl sm:text-4xl font-extrabold font-mono'>
                FIND ,BOOK OR RENT A CAR ---<br/>As quickly as possible!!.
            </p>
            <p className='text-sm sm:text-2xl font-medium font-sans'>
                Streamline your car renting experience with our effortless car booking process.
            </p>
            <Button className='text-white bg-blue-700'>
                <Link href='/Catalogue'> Explore Cars</Link></Button>
        </div>

        <div  className='object-contain relative w-full p-3'>
            <Image src='./bg-car.svg' alt="car logo"  width={400} height={400} />
        </div>
    </div>
  )
}

export default Hero