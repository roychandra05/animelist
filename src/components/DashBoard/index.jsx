"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import apiLibraries from "@/libraries/apiLibs";

export const CollectionsAnime = ({ collection }) => {
  const [listCollections, setListCollections] = useState([]);

  const fetchAnime = async (id) => {
    const response = await apiLibraries(`anime/${id}`);
    if (listCollections) {
      setListCollections((prev) => [...prev, response]);
    } else {
      return setListCollections(response);
    }
  };
  useEffect(() => {
    collection.map((value) => {
      fetchAnime(value);
    });
  }, []);
  console.info(listCollections);
  return (
    <>
      <div className="grid grid-cols-4 gap-8">
        {listCollections?.map((value, i) => {
          return (
            <div className="border-4 border-main-accent rounded-lg shadow-lg overflow-hidden" key={i}>
              <Link href="/" className="">
                <Image
                  src={value.data.images.webp.image_url}
                  width={350}
                  height={350}
                  priority
                  alt="tidak ada"
                  className="w-full h-96"
                />
              </Link>
              <div className="font-bold flex justify-center items-center sm:text-xs md:text-sm text-base p-4 bg-main-background h-auto text-center border-t-4 border-main-accent">
                <h3 className="text-lg font-bold text-main-secondary">{value.data.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CollectionsAnime;
