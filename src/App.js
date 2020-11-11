import React, {Component} from 'react';
import TodoList from'./TodoList';
import AddTask from './AddTask';
import Nav from './Nav'
import './App.css';

import ModalAddTask from "./ModalAddTask"

class App extends Component {

  state = {
    show:false,
    tasks: [
    {id:1, content: "buy some milk"},
    {id:2, content: "play mario kart"}
    ]
  }

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id
    })

    this.setState({tasks:tasks})
  }

  addTaskOld = (task) => {
    task.id = Math.random();
    let tasks = [...this.state.tasks, task];
    this.setState({tasks:tasks});
    //this.setState({tasks});
  }

  showAddTask = (event) => {
    console.log(this.state.show)
    this.setState({show:!this.state.show})
  }

  addTask = (data) => {
    console.log(data)
  }

  render() {
    return (
      <div className="App container">
      <Nav/>
      <div className="row">
      </div>
      <div className="row">
        <ModalAddTask addTask={this.addTask} buttonLabel={"Ajouter tâche"}/>
      </div>
      <div className="row">
      <TodoList tasks={this.state.tasks} deleteTask={this.deleteTask}/>
      </div>
      <div className="row">
      </div>
      </div>
      );
  }


}

export default App;
