import { useState } from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Rihanna', 'Ariana']);

    const onAddCategory = (category)=>{
        setCategories( ["Robyn", ...categories]);

        // setCategories( cat =>[ ...cat, "Robyn"])
    };

    return (
        <>
            <button onClick = { onAddCategory }>Agregar</button>

            {/* Titulo */}
            <h1>GifExpertApp</h1>


            {/* Input */}


            {/* Listado de Gifs */}
            <ol>
                { categories.map((category)=>{
                    return <li key= { category }>{category}</li>
                }) }
            </ol>
                {/* Gif Item */}
        </>
    )
}
