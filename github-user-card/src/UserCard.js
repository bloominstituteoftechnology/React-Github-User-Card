import React from 'react';
import styled from 'styled-components'

// div
const CardDiv = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: #FFF;
    margin-bottom: 30px;
`;

class UserCard extends React.Component{

    constructor(props){
        super()
        this.state = {

            user : props.user.data
        }
    }
    render(){

        console.log(this.state.user , 'props-UserCard')
        console.log(this.props.user.data, 'UserCard')
        return(
            <>
                <CardDiv>
                    {/* <h3>{this.props.user.data.login}</h3> */}
                    {/* <p>{this.props.data.followers_url.length}</p> */}
                </CardDiv>
            </>
        )
    }
}

export default UserCard;

