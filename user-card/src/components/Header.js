import React from "react";
import "../css/index.css";
import axios from "axios";



class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: ""
        }
    }

    handleChanges = e => {
        //console.log(e.target.name, e.target.value);
        this.setState({ ...this.state, userName: e.target.value });
    };

    fetchUser = e => {
        e.preventDefault();
        axios
            .get(`https://api.github.com/users/${this.state.userName}`)
            .then(res => 
                //console.log(res);
                this.props.setUser({userName: res.data.name, 
                    bio: res.data.bio,
                    avitarUrl: res.data.avatar_url,
                    followers: res.data.followers_url })

                   
            )
            .catch(err => console.log(err));

            //reset the search box
            this.setState({ ...this.state, userName: "" }) 
      };


    render() {
        return (
            <div>
                <header>
                    <h1>GitHub User Cards</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="user name"
                            name="userName"
                            value={this.state.userName}
                            onChange={this.handleChanges}
                        />
                        <div onClick={this.fetchUser} className="search-btn">
                            Search
                        </div>

                    </form>
                    <div>
                        maybe lambda logo??
                    </div>
                </header>
            </div>
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }


}

export default Header;