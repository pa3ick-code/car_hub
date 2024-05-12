"use client"
import { SearchManufacturer } from "@components";
import { useState } from "react";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { SearchBarProps } from "@types";

const SearchButton = ({style}: {style: string})=>(
  <button type="submit" className={`-ml-3 z-10 ${style}`}>
    <Image 
      src="/images/magnifying-glass.svg" 
      alt="magnifyer" 
      width={40} 
      height={40} 
      className="object-contain" 
    />
  </button>
);


export default function SearchBar({setManufacturer, setModel}: SearchBarProps) {
    const [searchManufacturer, setSearchManufacturer] = useState('');
    const [searchModel, setSearchModel] = useState('');
    // const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if(searchManufacturer === "" && searchModel == ''){
        return alert('search bar empty')
      }
      
      setModel(searchModel)
      setManufacturer(searchManufacturer)
    }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
            selected={searchManufacturer}
            setSelected={setSearchManufacturer}
        />
        <SearchButton style="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image 
          src="/images/model-icon.png"
          alt="Model Icon"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input 
          type="text" 
          name="model" 
          placeholder="model name"
          value={searchModel}
          onChange={e => setSearchModel(e.target.value)}
          className="searchbar__input"
        />
        <SearchButton style="sm:hidden" />
      </div>
      <SearchButton style="max-sm:hidden"/>
    </form>
  );
}
