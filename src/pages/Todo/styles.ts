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
