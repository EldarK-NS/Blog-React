import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {


    render() {
        return (
            <aside className="sidebar" id="sidebar">
                <div className="sidebar__header">
                    <img src="./images/sidebar-header.jpg" alt="" />
                </div>

                <div className="sidebar__content">
                    <div className="profile">
                        <img className="profile__avatar" src="./images/any.jpg" alt="" />
                        <div className="profile__header">
                            <div className="profile__name">Eldar Kabiyev</div>
                            <div className="profile__prof">Developer</div>
                        </div>

                        <ul className="social">
                            <li className="social__item"> <a className="social__link" href="/" target="_blank"> <img
                                src="./images/inst.svg" alt="Instagram Eldar Kabiyev" /></a></li>
                            <li className="social__item"> <a className="social__link" href="/" target="_blank"> <img
                                src="./images/pin.svg" alt="Pinterest Eldar Kabiyev" /></a></li>
                            <li className="social__item"> <a className="social__link" href="/" target="_blank"> <img
                                src="./images/vk.svg" alt="VK Eldar Kabiyev" /></a></li>
                        </ul>
                        <div className="profile__text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus neque vero temporibus commodi consequuntur. Eaque perferendis illo adipisci quam amet! Magnam natus vero iure pariatur laborum sequi porro voluptatibus quod!</p>
                        </div>
                    </div>
                    {/* <!--/.profile--> */}
                    <nav className="nav nav--mobile">
                        <ul className="nav__list">
                            <li className="nav-item">
                                <a className="nav__link" href="/">Главная</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav__link has-subnav" href="/post/Post">Статьи</a>
                                <ul className="subnav">
                                    <li>
                                        <a className="subnav__link" href="/">Создание сайтов</a>
                                    </li>
                                    <li>
                                        <a className="subnav__link" href="/">Интернет-маркетинг</a>
                                    </li>
                                    <li>
                                        <a className="subnav__link" href="/">Продвижение видео</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav__link" href="/About/About">Обо мне</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav__link" href="/advertise/Advertise">Реклама</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav__link" href="/profile/Profile">Профиль</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav__link" href="/">Выйти</a>
                            </li>
                        </ul>
                    </nav>
                </div>


                {/* <!--/.sidebar__content--> */}
                <div className="sidebar__footer">
                    <Link className="btn btn--red" to="/works">Мои работы</Link>
                    <button className="btn btn--blue" type="button" data-modal="contact-modal" onClick={this.props.ContactModal}>Написать мне</button>
                </div>

            </aside>
        )
    }
}

export default Sidebar;
