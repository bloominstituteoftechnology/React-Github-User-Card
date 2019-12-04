import React from 'react';
import axios from 'axios';


class Following extends React.Component {
    state ={
        following: []
    }

    componentDidMount = () => {
        axios
            get(`https://api.github.com/users/jarrod847/following`)
            .then(res =>{
                console.log("Following", res.data);
                this.setState({
                    following: res.data
                })
            })
            .catch(error => console.log(error))
    }
    render(){
        return (
            <div></div>
        )
    }
}