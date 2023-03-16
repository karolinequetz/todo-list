import { Header } from "../../components/Header";
import { NewToDo } from "../../components/NewToDo";

import { ToDoContainer } from "./styles";

export const Todo = () => {
  const value = true;
  return (
    <>
      <Header />
      <ToDoContainer>
        <NewToDo />
      </ToDoContainer>
    </>
  );
};
