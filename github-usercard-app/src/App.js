import React from "react";
import axios from "axios";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breed: "husky",
      images: []
    };
  }

  componentDidMount() {
    this.fetchDogImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.breed !== this.state.breed) {
      this.setState({
        images: []
      });
      this.fetchDogImages();
    }
  }

  fetchDogImages = () => {
    axios
      .get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
      .then(result => {
        this.setState({ images: result.data.message });
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  handleChange = event => {
    this.setState({
      breed: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1 className="title">Github User Card Project</h1>
        <div className="dropdown">
        <select className="select" value={this.state.breed} onChange={this.handleChange}>
          <option value="husky">Husky</option>
          <option value="beagle">Beagle</option>
          <option value="corgi">Corgi</option>
          <option value="collie">Collie</option>
        </select>
        </div>
        <div>
          {this.state.images.map((image, index) => (
            <img style={style} src={image} key={index} alt="Dog" />
          ))}
        </div>
      </div>
    );
  }
}

const style = {
  maxWidth: 250
};

export default App;
