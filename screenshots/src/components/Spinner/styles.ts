import styled from "styled-components";

export const Spin = styled.svg`
  animation: spin 1.5s linear infinite;

  .path {
    stroke-linecap: round;
    stroke-dasharray: 90;
    stroke-dashoffset: 0;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
