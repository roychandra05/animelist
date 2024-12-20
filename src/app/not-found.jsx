'use client'

import { useRouter } from "next/navigation";

export const NotFound = () => {

  const router = useRouter()
  
  return (
    <div className="flex justify-center items-center min-h-screen max-w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" font-bold text-2xl leading-snug">
          Page not found | 404
        </h1>
        <h2 className=" font-mono italic text-base">
          You are not in right route
        </h2>
        <button className="mt-8 underline font-semibold" onClick={() => {router.back()}}>
          BACK
        </button>
      </div>
    </div>
  );
};

export default NotFound;
