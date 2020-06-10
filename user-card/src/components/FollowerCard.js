import React from "react";
import "../css/index.css";
import axios from "axios";


class FollowerCard extends React.Component {
    constructor(props) {
        super(props);
        
    }

    /*setUser = () => {
        this.props.setUser(this.props.follower.login);
    }*/

    fetchUser = e => {
        e.preventDefault();
        axios
            .get(`https://api.github.com/users/${this.props.follower.login}`)
            .then(res => 
                //console.log(res);
                this.props.setUser({
                    login: res.data.login,
                    name: res.data.name,
                    location: res.data.location, 
                    bio: res.data.bio,
                    blog: res.data.blog,
                    avitarUrl: res.data.avatar_url,
                    company: res.data.company,
                    publicRepos: res.data.public_repos,
                    publicGists: res.data.public_gists,
                    followers: res.data.followers,
                    following: res.data.following,
                    followersList: []
                })

                   
            )
            .catch(err => console.log(err));

            //reset the search box
            //this.setState({ ...this.state, userName: "" }) 
      };


    render() {
        return (
            
                <div className="follower-card">
                    <img onClick={this.fetchUser} src={this.props.follower.avatar_url} alt="avitar"/>
                    <p >{this.props.follower.login}</p>
                </div>
            
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        window.removeEventListener("onClick", this.listenerF);
    }



}

export default FollowerCard;