import React from 'react';
import './UserCard.css'
// material ui style components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class UserCard extends React.Component {





    render() {
        return (
            <Card className='root'>
            <div>
                <h3 className='name'>{this.props.userData.name}</h3>
                <img className="profile-pic" src={this.props.userData.avatar_url} alt='profile picture' />
                </div>
                <CardContent className='user-info'>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <b>UserName:</b> {this.props.userData.login}

                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        <b>Location:</b> {this.props.userData.location}

                    </Typography>

                    
                    <Typography variant="body2" color="textSecondary" component="p">
                        <b>Followers:</b> {this.props.userData.followers}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <b>Following:</b> {this.props.userData.following}

                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <b><a href={this.props.userData.html_url}>GitHub Page</a></b> 

                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default UserCard