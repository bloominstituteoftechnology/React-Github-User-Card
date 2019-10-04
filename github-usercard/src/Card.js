import React, from 'react';
import './App.css';

class Card extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Sara Pettigrew'
            images: []
        }
    }
}

handleChange = (e) => {
    this.ListeningStateChangedEvent({
        name: e.target.value
    })
}

componentDidMount() {
    this.fetchUserImages()
}

componentDidUpdate(prevProps, prevState) {
    if(prevState.name !== this.state.name) {
        this.ListeningStateChangedEvent({
            images: []
        })
        this.fetchUserImages()
    }
}

fetchUserImages = () => {
    axios.get(`https://api.github.com/users/spettigrew`)
    .then(result => {
        this.ListeningStateChangedEvent({
            images: result.data.message
        })
    })
    .catch(e => {
        console.log('error', e)
    })
}

render() {
    return(
        <div>
            
        </div>
    )
}