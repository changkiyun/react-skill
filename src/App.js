import { Component, Fragment } from "react";
import "./App.css";
import MyComponent from "./MyComponent";

import React from "react";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPracticeFunc from "./EventPracticeFunc";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import IterationSample2 from "./IterationSample2";

class App extends Component {
   render() {
      return (
         <Fragment>
            <MyComponent name="React" ref={(ref) => (this.myComponent = ref)}>
               리액트
            </MyComponent>
            <br />
            <input type="text" name="appToMyComponent"></input>
            <Counter></Counter>
            <Say></Say>
            <EventPractice></EventPractice>
            <EventPracticeFunc />
            <ValidationSample />
            <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
            <button onClick={() => this.scrollBox.scrollToBottom()}>
               맨 밑으로
            </button>
            <IterationSample />
            <IterationSample2 />
         </Fragment>
      );
   }
}

export default App;
