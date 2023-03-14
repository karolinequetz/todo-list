import styled from "styled-components";

export const ToDoContainer = styled.div`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 0;
`;

export const CountContainer = styled.div`
  display: flex;
  margin-top: 4rem;
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

export const ListItem = styled.div`
  height: 4.5rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme["gray 400"]};
  color: ${(props) => props.theme["gray 100"]};

  border-radius: 8px;

  span {
    max-width: 39.5rem;
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
