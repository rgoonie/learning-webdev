import React from "react";
import ToDoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  render() {
    return this.props.todos.map(todo => (
      <ToDoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

//Prop Types
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
