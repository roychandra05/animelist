'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowCircleLeft } from "@phosphor-icons/react";

export const Header = ({title}) => {
  const router = useRouter()

    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }
    
  return (
    <div className='flex justify-between text-main-accent items-center text-xl font-bold px-4'>
        <button className="my-3" onClick={handleBack}>
        <ArrowCircleLeft size={33} />
        </button>
      <div className="my-3">{title}</div>
    </div>
  );
};

export default Header;
