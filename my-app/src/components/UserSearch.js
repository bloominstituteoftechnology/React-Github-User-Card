import React from "react";
import { Input, Form, Button } from "semantic-ui-react";

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEntry: ""
    };
  }

  changeHandler = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.searchUser(this.state.userEntry);
    this.setState({ userEntry: "" });
  };

  render() {
    console.log(this.state.userEntry);
    return (
      <Form onSubmit={this.submitHandler}>
        <Button type="submit">Search</Button>
        <Input
          icon="users"
          iconPosition="left"
          placeholder="Search users..."
          name="userEntry"
          value={this.state.userEntry}
          onChange={this.changeHandler}
        />
      </Form>
    );
  }
}

export default UserSearch;
