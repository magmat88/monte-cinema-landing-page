import React from 'react';
import { monteCinemaLogo } from '../navbar/monteCinemaLogo';
import './onlineBooking.component.scss';

export function OnlineBooking(): JSX.Element {
    function onClickHandler(event: React.SyntheticEvent) {
        event.preventDefault();
        const notification = document.getElementById('notification')!;
        const message = document.createElement('p');
        document.querySelector('form')!.className = 'form--hidden';
        message.innerHTML = 'The email has been added to the list.';
        message.setAttribute('className', 'text--standard');
        notification.appendChild(message);
    }

    return (
        <section className="booking">
            <h1 className="booking__text--large">Online booking</h1>
            <p className="booking__text--description">Soon</p>

            <article className="notification" id="notification">
                <figure>{monteCinemaLogo}</figure>
                <p className="notification__text--standard">
                    Leave us your email address and we'll let you know as soon
                    as the machine will start.
                </p>
                <form className="form">
                    <label htmlFor="email" className="form__label form__label--alert">
                        Email
                    </label>
                    <input
                        className="form__input form__input--grey-blue"
                        id="email"
                        placeholder="e.g. mynameislaura@mail.com"
                        type="text"
                    />
                    <button
                        className="form__btn form__btn--contrast form__btn--text-small form__btn--wide"
                        onClick={onClickHandler}
                    >
                        Let me know!
                    </button>
                </form>
            </article>
        </section>
    );
}
