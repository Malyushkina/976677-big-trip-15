import { PICTURE_COUNT, POINTS, OFFERS } from './const';
import { destination } from './mock/task';
import dayjs from 'dayjs';

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const generatePlace = () => {
  const randomIndex = getRandomInteger(0, destination.length - 1);
  return destination[randomIndex];
};

export const generateDate = (maxDaysGap = 7, param = 'day') => {
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  return dayjs().add(daysGap, param).toDate();
};

export const getUpperCase = (str) => {
  const str1 = str[0].toUpperCase() + str.substring(1);
  return str1;
};

export const sortDate = (a, b) => {
  const date1 = new Date(a.begDate);
  const date2 = new Date(b.begDate);
  return date1 - date2;
};

export const getTimeFromMins = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  minutes < 10 && minutes !== 0 ? (minutes = `0${minutes}`) : minutes;
  hours < 10 && hours !== 0 ? (hours = `0${hours}`) : hours;
  if (hours === 0) {
    return `${minutes}M`;
  }
  return `${hours}H ${minutes}M`;
};

export const getRandomProposal = (count) => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
  const substr = text.split('.');
  const rand = getRandomInteger(1, count);
  let description = '';
  for (let i = 0; i <= rand; i++) {
    description += `${substr[i]}.`;
  }
  return description;
};

export const getOffer = () => {
  const randomPoint = POINTS[getRandomInteger(0, POINTS.length - 1)];
  const offers = [];
  const count = getRandomInteger(1, OFFERS.length - 1);
  const set = new Set();
  const getRandomOffer = () => {
    const offerIndex = getRandomInteger(1, OFFERS.length - 1);
    set.add(offerIndex);
  };
  for (let i = 0; i < count; i++) {
    getRandomOffer();
  }
  set.forEach((elem) => {
    offers.push({
      name: OFFERS[elem].name,
      title: OFFERS[elem].title,
      price: getRandomInteger(5, 70),
      isSelected: Boolean(getRandomInteger(0, 1)),
    });
  });

  const offer = {
    type: randomPoint,
    offers: offers,
  };
  return offer;
};

export const getPictureList = () => {
  const pictures = [];
  for (let i = 0; i < PICTURE_COUNT; i++) {
    const r = Math.random();
    const picturePath = `http://picsum.photos/300/200?r=${r}`;
    pictures.push({ src: picturePath, description: getRandomProposal(1) });
  }
  return { pictures };
};
