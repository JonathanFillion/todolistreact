import React, {Component} from 'react';
import TodoList from'./TodoList';
import AddTask from './AddTask';
import Nav from './Nav'
import './App.css';
import today from './today.png'
import urgent from './urgent.png'
import ModalAddTask from "./ModalAddTask"
import {NotificationContainer, NotificationManager} from 'react-notifications';


class App extends Component {

  state = {
    show:false,
    tasks: [
    {id:1, title:"Titre 1", description:"Description 1"},
    {id:2, title:"Titre 2", description:"Description 2"},
    {id:3, title:"Titre 3", description:"Description 3"}
    ]
  }

   createNotification = (type) => {
    return () => {
      switch (type) {
        case 'completed':
          NotificationManager.success('Tâche complétée');
          break;
        case 'modified':
          NotificationManager.info('Tâche modifiée');
          break;
        case 'created':
          NotificationManager.info('Tâche créée');
          break;
        case 'deleted':
          NotificationManager.error('Tâche supprimée')
          break;
      }
    };
  }

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id
    })

    this.setState({tasks:tasks})
  }
  completeTask = (id) => {
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
      


      <div className="card mt-3">
      <div className="card-header"><h3>Filtres</h3></div>
      <div className="card-body">
      <div className="row mt-1">
         <div className="col-6">
           <div className="card predefined-filter">
             <div className="card-body">
               <div><img src={today} height="50" width="50" alt="Today"/></div>
               <div className="font-weight-bold mt-2">Aujourd'hui</div>
              </div>
               <a href="#" className="stretched-link"></a>
           </div>
         </div>
         <div className="col-6">
           <div className="card predefined-filter">
             <div className="card-body">
               <div><img src={urgent} height="50" width="50" /></div>
               <div className="font-weight-bold mt-2">Importants</div>
             </div>
             <a href="#" className="stretched-link"></a>
           </div>
         </div>
       </div>

      <div className="row mt-3">
        <div className="col-12">
          <div className="input-group mb-2 mr-sm-2">
           <div className="input-group-prepend">
              <div className="input-group-text"><i className="fa fa-search"></i></div>
            </div>
            <input className="form-control form-control-lg" placeholder="Recherche" type="text"></input>
          </div>
        </div>
       </div>

       </div>
      </div>


        <div>
          
        </div>

{/*      <div className="row mt-4 ml-1">
        <h3>Toutes les tâches</h3>
      </div>

      <div className="row">
        <TodoList tasks={this.state.tasks} deleteTask={this.deleteTask} modifyTask={this.modifyTask} />
      </div>*/}

      <div className="card mt-3">
        <div className="card-header">
          <div className="row">
          <div className="col-6">
            <h3>Toutes les tâches</h3>
          </div>
          <div className="col-6">
             <ModalAddTask className="button-add pull-right" addTask={this.addTask} addTaskNotify={this.createNotification('created')} buttonLabel={"Ajouter tâche"}/>
          </div>
        </div>
        </div>
        <div className="card-body">
          <TodoList tasks={this.state.tasks} deleteTask={this.deleteTask} deleteTaskNotify={this.createNotification('deleted')} modifyTask={this.modifyTask} modifyTaskNotify={this.createNotification('modified')} completeTask={this.completeTask} completeTaskNotify={this.createNotification('completed')} />
        </div>
      </div>


      </div>
      <NotificationContainer/>
      </div>
      );
  }


}

export default App;
