import React from 'react';


function FollowerCard (props) {
    console.log(props)
    const data = this.props.followerDataSet;

    const followerLogins = data.map(login => {
        return(
            <div>
                <p>{this.props.followerDataSet.login} </p>
            </div>
        );
    })

    return(
        <div>
            <h3>{followerLogins} </h3>
        </div>
    );
};

export default FollowerCard