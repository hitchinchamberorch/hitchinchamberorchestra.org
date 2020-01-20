import React, { FunctionComponent } from 'react';
import links from '../data/links.json';
import { Navbar } from '../components/Navbar';
import Head from 'next/head';

function Contact() {
  return (
    <div className="page contact">
      <Head>
        <title>Contact - Hitchin Chamber Orchestra</title>
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
          <h2>Join us</h2>
          <p>
            The orchestra comprises a steadily growing number of enthusiastic
            members each at a unique stage on their own musical journey. Our
            commitment to achieving the highest standards is widely recognised
            as is our ethos of encouraging and enabling all members to develop
            and enjoy their playing as fully as possible. If you would like to
            play with the orchestra or find out more about us, please send a
            message to{' '}
            <a href="mailto:hitchinchamberorch@gmail.com">Nick Evans-Pughe</a>{' '}
            (Musical Director) who will be delighted to get in touch.
          </p>
          <img src="/images/DSC_0386.jpg" className="photo" alt="" />
          <p>
            Although we are essentially a String Orchestra we do invite
            non-string players to perform with us from time to time, so we are
            always pleased to receive expressions of interest from you, too.
          </p>
        </article>
        <article
          style={{
            gridArea: 'b'
          }}
        >
          <h2>Contact us</h2>
          <p>
            If you would like to sponsor us and be advertised both in our
            concert programme, posters and flyers, and on our website, please{' '}
            <a href="mailto:hitchinchamberorch@gmail.com">email us</a>.
          </p>
        </article>
        <article
          style={{
            gridArea: 'c'
          }}
        >
          <h2>Links</h2>
          <p>
            North Hertfordshire is rich with musical talent and there are a
            number of ways you can get involved with music in this region both
            as a musician and audience.
          </p>
          <p>
            A number of our players are members of{' '}
            <a href="http://www.hertsphil.org.uk/">
              Hertfordshire Philharmonia
            </a>
            , a symphony orchestra that performs concerts throughout the county.
          </p>
          <p>Other established organisations in the area include:</p>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>
                  {link.name}
                  {link.notes && `(${link.notes})`}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}

export default Contact;
