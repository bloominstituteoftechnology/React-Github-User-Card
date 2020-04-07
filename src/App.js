import React from 'react';
// import TodoList from './components/TodoList';
// import TodoForm from './components/TodoForm';
// import "./components/Todo.css";



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {

    };
  }



  render() {
    console.log('rendering...');
    return (
      <div className="App">
        Howdy
      </div>
    );
  }
}

export default App;
