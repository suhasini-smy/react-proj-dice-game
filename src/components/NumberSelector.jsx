import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      <Container>
        <div className="flex">
          <div className="errorMsg col-md-12">{error}</div>

          <div className="col-md-12">
            {arrNumber.map((value, i) => (
              <Box
                isselected={value === selectedNumber}
                key={i}
                onClick={() => numberSelectorHandler(value)}
              >
                {value}
              </Box>
            ))}
          </div>
        </div>
      </Container>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: table;
    gap: 24px;
    position: absolute;
    /* left: 50%; */
  }
  .errorMsg {
    color: red;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  float: left;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
`;

const Container = styled.div`
  background: white;
`;
