import React from "react";


export default class UserCard extends React.Component {
    
    render(){
        return(
            <div className="card">
                <div className="data">
                    <img src={this.props.userData.avatar_url}/>
                    <p className="login">Name: {this.props.userData.login}</p>
                    <p>URL: {this.props.userData.html_url}</p>
                    <p>Bio: {this.props.userData.bio}</p>
                    <p>Followers: {this.props.userData.followers}</p>
                    <p>Following: {this.props.userData.following}</p>
                    
                </div>
                <img src={`http://ghchart.rshah.org/${this.props.userData.login}`} alt="Github chart" className="chart"/>
            </div>
        )
    }
}