import React from 'react';
import './announcement.component.scss';

export function Announcement(): JSX.Element {
    return (
        <section className="announcement">
            <header className="announcement__labels">
                <div className="announcement__label--dark">
                    <p>Soon</p>
                </div>
                <div className="announcement__label--contrast">
                    <p>See all</p>
                </div>
            </header>

            <div className="movies">
                <article className="movie">
                    <h3 className="movie__title">Predator</h3>
                    <figure className="movie__image--small">
                        <img
                            className="movie__image--fitted"
                            src={require('../../images/predator.png')}
                            alt="scene from Predator movie"
                        />
                    </figure>
                    <p className="movie__description">
                        A team of commandos on a mission in a Central American
                        jungle find themselves hunted by an extraterrestrial
                        warrior.
                    </p>
                </article>

                <article className="movie">
                    <h3 className="movie__title">Commando</h3>
                    <figure className="movie__image--small">
                        <img
                            className="movie__image--fitted"
                            src={require('../../images/commando.png')}
                            alt="scene from Commando movie"
                        />
                    </figure>
                    <p className="movie__description">
                        A retired Special Forces colonel tries to save his
                        daughter, who was abducted by his former subordinate.
                    </p>
                </article>

                <article className="movie">
                    <h3 className="movie__title">Terminator 2</h3>
                    <figure className="movie__image--small">
                        <img
                            className="movie__image--fitted"
                            src={require('../../images/terminator.png')}
                            alt="scene from Terminator 2 movie"
                        />
                    </figure>
                    <p className="movie__description">
                        A team of commandos on a mission in a Central American
                        jungle find themselves hunted by an extraterrestrial
                        warrior.
                    </p>
                </article>
            </div>
        </section>
    );
}
