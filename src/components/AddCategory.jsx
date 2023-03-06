import { useState } from "react"

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState("Taylor");

    const onInputChanged = ( {target} ) => {
        setInputValue(target.value);
    }

    const onSubmit = ( evt ) => {
        evt.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;
        setCategories( categories  =>  [inputValue, ...categories] );
        setInputValue('');
    }

    return (
        <form onSubmit= { onSubmit } >
            <input 
            type = "text"
            placeholder = "Buscar Gifs"
            value = { inputValue }
            onChange = { onInputChanged } />
        </form>
        
    )
}
