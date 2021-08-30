import { getDestination } from '../mock/mocks';
import AbstractView from './abstract';

const destination = getDestination();
const destinationListTemplate = () => {
  let list = '';
  destination.forEach((elem) => {
    list += `<option value=${elem.name}></option>`;
  });

  return list;
};
export default class DestinationList extends AbstractView {
  getTemplate() {
    return destinationListTemplate();
  }
}
