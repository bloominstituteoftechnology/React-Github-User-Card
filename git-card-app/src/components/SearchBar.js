import React from 'react'

const SearchBar = (props) => {
  const { searchText, onInputChange, onSubmit } = props

  return (
    <form onSubmit={onSubmit} className="search-bar">
      <input
        type="text"
        value={searchText}
        placeholder="@GitHub Handle"
        name="searchBar"
        onChange={onInputChange}
      />
      <button>Fetch</button>
    </form>
  )
}

export default SearchBar