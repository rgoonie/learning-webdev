import React from "react";
import ToDoItem from './TodoItem'

class Todos extends React.Component {
  render() {
    return this.props.todos.map((todo) => (
        <ToDoItem todo={todo}/>
    ));
  }
}
export default Todos;
