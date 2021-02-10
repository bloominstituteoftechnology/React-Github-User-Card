import React from 'react'

class CardContainer extends React.Component {
    render() {
        return( 
            <div>
                <h3>{this.props.login}</h3>
                <img className="" src={this.props.item.avatar_url} alt="" />
            </div>
        )
    }
}

export default CardContainer