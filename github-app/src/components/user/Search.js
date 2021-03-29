import React, {useState} from 'react';
import PropTypes from 'prop-types'

function Search({searchUsers, showClear,clearUsers, setAlert}) {
    const [text, setText] = useState('');
    const onSubmit =e =>{
        e.preventDefault();
        if(text ===''){
        setAlert('Please enter something', 'light')
        }else{
            searchUsers(text);
            setAlert('');
        }
        
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
Search.PropTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search
