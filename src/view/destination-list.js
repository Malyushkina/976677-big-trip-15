import { destination } from '../mock/task';
export const destinationList = () => {
  let list = '';
  destination.forEach((element) => {
    list += `<option value=${element.name}></option>`;
  });
  return list;
};
