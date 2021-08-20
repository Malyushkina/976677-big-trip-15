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
/*! exports provided: POINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTS", function() { return POINTS; });
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
/* harmony import */ var _view_events_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/events-list.js */ "./src/view/events-list.js");
/* harmony import */ var _view_new_point_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/new-point.js */ "./src/view/new-point.js");
/* harmony import */ var _view_edit_point_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/edit-point.js */ "./src/view/edit-point.js");
/* harmony import */ var _view_point_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/point.js */ "./src/view/point.js");
/* harmony import */ var _mock_task__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock/task */ "./src/mock/task.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* eslint-disable quotes */











const TASK_COUNT = 10;
const tasks = new Array(TASK_COUNT).fill().map(_mock_task__WEBPACK_IMPORTED_MODULE_8__["generateTask"]);

tasks.sort(_utils_js__WEBPACK_IMPORTED_MODULE_9__["sortDate"]);
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

render(siteTripEvents, Object(_view_trip_sort_js__WEBPACK_IMPORTED_MODULE_0__["tripSortForm"])(), 'afterbegin');
render(siteTripEvents, Object(_view_events_list_js__WEBPACK_IMPORTED_MODULE_4__["tripEventsList"])(), 'beforeend');
render(siteMenuElement, Object(_view_site_menu_js__WEBPACK_IMPORTED_MODULE_1__["siteMenu"])(), 'beforeend');
render(siteTripFilters, Object(_view_filters_js__WEBPACK_IMPORTED_MODULE_2__["filters"])(), 'beforeend');
render(siteTripMain, Object(_view_route_and_cost__WEBPACK_IMPORTED_MODULE_3__["routeAndCost"])(), 'afterbegin');

const siteTripList = siteTripEvents.querySelector('.trip-events__list');
render(siteTripList, Object(_view_edit_point_js__WEBPACK_IMPORTED_MODULE_6__["editPointForm"])(tasks[0]), 'afterbegin');
for (let i = 1; i < TASK_COUNT; i++) {
  render(siteTripList, Object(_view_point_js__WEBPACK_IMPORTED_MODULE_7__["point"])(tasks[i]), 'beforeend');
}
const newEvent = () => render(siteTripList, Object(_view_new_point_js__WEBPACK_IMPORTED_MODULE_5__["newPointForm"])(), 'afterbegin');


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



const generatePlace = () => {
  const r = Math.random();
  const picturePath = `http://picsum.photos/300/200?r=${r}`;
  const destination = [
    {
      name: 'Amsterdam',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
      pictures: [
        {
          src: picturePath,
          description: 'Amsterdam parliament building',
        },
      ],
    },
    {
      name: 'Chamonix',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
      pictures: [
        {
          src: picturePath,
          description: 'Chamonix parliament building',
        },
      ],
    },
    {
      name: 'Geneva',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
      pictures: [
        {
          src: picturePath,
          description: 'Geneva parliament building',
        },
      ],
    },
  ];
  const randomIndex = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, destination.length - 1);
  return destination[randomIndex];
};

