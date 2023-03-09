import { useState } from "react";

export const AddCategoy = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target})=>{
        //console.log(target.value);
        setInputValue(target.value);
        // setInputValue('Hola Mundo')
    }
    const onSubmit=(event)=>{
      event.preventDefault();
      if(inputValue.trim().length <= 1) return;

      //setCategories(categories=>[inputValue, ...categories]);//comunicacion hijo y el padre
      onNewCategory(inputValue.trim());
      setInputValue('');
      
    }

  return (
    <form onSubmit={ onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={ inputValue}
        onChange={onInputChange}
      />
  </form>
  )
}
