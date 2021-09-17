import React from 'react';

interface IProps {
  todos: string[];
}

const Todo: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.todos.map((t, index) => (
        <li key={index}>t</li>
      ))}
    </ul>
  );
};

export default Todo;
