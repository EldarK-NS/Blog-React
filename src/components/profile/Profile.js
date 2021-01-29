import React from 'react';
import './Profile.css'

class Profile extends React.Component {
    render() {
        return (
            <>
                <h1 className="page__title">Профиль</h1>

                <form action="/" className="form">
                    <div className="cabinet">
                        <div className="cabinet__form">
                            <div className="form__group form__group--md">
                                <input type="text" className="form__control" placeholder="Ваше имя" value="Эльдар К" />
                                <span className="form__line"></span>
                            </div>
                            <div className="form__group form__group--md">
                                <input type="email" className="form__control" placeholder="Ваш e-mail" value="ast.freelance@gmail.com" />
                                <span className="form__line"></span>
                            </div>
                            <div className="form__group form__group--md">
                                <input type="password" className="form__control" placeholder="Новый  пароль" />
                                <span className="form__line"></span>
                            </div>
                            <div className="form__group form__group--md">
                                <input type="password" className="form__control" placeholder="Подтвердите пароль" />
                                <span className="form__line"></span>
                            </div>
                        </div>
                        <div className="cabinet__avatar">
                            <img src="./images/people.jpg" alt="" />
                            <label className="cabinet__file"> <input type="file" /> выбрать аватар </label>
                        </div>
                    </div>
                    <div className="form__footer">
                        <button className="btn btn--blue btn--rounded btn--sm" type="submit">Сохранить</button>
                    </div>
                </form>
            </>
        )
    }
}

export default Profile;
