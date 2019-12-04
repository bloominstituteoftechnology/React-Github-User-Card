import styled from "styled-components";

// GitCard Styling*********

export const GitCardContainer = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 0.5%;
  margin: 3% auto;
  background: #add8e6;
  border-radius: 50px;
  border: 4px solid green;
`;

export const GitUser = styled.div`
  width: 95%;
  display: flex;
`;

export const GitAvatar = styled.a`
  width: 40%;
  padding: 1%;
  margin-right: 5%;

  img {
    width: 100%;
    box-shadow: 0 0 5px 1px rgb(50, 50, 50, 0.5);
    border-radius: 50px;
  }
`;

export const GitInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const GitFollowers = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  h1 {
    width: 100%;
    padding-left: 6%;
  }
`;

export const GitFollower = styled.div`
  width: 20%;
  padding: 8px;
  text-align: center;

  img {
    width: 50%;
    border-radius: 10%;
    box-shadow: 0 0 5px 1px rgb(50, 50, 50, 0.5);
    :hover {
      transform: scale(1.2);
    }
  }
`;

export const ContributionChart = styled.div`
  width: 88%;
  margin: 0 auto;
`;

// GitSearch Styling ******

export const SearchForm = styled.form`
  text-align: center;
  margin: 2%;

  input {
    padding: 2px 0;
  }
  button {
    border: 1px solid black;

    background: green;
    color: white;
    padding: 2px 10px;
    margin: 8px;
    :active {
      box-shadow: none;
    }
  }
`;
