import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      UserCard: [],
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/ZIng178')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          ...this.state,
          UserCard: [res.avatar_url],
        })
      })
      .catch(err => console.log('Error', err))
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          {this.state.UserCard.map(user => {
            return (
              <div>
                <img src={user.avatar_url} alt='user-image'></img>
                <div className='info'>
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                </div>
              </div>
            )
          })}
        </header>
      </div>
    )
  }
}

export default App
