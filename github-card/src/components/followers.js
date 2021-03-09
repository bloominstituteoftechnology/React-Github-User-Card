import React from 'react';

class Followers extends React.Component{

    render(){

        const { followers } = this.props

        return(
            <div>
                <h5>Followers:</h5>
             {followers.map(e => <span>{e.login}, </span>)}
            </div>
        )
    }
}

export default Followers;