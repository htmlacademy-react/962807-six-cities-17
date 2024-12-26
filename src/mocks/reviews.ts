export type Reviews = {
  id: number;
  reviewer: {
    id: number;
    name: string;
    avatarSrc: string;
  };
  rating: number;
  comment: string;
  date: string;
}[];

export const REVIEWS: Reviews = [
  {
    id: 1,
    reviewer: {
      id: 10,
      name: 'Max',
      avatarSrc: 'avatar-max.jpg',
    },
    rating: 80,
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-10',
  },
  {
    id: 2,
    reviewer: {
      id: 21,
      name: 'John',
      avatarSrc: 'avatar-max.jpg',
    },
    rating: 90,
    comment:
      'Everything is great, close to the metro, equipment in working order, clean. Remote check-in, very convenient.',
    date: 'Fri Jan 03 2020 10:50:00 GMT+0300 (Москва, стандартное время)',
  },
  {
    id: 3,
    reviewer: {
      id: 5,
      name: 'Valentin',
      avatarSrc: 'avatar-max.jpg',
    },
    rating: 65,
    comment:
      'The most polite and helpful staff! Finally I found a hotel that has the right value for money. Incredibly happy, will come back more than once!',
    date: '2020-09-23',
  },
  {
    id: 4,
    reviewer: {
      id: 11,
      name: 'Michael',
      avatarSrc: 'avatar-max.jpg',
    },
    rating: 50,
    comment:
      'I liked the apartment, I rented it for a week during my visit, everything I needed was nearby, not far from the metro, it corresponds to the description and photos, the kitchen is comfortable, the equipment is in working order.',
    date: '2018-02-04',
  },
  {
    id: 5,
    reviewer: {
      id: 56,
      name: 'Alexander',
      avatarSrc: 'avatar-max.jpg',
    },
    rating: 85,
    comment:
      'Thanks to the owners of the apartment, everything was as promised. Excellent apartment near the metro. The photos completely matched the real apartment. The price for such apartments was just great. We had a gorgeous view of the city. We lived on the 28th floor. We were offered a discount on the next stay, very nice. We recommend. We will come back again.',
    date: '2022-06-15',
  },
];
