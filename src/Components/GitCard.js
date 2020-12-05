import React from 'react';

class GitCard extends React.Component {
    
    constructor(props) {
        super();

    }

    followerLink (e) {

        this.setState({

            ...this.state, 
            username: e.target.login
            
        })

    }

    render() {

        {this.state.user.map((login) => { 

        return (

            <div>
                <div>
                    <h1>{this.props.login}</h1>
                    <img src={this.props.login.avatar_url} alt='' />
                </div>
                <div>
                    <span><a href={this.props.login.html_url}>{this.props.login.html_url}</a></span>
                    <span><a href={GitCard} onClick={followerLink}>{this.props.login.followers_url}</a></span>
                </div>
            </div>
        )

    }

    }

}

export default GitCard