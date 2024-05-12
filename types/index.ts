import React, { MouseEventHandler } from "react";

export interface BtnProps{
    title: string,
    style?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit"
    icon?: string
}

export interface SearchManufacturerProps {
    selected: string,
    setSelected: React.Dispatch<React.SetStateAction<string>>,
}

export interface SearchBarProps {
    setManufacturer: React.Dispatch<React.SetStateAction<string>>,
    setModel: React.Dispatch<React.SetStateAction<string>>,
}

export  interface Cars{
    "city_mpg": number,
    "class": string,
    "combination_mpg": number,
    "cylinders": number,
    "displacement": number,
    "drive": string,
    "fuel_type": string,
    "highway_mpg": number,
    "make": string,
    "model": string,
    "transmission": string,
    "year": number
}

export interface URLOptions{
        method: string,
        headers: {
            'X-RapidAPI-Key': string,
            'X-RapidAPI-Host': string
        }
}

export interface FilterProps {
    manufacturer: string,
    year: string,
    limit: number,
    fuel: string,
    model: string
}

export interface HomeProps{
    searchParams:  FilterProps
}

export interface OptionProps {
  title: string;
  value: string;
}


export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setChoice: React.Dispatch<React.SetStateAction<string>>
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: React.Dispatch<React.SetStateAction<number>>
}
