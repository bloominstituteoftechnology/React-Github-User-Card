import React, { Component, Fragment } from 'react'
import spinner from './spinner.gif'

class Spinner extends Component {
    render() {
        return (
            <Fragment>
            <img src={spinner} alt="Loading..." 
            style={{ width: '200px', margin:'auto', display: 'block'}}/>
        </Fragment>
        )   
    }
}

export default Spinner;