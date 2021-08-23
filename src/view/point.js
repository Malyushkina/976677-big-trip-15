import dayjs from 'dayjs';
import { getUpperCase } from '../utils';
import { eventOffer } from './event-offer';
export const point = (task) => {
  const { place, begDate, endDate, duration, points, basePrice } = task;
  const pointDate = begDate !== null ? dayjs(begDate).format('MMM D') : '';
  const beginning = begDate !== null ? dayjs(begDate).format('HH:mm') : '';
  const ending = endDate !== null ? dayjs(endDate).format('HH:mm') : '';
  const iconPath = `img/icons/${points.type}.png`;

  return `<li class='trip-events__item'>
  <div class='event'>
    <time class='event__date' datetime='2019-03-18'>${pointDate}</time>
    <div class='event__type'>
      <img class='event__type-icon' width='42' height='42' src=${iconPath} alt='Event type icon'>
    </div>
    <h3 class='event__title'>${getUpperCase(points.type)} ${place.name}</h3>
    <div class='event__schedule'>
      <p class='event__time'>
        <time class='event__start-time' datetime=${beginning}>${beginning}</time>
        &mdash;
        <time class='event__end-time' datetime=${ending}>${ending}</time>
      </p>
      <p class='event__duration'>${duration}</p>
    </div>
    <p class='event__price'>
      &euro;&nbsp;<span class='event__price-value'>${basePrice}</span>
    </p>
    <h4 class='visually-hidden'>Offers:</h4>
    <ul class='event__selected-offers'>
      ${eventOffer(task)}
    </ul>
    <button class='event__favorite-btn' type='button'>
      <span class='visually-hidden'>Add to favorite</span>
      <svg class='event__favorite-icon' width='28' height='28' viewBox='0 0 28 28'>
        <path d='M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z'/>
      </svg>
    </button>
    <button class='event__rollup-btn' type='button'>
      <span class='visually-hidden'>Open event</span>
    </button>
  </div>
</li>`;
};
