import React from 'react';
import Search from './Search';
const Header = () => {
    return (
        <div className='navbar navbar-light bg-light fixed-top'>
            <div className='container-fluid'>
            
            <span >
            find your fav cocktail
            <Search/>
             </span>
            
            
            
            </div>
        </div>
    );
};

export default Header;