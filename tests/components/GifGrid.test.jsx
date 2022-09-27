import React from "react";
import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests on <GifGrid/>', () => {
    const category = 'Flubber';
    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    })

    test('It must show the loading at the beginning', () => {
        render( <GifGrid category={category}/> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
    });
    test('It must show items when images loaded from useFetchGifs', ()  => {
        const gifs = [
        {
            id: 'ABC',
            title: 'Flubber',
            url: 'https://localhost/flubber.jpg'
        },
        {
            id: '123',
            title: 'El flubber',
            url: 'https://localhost/el-flubber.jpg'
        }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2);
    });
});