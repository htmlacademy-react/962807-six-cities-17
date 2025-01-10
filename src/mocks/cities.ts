export type City = {
  name: string;
  lat: number;
  lng: number;
  zoom: number;
};
export type Cities = City[];

export const CITIES: Cities = [
  {
    name: 'Paris',
    lat: 48.8589,
    lng: 2.3469,
    zoom: 10,
  },
  {
    name: 'Cologne',
    lat: 50.9578,
    lng: 6.8472,
    zoom: 10,
  },
  {
    name: 'Brussels',
    lat: 50.8552,
    lng: 4.3756,
    zoom: 10,
  },
  {
    name: 'Amsterdam',
    lat: 52.370216,
    lng: 4.895168,
    zoom: 10,
  },
  {
    name: 'Hamburg',
    lat: 53.550052,
    lng: 10.000434,
    zoom: 10,
  },
  {
    name: 'Dusseldorf',
    lat: 51.2385,
    lng: 6.8143,
    zoom: 10,
  },
];
