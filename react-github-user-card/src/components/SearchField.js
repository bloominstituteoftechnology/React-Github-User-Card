import React, { Component } from 'react'
import { Button, Form, Input } from 'reactstrap'

class SearchField extends Component {
  render() {
    return (
      <Form className='col-3' onSubmit={this.props.handleForm}>
        <Input type='text' value={this.props.search} onChange={this.props.handleChange} />
        <Button>Search on Git</Button>
      </Form>
    )
  }
}

export default SearchField;