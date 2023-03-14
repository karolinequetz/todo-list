import { Header } from "../../components/Header";
import { NewToDo } from "../../components/NewToDo";
import {
  Completed,
  CountContainer,
  TasksCreated,
  ToDoContainer,
} from "./styles";

export const Todo = () => {
  return (
    <>
      <Header />
      <ToDoContainer>
        <NewToDo />

        <CountContainer>
          <TasksCreated>
            Tarefas Criadas: <span>5</span>
          </TasksCreated>
          <Completed>
            Concluídas: <span>2 de 5</span>
          </Completed>
        </CountContainer>
      </ToDoContainer>
    </>
  );
};
