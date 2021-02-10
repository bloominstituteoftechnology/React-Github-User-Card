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
            <React.Fragment>
                <p>Name: {this.props.data.name}</p>
                <p>Activity: {this.props.data.updated_at}</p>
            </React.Fragment>
        )
    }
}

export default User;