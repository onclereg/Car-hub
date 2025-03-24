"use client"; 

import { Search } from "lucide-react"; 
import { fuels, manufacturers, yearsOfProduction } from '@/constants';
import { fetchCars } from "@/utils";
import { useEffect, useState } from "react";
import NoCarCard from "@/components/noCarCard";
import Card from "./card";
import { carProps } from "@/app/page";



const SearchComponent = () => { 
  const [loading, setLoading] = useState(true);

  const [model, setModel] = useState( ""); 
  const [name, setName] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState("");
  const [cars, setCars] = useState<carProps[]>([]);

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetchCars({
        model : model || "",
        year : year || "2022",
        fuel : fuel || "",
        name : name || "",
      });
      console.log(res)
      setCars(res);
    } 
    catch (error) {
      console.error("Error fetching data:", error);
    }
    finally{
      setLoading(false)
    }
  };

  useEffect(() => {    
    fetchData();
  }, [model,name,year,fuel]);

  const searchHandler = async () => {
    fetchData()
  };

  return (
    <div className=" p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-4xl items-center rounded-lg overflow-hidden">
        {/* Select dropdown */}
        <select
          className="p-2 outline-none border-r h-[40px] bg-gray-100 text-gray-700"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          { manufacturers.map((manufacturer) => (
              <option
                key={manufacturer}
                onSelect={() => {setModel(manufacturer);}}
                className="flex items-center justify-between"
                >
                {manufacturer}
              </option>
            ))
          }
        </select>

        {/* input search */}
        <input
          type="text"
          placeholder="Enter name."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 p-2 outline-none border-r bg-gray-100 text-gray-700"
        />

        {/* fuel select dropdown */}
        <select
          className="p-2 outline-none border-r h-[40px] bg-gray-100 text-gray-700"
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
        >
           { fuels.map((fuel) => (
                <option
                    key={fuel.title}
                    onSelect={() => {setFuel(fuel.value);}}
                    className="flex items-center justify-between"
                    >
                    {fuel.value}
                </option>
            ))
        }
        </select>

        {/* year of production */}
        <div className="flex w-full items-center">
            <select
            className="p-2 w-3/4 border-r outline-none h-[40px] bg-gray-100 text-gray-700"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            >
            { yearsOfProduction.map((yearOfProduction) => (
                <option
                    key={yearOfProduction.title}
                    onSelect={() => {setYear(yearOfProduction.value);}}
                    className="flex items-center justify-between"
                    >
                    {yearOfProduction.value}
                </option>
              ))
            }
            </select>
            {/* Search button with icon */}
            <button onClick={searchHandler} className="p-2 w-1/4 h-[40px] outline-none bg-blue-500 text-white rounded-r-lg">
              <Search size={20} />
            </button>
        </div>

      </div>
      <div>
        {cars.length > 0 ?
          <div className="grid ">
            {cars?.map((car)=> <Card key={car.model} car={car}/>)}
          </div>
        :
          <div>
            <h2 className="text-2xl font-semibold ">Opps no result.</h2>
            <div className="grid md:flex justify-evenly">
              <NoCarCard/>
            </div>
          </div>
         }  
      </div>
    </div>
  );
};

export default SearchComponent;
