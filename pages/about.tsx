import React, { FunctionComponent } from 'react';
import { Navbar } from '../components/Navbar';
import Head from 'next/head';

function About() {
  return (
    <div className="page about">
      <Head>
        <title>About - Hitchin Chamber Orchestra</title>
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
          <h2>Playing in the HCO</h2>
          <p>
            Our orchestra's membership is drawn locally from North Hertfordshire
            and South Bedfordshire with a mix of accomplished amateur players,
            professional instrumental teachers, and a core of freelance
            musicians who lead the sections.
          </p>
          <img src="/images/P1060743.jpg" className="photo" alt="" />
          <p>
            Most of the repertoire is played without a conductor, with the ethos
            of a chamber ensemble - although larger scale and more complex works
            are conducted whenever the need is felt. Rehearsals are positive and
            purposeful and are characterised by an atmosphere that is both
            friendly and mutually encouraging. They balance the orchestra's
            ambition to develop and improve its performance with an inclusive
            outlook wherein commitment and determination to succeed are as
            valued attributes as advanced skill and musicianship. We seek and
            expect challenge! The pay-off comes with the warm satisfaction of
            playing a part in performances of a high standard and from which our
            audiences derive great pleasure.
          </p>
          <p>
            Each concert is preceded by a series of five or six rehearsals, for
            the most part in the very comfortable and inviting environment of
            Tilehouse Baptist Church in Hitchin, on Friday evenings between
            7.30pm and 10pm at more or less fortnightly intervals. (The local
            ‘Highlander’ pub rounds off the evening for those who can stay.)
            This pattern of commitment has proved popular whilst also affording
            players more time to assimilate the music alongside busy work
            schedules and home lives.
          </p>
          <p>
            We perform three concerts a year, principally at St Mary's Church in
            Hitchin but other local venues are also being considered for future
            events. The repertoire is as extensive as it is varied and future
            concerts will give us the opportunity to explore some rarely heard
            repertoire alongside the acclaimed favorites of the string orchestra
            genre.
          </p>
          <p>
            We ask members to commit to attending as many rehearsals as possible
            and to putting in the time and effort to practise individual parts.
            Members are also responsible for actively promoting the concerts and
            selling tickets to their friends, families and colleagues so that
            our concerts are well attended and subscription rates can stay low
            (currently just £20 per concert cycle).
          </p>
          <p>
            We re-seat the orchestra for each concert from the pool of available
            players. Section principals are fairly constant, but in general the
            HCO doesn't have full time first and second violins and does not
            seat players hierarchically; our practice reflects the belief that
            it is important to have a backbone of more experienced players
            throughout all the sections. The orchestra's size varies from
            concert to concert to reflect the repertoire and the capacity of the
            particular concert venue, therefore players are not necessarily
            invited to play for every event.
          </p>
          <p>
            By and large, new members are recommended to us, however if you are
            interested in playing with the orchestra but are not currently known
            to us we'd like to have the opportunity to find out more about you.
            Please get in touch! There are no auditions; players are initially
            invited to play with us for a short trial period following which an
            invitation to join may be offered.
          </p>
        </article>
        <article
          style={{
            gridArea: 'b'
          }}
        >
          <h2>Who's Who</h2>
          <h3>Committee</h3>
          <ul>
            <li>Catriona Bevan [Chair]</li>
            <li>Tom Ayres [Secretary]</li>
            <li>Paul Reynard [Treasurer]</li>
            <li>Ros Boswell</li>
            <li>Vanessa Gaidoni</li>
            <li>Shannon St. Luce</li>
            <li>Jan Tothill</li>
            <li>Ros Woodin</li>
          </ul>
          <h3>Administrative roles</h3>
          <ul>
            <li>Librarian – Shannon St. Luce</li>
            <li>Publicity – Vanessa Gaidoni / Ros Woodin</li>
            <li>Social secretary – Catriona Bevan</li>
            <li>Programme production – Christian Turton</li>
            <li>Website manager – Ting Kuei</li>
            <li>Refreshments – Ros Woodin / Paul Reynard</li>
            <li>Orchestra Manager (fixer) – Jan Tothill</li>
            <li>Orchestra Manager (concert day) – Paul Reynard</li>
            <li>Programme Notes – Jan Tothill</li>
            <li>Tickets – Shannon St. Luce</li>
            <li>Tilehouse Street link – Paul Reynard</li>
            <li>Poster design – Charley Gaidoni</li>
          </ul>
          <p>
            The committee meets a minimum of six times a year and an AGM of the
            orchestra is held every summer.
          </p>
          <p>
            Any member of the orchestra may raise any issue with a member of the
            committee and ask for it to be placed on an agenda or brought to any
            other business for discussion at a committee meeting.
          </p>
          <p>Ideas for repertoire for consideration are always welcome.</p>
          <p>
            <strong>
              The committee acknowledges the contributions all members and
              friends make
            </strong>{' '}
            to the smooth running of the orchestra in many ways, such as helping
            with setting up and resetting, transport, selling tickets,
            welcoming, bowing music, offering lifts, stewarding, taking
            photographs and so on and extends its thanks and appreciation to
            all.
          </p>
        </article>
      </div>
    </div>
  );
}

export default About;
