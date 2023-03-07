import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChanged = ( {target} ) => {
        setInputValue(target.value);
    }

    const onSubmit = ( evt ) => {
        console.log("======== on submit ==========");
        evt.preventDefault();
        const newInputValue = inputValue.trim();
        
        if ( newInputValue.length <= 1 ) return;
        onNewCategory(newInputValue)
        setInputValue('');
    }

    return (
        <form onSubmit= { onSubmit } aria-label="form">
            <input 
            type = "text"
            placeholder = "Buscar Gifs"
            value = { inputValue }
            onChange = { onInputChanged } />
        </form>
        
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
