import dayjs from 'dayjs';
import { getRandomInteger, getOffer, generateDate, generatePlace } from '../utils';

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
    id: '',
    type: point.type,
    offers: point.offers,
    isFavorite: Boolean(getRandomInteger(0, 1)),
  };
};
