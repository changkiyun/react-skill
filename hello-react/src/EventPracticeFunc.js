import React, { useState } from "react";

const EventPracticeFunc = () => {
   const [username, setUsername] = useState("");
   const [message, setMessage] = useState("");

   const onChangeUsername = (e) => {
      setUsername(e.target.value);
   };

   const onChangeMessage = (e) => {
      setMessage(e.target.value);
   };

   const onClick = () => {
      alert(username + ": " + message);
      setUsername("");
      setMessage("");
   };

   const onKeyPress = e => {
    if (e.key === "Enter"){
        onClick();
    }
   }

   return (
      <div>
         <h2>이벤트 연습 (함수형 컴포넌트) </h2>
         <input
            type="text"
            name="username"
            placeholder="사용자명"
            value={username}
            onChange={onChangeUsername}
         ></input>
         <input
            type="text"
            name="message"
            placeholder="입력해주세요"
            value={message}
            onChange={onChangeMessage}
            onKeyPress={onKeyPress}
         ></input>
         <button onClick={onClick}>확인</button>
      </div>
   );
};

export default EventPracticeFunc;
