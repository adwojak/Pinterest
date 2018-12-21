import React from 'react';
import ImageModal from './ImageModal';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { spans: 0, show: 'hide' };
        this.imageRef = React.createRef();
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.setState({ show: 'hide' });
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    }

    onClickEvent = () => {
        this.setState({ show:'show' });
    }

    render() {
        const {description, urls} = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <ImageModal image={this.props.image} show={this.state.show} handler={this.closeModal} />
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                    onClick={this.onClickEvent}
                />
            </div>
        );
    }
}

export default ImageCard;