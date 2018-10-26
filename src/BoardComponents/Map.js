import React from 'react';
import './Map.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityModalOpen: false
        }
    }

    cityClick = event => {
        this.setState({
            cityModalOpen: true
        })
    }

    closeModal = event => {
        this.setState({
            cityModalOpen:false
        })
    }

    render() {
        return (
            <React.Fragment>
                <Modal isOpen={this.state.cityModalOpen} onRequestClose={this.closeModal} style={customStyles} contentLabel="City Modal" ariaHideApp={false}>
                    <h4>
                        Winterfell
                    </h4>
                    <hr/>
                    <ul>
                        <li>gold: 100</li>
                        <li>man: 100</li>
                    </ul>
                </Modal>
                <div className="col-md-9">
                    <FontAwesomeIcon className="map-icon" onClick={this.cityClick} icon="university"/>
                    <img id="map" src="https://vignette.wikia.nocookie.net/gameofthrones/images/7/7e/The_known_world_HBO.jpg/revision/latest/scale-to-width-down/1000?cb=20130507121142" />
                </div>
            </React.Fragment>
        )
    }
}

export default Map;