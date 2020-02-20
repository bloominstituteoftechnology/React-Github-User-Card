import React, {Component} from 'react'
import {CardFooter, Card, Row,  Col, CardImg, CardBody} from 'shards-react'

class UserCardFooter extends Component {

  render() {
    return (
        <CardFooter>
          <Row>
            <Col>
              {this.props.followers.map(follower => {
                return(
                    <Card>
                      <CardImg src={follower.avatar_url}/>
                      <CardBody>
                        <p>{follower.name}</p>
                      </CardBody>
                </Card>
                )},
              )}
            </Col>
          </Row>

        </CardFooter>
    )
  }
}

export default UserCardFooter
