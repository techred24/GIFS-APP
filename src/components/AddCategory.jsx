import React, { useState } from 'react';
import PropTypes  from 'prop-types';
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChanged = ({target}) => {
        setInputValue(target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;
        // setCategories( categories => [ inputValue, ...categories ] );
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }
  return (
    <form onSubmit={onSubmit} aria-label="form">
        <input type='text' placeholder='Buscar gifs' value={inputValue} onChange={onInputChanged}/>
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}