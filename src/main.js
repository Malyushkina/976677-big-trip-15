/* eslint-disable quotes */
import TripSortFormView from './view/trip-sort.js';
import SiteMenuView from './view/site-menu.js';
import FiltersView from './view/filters.js';
import RouteAndCostView from './view/route-and-cost';

import EditPointView from './view/edit-point.js';
import { generateTask } from './mock/task';
import { sortDate, generateTaskId, render, RenderPosition } from './utils.js';
import { TASK_COUNT } from './const.js';
import PointView from './view/point';

const tasks = new Array(TASK_COUNT).fill().map(generateTask);
tasks.sort(sortDate);
generateTaskId(tasks);

const sitePageBody = document.querySelector('.page-body');

const sitePageHeader = sitePageBody.querySelector('.page-header');
const siteMenuElement = sitePageHeader.querySelector('.trip-controls__navigation');
const siteTripFilters = sitePageHeader.querySelector('.trip-controls__filters');
const siteTripMain = sitePageHeader.querySelector('.trip-main');

const siteMainElement = document.querySelector('.page-main');
const siteTripEvents = siteMainElement.querySelector('.trip-events');
const siteTripList = siteTripEvents.querySelector('.trip-events__list');

render(siteTripEvents, new TripSortFormView().getElement(), RenderPosition.AFTERBEGIN);
render(siteMenuElement, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);
render(siteTripFilters, new FiltersView().getElement(), RenderPosition.BEFOREEND);
render(siteTripMain, new RouteAndCostView().getElement(), RenderPosition.AFTERBEGIN);

render(siteTripList, new EditPointView(tasks[0]).getElement(), RenderPosition.AFTERBEGIN);
for (let i = 1; i < TASK_COUNT; i++) {
  render(siteTripList, new PointView(tasks[i]).getElement(), RenderPosition.BEFOREEND);
}
