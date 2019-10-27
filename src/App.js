import React, { Component } from 'react';
import axios from 'axios';
import TodoItem from './components/TodoItem';
import TodoList from './components/todo-list';
import './App.css';

const BASE_URL = "http://localhost:8000/todos";
let items = [] ;
let itemData = [];
class App extends Component {
  constructor() {
    super();
    // this.state ={
    //   items : [],
    //   onClick : this.onClick 
    // }
    items = [
    { 
      title : "Wake up",
      isCompleted : true
    },
    {
      title : "Read Book",
      isCompleted : false
    }, 
    {
      title : "Learn React",
      isCompleted : false
    }, 
    {
      title : "Go to Gym",
      isCompleted : false
    }
    ]
  }
  async componentDidMount() {
    const rawResult = await axios.get(BASE_URL);
    this.itemsData = await JSON.parse(rawResult.data);
    console.log(this.itemsData);
  }
  
  render(){
    return(
      <div className="todoApp">
        <h1>todos</h1>
        <TodoList />
        <div className="wrapper">
          <TodoItem items={items}/>
        </div>
        {console.log(items)}
        <div className="footer">{items.length} Items left</div>
      </div>
    )
  }
}

export default App;
