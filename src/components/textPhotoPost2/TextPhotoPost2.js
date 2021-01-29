import React from 'react';
import './TextPhotoPost2.css';
import { Link } from 'react-router-dom';


class TextPhotoPost2 extends React.Component {
    render() {
        return (
            <article className="post">
                <div className="post__header post__header--preview">
                    <Link to="post.html">
                        <img className="post__preview" src="./images/foto-post2.jpg" alt="Как я сходил на FrontEnd Conf 2021" />
                    </Link>
                </div>
                <div className="post__content">
                    <h2 className="post__title">
                        <Link to="post.html">Post2 aboutJAVA-SCRIPT </Link>
                    </h2>
                    <p className="post__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores nam
                    ipsa qui
                    cum laborum animi ut nostrum quisquam, omnis dignissimos, consequatur pariatur repudiandae. Voluptate minus
                    consectetur quo placeatcum laborum animi ut nostrum quisquam, omnis dignissimos, consequatur pariatur
            repudiandae. Voluptate minus!</p>
                </div>
                <div className="post__footer">
                    <ul className="post__data">
                        <li className="post__data-item">
                            <time dateTime="2020-01-01 16:00">2020-02-02</time>
                        </li>
                        <li className="post__data-item">
                            <Link to="/post">конференция</Link>
                        </li>
                    </ul>
                    <Link className="post-read" to="/post">читать</Link>
                </div>
            </article>
        )
    }
}

export default TextPhotoPost2;
