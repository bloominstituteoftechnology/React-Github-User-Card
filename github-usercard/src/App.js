import React, { useEffect, useState} from 'react';
import './scss/index.scss';
import axios from 'axios';
import UserPage from './components/UserPage';
import NavBar from './components/NavBar';
import Followers from './components/Followers';



const App = () => {
  const [user, setUser] = useState('elijah-atkins');
  const [data, setData] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]); 

  const changeUser = (user) => {
    setUser(user)
  }

  useEffect(() => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      setData(response.data);
      axios.get(`https://api.github.com/users/${user}/followers`)
      .then(response => {
        setFollowers(response.data);
      })
      axios.get(`https://api.github.com/users/${user}/following`)
      .then(response => {
        setFollowing(response.data);
      })
    })
    .catch( error =>{
      console.log('Error: ', error)
    })


  }, [user]); 

  return (
    <div className="App">
      <header className="App-header">
      <NavBar changeUser={changeUser} />
      </header>
      <UserPage user={data}/>
      <Followers followers={followers} following={following} />


    </div>
  );
}

export default App;
