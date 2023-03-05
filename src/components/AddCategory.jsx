import { useState } from "react"

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState("Taylor");

    const onInputChanged = ( {target} ) => {
        setInputValue(target.value)
    }

    const onSubmit = ( evt ) => {
        console.log(inputValue);
        evt.preventDefault();
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
