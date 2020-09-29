import React from 'react'

class Followers extends React.Component {
    constructor(){
        super()
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/users/sam-lalli/followers')
        .then(res => res.json())
        .then(data => {
            this.setState({
                followers: data
            })
        })
        .catch(err => console.log(err))
    }


    render(){
        return(
            <div>
                {
                    this.state.followers.map(follower => (
                        <div className="followercard" key={follower.id}>
                            <h3>Username: {follower.login}</h3>
                            <img  width='100'src={follower.avatar_url} alt={follower.name}/>
                        </div>
                    ))
                }
            </div>
        )
    }
}


export default Followers