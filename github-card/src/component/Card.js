import React from 'react'


class Card extends React.Component{




    render(){ console.log(this.props.state)
        return(
        <div className="cardDiv">
            <h1>{this.props.state.card.name}</h1>
            <img width="75" height="75" alt="profil" src={this.props.state.card.avatar_url}/>
            <p>Location: {this.props.state.card.location}</p>
            <p>Company: {this.props.state.card.company}</p>
            <p>Email: {this.props.state.card.email}</p>
            {this.props.state.followers.map(item =>{
                return <img width='50' height="50" src={item.avatar_url} key={item.id} alt="followers "/>
            })}
        </div>
        )
        }
}

export default Card