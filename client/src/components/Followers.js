import React from 'react';

const Followers = (props) => {

    return(
        <div style={{borderRadius: '20px', border: '1px solid black', padding: '5px', width: '400px', display: 'inline-block', boxShadow: '5px 10px'}}>

   {console.log('Followers in followers ->', props.followers.map(folks => folks.login))}
   {props.followers.map(folks => (
   <div key={folks.id}>
       <h1>{folks.login}</h1>
       </div>))}

        </div>
    )
}

export default Followers