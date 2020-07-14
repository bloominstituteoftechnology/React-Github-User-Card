import React from 'react';
import axios from 'axios';


class App extends React.Component {
  state = {
    doggos: [],
    doggoText: '',
    error: '',
  };
 
  componentDidMount() {
    axios
      .get('https://dog.ceo/api/breed/husky/images')
      .then((res) => {
        // res.data.message
        this.setState({
          doggos: res.data.message,
        });
      })
      .catch((err) => console.log(err));
  }

  handleChanges = (e) => {
    this.setState({
      doggoText: e.target.value,
    });
  };

  // prevProps && prevState ~ dependency array in useEffect
  componentDidUpdate(prevProps, prevState) {
    /// ALWAYS use an if statement
    if (prevState.doggos !== this.state.doggos) {
      if (this.state.doggoText === 'chihuahua') {
        axios
          .get('https://dog.ceo/api/breed/labrador/images')
          .then((res) => {
            // res.data.message
            this.setState({
              doggos: res.data.message,
              doggoText: 'labrador',
            });
          })
          .catch((err) => console.log(err));
      }
    }
  }

  fetchDoggos = (e) => {
    e.preventDefault();
    axios
      .get(`https://dog.ceo/api/breed/${this.state.doggoText}/images`)
      .then((res) => {
        // res.data.message
        this.setState({
          doggos: res.data.message,
          error: '',
        });
      })
      .catch((err) => {
        this.setState({
          error: 'Looks like we could not find that breed. Please try again',
        });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Doggos</h1>
        <input
          type="text"
          value={this.state.doggoText}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchDoggos}>Fetch doggos</button>
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        <div className="doggos">
          {!this.state.error &&
            this.state.doggos.map((doggo) => (
              <img width="200" src={doggo} key={doggo} alt={doggo} />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
