import { DESTINATION } from '../const';
export const destinationList = () => {
  let list = '';
  DESTINATION.forEach((element) => {
    list += `<option value=${element.name}></option>`;
  });
  return list;
};
