import styled from "styled-components";

export const ToDoFormContainer = styled.form`
  display: flex;
  margin-top: -1rem;
  gap: 0.5rem;

  input {
    flex: 1;
    border-radius: 8px;
    border: 0;
    background: ${(props) => props.theme["gray 400"]};

    padding: 1rem;
  }
  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;

    background: ${(props) => props.theme["blue-dark"]};
    color: ${(props) => props.theme["gray 100"]};
    font-weight: bold;
    border-radius: 8px;
    border: 0;

    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme.blue};
      border: ${(props) => props.theme.blue};
      color: ${(props) => props.theme["gray 100"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;
