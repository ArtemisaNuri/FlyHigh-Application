// types/flight.ts
export interface FlightSearchResponse {
  data: {
    itineraries: Itinerary[];
    legs: Leg[];
    carriers: Carrier[];
    agents: Agent[];
    places: Place[];
  };
}

export interface Itinerary {
  legIds: string[];
  pricingOptions: PricingOption[];
}

export interface Leg {
  id: string;
  origin: Place;
  destination: Place;
  departure: string;
  arrival: string;
  durationInMinutes: number;
  stopCount: number;
  segments: Segment[];
}

export interface Segment {
  origin: Place;
  destination: Place;
  departure: string;
  arrival: string;
  durationInMinutes: number;
  marketingCarrier: Carrier;
}

export interface Place {
  id: string;
  name: string;
  type: string;
  code: string;
}

export interface Carrier {
  id: string;
  name: string;
  logoUrl?: string;
}

export interface Agent {
  id: string;
  name: string;
  rating?: number;
}

export interface PricingOption {
  agentId: string;
  price: number;
  currency: string;
  url: string;
}