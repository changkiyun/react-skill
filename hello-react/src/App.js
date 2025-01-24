import React, { useState } from "react";
import Counter from "./hooks/Counter";
import Info from "./hooks/Info";
import ReducerCounter from "./hooks/ReducerCounter";
import ReducerInfo from "./hooks/ReducerInfo";
import Average from "./hooks/Average";

const App = () => {
     const [visible, setVisible] = useState('')
   return (
      <div>
         <button
            onClick={() => {
               setVisible(!visible);
            }}
         >
            {visible ? "숨기기" : "보이기"}
         </button>
         <hr/>
         {visible && <Info />}
         <ReducerCounter/>
         <ReducerInfo/>
         <Average/>
      </div>
   );
};

export default App;
