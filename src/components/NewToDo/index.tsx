import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";

import { ListItem } from "../ListItem";
import { ToDoFormContainer } from "./styles";

interface TaskProps {
  id: string;
  checked: boolean;
  description: string;
}

export const NewToDo = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [descriptionTask, setDescriptionTask] = useState("");

  const handleCreateNewTask = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      const newTask: TaskProps = {
        id: uuidv4(),
        checked: false,
        description: descriptionTask,
      };

      setTasks((state) => [...state, newTask]);
      setDescriptionTask("");
    },
    [tasks, descriptionTask]
  );

  const handleNewTaskChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.target.setCustomValidity("");

      setDescriptionTask(event.target.value);
    },
    [setDescriptionTask]
  );
  const completeTask = useCallback(
    (tasks: TaskProps[], id: string) => {
      const checkTask = tasks.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            checked: !task.checked,
          };
        }
        return task;
      });

      setTasks(checkTask);
    },
    [tasks]
  );

  const deleteTask = useCallback(
    (tasks: TaskProps[], id: string) => {
      const tasksDelete = tasks.filter((task) => task.id !== id);

      setTasks(tasksDelete);
    },
    [tasks]
  );

  return (
    <>
      <ToDoFormContainer onSubmit={handleCreateNewTask}>
        <input
          placeholder="Adicione uma nova tarefa"
          value={descriptionTask}
          name="descriptionTask"
          onChange={handleNewTaskChange}
        />
        <button type="submit">
          Criar <PlusCircle size={24} />
        </button>
      </ToDoFormContainer>
      <ListItem
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </>
  );
};
