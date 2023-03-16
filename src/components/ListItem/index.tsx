import { useCallback, useMemo } from "react";
import clipboard from "../../assets/clipboard.svg";
import { Check, Trash } from "phosphor-react";
import {
  CheckButton,
  ClipboardImg,
  Completed,
  CountContainer,
  DeleteTask,
  Task,
  NoTasks,
  TasksCreated,
} from "./styles";

interface Tasks {
  id: string;
  checked: boolean;
  description: string;
}
interface ListItemProps {
  completeTask: (tasks: Tasks[], id: string) => void;
  deleteTask: (tasks: Tasks[], id: string) => void;
  tasks: Tasks[];
}

export const ListItem = ({
  tasks,
  completeTask,
  deleteTask,
}: ListItemProps) => {
  const taskCount = useMemo(() => {
    const task = tasks.filter((task) => task.checked);

    return tasks.length ? `${Number(task.length)} de ${tasks.length}` : 0;
  }, [tasks]);

  const handleCheckTask = useCallback((tasks: Tasks[], id: string) => {
    completeTask(tasks, id);
  }, []);

  const handleDelete = useCallback((tasks: Tasks[], id: string) => {
    deleteTask(tasks, id);
  }, []);

  return (
    <>
      <CountContainer>
        <TasksCreated>
          Tarefas Criadas: <span>{tasks.length}</span>
        </TasksCreated>
        <Completed>
          Concluídas: <span>{taskCount}</span>
        </Completed>
      </CountContainer>

      {tasks.length ? (
        tasks.map((task) => {
          return (
            <Task key={task.id} checked={task.checked}>
              <CheckButton
                checked={task.checked}
                onClick={() => handleCheckTask(tasks, task.id)}
              >
                <Check size={18} />
              </CheckButton>
              <span>{task.description}</span>
              <DeleteTask onClick={() => handleDelete(tasks, task.id)}>
                <Trash size={20} />
              </DeleteTask>
            </Task>
          );
        })
      ) : (
        <NoTasks>
          <ClipboardImg src={clipboard} alt="" />
          <strong> Você ainda não tem tarefas cadastradas</strong>
          Crie tarefas e organize seus itens a fazer
        </NoTasks>
      )}
    </>
  );
};
