"use client";

import { useState, useEffect } from "react";

export default function FavoriteImages() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);

    const handleStorageChange = () => {
      const updatedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(updatedFavorites);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">❤️ Favorite Puppies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {favorites.map((image, index) => (
          <img key={index} src={image} alt={`Favorite Puppy ${index}`} className="w-40 h-40 rounded-md shadow-md" />
        ))}
      </div>
    </div>
  );
}