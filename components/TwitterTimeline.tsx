import React, { FunctionComponent } from 'react';

export const TwitterTimeline: FunctionComponent = () => (
  <div>
    <a
      className="twitter-timeline"
      data-theme="light"
      href="https://twitter.com/HitchinChamber?ref_src=twsrc%5Etfw"
    >
      Tweets by HitchinChamber
    </a>
    <script async src="https://platform.twitter.com/widgets.js"></script>
  </div>
);
