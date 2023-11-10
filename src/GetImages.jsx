import React, { useState, useEffect } from 'react';
import Image from './Image';

export default function GetImages() {
  const [images, setImages] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const fetchImages = async (query) => {
    try {
      const res = await fetch(`/api/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    fetchImages(searchInput);
  };

  useEffect(() => {
    // Fetch default images when the component mounts
    fetchImages('default');
  }, []);

  return (
    <>
      <div className="flex items-center justify-center my-5">
        <input
          type="text"
          placeholder="Search images..."
          value={searchInput}
          onChange={handleSearchInputChange}
          className="p-2 border border-gray-300 rounded-md"
        />
        <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded-md">
          Search
        </button>
      </div>

      <section className="px-5 container mx-auto">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20  lg:md-16 text-slate-800">
          Recommended for you
        </h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <Image key={image.id} {...image} />
          ))}
        </div>
      </section>
    </>
  );
}
