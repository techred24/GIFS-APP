import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


describe('Tests on hook useFetchGifs', () => {
    
    test('It must return the initial state', () => {
        const { result } = renderHook( () => useFetchGifs('Flubber') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy();
    });
    test('It must return an array of images and isLoading set to false', async () => {
        const { result }  = renderHook( () => useFetchGifs('Flubber') );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            // {
            //     timeout: 3000,
            //     interval: 10
            // }
        );

        const { images, isLoading } = result.current;
        //console.log(images);
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
});