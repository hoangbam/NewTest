import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class extends Component {
  //dau tien la phuong thuc khoi tao Contrucstor
  constructor(props) {
    super(props);
    this.state = { number: 1 };
    console.log("constructor");
  }

  // duoc goi khi su dung tren DOM
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  // duoc goi khi setstate hoac props
  shouldComponentUpdate(newProps, currentState) {
    //return True khi gọi đc và chạy tiếp LifeCycle, return false thi dung lai
    return true;
  }
  render() {
    console.log("renderParent");
    return (
      <div>
        <h1>Parren COmponent</h1>
        <span>Number: {this.state.number}</span>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>

        {this.state.number === 1 ? <ChildComponent /> : ""}
      </div>
    );
  }
  //Được gọi sau render và gọi 1 lần duy nhất(Trạng thái Mounting)
  componentDidMount() {
    console.log("componentDidMount");
  }
  //gọi 1 lần sau render các state mới và props(trạng thái updating)
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
}
