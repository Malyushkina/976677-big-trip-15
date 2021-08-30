import EventTypeView from './event-type';
import OffersSelectorView from './offers-selector';
import DestinationListView from './destination-list';
import PhotosContainerView from './photos-container';
import AbstractView from './abstract';

export const BLANK_TASK = {
  basePrice: 0,
  dateFrom: new Date(),
  dateTo: new Date(),
  destination: {
    name: 'Geneva',
    description:
      'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.',
    pictures: [
      { src: 'img/photos/1.jpg', description: 'Event photo' },
      { src: 'img/photos/2.jpg', description: 'Event photo' },
      { src: 'img/photos/3.jpg', description: 'Event photo' },
      { src: 'img/photos/4.jpg', description: 'Event photo' },
      { src: 'img/photos/4.jpg', description: 'Event photo' },
    ],
  },
  id: '',
  type: 'flight',
  offers: [
    {
      title: 'Add luggage',
      price: 30,
    },
    {
      title: 'Switch to comfort class',
      price: 100,
    },
    {
      title: 'Add meal',
      price: 15,
    },
    {
      title: 'Choose seats',
      price: 5,
    },
  ],
  isFavorite: false,
};
const createEditPointTemplate = (task) => {
  const { basePrice, dateFrom, destination, dateTo, type } = task;
  const iconPath = `img/icons/${type}.png`;

  return `<form class='event event--edit' action='#' method='post'>
           <header class='event__header'>
             <div class='event__type-wrapper'>
               <label class='event__type  event__type-btn' for='event-type-toggle-1'>
                 <span class='visually-hidden'>Choose event type</span>
                 <img class='event__type-icon' width='17' height='17' src= ${iconPath} alt='Event type icon'>
               </label>
               <input class='event__type-toggle  visually-hidden' id='event-type-toggle-1' type='checkbox'>

               <div class='event__type-list'>
                 <fieldset class='event__type-group'>
                   <legend class='visually-hidden'>Event type</legend>
                    ${new EventTypeView().getTemplate()}
                 </fieldset>
               </div>
             </div>

             <div class='event__field-group  event__field-group--destination'>
               <label class='event__label  event__type-output' for='event-destination-1'>
                 ${type}
               </label>
               <input class='event__input  event__input--destination' id='event-destination-1'
               type='text' name='event-destination'
               value=${destination.name} list='destination-list-1'>
               <datalist id='destination-list-1'>
                 ${new DestinationListView().getElement()}
               </datalist>
             </div>

             <div class='event__field-group  event__field-group--time'>
               <label class='visually-hidden' for='event-start-time-1'>From</label>
               <input class='event__input  event__input--time' id='event-start-time-1' type='text' name='event-start-time' value=${dateFrom}>
               &mdash;
               <label class='visually-hidden' for='event-end-time-1'>To</label>
               <input class='event__input  event__input--time' id='event-end-time-1' type='text' name='event-end-time' value=${dateTo}>
             </div>

             <div class='event__field-group  event__field-group--price'>
               <label class='event__label' for='event-price-1'>
                 <span class='visually-hidden'>Price</span>
                 &euro;
               </label>
               <input class='event__input  event__input--price' id='event-price-1' type='text' name='event-price' value=${basePrice}>
             </div>

             <button class='event__save-btn  btn  btn--blue' type='submit'>Save</button>
             <button class='event__reset-btn' type='reset'>Delete</button>
             <button class='event__rollup-btn' type='button'>
               <span class='visually-hidden'>Open event</span>
             </button>
           </header>
           <section class='event__details'>
             <section class='event__section  event__section--offers'>
               <h3 class='event__section-title  event__section-title--offers'>Offers</h3>

               <div class='event__available-offers'>
               ${new OffersSelectorView(task).getTemplate()}
                   </div>
             </section>

             <section class='event__section  event__section--destination'>
               <h3 class='event__section-title  event__section-title--destination'>Destination</h3>
               <p class='event__destination-description'>${destination.description}</p>
               ${new PhotosContainerView(destination).getTemplate()}
             </section>
           </section>
         </form>`;
};
export default class EditPoint extends AbstractView {
  constructor(task = BLANK_TASK) {
    super();
    this._task = task;
  }

  getTemplate() {
    return createEditPointTemplate(this._task);
  }
}
