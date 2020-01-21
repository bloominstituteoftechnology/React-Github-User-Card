import React from 'react';
import '../../src/App.css';


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
                    <div className= 'followers-header'>
                        {this.state.followersData.map(info => {
                            return <div className='usercards'>
                            <h3>{info.login}</h3>
                            <img className= 'image'
                                width= '250'
                                src= {info.avatar_url}
                                alt= {info.avatar_url}
                            />                        
                            <a 
                                href= {info.html_url}
                                    alt= {info.html_url}>GITHUB 
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
