import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import Image from 'next/image'
import { carCardProps } from './card'
import { generateCarImageUrl } from '@/utils'

const ViewMore = ({car}:carCardProps) => {
    const {city_mpg ,combination_mpg,cylinders,displacement,drive,fuel_type,highway_mpg,make,model,transmission,year} = car
  return (
    <div>
        <Dialog>
            <DialogTrigger className='w-full'>
                <Button className='bg-blue-700 w-full'>
                    View More
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className='grid gap-2 text-black font-serif border-none rounded-xl'>
                    <div className='bg-blue-400 p-2 w-full h-[100] relative rounded-lg'>
                        <Image src={generateCarImageUrl(car)} fill alt='car pic'/>
                    </div>
                    <div className=' w-full h-[70] relative flex gap-3 rounded-lg'>
                        <Image src={generateCarImageUrl(car, "29")} width={100} height={60} alt='car pic' className='bg-blue-200 p-2 rounded-lg flex-1'/>
                        <Image src={generateCarImageUrl(car, "33")} width={100} height={60} alt='car pic' className='bg-blue-200 p-2 rounded-lg flex-1'/>
                        <Image src={generateCarImageUrl(car, "13")} width={100} height={60} alt='car pic' className='bg-blue-200 p-2 rounded-lg flex-1'/>
                    </div>
                    <p>
                        {make}-{model}
                    </p>
                </DialogTitle>
                <DialogDescription>
                    <div className='grid p-3 gap-2 w-full text-gray-500 font-normal font-serif'>
                        <div className='flex justify-between w-full'>
                            <p>City mpg</p>
                            <p>{city_mpg}</p>
                        </div>
                        <div className='flex justify-between w-full'>
                            <p>Combination mpg</p>
                            <p>{combination_mpg}</p>
                        </div>
                        <div className='flex justify-between w-full'>
                            <p>Cylinders</p>
                            <p>{cylinders}</p>
                        </div>
                        <div className='flex justify-between w-full'>
                            <p>Displacement</p>
                            <p>{displacement}</p>
                        </div>
                        <div className='flex justify-between w-full'>
                            <p>Drive</p>
                            <p>{drive}</p>
                        </div>
                        <div className='flex justify-between w-full'>
                            <p>Fuel Type</p>
                            <p>{fuel_type}</p>
                        </div>
                        <div className='flex justify-between w-full'>
                            <p>Highway mpg</p>
                            <p>{highway_mpg}</p>
                        </div>
                        <div className='flex justify-between w-full'>
                            <p>Transmission</p>
                            <p>{transmission == "a"? "Automatic" : "Manual"}</p>
                        </div>
                        <div className='flex justify-between w-full'>
                            <p>Year</p>
                            <p>{year}</p>
                        </div>
                    </div>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default ViewMore