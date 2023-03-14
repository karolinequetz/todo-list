import { PlusCircle } from "phosphor-react";
import { ToDoFormContainer } from "./styles";

export const NewToDo = () => {
  return (
    <ToDoFormContainer>
      <input placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <PlusCircle size={24} />
      </button>
    </ToDoFormContainer>
  );
};
