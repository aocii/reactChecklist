import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import { v4 as uuidv4 } from 'uuid';
import About from './components/pages/About';

class App extends Component {

  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'take out',
        completed: false
      }, {
        id: uuidv4(),
        title: 'go in',
        completed: false
      }, {
        id: uuidv4(),
        title: 'Pop wheelie',
        completed: false
      }
    ]
  };

  markComplete_1 = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  };

  delTodo_1 = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(
        todo => todo.id !== id
      )]
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title, //: title, es6 ile birlikte bunu yazmama gerek kalmadı
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }


  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete_={this.markComplete_1}
                  delTodo_={this.delTodo_1}
                />
              </React.Fragment>
            )}></Route>
            <Route path="/about" component={About}></Route>
          </div>
        </div>
      </Router>
    );
  };
};
export default App;
