import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";


class UserCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			props: this.props
		};
	}
	render() {
		return (
    <div classname='cards'>  
			<>
      <h1>GitHub User Cards</h1>  
     
     
				<Card className='user-card'>
					<Image
						src={this.props.user.avatar_url}
						alt="github avatar for user"
						wrapped
						ui={false}
					/>
					<Card.Content>
						<Card.Header> {this.props.user.name}</Card.Header>
						<Card.Meta>
							<span className="login">{this.props.user.login}</span>
						</Card.Meta>
						<Card.Description>{this.props.user.login}</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<a>
							<Icon name="user" />
							{this.props.user.followers}
						</a>
					</Card.Content>
				</Card>
      </>

<>
  <Card.Group>
  {this.props.followers.map(follower => (
    <div key={follower.id}>
    
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={follower.avatar_url}
              alt="github avatar for user"
            />
            <Card.Header>{follower.login}</Card.Header>
            {/* <Card.Meta>{follower.login}</Card.Meta> */}
            <Card.Description>
              <a href={follower.html_url}>Link to Profile</a>
            </Card.Description>
          </Card.Content>
        </Card>
    </div>
  ))}
  </Card.Group>
  </>
  </div>
);
}
}

export default UserCard;

				
