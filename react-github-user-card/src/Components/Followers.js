import React from 'react';
import '../../src/Followers.css';   


class Followers extends React.Component {
   
        state = {
        followersData: []
        };  

        componentDidMount() {
            fetch('https://api.github.com/users/Wade-Coplen/followers')
            .then(res => res.json())
            .then(data => { 
                console.log('fetch: followersData: ', data);
                this.setState({ ...this.state, followersData: data})
                })
            .catch(err => console.log('error on fetch: ', err));

        };

        render() {
            return (

                <div className="followers"> 
                    <h1>Followers</h1>
                    <div className= 'followers-header'>
                        {this.state.followersData.map(info => {
                            return <div className='usercards'>
                            <p>{info.login}</p>
                            <img className= 'image'
                                width= '250'
                                src= {info.avatar_url}
                                alt= {info.avatar_url}
                            />
                            <a 
                                href= {info.html_url}>
                                {info.html_url}
                            </a>
                        <p>ID: {info.id}</p>
                        <p>API GET/POST: {info.url}</p>
                            </div>
                     })}
                    </div>
                </div>                               
            ); 
        }
}  

export default Followers;
