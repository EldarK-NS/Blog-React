import React from 'react';
import './StoryModal.css'

const StoryModal = ({ open, setOpen }) => {

    return (
        <div className={open ? 'modal show' : 'modal'} id="story-modal">
            <div className="modal__content  modal__content--story">
                <button className="modal__close black" type="button" onClick={() => setOpen(false)}><img src="./images/icons/cancel-black.png" alt="Закрыть" /></button>
                <video className="modal__video" src="" poster="https://placehold.it/500x580"></video>
            </div>
        </div>
    )

}

export default StoryModal;
