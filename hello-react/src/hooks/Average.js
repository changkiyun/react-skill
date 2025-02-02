import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers) => {
   console.log("getAverage");
   if (numbers.length === 0) return 0;
   const sum = numbers.reduce((a, b) => a + b);
   return sum / numbers.length;
};

const Average = () => {
   const [list, setList] = useState([]);
   const [number, setNumber] = useState("");
   const inputEl = useRef(null);

   const onChange = useCallback((e) => {
      console.log("onChange");
      setNumber(e.target.value);
   }, []);

   const onInsert = useCallback(
      (e) => {
         console.log("onInsert");
         const nextList = list.concat(parseInt(number));
         setList(nextList);
         setNumber("");
         inputEl.current.focus();
      },
      [number, list]
   );

   const avg = useMemo(() => getAverage(list), [list]);

   return (
      <div>
         <input value={number} onChange={onChange} ref={inputEl}></input>
         <button onClick={onInsert}>등록</button>
         <ul>
            {list.map((value, index) => (
               <li key={index}>{value}</li>
            ))}
         </ul>
         <div>
            <b>평균값: </b> {avg}
         </div>
      </div>
   );
};

export default Average;
