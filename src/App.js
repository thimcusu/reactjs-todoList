import React, { Component } from 'react';
// import axios from 'axios';
import TodoItem from './components/TodoItem';
import TodoList from './components/todo-list';
import './App.css';
import { getStorage, setStorage } from './utils/localStorage';

// const BASE_URL = "http://localhost:8000/todos";
let items = JSON.parse(getStorage('todoListItem')); 
if(!items) items=[];
// let itemData = [];
class App extends Component {
  constructor() {
    super();
    console.log(items);
    this.state = {
      newItem :"",
      items : items
    }
    console.log(this.state.items);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  async componentDidMount() {
    
    // const rawResult = await axios.get(BASE_URL);
    // this.itemsData = await JSON.parse(rawResult.data);
    // console.log(this.itemsData);
  }
  onItemClicked(item){
    return (event) => {
      const isCompleted = item.isCompleted;
      const {items} = this.state;
      const index = items.indexOf(item);
      let currentItems = [
          ...items.slice(0,index),
          {
            ...item,
            isCompleted : !isCompleted
          },
          ...items.slice(index+1)
      ];
      this.setState({items:currentItems})
      // console.log(item);
      setStorage('todoListItem',JSON.stringify(currentItems));
    }
  }
  onChange(event){
    this.setState({newItem:event.target.value});
  }
  onKeyDown(event){
    let text = event.target.value;
    if(event.key === "Enter"){ // Enter key
      event.preventDefault();
      text = text.trim();
      if(!text){
        return;
      }
      let items = [{title:text, isCompleted:false},...this.state.items]
      this.setState({
        newItem : "",
        items
      });
      setStorage('todoListItem',JSON.stringify(items));
    }
  }
  render(){
    const {items, newItem} = this.state;
    return(
      <div className="todoApp">
        <h1>todos</h1>
        <TodoList 
          onKeyDown={this.onKeyDown} 
          value={newItem}
          onChange={this.onChange}
        />
        <div className="wrapper">
          {items.map((item,index)=>
          <TodoItem key={index+item.title}
            done={item.isCompleted}
            item={item}
            onClick={this.onItemClicked(item)}/>
          )}
        </div>
        <div className="footer">{items.length} Items left</div>
      </div>
    )
  }
}

export default App;
