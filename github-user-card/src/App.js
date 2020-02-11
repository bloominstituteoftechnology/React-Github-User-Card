import React from 'react';
import Loading from './Loading'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: null,
      followers: []
    }
  }
  render() {
    return (
      <div>
        {this.state.loading ? <Loading /> : null}
      </div>
    );
  }
}

export default App;
