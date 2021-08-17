import React from "react"
import TodoItem from "./TodoItem";
import propTypes from 'prop-types'

class TodoList extends React.Component { 

       render() {
        return (
            <ul>
            {this.props.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} setUpdate={this.props.setUpdate}
            deleteTodoProps={this.props.deleteTodoProps}/>
            ))}
          </ul>
        );
      }
}
TodoList.propTypes = {
todos: propTypes.array,
handleChangeProps: propTypes.func,
deleteTodoProps: propTypes.func,
setUpdate: propTypes.func
};

export default TodoList