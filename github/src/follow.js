import React from 'react';
export default Follow
function Follow (props) {
    let user = props.all;

    return (
    
        <div>
        {Object.keys(user).map((item, i) =>
            <div key={i}>
<img src={user[item].avatar_url}/>
<p>@{user[item].login}</p>
            </div>)}
            </div>
    )
}