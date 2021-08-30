import AbstractView from './abstract';

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
export default class EventOffer extends AbstractView {
  constructor(task) {
    super();
    this._task = task;
  }

  getTemplate() {
    return createEventOfferTemplate(this._task);
  }
}
