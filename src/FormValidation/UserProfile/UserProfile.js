import React, { Component } from "react";

import Swal from "sweetalert2";
export default class UserProfile extends Component {
  state = {
    values: {
      firstName: "",
      userName: "",
      lastName: "",
      Email: "",
      passWord: "",
      passWordConfirm: "",
    },
    error: {
      firstName: "",
      userName: "",
      lastName: "",
      Email: "",
      passWord: "",
      passWordConfirm: "",
    },
  };
  handleChangeValue = (event) => {
    // console.log(name, value);
    let { name, value, type } = event.target;
    console.log(name, value);
    let newValue = { ...this.state.values, [name]: value };
    let newErr = { ...this.state.error };

    //KT Rong
    if (value.trim() === "") {
      newErr[name] = name + "is required";
    } else {
      newErr[name] = "";
    }
    //KT EMAIL
    if (type === "email") {
      const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if (re.test(value)) {
        newErr[name] = name + "is invalid!";
      }
    }
    //KT password
    if (name === "passWordConfirm") {
      if (value !== newValue["passWord"]) {
        newErr[name] = name + "ko hop le";
      }
    }
    this.setState({
      values: newValue,
      error: newErr,
    });
  };

  Submit = (event) => {
    //cấm trình duyệt submit reload lại trang
    event.preventDefault();
    //xet DK SUBMIT
    let { values, error } = this.state;
    // duyệt tất cả các thuộc tính trong Object dùng for in
    let profileContent = "";
    let profileErr = "";
    let valid = true;
    for (let key in values) {
      if (values[key] === "") {
        valid = false;
      }
      profileContent += `
      <div className="text text-center"><p><b>${key} </b> ${values[key]}</p></div>
      `;
    }
    for (let key in error) {
      if (error[key] !== "") {
        profileErr += `<div>
      <p> <b>${key}</b> is invalid!!</p>
      </div>`;
        valid = false;
      }
    }
    if (!valid) {
      Swal.fire({
        title: "Error!",
        html: profileErr,
        icon: "error",
        confirmButtonText: "Oh No",
      });
      return;
    }

    Swal.fire({
      title: "Success!",
      html: profileContent,
      icon: "success",
      confirmButtonText: "Cool",
    });
  };

  render() {
    return (
      <div>
        <form className="w3-container" onSubmit={this.Submit}>
          <div className="container">
            <h3 className="text-center">User Profile</h3>
            <div className="row p-4 ">
              <div className="col-6">
                <div>
                  <label>First Name</label>
                  <input
                    value={this.state.values.firstName}
                    className="w3-input"
                    type="text"
                    required
                    name="firstName"
                    onChange={this.handleChangeValue}
                  />
                  <span>{this.state.error.firstName}</span>
                  {/* //   console.log(event.target.value);
                      //   console.log(event.target.name); */}
                </div>
              </div>
              <div className="col-6">
                <div>
                  <label>Last Name</label>
                  <input
                    value={this.state.values.lastName}
                    className="w3-input"
                    type="text"
                    name="lastName"
                    onChange={this.handleChangeValue}
                  />
                  <span>{this.state.error.lastName}</span>
                </div>
              </div>
            </div>
            <div className="row mt-5 p-4">
              <div className="col-12">
                <div>
                  <label>user Name</label>
                  <input
                    value={this.state.values.userName}
                    className="w3-input"
                    type="text"
                    name="userName"
                    onChange={this.handleChangeValue}
                  />
                  <span>{this.state.error.userName}</span>
                </div>
              </div>
            </div>
            <div className="row mt-5 p-4">
              <div className="col-12">
                <div>
                  <label>Email</label>
                  <input
                    value={this.state.values.Email}
                    className="w3-input"
                    name="Email"
                    type="email"
                    onChange={this.handleChangeValue}
                  />
                  <span>{this.state.error.Email}</span>
                </div>
              </div>
            </div>
            <div className="row p-4 ">
              <div className="col-6">
                <div>
                  <label>Pass Word</label>
                  <input
                    value={this.state.values.passWord}
                    className="w3-input"
                    type="text"
                    name="passWord"
                    type="password"
                    onChange={this.handleChangeValue}
                  />{" "}
                  <span>{this.state.error.passWord}</span>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <label>Pass Word Confirm</label>
                  <input
                    value={this.state.values.passWordConfirm}
                    className="w3-input"
                    type="text"
                    name="passWordConfirm"
                    type="password"
                    onChange={this.handleChangeValue}
                  />{" "}
                  <span>{this.state.error.passWordConfirm}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            {" "}
            <button className="btn btn-primary " style={{ width: "70%" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
