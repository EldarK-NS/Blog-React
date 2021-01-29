import React, { useState } from 'react';
import './Stories.css';
import StoryModal from './../storyModal/StoryModal';


const Stories = () => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="container">
            <div className="stories">
                <div className="stories__item" data-modal="story-modal" onClick={() => setOpenModal(true)}>
                    <img className="stories__preview" src="./images/stories/first.jpg" alt="" />
                    <div className="stories__title">Relax</div>
                    <time className="stories__date" dateTime="2020-01-01">2020-01-01</time>
                </div>
                <div className="stories__item" onClick={() => setOpenModal(true)} >
                    <img className="stories__preview" src="./images/stories/second.jpg" alt="" />
                    <div className="stories__title">Work</div>
                    <time className="stories__date" dateTime="2020-01-01">2020-01-01</time>
                </div>
                <div className="stories__item" onClick={() => setOpenModal(true)}>
                    <img className="stories__preview" src="./images/stories/third.jpg" alt="" />
                    <div className="stories__title">Home</div>
                    <time className="stories__date" dateTime="2020-01-01">2020-01-01</time>
                </div>
                <div className="stories__item" onClick={() => setOpenModal(true)} >
                    <img className="stories__preview" src="./images/stories/fourth.jpg" alt="" />
                    <div className="stories__title">Nature</div>
                    <time className="stories__date" dateTime="2020-01-01">2020-01-01</time>
                </div>
            </div>
            <StoryModal open={openModal} setOpen={setOpenModal} />
        </div>
    )
}

export default Stories;
