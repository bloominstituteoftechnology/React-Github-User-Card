import React, { useEffect, useState} from 'react';
import './scss/index.scss';
import axios from 'axios';
import UserPage from './components/UserPage';



const App = () => {
  const [user, setUser] = useState('elijah-atkins');
  const [data, setData] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]); 

  const changeUser = (e) => {
    setUser(e.target.value)
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
      <UserPage user={data}/>
      </header>

    </div>
  );
}

export default App;
