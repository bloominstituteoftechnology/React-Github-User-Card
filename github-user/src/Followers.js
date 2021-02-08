import React from 'react'; 

class Followers extends React.Component{
    render(){
        return(
            <div className="followerCard">
                <img src={this.props.pic} alt={this.props.login} width="200"/>
                <p>{this.props.login}</p>
            </div>
        )
    }
}

export default Followers; 