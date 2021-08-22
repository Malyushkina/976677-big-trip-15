import dayjs from 'dayjs';
import {
  getRandomInteger,
  getOffer,
  getTimeFromMins,
  getRandomProposal,
  getPictureList,
  generateDate,
  generatePlace
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
  const time1 = dayjs(date).add(getRandomInteger(-10, 100), 'minute').toDate();
  const time2 = dayjs(time1).add(getRandomInteger(20, 100), 'minute').toDate();
  const begDate = time1;
  const endDate = time2;
  const diff = dayjs(time2).diff(time1) / (1000 * 60);
  const duration = getTimeFromMins(diff);

  return {
    place: generatePlace(),
    begDate,
    endDate,
    duration,
    points: getOffer(),
    basePrice: getRandomInteger(500, 2000),
    isFavorite: Boolean(getRandomInteger(0, 1)),
  };
};
