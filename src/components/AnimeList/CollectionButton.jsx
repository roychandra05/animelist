"use client";
import { useState } from "react";
import React from "react";

export const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();
    const data = { anime_mal_id, user_email, anime_image, anime_title };
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();

    if (collection.isCreate) {
      setIsCreated((prev) => (prev = true));
    }
  };

  return (
    <>
      {isCreated ? (
        <p className="text-lg text-main-shadow">Successfully Addedd</p>
      ) : (
        <button
          className="border-2 border-main-secondary shadow-lg rounded-lg px-2 bg-main-accent text-main-shadow drop-shadow-lg hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
          onClick={handleCollection}
        >
          Add to Collections
        </button>
      )}
    </>
  );
};
export default CollectionButton;
