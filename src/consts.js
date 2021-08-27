
export const TASK_COUNT_PER_STEP = 8;
export const POINTS = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant',
];

export const BLANK_TASK = {
  basePrice: 0,
  dateFrom: new Date(),
  dateTo: new Date(),
  destination: {
    name: 'Geneva',
    description:
      'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.',
    pictures: [
      { src: 'img/photos/1.jpg', description: 'Event photo' },
      { src: 'img/photos/2.jpg', description: 'Event photo' },
      { src: 'img/photos/3.jpg', description: 'Event photo' },
      { src: 'img/photos/4.jpg', description: 'Event photo' },
      { src: 'img/photos/4.jpg', description: 'Event photo' },
    ],
  },
  id: '',
  type: 'flight',
  offers: [{
    title: 'Add luggage',
    price: 30,
  },{
    title: 'Switch to comfort class',
    price: 100,
  },{
    title: 'Add meal',
    price: 15,
  },{
    title: 'Choose seats',
    price: 5,
  }],
  isFavorite: false,
};
