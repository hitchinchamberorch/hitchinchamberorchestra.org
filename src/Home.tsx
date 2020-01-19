import React, { FunctionComponent } from 'react';
import { Navbar } from './components/Navbar';
import eventsData from './data/events.json';
import { NextEvent } from './components/NextEvent';

export const Home: FunctionComponent = () => {
  const now = Date.now();
  const pastEvents = eventsData
    .filter(event => new Date(event.date).getTime() < now)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  const allFutureEvents = eventsData
    .filter(event => new Date(event.date).getTime() >= now)
    .sort((a, b) => (a.date < b.date ? -1 : 1));
  const nextEvent =
    allFutureEvents.length === 0 ? pastEvents[0] : allFutureEvents[0];
  return (
    <div className="page home">
      <Navbar />
      <div className="container">
        <article
          style={{
            gridArea: 'a'
          }}
        >
          <h2>Hitchin Chamber Orchestra</h2>
          <p>
            A friendly string orchestra based in Hitchin aiming to present high
            standard concerts in the town’s lovely venues. Music played covers a
            wide variety of different styles and genres and the orchestra often
            collaborates with guest instrumentalists and singers.
          </p>
          <img src="/images/DSC_0047.jpg" className="photo" alt="" />{' '}
          {/* <img src="/images/DSC_0285.jpg" className="photo" /> */}
        </article>
        <article
          style={{
            gridArea: 'b'
          }}
        >
          <h2>What makes an orchestra like HCO tick?</h2>
          <p>
            Fundamentally, it is the deep desire of a dedicated group of
            musicians to enjoy, together, something profoundly important to them
            and to share this experience with the wider community.
          </p>
          <p>
            We are hugely grateful to our followers, both new and old, for their
            support which enables our continuing programme of concert making to
            thrive.
          </p>
          <p>Explore our website and come and hear us for yourself!</p>
        </article>
        <article
          style={{
            gridArea: 'c'
          }}
        >
          <h2>Next concert</h2>
          <NextEvent {...nextEvent} />
        </article>
        <article
          style={{
            gridArea: 'd'
          }}
        >
          <h2>What our audiences say…</h2>
          <blockquote>“Wonderful”, “Magnificent evening”</blockquote>
          <blockquote>“The best concert I’ve heard in St.Mary’s”</blockquote>
          <blockquote>
            “We’re so lucky to have such talented musicians in our lovely town!”
          </blockquote>
        </article>
      </div>
    </div>
  );
};
