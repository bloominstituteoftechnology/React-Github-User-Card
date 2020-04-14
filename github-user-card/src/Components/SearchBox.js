import React from 'react';

import './SearchBox.styles.css';

export const SearchBox = (props) => {

    // console.log(props.handlechange)
    return (
        <div className='search-box'>
            <form onSubmit={props.handlechange}>
                <input
                    className='search'
                    type='text'
                    name='searchField'
                    placeholder='Does not work yet'
                />
                <button>Search</button>
            </form>
        </div>
    );
}

export default SearchBox;