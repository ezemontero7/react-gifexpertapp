 import React, { useState } from 'react'
 import PropTypes from 'prop-types';
 
 export const AddCategory = ({ setCategories }) => {
   
   const [inputValue, setInputValue] = useState('');
   
    const handleImputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories( categ => [inputValue, ...categ ] );
            setInputValue('');
        }

        //console.log('Submit hecho')
        
    }


    return (
     <form onSubmit={ handleSubmit }>

        <input 
            type='text'
            value={ inputValue }
            onChange={ handleImputChange }
        />
     </form>
    

    
        
   )
 }


 AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
 