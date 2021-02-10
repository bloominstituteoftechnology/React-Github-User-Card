import React from 'react'
import CardContainer from './CardContainer'

class FollowerCard extends React.Component {
    render() {
        return (
            <div className="App">
                <h2>Followers</h2>
                {this.props.followers.map(item => (
                    <CardContainer item={item} />
                ))}
            </div>
        )
    }
}

export default FollowerCard