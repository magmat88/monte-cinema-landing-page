import React from 'react';
import { monteCinemaLogo } from '../navbar/monteCinemaLogo';
import './onlineBooking.component.scss';

export function OnlineBooking(): JSX.Element {
    return (
        <section className="online-booking">
            <h1>Online booking</h1>
            <p>Soon</p>

            <article className="notification">
                <figure className="logo">{monteCinemaLogo}</figure>
                <p>
                    Leave us your email address and we'll let you know as soon
                    as the machine will start.
                </p>
                <form className="notification-form">
                    <label htmlFor="email" className="notification-label">Email</label>
                    <input id="email"className="inputField" placeholder="e.g. mynameislaura@mail.com" />
                    <button className="btn btn-contrast">Let me know!</button>
                </form>
            </article>
        </section>
    );
}
