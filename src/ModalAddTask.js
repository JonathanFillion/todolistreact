import React, {Component, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ModalAddTask extends Component {
 
  state = {
    modal: false,
    title: "",
    description: ""
  }


  toggle = () => {
    this.setState({modal: !this.state.modal})
  };
  
  addTask = () => {
    this.props.addTask({title:this.state.title, description:this.state.description})
    this.toggle()
    this.setState({title: "", description: ""})
  };

  handleInputChange = (event) => {
    const target = event.target
    this.setState({[target.name]: target.value})
  };

render() {
  return (
    <div className="row">
      <div className="col-12"><Button className="ml-3 mt-2 float-right" color="primary" onClick={this.toggle}><i class="fa fa-plus"></i> {this.props.buttonLabel}</Button></div>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Ajouter une tâche</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="taskTitle"></Label>
              <Input type="text" name="title" id="taskTitle" onChange={this.handleInputChange} value={this.state.title} placeholder="Titre de la tâche" />
              <Label for="taskDesc"></Label>
              <Input type="textarea" name="description" id="taskDesc" onChange={this.handleInputChange} value={this.state.description} placeholder="Description de la tâche"></Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary"  onClick={this.addTask}>Sauvegarder</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Annuler</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

}

export default ModalAddTask;