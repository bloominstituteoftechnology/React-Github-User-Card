import React from 'react';

const Users = (props) => {

    return(
        <div style={{borderRadius: '20px', border: '1px solid black', padding: '5px', margin:'20px', width: '400px', display: 'inline-block', boxShadow: '5px 10px'}}>


   {console.log('props inside Users -->', props)}

   <h2>{props.folks.login}</h2>
        </div>
    )
}

export default Users