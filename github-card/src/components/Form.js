import React from 'react'; 
import styled from 'styled-components'; 


const StyledForm = styled.div`

& {
    margin: 2%
}

`


class Form extends React.Component {




    render(){
        return (
            <StyledForm>
                <form onSubmit={this.props.onFormSubmit}>
                    <input type="text" value={this.props.term} onChange={this.props.onInputChange} /> 
                    <button type="submit">Search Users!</button>
                </form>
            </StyledForm>
        )
    }
}


export default Form; 