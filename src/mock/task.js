import dayjs from 'dayjs';
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
const generatePlace = () => {
  const place = [
    {
      name: 'Amsterdam',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
    },
    {
      name: 'Chamonix',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    },
    {
      name: 'Geneva',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
    },
  ];
  const randomIndex = getRandomInteger(0, place.length - 1);
  return place[randomIndex];
};
const generateDate = (maxDaysGap = 7, param = 'day') => {
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  return dayjs().add(daysGap, param).toDate();
};
const generatePoint = () => {
  const points = [
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
  const randomIndex = getRandomInteger(0, points.length - 1);
  return points[randomIndex];
};
function getTimeFromMins(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  minutes < 10 && minutes !== 0 ? (minutes = `0${minutes}`) : minutes;
  hours < 10 && hours !== 0 ? (hours = `0${hours}`) : hours;
  if (hours === 0) {
    return `${minutes}M`;
  }
  return `${hours}H ${minutes}M`;
}
export const generateTask = () => {
  const date = generateDate();
  const time1 = dayjs(date).add(getRandomInteger(-10, 100), 'minute').toDate();
  const time2 = dayjs(time1).add(getRandomInteger(20, 100), 'minute').toDate();
  const begDate = time1;
  const endDate = time2;
  const diff = dayjs(time2).diff(time1) / (1000 * 60);
  const duration = getTimeFromMins(diff);
  return {
    date,
    description: generatePlace(),
    begDate,
    endDate,
    duration,
    points: generatePoint(),
    amount: getRandomInteger(20, 100),
    offers: {
      isLuggage: Boolean(getRandomInteger(0, 1)),
      isComfort: Boolean(getRandomInteger(0, 1)),
      isMeal: Boolean(getRandomInteger(0, 1)),
      isSeats: Boolean(getRandomInteger(0, 1)),
      isTrain: Boolean(getRandomInteger(0, 1)),
    },
  };
};
