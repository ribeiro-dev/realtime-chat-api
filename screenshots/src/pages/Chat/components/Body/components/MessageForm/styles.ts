import styled from "styled-components";

export const FormContainer = styled.div`
  background: #2e333d;
  border-radius: 10px;

  padding: 0 14px;

  form {
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10px;
  }

  input {
    flex: 1;
    height: inherit;
    border: none;
    background: none;
    outline: none;
    color: #fff;
    font-size: 14px;
  }

  button {
    background: none;
    border: none;
    width: 38px;
    height: 38px;
    /* border-radius: 50%; */

    cursor: pointer;
    transition: ease .3s;

    svg {
      width: 24px;
      height: 24px;
      transition: ease .3s;
    }
  }

  button:hover {
    scale: 1.2;
    /* background: rgba(0, 0, 0, 0.1); */
  }
`;
