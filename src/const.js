import { getRandomInteger, pictureList } from './utils';
export const PICTURE_COUNT = 5;
export const TASK_COUNT = 14;
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
export const POINTS_OFFER = [
  {
    type: 'taxi',
    offers: [
      {
        name: 'business',
        title: 'Upgrade to a business class',
        price: 120,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
      {
        name: 'radio',
        title: 'Choose the radio station',
        price: 60,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
      {
        name: 'uber',
        title: 'Order Uber',
        price: 20,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
    ],
  },
  {
    type: 'bus',
    offers: [
      {
        name: 'business',
        title: 'Upgrade to a business class',
        price: 120,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
      {
        name: 'radio',
        title: 'Choose the radio station',
        price: 60,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
    ],
  },
  {
    type: 'train',
    offers: [
      {
        name: 'business',
        title: 'Upgrade to a business class',
        price: 120,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
      {
        name: 'radio',
        title: 'Choose the radio station',
        price: 60,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
    ],
  },
  {
    type: 'ship',
    offers: [
      {
        name: 'business',
        title: 'Upgrade to a business class',
        price: 120,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
      {
        name: 'radio',
        title: 'Choose the radio station',
        price: 60,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
    ],
  },
  {
    type: 'drive',
    offers: [
      {
        name: 'business',
        title: 'Upgrade to a business class',
        price: 120,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },

      {
        name: 'rent',
        title: 'Rent a car',
        price: 200,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        name: 'luggage',
        title: 'Add luggage',
        price: 30,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
      {
        name: 'comfort',
        title: 'Switch to comfort',
        price: 100,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
      { name: 'meal', title: 'Add meal', price: 15, isSelected: Boolean(getRandomInteger(0, 1)) },
      {
        name: 'seats',
        title: 'Choose seats',
        price: 5,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
      {
        name: 'train',
        title: 'Travel by train',
        price: 40,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
    ],
  },
  {
    type: 'check-in',
    offers: [
      {
        name: 'breakfast',
        title: 'Add breakfast',
        price: 120,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
    ],
  },
  {
    type: 'sightseeing',
    offers: [
      {
        name: 'tickets',
        title: 'Book tickets',
        price: 40,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
      {
        name: 'lunch',
        title: 'Lunch in city ',
        price: 30,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
    ],
  },
  {
    type: 'restaurant',
    offers: [
      {
        name: 'lunch',
        title: 'Lunch in city ',
        price: 30,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
    ],
  },
];

export const DESTINATION = [
  {
    name: 'Amsterdam',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
    pictures: pictureList().pictures,
  },
  {
    name: 'Chamonix',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    pictures: pictureList().pictures,
  },
  {
    name: 'Geneva',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
    pictures: pictureList().pictures,
  },
];
export const GENEVA = DESTINATION.filter((elem) => elem.name === 'Geneva');

export const TASK = {
  place: GENEVA[0],
  begDate: new Date(),
  endDate: new Date(),
  duration: null,
  points: {
    type: 'flight',
    offers: [
      {
        name: 'luggage',
        title: 'Add luggage',
        price: 30,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
      {
        name: 'comfort',
        title: 'Switch to comfort',
        price: 100,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
      { name: 'meal', title: 'Add meal', price: 15, isSelected: Boolean(getRandomInteger(0, 1)) },
      {
        name: 'seats',
        title: 'Choose seats',
        price: 5,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
      {
        name: 'train',
        title: 'Travel by train',
        price: 40,
        isSelected: Boolean(getRandomInteger(0, 1)),
      },
    ],
  },
  basePrice: 0,
  isFavorite: false,
};
