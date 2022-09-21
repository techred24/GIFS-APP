import React from 'react';
import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';
describe('Tests in <GifItem/>', () => {
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'
    test('It must be match the snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url }/>);
        expect( container ).toMatchSnapshot();
    });
    test('It must show the image with the indicated URL', () => {
        render( <GifItem title={ title } url={ url } />);
        // screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });
    test('It must show the title in the component', () => {
        render( <GifItem title={ title } url={ url } />);
        expect( screen.getByText(title) ).toBeTruthy();
    });
});