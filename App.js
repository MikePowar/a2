import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import about from './components/pages/about';
import uuid from 'uuid';
import PopUp from './components/PopUp'


class App extends Component {
  state = {
    todos: [
    {
      id: uuid.v4(),
      title: 'Hi',
      completed: false,
      showPopUp: false 
    },
    {
      id: uuid.v4(),
      title: 'Hello',
      completed: false,
      showPopUp: false 
    },
    {
      id: uuid.v4(),
      title: 'Hey Ya',
      completed: false,
      showPopUp: false 
    }
    ]
  }

//toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //toggle popUp
  togglePopUp = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.showPopUp = !todo.showPopUp
      }
      return todo;
    }) });
  }

//Delete Todo
delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
}

//Open pop up
openPopUp = (id) => {
  this.setState({ todos: this.state.todos.map(todo => {
  this.state.togglePopUp ? 
  <PopUp  
          text='Click "Close Button" to hide popup'  
          closePopup={this.togglePopup.bind(this)}  
/>  
: null  
}
);}


  let popup = openPopUp(id);
  return <React.Fragment>
    {popup}
  </React.Fragment>;

//Add Todo 
addTodo = (title) => {
  const newTodo ={
    id: uuid.v4(),
    title,
    completed: false,
    showPopup: false
  }
  this.setState({ todos: [...this.state.todos, newTodo] })
}

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete ={this.markComplete}
                delTodo={this.delTodo} openPopUp={this.openPopUp} togglePopUp={this.togglePopUp}>
              </React.Fragment>
              )} />
            <Route path="/about" component={about} />

          </div>
        </div>
      </Router>
    );
  }
}
export default App;
