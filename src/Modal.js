import React, {Component} from "react";

import './Modal.css';

class Modal extends Component {

  onClose = (event) => {
    this.props.onClose && this.props.onClose(event);
  }



  render() {
    if(!this.props.show){
      return null;
    }
    return (
      <div>
        <div className="modal" id="addTaskModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="">{this.props.children}</div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={this.onClose}>Close</button>
            </div>

          </div>
          </div>
        </div>
      </div>
      );
  }
}
  

export default Modal