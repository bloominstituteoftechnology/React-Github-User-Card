import React from 'react';

class GitCard extends React.Component {
    constructor(props) {
        super();
    }

    render() {

        return (
            <div>
                
                <div key = {this.state.login}>
                    <h1>Name: {this.state.userData.name}</h1>
                    <h2>Username: {this.state.login}</h2>
                    <span>GitHub Site: <a href={this.state.html_url}>{this.state.html_url}</a></span>
                    <img src={this.state.avatar_url} alt='' />
                    <p>Location: {this.state.location}</p>
                </div>
                <div>
                    <p>Followers: </p>
                    <ul>
                        {this.props.followers.map((follower) => {
                            return <li key = {follower.login}>{follower.login}</li>
                        })}
                    </ul>
                </div>           
            </div>
            
        )}

}

export default GitCard