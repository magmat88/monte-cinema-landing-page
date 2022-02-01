import React from 'react';
import './welcome.component.scss';

export function Welcome(): JSX.Element {
    return (
        <section className="welcome">
            <article className="welcome__text">
                <h1 className="welcome__text--large">
                    Welcome to the best cinema in Monterail
                </h1>
                <h3 className="welcome__text--description">
                    Best movies, best experiences, best people. And all that
                    doesn't exist. Yikes.
                </h3>
                <div className="welcome__btn--aligned">
                    <button className="welcome__btn welcome__btn--contrast">
                        <a href="#email">Book a ticket</a>
                    </button>
                </div>
            </article>

            <figure className="welcome__image--large">
                <img
                    className="welcome__image--fitted"
                    src={require('../../images/audience.jpg')}
                    alt="audience in cinema"
                />
            </figure>
        </section>
    );
}
