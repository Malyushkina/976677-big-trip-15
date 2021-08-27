import { createElement } from '../utils';

const createPhotosContainerTemplate = (place) => {
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
export default class PhotosContainer {
  constructor(task) {
    this._task = task;
    this._element = null;
  }

  getTemplate() {
    return createPhotosContainerTemplate(this._task);
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
