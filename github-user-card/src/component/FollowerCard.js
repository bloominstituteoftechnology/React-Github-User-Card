import React from 'react';


function FollowerCard (props) {
    console.log(props)
    const data = props.followerDataSet;

    const followerLogins = data.map((foobar) => {
        return(
            <div key={foobar.id}>
                <p><a href={foobar.html_url}>{foobar.login} </a></p>
                <img src={foobar.avatar_url}/>
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