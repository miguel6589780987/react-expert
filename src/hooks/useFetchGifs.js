import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifts";



export const useFetchGifs = (category) => {

     const [images, setImages] = useState([]);
     const [isLoading,setIsLoading]= useState([true]);

    const getImges = async()=>{
        const newImages = await getGifs(category);
        
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( ()=>{//ayuda a que solo se ejecute una vez la peticion https 
       getImges();
    } , [])
 
    return{
        images,
        isLoading
    }
}
