import dayjs from 'dayjs';
import { getRandomInteger } from '../utils';
import { getTimeFromMins } from '../utils';
import { DESTINATION, POINTS_OFFER } from '../const';
const generatePlace = () => {
  const randomIndex = getRandomInteger(0, DESTINATION.length - 1);
  return DESTINATION[randomIndex];
};

const generateDate = (maxDaysGap = 7, param = 'day') => {
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  return dayjs().add(daysGap, param).toDate();
};
const generatePoint = () => {
  const randomIndex = getRandomInteger(0, POINTS_OFFER.length - 1);
  return POINTS_OFFER[randomIndex];
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
    points: generatePoint(),
    basePrice: getRandomInteger(500, 2000),
    isFavorite: Boolean(getRandomInteger(0, 1)),
  };
};
