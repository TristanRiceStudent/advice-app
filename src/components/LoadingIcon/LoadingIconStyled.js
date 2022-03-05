import styled, { keyframes } from "styled-components";

const extension1 = keyframes`
    0% {
        transform: scaleX(0%);
    }
    33% {
        transforM: scaleX(100%)
    }
`;

const extension2 = keyframes`
    0% {
        transform: scaleX(0%);
    }
    33% {
        transform: scaleX(0%);
    }
    66% {
        transform: scaleX(100%);
    }
`;

const extension3 = keyframes`
    0% {
        transform: scaleX(0%);
    }
    66% {
        transform: scaleX(0%);
    }
    100% {
        transform: scaleX(100%);
    }
`;

export const LoadingIconStyled = styled.div`
  #Rectangle3,
  #Rectangle4,
  #Rectangle5 {
    transform-origin: 78px 0px;
  }

  #Rectangle3 {
    animation: ${extension1} 1s linear infinite;
  }

  #Rectangle4 {
    animation: ${extension2} 1s linear infinite;
  }

  #Rectangle5 {
    animation: ${extension3} 1s linear infinite;
  }
`;
