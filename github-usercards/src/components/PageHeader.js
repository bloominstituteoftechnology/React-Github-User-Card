import React from "react";
import githublogo from "../assets/githublogo.png";
import lambdalogo from "../assets/lambdalogo.png";
import { Header, Image } from "semantic-ui-react";
const PageHeader = () => {
  return (
    <Header
      as="h1"
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "50%",
        margin: "auto"
      }}
    >
      <Image src={lambdalogo} />
      ❤️'s
      <Image src={githublogo} />
    </Header>
  );
};

export default PageHeader;
