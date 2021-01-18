import React from 'react';
import Styled from 'styled-components';

const Button = Styled.button`
background: crimson;
border-radius: 3px;
border: 2px solid white;
color: white;
margin: 0.5em 1em;
padding: 0.7em 1em;`

class Followers extends React.Component { 
    render(props){ 
        console.log(`showme the !!!!!!!!!!!!!`,props)
    return(
    <div>
        <Button onClick={this.props.showFollowers}>Followers</Button>
        {this.props.condition && this.props.data.map((data,index) =>(
        <div key={index}>    
                { <img src={data.avatar_url} alt='User Picture'/> }         
                 <h3>Name : {data.name}</h3>
                 <p>Username : {data.login}</p>
                 <p>Address : {data.location}</p>
                 <p>Followers : {data.followers}</p>  
                 <p>Following : {data.following}</p>
                 <p>Message : {data.bio}</p> 
        </div>
        ))}
    </div>    
    )
        }
}
export default Followers;