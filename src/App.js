import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import FollowersList from './components/FollowersList'
import UserCard from './components/UserCard'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      user: {},
      followers: [],
    }
  }

  componentDidMount () {
    axios
      .get('https://api.github.com/users')
      .then(res => {
        console.log('Result of search API call in CDU: ', res.data)
      .then(res => {
        console.log(res.data)
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log('Error: data not returned from server.', err)),

    axios
      .get('https://api.github.com/users/hutchcrowley/followers')
      .then(res => {
        console.log(res.data)
        this.setState({
          followers: res.data
        })
      })
      .catch(err => console.log('Error: '.err))
    console.log('State on App.js during componentDidMount: ', this.state)
  }
,

  componentDidUpdate (search) {
    const queryParameter = search.filter(
      user => user.toLowerCase === search.toLowerCase()
    )
    this.setState({
      query: queryParameter
    })
  }

  render () {
    console.log('State on App.js during the render function: ', this.state)
    //   Render JSX to the DOM
    return (
      <Container fluid={true} className='App'>
        <Col xs={5} className='user-column'>
          <Row>
            <UserCard user={this.state.user} />
          </Row>
        </Col>
        <Col xs={3} className='follower-column'>

          <FollowersList
            followers={this.state.followers}
            userFollowers={this.state.user.followers}
          />
        </Col>
      </Container>
    )
  }
}

export default App
