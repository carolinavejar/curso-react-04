import { useEffect, useState } from "react";
import { getGifs } from "./helpers/getGifs";

export const GifGrid =  ( { category } ) => {
    
    const [ images, setImages ] = useState([]);

    const getImages = async ()=> {
        const newImages = await getGifs(category);
        setImages(newImages)
        
    };

    useEffect(() => {
        getImages();
    }, [])

    return (
        <>
            <h4> { category } </h4>
            <ol>
            { 
                images.map((image)=>  
                (
                    <li key= { image.id } >{image.title}</li>
                )
            )}
            </ol>
        </>
    )
}
