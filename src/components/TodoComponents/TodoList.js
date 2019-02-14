import React from 'react';

function TodoList(props) {
    return (
        <ul>
            {props.todos.map(item => {
                return (
                    <li
                        key={item.id}
                        task={item.task}
                        id={item.id}
                    >{item.task}</li>
                )
            })}
        </ul>
    );
}
export default TodoList;
