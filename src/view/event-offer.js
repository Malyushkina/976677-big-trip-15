export const eventOffer = (task) => {
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
