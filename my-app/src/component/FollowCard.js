import React from 'react'



class FollowCard extends React.Component {

    
    

    componentDidMount(){
        let followers=this.props.followers
        console.log("FollowCard", followers)
    }
       
    
    render(){
        return(
           
            
            
            <>
            {this.props.followers.map(follower => {
                
                return(
                    <div className='user-card'>
                        <img src={follower.avatar_url} alt='github profile'/>
                        <h2>{follower.name}</h2>
                        <p>{follower.login}</p>
                        <p>Bio:{follower.bio}</p>
                        <p>Location:{follower.location}</p>
                        <p>Followers:{follower.followers}</p>
                        <p>Following:{follower.following}</p>
                    </div>
                )
             })
            }
            </>
           

        )
    
    }

}
   

export default FollowCard