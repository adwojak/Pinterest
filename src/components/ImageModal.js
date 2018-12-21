import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class ImageModal extends React.Component {
    render() {
        const {urls, description } = this.props.image;

        return (
            <div className={`static-modal ${ this.props.show }`}>
                <Modal.Dialog>
                    <Modal.Header>
                        <Button className="pull-right close" onClick={this.props.handler}>X</Button>
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            alt={description}
                            src={urls.regular}
                        />
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        );
    }
}

export default ImageModal;