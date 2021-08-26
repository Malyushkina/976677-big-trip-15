import { POINTS } from '../const.js';
import { createElement } from '../utils';
const createEventTypeTemplate = () => {
  let list = '';
  POINTS.forEach((elem) => {
    const lowerElem = elem.toLowerCase();
    list += `<div class='event__type-item'>
  <input id= 'event-type-${lowerElem}-1' class='event__type-input  visually-hidden' type='radio' name='event-type' value='${lowerElem}'>
  <label class='event__type-label  event__type-label--${lowerElem}' for='event-type-${lowerElem}-1'>${elem}</label>
</div>`;
  });
  return list;
};
export default class EventType{
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createEventTypeTemplate();
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
