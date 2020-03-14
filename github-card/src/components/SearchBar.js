import React, { useState } from "react";

import styled from "styled-components";


function SearchBar({ handleSearch }) {
    const [ search, setSearch ] = useState("")
    const submitSearch = e => {
        e.preventDefault()
        handleSearch(search)
    }

    const handleOnChange = e => {
        setSearch(e.target.value)
    }
    return (
        <form onSubmit={submitSearch}>
            <h2>Search User</h2>
            <input type="text" onChange={e => handleOnChange(e)} value={search}/>
        </form>
    )

}

export default SearchBar;