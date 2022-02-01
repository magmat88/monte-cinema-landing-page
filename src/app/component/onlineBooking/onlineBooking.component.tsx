import React from 'react';
import { monteCinemaLogo } from '../navbar/monteCinemaLogo';
import './onlineBooking.component.scss';

export function OnlineBooking(): JSX.Element {
    function onClickHandler(event: React.SyntheticEvent) {
        event.preventDefault();
        const notification = document.getElementById('notification')!;
        const message = document.createElement('p');
        document.querySelector('form')!.className = 'hidden';
        message.innerHTML = 'The email has been added to the list.';
        message.setAttribute('className', 'text-description');
        notification.appendChild(message);
    }

    return (
        <section className="online-booking">
            <h1 className="text-large">Online booking</h1>
            <p>Soon</p>

            <article className="notification" id="notification">
                <figure className="logo">{monteCinemaLogo}</figure>
                <p className="text-description">
                    Leave us your email address and we'll let you know as soon
                    as the machine will start.
                </p>
                <form className="notification-form">
                    <label htmlFor="email" className="notification-label">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        className="inputField"
                        placeholder="e.g. mynameislaura@mail.com"
                    />
                    <button
                        className="btn btn-contrast"
                        onClick={onClickHandler}
                    >
                        Let me know!
                    </button>
                </form>
            </article>
        </section>
    );
}
