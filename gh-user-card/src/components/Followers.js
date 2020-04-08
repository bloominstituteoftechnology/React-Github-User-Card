import React from 'react';

function Followers(props) {
    // console.log(props.followersTotal);
    return (
        <section>
            <h2>
                These are the people following me: ({props.followersTotal} total
                followers){' '}
            </h2>
            {props.followersInfo.map((value) => {
                // console.log(value);
                return (
                    <div>
                        <h4>Hey there I'm {value.name} </h4>
                        <h3>My Github handle is {value.login}</h3>
                        <p>I am located near {value.location}</p>
                        <img
                            src={value.avatar_url}
                            alt="Avatar URL for selected person"
                        />
                        <h5>A little bit about me: </h5>
                        <p>{value.bio}</p>
                        <h6>Followers on Github: {value.followers}</h6>
                        <h6>Following: {value.following} </h6>
                        <p>My Github was created on {value.created_at}</p>
                    </div>
                );
            })}
        </section>
    );
}

export default Followers;
{
    /* <h4>Name: </h4>
            <h3>Github Handle: </h3>
            <p>Location: </p>
            <img src="" />
            <h5>Bio: </h5>
            <h6>Followers: </h6>
            <h6>Following: </h6>
            <p>Github Created: </p> */
}
