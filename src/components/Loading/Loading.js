import React from "react";
import styled, { keyframes } from "styled-components";
import { breakpoints } from "../Media";


const Pulse = keyframes`
  0% {
    opacity: .3;
  }

  50%{
    opacity: 1;
  }

  100% {
    opacity: .3;
  }
`;

const FlyOut = keyframes`
  0% {
    transform: translate(0);
  }

  100% {
    transform: translate(4000px);
  }
`;

const Panel = styled.div`
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${FlyOut} 1s 1s ease-in forwards;
`;



function Loading() {
  return (
    <Panel>
      
    </Panel>
  );
}

export default Loading;
