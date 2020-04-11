import React from "react";
import { Input, Form, Button, Modal } from "semantic-ui-react";

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

  errorHandler = event => {
    event.preventDefault();
    this.setState({ error: "" });
  };

  render() {
    return (
      <>
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
        {this.props.error && (
          <Modal
            size="small"
            trigger={
              <Button
                onClick={this.errorHandler}
                color="red"
                style={{ marginTop: "2%" }}
              >
                Unknown User, Do Not Click.
              </Button>
            }
          >
            <Modal.Content style={{ margin: "0 auto" }}>
              <iframe
                title="videoPlayer"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </Modal.Content>
          </Modal>
        )}
      </>
    );
  }
}

export default UserSearch;
