export type Host = {
  id?: number;
  name: string;
  isPro: boolean;
  avatarSrc: string;
};
export type City = {
  name: string;
  lat: number;
  lng: number;
  zoom: number;
};
export type Location = {
  lat: number;
  lng: number;
  zoom: number;
};

export type Offer = {
  id: number;
  title: string;
  type: string;
  price: number;
  rating: number;
  imagesSrc: string[];
  isPremium: boolean;
  isFavorite: boolean;
  bedrooms: number;
  maxAdults: number;
  features: string[];
  description: string[];
  host: Host;
  city: City;
  location: Location;
};
export type Offers = Offer[];

export const OFFERS: Offers = [
  {
    id: 0,
    title: 'Beautiful luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    rating: 80,
    imagesSrc: [
      'room.jpg',
      'apartment-01.jpg',
      'room.jpg',
      'apartment-03.jpg',
      'apartment-01.jpg',
      'apartment-02.jpg',
    ],
    isPremium: true,
    isFavorite: true,
    bedrooms: 3,
    maxAdults: 4,
    features: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    description: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    ],
    host: {
      id: 1,
      name: 'Angelina',
      isPro: true,
      avatarSrc: 'avatar-angelina.jpg',
    },
    city: {
      lat: 52.370216,
      lng: 4.895168,
      zoom: 10,
      name: 'Amsterdam',
    },
    location: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
      zoom: 10,
    },
  },
  {
    id: 1,
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    rating: 80,
    imagesSrc: [
      'room.jpg',
      'apartment-03.jpg',
      'apartment-01.jpg',
      'apartment-02.jpg',
      'room.jpg',
      'apartment-01.jpg',
    ],
    isPremium: false,
    isFavorite: true,
    bedrooms: 2,
    maxAdults: 4,
    features: [
      'Wi-Fi',
      'Heating',
      'Dishwasher',
      'Washing machine',
      'Towels',
      'Cabel TV',
      'Fridge',
    ],
    description: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    ],
    host: {
      id: 1,
      name: 'Julia',
      isPro: false,
      avatarSrc: 'avatar-angelina.jpg',
    },
    city: {
      lat: 52.370216,
      lng: 4.895168,
      zoom: 10,
      name: 'Amsterdam',
    },
    location: {
      lat: 52.3609553943508,
      lng: 4.85309666406198,
      zoom: 10,
    },
  },
  {
    id: 2,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    rating: 80,
    imagesSrc: [
      'apartment-01.jpg',
      'room.jpg',
      'apartment-03.jpg',
      'apartment-02.jpg',
      'room.jpg',
      'apartment-01.jpg',
    ],
    isPremium: false,
    isFavorite: false,
    bedrooms: 1,
    maxAdults: 3,
    features: [
      'Wi-Fi',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    description: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    ],
    host: {
      id: 1,
      name: 'Kristina',
      isPro: true,
      avatarSrc: 'avatar-angelina.jpg',
    },
    city: {
      lat: 52.370216,
      lng: 4.895168,
      zoom: 10,
      name: 'Amsterdam',
    },
    location: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
      zoom: 10,
    },
  },
  {
    id: 3,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    rating: 100,
    imagesSrc: [
      'apartment-03.jpg',
      'room.jpg',
      'apartment-01.jpg',
      'apartment-02.jpg',
      'room.jpg',
      'apartment-03.jpg',
    ],
    isPremium: true,
    isFavorite: false,
    bedrooms: 2,
    maxAdults: 4,
    features: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
    ],
    description: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    ],
    host: {
      id: 1,
      name: 'Maria',
      isPro: false,
      avatarSrc: 'avatar-angelina.jpg',
    },
    city: {
      lat: 52.370216,
      lng: 4.895168,
      zoom: 10,
      name: 'Amsterdam',
    },
    location: {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
      zoom: 10,
    },
  },
  {
    id: 4,
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    rating: 10,
    imagesSrc: [
      'apartment-03.jpg',
      'apartment-02.jpg',
      'room.jpg',
      'apartment-01.jpg',
      'room.jpg',
      'apartment-02.jpg',
    ],
    isPremium: false,
    isFavorite: true,
    bedrooms: 1,
    maxAdults: 2,
    features: [
      'Wi-Fi',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Cabel TV',
      'Fridge',
    ],
    description: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    ],
    host: {
      id: 1,
      name: 'Nicole',
      isPro: true,
      avatarSrc: 'avatar-angelina.jpg',
    },
    city: {
      lat: 52.370216,
      lng: 4.895168,
      zoom: 10,
      name: 'Amsterdam',
    },
    location: {
      lat: 52.357277,
      lng: 4.893771,
      zoom: 10,
    },
  },
];
