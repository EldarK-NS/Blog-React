import React from 'react';
import './SocialModal.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'


class SocialModal extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className={this.props.open ? 'modal show' : 'modal'} >
                <div className="modal__content">
                    <button className="modal__close" type="button" onClick={this.props.closeModal}>
                        <img src="./images/icons/cancel.svg" alt="Закрыть" />
                    </button>
                    <Router>
                        <ul className="social">
                            <li className="social__item"> <Link className="social__link" to="/"> <img src="./images/share/facebook.svg"
                                alt="" /></Link></li>

                            <li className="social__item"> <Link className="social__link" to="/"> <img src="./images/share/twitter.svg"
                                alt="" /></Link></li>

                            <li className="social__item"> <Link className="social__link" to="/"> <img src="./images/share/vk.svg"
                                alt="" /></Link></li>
                            <li className="social__item"> <Link className="social__link" to="/"> <img src="./images/share/copy.svg"
                                alt="" /></Link></li>
                        </ul>
                    </Router>

                </div>
            </div>
        )
    }

}

export default SocialModal;
