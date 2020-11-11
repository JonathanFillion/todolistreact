import React, {Component} from 'react';
import './TodoList.css';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import ModalModifyTask from './ModalModifyTask'



class TodoList extends Component {

	modifyTask = (task) => {
		this.props.modifyTask(task);
	}

	deleteTask = (id) => {
		console.log(id)
		this.props.deleteTask(id)
	}


	render() {
		return (
			<div className="col-12">
			<ListGroup>
			{this.props.tasks.map((task)=> {
				return (<ListGroupItem key={task.id}>
				<ListGroupItemHeading>{task.title}</ListGroupItemHeading>
				<ListGroupItemText>{task.description}</ListGroupItemText>
				<div className="float-right">
				<button className="btn btn-danger" onClick={() => {this.deleteTask(task.id)}}>Terminer tâche</button>
				</div>
				<div className="float-right">
					<ModalModifyTask modifyTask={this.modifyTask} task={task} buttonLabel={"Modifier tâche"}/>
				</div>
				</ListGroupItem>)})}
			</ListGroup>
			</div>
			)
	}
}
/*
const TodoList = ({tasks, deleteTask}) => {
	
	const taskList = tasks.length ? (tasks.map((task)=> {
		return (<ListGroupItem key={task.id}>
			<ListGroupItemHeading>{task.title}</ListGroupItemHeading>
			<ListGroupItemText>{task.description}</ListGroupItemText>
			<div className="float-right">
			<button className="btn btn-danger" onClick={() => {deleteTask(task.id)}}>Terminer tâche</button>
			</div>
			<div className="float-right">
			<ModalModifyTask task={task} buttonLabel={"Modifier tâche"}/>
			</div>
			</ListGroupItem>)
	})
	)
	: (<ListGroupItem>Aucunne tâche existante</ListGroupItem>)
	
	return (
		<div className="col-12">
		<ListGroup>
		{taskList} 
		</ListGroup>
		</div>
		)
}
*/
export default TodoList;