import React from 'react';

const TodoItem = (props) =>{   
    const { item, done, onClick} = props;
    return(
        <div className="wrapper-item">
            {!done?<input onClick={onClick} className="toggle" type="checkbox"/>:
            <input onClick={onClick} className="toggle" type="checkbox" defaultChecked />}
            <div className="todo-item">{item.title}</div>
        </div>
    );
}
export default TodoItem;