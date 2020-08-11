import React from 'react';
import axios from 'axios';
// import "./components/card.css";

class Card extends React.Component{
    constructor(){
        super();
            this.state={
                users:[],
                followers:[]
            }
    }

componentDidMount(){
    console.log('CDM')
    axios.get('https://api.github.com/users/Jet110390')
    .then((res)=>{this.setState({users:[res.data]}); 
    console.log(this.state)
    })
    .then(axios
        .get('https://api.github.com/users/Jet110390/followers')
        .then((res)=>{
            this.setState({followers:[res.data[0]]}); 
            console.log(this.state,"heres the followers")
        }))
    .catch((err)=>{console.log(err);})
   
}

componentDidUpdate(prevState){
    console.log('CDU');
    // if (prevState.users !== this.state.users){
    //     console.log('different user')
    // }
    // if (prevState.followers !== this.state.followers){
    //     console.log('state updated:',this.state.followers)

    // }}
    // fetchFollowers=()=>{
    //     axios
    //     .get('https://api.github.com/users/Jet110390/followers')
    //     .then((res)=>{
    //         this.setState({followers:[res.data[0]]}); 
    //         console.log(this.state,"heres the followers")
    //     })
    //     .catch((err)=>console.log(err));        
    };



render(){
    console.log('render')
    console.log(this.state.followers)
    return(
    <div className='page'>
        <h1 className='title'>Github User-Cards</h1>
        {this.state.users.map((user)=>
        <div key={user.id}className='card'>
        <img src={user.avatar_url} alt="User's profile" className='pic'/>
        <section>
        <h1>{user.name}</h1>
        <h3>{user.login}</h3>
        <p>Location: {user.location}</p>
        <p>Followers:{user.followers}</p>
        <p>Following:{user.following}</p>
        <span>Profile: <a href={user.html_url}>{user.html_url}</a></span>
        <p>Bio: {user.bio}</p>
        </section>
        </div>
        )}
        {this.state.followers.map((follower)=> 
        <div key={follower.id} className='card'>
        <img src={follower.avatar_url} alt="follower's profile" className='pic'/>
        <section>
        <h1>{follower.name}</h1>
        <h3>{follower.login}</h3>
        <p>Location: {follower.location}</p>
        <p>Followers:{follower.followers}</p>
        <p>Following:{follower.following}</p>
        <span>Profile: <a href={follower.html_url}>{follower.html_url}</a></span>
        <p>Bio: {follower.bio}</p>
        </section>
        </div>
        )}
        {/* <button onClick={this.fetchFollowers}>Followers</button> */}
    </div>);
}

}

export default Card;