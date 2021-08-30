/* eslint-disable quotes */
import TripSortFormView from './view/trip-sort.js';
import SiteMenuView from './view/site-menu.js';
import FiltersView from './view/filters.js';
import RouteAndCostView from './view/route-and-cost';
import EventListView from './view/events-list';
import EditPointView, { BLANK_TASK } from './view/edit-point.js';
import PointView from './view/point';
import BoardView from './view/board';
import NoPointView from './view/no-point';
import { generateTask } from './mock/task';
import { generateTaskId } from './mock/mocks';
import { isEscPressed } from './utils/task.js';
import { render, RenderPosition, sortDate, replace } from './utils/render.js';
import { TASK_COUNT } from './mock/mocks';

const tasks = new Array(TASK_COUNT).fill().map(generateTask);
tasks.sort(sortDate);
generateTaskId(tasks);

const sitePageBody = document.querySelector('.page-body');

const sitePageHeader = sitePageBody.querySelector('.page-header');
const siteMenuElement = sitePageHeader.querySelector('.trip-controls__navigation');
const siteTripFilters = sitePageHeader.querySelector('.trip-controls__filters');
const siteTripMain = sitePageHeader.querySelector('.trip-main');

const siteMainElement = document.querySelector('.page-main');
const siteMainContainer = siteMainElement.querySelector('.page-body__container');

render(siteMenuElement, new SiteMenuView(), RenderPosition.BEFOREEND);
render(siteTripMain, new RouteAndCostView(), RenderPosition.AFTERBEGIN);
render(siteTripFilters, new FiltersView(), RenderPosition.BEFOREEND);

const boardComponent = new BoardView();
const pointListComponent = new EventListView();
render(siteMainContainer, boardComponent, RenderPosition.AFTERBEGIN);
render(boardComponent, new TripSortFormView(), RenderPosition.AFTERBEGIN);
render(boardComponent, pointListComponent, RenderPosition.BEFOREEND);

if (tasks.every((task) => task)) {
  render(boardComponent, new NoPointView(), RenderPosition.BEFOREEND);
} else {
  render(boardComponent, new TripSortFormView(), RenderPosition.BEFOREEND);
}
const hasOpenForm = () => pointListComponent.getElement().querySelector('form') !== null;

const renderTask = (taskListElement, task) => {
  const taskComponent = new PointView(task);
  const taskEditComponent = new EditPointView(task);
  const replaceCardToForm = () => {
    replace(taskEditComponent, taskComponent);
  };

  const replaceFormToCard = () => {
    replace(taskComponent, taskEditComponent);
  };

  const onEscKeyDown = (evt) => {
    if (isEscPressed(evt)) {
      evt.preventDefault();
      replaceFormToCard();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  taskComponent.setEditClickHandler(() => {
    replaceCardToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  if (hasOpenForm()) {
    taskEditComponent.setFormSubmitHandler(() => {
      replaceFormToCard();
      document.removeEventListener('keydown', onEscKeyDown);
    });
  }

  taskEditComponent.setEditClickHandler(() => {
    replaceFormToCard();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  render(taskListElement, taskComponent, RenderPosition.AFTERBEGIN);

  if (task === BLANK_TASK) {
    replaceCardToForm();
  }
};

const buttonNew = sitePageHeader.querySelector('.trip-main__event-add-btn');

buttonNew.addEventListener('click', () => {
  renderTask(pointListComponent, BLANK_TASK);
});

for (let i = 0; i < tasks.length; i++) {
  renderTask(pointListComponent, tasks[i]);
}
