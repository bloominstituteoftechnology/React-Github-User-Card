import React from 'react';
import styled from 'styled-components';

class GitHubCard extends React.Component{

    render(){
        return(
            <StyledUserCard>
                <img src={this.props.gitData.avatar_url} alt='profile' />
                <div>
                    <h1>{this.props.gitData.name}</h1>
                    <p className='username'>{this.props.gitData.login}</p>
                    <p>Location: {this.props.gitData.location}</p>
                    <p>Profile: <a href={this.props.gitData.html_url}>{this.props.gitData.html_url}</a></p>
                    <p>Followers: {this.props.gitData.followers}</p>
                    <p>Repos: {this.props.gitData.public_repos}</p>
                    <p>Bio: {this.props.gitData.bio}</p>
                </div>
                
            </StyledUserCard>
        )
    }
}

export default GitHubCard;

const StyledUserCard = styled.div`
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