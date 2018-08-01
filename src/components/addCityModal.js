import React from 'react';
import  { Modal, Button }  from 'react-bootstrap';

class AddCityModal extends React.Component {

    constructor(props){
        super();
        this.state = {
            name: 'modal',
            show: false
        }
    }

    componentWillReceiveProps({show}){
        this.setState({
            show,
        })
    }

    closeModal = () =>{
        this.setState({ show: false });
    }
    
    render() {
      return (
        <Modal
            show={this.state.show}
            onHide={this.closeModal}
            bsSize="small"
            aria-labelledby="contained-modal-title-sm"
            className={`modal ${!this.state.show ? 'animated fadeOut fast' : 'animated fadeIn fast' }`}
        >
            <Modal.Body>
                <input type="text" className="input" placeholder="Agregar una ciudad" id="city"/>
                <Button className="btn cancel" onClick={this.props.closeModal}>Cancelar</Button>
                <Button className="btn accept" onClick={this.props.addCity}>Agregar</Button>
            </Modal.Body>
        </Modal>
      );
    }
}

export default AddCityModal