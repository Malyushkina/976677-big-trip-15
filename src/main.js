/* eslint-disable quotes */
import TripSortFormView from './view/trip-sort.js';
import SiteMenuView from './view/site-menu.js';
import FiltersView from './view/filters.js';
import RouteAndCostView from './view/route-and-cost';
import EventListView from './view/events-list';
import EditPointView from './view/edit-point.js';
import PointView from './view/point';
import BoardView from './view/board';
import NoPointView from './view/no-point';
import { generateTask } from './mock/task';
import { sortDate, generateTaskId, render, RenderPosition } from './utils.js';
import { TASK_COUNT } from './const.js';

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
  render(boardComponent.getElement(), new TripSortFormView().getElement(), RenderPosition.BEFOREEND);
}
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
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceFormToCard();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };
  taskComponent
    .getElement()
    .querySelector('.event__rollup-btn')
    .addEventListener('click', () => {
      replaceCardToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });
  if (taskListElement.querySelector('.event--edit')) {
    taskEditComponent
      .getElement()
      .querySelector('form')
      .addEventListener('submit', (evt) => {
        evt.preventDefault();
        replaceFormToCard();
      });
    document.removeEventListener('keydown', onEscKeyDown);
  }
  taskEditComponent
    .getElement()
    .querySelector('.event__rollup-btn')
    .addEventListener('click', (evt) => {
      evt.preventDefault();
      replaceFormToCard();
    });
  render(taskListElement, taskComponent.getElement(), RenderPosition.BEFOREEND);
};

for (let i = 0; i < TASK_COUNT; i++) {
  renderTask(pointListComponent.getElement(), tasks[i]);
}
