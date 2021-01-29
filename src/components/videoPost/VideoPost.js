import React from 'react';
import './VideoPost.css'

class VideoPost extends React.Component {
    render() {
        return (
            <article className="post">
                <div className="post__header ">
                    <div className="embed">
                        <iframe src="https://www.youtube.com/embed/PIU80XHVsus" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen title="133"></iframe>
                    </div>
                </div>
                <div className="post__content">
                    <h2 className="post__title">
                        <a href="post.html">Название видеоролика!!!</a>
                    </h2>
                </div>
                <div className="post__footer">
                    <ul className="post__data">
                        <li className="post__data-item">
                            <time dateTime="2020-01-01 16:00">2020-01-01</time>
                        </li>
                        <li className="post__data-item">
                            <a href="/">продвижение видео</a>
                        </li>
                    </ul>
                    <a className="post-read" href="post.html">оставить комментарий</a>
                </div>
            </article>
        )
    }
}

export default VideoPost;
