import React, {useState} from 'react';
import PropTypes from 'prop-types'

function Search() {
    const [text, setText] = useState('');
    const onSubmit =e =>{
        e.preventDefault();
        
    }
    const onChange =e=> setText(e.target.value);
    return (
        <div>
          <form>
              <input
              type ='submit'
              name='text'
              placeholder='Search Users...'
              onChange={onChange}
              />
              <input
              type='submit'
              value='Search'
              className='btn btn-light btn-block' 
              />
              </form>  
              {showClear && (
                  <button className='btn btn-light btn-block' onClick={clearUsers}>
                      Clear
                  </button>
              )}
        </div>
    )
}

export default Search
