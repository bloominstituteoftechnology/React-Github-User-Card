import React from 'react';

import './SearchBox.styles.css';

// *********************************
//
//          Unneeded
//
// *********************************

export const SearchBox = (props) => {

    // console.log(props.handlechange)
    return (
        <div className='search-box'>
            <form onSubmit={props.handlechange}>
                <input
                    className='search'
                    type='text'
                    name='searchField'
                    placeholder='Does work yet'
                />
                <button>Search</button>
            </form>
        </div>
    );
}

export default SearchBox;