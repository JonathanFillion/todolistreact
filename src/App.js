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
    {id:1, title:"Titre 1", description:"Description 1"},
    {id:2, title:"Titre 2", description:"Description 2"}
    ]
  }

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id
    })

    this.setState({tasks:tasks})
  }

  showAddTask = (event) => {
    console.log(this.state.show)
    this.setState({show:!this.state.show})
  }

  addTask = (task) => {
    task.id = Math.random()
    let tasks = [...this.state.tasks, task]
    this.setState({tasks:tasks})
  }

  modifyTask = (task) => {
    const index = this.state.tasks.findIndex((e) => {
      return e.id === task.id
    })
    const newTask = {id:task.id,title:task.title,description:task.description}
    let tasks = this.state.tasks
    tasks[index] = newTask;
    this.setState({tasks})
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
      <TodoList tasks={this.state.tasks} deleteTask={this.deleteTask} modifyTask={this.modifyTask} />
      </div>
      <div className="row">
      </div>
      </div>
      );
  }


}

export default App;
