import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


class FriendCard extends React.Component{
    constructor(){
        super();
        this.state={
            data: {}
        }
    }

    componentDidMount(){
        axios.get(`${this.props.link}`)
        .then(res => {
            this.setState({data: res.data});
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
        // console.log(this.props.data)
        return(
            <StyledFriendCard>
                <img src={this.state.data.avatar_url} alt='profile' />
                <div>
                    <h1>{this.state.data.name}</h1>
                    <p className='username'>{this.state.data.login}</p>
                    <p>{this.state.data.location === null ? '' : `Location: ${this.state.data.location}`}</p>
                    <p>Profile: <a href={this.state.data.html_url}>{this.state.data.html_url}</a></p>
                    <p>Followers: {this.state.data.followers}</p>
                    <p>Repos: {this.state.data.public_repos}</p>
                    <p>{this.state.data.bio === null ? '' : `Bio: ${this.state.data.bio}`}</p>
                </div>
            </StyledFriendCard>
        )
    }
}

export default FriendCard;

const StyledFriendCard = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: #FFF;
    margin-bottom: 30px;

    img{
        width: 150px;
        height: 150px;
        border-radius: 3px;
        margin-right: 20px;
    }

    h1{
        font-size: 34px;
    }

    p{
        font-size: 14px;
        margin-bottom: 3px;
    }

    .username{
        font-size: 18px;
        font-style: italic;
        margin: 3px 0 10px;
    }

`