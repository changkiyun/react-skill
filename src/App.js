import { Fragment } from "react";
import "./App.css";
import MyComponent from "./MyComponent";

import React from "react";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPracticeFunc from "./EventPracticeFunc";

const App = () => {
   return (
      <Fragment>
         <MyComponent name="React">리액트</MyComponent>
         <Counter></Counter>
         <Say></Say>
         <EventPractice></EventPractice>
         <EventPracticeFunc/>
      </Fragment>
   );
};

export default App;
