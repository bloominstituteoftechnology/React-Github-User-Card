import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import GitHubCalendar from "github-calendar";

import Card from "./components/Card";
import SearchBar from './components/SearchBar';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: Gainsboro;
`
class App extends Component {
  state = {
    profile: {},
    followers: [],
    search: "",
  }
  componentDidMount() {
    GitHubCalendar(".calendar", "thomas-t-huynh")
    fetch(`https://api.github.com/users/thomas-t-huynh`)
      .then((res) => res.json())
      .then((res) => this.setState({ profile: res }))
      .catch((err) => console.log(err))
      .then(
        fetch(`https://api.github.com/users/thomas-t-huynh/followers`)
          .then((res) => res.json())
          .then((res) => this.setState({ followers: res }))
          .catch((err) => console.log(err))
      )
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      fetch(`https://api.github.com/users/${this.state.search}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.message !== "Not Found") {
          this.setState({ profile: res })          
        }
      })
      .catch((err) => console.log(err))
      .then(
        fetch(`https://api.github.com/users/${this.state.search}/followers`)
          .then((res) => res.json())
          .then((res) => {
            if (res.message !== "Not Found") {
              this.setState({ followers: res })
            }
          })
          .catch((err) => console.log(err))
      )
    }
  }
  render() {
    const { profile, followers, search } = this.state;
    console.log(search)
    return (
      <Container>
        <SearchBar handleSearch={value => this.setState({ search: value })}/>
        <h1>Main Card</h1>
        <Card profile={profile} />
        <div className="calendar" />
        <h2>Follower Cards</h2>
        {followers && followers.map((follower, i) => <Card key={i} profile={follower} />)}
      </Container>
    );
  }
}

export default App;
