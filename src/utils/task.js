import dayjs from 'dayjs';

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
