import React, { Component } from 'react'

export default class Followers extends Component {
    render() {
        return (
            <div>
                {this.props.followers.map((item)=>{
                 return   <p>{item.login}</p>
                })}
            </div>
        )
    }
}
