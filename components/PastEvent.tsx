import React, { FunctionComponent } from 'react';
import { formatLongDate } from '../utils/date';
import { EventData } from './EventData';

export const PastEvent: FunctionComponent<EventData> = ({
  name,
  date,
  venue,
  programme
}) => {
  const displayDate = formatLongDate(date);
  return (
    <div className="content past-event">
      <h3>{name}</h3>
      <h4>
        {displayDate}
        <br /> {venue.name}
      </h4>
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
