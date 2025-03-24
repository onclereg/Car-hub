"use client"

import Hero from "@/components/hero";
import Catalogue from "./catalogue/page";
import SearchComponent from "@/components/search";


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

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <Catalogue/>
      <SearchComponent/>
    </div>
  );
}
