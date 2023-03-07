import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem', ()=> {
    
    const title = "Titulo ...";
    const url = "http://";

    test('Debe hacer mach con el snapshot', ()=> {
        
        const { container } = render
        (< GifItem title= {title} url={ url} />);

        expect (container).toMatchSnapshot();
    });

    test('Debe mostrar URL y ALT indicado', ()=> {
        render(< GifItem title= {title} url={ url} />);

        // expect (screen.getByRole('img').src).toBe(url);
        // expect (screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');
        expect(alt).toBe(title);
        expect(src).toBe(url);
    });

    test('Debe mostrar el titulo del componente', ()=> {
        render(< GifItem title= {title} url={ url} />);

        expect(screen.getByText(title)).toBeTruthy;
    });
})