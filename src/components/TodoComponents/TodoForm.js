import React from 'react';

function TodoForm(props) {
    return (
        <form id="todoForm" onSubmit={props.addTodo}>
            <input required name="task" value={props.value} onChange={props.onChange} placeholder="TASK" type="text" />
        </form>
    );
}
export default TodoForm;
