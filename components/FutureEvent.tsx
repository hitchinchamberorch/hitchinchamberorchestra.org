import React, { FunctionComponent } from 'react';
import { formatLongDate } from '../utils/date';
import { EventData } from './EventData';

export const FutureEvent: FunctionComponent<EventData> = ({
  name,
  date,
  venue
}) => {
  const displayDate = formatLongDate(date);
  return (
    <div>
      <h3>{name}</h3>
      <h4>
        {displayDate}
        <br /> {venue.name}
      </h4>
    </div>
  );
};
