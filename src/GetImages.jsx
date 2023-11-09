import { useState,useEffect } from "react"
export default function GetImages(){
    const [images, setImages] = useState([])

    const fetchImages = async () => {
        try {
          const res = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`);
          const data = await res.json();
          setImages(data);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      };
      
      useEffect(() => {
        fetchImages();
      }, []);
      

    return(
        <h1>UserEffect</h1>
    )
}