import React from "react";
import "../css/index.css";
import axios from "axios";



class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: ""
        }
    }

    handleChanges = e => {
        //console.log(e.target.name, e.target.value);
        this.setState({ ...this.state, login: e.target.value });
    };

    fetchUser = e => {
        e.preventDefault();
        axios
            .get(`https://api.github.com/users/${this.state.login}`)
            .then(res => 
                //console.log(res);
                this.props.setUser({
                    login: res.data.login,
                    name: res.data.name,
                    location: res.data.location, 
                    bio: res.data.bio,
                    blog: res.data.blog,
                    avitarUrl: res.data.avatar_url,
                    company: res.data.company,
                    publicRops: res.data.public_repos,
                    pubkicGists: res.data.public_gists,
                    followers: res.data.followers,
                    following: res.data.following,
                    followersList: []
                })

                   
            )
            .catch(err => console.log(err));

            //reset the search box
            this.setState({ ...this.state, login: "" }) 
      };


    render() {
        return (
            <div>
                <header>
                    <h1>GitHub User Cards</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="...Git user name"
                            name="login"
                            value={this.state.login}
                            onChange={this.handleChanges}
                        />
                        <div onClick={this.fetchUser} className="search-btn">
                            Search
                        </div>

                    </form>
                    <div className="right-image">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbzzsxz6liz-flywheel.netdna-ssl.com%2Fwp-content%2Fuploads%2F2019%2F05%2FLambda_Logo-1-200x56.png&f=1&nofb=1" alt="Lambda image"/>
                    </div>
                </header>
            </div>
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        window.removeEventListener("onClick", this.listenerF);
        window.removeEventListener("onChange", this.listenerF);
    }


}

export default Header;