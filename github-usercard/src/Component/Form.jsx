import React from "react";
import { Button, Input } from "@material-ui/core";
export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Input
        className="formInput"
        id="outlined-basic"
        label="Search a User"
        variant="outlined"
        type="text"
        placeholder="Search User Here"
        value={props.input}
        onChange={e => props.handleChange(e)}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
