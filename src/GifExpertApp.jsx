import React from 'react'
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['ELLB', 'OLTA']);
  const onAddCategory = ( newCategory ) => {
    if ( categories.includes(newCategory) ) return;
    setCategories([ newCategory, ...categories ]);
    // Adding new element at the very beginning
    // setCategories([ 'New Value', ...categories ])
    // setCategories( cat => [ ...cat, 'New Element' ])
  }
  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
        // setCategories={ setCategories }
          onNewCategory={ (value) => onAddCategory(value) }
          // onNewCategory={ onAddCategory }
        />

        <ol>
          {
            categories.map( (category, index) => {
              return <li key={index}>{category}</li>
            })
          }
        </ol>
    </>
  )
}
