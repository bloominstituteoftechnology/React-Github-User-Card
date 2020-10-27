import React from 'react';
import UserCard from './UserCard'

class App extends React.Component {

    render() {
        return(
            <div className='App'>
                <h1>Github Users</h1>
                <UserCard />
            </div>
        )
    }
}
export default App;