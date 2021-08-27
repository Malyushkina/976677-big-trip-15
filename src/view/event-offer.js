import { createElement } from '../utils';

const createEventOfferTemplate = (task) => {
  const { offers } = task;
  let list = '';
  offers.forEach((element) => {
    element
      ? (list += `<li class='event__offer'>
                    <span class='event__offer-title'> ${element.title}</span>
                    &plus;&euro;&nbsp;
                    <span class='event__offer-price'>${element.price}</span>
                  </li>`)
      : '';
  });

  return list;
};
export default class EventOffer {
  constructor(task) {
    this._task = task;
    this._element = null;
  }

  getTemplate() {
    return createEventOfferTemplate(this._task);
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
