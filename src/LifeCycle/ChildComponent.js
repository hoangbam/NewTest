import React, { Component } from "react";

export default class ChildComponent extends Component {
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps_CHILD");
    return null;
  }

  render() {
    console.log("RenderChild");
    return (
      <div>
        <div className="card text-white bg-primary">
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("DIDMOUNT_CHILD");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}
