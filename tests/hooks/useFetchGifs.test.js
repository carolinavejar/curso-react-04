import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en hook useFetchGifs', ()=> {
    
    test('Debe retornar el estado inicial', ()=> {
        
        const { result } = renderHook(()=> useFetchGifs('Lala'));
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('Debe retornar arr de imagenes y loading en false', async ()=> {
        
        const { result } = renderHook(()=> useFetchGifs('Lala'));

        // ESPERA A QUE EL RESULTADO SEA MAYOR A 0
        await waitFor(
            ()=> expect( result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });
})