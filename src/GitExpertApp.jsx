
import {useState} from 'react';
import {AddCategoy,GrifGrid} from './components';


export const GitExpertApp = () => {
    const [categories, setCategories] = useState(['one Ponch']);
    const onAddCategory = (NewCategory)=>{
        console.log(NewCategory);
        if(categories.includes(NewCategory))return;
        // setCategories((categories=> categories.push('Pokemon')));
        // categories.push('Pokemon');
        //setCategories([...categories,'Pokemon']);
        
        setCategories(cat => [NewCategory,...categories]);//agregar valores a un array (desestructuracion)


    }
  return (
   <>
   {/*titulo */}
        <h1>GitExpertApp</h1>
    
    {/* input */}
    <AddCategoy 
    //setCategories= {setCategories}
    onNewCategory={event => onAddCategory(event)}
    />
    
    {/* <button  onClick={ onAddCategory}>Agregar</button> */}
    {/*listado de Gif*/}
  
        {
        categories.map( (category) => (
            
                <GrifGrid key={category} 
                    category={category}/>
                
        ))
        }
        {/* W4k2u8AlnGBKwSnG1lGvjyr1u2EEp2Oo */}
        
 
   </>
  )
}
