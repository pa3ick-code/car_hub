"use client"

import { BtnProps } from "@/types";
import Image from "next/image";

export default function CustomButton({title, style, btnType, icon, handleClick}: BtnProps) {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${style}`}
        onClick={handleClick}
    >
        <span className="flex-1">
            {title}    
        </span> 
        {icon && (
          <div className="relative h-6 w-6">
            <Image src={icon} alt="icon" fill className="object-contain" />
          </div>
        )}
    </button>
  );
}
