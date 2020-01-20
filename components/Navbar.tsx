import React, { FunctionComponent } from 'react';

export const Navbar: FunctionComponent = () => (
  <nav role="navigation" aria-label="main navigation">
    <div className="nav-content">
      <a className="nav-logo" href="/">
        <img src="images/hco-logo.svg" alt="Hitchin Chamber Orchestra" />
      </a>
      <span className="h-strut" />
      <a className="nav-link" href="/">
        Home
      </a>
      <a className="nav-link" href="/concerts">
        Concerts
      </a>
      <a className="nav-link" href="/about">
        About
      </a>
      <a className="nav-link" href="/contact">
        Contact
      </a>
      <a className="nav-link" href="/members">
        Members
      </a>
    </div>
  </nav>
);
