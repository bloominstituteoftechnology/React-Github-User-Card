// Package imports
import React from 'react'
import { Container, Header } from "semantic-ui-react";

// Component imports
import Home from './components/Comp-Home'


function App() {

    return (
        <div className="App page-wrapper">
            <Container style={{ margin: 20 }} className="text-center">
                <Header as="h3">React GitHub User Card</Header>
                <Home />
            </Container>
        </div>
    )
}

export default App