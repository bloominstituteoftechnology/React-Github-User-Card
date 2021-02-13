import React from 'react';

const GitStats = props => {
    return ( 
        <div>
            <p>Repos: {props.repos}</p>
            <p>Orgs</p>
            <p>gists</p>
            <p>Contribution Graph</p>
        </div>
     );
}
 
export default GitStats
