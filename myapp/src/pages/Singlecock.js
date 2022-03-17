import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getsinglecocktail } from '../redux/action/Action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Singlecock = () => {

    const {cocktail,loading}=useSelector((state)=>({...state.data}));

    const{modifiedcocktail,setModifiedCocktail}=useState("");
    const {id}=useParams();

    let dispatch=useDispatch();

    useEffect(() => {
       dispatch(getsinglecocktail(id));
        
    }, [id]);


    useEffect(() => {
       
        if(cocktail.length>0){
            const{
                strDrink:name,
                strDrinkThumb:image,
                strAlcoholic:info,
                strCategory:category,
                strGlass:glass,
                strInstruction:instruction,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
            }=cocktail[0];


            const ingredients=[ 
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
            ];


                const newcocktails={

                    name,image,info,category,glass,instruction,ingredients
                };

          setModifiedCocktail(newcocktails);

        }
        
      //else{
           // setModifiedCocktail("");
     //} 
        
        
        
    }, [id, cocktail]);

    if(!modifiedcocktail){

return <h2 className='section-title'> no cocktail to display</h2>


    } 
    else{


        const {name,image,category,info,glass,instruction,ingredients}=modifiedcocktail;

        return(

<>

{loading ?(
    <div className='spinner_grow'>
    
    <span className='visually-hidden'>loading ....</span>
    
    </div>
):(
<section className='section cocktail-section'>

<Link to='/'>
<button className='btn  btn-danger' style={{marginTop:"2rem"}}>
goback

</button>
</Link>

<h2 className='section-title'>{name}</h2>
<h1>firndhuhdsjakgjklglqetk</h1>
<h1>shqfihghfoiqjiog</h1>
<h1>jshqopktopqkohp</h1>
<img src={image} alt={name}/>
<div className='drink-info'>
<p>
<span>name:</span>{name}

</p>

<p>
<span>category:</span>{category}

</p>

<p>
<span>glass:</span>{glass}

</p>

<p>
<span>info:</span>{info}

</p>

<p>
<span>instruction:</span>{instruction}}

</p>

<p><span>ingredients:</span>{ingredients.map((item,index)=>{
    return item ? <span key={index}>{item}</span>: null;
})}</p>
</div>

</section>

)}


</>

        );
    }
   
    
    
};

export default Singlecock;