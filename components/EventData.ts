import { VenueData } from './VenueData';
import { ProgrammeData } from './ProgrammeData';

export interface EventData {
  name: string;
  description?: string;
  date: string;
  venue: VenueData;
  ticketsUrl?: string;
  programme: ProgrammeData[];
}
