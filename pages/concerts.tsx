import React, { FunctionComponent } from 'react';
import eventsData from '../data/events.json';
import { PastEvent } from '../components/PastEvent';
import { FutureEvent } from '../components/FutureEvent';
import { NextEvent } from '../components/NextEvent';
import { Navbar } from '../components/Navbar';
import Head from 'next/head';

function Concerts() {
  const now = Date.now();
  const pastEvents = eventsData
    .filter(event => new Date(event.date).getTime() < now)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  const allFutureEvents = eventsData
    .filter(event => new Date(event.date).getTime() >= now)
    .sort((a, b) => (a.date < b.date ? -1 : 1));
  const nextEvent =
    allFutureEvents.length === 0 ? pastEvents[0] : allFutureEvents[0];
  const futureEvents =
    allFutureEvents.length > 1
      ? allFutureEvents.slice(1, allFutureEvents.length)
      : null;
  return (
    <div className="page concerts">
      <Head>
        <title>Concerts - Hitchin Chamber Orchestra</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="images/hco-favicon.png" />
        <link rel="stylesheet" href="styles.css" />
        <meta
          name="google-site-verification"
          content="I_yhcnwxNnEsT3GhY2eFwkxCr17okRt1PhO_xnQ0kgQ"
        />
      </Head>
      <Navbar />
      <div className="container">
        <article
          style={{
            gridArea: 'a'
          }}
        >
          {/*<img src="/images/TheSilverChainOfSound.jpg" className="poster" alt="" />*/}
          <h2>Next concert</h2>
          <NextEvent {...nextEvent} />
          {/*<p>
            Despite Hitchin Chamber Orchestra’s primary interest in music from
            the classical repertoire – forays into the contemporary and jazz
            world notwithstanding – this is the first programme created by HCO
            that is exclusively dedicated to Classicism, as such. This period of
            exponential art-music development, spanning a mere three generations
            catapults an audience from the early formal classicism of CPE Bach,
            fifth child of the even more famous Johann Sebastian, via Haydn,
            Mozart and Beethoven to the quasi-romanticism of Franz Schubert,
            whose musical genius pushed the constraints of the classical form to
            the absolute limit. Had he not been tragically short-lived, he’d
            undoubtedly have exerted an even greater influence on the ensuing
            period of tumultuous artistic experimentation and development that
            we call the Age of Romanticism.
          </p>
          <p>
            For a programme motivated by such a specific remit, HCO will mutate
            for the evening from its usual ‘strings-plus’ format into full
            Classical Orchestra configuration, welcoming for the first time
            horn, bassoon and clarinet colleagues, alongside oboe and
            flute-playing friends who have appeared with HCO previously in its
            Baroque programmes. HCO is delighted to invite you to an evening of
            memorable musical entertainment.
          </p>*/}
        </article>
        <article
          style={{
            gridArea: 'b'
          }}
        >
          <h2>Past Concerts</h2>
          {pastEvents.map((event, index) => (
            <PastEvent key={index} {...event} />
          ))}
        </article>
        <article
          style={{
            gridArea: 'c'
          }}
        >
          <h2>Future concerts</h2>
          {futureEvents &&
            futureEvents.map((event, index) => (
              <FutureEvent key={index} {...event} />
            ))}
          <p>
            If you would like to receive advance notice of our concerts, please{' '}
            <a href="mailto:hitchinchamberorch@gmail.com?subject=Concert+notifications&body=I would like to receive advance notice of HCO's concerts.">
              email us
            </a>{' '}
            and we will add you to our mailing list.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Concerts;
