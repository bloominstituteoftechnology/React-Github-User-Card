import React from 'react';
import './App.css';
import UserCard from "./components/UserCard";


class App extends React.Component {
  constructor(){
    console.log('Constuctor Invoked!');
  super();
  this.state = {
    userData: {},
    followers: ""
    }
  };

  componentDidMount() {
    fetch("https://api.github.com/users/kkdev211")
      .then(res => res.json())
      .then(user => {
        console.log("kk: App.js: CDM: fetch: then2: user: ", user);
        this.setState({userData: user});
      })
      .catch(err => console.error(err));
  }

render() {
  return (
    <div className="App">
      <div className="header">
        <h1> GitHub User Card</h1>
        <UserCard 
          user={this.state.userData}
        />
        {/* <TodoForm addItem={this.addItem} /> */}
      </div>
      {/* <TodoList
        tasks={this.state.tasks}
        toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted}
      /> */}
    </div>
  );
}
}


export default App;
