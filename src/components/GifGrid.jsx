import PropTypes from 'prop-types';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid =  ( { category } ) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h4> { category } </h4>
            {
                isLoading && (<h4> Cargando ... </h4>)
            }
            
            <div className="card-grid">
            { 
                images.map((image)=>  
                (
                    <GifItem key = { image.id }
                    { ...image }
                    ></GifItem>
                )
            )}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}