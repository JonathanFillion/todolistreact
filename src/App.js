import React, {Component} from 'react';
import TodoList from'./TodoList';
import AddTask from './AddTask';
import Nav from './Nav'
import './App.css';
import today from './today.png'
import urgent from './urgent.png'
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
      <div className="App">
      <Nav/>
      <div className="container mt-8">
      
      <div className="row mt-3">
         <div className="col-6">
           <div className="card predefined-filter">
             <div className="card-body">
               <div><img src={today} height="50" width="50" alt="Today"/></div>
               <div className="font-weight-bold mt-2">Aujourd'hui</div>
              </div>
               <a href="#" class="stretched-link"></a>
           </div>
         </div>
         <div className="col-6">
           <div className="card predefined-filter">
             <div className="card-body">
               <div><img src={urgent} height="50" width="50" /></div>
               <div className="font-weight-bold mt-2">Importants</div>
             </div>
             <a href="#" class="stretched-link"></a>
           </div>
         </div>
       </div>

      <div className="row mt-3">
        <div className="col-12">
          <div class="input-group mb-2 mr-sm-2">
           <div class="input-group-prepend">
              <div class="input-group-text"><i class="fa fa-search"></i></div>
            </div>
            <input className="form-control form-control-lg" placeholder="Recherche" type="text"></input>
          </div>
        </div>
       </div>

       

      <div>
        <ModalAddTask className="button-add pull-right" addTask={this.addTask} buttonLabel={"Ajouter tâche"}/>
      </div>

{/*      <div className="row mt-4 ml-1">
        <h3>Toutes les tâches</h3>
      </div>

      <div className="row">
        <TodoList tasks={this.state.tasks} deleteTask={this.deleteTask} modifyTask={this.modifyTask} />
      </div>*/}

      <div className="card mt-3">
        <div className="card-header">
          <h3>Toutes les tâches</h3>
        </div>
        <div className="card-body">
          <TodoList tasks={this.state.tasks} deleteTask={this.deleteTask} modifyTask={this.modifyTask} />
        </div>
      </div>


      </div>
      </div>
      );
  }


}

export default App;
