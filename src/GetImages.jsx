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
       {!images ? (<h2 className="flex items-center justify-center h-screen font-bold text-4xl
       text-center text-slate-800">Loading...</h2>):
       (<section className="px-5 container mx-auto">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20  lg:md-16 text-slate-800"> 
        Recommended for you </h1>
        <div>
            {images.map((image)=>(
             <Image key={image.id}{...image}/>
            ))}

        </div>
       </section>)

       }
       </>
    )
}