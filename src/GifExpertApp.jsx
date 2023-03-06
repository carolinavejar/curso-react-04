import { useState } from 'react'
import { AddCategory } from './components/AddCategory'; './components/AddCategory'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Rihanna', 'Ariana']);
    const onAddCategory = (newCategory)=>{
        console.log(newCategory);
        setCategories( [newCategory, ...categories]);

        // setCategories( cat =>[ ...cat, "Robyn"])
    };

    return (
        <>
            {/* <button onClick = { onAddCategory }>Agregar</button> */}

            {/* Titulo */}
            <h1>GifExpertApp</h1>


            {/* Input */}
            <AddCategory 
                // setCategories = { setCategories } 
                onNewCategory = { (evt) => onAddCategory (evt) }
            ></AddCategory>

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
