/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: PICTURE_COUNT, TASK_COUNT, TASK_COUNT_PER_STEP, POINTS, OFFERS, PLACES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PICTURE_COUNT", function() { return PICTURE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_COUNT", function() { return TASK_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_COUNT_PER_STEP", function() { return TASK_COUNT_PER_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTS", function() { return POINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFFERS", function() { return OFFERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACES", function() { return PLACES; });
const PICTURE_COUNT = 4;
const TASK_COUNT = 14;
const TASK_COUNT_PER_STEP = 8;
const POINTS = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant',
];
const OFFERS = [
  { name: 'business', title: 'Upgrade to a business class' },
  { name: 'radio', title: 'Choose the radio station' },
  { name: 'uber', title: 'Order Uber' },
  { name: 'rent', title: 'Rent a car' },
  { name: 'luggage', title: 'Add luggage' },
  { name: 'comfort', title: 'Switch to comfort' },
  { name: 'meal', title: 'Add meal' },
  { name: 'seats', title: 'Choose seats' },
];
const PLACES = ['Amsterdam', 'Geneva', 'Chamonix'];


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_trip_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/trip-sort.js */ "./src/view/trip-sort.js");
/* harmony import */ var _view_site_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/site-menu.js */ "./src/view/site-menu.js");
/* harmony import */ var _view_filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/filters.js */ "./src/view/filters.js");
/* harmony import */ var _view_route_and_cost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/route-and-cost */ "./src/view/route-and-cost.js");
/* harmony import */ var _view_events_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/events-list */ "./src/view/events-list.js");
/* harmony import */ var _view_edit_point_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/edit-point.js */ "./src/view/edit-point.js");
/* harmony import */ var _view_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/point */ "./src/view/point.js");
/* harmony import */ var _view_board__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/board */ "./src/view/board.js");
/* harmony import */ var _mock_task__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock/task */ "./src/mock/task.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./const.js */ "./src/const.js");
/* eslint-disable quotes */












const tasks = new Array(_const_js__WEBPACK_IMPORTED_MODULE_10__["TASK_COUNT"]).fill().map(_mock_task__WEBPACK_IMPORTED_MODULE_8__["generateTask"]);
tasks.sort(_utils_js__WEBPACK_IMPORTED_MODULE_9__["sortDate"]);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["generateTaskId"])(tasks);

const sitePageBody = document.querySelector('.page-body');

const sitePageHeader = sitePageBody.querySelector('.page-header');
const siteMenuElement = sitePageHeader.querySelector('.trip-controls__navigation');
const siteTripFilters = sitePageHeader.querySelector('.trip-controls__filters');
const siteTripMain = sitePageHeader.querySelector('.trip-main');

const siteMainElement = document.querySelector('.page-main');
// const siteTripEvents = siteMainElement.querySelector('.trip-events');
// const siteTripList = siteTripEvents.querySelector('.trip-events__list');

Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(siteMenuElement, new _view_site_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(siteTripMain, new _view_route_and_cost__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].AFTERBEGIN);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(siteTripFilters, new _view_filters_js__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

const boardComponent = new _view_board__WEBPACK_IMPORTED_MODULE_7__["default"]();
const pointListComponent = new _view_events_list__WEBPACK_IMPORTED_MODULE_4__["default"]();
Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(siteMainElement, boardComponent.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(boardComponent.getElement(), new _view_trip_sort_js__WEBPACK_IMPORTED_MODULE_0__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].AFTERBEGIN);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(boardComponent.getElement(), pointListComponent.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

// const renderTask = (taskListElement, task) => {
//   const taskComponent = new PointView(task);
//   const taskEditComponent = new EditPointView(task);

//   render(taskListElement, taskComponent.getElement(), RenderPosition.BEFOREEND);
// };

// render(
//   boardComponent.getElement(),
//   new EditPointView(tasks[0]).getElement(),
//   RenderPosition.AFTERBEGIN,
// );
// for (let i = 1; i < TASK_COUNT; i++) {
//   render(siteTripList, new PointView(tasks[i]).getElement(), RenderPosition.BEFOREEND);
//   // renderTask(siteTripList.getElement(), tasks[i]);
// }


/***/ }),

/***/ "./src/mock/task.js":
/*!**************************!*\
  !*** ./src/mock/task.js ***!
  \**************************/
