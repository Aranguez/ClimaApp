import React from 'react';
import  { Modal, Button, Grid, Row, Col }  from 'react-bootstrap';

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
        <div>
            <Modal
                show={this.state.show}
                onHide={this.closeModal}
                bsSize="small"
                aria-labelledby="contained-modal-title-sm"
                className={`modal ${!this.state.show ? 'animated fadeOut fast' : 'animated fadeIn fast' }`}
            >
                <Modal.Body>
                    <input type="text" className="input" placeholder="New city" id="city"/>
                    <div className="btns">
                    <Grid>
                        <Row>
                            <Col xs={6} className="text-center">
                                <Button className="btn cancel" onClick={this.props.closeModal}>Cancel</Button>
                            </Col>
                            <Col xs={6} className="text-center">
                                <Button className="btn accept" onClick={this.props.addCity}>Add</Button>
                            </Col>
                        </Row>
                    </Grid>
                    </div>
                </Modal.Body>
                <div className="backModal"></div>
            </Modal>
            
        </div>
      );
    }
}

export default AddCityModal