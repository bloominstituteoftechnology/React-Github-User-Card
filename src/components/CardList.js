import React from 'react';
import UserCard from './UserCard';
let arr = []

class CardList extends React.Component {
    
    state = {
        firstOrderList: [],
        secondOrderList: [],
        users: [],
    }

    componentDidMount() {
        fetch('https://api.github.com/users/benjidoyle/followers', {
            method: 'GET',
            headers: {
                'User-Agent': 'request'
            }
        })
            .then( res => res.json() )
            .then( firstOrderList => {                
                this.setState({ firstOrderList: firstOrderList })
                firstOrderList.map( u => {
                    fetch(`https://api.github.com/users/${u.login}/followers`, {
                        method: 'GET',
                        headers: {
                            'User-Agent': 'request'
                        }
                    })
                        .then( res => res.json() )
                        .then( secondOrderList => {
                            this.setState({ secondOrderList: secondOrderList })
                            secondOrderList.map( u => {
                                fetch(`https://api.github.com/users/${u.login}/followers`, {
                                    method: 'GET',
                                    headers: {
                                        'User-Agent': 'request'
                                    }
                                })
                                    .then( res => res.json() )
                                    .then( thirdOrderList => {
                                        arr.push(firstOrderList)
                                        arr.push(secondOrderList)
                                        arr.push(thirdOrderList)
                                        this.setState({ users: arr })
                                    })
                                    .catch( err => console.log("Third fetch error: ", err))
                            })
                        })
                        .catch( err => console.log("Second fetch error: ", err))
                })
            })
            .catch( err => console.log("First fetch error: ", err));
    }
 
    render() {
        if (this.state.users.length >= 1) {
            return (
                <div className="App">
                    {                       
                        this.state.users.map( u => {  
                            console.log('u: ', u)                          
                            u.map( a => {
                                console.log('a: ', a)                          
                                return (
                                    <UserCard user={a} />
                                )

                            })                                                    
                        })
                    }
                </div>
            )
        }
        else {
            return (
                <div className="App">
                    <div>Loading...</div>
                </div>
            )
        }
    }
}

export default CardList;