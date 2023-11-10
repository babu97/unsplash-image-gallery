import React, { useState, useEffect } from "react";
import Image from "./Image";

export default function GetImages() {
  const [images, setImages] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      const data = await res.json();
      setImages(data);
      setFilteredImages(data); // Initially, set filteredImages to all images
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Function to handle search input changes
  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filter images based on search input
    const filtered = images.filter((image) =>
      image.alt_description.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredImages(filtered);
  };

  return (
    <>
      {!images ? (
        <h2 className="flex items-center justify-center h-screen font-bold text-4xl text-center text-slate-800">
          Loading...
        </h2>
      ) : (
        <section className="px-5 container mx-auto">
          <div className="flex items-center justify-center my-5">
            <input
              type="text"
              placeholder="Search images..."
              value={searchInput}
              onChange={handleSearchInputChange}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20  lg:md-16 text-slate-800">
            Recommended for you
          </h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((image) => (
              <Image key={image.id} {...image} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
