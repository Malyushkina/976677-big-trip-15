import { createElement, getDestination } from '../utils';
const destination = getDestination();
export const destinationListTemplate = () => {
  let list = '';
  destination.forEach((elem) => {
    list += `<option value=${elem.name}></option>`;
  });
  return list;
};
export default class DestinationList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return destinationListTemplate();
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
