import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 1440px;

  height: 100dvh;
  @supports not (height: 100dvh) {
    height: calc(var(--vh, 1vh) * 100);
  }

  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  overflow: hidden;

  padding: 24px 16px;
`;

export const MessagesContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const MessagesWrapper = styled.div`
  flex: 1;
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  padding: 0 20px;

  gap: 20px;
`;
