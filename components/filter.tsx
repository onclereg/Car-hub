import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { customFilterProps } from '@/constants'
import { ChevronsUpDown } from 'lucide-react'

const Filter = ({title , options}:customFilterProps) => {
  return (
   <div className='p-2 border rounded-lg my-2 px-4'>
    <DropdownMenu>
      <DropdownMenuTrigger className='flex gap-2 items-center'>
        {title}
        <ChevronsUpDown className="opacity-50" size={15} />
        </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
          {options.map((option)=>(
            <DropdownMenuItem key={option.title}>{option.title}</DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>

   </div>
  )
}

export default Filter