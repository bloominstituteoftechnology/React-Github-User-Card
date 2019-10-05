import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div>
                {this.props.user.name}
            </div>
        )
    }
}
