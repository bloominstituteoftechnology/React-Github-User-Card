import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GitCard from './Components/GitCard';
import SearchBar from './Components/SearchBar';
import SearchButton from './Components/SearchButton'


function App() {
  const [searching, setsearching] = useState('')
  const [search, setsearch] = useState('Jacobugath');
  const [gitData, setgitData] = useState({});
  const [followers, setfollowers] = useState([]);

  const getData = () =>{
    axios.get('https://api.github.com/users/'+ search).then(response =>{
      console.log(response.data);
      setgitData(response.data);
    })
    axios.get('https://api.github.com/users/'+ search + '/followers').then(response =>{
      console.log(response.data);
      setfollowers(response.data);
    })
  }

  const updateSearching = (event) =>{
    event.preventDefault();
    setsearching(event.target.value);
  }

  const submitSearch = (event) =>{
    event.preventDefault();
    setsearch(searching);
    setsearching('');
  }

  useEffect(getData, []);
  useEffect(getData, [search]);


  return (
    <div className="App">
      <br></br>
      Search:
      <SearchBar updateSearching = {updateSearching} searching = {searching}/>
      <SearchButton submitSearch = {submitSearch}/>

      <GitCard gitData = {gitData} followers = {followers}/>
    
    </div>
  );
}

export default App;
