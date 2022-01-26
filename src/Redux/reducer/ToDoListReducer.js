import { ToDoListDarkTheme } from "../../Theme/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../../Theme/ToDoListLightTheme";
import { add_task } from "../types/ToDoListTypes";

const initialState = {
  themeToDoList: ToDoListLightTheme,
  taskList: [
    { id: "task-1", taskName: "task1", done: true },
    { id: "task-2", taskName: "task2", done: false },

    { id: "task-3", taskName: "task3", done: true },
    { id: "task-4", taskName: "task4", done: false },
  ],
  taskEdit: { id: "task-1", taskName: "task-1", done: false },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      //kiem tra Rong
      console.log("ToDo", action.newTask);
      if (action.newTask.taskName.trim() === "") {
        alert("name is required");
        return { ...state };
      }
      //Kiem tra ton tai
      let newTaskList = [...state.taskList];
      let index = newTaskList.findIndex(
        (taskName1) => taskName1.taskName === action.newTask.taskName
      );
      if (index !== -1) {
        alert("task is exist");
        return { ...state };
      }
      state.taskList.push(action.newTask);
      //xu li xong thì gán lại
      state.taskList = newTaskList;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