/*! exports provided: generateTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTask", function() { return generateTask; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");



const generateTask = () => {
  const date = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["generateDate"])();
  const dateFrom = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).add(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(-10, 100), 'minute').toDate();
  const dateTo = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateFrom).add(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(20, 100), 'minute').toDate();
  const point = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getOffer"])();

  return {
    basePrice: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(500, 2000),
    dateFrom,
    dateTo,
    destination: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["generatePlace"])(),
    id: '',
    type: point.type,
    offers: point.offers,
    isFavorite: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
  };
};


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: RenderPosition, render, createElement, getRandomInteger, getUpperCase, sortDate, getTimeFromMins, getRandomProposal, getOffer, getPictureList, getDestination, generatePlace, generateDate, getDuration, generateTaskId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpperCase", function() { return getUpperCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDate", function() { return sortDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeFromMins", function() { return getTimeFromMins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomProposal", function() { return getRandomProposal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffer", function() { return getOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPictureList", function() { return getPictureList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDestination", function() { return getDestination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePlace", function() { return generatePlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDate", function() { return generateDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return getDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTaskId", function() { return generateTaskId; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/const.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);



const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getUpperCase = (str) => {
  const str1 = str[0].toUpperCase() + str.substring(1);
  return str1;
};

const sortDate = (a, b) => {
  const date1 = new Date(a.dateFrom);
  const date2 = new Date(b.dateFrom);
  return date1 - date2;
};

const getTimeFromMins = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  minutes < 10 && minutes !== 0 ? (minutes = `0${minutes}`) : minutes;
  hours < 10 && hours !== 0 ? (hours = `0${hours}`) : hours;
  if (hours === 0) {
    return `${minutes}M`;
  }
  return `${hours}H ${minutes}M`;
};

const getRandomProposal = (count) => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
  const substr = text.split('.');
  const rand = getRandomInteger(1, count);
  let description = '';
  for (let i = 0; i <= rand; i++) {
    description += `${substr[i]}.`;
  }
  return description;
};

const getOffer = () => {
  const randomPoint = _const__WEBPACK_IMPORTED_MODULE_0__["POINTS"][getRandomInteger(0, _const__WEBPACK_IMPORTED_MODULE_0__["POINTS"].length - 1)];
  const offers = [];
  const count = getRandomInteger(1, _const__WEBPACK_IMPORTED_MODULE_0__["OFFERS"].length - 1);
  const set = new Set();
  const getRandomOffer = () => {
    const offerIndex = getRandomInteger(1, _const__WEBPACK_IMPORTED_MODULE_0__["OFFERS"].length - 1);
    set.add(offerIndex);
  };
  for (let i = 0; i < count; i++) {
    getRandomOffer();
  }
  set.forEach((elem) => {
    offers.push({
      title: _const__WEBPACK_IMPORTED_MODULE_0__["OFFERS"][elem].title,
      price: getRandomInteger(5, 70),
    });
  });

  const offer = {
    type: randomPoint,
    offers: offers,
  };
  return offer;
};

const getPictureList = () => {
  const pictures = [];
  for (let i = 0; i < _const__WEBPACK_IMPORTED_MODULE_0__["PICTURE_COUNT"]; i++) {
    const r = Math.random();
    const picturePath = `http://picsum.photos/300/200?r=${r}`;
    pictures.push({ src: picturePath, description: getRandomProposal(1) });
  }
  return { pictures };
};

const getDestination = () => {
  const destination = [];
  _const__WEBPACK_IMPORTED_MODULE_0__["PLACES"].forEach((elem) => {
    destination.push({
      name: elem,
      description: getRandomProposal(5),
      pictures: getPictureList().pictures,
    });
  });
  return destination;
};

const generatePlace = () => {
  const destination = getDestination();
  const randomIndex = getRandomInteger(0, destination.length - 1);
  return destination[randomIndex];
};

const generateDate = (maxDaysGap = 7, param = 'day') => {
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  return dayjs__WEBPACK_IMPORTED_MODULE_1___default()().add(daysGap, param).toDate();
};

const getDuration = (dateFrom, dateTo) => {
  const diff = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dateTo).diff(dateFrom) / (1000 * 60);
  const duration = getTimeFromMins(diff);
  return duration;
};

const generateTaskId = (tasks) => {
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].id = i;
  }
};


/***/ }),

