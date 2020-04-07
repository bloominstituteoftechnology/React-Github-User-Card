import React from 'react';
import axios from "axios"

import './App.css';


class App extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount()
  {
    axios.get(`https://api.github.com/users/GeraldRyan`)
    .then(response=>{
      this.setState({
        users: response.data
      })
      console.log(response.data)
    })
  }

  render()
  {


    return (
      <div className="App">
      <h1>Github User Info</h1>


      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
