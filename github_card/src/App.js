import './App.css';
import axios from 'axios';
import GitCard from './Components/GitCard';
import SearchBar from './Components/SearchBar';
import SearchButton from './Components/SearchButton'
import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searching: '',search: 'Jacobugath', gitData: {}, followers: [] };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.search !== this.state.search) {
      this.getData();
    }  
  }

  getData = () => {
    axios.get('https://api.github.com/users/' + this.state.search).then(response => {
      console.log(response.data);
      this.setState({gitData: response.data});
    })
    axios.get('https://api.github.com/users/' + this.state.search + '/followers').then(response => {
      console.log(response.data);
      this.setState({followers: response.data})
    })
  }

  updateSearching = (event) => {
    event.preventDefault();
    this.setState({searching: event.target.value});
  }

  submitSearch = (event) => {
    event.preventDefault();
    this.setState({search: this.state.searching});
    this.setState({searching: ''});
  }

  render() {

    return (
      <div className="App">
        <br></br>
        Search:
        <SearchBar updateSearching={this.updateSearching} searching={this.searching} />
        <SearchButton submitSearch={this.submitSearch} />

        <GitCard gitData={this.state.gitData} followers={this.state.followers} />

      </div>
    );
  }
}

export default App;
