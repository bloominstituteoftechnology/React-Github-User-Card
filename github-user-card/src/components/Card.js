import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="img">
                    <img src={this.props.info.avatar_url}/>
                </div>
                
                <div className="details">
                    <h5>username: {this.props.info.login}</h5>
                    <h5>name: {this.props.info.name}</h5>
                </div>
            </div>
        )
    }
}
