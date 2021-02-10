import React, {Component} from "react";
import axios from "axios";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {followers: []}
    }

    componentDidMount() {
        axios
        .get("https://api.github.com/users/HDM007/followers")
        .then((res) => {
            this.setState({
                followers: res.data
            })
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    render() {

        return(
            <React.Fragment>
                <p>Name: {this.props.data.name}</p>
                <p>Activity: {this.props.data.updated_at}</p>
                <p>Followers Below: </p>
                <ul>
                {this.state.followers.map(follower => {
                    return <li>{follower.login}</li>
                })}
                </ul>
            </React.Fragment>
        )
    }
}

export default User;