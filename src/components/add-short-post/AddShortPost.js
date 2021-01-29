import React from 'react';

import './AddShortPost.css'

const AddShortPost = () => {
    
    let AddStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/icons/add-photo.svg"})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center'
    }
    let SendStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/icons/send.svg"})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center'
    }


    return (
        <div className="add-post">
            <form className="add-post__form" action="/" method="POST">
                <textarea className="add-post__textarea" name="post-text" placeholder="write here" data-autoresize></textarea>
                <div className="add-post__form-actions">
                    <label className="add-post__file" htmlFor="add-post-file" style={AddStyle} ><input type="file" name="add-post-file" id="add-post-file" /></label>
                    <button className="add-post__send" type="submit" style={SendStyle} >Send text</button>

                </div>
            </form>
        </div>
    )
}

export default AddShortPost;
