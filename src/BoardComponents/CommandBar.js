import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CommandBar.css';


class CommandBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    gainRepBtn = () => {
        console.log('gain reputation')
    }

    aquireGoldBtn = () => {
        console.log('aquire gold')
    }

    hireMenBtn = () => {
        console.log('hire men')
    }


    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <button onClick={this.gainRepBtn} class="btn btn">Gain Reputation <FontAwesomeIcon icon="envelope" /></button>
                    <button onClick={this.aquireGoldBtn} class="btn btn">Aquire Gold <FontAwesomeIcon icon="envelope" /></button>
                    <button onClick={this.hireMenBtn} class="btn btn">Hire Men <FontAwesomeIcon icon="envelope" /></button>
                </div>
            </React.Fragment>
        )
    }
}

export default CommandBar;