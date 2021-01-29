import React from 'react';
import './SmallPost.css'

class SmallPost extends React.Component {
    render() {
        return(
            <div className="post">
            <div className="post__content">
                <p className="post__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores nam
                ipsa qui
                cum laborum animi ut nostrum quisquam, omnis dignissimos, consequatur pariatur repudiandae. Voluptate minus
                consectetur quo placeatcum laborum animi ut nostrum quisquam, omnis dignissimos, consequatur pariatur
                repudiandae. Voluptate minus!</p>
            </div>
            <div className="post__footer">
                <ul className="post__data">
                    <li className="post__data-item">
                        <time dateTime="2020-01-01 16:00">2020-01-01</time>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default SmallPost;
