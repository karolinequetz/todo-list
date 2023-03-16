import styled, { css } from "styled-components";

interface CheckedItem {
  checked: boolean;
}

export const CountContainer = styled.div`
  display: flex;
  margin: 4rem 0 1.5rem 0;
  justify-content: space-between;
`;

export const TasksCreated = styled.div`
  color: ${(props) => props.theme.blue};

  span {
    width: 1.5rem;
    background: ${(props) => props.theme["gray 400"]};
    color: ${(props) => props.theme["gray 200"]};
    border-radius: 999px;
    padding: 0.125rem 0.5rem;
  }
`;

export const Completed = styled.div`
  color: ${(props) => props.theme.purple};

  span {
    width: 3.25rem;
    background: ${(props) => props.theme["gray 400"]};
    color: ${(props) => props.theme["gray 200"]};
    border-radius: 999px;
    padding: 0.125rem 0.5rem;
  }
`;

export const NoTasks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 1.5rem;
  padding: 4rem 1.5rem;

  border-top: 1px solid;
  border-radius: 8px;
`;

export const ClipboardImg = styled.img`
  padding: 1rem;
`;

export const Task = styled.div<CheckedItem>`
  display: flex;
  align-items: flex-start;

  height: 4.5rem;
  gap: 0.75rem;
  padding: 1rem;

  background: ${(props) => props.theme["gray 400"]};
  color: ${(props) => props.theme["gray 100"]};

  border-radius: 8px;

  span {
    ${(props) =>
      props.checked &&
      css`
        color: ${(props) => props.theme["gray 300"]};
        text-decoration: line-through;
      `}
    max-width: 40.5rem;
  }
`;

export const DeleteTask = styled.button`
  background: transparent;
  cursor: pointer;
  border: 0;
  line-height: 0;
  color: ${(props) => props.theme["gray 300"]};

  &:hover {
    background: ${(props) => props.theme["gray 400"]};
    color: ${(props) => props.theme.danger};
    border-radius: 2px;
  }
`;

export const CheckButton = styled.button<CheckedItem>`
  background: transparent;
  border: 0;
  svg {
    color: ${(props) =>
      props.checked ? props.theme["gray 100"] : props.theme["gray 400"]};
    background: ${(props) =>
      props.checked ? props.theme["purple-dark"] : props.theme["gray 400"]};
    border: solid
      ${(props) =>
        props.checked ? props.theme["purple-dark"] : props.theme.blue};

    border-radius: 50%;

    &:hover {
      background: ${(props) =>
        props.checked ? props.theme.purple : props.theme["gray 400"]};
      border: solid
        ${(props) =>
          props.checked ? props.theme.purple : props.theme["blue-dark"]};
    }
  }
`;
