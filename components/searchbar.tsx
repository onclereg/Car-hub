'use client'
import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command'
import { fuels, manufacturers, yearsOfProduction } from '@/constants'
import { cn } from '@/lib/utils'
import { Check, ChevronDown, ChevronsUpDown } from 'lucide-react'
import Filter from './filter'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { fetchCars } from '@/utils'


export interface manufacturersprop{
    manufacturer:string
}


const SearchBar = ({manufacturer}:manufacturersprop) => {
     
  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  

  
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" ) {
      return alert("Please provide some input");
    }

    updateSearchParams(manufacturer, manufacturer.toLowerCase(),);
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
       searchParams.delete("manufacturer");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
  };


    return (
        <form className='w-full sm:flex items-center sm:gap-4'>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-64 md:w-full justify-between">
                {selectedCar ? selectedCar : "Select a car"}
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </PopoverTrigger>

            <button  className='-ml-3 z-10 ' onClick={handleSubmit}>
              <Image
                src={"/magnifying-glass.svg"}
                alt={"magnifying glass"}
                width={40}
                height={40}
                className='object-contain'
              />
            </button>

            <PopoverContent className="w-64 p-0">
              <Command>
                <CommandInput placeholder="Select a car.."  onValueChange={setSelectedCar} />
                <CommandList>
                  {manufacturers.length === 0 ? (
                    <div className="p-2 text-muted-foreground">Opps!! No results found.</div>
                  ) : (
                    manufacturers.map((manufacturer) => (
                      <CommandItem
                        key={manufacturer}
                        onSelect={() => {
                          setSelectedCar(manufacturer); 
                          setOpen(false);
                        }}
                        className="flex items-center justify-between"
                      >
                        {manufacturer}
                        {selectedCar === manufacturer && <Check className="h-4 w-4" />}
                      </CommandItem>
                    ))
                  )}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

            <div className='flex gap-3 '>
                <Filter title="fuel" options={fuels}/>
                <Filter title="year" options={yearsOfProduction}/>
            </div>
      </form>
  )
}

export default SearchBar