const generateDate = (maxDaysGap = 7, param = 'day') => {
  const daysGap = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(-maxDaysGap, maxDaysGap);
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(daysGap, param).toDate();
};
const generatePoint = () => {
  const pointsOffer = [
    {
      type: 'taxi',
      offers: [
        {
          name: 'business',
          title: 'Upgrade to a business class',
          price: 120,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
        {
          name: 'radio',
          title: 'Choose the radio station',
          price: 60,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
        {
          name: 'uber',
          title: 'Order Uber',
          price: 20,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
      ],
    },
    {
      type: 'bus',
      offers: [
        {
          name: 'business',
          title: 'Upgrade to a business class',
          price: 120,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
        {
          name: 'radio',
          title: 'Choose the radio station',
          price: 60,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
      ],
    },
    {
      type: 'train',
      offers: [
        {
          name: 'business',
          title: 'Upgrade to a business class',
          price: 120,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
        {
          name: 'radio',
          title: 'Choose the radio station',
          price: 60,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
      ],
    },
    {
      type: 'ship',
      offers: [
        {
          name: 'business',
          title: 'Upgrade to a business class',
          price: 120,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
        {
          name: 'radio',
          title: 'Choose the radio station',
          price: 60,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
      ],
    },
    {
      type: 'drive',
      offers: [
        {
          name: 'business',
          title: 'Upgrade to a business class',
          price: 120,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },

        {
          name: 'rent',
          title: 'Rent a car',
          price: 200,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
      ],
    },
    {
      type: 'flight',
      offers: [
        {
          name: 'luggage',
          title: 'Add luggage',
          price: 30,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
        {
          name: 'comfort',
          title: 'Switch to comfort',
          price: 100,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
        { name: 'meal', title: 'Add meal', price: 15, isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)) },
        {
          name: 'seats',
          title: 'Choose seats',
          price: 5,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
        {
          name: 'train',
          title: 'Travel by train',
          price: 40,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
      ],
    },
    {
      type: 'check-in',
      offers: [
        {
          name: 'breakfast',
          title: 'Add breakfast',
          price: 120,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
      ],
    },
    {
      type: 'sightseeing',
      offers: [
        {
          name: 'tickets',
          title: 'Book tickets',
          price: 40,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
        {
          name: 'lunch',
          title: 'Lunch in city ',
          price: 30,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
      ],
    },
    {
      type: 'restaurant',
      offers: [
        {
          name: 'lunch',
          title: 'Lunch in city ',
          price: 30,
          isSelected: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
        },
      ],
    },
  ];
  const randomIndex = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, pointsOffer.length - 1);
  return pointsOffer[randomIndex];
};

const generateTask = () => {
  const date = generateDate();
  const time1 = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).add(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(-10, 100), 'minute').toDate();
  const time2 = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time1).add(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(20, 100), 'minute').toDate();
  const begDate = time1;
  const endDate = time2;
  const diff = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time2).diff(time1) / (1000 * 60);
  const duration = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTimeFromMins"])(diff);
  const place = generatePlace();
  return {
    place: place.name,
    description: place.description,
    begDate,
    endDate,
    duration,
    points: generatePoint(),
    basePrice: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(500, 2000),
    isFavorite: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
  };
};


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomInteger, upperCase, sortDate, getTimeFromMins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upperCase", function() { return upperCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDate", function() { return sortDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeFromMins", function() { return getTimeFromMins; });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
const upperCase = (str) => {
  const str1 = str[0].toUpperCase() + str.substring(1);
  return str1;
};
const sortDate = (a, b) => {
  const date1 = new Date(a.begDate);
  const date2 = new Date(b.begDate);
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


/***/ }),

/***/ "./src/view/edit-point.js":
/*!********************************!*\
  !*** ./src/view/edit-point.js ***!
  \********************************/
/*! exports provided: editPointForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPointForm", function() { return editPointForm; });
/* harmony import */ var _event_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-type */ "./src/view/event-type.js");
/* harmony import */ var _offers_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers-selector */ "./src/view/offers-selector.js");


const editPointForm = (task = {}) => {
  const { points, place, description, begDate, endDate, basePrice } = task;
  const iconPath = `img/icons/${points.type}.png`;
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
           ${Object(_event_type__WEBPACK_IMPORTED_MODULE_0__["eventType"])()}
        </fieldset>
      </div>
    </div>

    <div class='event__field-group  event__field-group--destination'>
      <label class='event__label  event__type-output' for='event-destination-1'>
        ${points.type}
      </label>
      <input class='event__input  event__input--destination' id='event-destination-1' type='text' name='event-destination' value=${place} list='destination-list-1'>
      <datalist id='destination-list-1'>
        <option value='Amsterdam'></option>
        <option value='Geneva'></option>
        <option value='Chamonix'></option>
      </datalist>
    </div>

    <div class='event__field-group  event__field-group--time'>
      <label class='visually-hidden' for='event-start-time-1'>From</label>
      <input class='event__input  event__input--time' id='event-start-time-1' type='text' name='event-start-time' value=${begDate}>
      &mdash;
      <label class='visually-hidden' for='event-end-time-1'>To</label>
      <input class='event__input  event__input--time' id='event-end-time-1' type='text' name='event-end-time' value=${endDate}>
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
      ${Object(_offers_selector__WEBPACK_IMPORTED_MODULE_1__["offersSelector"])(task)}
          </div>
    </section>

    <section class='event__section  event__section--destination'>
      <h3 class='event__section-title  event__section-title--destination'>Destination</h3>
      <p class='event__destination-description'>${description}</p>
    </section>
  </section>
</form>`;
};


/***/ }),

/***/ "./src/view/event-offer.js":
/*!*********************************!*\
  !*** ./src/view/event-offer.js ***!
  \*********************************/
/*! exports provided: eventOffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventOffer", function() { return eventOffer; });
const eventOffer = (task) => {
  const { points } = task;
  let list = '';
  points.offers.forEach((element) => {
    element.isSelected
      ? (list += `<li class='event__offer'>
      <span class='event__offer-title'> ${element.title}</span>
      &plus;&euro;&nbsp;
      <span class='event__offer-price'>${element.price}</span>
    </li>`)
      : '';
  });
  return list;
};


/***/ }),

/***/ "./src/view/event-type.js":
/*!********************************!*\
  !*** ./src/view/event-type.js ***!
  \********************************/
/*! exports provided: eventType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventType", function() { return eventType; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");

const eventType = () => {
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


/***/ }),

/***/ "./src/view/events-list.js":
/*!*********************************!*\
  !*** ./src/view/events-list.js ***!
  \*********************************/
/*! exports provided: tripEventsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripEventsList", function() { return tripEventsList; });
const tripEventsList = () =>
  ` <ul class='trip-events__list'>
</ul>`;



/***/ }),

/***/ "./src/view/filters.js":
/*!*****************************!*\
  !*** ./src/view/filters.js ***!
  \*****************************/
/*! exports provided: filters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
const filters = () => (
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
  </form>`);


/***/ }),

/***/ "./src/view/new-point.js":
/*!*******************************!*\
  !*** ./src/view/new-point.js ***!
  \*******************************/
/*! exports provided: newPointForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newPointForm", function() { return newPointForm; });
/* harmony import */ var _event_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-type */ "./src/view/event-type.js");

const newPointForm = (task = {}) => {
  const { points, place, description, begDate, endDate, basePrice } = task;
  const iconPath = `img/icons/${points.type}.png`;
  return `<form class='event event--edit' action='#' method='post'>
  <header class='event__header'>
    <div class='event__type-wrapper'>
      <label class='event__type  event__type-btn' for='event-type-toggle-1'>
        <span class='visually-hidden'>Choose event type</span>
        <img class='event__type-icon' width='17' height='17' src='img/icons/flight.png' alt='Event type icon'>
      </label>
      <input class='event__type-toggle  visually-hidden' id='event-type-toggle-1' type='checkbox'>

      <div class='event__type-list'>
        <fieldset class='event__type-group'>
          <legend class='visually-hidden'>Event type</legend>
          ${Object(_event_type__WEBPACK_IMPORTED_MODULE_0__["eventType"])()}
        </fieldset>
      </div>
    </div>

    <div class='event__field-group  event__field-group--destination'>
      <label class='event__label  event__type-output' for='event-destination-1'>
        Flight
      </label>
      <input class='event__input  event__input--destination' id='event-destination-1' type='text' name='event-destination' value='Geneva' list='destination-list-1'>
      <datalist id='destination-list-1'>
        <option value='Amsterdam'></option>
        <option value='Geneva'></option>
        <option value='Chamonix'></option>
      </datalist>
    </div>

    <div class='event__field-group  event__field-group--time'>
      <label class='visually-hidden' for='event-start-time-1'>From</label>
      <input class='event__input  event__input--time' id='event-start-time-1' type='text' name='event-start-time' value='19/03/19 00:00'>
      &mdash;
      <label class='visually-hidden' for='event-end-time-1'>To</label>
      <input class='event__input  event__input--time' id='event-end-time-1' type='text' name='event-end-time' value='19/03/19 00:00'>
    </div>

    <div class='event__field-group  event__field-group--price'>
      <label class='event__label' for='event-price-1'>
        <span class='visually-hidden'>Price</span>
        &euro;
      </label>
      <input class='event__input  event__input--price' id='event-price-1' type='text' name='event-price' value=''>
    </div>

    <button class='event__save-btn  btn  btn--blue' type='submit'>Save</button>
    <button class='event__reset-btn' type='reset'>Cancel</button>
  </header>
  <section class='event__details'>
    <section class='event__section  event__section--offers'>
      <h3 class='event__section-title  event__section-title--offers'>Offers</h3>

      <div class='event__available-offers'>
        <div class='event__offer-selector'>
          <input class='event__offer-checkbox  visually-hidden' id='event-offer-luggage-1' type='checkbox' name='event-offer-luggage' checked>
          <label class='event__offer-label' for='event-offer-luggage-1'>
            <span class='event__offer-title'>Add luggage</span>
            &plus;&euro;&nbsp;
            <span class='event__offer-price'>30</span>
          </label>
        </div>

        <div class='event__offer-selector'>
          <input class='event__offer-checkbox  visually-hidden' id='event-offer-comfort-1' type='checkbox' name='event-offer-comfort' checked>
          <label class='event__offer-label' for='event-offer-comfort-1'>
            <span class='event__offer-title'>Switch to comfort class</span>
            &plus;&euro;&nbsp;
            <span class='event__offer-price'>100</span>
          </label>
        </div>

        <div class='event__offer-selector'>
          <input class='event__offer-checkbox  visually-hidden' id='event-offer-meal-1' type='checkbox' name='event-offer-meal'>
          <label class='event__offer-label' for='event-offer-meal-1'>
            <span class='event__offer-title'>Add meal</span>
            &plus;&euro;&nbsp;
            <span class='event__offer-price'>15</span>
          </label>
        </div>

        <div class='event__offer-selector'>
          <input class='event__offer-checkbox  visually-hidden' id='event-offer-seats-1' type='checkbox' name='event-offer-seats'>
          <label class='event__offer-label' for='event-offer-seats-1'>
            <span class='event__offer-title'>Choose seats</span>
            &plus;&euro;&nbsp;
            <span class='event__offer-price'>5</span>
          </label>
        </div>

        <div class='event__offer-selector'>
          <input class='event__offer-checkbox  visually-hidden' id='event-offer-train-1' type='checkbox' name='event-offer-train'>
          <label class='event__offer-label' for='event-offer-train-1'>
            <span class='event__offer-title'>Travel by train</span>
            &plus;&euro;&nbsp;
            <span class='event__offer-price'>40</span>
          </label>
        </div>
      </div>
    </section>

    <section class='event__section  event__section--destination'>
      <h3 class='event__section-title  event__section-title--destination'>Destination</h3>
      <p class='event__destination-description'>Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>

      <div class='event__photos-container'>
        <div class='event__photos-tape'>
          <img class='event__photo' src='img/photos/1.jpg' alt='Event photo'>
          <img class='event__photo' src='img/photos/2.jpg' alt='Event photo'>
          <img class='event__photo' src='img/photos/3.jpg' alt='Event photo'>
          <img class='event__photo' src='img/photos/4.jpg' alt='Event photo'>
          <img class='event__photo' src='img/photos/5.jpg' alt='Event photo'>
        </div>
      </div>
    </section>
  </section>
  </form>`;
};


/***/ }),

/***/ "./src/view/offers-selector.js":
/*!*************************************!*\
  !*** ./src/view/offers-selector.js ***!
  \*************************************/
/*! exports provided: offersSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offersSelector", function() { return offersSelector; });
const offersSelector = (task) => {
  const { points } = task;
  let list = '';
  points.offers.forEach((element) => {
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


/***/ }),

/***/ "./src/view/point.js":
/*!***************************!*\
  !*** ./src/view/point.js ***!
  \***************************/
/*! exports provided: point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _event_offer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-offer */ "./src/view/event-offer.js");



const point = (task) => {
  const { place, begDate, endDate, duration, points, basePrice } = task;
  const pointDate = begDate !== null ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(begDate).format('MMM D') : '';
  const beginning = begDate !== null ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(begDate).format('HH:mm') : '';
  const ending = endDate !== null ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endDate).format('HH:mm') : '';
  const iconPath = `img/icons/${points.type}.png`;

  return `<li class='trip-events__item'>
  <div class='event'>
    <time class='event__date' datetime='2019-03-18'>${pointDate}</time>
    <div class='event__type'>
      <img class='event__type-icon' width='42' height='42' src=${iconPath} alt='Event type icon'>
    </div>
    <h3 class='event__title'>${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["upperCase"])(points.type)} ${place}</h3>
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
      ${Object(_event_offer__WEBPACK_IMPORTED_MODULE_2__["eventOffer"])(task)}
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


/***/ }),

/***/ "./src/view/route-and-cost.js":
/*!************************************!*\
  !*** ./src/view/route-and-cost.js ***!
  \************************************/
/*! exports provided: routeAndCost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeAndCost", function() { return routeAndCost; });
const routeAndCost = () =>
  `<section class='trip-main__trip-info  trip-info'>
  <div class='trip-info__main'>
    <h1 class='trip-info__title'>Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

    <p class='trip-info__dates'>Mar 18&nbsp;&mdash;&nbsp;20</p>
  </div>

  <p class='trip-info__cost'>
    Total: &euro;&nbsp;<span class='trip-info__cost-value'>1230</span>
  </p>
</section>`;


/***/ }),

/***/ "./src/view/site-menu.js":
/*!*******************************!*\
  !*** ./src/view/site-menu.js ***!
  \*******************************/
/*! exports provided: siteMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteMenu", function() { return siteMenu; });
const siteMenu = () => (`
     <nav class='trip-controls__trip-tabs  trip-tabs'>
       <a class='trip-tabs__btn  trip-tabs__btn--active' href='#'>Table</a>
       <a class='trip-tabs__btn' href='#'>Stats</a>
     </nav>
   `);


/***/ }),

/***/ "./src/view/trip-sort.js":
/*!*******************************!*\
  !*** ./src/view/trip-sort.js ***!
  \*******************************/
/*! exports provided: tripSortForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripSortForm", function() { return tripSortForm; });
const tripSortForm = () => (
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
</form>`);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map