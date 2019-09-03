import React from 'react';

class UserData extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch('https://api.github.com/users/milano12345')
        .then(res => res.json())
          .then(res => console.log({ res }));
      }
    render() {
        return (
            <div>Hello World!</div>
        )
    }
}

export default UserData