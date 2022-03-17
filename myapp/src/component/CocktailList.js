import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchcocktail } from '../redux/action/Action';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
//import { BrowserRouter as Link } from "react-router-dom";

const CocktailList = () => {

    let dispatch=useDispatch();

    const {cocktails,loading}=useSelector((state)=>({...state.data }));

    const [modifiedcocktail,setmodifiedcocktails]=useState([]);

useEffect(() => {
  dispatch(fetchcocktail());
    
},[]); 

useEffect(() => {
   if(cocktails){

const newcocktails=cocktails.map((item)=>{

    const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=item;
    return{
        id:idDrink,
        name:strDrink,
        image:strDrinkThumb,
        info:strAlcoholic,
        glass:strGlass
    };
});

setmodifiedcocktails(newcocktails);
   } 

   else{
       setmodifiedcocktails([]);
   }
   
}, [cocktails]);

if(loading){
    return(

        <div className='spinner-grow' role='status'>
        <span className='visually-hidden'>loading .....</span>
        </div>
    );
}

if(!cocktails){
    return <h2>no cocktail matched</h2>;
}

    return (
        <div className='container'>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
        
        {modifiedcocktail.map((item)=>{
            const {id,name,image,glass,info}=item;

            return(

                <div className='col' >
                <div className='card h-2'>
                <img src={image} alt={name} className='card-img-top' />
               
               <div className='card-body' style={{textAlign:"left"}}>
<h4 className='card-title'>{name}</h4>

<h6 className='card-title'>{glass}</h6>

<p className='card-text'>{info}</p>

<Link to={`/cocktail/${id}`}>

<button className='btn btn-info'>details</button>
            </Link>
               </div>
               
                </div>
                
                
                
                </div>
            );
        })}
        
        
        </div>
          
        </div>
    );
};

export default CocktailList;