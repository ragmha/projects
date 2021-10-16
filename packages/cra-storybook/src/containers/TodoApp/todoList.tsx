import React, { useState } from 'react';
import { withTodo } from './todoStore';

const TodoListPure = ({
  addTodoMutation,
  clearTodoMutation,
  currentTodos,
  loading,
  error,
  person,
}: any) => {
  const [todoText, setTodoText] = useState('');

  return (
    <>
      <h1>Todos</h1>
      {currentTodos.map((todo: any, index: any) => (
        <div
          key={index}
          style={{
            fontSize: '24px',
            marginBottom: '16px',
            fontStyle: 'oblique',
            fontFamily: 'sans-serif',
            color: 'lightskyblue',
          }}
        >
          {todo}
        </div>
      ))}
      <input
        type="text"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
        placeholder="Pick up milk, Grab, cheese, etc"
        style={{
          border: '1px solid',
          width: '50%',
          height: '44px',
          lineHeight: '44px',
          fontSize: '16px',
          textAlign: 'center',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '60%',
          margin: '0 auto',
          justifyContent: 'space-around',
          marginTop: '16px',
        }}
      >
        <input
          type="submit"
          value="Add"
          onClick={e => {
            addTodoMutation({
              variables: {
                item: todoText,
              },
            });
            setTodoText('');
          }}
          style={{
            backgroundColor: '#4CAF50',
            border: 'none',
            color: 'white',
            padding: '15px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '20px',
          }}
        />
        <input
          type="submit"
          value="Clear All"
          onClick={e => clearTodoMutation()}
          style={{
            backgroundColor: 'red',
            border: 'none',
            color: 'white',
            padding: '15px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '20px',
          }}
        />
      </div>
    </>
  );
};

const TodoList = withTodo(TodoListPure);

export default TodoList;
