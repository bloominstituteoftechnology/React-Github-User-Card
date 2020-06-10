import React from "react";


class Footer extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div className="footer-container">
                <footer>
                <p>&copy; 2020 <a href={`https://github.com/phmenard`} target="new">Paul H. Menard Jr.</a> </p>  

                <h3>The React Lifecycle</h3>
                </footer>
            </div>
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }



}

export default Footer;