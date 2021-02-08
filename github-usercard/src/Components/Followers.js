import React from "react";
import styled from "styled-components";

const Heading = styled.h2`
  text-align: center;
`;
const Follower = styled.div`
  padding: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: wrap;
  justify-content: space-around;
`;
const Image = styled.img`
  width: 300px;
`;
const Followers = (props) => {
  return (
    <section>
      <Heading>GitHub Followers</Heading>
      <Container>
        {props.followersData.map((follower) => (
          <Follower key={follower.id}>
            <div>
              <Image src={follower.avatar_url} alt={follower.id} />
            </div>

            <a href={follower.html_url}>
              <button>View Profile</button>
            </a>
          </Follower>
        ))}
      </Container>
    </section>
  );
};

export default Followers;