import React, {Component} from "react";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false};
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {

        return(
            <h1>Hi</h1>
        )
    }
}

export default User;