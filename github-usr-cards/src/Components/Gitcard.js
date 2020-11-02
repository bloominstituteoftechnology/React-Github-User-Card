import React from "react";


class Gitcard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:this.props.username,
            userimg:this.props.userimg,
            name:this.props.name,
            bio:this.props.bio,
            created_at:this.props.created_at,
            location:this.props.location
        }
    };

    componentDidMount(){
      
        
    }

    componentDidUpdate(prevProp,prevState){
        if(prevProp.username !== this.state.username){
            this.state.username = this.props.username;
        } 
        if(prevProp.userimg !== this.state.userimg){
            this.state.userimg = this.props.userimg;
        }
    }

    render(){
        return(
            <div><h1>Github User Stats</h1>
              <div className="card">
                    <p className="username">
                    Login: {this.state.username}
                    </p>
                    <img  alt="Github User Avatar Image" 
                    src={this.state.userimg} width="300px" />
                    <p>
                        Since: {this.state.created_at}
                    </p>
                    <p>
                        Name: {this.state.name}
                    </p>
                    <p>
                        Bio: {this.state.bio}
                    </p>
                    <p>
                        Location: {this.state.location}
                    </p>
                    
            </div>
            </div>
        );
    }

}


export default Gitcard;