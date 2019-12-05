import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { METHODS } from "http"
import axios from "axios"

class App extends React.Component {
    state = {
        user: [],
    }

    componentDidMount() {
        axios
            .get(`https://api.github.com/users/drcrystalm`)

            .then(res => {
                this.setState({
                    user: res.data.data,
                })
            })
            .catch(err => console.log(err, "This is no good"))
    }

    componentDidUpdate

    render() {
        return (
            <div>
                <h1>User Card</h1>
            </div>
        )
    }
}

export default App
