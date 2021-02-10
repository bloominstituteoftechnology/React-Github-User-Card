import React from 'react'

class Card extends React.Component {
       render() {
        return (
             <div className="card">
                        <img className="myImg"src={this.props.avatar_url} alt="users"/>
                        <h2>{this.props.login}</h2>
                        <p>Location: {this.props.location}</p>
                        <a className="link" href={this.props.html_url}>{this.props.html_url}</a>
                        <p>Followers: {this.props.followers}</p>
                        <p>Following: {this.props.following}</p>     
                        <p>Bio: {this.props.bio}</p>         
            </div>
    ) 
    }
   
}

export default Card

