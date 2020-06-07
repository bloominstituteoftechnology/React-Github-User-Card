import React from "react";


class Footer extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div className="footer-container">
                <footer>
                <p>&copy; 2020 Paul H. Menard Jr. </p>  

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