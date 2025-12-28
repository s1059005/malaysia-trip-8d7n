
export interface Activity {
  id: string;
  time: string;
  title: string;
  description?: string;
  location: string;
  mapQuery: string; // The query string for Google Maps
  icon?: 'flight' | 'hotel' | 'food' | 'sight' | 'transport' | 'shopping' | 'nature' | 'money' | 'entertainment';
}

export interface ItineraryDay {
  day: number;
  date?: string;
  title: string;
  activities: Activity[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
