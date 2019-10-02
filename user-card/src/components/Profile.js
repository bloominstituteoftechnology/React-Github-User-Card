import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Profile extends React.Component {
    constructor() {
        super();
        this.state={
            mydata: {}
        }
    }
 
    componentDidMount() {
        axios
            .get(`https://api.github.com/users/thejohnwatt`)
            .then(res => {
                this.setState({
                    mydata: res.data  
                });
                console.log(res.data);
            })
            .catch(err => console.log(err, 'Data not found'));
    }

   

    render() {
        return (
            <div className='profile-container'>
                <img src={this.state.mydata.avatar_url} alt={this.state.mydata.name} />
                <h2>{this.state.mydata.name}</h2>
                <h3>{this.state.mydata.login}</h3>
                <p>Github Url: <a href={this.state.mydata.url}>{this.state.mydata.html_url}</a></p>
                <p>Followers: {this.state.mydata.followers}</p>
                <p>Following: {this.state.mydata.following}</p> 
            </div>
        );
    }


}


export default Profile;