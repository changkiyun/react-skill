import React from 'react';
import './TodoTemplate.scss'

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리 관리리리리</div>
      <div className="content">{children}</div>
      <div></div>
      <div>TEST</div>
      <div>TEST</div>
    </div>
  );
};

export default TodoTemplate;
