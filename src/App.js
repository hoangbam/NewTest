import "./App.css";
import UserProfile from "./FormValidation/UserProfile/UserProfile";
import LifeCycle from "./LifeCycle/LifeCycle";
import DemoThemes from "./Theme/DemoThemes";
import ToDoList from "./ToDoList/ToDoList";

function App() {
  return (
    <div>
      {" "}
      <ToDoList></ToDoList>
      <LifeCycle />
    </div>
  );
}

export default App;
