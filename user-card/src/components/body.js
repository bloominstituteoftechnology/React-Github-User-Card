import React from "react";
import FollowerCard from './FollowerCard'
import "../css/index.css";


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
                <div className="followers-container">
                    <div><h3>Followers</h3></div>
                    <div className="followers">
                        {

                            this.props.user.followersList.map((follower, i) => {
                                //console.log(follower);
                                return <FollowerCard key={i} follower={follower} setUser={this.props.setUser}/>;
                            })
                        }
                    </div>
                </div>

            </div>
        );
    }

    componentDidUpdate() {
        //console.log(this.props.user.followersList)

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }



}

export default Body;