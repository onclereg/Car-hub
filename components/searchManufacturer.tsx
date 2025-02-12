import { useState } from "react";
import { Command, CommandInput, CommandList, CommandItem } from "@/components/ui/command";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import { manufacturers } from "@/constants";

// const cars = ["Tesla Model S", "Ford Mustang", "Chevrolet Camaro", "BMW M3", "Audi R8"];

export default function CarSearchCombobox() {

  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filteredCars = manufacturers.filter(manufacturer => manufacturer.toLowerCase().includes(query.toLowerCase()));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-64 justify-between">
          {selectedCar ? selectedCar : "Select a car"}
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-0">
        <Command>
          <CommandInput placeholder="Search cars..." value={query} onValueChange={setQuery} />
          <CommandList>
            {filteredCars.length === 0 ? (
              <div className="p-2 text-muted-foreground">Opps!! No results found.</div>
            ) : (
              filteredCars.map((manufacturer) => (
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
  );
}
