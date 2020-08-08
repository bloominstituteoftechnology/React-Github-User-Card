import React from 'react';
import axios from 'axios'
class Card extends React.Component{
    constructor(){
        super();
            this.state={
                users:[]
            }
    }

componentDidMount(){
    console.log('CDM')
    axios.get('https://api.github.com/users/Jet110390')
    .then((res)=>{this.setState({users:res.data});})
    .catch((err)=>{console.log(err);})
}

componentDidUpdate(){
    console.log('CDU')
}

render(){
    console.log('render')
    return(
    <div>

    </div>);
}

}

export default Card;