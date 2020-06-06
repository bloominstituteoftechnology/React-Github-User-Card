import React from "react";
import "../css/index.css";



class Header extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div>
                <header>
                    <h1>GitHub User Cards</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="user name"
                        />
                        <div className="search-btn">
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