import React from 'react';
import './UserCard.css'
// material ui style components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class FollowerCard extends React.Component {





    render() {
        return (
            <div>
                {this.props.followers.map((follower) => (
                    <Card className='root'>
                        <div>
                            <h3 className='name'>{follower.login}</h3>
                            <img className='follower-pic' src={follower.avatar_url} alt='profile picture' />
                        </div>
                        <CardContent className='user-info'>

                            <Typography variant="body2" color="textSecondary" component="p">
                                <b><a href={follower.html_url}>GitHub Page</a></b> 

                            </Typography>
                        </CardContent>
                    </Card>
                ))}

            </div>


        );
    }
}

export default FollowerCard