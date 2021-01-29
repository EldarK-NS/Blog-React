import React from 'react';
import './ContactModal.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class ContactModal extends React.Component {

    render() {
        const { open, onModalClose } = this.props
        return (
            <div className={open ? 'modal show' : 'modal'} id="contact-modal" onClick={onModalClose}>

                <div className="modal__content modal__content--contact " onClick={e => e.stopPropagation()}>
                    <button className="modal__close" type="button" onClick={onModalClose}>
                        <img src="./images/icons/cancel.svg" alt="Закрыть" />
                    </button>
                    <form action="/" className="form " method="POST">
                        <div className="form__group form__group--md">
                            <input type="text" className="form__control" placeholder="Ваше имя" />
                            <span className="form__line"></span>
                        </div>
                        <div className="form__group form__group--md">
                            <input type="email" className="form__control" placeholder="Ваш e-mail" />
                            <span className="form__line"></span>
                        </div>
                        <div className="form__group form__group--md">
                            <textarea className="form__control form__control--textarea" placeholder="текст сообщения"></textarea>
                            <span className="form__line"></span>
                        </div>
                        <div className="form__footer">
                            <button className="btn btn--blue btn--rounded btn--sm" type="submit">отправить</button>
                        </div>
                    </form>
                    <Router>
                        <ul className="modal__footer">
                            <li>
                                e-mail: <Link to="mailto:ast.freelance@gmail.com"> ast.freelance@gmail.com</Link>
                            </li>
                            <li>
                                тел: <Link to="tel:+77019420330">+7701-942-03-30</Link>
                            </li>
                        </ul>
                    </Router>

                </div>
                {/* <!--/.modal__content --> */}
            </div>
        )
    }
}

export default ContactModal;
