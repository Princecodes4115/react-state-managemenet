/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-undef */

/* eslint-disable no-unused-vars */
import { useState, useReducer } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete_todo"
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
          return todos.map(todo => {
              if (todo.id === action.payload.id) {
                  return { ...todo, isCompleted: !todo.isCompleted }
              }
              return todo
          })
      case ACTIONS.DELETE_TODO:
          return todos.filter(todo => todo.id !== action.payload.id) 
  }
};

const newTodo = (name) => {
  return { id: Date.now(), name: name, isCompleted: false };
};

const AnotherReducer = () => {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  function handleSubmit(e) {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
    e.preventDefault();
  }

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todos.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
};

export default AnotherReducer;
