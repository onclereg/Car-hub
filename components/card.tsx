import Image from 'next/image'
import React from 'react'
import { carProps } from '@/app/page'
import ViewMore from './viewMore'
import { generateCarImageUrl } from '@/utils'

export interface carCardProps {
    car:carProps
}

const Card = ({car}:carCardProps) => {

    const {drive,fuel_type,make,model,transmission} = car

  return (
    <div className='m-4 md:w-[700px] md:h-[400px] mx-auto p-4 grid gap-2 bg-gray-200 text-sm text-gray-900 rounded-lg'>
        <p className='text-xl font-bold font-serif'>{make}-{model}</p>
        <p>
            <span className='text-lg text-blue-950'>52</span>/day
        </p>
        <div className='w-full h-fit justify-center flex'>
            <Image src={generateCarImageUrl(car)} width={200} height={100} alt='car picture'/>
        </div>
        <div className='flex justify-between w-full'>
            <div className='grid justify-center flex-1'>
                <div className='flex justify-center'>
                    <Image src='/steering-wheel.svg' width={20} height={20} alt='car parts'/>
                </div>
                <p>{transmission === "a" ? "Automatic" : "Manual"}</p>
            </div>
            <div className='flex-1 grid justify-center'>
                <div className='flex justify-center'>
                    <Image src='./tire.svg' width={20} height={20} alt='car parts'/>
                </div>
                 <p>{drive}</p>
            </div>
            <div className='flex-1 grid justify-center'>
                <div className='flex justify-center'>
                    <Image src='./gas.svg' width={20} height={20} alt='car parts'/>
                </div>
                <p>{fuel_type}</p>
            </div>

        </div>
        <ViewMore car={car}/>
    </div>
  )
}

export default Card