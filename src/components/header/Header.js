import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenSideBar: false
        }

    }

    render() {

        return (
            <header className="header">
                <div className="header__left">
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav-item">
                                <Link className="nav__link" to="/">Главная</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/post" className="nav__link has-subnav" >Статьи</Link>
                                <ul className="subnav">
                                    <li>
                                        <Link className="subnav__link" to="/">Создание сайтов</Link>
                                    </li>
                                    <li>
                                        <Link className="subnav__link" to="/">Интернет-маркетинг</Link>
                                    </li>
                                    <li>
                                        <Link className="subnav__link" to="/">Продвижение видео</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav__link" to="/about">Обо мне</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav__link" to="/advertise">Реклама</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- Burger --> */}
                    <button className="burger active" type="button" id="sidebarToggle" onClick={this.props.OpenSidebar}>
                        <span>открыть навигацию</span>
                    </button>
                </div>
                <div className="header__right">
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav-item">
                                <Link className="nav__link" to="/profile">Профиль</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav__link" to="/Exit">выйти</Link>
                            </li>
                        </ul>
                    </nav>
                    <form className="search" action="search.html" method="GET">
                        <input className="search__input" type="text" placeholder="Поиск по блогу" />
                    </form>
                </div>
            </header >
        )
    }
}
export default Header;


