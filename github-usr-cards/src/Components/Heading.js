import React from "react";


class Heading extends React.Component {
    constructor(){
        super();
        this.state={
            user: []
        }
    };

    componentDidMount(){

    }

    componentDidUpdate(prevProp,prevState){

    }

    render(){
        return(
            <div className="header">
                Heading with new images and icons go here
            </div>
        );
    }

}


export default Heading;