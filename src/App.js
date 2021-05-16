import React, { useState, useEffect } from 'react'
import { Container, Col } from 'react-bootstrap'
import axios from 'axios'

import FollowersList from './components/FollowersList'
import UserCard from './components/UserCard'

const App = () => {
  const [user, setUser] = useState({})
  const [followers, setFollowers] = useState([])
  const [query, setQuery] = useState('hutchcrowley')

  
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${query}`)
      .then(res => {
        console.log('Result of search API call in CDU: ', res.data)
        setUser(res.data)
      })
      .catch(err => console.log('Error: ', err))
  }, [query])

  useEffect(() => {
    axios
    .get(`https://api.github.com/users/hutchcrowley/folowers`)
      .then(res => {
        console.log(res.data)
      setFollowers(res.data)
    })
      .catch(err => console.log('Error: data not returned from server.', err))
    
  },[])
  
  return (
    <Container className='App'>
      <Col className='user-column'>
        <UserCard user={user} />
      </Col>
      <Col xs={3} className='follower-column'>
        <FollowersList followers={followers} setQuery={setQuery} />
      </Col>
    </Container>
  )
}

export default App
