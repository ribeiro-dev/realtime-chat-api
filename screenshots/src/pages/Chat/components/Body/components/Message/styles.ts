import styled from "styled-components";

export const Container = styled.div`
  min-width: 200px;
  max-width: 500px;

  padding: 10px 12px;
  border-radius: 10px;

  word-break: break-all;

  &.another {
    background: #2e333d;
    align-self: flex-start;
  }

  &.user {
    background: #6b8afd;
    align-self: flex-end;
  }

`;

export const User = styled.p`
  font-size: 16px;
  font-weight: 700;
`

export const Content = styled.p`
  font-size: 14px;
  font-weight: 500;

  margin: 10px 0 16px;
`

export const Date = styled.p`
  font-size: 10px;
  color: #63676d;
  align-self: self-end;
  text-align: right;

  ${Container}.user & {
    color: white;
  }
`;
