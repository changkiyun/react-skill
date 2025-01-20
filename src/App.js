import { Fragment } from "react";
import "./App.css";
import MyComponent from "./MyComponent";

import React from "react";
import Counter from "./Counter";
import Say from "./Say";

const App = () => {
   return (
      <Fragment>
         <MyComponent name="React">리액트</MyComponent>
         <Counter></Counter>
         <Say></Say>
      </Fragment>
   );
};

export default App;
