import React from 'react';
import './Works.css'

class Works extends React.Component {
    render() {
        return (
            <>
                <h1 className="page__title">Мои работы</h1>
                <article className="work">

                    <div className="work__preview">
                        <picture>
                            <source srcset="./images/works/placeimg_575_200_tech.jpg" media="(max-width:575px)" />
                            <img src="./images/works/work1.jpg" alt="" />
                        </picture>

                    </div>
                    <div className="work__content">
                        <h2 className="work__title">
                            <a href="/" target="_blank">altermono.com</a>
                        </h2>
                        <div className="work__description">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto ullam eligendi, dolore omnis asperiores
                            officia hic repellendus. Blanditiis saepe vero laborum ab perspiciatis. Mollitia animi libero aliquid
                            officia hic repellendus. Blanditiis saepe vero laborum ab perspiciatis. Mollitia animi libero aliquid
                sint quo dicta.</p>
                        </div>
                        <ul className="tags">
                            <li className="tags__item">дизайн</li>
                            <li className="tags__item">создание сайта</li>
                            <li className="tags__item">SMM</li>
                        </ul>
                        <div className="work__footer">
                            <a href="/" target="_blank" className="btn btn--blue btn--rounded btn--sm">перейти на сайт</a>
                        </div>
                    </div>
                </article>
                {/* <!-- /. один блок --> */}
                <article className="work">
                    <div className="work__preview">
                        <picture>
                            <source srcset="../images/works/placeholder.jpg" media="(max-width:575px)" />
                            <img src="./images/works/work2.jpg" alt="" />
                        </picture>

                    </div>
                    <div className="work__content">
                        <h2 className="work__title">
                            <a href="/" target="_blank">codedoco.com</a>
                        </h2>
                        <div className="work__description">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto ullam eligendi, dolore omnis asperiores
                            officia hic repellendus. Blanditiis saepe vero laborum ab perspiciatis. Mollitia animi libero aliquid.</p>
                        </div>
                        <ul className="tags">
                            <li className="tags__item">дизайн</li>
                            <li className="tags__item">создание сайта</li>
                            <li className="tags__item">SMM</li>
                            <li className="tags__item">дизайн</li>
                            <li className="tags__item">создание сайта</li>
                            <li className="tags__item">SMM</li>
                        </ul>
                        <div className="work__footer">
                            <a href="/" target="_blank" className="btn btn--blue btn--rounded btn--sm">перейти на сайт</a>
                        </div>
                    </div>
                </article>
            </>
        )
    }
}

export default Works;
