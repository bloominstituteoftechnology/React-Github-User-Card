import React from 'react'

class UserCard extends React.Component {

    constructor(){
        super()
        this.state = {
            followers: []
        }
    }

    componentDidMount(){
        console.log('componentDidMount worked')

        fetch('https://api.github.com/users/tommyconner96/followers')
        .then(res => res.json())
        .then(followers => {
            // console.log(res)
            this.setState({ followers: followers })
            console.log(this.state)
        })
        .catch(err => console.log('there was an error getting followers', err))
    }
    render() {
        return(
            <div>
                <div>
                    {/* {console.log(this.props.user, 'this is from the return')} */}
                    <img src={this.props.user.avatar_url} alt='user pic'/>
                    <p>{this.props.user.name}</p>
                    <p>{this.props.user.login}</p>
                    <p>{this.props.user.location}</p>
                    <p>{this.props.user.public_repos} repos</p>
                </div>

                <div>
                        followers:
                    {this.state.followers.map(follower => 
                    <div>{follower.login}</div>
                    )}
                </div>
            </div>
                )
    }
}
export default UserCard