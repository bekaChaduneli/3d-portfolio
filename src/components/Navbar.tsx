import React from "react";
import styled from "styled-components";
import logo from "./assets/logo.png";
import search from "./assets/search.png";

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1440px) {
    width: 100%;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 1440px) {
    display: none;
  }
`;

const ListItem = styled.li``;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 1440px) {
    width: 100%;
    padding: 10px;
  }
`;

export default function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src={logo} />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src={search} />
          <Button>hire now</Button>
        </Icons>
      </Container>
    </Section>
  );
}
