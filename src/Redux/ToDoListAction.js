import { add_task } from "./types/ToDoListTypes";
import { check_task } from "./types/ToDoListTypes";

export const addTaskAction = (newTask) => ({
  type: add_task,
  newTask,
});
