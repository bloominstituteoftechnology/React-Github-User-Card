import React, { useState } from 'react'

const SearchForm = props => {
  const [query, setQuery] = useState(props.query)
  const [queryParameter, setQueryParameter] = useState('')

  const handleChange = e => {
    console.log(queryParameter)
    setQueryParameter({
      ...queryParameter,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setQuery({ queryParameter })
  }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='login'
        value={query.login}
        placeholder='search by username'
        onChange={handleChange}
      />
      <input type='submit' />
    </form>
  )
}

export default SearchForm
