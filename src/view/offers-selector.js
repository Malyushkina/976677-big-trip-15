import { createElement } from '../utils';
const createOffersSelectorTemplate = (task) => {
  const { offers } = task;
  let list = '';
  offers.forEach((element) => {
    list += `<div class='event__offer-selector'>
    <input class='event__offer-checkbox  visually-hidden' id='event-offer-${element.name}-1' type=${element.name} name='event-offer-${element.name}' checked>
    <label class='event__offer-label' for='event-offer-${element.name}-1'>
      <span class='event__offer-title'>${element.title}</span>
      &plus;&euro;&nbsp;
      <span class='event__offer-price'>${element.price}</span>
    </label>
    </div>`;
  });
  return list;
};
export default class OffersSelector {
  constructor(task) {
    this._task = task;
    this._element = null;
  }

  getTemplate() {
    return createOffersSelectorTemplate(this._task);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
