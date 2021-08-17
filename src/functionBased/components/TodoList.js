import React from "react"
import TodoItem from "./TodoItem";
import propTypes from 'prop-types'

const TodoList = props => {
        return (
            <ul>
            {props.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} handleChangeProps={props.handleChangeProps} setUpdate={props.setUpdate}
            deleteTodoProps={props.deleteTodoProps}/>
            ))}
          </ul>
        );
}
TodoList.propTypes = {
todos: propTypes.array,
handleChangeProps: propTypes.func,
deleteTodoProps: propTypes.func,
setUpdate: propTypes.func
};

export default TodoList