import React from 'react';
import Modal from 'react-modal';
import './Footer.css';

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

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            modalOpen: true
        });
    }

    closeModal() {
        this.setState({
            modalOpen: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal" ariaHideApp={false}>
                    <h3>
                        How to Play
                    </h3>
                    <p>
                        Your ultimate goal should be conquering the entire game of throne universe. You will start with a certain amount of gold, men, reputation, and land—manage your resource well and conquer!
                    </p>
                    <ul>
                        <li>Gold: invest in cities to increase income, expand army, make alliance, offer peace, recruiting unemployed characters, steal character from other houses.</li>
                        <li>Men: invade other houses, bring reinforcements to allies during war.</li>
                        <li>Reputation: lower costs of army expansion, stealing characters, making alliance, and recruiting characters.</li>
                        <li>Land: every city provides income at the end of each turn, the more cities you have, the more income. By conquering all the land, you win the game.</li>
                    </ul>
                    <p>
                        Have fun!
                    </p>
                    <button onClick={this.closeModal} className="btn btn-info">close</button>
                </Modal>
                <footer onClick={this.openModal}>
                    <center><b>How to Play</b></center>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;