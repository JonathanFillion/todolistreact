import React, {Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import './ModalModifyTask.css';

class ModalModifyTask extends Component {
  state = {
    modal: false,
    id: this.props.task.id,
    title: this.props.task.title,
    description: this.props.task.description
  }

  toggle = () => {
    this.setState({modal: !this.state.modal})
  };
  
  modifyTask = () => {
    this.props.modifyTask({id:this.state.id, title:this.state.title, description:this.state.description})
    this.toggle()
    this.setState({title: "", description: ""})
  };

  handleInputChange = (event) => {
    const target = event.target
    this.setState({[target.name]: target.value})
  };

render() {

  return (
    <div>
      <Button color="primary" size="lg" className="mx-1" onClick={this.toggle}><i class="fa fa-edit larger-icons"></i></Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Modifier une tâche</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="taskTitleModify"></Label>
              <Input type="text" name="title" id="taskTitleModify" onChange={this.handleInputChange} value={this.state.title} placeholder="Titre de la tâche" />
              <Label for="taskDescModify"></Label>
              <Input type="textarea" name="description" id="taskDescModify" onChange={this.handleInputChange} value={this.state.description} placeholder="Description de la tâche"></Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.modifyTask}>Sauvegarder</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Annuler</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

}

export default ModalModifyTask;