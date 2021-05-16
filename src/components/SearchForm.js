import React, { useState } from 'react'

const SearchForm = props => {
  const [search, setSearch] = useState('')

  const handleChange = e => {
    e.persist()
    const event = e.target.value
    console.log(`search in SearchForm handleChange: ${event}`)
    setSearch({
      ...search,
      search: event
    })
  }

  const handleSubmit = e => {
    e.stopPropagation()
    props.setQuery(search)
  }

  return (
    <>
      <form className='search-form' onSubmit={e => handleSubmit(e)}>
        <input
          type='text'
          placeholder='search by username'
          onChange={e => {
            handleChange(e)
          }}
        />
        <input type='submit' />
      </form>
    </>
  )
}

export default SearchForm
