import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import Root from './frontend/components/root';
import { receiveTodo } from './frontend/actions/todo_actions';
import allTodos from './frontend/reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store = configureStore();
    window.store = store;
    ReactDOM.render(<Root store={ store } />, root);
});
