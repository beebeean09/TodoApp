import React from 'react';
import GifContainer from './gif_container';
import TodoListContainer from './todo/todo_list_container';

const Main = ({ children }) => (
  <div id='main'>
    <h1>Amazing Todo List</h1>
    <GifContainer />
    <TodoListContainer />
    { children }
  </div>
);

export default Main;
