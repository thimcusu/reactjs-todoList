import React, { Component } from 'react';
import './todo-list.css';
const TodoList = () =>
    <div className="wrapper-input">
        <img src ="/angle-arrow-down.svg" alt="icon-input-down"/>
        <input className="todo-list" type="text" placeholder="What have to be done?"></input>
    </div>
export default TodoList;