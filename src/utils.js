import { PICTURE_COUNT } from './const';
export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
export const upperCase = (str) => {
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
export const pictureList = () => {
  const getPicture = () => {
    const r = Math.random();
    const picturePath = `http://picsum.photos/300/200?r=${r}`;
    return { src: picturePath, description: 'Chamonix parliament building' };
  };
  const pictures = new Array(PICTURE_COUNT).fill().map(getPicture);
  return { pictures };
};
