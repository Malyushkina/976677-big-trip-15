/* eslint-disable quotes */
import { tripSortForm } from "./view/trip-sort.js";
import { siteMenu } from "./view/site-menu.js";
import { filters } from "./view/filters.js";
import { routeAndCost } from "./view/route-and-cost";
import { tripEventsList } from "./view/events-list.js";
// import { newPointForm } from "./view/new-point.js";
import { editPointForm } from "./view/edit-point.js";
import { point } from "./view/point.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const sitePageBody = document.querySelector(".page-body");

const sitePageHeader = sitePageBody.querySelector(".page-header");
const siteMenuElement = sitePageHeader.querySelector(
  ".trip-controls__navigation"
);
const siteTripFilters = sitePageHeader.querySelector(".trip-controls__filters");
const siteTripMain = sitePageHeader.querySelector(".trip-main");

const siteMainElement = document.querySelector(".page-main");
const siteTripEvents = siteMainElement.querySelector(".trip-events");

render(siteTripEvents, tripSortForm(), "afterbegin");
render(siteTripEvents, tripEventsList(), "beforeend");
render(siteMenuElement, siteMenu(), "beforeend");
render(siteTripFilters, filters(), "beforeend");
render(siteTripMain, routeAndCost(), "afterbegin");

const siteTripList = siteTripEvents.querySelector(".trip-events__list");
render(siteTripList, editPointForm(), "afterbegin");
render(siteTripList, point(), "beforeend");
render(siteTripList, point(), "beforeend");
render(siteTripList, point(), "beforeend");
