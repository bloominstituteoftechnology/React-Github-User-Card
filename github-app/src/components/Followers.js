import React from 'react'
import axios from 'axios'



class Followers extends React.Component {

    constructor(){
        super();
        this.state={
            followers: []
        }
    }

    componentDidMount(){
        //api Call
        axios.get('https://api.github.com/users/dujules23/followers')
        .then(res => {
            console.log(res.data)
            this.setState({
                ...this.state,
                followers: res.data,
              
            })
        })
        .catch(err => console.log(err))
        
    }


    render() {
    
       return(
            <>
                {this.state.followers && this.state.followers.map((follower) => {
                return <div> Followers: {follower.length} </div>
                })}

            </>
        );
    };   
};

export default Followers