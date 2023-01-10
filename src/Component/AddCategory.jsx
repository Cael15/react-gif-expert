import { useState } from "react"

// destrcuturar yse obtiene lo q recibimos de las props
export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
      setInputValue(target.value);
    }

    // Aquí llamamos algo y tenemos toda la info respectiva
    const onSubmit = (event) => {
      event.preventDefault();
      if( inputValue.trim().length <= 1) return;
      // setCategories( categories => [inputValue, ...categories]);
      setInputValue('');
      onNewCategory(inputValue.trim());
      
    }

  // Los fragmentos se usan cuando tenemos uno o más elementos que va ser el nodo root de ese componente
  // Dos elementos uno fuera de otro ( es necesario los fragmentos)
  return (
    <form onSubmit={onSubmit}>
      <input 
        type='text'
        placeholder="Buscar gift"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
    
  )
}