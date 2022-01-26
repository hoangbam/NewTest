import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { ToDoListDarkTheme } from "../Theme/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../Theme/ToDoListLightTheme";
import { Container } from "./Container/Container";
import { Dropdown } from "./Container/Dropdown";
import { Heading1, Heading3 } from "./Container/Heading";
import { Label, Input, TextField } from "./Container/TextField";
import { Button } from "./Container/Button";
import { Table, Tbody, Thead, Tr, Th, Td } from "./Container/Table";
import { connect } from "react-redux";
import { addTaskAction } from "../Redux/ToDoListAction";
class ToDoList extends Component {
  state = {
    taskName: "",
  };

  renderToDo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th> {task.taskName}</Th>
            <Th className="text-right">
              <Button className="ml-1">
                <i className="fa fa-edit"></i>
              </Button>
              <Button className="ml-1">
                <i className="fa fa-check"></i>
              </Button>
              <Button className="ml-1">
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  renderTaskCompleted = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th> {task.taskName}</Th>
            <Th className="text-right">
              <Button className="ml-1">
                <i className="fa fa-check"></i>
              </Button>
            </Th>
          </Tr>
        );
        console.log(task.taskName);
      });
  };

  handlechange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  renderTheme=()=>{
    
  }
  render() {
    return (
      <ThemeProvider
        theme={this.props.themeToDoList}
        className="text text-center"
      >
        <div>
          <Container className="w-50">
            <Dropdown>
              {this.renderTheme()}
            </Dropdown>
            <Heading1>To Do List</Heading1>
            <TextField
              name="taskName"
              onChange={this.handlechange}
              label="Task Name"
            ></TextField>
            <Button
              onClick={() => {
                //lấy thông tin từ input
                let { taskName } = this.state;
                //tạo ra 1 object
                let newTask = {
                  id: Date.now(),
                  taskName: taskName,
                  done: false,
                };
                // đưa task object lên redux để thay đổi thong qua dispatch
                this.props.dispatch(addTaskAction(newTask));
              }}
            >
              <i className="fa fa-plus"></i>Add Task
            </Button>
            <Button>
              <i className="fa fa-upload"></i>Update Task
            </Button>
            <Heading3>Task To Do</Heading3>
            <Table>
              <Thead>{this.renderToDo()}</Thead>
            </Table>
            <Heading3>Task Completed</Heading3>
            <Table>
              <Thead>{this.renderTaskCompleted()}</Thead>
            </Table>
          </Container>
        </div>
      </ThemeProvider>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    themeToDoList: state.ToDoListReducer.themeToDoList,
    taskList: state.ToDoListReducer.taskList,
  };
};

export default connect(mapStatetoProps)(ToDoList);
