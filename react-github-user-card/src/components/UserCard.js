import React from "react";

export default class Usercard extends React.Component{

    render(){

        return(
            <div>
                <p>Login: {this.props.userData.login}</p>
            </div>
        )


    }
}