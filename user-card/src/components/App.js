import React from 'react';
import Search from './Search'
import UserCard from './UserCard'

class App extends React.Component {

    render() {
        return(
            <div className='App'>
                {/* <Search /> */}
                <UserCard />
            </div>
        )
    }
}
export default App;