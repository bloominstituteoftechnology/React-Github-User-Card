import React from "react";
import axios from "axios";


class Body extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div className="main-content">
                <div className="user">

                </div>
                <div className="followers">

                </div>
                <p>Don't I have a great body?</p>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount running");
        /*axios
            .get("https://api.github.com/users/phmenard")
            .then(res => {
                console.log(res);
                this.setState({ doggos: res.data.message });
            })
            .catch(err => console.log(err));*/

    }

    componentWillUnmount() {

    }



}

export default Body;