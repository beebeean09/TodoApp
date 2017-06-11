import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import Root from './frontend/components/root';
import { receiveTodo } from './frontend/actions/todo_actions';
import { receiveStep } from './frontend/actions/step_actions';
import allTodos from './frontend/reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store = configureStore();
    window.store = store;
    window.receiveStep = receiveStep;
    window.allTodos  = allTodos;
    ReactDOM.render(<Root store={ store } />, root);
});
