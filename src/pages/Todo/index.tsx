import { Header } from "../../components/Header";
import { NewToDo } from "../../components/NewToDo";
import clipboard from "../../assets/clipboard.svg";

import {
  ClipboardImg,
  Completed,
  CountContainer,
  DeleteTask,
  ListItem,
  NoTasks,
  TasksCreated,
  ToDoContainer,
} from "./styles";
import { Check, Trash } from "phosphor-react";

export const Todo = () => {
  const value = true;
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

        {value ? (
          <ListItem>
            <Check size={20} />
            <span>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </span>

            <DeleteTask>
              <Trash size={20} />
            </DeleteTask>
          </ListItem>
        ) : (
          <NoTasks>
            <ClipboardImg src={clipboard} alt="" />
            <strong> Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </NoTasks>
        )}
      </ToDoContainer>
    </>
  );
};
