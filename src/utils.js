import dayjs from 'dayjs';

export const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};

export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getUpperCase = (str) => {
  const str1 = str[0].toUpperCase() + str.substring(1);
  return str1;
};

export const sortDate = (a, b) => {
  const date1 = new Date(a.dateFrom);
  const date2 = new Date(b.dateFrom);
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

export const getDuration = (dateFrom, dateTo) => {
  const diff = dayjs(dateTo).diff(dateFrom) / (1000 * 60);
  const duration = getTimeFromMins(diff);
  return duration;
};
export const isEscPressed = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    return true;
  }
};
