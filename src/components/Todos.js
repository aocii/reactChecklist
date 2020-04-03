import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'; // property types konponentler arası data akışı sağlamak için kullanıyoruz 





class Todos extends Component {
  


  render() {

    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo_Item = {todo} markComplete={this.props.markComplete_}
      delTodo = {this.props.delTodo_}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
