import dayjs from 'dayjs';
import {
  getRandomInteger,
  getOffer,
  getRandomProposal,
  getPictureList,
  generateDate,
  generatePlace,
} from '../utils';

export const destination = [
  {
    name: 'Amsterdam',
    description: getRandomProposal(5),
    pictures: getPictureList().pictures,
  },
  {
    name: 'Chamonix',
    description: getRandomProposal(5),
    pictures: getPictureList().pictures,
  },
  {
    name: 'Geneva',
    description: getRandomProposal(5),
    pictures: getPictureList().pictures,
  },
];
export const GENEVA = destination.filter((elem) => elem.name === 'Geneva');

export const taskDefault = {
  place: GENEVA[0],
  begDate: new Date(),
  endDate: new Date(),
  duration: null,
  points: getOffer(),
  basePrice: 0,
  isFavorite: false,
};
export const generateTask = () => {
  const date = generateDate();
  const dateFrom = dayjs(date).add(getRandomInteger(-10, 100), 'minute').toDate();
  const dateTo = dayjs(dateFrom).add(getRandomInteger(20, 100), 'minute').toDate();
  const point = getOffer();

  return {
    basePrice: getRandomInteger(500, 2000),
    dateFrom,
    dateTo,
    destination: generatePlace(),
    id:'',
    type: point.type,
    offers: point.offers,
    isFavorite: Boolean(getRandomInteger(0, 1)),
  };
};
// 0:
// base_price: 1000
// date_from: "2021-08-22T06:15:52.809Z"
// date_to: "2021-08-22T09:49:26.258Z"
// destination: {name: "Helsinki", description: "Helsinki, is a beautiful city, famous for its crow…street markets with the best street food in Asia.", pictures: Array(4)}
// id: "0"
// is_favorite: true
// offers: Array(2)
// 0: {title: "Choose seats", price: 90}
// 1:
// price: 120
// title: "Upgrade to business class"
// [[Prototype]]: Object
// length: 2
// [[Prototype]]: Array(0)
// type: "flight"
