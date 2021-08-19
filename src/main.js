/* eslint-disable quotes */
import { tripSortForm } from './view/trip-sort.js';
import { siteMenu } from './view/site-menu.js';
import { filters } from './view/filters.js';
import { routeAndCost } from './view/route-and-cost';
import { tripEventsList } from './view/events-list.js';
// import { newPointForm } from './view/new-point.js';
import { editPointForm } from './view/edit-point.js';
import { point } from './view/point.js';
import { generateTask } from './mock/task';

const TASK_COUNT = 10;
const tasks = new Array(TASK_COUNT).fill().map(generateTask);
const sortDate = (a, b) => {
  const date1 = new Date(a.date);
  const date2 = new Date(b.date);
  return date1 - date2;
};

tasks.sort(sortDate);
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const sitePageBody = document.querySelector('.page-body');

const sitePageHeader = sitePageBody.querySelector('.page-header');
const siteMenuElement = sitePageHeader.querySelector('.trip-controls__navigation');
const siteTripFilters = sitePageHeader.querySelector('.trip-controls__filters');
const siteTripMain = sitePageHeader.querySelector('.trip-main');

const siteMainElement = document.querySelector('.page-main');
const siteTripEvents = siteMainElement.querySelector('.trip-events');

render(siteTripEvents, tripSortForm(), 'afterbegin');
render(siteTripEvents, tripEventsList(), 'beforeend');
render(siteMenuElement, siteMenu(), 'beforeend');
render(siteTripFilters, filters(), 'beforeend');
render(siteTripMain, routeAndCost(), 'afterbegin');

const siteTripList = siteTripEvents.querySelector('.trip-events__list');
render(siteTripList, editPointForm(), 'afterbegin');
for (let i = 0; i < TASK_COUNT; i++) {
  render(siteTripList, point(tasks[i]), 'beforeend');
}
