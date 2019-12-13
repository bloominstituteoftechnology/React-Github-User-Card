import React from 'react';


function FollowerCard (props) {
    console.log(props)
    const data = props.followerDataSet;

    const followerLogins = data.map(foobar => {
        return(
            <div>
                <p>{foobar.login} </p>
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