/***/ "./src/view/board.js":
/*!***************************!*\
  !*** ./src/view/board.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

const createBoardTemplate = () => {
  `<section class="trip-events">
<h2 class="visually-hidden">Trip events</h2>
</section>`;
};
class Board {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createBoardTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/destination-list.js":
/*!**************************************!*\
  !*** ./src/view/destination-list.js ***!
  \**************************************/
/*! exports provided: destinationListTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destinationListTemplate", function() { return destinationListTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DestinationList; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

const destination = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDestination"])();
const destinationListTemplate = () => {
  let list = '';
  destination.forEach((elem) => {
    list += `<option value=${elem.name}></option>`;
  });
  return list;
};
class DestinationList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return destinationListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/edit-point.js":
/*!********************************!*\
  !*** ./src/view/edit-point.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditPoint; });
/* harmony import */ var _event_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-type */ "./src/view/event-type.js");
/* harmony import */ var _offers_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers-selector */ "./src/view/offers-selector.js");
/* harmony import */ var _destination_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./destination-list */ "./src/view/destination-list.js");
/* harmony import */ var _photos_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos-container */ "./src/view/photos-container.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils.js");






const createEditPointTemplate = (task) => {
  const { basePrice, dateFrom, destination, dateTo, type } = task;
  const iconPath = `img/icons/${type}.png`;
  return `<form class='event event--edit' action='#' method='post'>
  <header class='event__header'>
    <div class='event__type-wrapper'>
      <label class='event__type  event__type-btn' for='event-type-toggle-1'>
        <span class='visually-hidden'>Choose event type</span>
        <img class='event__type-icon' width='17' height='17' src= ${iconPath} alt='Event type icon'>
      </label>
      <input class='event__type-toggle  visually-hidden' id='event-type-toggle-1' type='checkbox'>

      <div class='event__type-list'>
        <fieldset class='event__type-group'>
          <legend class='visually-hidden'>Event type</legend>
           ${new _event_type__WEBPACK_IMPORTED_MODULE_0__["default"]().getTemplate()}
        </fieldset>
      </div>
    </div>

    <div class='event__field-group  event__field-group--destination'>
      <label class='event__label  event__type-output' for='event-destination-1'>
        ${type}
      </label>
      <input class='event__input  event__input--destination' id='event-destination-1'
      type='text' name='event-destination' value=${destination.name} list='destination-list-1'>
      <datalist id='destination-list-1'>
        ${new _destination_list__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement()}
      </datalist>
    </div>

    <div class='event__field-group  event__field-group--time'>
      <label class='visually-hidden' for='event-start-time-1'>From</label>
      <input class='event__input  event__input--time' id='event-start-time-1' type='text' name='event-start-time' value=${dateFrom}>
      &mdash;
      <label class='visually-hidden' for='event-end-time-1'>To</label>
      <input class='event__input  event__input--time' id='event-end-time-1' type='text' name='event-end-time' value=${dateTo}>
    </div>

    <div class='event__field-group  event__field-group--price'>
      <label class='event__label' for='event-price-1'>
        <span class='visually-hidden'>Price</span>
        &euro;
      </label>
      <input class='event__input  event__input--price' id='event-price-1' type='text' name='event-price' value=${basePrice}>
    </div>

    <button class='event__save-btn  btn  btn--blue' type='submit'>Save</button>
    <button class='event__reset-btn' type='reset'>Delete</button>
    <button class='event__rollup-btn' type='button'>
      <span class='visually-hidden'>Open event</span>
    </button>
  </header>
  <section class='event__details'>
    <section class='event__section  event__section--offers'>
      <h3 class='event__section-title  event__section-title--offers'>Offers</h3>

      <div class='event__available-offers'>
      ${new _offers_selector__WEBPACK_IMPORTED_MODULE_1__["default"](task).getTemplate()}
          </div>
    </section>

    <section class='event__section  event__section--destination'>
      <h3 class='event__section-title  event__section-title--destination'>Destination</h3>
      <p class='event__destination-description'>${destination.description}</p>
      ${new _photos_container__WEBPACK_IMPORTED_MODULE_3__["default"](destination).getTemplate()}
    </section>
  </section>
</form>`;
};

