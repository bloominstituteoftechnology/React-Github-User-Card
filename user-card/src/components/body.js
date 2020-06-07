import React from "react";
import FollowerCard from './FollowerCard'
import "../css/index.css";
import { Link } from 'react-router-dom';


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
                        {this.props.user.loadinGraph ?                    
                            <img className="user-gragh" src={`https://ghchart.rshah.org/${this.props.user.login}`} alt="loading gragh ..." />
                        :
                        <p>Loading gragh ...</p>
                        }
                            
                    </div>
                    <div className="user-info">
                        <h1>{this.props.user.name}</h1>
                        <h2>{this.props.user.location}</h2>
                        <p>"{this.props.user.bio}"</p>

                        <h3>Blog</h3>
                        {/*<Link to={this.props.user.blog}>{this.props.user.blog}</Link>*/}
                        <a href={this.props.user.blog} target="new">{this.props.user.blog}</a>



                    </div>

                </div>
                <div className="followers-container">
                    <div><h3>Followers</h3></div>
                    <div className="followers">
                        {

                            this.props.user.followersList.map((follower, i) => {
                                //console.log(follower);
                                return <FollowerCard key={i} follower={follower} setUser={this.props.setUser} />;
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