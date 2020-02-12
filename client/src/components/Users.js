import React from 'react';

const Users = (props) => {

    return(
    <div style={{borderRadius: '20px', border: '1px solid black', margin:'20px', width: '400px', display: 'inline-block', boxShadow: '5px 10px'}}>
   {console.log('props inside Users -->', props)}
<div style={{display: 'flex'}}>
    
   <img src={props.folks.avatar_url} 
   style={{
    width: '150px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '18px 0px 0px 18px'
   }} />
   <div style={{padding: '20px', width: '100%'}}>
       <h2>{props.folks.login}</h2>
       <div style={{ border: '20px', border: '1px solid black', borderRadius: '10px', padding: '5px', textDecoration: 'none'}}>
       <a href={`${props.folks.html_url}`} style={{textDecoration: 'none', color: 'black'}}>Visit Github</a>

       </div>
   </div>
   
</div>
   

        </div>
    )
}

export default Users