const BLANK_TASK = {
  basePrice: 0,
  dateFrom: '',
  dateTo: '',
  destination: '',
  id: '',
  type: '',
  offers: '',
  isFavorite: false,
};
class EditPoint {
  constructor(task = BLANK_TASK) {
    this._task = task;
    this._element = null;
  }

  getTemplate() {
    return createEditPointTemplate(this._task);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/event-offer.js":
/*!*********************************!*\
  !*** ./src/view/event-offer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventOffer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

const createEventOfferTemplate = (task) => {
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
class EventOffer {
  constructor(task) {
    this._task = task;
    this._element = null;
  }

  getTemplate() {
    return createEventOfferTemplate(this._task);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/event-type.js":
/*!********************************!*\
  !*** ./src/view/event-type.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventType; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createEventTypeTemplate = () => {
  let list = '';
  _const_js__WEBPACK_IMPORTED_MODULE_0__["POINTS"].forEach((elem) => {
    const lowerElem = elem.toLowerCase();
    list += `<div class='event__type-item'>
  <input id= 'event-type-${lowerElem}-1' class='event__type-input  visually-hidden' type='radio' name='event-type' value='${lowerElem}'>
  <label class='event__type-label  event__type-label--${lowerElem}' for='event-type-${lowerElem}-1'>${elem}</label>
</div>`;
  });
  return list;
};
class EventType{
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createEventTypeTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/events-list.js":
/*!*********************************!*\
  !*** ./src/view/events-list.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventList; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

const createTripEventsListTemplate = () =>
  ` <ul class='trip-events__list'>
</ul>`;

class EventList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripEventsListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/filters.js":
/*!*****************************!*\
  !*** ./src/view/filters.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

const createFiltersTemplate = () =>
  `<form class='trip-filters' action='#' method='get'>
    <div class='trip-filters__filter'>
      <input id='filter-everything' class='trip-filters__filter-input  visually-hidden' type='radio' name='trip-filter' value='everything' checked>
      <label class='trip-filters__filter-label' for='filter-everything'>Everything</label>
    </div>

    <div class='trip-filters__filter'>
      <input id='filter-future' class='trip-filters__filter-input  visually-hidden' type='radio' name='trip-filter' value='future'>
      <label class='trip-filters__filter-label' for='filter-future'>Future</label>
    </div>

    <div class='trip-filters__filter'>
      <input id='filter-past' class='trip-filters__filter-input  visually-hidden' type='radio' name='trip-filter' value='past'>
      <label class='trip-filters__filter-label' for='filter-past'>Past</label>
    </div>

    <button class='visually-hidden' type='submit'>Accept filter</button>
  </form>`;
class Filters {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFiltersTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/offers-selector.js":
/*!*************************************!*\
  !*** ./src/view/offers-selector.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OffersSelector; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

const createOffersSelectorTemplate = (task) => {
  const { offers } = task;
  let list = '';
  offers.forEach((element) => {
    list += `<div class='event__offer-selector'>
    <input class='event__offer-checkbox  visually-hidden' id='event-offer-${element.name}-1' type=${element.name} name='event-offer-${element.name}' checked>
    <label class='event__offer-label' for='event-offer-${element.name}-1'>
      <span class='event__offer-title'>${element.title}</span>
      &plus;&euro;&nbsp;
      <span class='event__offer-price'>${element.price}</span>
    </label>
    </div>`;
  });
  return list;
};
class OffersSelector {
  constructor(task) {
    this._task = task;
    this._element = null;
  }

  getTemplate() {
    return createOffersSelectorTemplate(this._task);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/photos-container.js":
/*!**************************************!*\
  !*** ./src/view/photos-container.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhotosContainer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

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
class PhotosContainer {
  constructor(task) {
    this._task = task;
    this._element = null;
  }

  getTemplate() {
    return createPhotosContainerTemplate(this._task);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/point.js":
/*!***************************!*\
  !*** ./src/view/point.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _event_offer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-offer */ "./src/view/event-offer.js");




const createPointTemplate = (task) => {
  const { basePrice, dateFrom, dateTo, destination, type } = task;
  const pointDate = dateFrom !== null ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateFrom).format('MMM D') : '';
  const beginning = dateFrom !== null ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateFrom).format('HH:mm') : '';
  const ending = dateTo !== null ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateTo).format('HH:mm') : '';
  const iconPath = `img/icons/${type}.png`;
  const duration = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getDuration"])(dateFrom, dateTo);
  const eventOffers = new _event_offer__WEBPACK_IMPORTED_MODULE_2__["default"](task).getTemplate();

  return `<li class='trip-events__item'>
  <div class='event'>
    <time class='event__date' datetime='2019-03-18'>${pointDate}</time>
    <div class='event__type'>
      <img class='event__type-icon' width='42' height='42' src=${iconPath} alt='Event type icon'>
    </div>
    <h3 class='event__title'>${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getUpperCase"])(type)} ${destination.name}</h3>
    <div class='event__schedule'>
      <p class='event__time'>
        <time class='event__start-time' datetime=${beginning}>${beginning}</time>
        &mdash;
        <time class='event__end-time' datetime=${ending}>${ending}</time>
      </p>
      <p class='event__duration'>${duration}</p>
    </div>
    <p class='event__price'>
      &euro;&nbsp;<span class='event__price-value'>${basePrice}</span>
    </p>
    <h4 class='visually-hidden'>Offers:</h4>
    <ul class='event__selected-offers'>
      ${eventOffers}
    </ul>
    <button class='event__favorite-btn' type='button'>
      <span class='visually-hidden'>Add to favorite</span>
      <svg class='event__favorite-icon' width='28' height='28' viewBox='0 0 28 28'>
        <path d='M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z'/>
      </svg>
    </button>
    <button class='event__rollup-btn' type='button'>
      <span class='visually-hidden'>Open event</span>
    </button>
  </div>
</li>`;
};
class Point {
  constructor(task) {
    this._task = task;
    this._element = null;
  }

