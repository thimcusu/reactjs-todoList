import React from 'react';

const TodoItem = (props) =>{   
    const items = props.items;
    //console.log(items);
    return(
        <div>
            {items.map((item,index)=>
            <div className="wrapper-item">
                <input className="toggle" type="checkbox"/>
                <div className="todo-item">{item.title}</div>
            </div>
            )}
        </div>
    );
}
export default TodoItem;