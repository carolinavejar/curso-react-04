import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en AddCategory', ()=> {
    
    test('Debe cambiar el valor de la caja de texto', async()=> {
        render(<AddCategory onNewCategory={()=>{}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Riri' } } );
        expect(input.value).toBe("Riri");
    });

    test('Debe llamar onNewCategory si el input tiene un valor', async()=> {
        const inputValue = 'Riri'
        render(<AddCategory onNewCategory={()=>{}}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        expect( input.value).toBe('');
    });
})