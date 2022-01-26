import styled, { ThemeProvider } from "styled-components";
import React, { Component } from "react";

export default class DemoThemes extends Component {
  render() {
    const configDarkTheme = {
      darkColor: "#000",
      blueColor: "#FFF",
    };
    const configLightTheme = {
      darkColor: "6633FF",
      blueColor: "blue",
    };

    const Divstyle = styled.div`
      color: ${(props) => props.theme.blueColor};
      padding: 20%;
      background-color: ${(props) => props.theme.darkColor};
    `;

    return (
      <ThemeProvider theme={configDarkTheme}>
        <Divstyle>123</Divstyle>
        <select onChange={this.setTheme}>
          <option>Dark Theme</option>
          <option>Light Theme</option>
        </select>
      </ThemeProvider>
    );
  }
}
