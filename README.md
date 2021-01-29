//! Menu witn sub-menu

nav = {
      left: {
        'главная': null,
        'статьи': ['Создание сайтов', 'Интеренет-маркетинг', 'Продвижение контента'],
        'обо мне': null,
        'реклама': null
      },
      right: ['профиль', 'выйти'],
    }
    

<nav className="nav">
                        <ul className="nav__list">
                            {Object.keys(nav.left).map(item => {
                                const name = item;
                                const subName = nav.left[item];
                                if (subName !== null) {
                                    return <li className="nav-item" key={name}>
                                        <a className="nav__link has-subnav" href="/">{name}</a>
                                        <ul className="subnav"> {subName.map(elem => {
                                            return <li key={elem}>
                                                <a className="subnav__link" href="/">{elem}</a>
                                            </li>
                                        })
                                        }
                                        </ul>
                                    </li>
                                }
                                else {
                                    return <li className="nav-item" key={name}>
                                        <a className="nav__link" href="index.html">{name}</a>
                                    </li>
                                }
                            })
                            }
                        </ul>
                    </nav>

// Модальное окно-simple

создаем компонент модального окна, передаем его в parent, затем в паренте 
создаем стейт 
    this.state = {
      isOpen: false
    }
<модальное_окно name={this.state.isOpen} закрытие={this.modalClose}>
<кнопка открытия (закрытия) onClick={this.openModal}>
 openModal = () => {
    this.setState({
      isOpen: true//
      можно записать сразу на закрытия по клику на туже кнопку, тогда:
      isOpen:!this.state.isOpen
    })
   
  }
  modalClose = () => {
    this.setState({
      isOpen: false
    })
  }

в наследнике:
if (open === true) {
            nameC += ' modal__show'
        } 
        <кнопка закрытия onClick={this.props.closeModal}>


{/* <header classNameName="header">
                    <div classNameName="header__left">
                        <nav classNameName="nav">
                            <ul classNameName="nav__list">
                                {Object.keys(nav.left).map(item => {
                                    const name = item;
                                    const subName = nav.left[item];
                                    if (subName !== null) {
                                        return <li classNameName="nav-item" key={name}>
                                            <a classNameName="nav__link has-subnav" href=''>{name}</a>
                                            <ul classNameName="subnav"> {subName.map(elem => {
                                                return <li key={elem}>
                                                    <a classNameName="subnav__link" href="/">{elem}</a>
                                                </li>
                                            })
                                            }
                                            </ul>
                                        </li>
                                    }
                                    else {
                                        return <li classNameName="nav-item" key={name}>
                                            <a classNameName="nav__link" href="index.html">{name}</a>
                                        </li>
                                    }

                                })
                                }
                            </ul>
                        </nav> */}

{/* <!-- Burger --> */ }
{/* <button classNameName="burger active" type="button" id="sidebarToggle" onClick={() => this.props.openSidebar()}>
                            <span>открыть навигацию</span>
                        </button>
                    </div>
                    <div classNameName="header__right">
                        <nav classNameName="nav">
                            <ul classNameName="nav__list">
                                {Object.keys(nav.right).map(item => {
                                    return <li classNameName="nav-item" key={nav.right[item]}>
                                        <a classNameName="nav__link" href="profile.html">{nav.right[item]}</a>
                                    </li>
                                })}
                            </ul>
                        </nav>
                        <form classNameName="search" action="search.html" method="GET">
                            <input classNameName="search__input" type="text" placeholder="Поиск по блогу" />
                        </form>
                    </div>
                </header> */}

                не закончил роутинг