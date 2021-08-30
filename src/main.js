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
import { sortDate, render, RenderPosition, isEscPressed } from './utils.js';
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

render(siteMenuElement, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);
render(siteTripMain, new RouteAndCostView().getElement(), RenderPosition.AFTERBEGIN);
render(siteTripFilters, new FiltersView().getElement(), RenderPosition.BEFOREEND);

const boardComponent = new BoardView();
const pointListComponent = new EventListView();
render(siteMainContainer, boardComponent.getElement(), RenderPosition.AFTERBEGIN);
render(boardComponent.getElement(), new TripSortFormView().getElement(), RenderPosition.AFTERBEGIN);
render(boardComponent.getElement(), pointListComponent.getElement(), RenderPosition.BEFOREEND);

if (tasks.every((task) => task)) {
  render(boardComponent.getElement(), new NoPointView().getElement(), RenderPosition.BEFOREEND);
} else {
  render(
    boardComponent.getElement(),
    new TripSortFormView().getElement(),
    RenderPosition.BEFOREEND
  );
}
const hasOpenForm = () => pointListComponent.getElement().querySelector('form') !== null;

const renderTask = (taskListElement, task) => {
  const taskComponent = new PointView(task);
  const taskEditComponent = new EditPointView(task);
  const replaceCardToForm = () => {
    taskListElement.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  };

  const replaceFormToCard = () => {
    taskListElement.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
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

  render(taskListElement, taskComponent.getElement(), RenderPosition.AFTERBEGIN);

  if (task === BLANK_TASK) {
    replaceCardToForm();
  }
};

const buttonNew = sitePageHeader.querySelector('.trip-main__event-add-btn');

buttonNew.addEventListener('click', () => {
  renderTask(pointListComponent.getElement(), BLANK_TASK);
});

for (let i = 0; i < tasks.length; i++) {
  renderTask(pointListComponent.getElement(), tasks[i]);
}
