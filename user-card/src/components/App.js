import React from 'react';
import Search from './Search'
import UserCard from './UserCard'

class App extends React.Component {

    render() {
        return(
            <div className='App'>
                <h1>Github </h1>
                <UserCard />
            </div>
        )
    }
}
export default App;