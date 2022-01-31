import React from 'react';
import './soonInTheCinema.component.scss';

export function SoonInTheCinema(): JSX.Element {
    return (
        <section className="soon-in-the-cinema">
            <header className="header-container">
                <div className="header-dark"><p>Soon</p></div>
                <div className="header-contrast"><p>See all</p></div>
            </header>

            <div className="movies-container">
            <article className="movie">
                <h3>Predator</h3>
                <figure className="image-small">
                    <img
                        className="image"
                        src={require('../../images/predator.png')}
                        alt="scene from Predator movie"
                    />
                </figure>
                <p>
                    A team of commandos on a mission in a Central American
                    jungle find themselves hunted by an extraterrestrial
                    warrior.
                </p>
            </article>

            <article className="movie">
                <h3>Commando</h3>
                <figure className="image-small">
                    <img
                        className="image"
                        src={require('../../images/commando.png')}
                        alt="scene from Commando movie"
                    />
                </figure>
                <p>
                    A retired Special Forces colonel tries to save his daughter,
                    who was abducted by his former subordinate.
                </p>
            </article>

            <article className="movie">
                <h3>Terminator 2</h3>
                <figure className="image-small">
                    <img
                        className="image"
                        src={require('../../images/terminator.png')}
                        alt="scene from Terminator 2 movie"
                    />
                </figure>
                <p>
                    A team of commandos on a mission in a Central American
                    jungle find themselves hunted by an extraterrestrial
                    warrior.
                </p>
            </article>
            </div>
        </section>
    );
}
