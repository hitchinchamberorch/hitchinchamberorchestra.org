import React, { FunctionComponent } from 'react';
import { formatLongDate } from '../utils/date';
import { EventData } from './EventData';

export const NextEvent: FunctionComponent<EventData> = ({
  name,
  date,
  venue,
  programme,
  ticketsUrl
}) => {
  const displayDate = formatLongDate(date);
  return (
    <div>
      <h3><div className="emergency-banner">{name}</div></h3>
      <h4>
        {displayDate}
        <br /> {venue.name}
      </h4>
      {ticketsUrl && (
        <p>
          <a className="button is-danger is-medium" href={ticketsUrl}>
            Get tickets
          </a>
        </p>
      )}
      <h4>Programme to include:</h4>
      <ul>
        {programme.map((item, index) => (
          <li key={index}>
            {item.composer}: {item.title}
            {item.notes && ` (${item.notes})`}
          </li>
        ))}
      </ul>
    </div>
  );
};
