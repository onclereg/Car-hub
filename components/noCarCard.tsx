import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const NoCarCard = () => {
  return (
    <div className='my-4 mx-auto max-w-[500px] p-4 grid gap-2 bg-gray-200 text-sm text-gray-900 rounded-lg'>
        <p className='text-xl font-bold font-serif'> Car Model</p>
        <p>
            <span className='text-lg text-blue-950'>52</span>/day
        </p>
        <div className='w-full h-fit justify-center flex'>
            <Image src='/bg-car.svg' width={200} height={100} alt='car picture'/>
        </div>
        <div className='flex justify-between w-full'>
            <div className='grid justify-center flex-1'>
                <div className='flex justify-center'>
                    <Image src='/steering-wheel.svg' width={20} height={20} alt='car parts'/>
                </div>
                <p>Automatic</p>
            </div>
            <div className='flex-1 grid justify-center'>
                <div className='flex justify-center'>
                    <Image src='./tire.svg' width={20} height={20} alt='car parts'/>
                </div>
                 <p>4WD</p>
            </div>
            <div className='flex-1 grid justify-center'>
                <div className='flex justify-center'>
                    <Image src='./gas.svg' width={20} height={20} alt='car parts'/>
                </div>
                <p>Gas</p>
            </div>

        </div>
        <Button className='bg-blue-700 w-full'>
            View More
        </Button>
    </div>
  )
}

export default NoCarCard