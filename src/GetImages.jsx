import { useState,useEffect } from "react"
import Image from "./Image";
export default function GetImages(){
    const [images, setImages] = useState([])

    const fetchImages = async () => {
        try {
          const res = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`);
          const data = await res.json();
          setImages(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      };
      
      useEffect(() => {
        fetchImages();
      }, []);
      

    return(
        <>
       {!images ? <h2 className="flex items-center justify-center h-screen font-bold text-4xl
       text-center text-slate-800">Loading...</h2>:
       <section>
        <h1> Recommended for you </h1>
        <div>
            {images.map((image)=>(
             <Image key={image.id}{...image}/>
            ))}

        </div>
       </section>

       }
       </>
    )
}