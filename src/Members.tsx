import React, { FunctionComponent } from 'react';
import rehearsalData from './data/rehearsals.json';
import { formatLongDate, formatAbbrDate, format12HourTime } from './utils/date';
import { Navbar } from './components/Navbar';

interface RehearsalDetails {
  dateFrom: string;
  dateTo: string;
  venue: string;
  notes?: string;
}

interface RehearsalsData {
  /** Event name */
  name: string;
  /** Event date */
  date: string;
  /** Rehearsal details */
  rehearsal: RehearsalDetails[];
  /** General notes */
  notes?: string;
}

const RehearsalItem: FunctionComponent<RehearsalDetails> = ({
  dateFrom,
  dateTo,
  venue,
  notes
}) => {
  const displayDate = formatAbbrDate(dateFrom);
  const fromTime = format12HourTime(dateFrom);
  const toTime = format12HourTime(dateTo);
  return (
    <tr>
      <td className="date">{displayDate}</td>
      <td className="time">
        {fromTime}-{toTime}
      </td>
      <td className="venue">{venue}</td>
      <td className="notes">{notes}</td>
    </tr>
  );
};

export const Members: FunctionComponent = () => {
  const now = Date.now();
  const pastEvents = rehearsalData
    .filter(event => new Date(event.date).getTime() < now)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  const allFutureEvents = rehearsalData
    .filter(event => new Date(event.date).getTime() >= now)
    .sort((a, b) => (a.date < b.date ? -1 : 1));
  const nextEvent =
    allFutureEvents.length === 0 ? pastEvents[0] : allFutureEvents[0];
  return (
    <div className="page members">
      <Navbar />
      <div className="container">
        <article
          style={{
            gridArea: 'a'
          }}
        >
          <h2>Rehearsal Schedule</h2>
          <p>
            For
            <strong> {nextEvent.name} </strong>
            on <strong>{formatLongDate(nextEvent.date)}</strong>,
            rehearsals will take place as follows:
          </p>
          <div className="scrollable">
            <table className="rehearsals">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Venue</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {nextEvent.rehearsals.map((data, index) => (
                  <RehearsalItem key={index} {...data} />
                ))}
              </tbody>
            </table>
          </div>
          <p>{nextEvent.notes}</p>
          {/* <img src="/images/14-07-15-concert.jpg" className="photo" /> */}
        </article>
      </div>
    </div>
  );
};
