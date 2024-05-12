"use client"
import Image from "next/image";
import CustomButton from "./CustomButton";  
import { useState } from "react";
import { Cars } from "@types";
import { calculateCarRent} from "@utils";
import CarDetail from "./CarDetail";

interface CarCardProp {
  car: Cars
}

export default function CarCard({car}: CarCardProp) {
    const [isOpen, setIsOpen] = useState(false);
   const {city_mpg, year, make, model, transmission, drive}  = car;
   const carRent = calculateCarRent(city_mpg, year);

   const render = (
      <div className="car-card group">
        <div className="car-card__content">
          <h2 className="car-card__content-title">
            {make} {model}
          </h2>
        </div>

        <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
          <span className="self-start text-[14px] leading-[17px] font-semibold">$</span>
          {carRent}
          <span className="self-end text-[14px] leading-[17px] font-medium">/day</span>
        </p>

        <div className="relative w-full h-40 my-3 object-contain">
          <Image src="/images/hero.png" alt="car" fill priority className="object-contain"/>
        </div>
        
        <div className="relative flex w-full mt-2">
          <div className="flex group-hover:invisible w-full justify-between text-grey">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/images/steering-wheel.svg" alt="steering" width={20} height={20} />
              <p className="text-[14px]">
                {transmission === 'a'? 'Automatic' : 'Manual'}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/images/tire.svg" alt="tire" width={20} height={20} />
              <p className="text-[14px]">
                {drive.toUpperCase()}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/images/gas.svg" alt="gas pump" width={20} height={20} />
              <p className="text-[14px]">
                {city_mpg} MPG
              </p>
            </div>
          </div>
          <div className="car-card__btn-container">
            <CustomButton 
              title="View More"
              style="w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold"
              icon="/images/right-arrow.svg"
              handleClick={()=>{setIsOpen(true)}}
            />
          </div>
        </div>
        <CarDetail isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car}/>              
      </div>
   )

  return render;
}
