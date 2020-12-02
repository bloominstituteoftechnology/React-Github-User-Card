import React from 'react';
import './App.css';
import styled from 'styled-components'
//import components
import fetchUsers from './components/fetchUsers'
import fetchFollowers from './components/fetchFollowers'

const Container = styled.div`
  background-color: #F1F8FF;
  height: 100vh;
  font-family: Arial;
  color: #24282D; 

  .App{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .App-header{
    font-size: 2rem;
    margin: 1% 0%;
    color: #2A7DE1;
    text-align: center;
  }
  .form-container{
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  form{
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  label{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
  
  input{
    line-height: 2rem;
    width: 70%;  
    border: none;
  }

  button{
    font-size: 1.4rem;
    border: none;
    background-color: #D9EAFF;
    border-radius: 5px;
    padding: 1% 2%;
    width: 30%;
    margin-left: 2%;
  }
  .user-container{
    margin-top: 1%;
    box-shadow: 0px 30px 60px -40px rgba(31, 38, 23, 0.5);
    border-radius: 5px;
    background-color: #FFFFFF;
    padding: 1%;
  }
  .user-card img{
    border-radius: 50%;
  }
  
  .user-details h2{
    text-align: center;
    font-size: 2.5rem;
  }
  .user-details{
    text-align: center;
  }
  .followers{
    margin-top: 1%;
    font-size: 1.5rem;
    text-align: center;
    color: #2A7DE1;
  }
  .followers-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-content: center;
  }
  .follower-card{
    /* justify-content: center;
    align-items: center; */
    margin: .5%;
    box-shadow: 0px 30px 60px -40px rgba(31, 38, 23, 0.5);
    border-radius: 5px;
    background-color: #FFFFFF;
    padding: .6%;
  }
  .follower-details{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .follower-username{
    font-size: 1rem;
    text-align: center;
    padding-top: 5%;
  }
  .follower-photo{
    align-self: center;
    border-radius: 50%;
  }
  
`
class App extends React.Component {
  state = {
    users: {},
    input: "",
    followers: []
  }

  componentDidMount(){

    fetchUsers("katieolson84")
      .then((res) => {
        console.log(res)
        this.setState({
          users:res
        });
      })
    fetchFollowers("katieolson84")
      .then((res) => {
        console.log(res)
        this.setState({
          followers: res
        });
      })
    }
    // axios.get(`https://api.github.com/users/${this.state.users}`)
    //   .then((res)=> this.setState({ users:res.data }, console.log(res)))
    //   .catch(err=> console.log(err));
  
    // axios
    //   .get(`https://api.github.com/users/${this.state.users}/${this.state.followers}`)
    //   .then((res)=> this.setState({ followers:res.data }, console.log(res)))
    //   .catch(err=> console.log(err));
    // }
  
  onChange = (e) => {
    this.setState({
      input:e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.input);
    fetchUsers(this.state.input)
      .then(res => {
        this.setState({
          users: res,
          input: ""
        })
      })
    fetchFollowers(this.state.input)
    .then(res => {
      this.setState({
        followers: res,
        input: ""
      })
    })
  }

  render() {
    return (
    <Container>
      <div className="App">
        <header className="App-header">
        <h1>GitHub User Cards</h1>
        </header>
        <div className="form-container">
          <form onSubmit={this.onSubmit}>
            <label>
              <input
              type="text"
              value={this.state.input}
              placeholder=' Enter Username'
              onChange={this.onChange}
              />
              <button>Search</button>
            </label> 
          </form>
        </div>
        <div className="user-container">
          <div className="user-card">
            <img width="250" src={this.state.users.avatar_url} alt={this.state.users.avatar_url} key={this.state.users.avatar_url}/>
            <div className="user-details">
              <h2>{this.state.users.name}</h2>
              <h4>User Name: {this.state.users.login}</h4>
              <h4>Following: {this.state.users.following}</h4>
              <h4>Followers: {this.state.users.followers}</h4>
            </div>
          </div>
        </div>
        <div>
          <div className="followers">
            <h2>Followers of {this.state.users.name}:</h2>
          </div>
          <div className="followers-container">
            {this.state.followers.map(follower =>
            <div className="follower-card" key={follower.id}>
              <div className="follower-details" >
                <img width="125" className='follower-photo' src={follower.avatar_url} alt={follower.avatar_url}/> 
                <h3 className="follower-username">{follower.login}</h3>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </Container>
    );
  };
}


export default App;
