import React from "react";
import axios from "axios";


class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            avitarUrl: "",

        };
    }


    render() {
        return (
            <div className="main-content">
                <div className="user">
                    <div className="user-img">
                        <img src={this.state.avitarUrl} alt="avitar"/>
                    </div>
                    <div className="user-info">
                        <p>Hello</p>
                    </div>

                </div>
                <div className="followers">

                </div>
                
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount running");
        axios
            .get("https://api.github.com/users/phmenard")
            .then(res => {
                console.log(res);
                this.setState({ avitarUrl: res.data.avatar_url });
            })
            .catch(err => console.log(err));

    }

    componentWillUnmount() {

    }



}

export default Body;