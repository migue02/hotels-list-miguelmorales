export type CallType = 'missed' | 'answered' | 'voicemail';
export type CallDirection = 'inbound' | 'outbound';

export type Location = {
    address: string;
    city: string;
    latitude: number;
    longitude: number;
};

type TimePeriod = {
    from: string;
    to: string;
};

type Contact = {
    phoneNumber: string;
    email: string;
};

export type Hotel = {
    id: string;
    name: string;
    location: Location;
    stars: number;
    checkIn: TimePeriod;
    checkOut: TimePeriod;
    contact: Contact;
    gallery: string[];
    userRating: number;
    price: number;
    currency: string;
};

export type RequestParamsType = {
    url: string;
    method: 'GET' | 'POST' | 'PUT';
    body?: BodyInit;
};

export type IHotelsResponse = Hotel[];
