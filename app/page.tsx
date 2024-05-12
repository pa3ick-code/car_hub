"use client"
import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components/index";
import { fuels, yearsOfProduction } from "@constants";
import { useEffect, useState } from "react";
import { Cars, HomeProps } from "@types";
import { fetchCars } from "@utils";
import Image from "next/image";

export default function Home() {
  const [carsData, setCarsData] = useState([]);
  const [loading, setLoading] = useState(false);
  // search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  // filter status
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState('2022');
  // pagination
  const [limit, setLimit] = useState(10);



  useEffect(()=>{
    const getCars = async()=>{
    setLoading(true)
    try {
    const allCars = await fetchCars({
      manufacturer: manufacturer || "",
      year: year || '2022',
      fuel: fuel || "",
      limit: limit || 10,
      model: model || "",
    });

    setCarsData(await allCars);
      
    } catch (error) {
      console.error(error)
    } finally{
      setLoading(false)
    }
  }
    getCars();
  },[manufacturer, year, model, limit, fuel]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-y padding-x max-width" id="discover"> 
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar 
            setManufacturer={setManufacturer} 
            setModel={setModel} 
          />
          <div className="home__filter-container">
            <CustomFilter title='fuel' options={fuels} setChoice={setFuel}/>
            <CustomFilter title='year' options={yearsOfProduction} setChoice={setYear} />
          </div>
        </div>

      {
        carsData.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {carsData?.map( car =>  <CarCard car={car} key={car}/> )}
            </div>

            {loading &&  (
              <div  className="mt-15 w-full flex-center">
                <Image 
                  src="/images/loader.png" 
                  alt= "loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore 
              pageNumber={limit / 10}
              isNext={limit > carsData.length}
              setLimit={setLimit}
            />
          </section>
        ):(
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops! no result.</h2>
          </div>
        )
      }
      
      </div>
    </main>
  );
}
