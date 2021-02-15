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
                <div>Followers: </div>
                {this.state.followers && this.state.followers.map((follower, i) => {
                return <div key={follower.id}> {this.state.followers.length} </div>
                })}

            </>
        );
    };
};


export default Followers