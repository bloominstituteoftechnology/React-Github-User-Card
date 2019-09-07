import React from 'react';
import UserCard from './UserCard';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
let arr = []

const useStyles = makeStyles(theme => ({
    progress: {
      margin: theme.spacing(2),
    },
}));

function CircularIndeterminate() {
    const classes = useStyles();
  
    return (
      <div className="loader">
        <CircularProgress className={classes.progress} color="secondary" />
      </div>
    );
}

class CardList extends React.Component {
    
    state = {
        firstOrderList: [],
        secondOrderList: [],
        users: [],
    }
    
    // FilterProfiles = () => {
    //     this.state.users.filter((item, index) => this.state.users.indexOf(item) === index).map( u => {
    //         return (
    //             <UserCard user={u} />
    //         )
    //     })
    // }

    componentDidMount() {
        fetch('https://api.github.com/users/benjidoyle/followers', {
            method: 'GET',
            headers: {
                'User-Agent': 'request'
            }
        })
            .then( res => res.json() )
            .then( firstOrderList => {                
                firstOrderList.forEach( obj => {
                    arr.push(obj);                    
                })
                firstOrderList.map( obj => {
                    fetch(`https://api.github.com/users/${obj.login}/followers`, {
                        method: 'GET',
                        headers: {
                            'User-Agent': 'request'
                        }
                    })
                        .then( res => res.json())
                        .then( secondOrderList => {
                            secondOrderList.forEach( obj => {
                                arr.push(obj)
                            })
                            secondOrderList.map( obj => {
                                fetch(`https://api.github.com/users/${obj.login}/followers`, {
                                    method: 'GET',
                                    headers: {
                                       'User-Agent': 'request'
                                    }
                                })
                                .then( res => res.json())
                                .then( thirdOrderList => {
                                    thirdOrderList.forEach( obj => {
                                        arr.push(obj)
                                    })                                
                                })
                                .then( this.setState({ users: arr }))
                            })
                        })
                        .catch( err => console.log('Second fetch error: ', err))
                })
            })
            .catch( err => console.log('First fetch error: ', err));
    }
 
    render() {
        if (this.state.users.length >= 1) {
            return (
                <div className="App">
                    {                       
                        this.state.users.reduce((unique, item) => 
                            unique.includes(item) ? unique : [...unique, item], []
                        ).map( u => {
                            return (
                                <UserCard user={u} />
                            )
                        })
                    }
                </div>
            )
        }
        else {
            return (
                <div className="App">
                    <CircularIndeterminate />
                </div>
            )
        }
    }
}

export default CardList;