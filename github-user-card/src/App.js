import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Card from './components/Card'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    background: #e7e7e7;
`

const Title = styled.h1`
    color: grey;
`

const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-evenly;
`

let userInfo = []

axios
    .get('https://api.github.com/users/bdiaz12345')
    .then(res => {
        userInfo.push(res.data)
        console.log(userInfo)
    })
    .catch(err => {console.log(err)})

class App extends Component {
    constructor () {
        super()
        this.state = {
            user: userInfo
        }
    }

    componentDidMount() {
        axios
            .get('https://api.github.com/users/bdiaz12345/followers')
            .then(res => {
                res.data.forEach(person => {
                    userInfo.push(person)
                })
                this.setState({
                    user: userInfo
                })
            })
            .catch(err => {console.log(err)})
    }

    render() {
        return (
            <Wrapper>
                <Title>Github User Card</Title>
                <CardWrapper>
                    {this.state.user.map((person) => {
                        console.log(person)
                        return (<Card props={person} />)
                        
                    })}
                </CardWrapper>
            </Wrapper>
        )
    }
}

export default App