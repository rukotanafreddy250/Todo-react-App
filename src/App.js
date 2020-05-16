import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Addtodolist from './components/Addtodolist';
// import uuid from 'uuid';
import axios from 'axios';

class App extends Component { 
  state = {
    todos: []
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((res) => {
        console.log(res.data);
        this.setState({ todos: res.data })
      })
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
    console.log(id);
  }
  
  addTodo= (title) =>{
    // const newTodo = {
    //   id: 4,
    //   title:title,
    //   completed:false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title:title,
      completed:false
    })
    .then(res => {
      this.setState({ todos: [...this.state.todos, res.data]});
    }).catch(err => console.log('eror'+err))
    // this.setState({ todos: [...this.state.todos, newTodo]});
    console.log(title);
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    })
  }
  
  render() { 
    console.log(this.state.todos);
    return (
      <Router>
        <div className='App'>
          <div className="container">
            <Header />
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <Addtodolist addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )}/>
            <Route path='/About' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;