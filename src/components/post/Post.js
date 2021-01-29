import React from 'react';
import './Post.css'
import SocialModal from './../socialModal/SocialModal';
import {Link} from 'react-router-dom'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false
        }

        console.log('click')
    }

    SocialModel = () => {
        this.setState({
            openModal: !this.state.openModal
        })
        console.log('open')
    }

    render() {
        return (
            <>
                <article className="post">
                    <div className="post__actions">
                        <Link to="/">вернуться назад</Link>
                        <label className='btn-social' onClick={this.SocialModel}>поделиться <img className="post__actions-icon" src="./images/icons/share.svg" alt="поделиться" /></label>
                    </div>

                    <div className="post__header post-header--open">
                        <h1 className="post__title post__title--open"> Как я сходил на FrontEnd Conf 2021 </h1>
                        <ul className="post__data">
                            <li className="post__data-item">
                                <time dateTime="2020-01-01 16:00">2020-02-02</time>
                            </li>
                            <li className="post__data-item">
                                <Link to="/">конференция</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="post__content">
                        <div className="post__text">
                            <h2>Title h2 </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptate cum et ut eius unde, assumenda
                iure minus nobis, quo odio error ea, eaque commodi! Id pariatur sed dolorem? Architecto.</p>

                            <h3>Title h3 </h3>

                            <p>Lorem ipsum dolor sit amet <Link to="/">consectetur adipisicing elit</Link> . Quam voluptate cum et ut eius
                unde, assumenda
                iure minus nobis, quo odio error ea, eaque commodi! Id pariatur sed dolorem? Architecto.</p>

                            <h4>Title h4 </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptate cum et ut eius unde, assumenda
                iure minus nobis, quo odio error ea, eaque commodi! Id pariatur sed dolorem? Architecto.</p>
                            <p>
                                <img src="./images/post-image.jpg" alt="" />
                            </p>

                            <ul>
                                <li>item1</li>
                                <li>item2</li>
                                <li>item3</li>
                            </ul>
                            <ol>
                                <li>item1</li>
                                <li>item2</li>
                                <li>item3</li>
                            </ol>
                            {/* <table>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                        </table> */}
                            <p><span className="fr-video">
                                {/* <frameBorder src="https://www.youtube.com/embed/PIU80XHVsus" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></frameBorder> */}
                            </span>
                            </p>
                        </div>
                        <div className="related">
                            <h3 className="post__subtitle">Интересно почитать</h3>
                            <ul className="related__list">
                                <li className="related__list-item">
                                    <h4 className="related__list-title">
                                        <Link to="/">Lorem ipsum dolor sit amet consectetur</Link>
                                    </h4>
                                    <time className="related__list-date" dateTime="2020-01-01">2020-01-01</time>

                                </li>
                                <li className="related__list-item">
                                    <h4 className="related__list-title">
                                        <Link to="/">Lorem ipsum dolor sit amet consectetur</Link>
                                    </h4>
                                    <time className="related__list-date" dateTime="2020-01-01">2020-01-01</time>

                                </li>
                                <li className="related__list-item">
                                    <h4 className="related__list-title">
                                        <Link to="/">Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet</Link>
                                    </h4>

                                    <time className="related__list-date" dateTime="2020-01-01">2020-01-01</time>
                                </li>
                                <li className="related__list-item">
                                    <h4 className="related__list-title">
                                        <Link to="/">Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet</Link>
                                    </h4>
                                    <time className="related__list-date" dateTime="2020-01-01">2020-01-01</time>

                                </li>
                            </ul>
                        </div>

                        <h3 className="post__subtitle">Обсуждение</h3>
                        <form className="form" action="/" method="POST">
                            <div className="form__group">
                                <textarea className="form__control form__control--textarea" name="comment-text"
                                    placeholder="текст комментария" data-autoresize></textarea>
                                <span className="form__line"></span>
                            </div>
                            <button className="btn btn--blue btn--rounded btn--sm" type="submit">Send</button>
                        </form>

                        <ul className="comments">
                            <li className="comments__item">
                                <div className="comments__header">
                                    <img className="comments__avatar" src="https://placehold.it/30" alt="" />
                                    <div className="comments__author">
                                        <div className="comments__name">Eldar K</div>
                                        <time className="comments__pubdate" dateTime="2020-01-02">1 неделю назад</time>
                                    </div>
                                </div>
                                <div className="comments__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate modi deserunt quae qui error
                                    doloremque labore blanditiis quisquam officiis tempore cupiditate ipsam eveniet numquam fugiat
                                dolore, est perspiciatis assumenda. Praesentium! </div>
                                <button className="comments__reply" type="button"> Ответить</button>
                                <ul className="comments">
                                    <li className="comments__item">
                                        <div className="comments__header">
                                            <img className="comments__avatar" src="https://placehold.it/30" alt="" />
                                            <div className="comments__author">
                                                <div className="comments__name">Нуржан</div>
                                                <time className="comments__pubdate" dateTime="2020-01-01">1 неделю назад</time>
                                            </div>
                                        </div>
                                        <div className="comments__text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate modi deserunt quae qui
                                            error doloremque labore blanditiis quisquam officiis tempore cupiditate ipsam eveniet numquam
                                        fugiat dolore, est perspiciatis assumenda. Praesentium! </div>
                                        <button className="comments__reply" type="button"> Ответить</button>
                                    </li>
                                </ul>
                            </li>
                            <li className="comments__item">
                                <div className="comments__header">
                                    <img className="comments__avatar" src="https://placehold.it/30" alt="" />
                                    <div className="comments__author">
                                        <div className="comments__name">Нуржан</div>
                                        <time className="comments__pubdate" dateTime="2020-01-01">1 неделю назад</time>
                                    </div>
                                </div>
                                <div className="comments__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate modi deserunt quae qui
                                    error doloremque labore blanditiis quisquam officiis tempore cupiditate ipsam eveniet numquam
                                fugiat dolore, est perspiciatis assumenda. Praesentium! </div>
                                <button className="comments__reply" type="button"> Ответить</button>
                            </li>
                        </ul>
                    </div>
                </article>
                <SocialModal open={this.state.openModal} closeModal={this.SocialModel} />
            </>
        )
    }
}

export default Post;
