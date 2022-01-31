import React from 'react';
import './welcome.component.scss';

export function Welcome(): JSX.Element {
    return (
        <section className="welcome">
            <article className="text-content">
                <h1 className="text-large">
                    Welcome to the best cinema in Monterail
                </h1>
                <h3 className="text-description">
                    Best movies, best experiences, best people. And all that
                    doesn't exist. Yikes.
                </h3>
                <div className="btn-container">
                    <button className="btn btn-contrast">Book a ticket</button>
                </div>
            </article>
            
            <figure className="image-big">
                <img
                    className="image"
                    src={require('../../images/audience.jpg')}
                    alt="audience in cinema"
                />
            </figure>
        </section>
    );
}
