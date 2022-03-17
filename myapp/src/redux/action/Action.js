import * as types from './Actiontype'

import axios from 'axios'

 const fetchcocktailstart=()=>({
     type:types.FETCH_COCKTAIL_START,
 });

 const fetchcocktailsuccess=(cocktails)=>({
    type:types.FETCH_COCKTAIL_SUCCESS,
    payload:cocktails
});


const fetchcocktailfail=(error)=>({
    type:types.FETCH_COCKTAIL_FAIL,
    payload:error,
});






const getsinglecocktailstart=()=>({
    type:types.GET_SINGLE_COCKTAIL_START,
});

const getsinglecocktailsuccess=(cocktails)=>({
   type:types.GET_SINGLE_COCKTAIL_SUCCESS,
   payload:cocktails
});


const getsinglecocktailfail=(error)=>({
   type:types.GET_SINGLE_COCKTAIL_FAIL,
   payload:error,
});






const searchcocktailstart=()=>({
    type:types.SEARCH_COCKTAIL_START,
});

const searchcocktailsuccess=(cocktails)=>({
   type:types.SEARCH_COCKTAIL_SUCCESS,
   payload:cocktails
});


const searchcocktailfail=(error)=>({
   type:types.SEARCH_COCKTAIL_FAIL,
   payload:error,
});




export function fetchcocktail(){
    return function(dispatch){
        dispatch(fetchcocktailstart());

        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then((response)=>{
            const cocktails=response.data.drinks;
            dispatch(fetchcocktailsuccess(cocktails));
        }).catch((error)=>{
            dispatch(fetchcocktailfail(error));
        })
    }
    }





    export function getsinglecocktail(id){
        return function(dispatch){
            dispatch(getsinglecocktailstart());
    
            axios.get(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response)=>{
                const cocktail=response.data.drinks;
                dispatch(getsinglecocktailsuccess(cocktail));
            }).catch((error)=>{
                dispatch(getsinglecocktailfail(error));
            })
        }
        }





        export function searchcocktail(searchtext){
            return function(dispatch){
                dispatch(searchcocktailstart());
        
                axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchtext}`)
                .then((response)=>{
                    const cocktails=response.data.drinks;
                    dispatch(searchcocktailsuccess(cocktails));
                }).catch((error)=>{
                    dispatch(searchcocktailfail(error));
                })
            }
            }