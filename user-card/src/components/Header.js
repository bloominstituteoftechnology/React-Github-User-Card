import React from "react";


class Header extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div>
                <header>
                    <h3>GitHub User Cards</h3>
                    <form>
                        <input
                            type="text"
                            placeholder="user name"
                        />
                        <div>
                            Search
                            </div>
                    </form>
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