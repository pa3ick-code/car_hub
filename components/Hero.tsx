"use client"
import { CustomButton } from "@components";
import Image from "next/image";

export default function Hero() {
    const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
            Find, book, or rent a car —  quickly and easily!
        </h1>
        <p className="hero__subtitle">
            Explore our wide range of cars and enjoy a seamless booking experience with us.
        </p>

        <CustomButton 
            title='Explore Cars'
            style="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
            <Image
                src={'/images/hero.png'}
                alt="hero"
                fill
                className="object-contain"
            />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </section>
  );
}
