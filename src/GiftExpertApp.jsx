import { useState } from 'react';
import { AddCategory, GifGrind } from './Component';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState( [ 'One Punch' ] );

    const onAddCategory = ( NewCategory ) => {
        // categories.push(NewCategory);
        if ( categories.includes(NewCategory)) return;
        setCategories([ NewCategory, ...categories ]);
        // setCategories( cat => [ ...cat, 'valorant']);
    }

return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory 
            onNewCategory={ (value) => onAddCategory(value)}
        /> 

        {
            categories.map( (category)  => (
                <GifGrind 
                    key={ category} 
                    category={ category}
                />
            ))
        }

    </>
    
)};
