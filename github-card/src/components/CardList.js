import React from 'react'; 
import styled from 'styled-components'; 


import Card from './Card';



const StyledCardList = styled.div`


& {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    flex-wrap: wrap; 
    width: 100%
}






`


class CardList extends React.Component {

    

    render(){


        const renderedList = this.props.userData.map(cur => {
            return (
                <Card key={cur.id} avatar={cur.avatar_url} bio={cur.bio} name={cur.name} /> 
            )
        })

        return (
            <StyledCardList>
                {renderedList}
            </StyledCardList>
        )
    }
}



export default CardList; 