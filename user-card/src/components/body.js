import React from "react";
import axios from "axios";


class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-content">
                <div className="user">
                    <div className="user-img">
                        <img src={this.props.user.avitarUrl} alt="avitar" />
                    </div>
                    <div className="user-info">
                        <p>{this.props.user.userName}</p>
                        <p>{this.props.user.bio}</p>
                    </div>

                </div>
                <div className="followers">

                </div>

            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount running");
        /*axios
            .get("https://api.github.com/users/phmenard")
            .then(res => {
                console.log(res);
                this.props.setUser({ avitarUrl: res.data.avatar_url, followers: res.data.followers_url });
            })
            .catch(err => console.log(err));*/

            //console.log(this.state.followers);    

        /*axios
            .get(this.state.followers)
            .then(res => {
                console.log(res);
                //this.setState({ avitarUrl: res.data.avatar_url });
            })
            .catch(err => console.log(err));*/

    }

    componentWillUnmount() {

    }



}

export default Body;