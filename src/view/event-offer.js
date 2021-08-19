export const eventOffer = (task) => {
  const { offers } = task;
  const offersMap = new Map();
  offersMap.set('isLuggage', { title: 'Add luggage', amount: 50 });
  offersMap.set('isComfort', { title: 'Switch to comfort', amount: 80 });
  offersMap.set('isMeal', { title: 'Add meal', amount: 15 });
  offersMap.set('isSeats', { title: 'Choose seats', amount: 5 });
  offersMap.set('isTrain', { title: 'Travel by Train', amount: 40 });
  let list = '';
  for (const key in offers) {
    let description;
    offers[key] === true ? (description = offersMap.get(key)) : null;
    if (description) {
      const title = description.title;
      const amount = description.amount;
      list += `<li class='event__offer'>
      <span class='event__offer-title'> ${title}</span>
      &plus;&euro;&nbsp;
      <span class='event__offer-price'>${amount}</span>
    </li>`;
    }
  }
  return list;
};
