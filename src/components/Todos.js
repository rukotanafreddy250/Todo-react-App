import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    console.log(this.props.todos);
    return this.props.todos.map((todo) => (
      <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ))
  }
}

// //ptrosTypes
Todos.prototypes = {
  todos : PropTypes.array.isRequired,
  markComplete : PropTypes.array.func.isRequired,
  delTodo : PropTypes.array.func.isRequired 
}
export default Todos;