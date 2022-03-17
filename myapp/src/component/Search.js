import React ,{useEffect,useRef} from 'react';

import { searchcocktail } from '../redux/action/Action';
import { useDispatch } from 'react-redux';

import '../component/search.css';

const Search = () => {

const searchvalue=useRef();

let dispatch=useDispatch();


    const handlesubmit=(e)=>{
        e.preventDefault();



    }

    const searchcocktailsfor=()=>{
dispatch(searchcocktail(searchvalue.current.value));
    }



    return (
        <section className='section-search'>
        <form className='search-form' onSubmit={handlesubmit}>
        
        <div className='form-control'>
        
        <label htmlFor='name'>search cocktail</label>
        <input type='text' 
        name='name'
ref={searchvalue}
        onChange={searchcocktailsfor}
        id='name' />
        
        </div>
        
        
        </form>
            
        </section>
    );
};

export default Search;