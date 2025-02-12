"use client"

import Card from "@/components/card";
import Hero from "@/components/hero";
import Catalogue from "./catalogue/page";
import { fetchCars } from "@/utils";

import { useEffect, useState } from "react";
import NoCarCard from "@/components/noCarCard";
import { HomeProps } from "@/constants";

export interface carProps{
    city_mpg:number,
    class:string,
    combination_mpg:number,
    cylinders:number,
    displacement:number,
    drive:string,
    fuel_type:string,
    highway_mpg:number,
    make:string,
    model:string,
    transmission:string,
    year:number,
}

export default function Home({ searchParams }: HomeProps) {

  const [isLoading ,setIsLoading]=useState(false)

  const allCars = async ()=>{
    setIsLoading(true);
    try {
      const getCars = await fetchCars({
        manufacturer: searchParams.manufacturer || "",
        year: searchParams.year || 2022,
        fuel: searchParams.fuel || "",
      });

    } catch (error) {
      console.log(error)
    }
    finally{
      setIsLoading(false)
    }  
  }


  // useEffect(()=>{
  //     allCars()
  // }, [manufacturer,fuel,year])


  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <div className="overflow-hidden">
      <Hero/>
      <Catalogue/>
      <div>
        {!isDataEmpty?
          <div className="grid md:grid-cols-3">
            {allCars?.map((car)=> <Card car={car}/>)}
          </div>
        :
          <div>
            <h2>Opps no result.</h2>
            <div className="grid md:flex justify-evenly">
              <NoCarCard/>
            </div>
          </div>
         }  
      </div>
    </div>
  );
}
