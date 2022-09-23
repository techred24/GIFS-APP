import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Tests on <AddCategory/>', () => {
    test('The value of the textbox must change', () => {
        render( <AddCategory onNewCategory={ () => {} }/> );
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Flubberbol' } } );
        expect( input.value ).toBe('Flubberbol');
        // screen.debug();
    });
    test('It must call onNewCategory if input has a value', () => {
        const inputValue = 'Manchester City';
        render(<AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );
        expect( input.value ).toBe('');
        // screen.debug();
    });
});