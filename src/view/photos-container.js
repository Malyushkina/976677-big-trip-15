export const photosContainer = (place) => {
  const { pictures } = place;
  let list = '';
  pictures.forEach((elem) => {
    const src = elem.src;
    const description = elem.description;
    list += `<img class='event__photo' src=${src} alt=${description}>`;
  });
  return `<div class='event__photos-container'>
  <div class='event__photos-tape'>
  ${list}
  </div>
  </div>`;
};