  getTemplate() {
    return createPointTemplate(this._task);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/route-and-cost.js":
/*!************************************!*\
  !*** ./src/view/route-and-cost.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RouteAndCost; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

const createRouteAndCostTemplate = () =>
  `<section class='trip-main__trip-info  trip-info'>
  <div class='trip-info__main'>
    <h1 class='trip-info__title'>Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

    <p class='trip-info__dates'>Mar 18&nbsp;&mdash;&nbsp;20</p>
  </div>

  <p class='trip-info__cost'>
    Total: &euro;&nbsp;<span class='trip-info__cost-value'>1230</span>
  </p>
</section>`;
class RouteAndCost {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createRouteAndCostTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/site-menu.js":
/*!*******************************!*\
  !*** ./src/view/site-menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMenu; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

const createSiteMenuTemplate = () => `
     <nav class='trip-controls__trip-tabs  trip-tabs'>
       <a class='trip-tabs__btn  trip-tabs__btn--active' href='#'>Table</a>
       <a class='trip-tabs__btn' href='#'>Stats</a>
     </nav>
   `;
class SiteMenu {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSiteMenuTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-sort.js":
/*!*******************************!*\
  !*** ./src/view/trip-sort.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripSortForm; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

const createTripSortFormTemplate = () =>
  `<form class='trip-events__trip-sort  trip-sort' action='#' method='get'>
<div class='trip-sort__item  trip-sort__item--day'>
  <input id='sort-day' class='trip-sort__input  visually-hidden' type='radio' name='trip-sort' value='sort-day' checked>
  <label class='trip-sort__btn' for='sort-day'>Day</label>
</div>

<div class='trip-sort__item  trip-sort__item--event'>
  <input id='sort-event' class='trip-sort__input  visually-hidden' type='radio' name='trip-sort' value='sort-event' disabled>
  <label class='trip-sort__btn' for='sort-event'>Event</label>
</div>

<div class='trip-sort__item  trip-sort__item--time'>
  <input id='sort-time' class='trip-sort__input  visually-hidden' type='radio' name='trip-sort' value='sort-time'>
  <label class='trip-sort__btn' for='sort-time'>Time</label>
</div>

<div class='trip-sort__item  trip-sort__item--price'>
  <input id='sort-price' class='trip-sort__input  visually-hidden' type='radio' name='trip-sort' value='sort-price'>
  <label class='trip-sort__btn' for='sort-price'>Price</label>
</div>

<div class='trip-sort__item  trip-sort__item--offer'>
  <input id='sort-offer' class='trip-sort__input  visually-hidden' type='radio' name='trip-sort' value='sort-offer' disabled>
  <label class='trip-sort__btn' for='sort-offer'>Offers</label>
</div>
</form>`;
class TripSortForm {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripSortFormTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map