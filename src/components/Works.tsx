import React, { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import Illustration from "./Illustration";
import FootballFile from "./FootballFile";
const data = [
  "Web Design",
  "Development",
  "illustration",
  "Product Design",
  "Football",
];
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1440px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left_Top = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1440px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 1440px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props: any) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    overflow: hidden;
    color: pink;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right_Top = styled.div`
  flex: 1;
`;

export default function Works() {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left_Top>
          <List>
            {data.map((item) => (
              <ListItem<string | any> text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left_Top>
        <Right_Top>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : work === "illustration" ? (
            <Illustration />
          ) : work === "Football" ? (
            <FootballFile />
          ) : (
            <ProductDesign />
          )}
        </Right_Top>
      </Container>
    </Section>
  );
}
