import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem', ()=> {
    test('Debe hacer mach con el snapshot', ()=> {
        const title = "Titulo ...";
        const url = "http://";
        const { container } = render
        (< GifItem title= {title} url={ url} />);

        expect (container).toMatchSnapshot();
    });
})