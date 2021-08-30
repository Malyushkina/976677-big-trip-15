import { POINTS } from '../consts';
import { getRandomInteger } from '../utils';
import dayjs from 'dayjs';

export const PICTURE_COUNT = 4;
export const TASK_COUNT = 20;

export const OFFERS = [
  { name: 'business', title: 'Upgrade to a business class' },
  { name: 'radio', title: 'Choose the radio station' },
  { name: 'uber', title: 'Order Uber' },
  { name: 'rent', title: 'Rent a car' },
  { name: 'luggage', title: 'Add luggage' },
  { name: 'comfort', title: 'Switch to comfort' },
  { name: 'meal', title: 'Add meal' },
  { name: 'seats', title: 'Choose seats' },
];
export const PLACES = ['Amsterdam', 'Geneva', 'Chamonix'];

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
      title: OFFERS[elem].title,
      price: getRandomInteger(5, 70),
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

export const getDestination = () => {
  const destination = [];
  PLACES.forEach((elem) => {
    destination.push({
      name: elem,
      description: getRandomProposal(5),
      pictures: getPictureList().pictures,
    });
  });

  return destination;
};

export const generatePlace = () => {
  const destination = getDestination();
  const randomIndex = getRandomInteger(0, destination.length - 1);

  return destination[randomIndex];
};

export const generateDate = (maxDaysGap = 7, param = 'day') => {
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

  return dayjs().add(daysGap, param).toDate();
};
export const generateTaskId = (tasks) => {
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].id = i;
  }
};
