import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const StartGame = () => {
  return (
    <Container>
      <img src="/images/dices_1.png" />
      <div className="content">
        <h1>Dice Game</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
      color: black;
    }
  }
`;
