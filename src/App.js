import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import FollowersList from './components/FollowersList'
import UserCard from './components/UserCard'
// import SearchForm from './components/SearchForm'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      user: {},
      followers: [],
      query: 'hutchcrowley'
    }
  }

  componentDidMount () {
    axios
      .get('https://api.github.com/users')
      .then(res => {
        console.log('Result of search API call in CDU: ', res.data)
        // let userSearch = res.data.filter(
        //   userSearch => userSearch.login ===
        // )
        // console.log('this is userSearch: ', userSearch)
        // this.setState({
        //   query: userSearch,
        //   user: res.data
        // })
      })
      .catch(err => console.log('Error: ', err))

    //   Fetch initial data from API, then set state to the new data
    axios
      .get(`https://api.github.com/users/${this.state.query}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log('Error: data not returned from server.', err))

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

  // Started working on search functionality.

  // componentDidUpdate (prevState) {
  //   if (prevState.query !== this.state.query) {
  //     axios
  //       .get('https://api.github.com/users')
  //       .then(res => {
  //         console.log('Result of search API call in CDU: ', res)
  //         let userSearch = res.data.filter(
  //           userSearch => userSearch.login === prevProps.query
  //         )
  //         console.log('this is userSearch: ', userSearch)
  //         this.setState({
  //           query: userSearch,
  //           user: res.data
  //         })
  //       })
  //       .catch(err => console.log('Error: ', err))
  //   }
  // }

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
          {/* <SearchForm query={this.state.user} /> */}
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
