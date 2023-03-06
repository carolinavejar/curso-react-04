import { useState } from 'react'
import { AddCategory } from './components/AddCategory';import { GifGrid } from './components/GifGrid';
 './components/AddCategory'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Rihanna', 'Ariana']);
    const onAddCategory = (newCategory)=>{
        if( categories.includes (newCategory)) return;
        setCategories( [newCategory, ...categories]);

        // setCategories( cat =>[ ...cat, "Robyn"])
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = { (evt) => onAddCategory (evt) }
            ></AddCategory>

            { 
                categories.map((category)=>  
                (
                    <GifGrid
                        key = { category }
                        category = { category} />
                )
            )}
        </>
    )
}
