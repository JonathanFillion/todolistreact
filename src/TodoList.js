import React from 'react';
import './TodoList.css';
const TodoList = ({tasks, deleteTask}) => {
	console.log(tasks)
	const taskList = tasks.length ? (tasks.map((task)=> {
		return (<div className="list-group-item" key={task.id}>
			<span>{task.content}</span>
			<div className="float-right">
				<button className="btn btn-danger" onClick={() => {deleteTask(task.id)}}>Terminer tâche</button>
			</div>
			</div>)
		})
	)
	: (<div className="list-group-item">Aucunne tâche existante</div>)
	
	return (
		<div className="col-12">
		<ul className="list-group">
			{taskList} 
		</ul>
		</div>
		)
}

export default TodoList;