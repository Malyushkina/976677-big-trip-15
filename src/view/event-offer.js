export const eventOffer = (task) => {
  const { points } = task;
  let list = '';
  points.offers.forEach((element) => {
    element.isSelected
      ? (list += `<li class='event__offer'>
      <span class='event__offer-title'> ${element.title}</span>
      &plus;&euro;&nbsp;
      <span class='event__offer-price'>${element.price}</span>
    </li>`)
      : '';
  });
  return list;
};
