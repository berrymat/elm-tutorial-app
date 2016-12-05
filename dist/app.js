/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);
	__webpack_require__(6);

	__webpack_require__(14);
	__webpack_require__(16);

	// Require index.html so it gets copied to dist
	__webpack_require__(17);

	var Elm = __webpack_require__(18);
	var mountNode = document.getElementById('main');

	// The third value on embed are the initial values for incomming ports into Elm
	var app = Elm.Main.embed(mountNode);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./ace.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./ace.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*! ace.css | https://github.com/basscss/ace | MIT License */\n\n/* Basscss Basic */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    'Roboto',\n    'Helvetica Neue',\n    Helvetica,\n    sans-serif;\n  line-height: 1.5;\n  margin: 0;\n  color: #111;\n  background-color: #fff;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nsvg {\n  max-height: 100%;\n}\n\na {\n  color: #07c;\n}\n\nh1, h2, h3,\nh4, h5, h6 {\n  font-weight: 600;\n  line-height: 1.25;\n  margin-top: 1em;\n  margin-bottom: .5em;\n}\n\nh1 { font-size: 2rem }\n\nh2 { font-size: 1.5rem }\n\nh3 { font-size: 1.25rem }\n\nh4 { font-size: 1rem }\n\nh5 { font-size: .875rem }\n\nh6 { font-size: .75rem }\n\np, dl, ol, ul, pre, blockquote {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n\ncode,\npre,\nsamp {\n  font-family:\n    'Roboto Mono',\n    'Source Code Pro',\n    Menlo,\n    Consolas,\n    'Liberation Mono',\n    monospace;\n}\n\ncode, samp {\n  font-size: 87.5%;\n  padding: .125em;\n}\n\npre {\n  font-size: 87.5%;\n  overflow: scroll;\n}\n\nblockquote {\n  font-size: 1.25rem;\n  font-style: italic;\n  margin-left: 0;\n}\n\nhr {\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n  border: 0;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: #ccc;\n}\n\n/* Basscss Forms */\n\n.label {\n  font-size: .875rem;\n  font-weight: bold;\n  display: block;\n  margin-bottom: .5rem;\n}\n\n.input {\n  font-family: inherit;\n  font-size: inherit;\n  display: block;\n  width: 100%;\n  height: 2.5rem;\n  padding: .5rem;\n  margin-bottom: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n\n.select {\n  font-family: inherit;\n  font-size: inherit;\n  display: block;\n  width: 100%;\n  height: 2.5rem;\n  padding: .5rem;\n  margin-bottom: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n\n.textarea {\n  font-family: inherit;\n  font-size: inherit;\n  display: block;\n  width: 100%;\n  padding: .5rem;\n  margin-bottom: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n\n/* Basscss Input Range */\n\n.input-range {\n  vertical-align: middle;\n  background-color: transparent;\n  padding-top: .5rem;\n  padding-bottom: .5rem;\n  color: inherit;\n  background-color: transparent;\n  -webkit-appearance: none;\n}\n\n.input-range::-webkit-slider-thumb {\n  position: relative;\n  width: .5rem;\n  height: 1.25rem;\n  cursor: pointer;\n  margin-top: -0.5rem;\n  border-radius: 3px;\n  background-color: currentcolor;\n  -webkit-appearance: none;\n}\n\n/* Touch screen friendly pseudo element */\n\n.input-range::-webkit-slider-thumb:before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: -0.5rem;\n  left: -0.875rem;\n  width: 2.25rem;\n  height: 2.25rem;\n  opacity: 0;\n}\n\n.input-range::-moz-range-thumb {\n  width: .5rem;\n  height: 1.25rem;\n  cursor: pointer;\n  border-radius: 3px;\n  border-color: transparent;\n  border-width: 0;\n  background-color: currentcolor;\n}\n\n.input-range::-webkit-slider-runnable-track {\n  height: 0.25rem;\n  cursor: pointer;\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, .25);\n}\n\n.input-range::-moz-range-track {\n  height: 0.25rem;\n  cursor: pointer;\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, .25);\n}\n\n.input-range:focus {\n  outline: none;\n}\n\n/* Basscss Progress */\n\n.progress {\n  display: block;\n  width: 100%;\n  height: 0.5625rem;\n  margin: .5rem 0;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, .125);\n  border: 0;\n  border-radius: 10000px;\n  -webkit-appearance: none;\n}\n\n.progress::-webkit-progress-bar {\n  -webkit-appearance: none;\n  background-color: rgba(0, 0, 0, .125)\n}\n\n.progress::-webkit-progress-value {\n  -webkit-appearance: none;\n  background-color: currentcolor;\n}\n\n.progress::-moz-progress-bar {\n  background-color: currentcolor;\n}\n\n/* Basscss Btn */\n\n.btn {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: bold;\n  text-decoration: none;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.125rem;\n  padding: .5rem 1rem;\n  margin: 0;\n  height: auto;\n  border: 1px solid transparent;\n  vertical-align: middle;\n  -webkit-appearance: none;\n  color: inherit;\n  background-color: transparent;\n}\n\n.btn:hover {\n  text-decoration: none;\n}\n\n.btn:focus {\n  outline: none;\n  border-color: rgba(0, 0, 0, .125);\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, .25);\n}\n\n::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/* Basscss Btn Sizes */\n\n.btn-small {\n  padding: .25rem .5rem;\n}\n\n.btn-big {\n  padding: 1rem 1.25rem;\n}\n\n.btn-narrow {\n  padding-left: .5rem;\n  padding-right: .5rem;\n}\n\n/* Basscss Btn Primary */\n\n.btn-primary {\n  color: #fff;\n  background-color: #0074D9;\n  border-radius: 3px;\n}\n\n.btn-primary:hover {\n  box-shadow: inset 0 0 0 20rem rgba(0, 0, 0, .0625);\n}\n\n.btn-primary:active {\n  box-shadow: inset 0 0 0 20rem rgba(0, 0, 0, .125),\n    inset 0 3px 4px 0 rgba(0, 0, 0, .25),\n    0 0 1px rgba(0, 0, 0, .125);\n}\n\n.btn-primary:disabled,\n.btn-primary.is-disabled {\n  opacity: .5;\n}\n\n/* Basscss Btn Outline */\n\n.btn-outline,\n.btn-outline:hover {\n  border-color: currentcolor;\n}\n\n.btn-outline {\n  border-radius: 3px;\n}\n\n.btn-outline:hover {\n  box-shadow: inset 0 0 0 20rem rgba(0, 0, 0, .0625);\n}\n\n.btn-outline:active {\n  box-shadow: inset 0 0 0 20rem rgba(0, 0, 0, .125),\n    inset 0 3px 4px 0 rgba(0, 0, 0, .25),\n    0 0 1px rgba(0, 0, 0, .125);\n}\n\n.btn-outline:disabled,\n.btn-outline.is-disabled {\n  opacity: .5;\n}\n\n/* Basscss Media Object */\n\n.media,\n.sm-media,\n.md-media,\n.lg-media {\n  margin-left: -.5rem;\n  margin-right: -.5rem;\n}\n\n.media {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.media-center {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n              -ms-grid-row-align: center;\n          align-items: center;\n}\n\n.media-bottom {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n              -ms-grid-row-align: flex-end;\n          align-items: flex-end;\n}\n\n.media-img,\n.media-body {\n  padding-left: .5rem;\n  padding-right: .5rem;\n}\n\n.media-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n@media (min-width: 40em) {\n  .sm-media { display: -webkit-box; display: -ms-flexbox; display: flex }\n}\n\n@media (min-width: 52em) {\n  .md-media { display: -webkit-box; display: -ms-flexbox; display: flex }\n}\n\n@media (min-width: 64em) {\n  .lg-media { display: -webkit-box; display: -ms-flexbox; display: flex }\n}\n\n/*! Basscss | http://basscss.com | MIT License */\n\n/* Basscss Type Scale */\n\n.h1 { font-size: 2rem }\n\n.h2 { font-size: 1.5rem }\n\n.h3 { font-size: 1.25rem }\n\n.h4 { font-size: 1rem }\n\n.h5 { font-size: .875rem }\n\n.h6 { font-size: .75rem }\n\n/* Basscss Typography */\n\n.font-family-inherit { font-family: inherit }\n\n.font-size-inherit { font-size: inherit }\n\n.text-decoration-none { text-decoration: none }\n\n.bold    { font-weight: bold; font-weight: bold }\n\n.regular { font-weight: normal }\n\n.italic  { font-style: italic }\n\n.caps    { text-transform: uppercase; letter-spacing: .2em; }\n\n.left-align   { text-align: left }\n\n.center       { text-align: center }\n\n.right-align  { text-align: right }\n\n.justify      { text-align: justify }\n\n.nowrap { white-space: nowrap }\n\n.break-word { word-wrap: break-word }\n\n.line-height-1 { line-height: 1 }\n\n.line-height-2 { line-height: 1.125 }\n\n.line-height-3 { line-height: 1.25 }\n\n.line-height-4 { line-height: 1.5 }\n\n.list-style-none { list-style: none }\n\n.underline { text-decoration: underline }\n\n.truncate {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.list-reset {\n  list-style: none;\n  padding-left: 0;\n}\n\n/* Basscss Layout */\n\n.inline       { display: inline }\n\n.block        { display: block }\n\n.inline-block { display: inline-block }\n\n.table        { display: table }\n\n.table-cell   { display: table-cell }\n\n.overflow-hidden { overflow: hidden }\n\n.overflow-scroll { overflow: scroll }\n\n.overflow-auto   { overflow: auto }\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table\n}\n\n.clearfix:after { clear: both }\n\n.left  { float: left }\n\n.right { float: right }\n\n.fit { max-width: 100% }\n\n.max-width-1 { max-width: 24rem }\n\n.max-width-2 { max-width: 32rem }\n\n.max-width-3 { max-width: 48rem }\n\n.max-width-4 { max-width: 64rem }\n\n.border-box { box-sizing: border-box }\n\n/* Basscss Align */\n\n.align-baseline { vertical-align: baseline }\n\n.align-top      { vertical-align: top }\n\n.align-middle   { vertical-align: middle }\n\n.align-bottom   { vertical-align: bottom }\n\n/* Basscss Margin */\n\n.m0  { margin:        0 }\n\n.mt0 { margin-top:    0 }\n\n.mr0 { margin-right:  0 }\n\n.mb0 { margin-bottom: 0 }\n\n.ml0 { margin-left:   0 }\n\n.mx0 { margin-left:   0; margin-right:  0 }\n\n.my0 { margin-top:    0; margin-bottom: 0 }\n\n.m1  { margin: .5rem }\n\n.mt1 { margin-top: .5rem }\n\n.mr1 { margin-right: .5rem }\n\n.mb1 { margin-bottom: .5rem }\n\n.ml1 { margin-left: .5rem }\n\n.mx1 { margin-left: .5rem; margin-right: .5rem }\n\n.my1 { margin-top: .5rem; margin-bottom: .5rem }\n\n.m2  { margin: 1rem }\n\n.mt2 { margin-top: 1rem }\n\n.mr2 { margin-right: 1rem }\n\n.mb2 { margin-bottom: 1rem }\n\n.ml2 { margin-left: 1rem }\n\n.mx2 { margin-left: 1rem; margin-right: 1rem }\n\n.my2 { margin-top: 1rem; margin-bottom: 1rem }\n\n.m3  { margin: 2rem }\n\n.mt3 { margin-top: 2rem }\n\n.mr3 { margin-right: 2rem }\n\n.mb3 { margin-bottom: 2rem }\n\n.ml3 { margin-left: 2rem }\n\n.mx3 { margin-left: 2rem; margin-right: 2rem }\n\n.my3 { margin-top: 2rem; margin-bottom: 2rem }\n\n.m4  { margin: 4rem }\n\n.mt4 { margin-top: 4rem }\n\n.mr4 { margin-right: 4rem }\n\n.mb4 { margin-bottom: 4rem }\n\n.ml4 { margin-left: 4rem }\n\n.mx4 { margin-left: 4rem; margin-right: 4rem }\n\n.my4 { margin-top: 4rem; margin-bottom: 4rem }\n\n.mxn1 { margin-left: -.5rem; margin-right: -.5rem; }\n\n.mxn2 { margin-left: -1rem; margin-right: -1rem; }\n\n.mxn3 { margin-left: -2rem; margin-right: -2rem; }\n\n.mxn4 { margin-left: -4rem; margin-right: -4rem; }\n\n.ml-auto { margin-left: auto }\n\n.mr-auto { margin-right: auto }\n\n.mx-auto { margin-left: auto; margin-right: auto; }\n\n/* Basscss Padding */\n\n.p0  { padding: 0 }\n\n.pt0 { padding-top: 0 }\n\n.pr0 { padding-right: 0 }\n\n.pb0 { padding-bottom: 0 }\n\n.pl0 { padding-left: 0 }\n\n.px0 { padding-left: 0; padding-right:  0 }\n\n.py0 { padding-top: 0;  padding-bottom: 0 }\n\n.p1  { padding: .5rem }\n\n.pt1 { padding-top: .5rem }\n\n.pr1 { padding-right: .5rem }\n\n.pb1 { padding-bottom: .5rem }\n\n.pl1 { padding-left: .5rem }\n\n.py1 { padding-top: .5rem; padding-bottom: .5rem }\n\n.px1 { padding-left: .5rem; padding-right: .5rem }\n\n.p2  { padding: 1rem }\n\n.pt2 { padding-top: 1rem }\n\n.pr2 { padding-right: 1rem }\n\n.pb2 { padding-bottom: 1rem }\n\n.pl2 { padding-left: 1rem }\n\n.py2 { padding-top: 1rem; padding-bottom: 1rem }\n\n.px2 { padding-left: 1rem; padding-right: 1rem }\n\n.p3  { padding: 2rem }\n\n.pt3 { padding-top: 2rem }\n\n.pr3 { padding-right: 2rem }\n\n.pb3 { padding-bottom: 2rem }\n\n.pl3 { padding-left: 2rem }\n\n.py3 { padding-top: 2rem; padding-bottom: 2rem }\n\n.px3 { padding-left: 2rem; padding-right: 2rem }\n\n.p4  { padding: 4rem }\n\n.pt4 { padding-top: 4rem }\n\n.pr4 { padding-right: 4rem }\n\n.pb4 { padding-bottom: 4rem }\n\n.pl4 { padding-left: 4rem }\n\n.py4 { padding-top: 4rem; padding-bottom: 4rem }\n\n.px4 { padding-left: 4rem; padding-right: 4rem }\n\n/* Basscss Grid */\n\n.col {\n  float: left;\n  box-sizing: border-box;\n}\n\n.col-right {\n  float: right;\n  box-sizing: border-box;\n}\n\n.col-1 {\n  width: 8.33333%;\n}\n\n.col-2 {\n  width: 16.66667%;\n}\n\n.col-3 {\n  width: 25%;\n}\n\n.col-4 {\n  width: 33.33333%;\n}\n\n.col-5 {\n  width: 41.66667%;\n}\n\n.col-6 {\n  width: 50%;\n}\n\n.col-7 {\n  width: 58.33333%;\n}\n\n.col-8 {\n  width: 66.66667%;\n}\n\n.col-9 {\n  width: 75%;\n}\n\n.col-10 {\n  width: 83.33333%;\n}\n\n.col-11 {\n  width: 91.66667%;\n}\n\n.col-12 {\n  width: 100%;\n}\n\n@media (min-width: 40em) {\n\n  .sm-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .sm-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .sm-col-1 {\n    width: 8.33333%;\n  }\n\n  .sm-col-2 {\n    width: 16.66667%;\n  }\n\n  .sm-col-3 {\n    width: 25%;\n  }\n\n  .sm-col-4 {\n    width: 33.33333%;\n  }\n\n  .sm-col-5 {\n    width: 41.66667%;\n  }\n\n  .sm-col-6 {\n    width: 50%;\n  }\n\n  .sm-col-7 {\n    width: 58.33333%;\n  }\n\n  .sm-col-8 {\n    width: 66.66667%;\n  }\n\n  .sm-col-9 {\n    width: 75%;\n  }\n\n  .sm-col-10 {\n    width: 83.33333%;\n  }\n\n  .sm-col-11 {\n    width: 91.66667%;\n  }\n\n  .sm-col-12 {\n    width: 100%;\n  }\n\n}\n\n@media (min-width: 52em) {\n\n  .md-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .md-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .md-col-1 {\n    width: 8.33333%;\n  }\n\n  .md-col-2 {\n    width: 16.66667%;\n  }\n\n  .md-col-3 {\n    width: 25%;\n  }\n\n  .md-col-4 {\n    width: 33.33333%;\n  }\n\n  .md-col-5 {\n    width: 41.66667%;\n  }\n\n  .md-col-6 {\n    width: 50%;\n  }\n\n  .md-col-7 {\n    width: 58.33333%;\n  }\n\n  .md-col-8 {\n    width: 66.66667%;\n  }\n\n  .md-col-9 {\n    width: 75%;\n  }\n\n  .md-col-10 {\n    width: 83.33333%;\n  }\n\n  .md-col-11 {\n    width: 91.66667%;\n  }\n\n  .md-col-12 {\n    width: 100%;\n  }\n\n}\n\n@media (min-width: 64em) {\n\n  .lg-col {\n    float: left;\n    box-sizing: border-box;\n  }\n\n  .lg-col-right {\n    float: right;\n    box-sizing: border-box;\n  }\n\n  .lg-col-1 {\n    width: 8.33333%;\n  }\n\n  .lg-col-2 {\n    width: 16.66667%;\n  }\n\n  .lg-col-3 {\n    width: 25%;\n  }\n\n  .lg-col-4 {\n    width: 33.33333%;\n  }\n\n  .lg-col-5 {\n    width: 41.66667%;\n  }\n\n  .lg-col-6 {\n    width: 50%;\n  }\n\n  .lg-col-7 {\n    width: 58.33333%;\n  }\n\n  .lg-col-8 {\n    width: 66.66667%;\n  }\n\n  .lg-col-9 {\n    width: 75%;\n  }\n\n  .lg-col-10 {\n    width: 83.33333%;\n  }\n\n  .lg-col-11 {\n    width: 91.66667%;\n  }\n\n  .lg-col-12 {\n    width: 100%;\n  }\n\n}\n\n.flex { display: -webkit-box; display: -ms-flexbox; display: flex }\n\n@media (min-width: 40em) {\n  .sm-flex { display: -webkit-box; display: -ms-flexbox; display: flex }\n}\n\n@media (min-width: 52em) {\n  .md-flex { display: -webkit-box; display: -ms-flexbox; display: flex }\n}\n\n@media (min-width: 64em) {\n  .lg-flex { display: -webkit-box; display: -ms-flexbox; display: flex }\n}\n\n.flex-column  { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column }\n\n.flex-wrap    { -ms-flex-wrap: wrap; flex-wrap: wrap }\n\n.items-start    { -webkit-box-align: start; -ms-flex-align: start; -ms-grid-row-align: flex-start; align-items: flex-start }\n\n.items-end      { -webkit-box-align: end; -ms-flex-align: end; -ms-grid-row-align: flex-end; align-items: flex-end }\n\n.items-center   { -webkit-box-align: center; -ms-flex-align: center; -ms-grid-row-align: center; align-items: center }\n\n.items-baseline { -webkit-box-align: baseline; -ms-flex-align: baseline; -ms-grid-row-align: baseline; align-items: baseline }\n\n.items-stretch  { -webkit-box-align: stretch; -ms-flex-align: stretch; -ms-grid-row-align: stretch; align-items: stretch }\n\n.self-start    { -ms-flex-item-align: start; align-self: flex-start }\n\n.self-end      { -ms-flex-item-align: end; align-self: flex-end }\n\n.self-center   { -ms-flex-item-align: center; align-self: center }\n\n.self-baseline { -ms-flex-item-align: baseline; align-self: baseline }\n\n.self-stretch  { -ms-flex-item-align: stretch; align-self: stretch }\n\n.justify-start   { -webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start }\n\n.justify-end     { -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end }\n\n.justify-center  { -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center }\n\n.justify-between { -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between }\n\n.justify-around  { -ms-flex-pack: distribute; justify-content: space-around }\n\n.content-start   { -ms-flex-line-pack: start; align-content: flex-start }\n\n.content-end     { -ms-flex-line-pack: end; align-content: flex-end }\n\n.content-center  { -ms-flex-line-pack: center; align-content: center }\n\n.content-between { -ms-flex-line-pack: justify; align-content: space-between }\n\n.content-around  { -ms-flex-line-pack: distribute; align-content: space-around }\n\n.content-stretch { -ms-flex-line-pack: stretch; align-content: stretch }\n\n/* 1. Fix for Chrome 44 bug. https://code.google.com/p/chromium/issues/detail?id=506893 */\n\n.flex-auto {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  min-width: 0; /* 1 */\n  min-height: 0; /* 1 */\n}\n\n.flex-none { -webkit-box-flex: 0; -ms-flex: none; flex: none }\n\n.order-0 { -webkit-box-ordinal-group: 1; -ms-flex-order: 0; order: 0 }\n\n.order-1 { -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1 }\n\n.order-2 { -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2 }\n\n.order-3 { -webkit-box-ordinal-group: 4; -ms-flex-order: 3; order: 3 }\n\n.order-last { -webkit-box-ordinal-group: 100000; -ms-flex-order: 99999; order: 99999 }\n\n/* Basscss Position */\n\n.relative { position: relative }\n\n.absolute { position: absolute }\n\n.fixed    { position: fixed }\n\n.top-0    { top: 0 }\n\n.right-0  { right: 0 }\n\n.bottom-0 { bottom: 0 }\n\n.left-0   { left: 0 }\n\n.z1 { z-index: 1 }\n\n.z2 { z-index: 2 }\n\n.z3 { z-index: 3 }\n\n.z4 { z-index: 4 }\n\n/* Basscss Border */\n\n.border {\n  border-style: solid;\n  border-width: 1px;\n}\n\n.border-top {\n  border-top-style: solid;\n  border-top-width: 1px;\n}\n\n.border-right {\n  border-right-style: solid;\n  border-right-width: 1px;\n}\n\n.border-bottom {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n\n.border-left {\n  border-left-style: solid;\n  border-left-width: 1px;\n}\n\n.border-none { border: 0 }\n\n.rounded { border-radius: 3px }\n\n.circle  { border-radius: 50% }\n\n.rounded-top    { border-radius: 3px 3px 0 0 }\n\n.rounded-right  { border-radius: 0 3px 3px 0 }\n\n.rounded-bottom { border-radius: 0 0 3px 3px }\n\n.rounded-left   { border-radius: 3px 0 0 3px }\n\n.not-rounded { border-radius: 0 }\n\n/* Basscss Hide */\n\n.hide {\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n}\n\n@media (max-width: 40em) {\n  .xs-hide { display: none !important }\n}\n\n@media (min-width: 40em) and (max-width: 52em) {\n  .sm-hide { display: none !important }\n}\n\n@media (min-width: 52em) and (max-width: 64em) {\n  .md-hide { display: none !important }\n}\n\n@media (min-width: 64em) {\n  .lg-hide { display: none !important }\n}\n\n.display-none { display: none !important }\n\n/* Basscss Responsive Margin */\n\n@media (min-width: 40em) {\n\n  .sm-m0  { margin:        0 }\n  .sm-mt0 { margin-top:    0 }\n  .sm-mr0 { margin-right:  0 }\n  .sm-mb0 { margin-bottom: 0 }\n  .sm-ml0 { margin-left:   0 }\n  .sm-mx0 { margin-left:   0; margin-right:  0 }\n  .sm-my0 { margin-top:    0; margin-bottom: 0 }\n\n  .sm-m1  { margin: .5rem }\n  .sm-mt1 { margin-top: .5rem }\n  .sm-mr1 { margin-right: .5rem }\n  .sm-mb1 { margin-bottom: .5rem }\n  .sm-ml1 { margin-left: .5rem }\n  .sm-mx1 { margin-left: .5rem; margin-right: .5rem }\n  .sm-my1 { margin-top: .5rem; margin-bottom: .5rem }\n\n  .sm-m2  { margin: 1rem }\n  .sm-mt2 { margin-top: 1rem }\n  .sm-mr2 { margin-right: 1rem }\n  .sm-mb2 { margin-bottom: 1rem }\n  .sm-ml2 { margin-left: 1rem }\n  .sm-mx2 { margin-left: 1rem; margin-right: 1rem }\n  .sm-my2 { margin-top: 1rem; margin-bottom: 1rem }\n\n  .sm-m3  { margin: 2rem }\n  .sm-mt3 { margin-top: 2rem }\n  .sm-mr3 { margin-right: 2rem }\n  .sm-mb3 { margin-bottom: 2rem }\n  .sm-ml3 { margin-left: 2rem }\n  .sm-mx3 { margin-left: 2rem; margin-right: 2rem }\n  .sm-my3 { margin-top: 2rem; margin-bottom: 2rem }\n\n  .sm-m4  { margin: 4rem }\n  .sm-mt4 { margin-top: 4rem }\n  .sm-mr4 { margin-right: 4rem }\n  .sm-mb4 { margin-bottom: 4rem }\n  .sm-ml4 { margin-left: 4rem }\n  .sm-mx4 { margin-left: 4rem; margin-right: 4rem }\n  .sm-my4 { margin-top: 4rem; margin-bottom: 4rem }\n\n  .sm-mxn1 { margin-left: -.5rem; margin-right: -.5rem }\n  .sm-mxn2 { margin-left: -1rem; margin-right: -1rem }\n  .sm-mxn3 { margin-left: -2rem; margin-right: -2rem }\n  .sm-mxn4 { margin-left: -4rem; margin-right: -4rem }\n\n  .sm-ml-auto { margin-left:  auto }\n  .sm-mr-auto { margin-right: auto }\n  .sm-mx-auto { margin-left:  auto; margin-right: auto }\n\n}\n\n@media (min-width: 52em) {\n\n  .md-m0  { margin:        0 }\n  .md-mt0 { margin-top:    0 }\n  .md-mr0 { margin-right:  0 }\n  .md-mb0 { margin-bottom: 0 }\n  .md-ml0 { margin-left:   0 }\n  .md-mx0 { margin-left:   0; margin-right:  0 }\n  .md-my0 { margin-top:    0; margin-bottom: 0 }\n\n  .md-m1  { margin: .5rem }\n  .md-mt1 { margin-top: .5rem }\n  .md-mr1 { margin-right: .5rem }\n  .md-mb1 { margin-bottom: .5rem }\n  .md-ml1 { margin-left: .5rem }\n  .md-mx1 { margin-left: .5rem; margin-right: .5rem }\n  .md-my1 { margin-top: .5rem; margin-bottom: .5rem }\n\n  .md-m2  { margin: 1rem }\n  .md-mt2 { margin-top: 1rem }\n  .md-mr2 { margin-right: 1rem }\n  .md-mb2 { margin-bottom: 1rem }\n  .md-ml2 { margin-left: 1rem }\n  .md-mx2 { margin-left: 1rem; margin-right: 1rem }\n  .md-my2 { margin-top: 1rem; margin-bottom: 1rem }\n\n  .md-m3  { margin: 2rem }\n  .md-mt3 { margin-top: 2rem }\n  .md-mr3 { margin-right: 2rem }\n  .md-mb3 { margin-bottom: 2rem }\n  .md-ml3 { margin-left: 2rem }\n  .md-mx3 { margin-left: 2rem; margin-right: 2rem }\n  .md-my3 { margin-top: 2rem; margin-bottom: 2rem }\n\n  .md-m4  { margin: 4rem }\n  .md-mt4 { margin-top: 4rem }\n  .md-mr4 { margin-right: 4rem }\n  .md-mb4 { margin-bottom: 4rem }\n  .md-ml4 { margin-left: 4rem }\n  .md-mx4 { margin-left: 4rem; margin-right: 4rem }\n  .md-my4 { margin-top: 4rem; margin-bottom: 4rem }\n\n  .md-mxn1 { margin-left: -.5rem; margin-right: -.5rem; }\n  .md-mxn2 { margin-left: -1rem; margin-right: -1rem; }\n  .md-mxn3 { margin-left: -2rem; margin-right: -2rem; }\n  .md-mxn4 { margin-left: -4rem; margin-right: -4rem; }\n\n  .md-ml-auto { margin-left:  auto }\n  .md-mr-auto { margin-right: auto }\n  .md-mx-auto { margin-left: auto; margin-right: auto; }\n\n}\n\n@media (min-width: 64em) {\n\n  .lg-m0  { margin:        0 }\n  .lg-mt0 { margin-top:    0 }\n  .lg-mr0 { margin-right:  0 }\n  .lg-mb0 { margin-bottom: 0 }\n  .lg-ml0 { margin-left:   0 }\n  .lg-mx0 { margin-left:   0; margin-right:  0 }\n  .lg-my0 { margin-top:    0; margin-bottom: 0 }\n\n  .lg-m1  { margin: .5rem }\n  .lg-mt1 { margin-top: .5rem }\n  .lg-mr1 { margin-right: .5rem }\n  .lg-mb1 { margin-bottom: .5rem }\n  .lg-ml1 { margin-left: .5rem }\n  .lg-mx1 { margin-left: .5rem; margin-right: .5rem }\n  .lg-my1 { margin-top: .5rem; margin-bottom: .5rem }\n\n  .lg-m2  { margin: 1rem }\n  .lg-mt2 { margin-top: 1rem }\n  .lg-mr2 { margin-right: 1rem }\n  .lg-mb2 { margin-bottom: 1rem }\n  .lg-ml2 { margin-left: 1rem }\n  .lg-mx2 { margin-left: 1rem; margin-right: 1rem }\n  .lg-my2 { margin-top: 1rem; margin-bottom: 1rem }\n\n  .lg-m3  { margin: 2rem }\n  .lg-mt3 { margin-top: 2rem }\n  .lg-mr3 { margin-right: 2rem }\n  .lg-mb3 { margin-bottom: 2rem }\n  .lg-ml3 { margin-left: 2rem }\n  .lg-mx3 { margin-left: 2rem; margin-right: 2rem }\n  .lg-my3 { margin-top: 2rem; margin-bottom: 2rem }\n\n  .lg-m4  { margin: 4rem }\n  .lg-mt4 { margin-top: 4rem }\n  .lg-mr4 { margin-right: 4rem }\n  .lg-mb4 { margin-bottom: 4rem }\n  .lg-ml4 { margin-left: 4rem }\n  .lg-mx4 { margin-left: 4rem; margin-right: 4rem }\n  .lg-my4 { margin-top: 4rem; margin-bottom: 4rem }\n\n  .lg-mxn1 { margin-left: -.5rem; margin-right: -.5rem; }\n  .lg-mxn2 { margin-left: -1rem; margin-right: -1rem; }\n  .lg-mxn3 { margin-left: -2rem; margin-right: -2rem; }\n  .lg-mxn4 { margin-left: -4rem; margin-right: -4rem; }\n\n  .lg-ml-auto { margin-left:  auto }\n  .lg-mr-auto { margin-right: auto }\n  .lg-mx-auto { margin-left: auto; margin-right: auto; }\n\n}\n\n/* Basscss Responsive Padding */\n\n@media (min-width: 40em) {\n\n  .sm-p0  { padding:        0 }\n  .sm-pt0 { padding-top:    0 }\n  .sm-pr0 { padding-right:  0 }\n  .sm-pb0 { padding-bottom: 0 }\n  .sm-pl0 { padding-left:   0 }\n  .sm-px0 { padding-left:   0; padding-right:  0 }\n  .sm-py0 { padding-top:    0; padding-bottom: 0 }\n\n  .sm-p1  { padding: .5rem }\n  .sm-pt1 { padding-top: .5rem }\n  .sm-pr1 { padding-right: .5rem }\n  .sm-pb1 { padding-bottom: .5rem }\n  .sm-pl1 { padding-left: .5rem }\n  .sm-px1 { padding-left: .5rem; padding-right: .5rem }\n  .sm-py1 { padding-top: .5rem; padding-bottom: .5rem }\n\n  .sm-p2  { padding: 1rem }\n  .sm-pt2 { padding-top: 1rem }\n  .sm-pr2 { padding-right: 1rem }\n  .sm-pb2 { padding-bottom: 1rem }\n  .sm-pl2 { padding-left: 1rem }\n  .sm-px2 { padding-left: 1rem; padding-right: 1rem }\n  .sm-py2 { padding-top: 1rem; padding-bottom: 1rem }\n\n  .sm-p3  { padding: 2rem }\n  .sm-pt3 { padding-top: 2rem }\n  .sm-pr3 { padding-right: 2rem }\n  .sm-pb3 { padding-bottom: 2rem }\n  .sm-pl3 { padding-left: 2rem }\n  .sm-px3 { padding-left: 2rem; padding-right: 2rem }\n  .sm-py3 { padding-top: 2rem; padding-bottom: 2rem }\n\n  .sm-p4  { padding: 4rem }\n  .sm-pt4 { padding-top: 4rem }\n  .sm-pr4 { padding-right: 4rem }\n  .sm-pb4 { padding-bottom: 4rem }\n  .sm-pl4 { padding-left: 4rem }\n  .sm-px4 { padding-left: 4rem; padding-right: 4rem }\n  .sm-py4 { padding-top: 4rem; padding-bottom: 4rem }\n\n}\n\n@media (min-width: 52em) {\n\n  .md-p0  { padding:        0 }\n  .md-pt0 { padding-top:    0 }\n  .md-pr0 { padding-right:  0 }\n  .md-pb0 { padding-bottom: 0 }\n  .md-pl0 { padding-left:   0 }\n  .md-px0 { padding-left:   0; padding-right:  0 }\n  .md-py0 { padding-top:    0; padding-bottom: 0 }\n\n  .md-p1  { padding: .5rem }\n  .md-pt1 { padding-top: .5rem }\n  .md-pr1 { padding-right: .5rem }\n  .md-pb1 { padding-bottom: .5rem }\n  .md-pl1 { padding-left: .5rem }\n  .md-px1 { padding-left: .5rem; padding-right: .5rem }\n  .md-py1 { padding-top: .5rem; padding-bottom: .5rem }\n\n  .md-p2  { padding: 1rem }\n  .md-pt2 { padding-top: 1rem }\n  .md-pr2 { padding-right: 1rem }\n  .md-pb2 { padding-bottom: 1rem }\n  .md-pl2 { padding-left: 1rem }\n  .md-px2 { padding-left: 1rem; padding-right: 1rem }\n  .md-py2 { padding-top: 1rem; padding-bottom: 1rem }\n\n  .md-p3  { padding: 2rem }\n  .md-pt3 { padding-top: 2rem }\n  .md-pr3 { padding-right: 2rem }\n  .md-pb3 { padding-bottom: 2rem }\n  .md-pl3 { padding-left: 2rem }\n  .md-px3 { padding-left: 2rem; padding-right: 2rem }\n  .md-py3 { padding-top: 2rem; padding-bottom: 2rem }\n\n  .md-p4  { padding: 4rem }\n  .md-pt4 { padding-top: 4rem }\n  .md-pr4 { padding-right: 4rem }\n  .md-pb4 { padding-bottom: 4rem }\n  .md-pl4 { padding-left: 4rem }\n  .md-px4 { padding-left: 4rem; padding-right: 4rem }\n  .md-py4 { padding-top: 4rem; padding-bottom: 4rem }\n\n}\n\n@media (min-width: 64em) {\n\n  .lg-p0  { padding:        0 }\n  .lg-pt0 { padding-top:    0 }\n  .lg-pr0 { padding-right:  0 }\n  .lg-pb0 { padding-bottom: 0 }\n  .lg-pl0 { padding-left:   0 }\n  .lg-px0 { padding-left:   0; padding-right:  0 }\n  .lg-py0 { padding-top:    0; padding-bottom: 0 }\n\n  .lg-p1  { padding: .5rem }\n  .lg-pt1 { padding-top: .5rem }\n  .lg-pr1 { padding-right: .5rem }\n  .lg-pb1 { padding-bottom: .5rem }\n  .lg-pl1 { padding-left: .5rem }\n  .lg-px1 { padding-left: .5rem; padding-right: .5rem }\n  .lg-py1 { padding-top: .5rem; padding-bottom: .5rem }\n\n  .lg-p2  { padding: 1rem }\n  .lg-pt2 { padding-top: 1rem }\n  .lg-pr2 { padding-right: 1rem }\n  .lg-pb2 { padding-bottom: 1rem }\n  .lg-pl2 { padding-left: 1rem }\n  .lg-px2 { padding-left: 1rem; padding-right: 1rem }\n  .lg-py2 { padding-top: 1rem; padding-bottom: 1rem }\n\n  .lg-p3  { padding: 2rem }\n  .lg-pt3 { padding-top: 2rem }\n  .lg-pr3 { padding-right: 2rem }\n  .lg-pb3 { padding-bottom: 2rem }\n  .lg-pl3 { padding-left: 2rem }\n  .lg-px3 { padding-left: 2rem; padding-right: 2rem }\n  .lg-py3 { padding-top: 2rem; padding-bottom: 2rem }\n\n  .lg-p4  { padding: 4rem }\n  .lg-pt4 { padding-top: 4rem }\n  .lg-pr4 { padding-right: 4rem }\n  .lg-pb4 { padding-bottom: 4rem }\n  .lg-pl4 { padding-left: 4rem }\n  .lg-px4 { padding-left: 4rem; padding-right: 4rem }\n  .lg-py4 { padding-top: 4rem; padding-bottom: 4rem }\n\n}\n\n/* Basscss Responsive Layout */\n\n@media (min-width: 40em) {\n\n  .sm-inline       { display: inline }\n  .sm-block        { display: block }\n  .sm-inline-block { display: inline-block }\n  .sm-table        { display: table }\n  .sm-table-cell   { display: table-cell }\n\n  .sm-overflow-hidden { overflow: hidden }\n  .sm-overflow-scroll { overflow: scroll }\n  .sm-overflow-auto   { overflow: auto }\n\n  .sm-left  { float: left }\n  .sm-right { float: right }\n\n}\n\n@media (min-width: 52em) {\n\n  .md-inline       { display: inline }\n  .md-block        { display: block }\n  .md-inline-block { display: inline-block }\n  .md-table        { display: table }\n  .md-table-cell   { display: table-cell }\n\n  .md-overflow-hidden { overflow: hidden }\n  .md-overflow-scroll { overflow: scroll }\n  .md-overflow-auto   { overflow: auto }\n\n  .md-left  { float: left }\n  .md-right { float: right }\n\n}\n\n@media (min-width: 64em) {\n\n  .lg-inline       { display: inline }\n  .lg-block        { display: block }\n  .lg-inline-block { display: inline-block }\n  .lg-table        { display: table }\n  .lg-table-cell   { display: table-cell }\n\n  .lg-overflow-hidden { overflow: hidden }\n  .lg-overflow-scroll { overflow: scroll }\n  .lg-overflow-auto   { overflow: auto }\n\n  .lg-left  { float: left }\n  .lg-right { float: right }\n\n}\n\n/* Basscss Responsive Position */\n\n@media (min-width: 40em) {\n  .sm-relative { position: relative }\n  .sm-absolute { position: absolute }\n  .sm-fixed    { position: fixed }\n\n  .sm-top-0    { top: 0 }\n  .sm-right-0  { right: 0 }\n  .sm-bottom-0 { bottom: 0 }\n  .sm-left-0   { left: 0 }\n}\n\n@media (min-width: 52em) {\n  .md-relative { position: relative }\n  .md-absolute { position: absolute }\n  .md-fixed    { position: fixed }\n\n  .md-top-0    { top: 0 }\n  .md-right-0  { right: 0 }\n  .md-bottom-0 { bottom: 0 }\n  .md-left-0   { left: 0 }\n}\n\n@media (min-width: 64em) {\n  .lg-relative { position: relative }\n  .lg-absolute { position: absolute }\n  .lg-fixed    { position: fixed }\n\n  .lg-top-0    { top: 0 }\n  .lg-right-0  { right: 0 }\n  .lg-bottom-0 { bottom: 0 }\n  .lg-left-0   { left: 0 }\n}\n\n/* Basscss Responsive Typography */\n\n@media (min-width: 40em) {\n  .sm-left-align   { text-align: left }\n  .sm-center       { text-align: center }\n  .sm-right-align  { text-align: right }\n  .sm-justify      { text-align: justify }\n}\n\n@media (min-width: 52em) {\n  .md-left-align   { text-align: left }\n  .md-center       { text-align: center }\n  .md-right-align  { text-align: right }\n  .md-justify      { text-align: justify }\n}\n\n@media (min-width: 64em) {\n  .lg-left-align   { text-align: left }\n  .lg-center       { text-align: center }\n  .lg-right-align  { text-align: right }\n  .lg-justify      { text-align: justify }\n}\n\n/* Basscss Responsive Type Scale */\n\n@media (min-width: 40em) {\n  .sm-h00 { font-size: 4rem }\n  .sm-h0 { font-size: 3rem }\n  .sm-h1 { font-size: 2rem }\n  .sm-h2 { font-size: 1.5rem }\n  .sm-h3 { font-size: 1.25rem }\n  .sm-h4 { font-size: 1rem }\n  .sm-h5 { font-size: .875rem }\n  .sm-h6 { font-size: .75rem }\n}\n\n@media (min-width: 52em) {\n  .md-h00 { font-size: 4rem }\n  .md-h0 { font-size: 3rem }\n  .md-h1 { font-size: 2rem }\n  .md-h2 { font-size: 1.5rem }\n  .md-h3 { font-size: 1.25rem }\n  .md-h4 { font-size: 1rem }\n  .md-h5 { font-size: .875rem }\n  .md-h6 { font-size: .75rem }\n}\n\n@media (min-width: 64em) {\n  .lg-h00 { font-size: 4rem }\n  .lg-h0 { font-size: 3rem }\n  .lg-h1 { font-size: 2rem }\n  .lg-h2 { font-size: 1.5rem }\n  .lg-h3 { font-size: 1.25rem }\n  .lg-h4 { font-size: 1rem }\n  .lg-h5 { font-size: .875rem }\n  .lg-h6 { font-size: .75rem }\n}\n\n/* Basscss Colors */\n\n/* \n\n   VARIABLES\n\n   - Cool\n   - Warm\n   - Gray Scale\n\n*/\n\n.black  { color: #111111 }\n\n.gray   { color: #AAAAAA }\n\n.silver { color: #DDDDDD }\n\n.white  { color: #FFFFFF }\n\n.aqua  { color: #7FDBFF }\n\n.blue  { color: #0074D9 }\n\n.navy  { color: #001F3F }\n\n.teal  { color: #39CCCC }\n\n.green { color: #2ECC40 }\n\n.olive { color: #3D9970 }\n\n.lime  { color: #01FF70 }\n\n.yellow  { color: #FFDC00 }\n\n.orange  { color: #FF851B }\n\n.red     { color: #FF4136 }\n\n.fuchsia { color: #F012BE }\n\n.purple  { color: #B10DC9 }\n\n.maroon  { color: #85144B }\n\n.color-inherit { color: inherit }\n\n.muted { opacity: .5 }\n\n/* Basscss Background Colors */\n\n.bg-black  { background-color: #111111 }\n\n.bg-gray   { background-color: #AAAAAA }\n\n.bg-silver { background-color: #DDDDDD }\n\n.bg-white  { background-color: #FFFFFF }\n\n.bg-aqua  { background-color: #7FDBFF }\n\n.bg-blue  { background-color: #0074D9 }\n\n.bg-navy  { background-color: #001F3F }\n\n.bg-teal  { background-color: #39CCCC }\n\n.bg-green { background-color: #2ECC40 }\n\n.bg-olive { background-color: #3D9970 }\n\n.bg-lime  { background-color: #01FF70 }\n\n.bg-yellow  { background-color: #FFDC00 }\n\n.bg-orange  { background-color: #FF851B }\n\n.bg-red     { background-color: #FF4136 }\n\n.bg-fuchsia { background-color: #F012BE }\n\n.bg-purple  { background-color: #B10DC9 }\n\n.bg-maroon  { background-color: #85144B }\n\n/* Basscss Border Colors */\n\n.border-black  { border-color: #111111 }\n\n.border-gray   { border-color: #AAAAAA }\n\n.border-silver { border-color: #DDDDDD }\n\n.border-white  { border-color: #FFFFFF }\n\n.border-aqua  { border-color: #7FDBFF }\n\n.border-blue  { border-color: #0074D9 }\n\n.border-navy  { border-color: #001F3F }\n\n.border-teal  { border-color: #39CCCC }\n\n.border-green { border-color: #2ECC40 }\n\n.border-olive { border-color: #3D9970 }\n\n.border-lime  { border-color: #01FF70 }\n\n.border-yellow  { border-color: #FFDC00 }\n\n.border-orange  { border-color: #FF851B }\n\n.border-red     { border-color: #FF4136 }\n\n.border-fuchsia { border-color: #F012BE }\n\n.border-purple  { border-color: #B10DC9 }\n\n.border-maroon  { border-color: #85144B }\n\n/* Basscss Darken */\n\n.bg-darken-1 { background-color: rgba(0, 0, 0, .0625) }\n\n.bg-darken-2 { background-color: rgba(0, 0, 0, .125) }\n\n.bg-darken-3 { background-color: rgba(0, 0, 0, .25) }\n\n.bg-darken-4 { background-color: rgba(0, 0, 0, .5) }\n\n/* Basscss Lighten */\n\n.bg-lighten-1 { background-color: rgba(255, 255, 255, .0625) }\n\n.bg-lighten-2 { background-color: rgba(255, 255, 255, .125) }\n\n.bg-lighten-3 { background-color: rgba(255, 255, 255, .25) }\n\n.bg-lighten-4 { background-color: rgba(255, 255, 255, .5) }\n\n/* Basscss Background Images */\n\n.bg-cover   { background-size: cover }\n\n.bg-contain { background-size: contain }\n\n.bg-center  { background-position: center }\n\n.bg-top     { background-position: top }\n\n.bg-right   { background-position: right }\n\n.bg-bottom  { background-position: bottom }\n\n.bg-left    { background-position: left }\n\n.bg-no-repeat { background-repeat: no-repeat }\n\n.bg-repeat-x { background-repeat: repeat-x }\n\n.bg-repeat-y { background-repeat: repeat-y }\n\n/* Basscss All */\n\n.all-initial { all: initial }\n\n.all-unset { all: unset }\n\n.all-inherit { all: inherit }\n\n.all-revert { all: revert }\n\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./font-awesome.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./font-awesome.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(8) + ");\n  src: url(" + __webpack_require__(9) + "?#iefix&v=4.7.0) format('embedded-opentype'), url(" + __webpack_require__(10) + ") format('woff2'), url(" + __webpack_require__(11) + ") format('woff'), url(" + __webpack_require__(12) + ") format('truetype'), url(" + __webpack_require__(13) + "#fontawesomeregular) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\";\n}\n.fa-music:before {\n  content: \"\\F001\";\n}\n.fa-search:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.fa-heart:before {\n  content: \"\\F004\";\n}\n.fa-star:before {\n  content: \"\\F005\";\n}\n.fa-star-o:before {\n  content: \"\\F006\";\n}\n.fa-user:before {\n  content: \"\\F007\";\n}\n.fa-film:before {\n  content: \"\\F008\";\n}\n.fa-th-large:before {\n  content: \"\\F009\";\n}\n.fa-th:before {\n  content: \"\\F00A\";\n}\n.fa-th-list:before {\n  content: \"\\F00B\";\n}\n.fa-check:before {\n  content: \"\\F00C\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus:before {\n  content: \"\\F010\";\n}\n.fa-power-off:before {\n  content: \"\\F011\";\n}\n.fa-signal:before {\n  content: \"\\F012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\";\n}\n.fa-trash-o:before {\n  content: \"\\F014\";\n}\n.fa-home:before {\n  content: \"\\F015\";\n}\n.fa-file-o:before {\n  content: \"\\F016\";\n}\n.fa-clock-o:before {\n  content: \"\\F017\";\n}\n.fa-road:before {\n  content: \"\\F018\";\n}\n.fa-download:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.fa-inbox:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\";\n}\n.fa-refresh:before {\n  content: \"\\F021\";\n}\n.fa-list-alt:before {\n  content: \"\\F022\";\n}\n.fa-lock:before {\n  content: \"\\F023\";\n}\n.fa-flag:before {\n  content: \"\\F024\";\n}\n.fa-headphones:before {\n  content: \"\\F025\";\n}\n.fa-volume-off:before {\n  content: \"\\F026\";\n}\n.fa-volume-down:before {\n  content: \"\\F027\";\n}\n.fa-volume-up:before {\n  content: \"\\F028\";\n}\n.fa-qrcode:before {\n  content: \"\\F029\";\n}\n.fa-barcode:before {\n  content: \"\\F02A\";\n}\n.fa-tag:before {\n  content: \"\\F02B\";\n}\n.fa-tags:before {\n  content: \"\\F02C\";\n}\n.fa-book:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.fa-print:before {\n  content: \"\\F02F\";\n}\n.fa-camera:before {\n  content: \"\\F030\";\n}\n.fa-font:before {\n  content: \"\\F031\";\n}\n.fa-bold:before {\n  content: \"\\F032\";\n}\n.fa-italic:before {\n  content: \"\\F033\";\n}\n.fa-text-height:before {\n  content: \"\\F034\";\n}\n.fa-text-width:before {\n  content: \"\\F035\";\n}\n.fa-align-left:before {\n  content: \"\\F036\";\n}\n.fa-align-center:before {\n  content: \"\\F037\";\n}\n.fa-align-right:before {\n  content: \"\\F038\";\n}\n.fa-align-justify:before {\n  content: \"\\F039\";\n}\n.fa-list:before {\n  content: \"\\F03A\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\";\n}\n.fa-indent:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.fa-pencil:before {\n  content: \"\\F040\";\n}\n.fa-map-marker:before {\n  content: \"\\F041\";\n}\n.fa-adjust:before {\n  content: \"\\F042\";\n}\n.fa-tint:before {\n  content: \"\\F043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.fa-arrows:before {\n  content: \"\\F047\";\n}\n.fa-step-backward:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.fa-backward:before {\n  content: \"\\F04A\";\n}\n.fa-play:before {\n  content: \"\\F04B\";\n}\n.fa-pause:before {\n  content: \"\\F04C\";\n}\n.fa-stop:before {\n  content: \"\\F04D\";\n}\n.fa-forward:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.fa-step-forward:before {\n  content: \"\\F051\";\n}\n.fa-eject:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.fa-times-circle:before {\n  content: \"\\F057\";\n}\n.fa-check-circle:before {\n  content: \"\\F058\";\n}\n.fa-question-circle:before {\n  content: \"\\F059\";\n}\n.fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.fa-ban:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\";\n}\n.fa-expand:before {\n  content: \"\\F065\";\n}\n.fa-compress:before {\n  content: \"\\F066\";\n}\n.fa-plus:before {\n  content: \"\\F067\";\n}\n.fa-minus:before {\n  content: \"\\F068\";\n}\n.fa-asterisk:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.fa-gift:before {\n  content: \"\\F06B\";\n}\n.fa-leaf:before {\n  content: \"\\F06C\";\n}\n.fa-fire:before {\n  content: \"\\F06D\";\n}\n.fa-eye:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.fa-plane:before {\n  content: \"\\F072\";\n}\n.fa-calendar:before {\n  content: \"\\F073\";\n}\n.fa-random:before {\n  content: \"\\F074\";\n}\n.fa-comment:before {\n  content: \"\\F075\";\n}\n.fa-magnet:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.fa-retweet:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.fa-folder:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.fa-key:before {\n  content: \"\\F084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\";\n}\n.fa-comments:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.fa-star-half:before {\n  content: \"\\F089\";\n}\n.fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.fa-external-link:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in:before {\n  content: \"\\F090\";\n}\n.fa-trophy:before {\n  content: \"\\F091\";\n}\n.fa-github-square:before {\n  content: \"\\F092\";\n}\n.fa-upload:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.fa-phone:before {\n  content: \"\\F095\";\n}\n.fa-square-o:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.fa-phone-square:before {\n  content: \"\\F098\";\n}\n.fa-twitter:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\";\n}\n.fa-github:before {\n  content: \"\\F09B\";\n}\n.fa-unlock:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.fa-bell:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.fa-globe:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.fa-filter:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.fa-flask:before {\n  content: \"\\F0C3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.fa-square:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.fa-underline:before {\n  content: \"\\F0CD\";\n}\n.fa-table:before {\n  content: \"\\F0CE\";\n}\n.fa-magic:before {\n  content: \"\\F0D0\";\n}\n.fa-truck:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.fa-money:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.fa-columns:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.fa-beer:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.fa-angle-left:before {\n  content: \"\\F104\";\n}\n.fa-angle-right:before {\n  content: \"\\F105\";\n}\n.fa-angle-up:before {\n  content: \"\\F106\";\n}\n.fa-angle-down:before {\n  content: \"\\F107\";\n}\n.fa-desktop:before {\n  content: \"\\F108\";\n}\n.fa-laptop:before {\n  content: \"\\F109\";\n}\n.fa-tablet:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.fa-spinner:before {\n  content: \"\\F110\";\n}\n.fa-circle:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\";\n}\n.fa-github-alt:before {\n  content: \"\\F113\";\n}\n.fa-folder-o:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.fa-smile-o:before {\n  content: \"\\F118\";\n}\n.fa-frown-o:before {\n  content: \"\\F119\";\n}\n.fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.fa-terminal:before {\n  content: \"\\F120\";\n}\n.fa-code:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.fa-crop:before {\n  content: \"\\F125\";\n}\n.fa-code-fork:before {\n  content: \"\\F126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.fa-question:before {\n  content: \"\\F128\";\n}\n.fa-info:before {\n  content: \"\\F129\";\n}\n.fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.fa-superscript:before {\n  content: \"\\F12B\";\n}\n.fa-subscript:before {\n  content: \"\\F12C\";\n}\n.fa-eraser:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.fa-microphone:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.fa-shield:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.fa-rocket:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.fa-html5:before {\n  content: \"\\F13B\";\n}\n.fa-css3:before {\n  content: \"\\F13C\";\n}\n.fa-anchor:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.fa-rss-square:before {\n  content: \"\\F143\";\n}\n.fa-play-circle:before {\n  content: \"\\F144\";\n}\n.fa-ticket:before {\n  content: \"\\F145\";\n}\n.fa-minus-square:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.fa-level-up:before {\n  content: \"\\F148\";\n}\n.fa-level-down:before {\n  content: \"\\F149\";\n}\n.fa-check-square:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.fa-share-square:before {\n  content: \"\\F14D\";\n}\n.fa-compass:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\";\n}\n.fa-gbp:before {\n  content: \"\\F154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\";\n}\n.fa-file:before {\n  content: \"\\F15B\";\n}\n.fa-file-text:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.fa-youtube:before {\n  content: \"\\F167\";\n}\n.fa-xing:before {\n  content: \"\\F168\";\n}\n.fa-xing-square:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.fa-instagram:before {\n  content: \"\\F16D\";\n}\n.fa-flickr:before {\n  content: \"\\F16E\";\n}\n.fa-adn:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.fa-tumblr:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.fa-apple:before {\n  content: \"\\F179\";\n}\n.fa-windows:before {\n  content: \"\\F17A\";\n}\n.fa-android:before {\n  content: \"\\F17B\";\n}\n.fa-linux:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.fa-skype:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare:before {\n  content: \"\\F180\";\n}\n.fa-trello:before {\n  content: \"\\F181\";\n}\n.fa-female:before {\n  content: \"\\F182\";\n}\n.fa-male:before {\n  content: \"\\F183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\";\n}\n.fa-sun-o:before {\n  content: \"\\F185\";\n}\n.fa-moon-o:before {\n  content: \"\\F186\";\n}\n.fa-archive:before {\n  content: \"\\F187\";\n}\n.fa-bug:before {\n  content: \"\\F188\";\n}\n.fa-vk:before {\n  content: \"\\F189\";\n}\n.fa-weibo:before {\n  content: \"\\F18A\";\n}\n.fa-renren:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.fa-slack:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.fa-openid:before {\n  content: \"\\F19B\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.fa-google:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.fa-digg:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.fa-language:before {\n  content: \"\\F1AB\";\n}\n.fa-fax:before {\n  content: \"\\F1AC\";\n}\n.fa-building:before {\n  content: \"\\F1AD\";\n}\n.fa-child:before {\n  content: \"\\F1AE\";\n}\n.fa-paw:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.fa-cube:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.fa-behance:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.fa-steam:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.fa-tree:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.fa-database:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.fa-vine:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.fa-git:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.fa-qq:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.fa-history:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.fa-header:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.fa-tty:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.fa-plug:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.fa-trash:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.fa-at:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.fa-line-chart:before {\n  content: \"\\F201\";\n}\n.fa-lastfm:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.fa-bicycle:before {\n  content: \"\\F206\";\n}\n.fa-bus:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.fa-angellist:before {\n  content: \"\\F209\";\n}\n.fa-cc:before {\n  content: \"\\F20A\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube:before {\n  content: \"\\F210\";\n}\n.fa-forumbee:before {\n  content: \"\\F211\";\n}\n.fa-leanpub:before {\n  content: \"\\F212\";\n}\n.fa-sellsy:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.fa-diamond:before {\n  content: \"\\F219\";\n}\n.fa-ship:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.fa-street-view:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.fa-venus:before {\n  content: \"\\F221\";\n}\n.fa-mars:before {\n  content: \"\\F222\";\n}\n.fa-mercury:before {\n  content: \"\\F223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.fa-venus-double:before {\n  content: \"\\F226\";\n}\n.fa-mars-double:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.fa-neuter:before {\n  content: \"\\F22C\";\n}\n.fa-genderless:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.fa-server:before {\n  content: \"\\F233\";\n}\n.fa-user-plus:before {\n  content: \"\\F234\";\n}\n.fa-user-times:before {\n  content: \"\\F235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\";\n}\n.fa-viacoin:before {\n  content: \"\\F237\";\n}\n.fa-train:before {\n  content: \"\\F238\";\n}\n.fa-subway:before {\n  content: \"\\F239\";\n}\n.fa-medium:before {\n  content: \"\\F23A\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.fa-opencart:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\F240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.fa-object-group:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.fa-clone:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.fa-hourglass:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.fa-trademark:before {\n  content: \"\\F25C\";\n}\n.fa-registered:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.fa-gg:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.fa-safari:before {\n  content: \"\\F267\";\n}\n.fa-chrome:before {\n  content: \"\\F268\";\n}\n.fa-firefox:before {\n  content: \"\\F269\";\n}\n.fa-opera:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\";\n}\n.fa-contao:before {\n  content: \"\\F26D\";\n}\n.fa-500px:before {\n  content: \"\\F26E\";\n}\n.fa-amazon:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.fa-industry:before {\n  content: \"\\F275\";\n}\n.fa-map-pin:before {\n  content: \"\\F276\";\n}\n.fa-map-signs:before {\n  content: \"\\F277\";\n}\n.fa-map-o:before {\n  content: \"\\F278\";\n}\n.fa-map:before {\n  content: \"\\F279\";\n}\n.fa-commenting:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.fa-houzz:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.fa-edge:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.fa-codiepie:before {\n  content: \"\\F284\";\n}\n.fa-modx:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.fa-usb:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.fa-scribd:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.fa-hashtag:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.fa-percent:before {\n  content: \"\\F295\";\n}\n.fa-gitlab:before {\n  content: \"\\F296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\F297\";\n}\n.fa-wpforms:before {\n  content: \"\\F298\";\n}\n.fa-envira:before {\n  content: \"\\F299\";\n}\n.fa-universal-access:before {\n  content: \"\\F29A\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\F29B\";\n}\n.fa-question-circle-o:before {\n  content: \"\\F29C\";\n}\n.fa-blind:before {\n  content: \"\\F29D\";\n}\n.fa-audio-description:before {\n  content: \"\\F29E\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\F2A0\";\n}\n.fa-braille:before {\n  content: \"\\F2A1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\F2A2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\F2A4\";\n}\n.fa-glide:before {\n  content: \"\\F2A5\";\n}\n.fa-glide-g:before {\n  content: \"\\F2A6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\F2A7\";\n}\n.fa-low-vision:before {\n  content: \"\\F2A8\";\n}\n.fa-viadeo:before {\n  content: \"\\F2A9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\F2AA\";\n}\n.fa-snapchat:before {\n  content: \"\\F2AB\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\F2AC\";\n}\n.fa-snapchat-square:before {\n  content: \"\\F2AD\";\n}\n.fa-pied-piper:before {\n  content: \"\\F2AE\";\n}\n.fa-first-order:before {\n  content: \"\\F2B0\";\n}\n.fa-yoast:before {\n  content: \"\\F2B1\";\n}\n.fa-themeisle:before {\n  content: \"\\F2B2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\F2B3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\F2B4\";\n}\n.fa-handshake-o:before {\n  content: \"\\F2B5\";\n}\n.fa-envelope-open:before {\n  content: \"\\F2B6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\F2B7\";\n}\n.fa-linode:before {\n  content: \"\\F2B8\";\n}\n.fa-address-book:before {\n  content: \"\\F2B9\";\n}\n.fa-address-book-o:before {\n  content: \"\\F2BA\";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\F2BB\";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\F2BC\";\n}\n.fa-user-circle:before {\n  content: \"\\F2BD\";\n}\n.fa-user-circle-o:before {\n  content: \"\\F2BE\";\n}\n.fa-user-o:before {\n  content: \"\\F2C0\";\n}\n.fa-id-badge:before {\n  content: \"\\F2C1\";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\F2C2\";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\F2C3\";\n}\n.fa-quora:before {\n  content: \"\\F2C4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\F2C5\";\n}\n.fa-telegram:before {\n  content: \"\\F2C6\";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\F2C7\";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\F2C8\";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\F2C9\";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\F2CA\";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\F2CB\";\n}\n.fa-shower:before {\n  content: \"\\F2CC\";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\F2CD\";\n}\n.fa-podcast:before {\n  content: \"\\F2CE\";\n}\n.fa-window-maximize:before {\n  content: \"\\F2D0\";\n}\n.fa-window-minimize:before {\n  content: \"\\F2D1\";\n}\n.fa-window-restore:before {\n  content: \"\\F2D2\";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\F2D3\";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\F2D4\";\n}\n.fa-bandcamp:before {\n  content: \"\\F2D5\";\n}\n.fa-grav:before {\n  content: \"\\F2D6\";\n}\n.fa-etsy:before {\n  content: \"\\F2D7\";\n}\n.fa-imdb:before {\n  content: \"\\F2D8\";\n}\n.fa-ravelry:before {\n  content: \"\\F2D9\";\n}\n.fa-eercast:before {\n  content: \"\\F2DA\";\n}\n.fa-microchip:before {\n  content: \"\\F2DB\";\n}\n.fa-snowflake-o:before {\n  content: \"\\F2DC\";\n}\n.fa-superpowers:before {\n  content: \"\\F2DD\";\n}\n.fa-wpexplorer:before {\n  content: \"\\F2DE\";\n}\n.fa-meetup:before {\n  content: \"\\F2E0\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "674f50d287a8c48dc19ba404d20fe713.eot";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "674f50d287a8c48dc19ba404d20fe713.eot";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "af7ae505a9eed503f8b8e6982036873e.woff2";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fee66e712a8a08eef5805a46892932ad.woff";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b06871f281fee6b241d60582ae9369b9.ttf";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "912ec66d7572ff821749319396470bde.svg";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./styles.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*\n$bg-color-1: rgb(2, 48, 87);\n$color-1: rgb(98, 144, 183);\n\n$bg-color-2: rgb(3, 75, 138);\n$color-2: rgb(99, 171, 234);\n\n$bg-color-3: rgb(3, 102, 189);\n$color-3: rgb(0, 6, 93);\n\n$bg-color-4: rgb(2, 129, 240);\n$color-4: rgb(0, 33, 144);\n\n$bg-color-5: rgb(40, 154, 254);\n$color-5: rgb(0, 58, 158);\n*/\n::-webkit-scrollbar {\n  width: 6px;\n  /* for vertical scrollbars */\n  height: 6px;\n  /* for horizontal scrollbars */ }\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5); }\n\n.wrapper {\n  margin: 0 auto;\n  padding: 40px;\n  max-width: 800px; }\n\n.table {\n  margin: 0 0 40px 0;\n  width: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  display: table; }\n\n@media screen and (max-width: 580px) {\n  .table {\n    display: block; } }\n\n.row {\n  display: table-row;\n  background: #f6f6f6; }\n\n.row:nth-of-type(odd) {\n  background: #e9e9e9; }\n\n.row.header {\n  font-weight: 900;\n  color: #ffffff;\n  background: #ea6153; }\n\n.row.green {\n  background: #27ae60; }\n\n.row.blue {\n  background: #2980b9; }\n\n@media screen and (max-width: 580px) {\n  .row {\n    padding: 8px 0;\n    display: block; } }\n\n.cell {\n  padding: 6px 12px;\n  display: table-cell; }\n\n@media screen and (max-width: 580px) {\n  .cell {\n    padding: 2px 12px;\n    display: block; } }\n\n/*-------------------------*/\n.k-icon {\n  min-width: 16px; }\n\ndiv.k-treeview {\n  border-width: 0;\n  background: 0;\n  overflow: auto;\n  white-space: nowrap; }\n\n.k-treeview .k-item {\n  display: block;\n  border-width: 0;\n  margin: 0;\n  padding: 0 0 0 16px; }\n\n.k-treeview > .k-group, .k-treeview .k-item > .k-group, .k-treeview .k-content {\n  margin: 0;\n  padding: 0;\n  background: 0;\n  list-style-type: none;\n  position: relative; }\n\n.k-treeview .k-icon, .k-treeview .k-image, .k-treeview .k-sprite, .k-treeview .k-checkbox, .k-treeview .k-in {\n  display: inline-block;\n  vertical-align: top; }\n\n.k-treeview .k-plus, .k-treeview .k-minus, .k-treeview .k-plus-disabled, .k-treeview .k-minus-disabled {\n  /*margin-top: 3px;*/\n  margin-left: -16px;\n  cursor: pointer; }\n\n.k-treeview .k-plus-disabled, .k-treeview .k-minus-disabled {\n  cursor: default; }\n\n.k-treeview .k-sprite, .k-treeview .k-image {\n  margin-right: 3px; }\n\n.k-treeview .k-in {\n  margin: 1px 0 1px 2px;\n  padding: 2px 4px 2px 3px;\n  line-height: 16px;\n  text-decoration: none; }\n\n.k-treeview span.k-in {\n  cursor: default; }\n\n.k-treeview .k-in.k-state-hover, .k-treeview .k-in.k-state-selected, .k-treeview .k-in.k-state-focused {\n  border-style: solid;\n  border-width: 1px;\n  padding: 1px 3px 1px 2px; }\n\n.k-treeview .k-drop-hint {\n  position: absolute;\n  z-index: 10000;\n  visibility: hidden;\n  width: 80px;\n  height: 5px;\n  margin-top: -3px;\n  background-color: transparent;\n  background-repeat: no-repeat; }\n\n/* --------------------------------------------- */\n.k-icon:hover, .k-state-hover .k-icon, .k-state-selected .k-icon, .k-state-focused .k-icon, .k-column-menu .k-state-hover .k-sprite, .k-column-menu .k-state-active .k-sprite {\n  opacity: 1; }\n\n.k-icon, .k-state-disabled .k-icon, .k-column-menu .k-sprite {\n  opacity: 1; }\n\n.k-icon, .k-tool-icon, .k-grouping-dropclue, .k-drop-hint, .k-column-menu .k-sprite {\n  /*background-image: url('Bootstrap/sprite.png');*/\n  border-color: transparent;\n  /*padding-right: 4px;*/ }\n\n.k-state-selected {\n  color: #fff;\n  background-color: #033241;\n  border-color: #033241;\n  border-radius: 4px; }\n\n/* ---------------------------------------------- */\n.layout {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n\n.navbar {\n  height: 52px;\n  color: #e3f8ff;\n  background-color: #0591bf; }\n\n.fullview {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch; }\n\n.footer {\n  height: 40px;\n  color: #e3f8ff;\n  background-color: #0591bf; }\n\n.sidebar {\n  width: 370px;\n  padding: 16px;\n  overflow: auto;\n  background-color: #05a7db;\n  color: #e3f8ff;\n  border-right: 1px solid #0591bf; }\n\n.body {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  /*\n    position: relative;\n    padding-top: 52px;\n    padding-left: 370px;\n    */ }\n\n.body-header {\n  flex: 0 0 auto;\n  display: flex;\n  color: #033241;\n  border-bottom: 1px solid #0591bf; }\n\n.body-header-image {\n  flex: 0 0 auto;\n  background-color: #a7eaff;\n  color: #033241;\n  width: 280px;\n  border: 8px solid #a7eaff;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position-x: center; }\n\n.body-header-content {\n  flex: 0 0 auto;\n  background-color: #e3f8ff;\n  border-left: 1px solid #0591bf;\n  color: #033241; }\n\n.body-header-extra {\n  flex: 1 1 auto;\n  background-color: #e3f8ff;\n  color: #033241; }\n\n.body-content {\n  display: flex;\n  flex: 1 1 auto;\n  background-color: #FFFFFF;\n  flex-direction: row;\n  align-items: stretch; }\n\n.body-content-sidebar {\n  flex: 0 0 auto;\n  display: flex;\n  background-color: #a7eaff;\n  border-right: 1px solid #0591bf;\n  color: #033241;\n  width: 280px;\n  padding: 8px;\n  overflow: auto; }\n\n.body-content-content {\n  flex: 1 1 auto;\n  background-color: #e3f8ff;\n  color: #033241;\n  padding: 8px;\n  overflow: auto; }\n\nabbr[title] {\n  cursor: help;\n  border-bottom: 1px dotted #033241; }\n\ndiv.body-path {\n  display: flex;\n  flex: 0 0 auto;\n  background-color: #05bcf7;\n  color: #033241;\n  border-bottom: 1px solid #0591bf; }\n\n.body-path div {\n  display: inline-block; }\n\n.path-item {\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  color: #033241; }\n\n.clickable {\n  cursor: pointer;\n  color: #e3f8ff; }\n\n.clickable:hover {\n  text-decoration: underline; }\n\n.breadcrumb {\n  flex: 1 1 auto;\n  padding: 0.5em; }\n\n.body-path div.tabs {\n  flex: 0 1 auto;\n  display: flex;\n  align-items: flex-end; }\n\n.body-path div.tab {\n  margin-bottom: -1px;\n  margin-right: 0.25em;\n  display: block;\n  padding: 0.35em 0.75em;\n  border-top-left-radius: 0.25em;\n  border-top-right-radius: 0.25em; }\n\n.body-path div.tab.active {\n  border-left: 1px solid #0591bf;\n  border-top: 1px solid #0591bf;\n  border-right: 1px solid #0591bf;\n  background-color: #e3f8ff;\n  color: #033241; }\n\n.body-path div.tab.clickable {\n  border-bottom: 1px solid #0591bf;\n  background-color: #05bcf7;\n  color: #033241; }\n\n.body-path div.tab.clickable:hover {\n  background-color: #05a7db;\n  text-decoration: none; }\n", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports) {

	function helloWorld() {
	  console.log("Hello, World");
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 18 */
/***/ function(module, exports) {

	
	(function() {
	'use strict';

	function F2(fun)
	{
	  function wrapper(a) { return function(b) { return fun(a,b); }; }
	  wrapper.arity = 2;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F3(fun)
	{
	  function wrapper(a) {
	    return function(b) { return function(c) { return fun(a, b, c); }; };
	  }
	  wrapper.arity = 3;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F4(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return fun(a, b, c, d); }; }; };
	  }
	  wrapper.arity = 4;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F5(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
	  }
	  wrapper.arity = 5;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F6(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return fun(a, b, c, d, e, f); }; }; }; }; };
	  }
	  wrapper.arity = 6;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F7(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
	  }
	  wrapper.arity = 7;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F8(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return function(h) {
	    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
	  }
	  wrapper.arity = 8;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F9(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return function(h) { return function(i) {
	    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
	  }
	  wrapper.arity = 9;
	  wrapper.func = fun;
	  return wrapper;
	}

	function A2(fun, a, b)
	{
	  return fun.arity === 2
	    ? fun.func(a, b)
	    : fun(a)(b);
	}
	function A3(fun, a, b, c)
	{
	  return fun.arity === 3
	    ? fun.func(a, b, c)
	    : fun(a)(b)(c);
	}
	function A4(fun, a, b, c, d)
	{
	  return fun.arity === 4
	    ? fun.func(a, b, c, d)
	    : fun(a)(b)(c)(d);
	}
	function A5(fun, a, b, c, d, e)
	{
	  return fun.arity === 5
	    ? fun.func(a, b, c, d, e)
	    : fun(a)(b)(c)(d)(e);
	}
	function A6(fun, a, b, c, d, e, f)
	{
	  return fun.arity === 6
	    ? fun.func(a, b, c, d, e, f)
	    : fun(a)(b)(c)(d)(e)(f);
	}
	function A7(fun, a, b, c, d, e, f, g)
	{
	  return fun.arity === 7
	    ? fun.func(a, b, c, d, e, f, g)
	    : fun(a)(b)(c)(d)(e)(f)(g);
	}
	function A8(fun, a, b, c, d, e, f, g, h)
	{
	  return fun.arity === 8
	    ? fun.func(a, b, c, d, e, f, g, h)
	    : fun(a)(b)(c)(d)(e)(f)(g)(h);
	}
	function A9(fun, a, b, c, d, e, f, g, h, i)
	{
	  return fun.arity === 9
	    ? fun.func(a, b, c, d, e, f, g, h, i)
	    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
	}

	//import Native.List //

	var _elm_lang$core$Native_Array = function() {

	// A RRB-Tree has two distinct data types.
	// Leaf -> "height"  is always 0
	//         "table"   is an array of elements
	// Node -> "height"  is always greater than 0
	//         "table"   is an array of child nodes
	//         "lengths" is an array of accumulated lengths of the child nodes

	// M is the maximal table size. 32 seems fast. E is the allowed increase
	// of search steps when concatting to find an index. Lower values will
	// decrease balancing, but will increase search steps.
	var M = 32;
	var E = 2;

	// An empty array.
	var empty = {
		ctor: '_Array',
		height: 0,
		table: []
	};


	function get(i, array)
	{
		if (i < 0 || i >= length(array))
		{
			throw new Error(
				'Index ' + i + ' is out of range. Check the length of ' +
				'your array first or use getMaybe or getWithDefault.');
		}
		return unsafeGet(i, array);
	}


	function unsafeGet(i, array)
	{
		for (var x = array.height; x > 0; x--)
		{
			var slot = i >> (x * 5);
			while (array.lengths[slot] <= i)
			{
				slot++;
			}
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array = array.table[slot];
		}
		return array.table[i];
	}


	// Sets the value at the index i. Only the nodes leading to i will get
	// copied and updated.
	function set(i, item, array)
	{
		if (i < 0 || length(array) <= i)
		{
			return array;
		}
		return unsafeSet(i, item, array);
	}


	function unsafeSet(i, item, array)
	{
		array = nodeCopy(array);

		if (array.height === 0)
		{
			array.table[i] = item;
		}
		else
		{
			var slot = getSlot(i, array);
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array.table[slot] = unsafeSet(i, item, array.table[slot]);
		}
		return array;
	}


	function initialize(len, f)
	{
		if (len <= 0)
		{
			return empty;
		}
		var h = Math.floor( Math.log(len) / Math.log(M) );
		return initialize_(f, h, 0, len);
	}

	function initialize_(f, h, from, to)
	{
		if (h === 0)
		{
			var table = new Array((to - from) % (M + 1));
			for (var i = 0; i < table.length; i++)
			{
			  table[i] = f(from + i);
			}
			return {
				ctor: '_Array',
				height: 0,
				table: table
			};
		}

		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
		}
		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}

	function fromList(list)
	{
		if (list.ctor === '[]')
		{
			return empty;
		}

		// Allocate M sized blocks (table) and write list elements to it.
		var table = new Array(M);
		var nodes = [];
		var i = 0;

		while (list.ctor !== '[]')
		{
			table[i] = list._0;
			list = list._1;
			i++;

			// table is full, so we can push a leaf containing it into the
			// next node.
			if (i === M)
			{
				var leaf = {
					ctor: '_Array',
					height: 0,
					table: table
				};
				fromListPush(leaf, nodes);
				table = new Array(M);
				i = 0;
			}
		}

		// Maybe there is something left on the table.
		if (i > 0)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table.splice(0, i)
			};
			fromListPush(leaf, nodes);
		}

		// Go through all of the nodes and eventually push them into higher nodes.
		for (var h = 0; h < nodes.length - 1; h++)
		{
			if (nodes[h].table.length > 0)
			{
				fromListPush(nodes[h], nodes);
			}
		}

		var head = nodes[nodes.length - 1];
		if (head.height > 0 && head.table.length === 1)
		{
			return head.table[0];
		}
		else
		{
			return head;
		}
	}

	// Push a node into a higher node as a child.
	function fromListPush(toPush, nodes)
	{
		var h = toPush.height;

		// Maybe the node on this height does not exist.
		if (nodes.length === h)
		{
			var node = {
				ctor: '_Array',
				height: h + 1,
				table: [],
				lengths: []
			};
			nodes.push(node);
		}

		nodes[h].table.push(toPush);
		var len = length(toPush);
		if (nodes[h].lengths.length > 0)
		{
			len += nodes[h].lengths[nodes[h].lengths.length - 1];
		}
		nodes[h].lengths.push(len);

		if (nodes[h].table.length === M)
		{
			fromListPush(nodes[h], nodes);
			nodes[h] = {
				ctor: '_Array',
				height: h + 1,
				table: [],
				lengths: []
			};
		}
	}

	// Pushes an item via push_ to the bottom right of a tree.
	function push(item, a)
	{
		var pushed = push_(item, a);
		if (pushed !== null)
		{
			return pushed;
		}

		var newTree = create(item, a.height);
		return siblise(a, newTree);
	}

	// Recursively tries to push an item to the bottom-right most
	// tree possible. If there is no space left for the item,
	// null will be returned.
	function push_(item, a)
	{
		// Handle resursion stop at leaf level.
		if (a.height === 0)
		{
			if (a.table.length < M)
			{
				var newA = {
					ctor: '_Array',
					height: 0,
					table: a.table.slice()
				};
				newA.table.push(item);
				return newA;
			}
			else
			{
			  return null;
			}
		}

		// Recursively push
		var pushed = push_(item, botRight(a));

		// There was space in the bottom right tree, so the slot will
		// be updated.
		if (pushed !== null)
		{
			var newA = nodeCopy(a);
			newA.table[newA.table.length - 1] = pushed;
			newA.lengths[newA.lengths.length - 1]++;
			return newA;
		}

		// When there was no space left, check if there is space left
		// for a new slot with a tree which contains only the item
		// at the bottom.
		if (a.table.length < M)
		{
			var newSlot = create(item, a.height - 1);
			var newA = nodeCopy(a);
			newA.table.push(newSlot);
			newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
			return newA;
		}
		else
		{
			return null;
		}
	}

	// Converts an array into a list of elements.
	function toList(a)
	{
		return toList_(_elm_lang$core$Native_List.Nil, a);
	}

	function toList_(list, a)
	{
		for (var i = a.table.length - 1; i >= 0; i--)
		{
			list =
				a.height === 0
					? _elm_lang$core$Native_List.Cons(a.table[i], list)
					: toList_(list, a.table[i]);
		}
		return list;
	}

	// Maps a function over the elements of an array.
	function map(f, a)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height === 0
					? f(a.table[i])
					: map(f, a.table[i]);
		}
		return newA;
	}

	// Maps a function over the elements with their index as first argument.
	function indexedMap(f, a)
	{
		return indexedMap_(f, a, 0);
	}

	function indexedMap_(f, a, from)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height === 0
					? A2(f, from + i, a.table[i])
					: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
		}
		return newA;
	}

	function foldl(f, b, a)
	{
		if (a.height === 0)
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = foldl(f, b, a.table[i]);
			}
		}
		return b;
	}

	function foldr(f, b, a)
	{
		if (a.height === 0)
		{
			for (var i = a.table.length; i--; )
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = a.table.length; i--; )
			{
				b = foldr(f, b, a.table[i]);
			}
		}
		return b;
	}

	// TODO: currently, it slices the right, then the left. This can be
	// optimized.
	function slice(from, to, a)
	{
		if (from < 0)
		{
			from += length(a);
		}
		if (to < 0)
		{
			to += length(a);
		}
		return sliceLeft(from, sliceRight(to, a));
	}

	function sliceRight(to, a)
	{
		if (to === length(a))
		{
			return a;
		}

		// Handle leaf level.
		if (a.height === 0)
		{
			var newA = { ctor:'_Array', height:0 };
			newA.table = a.table.slice(0, to);
			return newA;
		}

		// Slice the right recursively.
		var right = getSlot(to, a);
		var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (right === 0)
		{
			return sliced;
		}

		// Create new node.
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice(0, right),
			lengths: a.lengths.slice(0, right)
		};
		if (sliced.table.length > 0)
		{
			newA.table[right] = sliced;
			newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
		}
		return newA;
	}

	function sliceLeft(from, a)
	{
		if (from === 0)
		{
			return a;
		}

		// Handle leaf level.
		if (a.height === 0)
		{
			var newA = { ctor:'_Array', height:0 };
			newA.table = a.table.slice(from, a.table.length + 1);
			return newA;
		}

		// Slice the left recursively.
		var left = getSlot(from, a);
		var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (left === a.table.length - 1)
		{
			return sliced;
		}

		// Create new node.
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice(left, a.table.length + 1),
			lengths: new Array(a.table.length - left)
		};
		newA.table[0] = sliced;
		var len = 0;
		for (var i = 0; i < newA.table.length; i++)
		{
			len += length(newA.table[i]);
			newA.lengths[i] = len;
		}

		return newA;
	}

	// Appends two trees.
	function append(a,b)
	{
		if (a.table.length === 0)
		{
			return b;
		}
		if (b.table.length === 0)
		{
			return a;
		}

		var c = append_(a, b);

		// Check if both nodes can be crunshed together.
		if (c[0].table.length + c[1].table.length <= M)
		{
			if (c[0].table.length === 0)
			{
				return c[1];
			}
			if (c[1].table.length === 0)
			{
				return c[0];
			}

			// Adjust .table and .lengths
			c[0].table = c[0].table.concat(c[1].table);
			if (c[0].height > 0)
			{
				var len = length(c[0]);
				for (var i = 0; i < c[1].lengths.length; i++)
				{
					c[1].lengths[i] += len;
				}
				c[0].lengths = c[0].lengths.concat(c[1].lengths);
			}

			return c[0];
		}

		if (c[0].height > 0)
		{
			var toRemove = calcToRemove(a, b);
			if (toRemove > E)
			{
				c = shuffle(c[0], c[1], toRemove);
			}
		}

		return siblise(c[0], c[1]);
	}

	// Returns an array of two nodes; right and left. One node _may_ be empty.
	function append_(a, b)
	{
		if (a.height === 0 && b.height === 0)
		{
			return [a, b];
		}

		if (a.height !== 1 || b.height !== 1)
		{
			if (a.height === b.height)
			{
				a = nodeCopy(a);
				b = nodeCopy(b);
				var appended = append_(botRight(a), botLeft(b));

				insertRight(a, appended[1]);
				insertLeft(b, appended[0]);
			}
			else if (a.height > b.height)
			{
				a = nodeCopy(a);
				var appended = append_(botRight(a), b);

				insertRight(a, appended[0]);
				b = parentise(appended[1], appended[1].height + 1);
			}
			else
			{
				b = nodeCopy(b);
				var appended = append_(a, botLeft(b));

				var left = appended[0].table.length === 0 ? 0 : 1;
				var right = left === 0 ? 1 : 0;
				insertLeft(b, appended[left]);
				a = parentise(appended[right], appended[right].height + 1);
			}
		}

		// Check if balancing is needed and return based on that.
		if (a.table.length === 0 || b.table.length === 0)
		{
			return [a, b];
		}

		var toRemove = calcToRemove(a, b);
		if (toRemove <= E)
		{
			return [a, b];
		}
		return shuffle(a, b, toRemove);
	}

	// Helperfunctions for append_. Replaces a child node at the side of the parent.
	function insertRight(parent, node)
	{
		var index = parent.table.length - 1;
		parent.table[index] = node;
		parent.lengths[index] = length(node);
		parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
	}

	function insertLeft(parent, node)
	{
		if (node.table.length > 0)
		{
			parent.table[0] = node;
			parent.lengths[0] = length(node);

			var len = length(parent.table[0]);
			for (var i = 1; i < parent.lengths.length; i++)
			{
				len += length(parent.table[i]);
				parent.lengths[i] = len;
			}
		}
		else
		{
			parent.table.shift();
			for (var i = 1; i < parent.lengths.length; i++)
			{
				parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
			}
			parent.lengths.shift();
		}
	}

	// Returns the extra search steps for E. Refer to the paper.
	function calcToRemove(a, b)
	{
		var subLengths = 0;
		for (var i = 0; i < a.table.length; i++)
		{
			subLengths += a.table[i].table.length;
		}
		for (var i = 0; i < b.table.length; i++)
		{
			subLengths += b.table[i].table.length;
		}

		var toRemove = a.table.length + b.table.length;
		return toRemove - (Math.floor((subLengths - 1) / M) + 1);
	}

	// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
	function get2(a, b, index)
	{
		return index < a.length
			? a[index]
			: b[index - a.length];
	}

	function set2(a, b, index, value)
	{
		if (index < a.length)
		{
			a[index] = value;
		}
		else
		{
			b[index - a.length] = value;
		}
	}

	function saveSlot(a, b, index, slot)
	{
		set2(a.table, b.table, index, slot);

		var l = (index === 0 || index === a.lengths.length)
			? 0
			: get2(a.lengths, a.lengths, index - 1);

		set2(a.lengths, b.lengths, index, l + length(slot));
	}

	// Creates a node or leaf with a given length at their arrays for perfomance.
	// Is only used by shuffle.
	function createNode(h, length)
	{
		if (length < 0)
		{
			length = 0;
		}
		var a = {
			ctor: '_Array',
			height: h,
			table: new Array(length)
		};
		if (h > 0)
		{
			a.lengths = new Array(length);
		}
		return a;
	}

	// Returns an array of two balanced nodes.
	function shuffle(a, b, toRemove)
	{
		var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
		var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

		// Skip the slots with size M. More precise: copy the slot references
		// to the new node
		var read = 0;
		while (get2(a.table, b.table, read).table.length % M === 0)
		{
			set2(newA.table, newB.table, read, get2(a.table, b.table, read));
			set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
			read++;
		}

		// Pulling items from left to right, caching in a slot before writing
		// it into the new nodes.
		var write = read;
		var slot = new createNode(a.height - 1, 0);
		var from = 0;

		// If the current slot is still containing data, then there will be at
		// least one more write, so we do not break this loop yet.
		while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
		{
			// Find out the max possible items for copying.
			var source = get2(a.table, b.table, read);
			var to = Math.min(M - slot.table.length, source.table.length);

			// Copy and adjust size table.
			slot.table = slot.table.concat(source.table.slice(from, to));
			if (slot.height > 0)
			{
				var len = slot.lengths.length;
				for (var i = len; i < len + to - from; i++)
				{
					slot.lengths[i] = length(slot.table[i]);
					slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
				}
			}

			from += to;

			// Only proceed to next slots[i] if the current one was
			// fully copied.
			if (source.table.length <= to)
			{
				read++; from = 0;
			}

			// Only create a new slot if the current one is filled up.
			if (slot.table.length === M)
			{
				saveSlot(newA, newB, write, slot);
				slot = createNode(a.height - 1, 0);
				write++;
			}
		}

		// Cleanup after the loop. Copy the last slot into the new nodes.
		if (slot.table.length > 0)
		{
			saveSlot(newA, newB, write, slot);
			write++;
		}

		// Shift the untouched slots to the left
		while (read < a.table.length + b.table.length )
		{
			saveSlot(newA, newB, write, get2(a.table, b.table, read));
			read++;
			write++;
		}

		return [newA, newB];
	}

	// Navigation functions
	function botRight(a)
	{
		return a.table[a.table.length - 1];
	}
	function botLeft(a)
	{
		return a.table[0];
	}

	// Copies a node for updating. Note that you should not use this if
	// only updating only one of "table" or "lengths" for performance reasons.
	function nodeCopy(a)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice()
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths.slice();
		}
		return newA;
	}

	// Returns how many items are in the tree.
	function length(array)
	{
		if (array.height === 0)
		{
			return array.table.length;
		}
		else
		{
			return array.lengths[array.lengths.length - 1];
		}
	}

	// Calculates in which slot of "table" the item probably is, then
	// find the exact slot via forward searching in  "lengths". Returns the index.
	function getSlot(i, a)
	{
		var slot = i >> (5 * a.height);
		while (a.lengths[slot] <= i)
		{
			slot++;
		}
		return slot;
	}

	// Recursively creates a tree with a given height containing
	// only the given item.
	function create(item, h)
	{
		if (h === 0)
		{
			return {
				ctor: '_Array',
				height: 0,
				table: [item]
			};
		}
		return {
			ctor: '_Array',
			height: h,
			table: [create(item, h - 1)],
			lengths: [1]
		};
	}

	// Recursively creates a tree that contains the given tree.
	function parentise(tree, h)
	{
		if (h === tree.height)
		{
			return tree;
		}

		return {
			ctor: '_Array',
			height: h,
			table: [parentise(tree, h - 1)],
			lengths: [length(tree)]
		};
	}

	// Emphasizes blood brotherhood beneath two trees.
	function siblise(a, b)
	{
		return {
			ctor: '_Array',
			height: a.height + 1,
			table: [a, b],
			lengths: [length(a), length(a) + length(b)]
		};
	}

	function toJSArray(a)
	{
		var jsArray = new Array(length(a));
		toJSArray_(jsArray, 0, a);
		return jsArray;
	}

	function toJSArray_(jsArray, i, a)
	{
		for (var t = 0; t < a.table.length; t++)
		{
			if (a.height === 0)
			{
				jsArray[i + t] = a.table[t];
			}
			else
			{
				var inc = t === 0 ? 0 : a.lengths[t - 1];
				toJSArray_(jsArray, i + inc, a.table[t]);
			}
		}
	}

	function fromJSArray(jsArray)
	{
		if (jsArray.length === 0)
		{
			return empty;
		}
		var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
		return fromJSArray_(jsArray, h, 0, jsArray.length);
	}

	function fromJSArray_(jsArray, h, from, to)
	{
		if (h === 0)
		{
			return {
				ctor: '_Array',
				height: 0,
				table: jsArray.slice(from, to)
			};
		}

		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
		}
		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}

	return {
		empty: empty,
		fromList: fromList,
		toList: toList,
		initialize: F2(initialize),
		append: F2(append),
		push: F2(push),
		slice: F3(slice),
		get: F2(get),
		set: F3(set),
		map: F2(map),
		indexedMap: F2(indexedMap),
		foldl: F3(foldl),
		foldr: F3(foldr),
		length: length,

		toJSArray: toJSArray,
		fromJSArray: fromJSArray
	};

	}();
	//import Native.Utils //

	var _elm_lang$core$Native_Basics = function() {

	function div(a, b)
	{
		return (a / b) | 0;
	}
	function rem(a, b)
	{
		return a % b;
	}
	function mod(a, b)
	{
		if (b === 0)
		{
			throw new Error('Cannot perform mod 0. Division by zero error.');
		}
		var r = a % b;
		var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

		return m === b ? 0 : m;
	}
	function logBase(base, n)
	{
		return Math.log(n) / Math.log(base);
	}
	function negate(n)
	{
		return -n;
	}
	function abs(n)
	{
		return n < 0 ? -n : n;
	}

	function min(a, b)
	{
		return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
	}
	function max(a, b)
	{
		return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
	}
	function clamp(lo, hi, n)
	{
		return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
			? lo
			: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
				? hi
				: n;
	}

	var ord = ['LT', 'EQ', 'GT'];

	function compare(x, y)
	{
		return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
	}

	function xor(a, b)
	{
		return a !== b;
	}
	function not(b)
	{
		return !b;
	}
	function isInfinite(n)
	{
		return n === Infinity || n === -Infinity;
	}

	function truncate(n)
	{
		return n | 0;
	}

	function degrees(d)
	{
		return d * Math.PI / 180;
	}
	function turns(t)
	{
		return 2 * Math.PI * t;
	}
	function fromPolar(point)
	{
		var r = point._0;
		var t = point._1;
		return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
	}
	function toPolar(point)
	{
		var x = point._0;
		var y = point._1;
		return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
	}

	return {
		div: F2(div),
		rem: F2(rem),
		mod: F2(mod),

		pi: Math.PI,
		e: Math.E,
		cos: Math.cos,
		sin: Math.sin,
		tan: Math.tan,
		acos: Math.acos,
		asin: Math.asin,
		atan: Math.atan,
		atan2: F2(Math.atan2),

		degrees: degrees,
		turns: turns,
		fromPolar: fromPolar,
		toPolar: toPolar,

		sqrt: Math.sqrt,
		logBase: F2(logBase),
		negate: negate,
		abs: abs,
		min: F2(min),
		max: F2(max),
		clamp: F3(clamp),
		compare: F2(compare),

		xor: F2(xor),
		not: not,

		truncate: truncate,
		ceiling: Math.ceil,
		floor: Math.floor,
		round: Math.round,
		toFloat: function(x) { return x; },
		isNaN: isNaN,
		isInfinite: isInfinite
	};

	}();
	//import //

	var _elm_lang$core$Native_Utils = function() {

	// COMPARISONS

	function eq(x, y)
	{
		var stack = [];
		var isEqual = eqHelp(x, y, 0, stack);
		var pair;
		while (isEqual && (pair = stack.pop()))
		{
			isEqual = eqHelp(pair.x, pair.y, 0, stack);
		}
		return isEqual;
	}


	function eqHelp(x, y, depth, stack)
	{
		if (depth > 100)
		{
			stack.push({ x: x, y: y });
			return true;
		}

		if (x === y)
		{
			return true;
		}

		if (typeof x !== 'object')
		{
			if (typeof x === 'function')
			{
				throw new Error(
					'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
					+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
					+ ' which describes why it is this way and what the better version will look like.'
				);
			}
			return false;
		}

		if (x === null || y === null)
		{
			return false
		}

		if (x instanceof Date)
		{
			return x.getTime() === y.getTime();
		}

		if (!('ctor' in x))
		{
			for (var key in x)
			{
				if (!eqHelp(x[key], y[key], depth + 1, stack))
				{
					return false;
				}
			}
			return true;
		}

		// convert Dicts and Sets to lists
		if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
		{
			x = _elm_lang$core$Dict$toList(x);
			y = _elm_lang$core$Dict$toList(y);
		}
		if (x.ctor === 'Set_elm_builtin')
		{
			x = _elm_lang$core$Set$toList(x);
			y = _elm_lang$core$Set$toList(y);
		}

		// check if lists are equal without recursion
		if (x.ctor === '::')
		{
			var a = x;
			var b = y;
			while (a.ctor === '::' && b.ctor === '::')
			{
				if (!eqHelp(a._0, b._0, depth + 1, stack))
				{
					return false;
				}
				a = a._1;
				b = b._1;
			}
			return a.ctor === b.ctor;
		}

		// check if Arrays are equal
		if (x.ctor === '_Array')
		{
			var xs = _elm_lang$core$Native_Array.toJSArray(x);
			var ys = _elm_lang$core$Native_Array.toJSArray(y);
			if (xs.length !== ys.length)
			{
				return false;
			}
			for (var i = 0; i < xs.length; i++)
			{
				if (!eqHelp(xs[i], ys[i], depth + 1, stack))
				{
					return false;
				}
			}
			return true;
		}

		if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
		{
			return false;
		}

		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
	// the particular integer values assigned to LT, EQ, and GT.

	var LT = -1, EQ = 0, GT = 1;

	function cmp(x, y)
	{
		if (typeof x !== 'object')
		{
			return x === y ? EQ : x < y ? LT : GT;
		}

		if (x instanceof String)
		{
			var a = x.valueOf();
			var b = y.valueOf();
			return a === b ? EQ : a < b ? LT : GT;
		}

		if (x.ctor === '::' || x.ctor === '[]')
		{
			while (x.ctor === '::' && y.ctor === '::')
			{
				var ord = cmp(x._0, y._0);
				if (ord !== EQ)
				{
					return ord;
				}
				x = x._1;
				y = y._1;
			}
			return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
		}

		if (x.ctor.slice(0, 6) === '_Tuple')
		{
			var ord;
			var n = x.ctor.slice(6) - 0;
			var err = 'cannot compare tuples with more than 6 elements.';
			if (n === 0) return EQ;
			if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
			if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
			if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
			if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
			if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
			if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
			if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
			return EQ;
		}

		throw new Error(
			'Comparison error: comparison is only defined on ints, '
			+ 'floats, times, chars, strings, lists of comparable values, '
			+ 'and tuples of comparable values.'
		);
	}


	// COMMON VALUES

	var Tuple0 = {
		ctor: '_Tuple0'
	};

	function Tuple2(x, y)
	{
		return {
			ctor: '_Tuple2',
			_0: x,
			_1: y
		};
	}

	function chr(c)
	{
		return new String(c);
	}


	// GUID

	var count = 0;
	function guid(_)
	{
		return count++;
	}


	// RECORDS

	function update(oldRecord, updatedFields)
	{
		var newRecord = {};

		for (var key in oldRecord)
		{
			newRecord[key] = oldRecord[key];
		}

		for (var key in updatedFields)
		{
			newRecord[key] = updatedFields[key];
		}

		return newRecord;
	}


	//// LIST STUFF ////

	var Nil = { ctor: '[]' };

	function Cons(hd, tl)
	{
		return {
			ctor: '::',
			_0: hd,
			_1: tl
		};
	}

	function append(xs, ys)
	{
		// append Strings
		if (typeof xs === 'string')
		{
			return xs + ys;
		}

		// append Lists
		if (xs.ctor === '[]')
		{
			return ys;
		}
		var root = Cons(xs._0, Nil);
		var curr = root;
		xs = xs._1;
		while (xs.ctor !== '[]')
		{
			curr._1 = Cons(xs._0, Nil);
			xs = xs._1;
			curr = curr._1;
		}
		curr._1 = ys;
		return root;
	}


	// CRASHES

	function crash(moduleName, region)
	{
		return function(message) {
			throw new Error(
				'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
				+ 'The message provided by the code author is:\n\n    '
				+ message
			);
		};
	}

	function crashCase(moduleName, region, value)
	{
		return function(message) {
			throw new Error(
				'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
				+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
				+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
				+ 'The message provided by the code author is:\n\n    '
				+ message
			);
		};
	}

	function regionToString(region)
	{
		if (region.start.line == region.end.line)
		{
			return 'on line ' + region.start.line;
		}
		return 'between lines ' + region.start.line + ' and ' + region.end.line;
	}


	// TO STRING

	function toString(v)
	{
		var type = typeof v;
		if (type === 'function')
		{
			var name = v.func ? v.func.name : v.name;
			return '<function' + (name === '' ? '' : ':') + name + '>';
		}

		if (type === 'boolean')
		{
			return v ? 'True' : 'False';
		}

		if (type === 'number')
		{
			return v + '';
		}

		if (v instanceof String)
		{
			return '\'' + addSlashes(v, true) + '\'';
		}

		if (type === 'string')
		{
			return '"' + addSlashes(v, false) + '"';
		}

		if (v === null)
		{
			return 'null';
		}

		if (type === 'object' && 'ctor' in v)
		{
			var ctorStarter = v.ctor.substring(0, 5);

			if (ctorStarter === '_Tupl')
			{
				var output = [];
				for (var k in v)
				{
					if (k === 'ctor') continue;
					output.push(toString(v[k]));
				}
				return '(' + output.join(',') + ')';
			}

			if (ctorStarter === '_Task')
			{
				return '<task>'
			}

			if (v.ctor === '_Array')
			{
				var list = _elm_lang$core$Array$toList(v);
				return 'Array.fromList ' + toString(list);
			}

			if (v.ctor === '<decoder>')
			{
				return '<decoder>';
			}

			if (v.ctor === '_Process')
			{
				return '<process:' + v.id + '>';
			}

			if (v.ctor === '::')
			{
				var output = '[' + toString(v._0);
				v = v._1;
				while (v.ctor === '::')
				{
					output += ',' + toString(v._0);
					v = v._1;
				}
				return output + ']';
			}

			if (v.ctor === '[]')
			{
				return '[]';
			}

			if (v.ctor === 'Set_elm_builtin')
			{
				return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
			}

			if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
			{
				return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
			}

			var output = '';
			for (var i in v)
			{
				if (i === 'ctor') continue;
				var str = toString(v[i]);
				var c0 = str[0];
				var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
				output += ' ' + (parenless ? str : '(' + str + ')');
			}
			return v.ctor + output;
		}

		if (type === 'object')
		{
			if (v instanceof Date)
			{
				return '<' + v.toString() + '>';
			}

			if (v.elm_web_socket)
			{
				return '<websocket>';
			}

			var output = [];
			for (var k in v)
			{
				output.push(k + ' = ' + toString(v[k]));
			}
			if (output.length === 0)
			{
				return '{}';
			}
			return '{ ' + output.join(', ') + ' }';
		}

		return '<internal structure>';
	}

	function addSlashes(str, isChar)
	{
		var s = str.replace(/\\/g, '\\\\')
				  .replace(/\n/g, '\\n')
				  .replace(/\t/g, '\\t')
				  .replace(/\r/g, '\\r')
				  .replace(/\v/g, '\\v')
				  .replace(/\0/g, '\\0');
		if (isChar)
		{
			return s.replace(/\'/g, '\\\'');
		}
		else
		{
			return s.replace(/\"/g, '\\"');
		}
	}


	return {
		eq: eq,
		cmp: cmp,
		Tuple0: Tuple0,
		Tuple2: Tuple2,
		chr: chr,
		update: update,
		guid: guid,

		append: F2(append),

		crash: crash,
		crashCase: crashCase,

		toString: toString
	};

	}();
	var _elm_lang$core$Basics$never = function (_p0) {
		never:
		while (true) {
			var _p1 = _p0;
			var _v1 = _p1._0;
			_p0 = _v1;
			continue never;
		}
	};
	var _elm_lang$core$Basics$uncurry = F2(
		function (f, _p2) {
			var _p3 = _p2;
			return A2(f, _p3._0, _p3._1);
		});
	var _elm_lang$core$Basics$curry = F3(
		function (f, a, b) {
			return f(
				{ctor: '_Tuple2', _0: a, _1: b});
		});
	var _elm_lang$core$Basics$flip = F3(
		function (f, b, a) {
			return A2(f, a, b);
		});
	var _elm_lang$core$Basics$always = F2(
		function (a, _p4) {
			return a;
		});
	var _elm_lang$core$Basics$identity = function (x) {
		return x;
	};
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<|'] = F2(
		function (f, x) {
			return f(x);
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['|>'] = F2(
		function (x, f) {
			return f(x);
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>>'] = F3(
		function (f, g, x) {
			return g(
				f(x));
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<<'] = F3(
		function (g, f, x) {
			return g(
				f(x));
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
	var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
	var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
	var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
	var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
	var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
	var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
	var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
	var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
	var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
	var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
	var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
	var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
	var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
	var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
	var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
	var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
	var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
	var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
	var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
	var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
	var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
	var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
	var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
	var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
	var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
	var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
	var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
	var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
	var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
	var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
	var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
	var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
	var _elm_lang$core$Basics$radians = function (t) {
		return t;
	};
	var _elm_lang$core$Basics$GT = {ctor: 'GT'};
	var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
	var _elm_lang$core$Basics$LT = {ctor: 'LT'};
	var _elm_lang$core$Basics$JustOneMore = function (a) {
		return {ctor: 'JustOneMore', _0: a};
	};

	var _elm_lang$core$Maybe$withDefault = F2(
		function ($default, maybe) {
			var _p0 = maybe;
			if (_p0.ctor === 'Just') {
				return _p0._0;
			} else {
				return $default;
			}
		});
	var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
	var _elm_lang$core$Maybe$andThen = F2(
		function (callback, maybeValue) {
			var _p1 = maybeValue;
			if (_p1.ctor === 'Just') {
				return callback(_p1._0);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$Just = function (a) {
		return {ctor: 'Just', _0: a};
	};
	var _elm_lang$core$Maybe$map = F2(
		function (f, maybe) {
			var _p2 = maybe;
			if (_p2.ctor === 'Just') {
				return _elm_lang$core$Maybe$Just(
					f(_p2._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map2 = F3(
		function (func, ma, mb) {
			var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
			if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A2(func, _p3._0._0, _p3._1._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map3 = F4(
		function (func, ma, mb, mc) {
			var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
			if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map4 = F5(
		function (func, ma, mb, mc, md) {
			var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
			if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map5 = F6(
		function (func, ma, mb, mc, md, me) {
			var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
			if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});

	//import Native.Utils //

	var _elm_lang$core$Native_List = function() {

	var Nil = { ctor: '[]' };

	function Cons(hd, tl)
	{
		return { ctor: '::', _0: hd, _1: tl };
	}

	function fromArray(arr)
	{
		var out = Nil;
		for (var i = arr.length; i--; )
		{
			out = Cons(arr[i], out);
		}
		return out;
	}

	function toArray(xs)
	{
		var out = [];
		while (xs.ctor !== '[]')
		{
			out.push(xs._0);
			xs = xs._1;
		}
		return out;
	}

	function foldr(f, b, xs)
	{
		var arr = toArray(xs);
		var acc = b;
		for (var i = arr.length; i--; )
		{
			acc = A2(f, arr[i], acc);
		}
		return acc;
	}

	function map2(f, xs, ys)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]')
		{
			arr.push(A2(f, xs._0, ys._0));
			xs = xs._1;
			ys = ys._1;
		}
		return fromArray(arr);
	}

	function map3(f, xs, ys, zs)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
		{
			arr.push(A3(f, xs._0, ys._0, zs._0));
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function map4(f, ws, xs, ys, zs)
	{
		var arr = [];
		while (   ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function map5(f, vs, ws, xs, ys, zs)
	{
		var arr = [];
		while (   vs.ctor !== '[]'
			   && ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
			vs = vs._1;
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function sortBy(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a, b) {
			return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
		}));
	}

	function sortWith(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a, b) {
			var ord = f(a)(b).ctor;
			return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
		}));
	}

	return {
		Nil: Nil,
		Cons: Cons,
		cons: F2(Cons),
		toArray: toArray,
		fromArray: fromArray,

		foldr: F3(foldr),

		map2: F3(map2),
		map3: F4(map3),
		map4: F5(map4),
		map5: F6(map5),
		sortBy: F2(sortBy),
		sortWith: F2(sortWith)
	};

	}();
	var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
	var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
	var _elm_lang$core$List$sort = function (xs) {
		return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
	};
	var _elm_lang$core$List$drop = F2(
		function (n, list) {
			drop:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return list;
				} else {
					var _p0 = list;
					if (_p0.ctor === '[]') {
						return list;
					} else {
						var _v1 = n - 1,
							_v2 = _p0._1;
						n = _v1;
						list = _v2;
						continue drop;
					}
				}
			}
		});
	var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
	var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
	var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
	var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
	var _elm_lang$core$List$any = F2(
		function (isOkay, list) {
			any:
			while (true) {
				var _p1 = list;
				if (_p1.ctor === '[]') {
					return false;
				} else {
					if (isOkay(_p1._0)) {
						return true;
					} else {
						var _v4 = isOkay,
							_v5 = _p1._1;
						isOkay = _v4;
						list = _v5;
						continue any;
					}
				}
			}
		});
	var _elm_lang$core$List$all = F2(
		function (isOkay, list) {
			return !A2(
				_elm_lang$core$List$any,
				function (_p2) {
					return !isOkay(_p2);
				},
				list);
		});
	var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
	var _elm_lang$core$List$foldl = F3(
		function (func, acc, list) {
			foldl:
			while (true) {
				var _p3 = list;
				if (_p3.ctor === '[]') {
					return acc;
				} else {
					var _v7 = func,
						_v8 = A2(func, _p3._0, acc),
						_v9 = _p3._1;
					func = _v7;
					acc = _v8;
					list = _v9;
					continue foldl;
				}
			}
		});
	var _elm_lang$core$List$length = function (xs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p4, i) {
					return i + 1;
				}),
			0,
			xs);
	};
	var _elm_lang$core$List$sum = function (numbers) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return x + y;
				}),
			0,
			numbers);
	};
	var _elm_lang$core$List$product = function (numbers) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return x * y;
				}),
			1,
			numbers);
	};
	var _elm_lang$core$List$maximum = function (list) {
		var _p5 = list;
		if (_p5.ctor === '::') {
			return _elm_lang$core$Maybe$Just(
				A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$minimum = function (list) {
		var _p6 = list;
		if (_p6.ctor === '::') {
			return _elm_lang$core$Maybe$Just(
				A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$member = F2(
		function (x, xs) {
			return A2(
				_elm_lang$core$List$any,
				function (a) {
					return _elm_lang$core$Native_Utils.eq(a, x);
				},
				xs);
		});
	var _elm_lang$core$List$isEmpty = function (xs) {
		var _p7 = xs;
		if (_p7.ctor === '[]') {
			return true;
		} else {
			return false;
		}
	};
	var _elm_lang$core$List$tail = function (list) {
		var _p8 = list;
		if (_p8.ctor === '::') {
			return _elm_lang$core$Maybe$Just(_p8._1);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$head = function (list) {
		var _p9 = list;
		if (_p9.ctor === '::') {
			return _elm_lang$core$Maybe$Just(_p9._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
	_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
	var _elm_lang$core$List$map = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, acc) {
						return {
							ctor: '::',
							_0: f(x),
							_1: acc
						};
					}),
				{ctor: '[]'},
				xs);
		});
	var _elm_lang$core$List$filter = F2(
		function (pred, xs) {
			var conditionalCons = F2(
				function (front, back) {
					return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
				});
			return A3(
				_elm_lang$core$List$foldr,
				conditionalCons,
				{ctor: '[]'},
				xs);
		});
	var _elm_lang$core$List$maybeCons = F3(
		function (f, mx, xs) {
			var _p10 = f(mx);
			if (_p10.ctor === 'Just') {
				return {ctor: '::', _0: _p10._0, _1: xs};
			} else {
				return xs;
			}
		});
	var _elm_lang$core$List$filterMap = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$foldr,
				_elm_lang$core$List$maybeCons(f),
				{ctor: '[]'},
				xs);
		});
	var _elm_lang$core$List$reverse = function (list) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			{ctor: '[]'},
			list);
	};
	var _elm_lang$core$List$scanl = F3(
		function (f, b, xs) {
			var scan1 = F2(
				function (x, accAcc) {
					var _p11 = accAcc;
					if (_p11.ctor === '::') {
						return {
							ctor: '::',
							_0: A2(f, x, _p11._0),
							_1: accAcc
						};
					} else {
						return {ctor: '[]'};
					}
				});
			return _elm_lang$core$List$reverse(
				A3(
					_elm_lang$core$List$foldl,
					scan1,
					{
						ctor: '::',
						_0: b,
						_1: {ctor: '[]'}
					},
					xs));
		});
	var _elm_lang$core$List$append = F2(
		function (xs, ys) {
			var _p12 = ys;
			if (_p12.ctor === '[]') {
				return xs;
			} else {
				return A3(
					_elm_lang$core$List$foldr,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						}),
					ys,
					xs);
			}
		});
	var _elm_lang$core$List$concat = function (lists) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$append,
			{ctor: '[]'},
			lists);
	};
	var _elm_lang$core$List$concatMap = F2(
		function (f, list) {
			return _elm_lang$core$List$concat(
				A2(_elm_lang$core$List$map, f, list));
		});
	var _elm_lang$core$List$partition = F2(
		function (pred, list) {
			var step = F2(
				function (x, _p13) {
					var _p14 = _p13;
					var _p16 = _p14._0;
					var _p15 = _p14._1;
					return pred(x) ? {
						ctor: '_Tuple2',
						_0: {ctor: '::', _0: x, _1: _p16},
						_1: _p15
					} : {
						ctor: '_Tuple2',
						_0: _p16,
						_1: {ctor: '::', _0: x, _1: _p15}
					};
				});
			return A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: {ctor: '[]'}
				},
				list);
		});
	var _elm_lang$core$List$unzip = function (pairs) {
		var step = F2(
			function (_p18, _p17) {
				var _p19 = _p18;
				var _p20 = _p17;
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
					_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			pairs);
	};
	var _elm_lang$core$List$intersperse = F2(
		function (sep, xs) {
			var _p21 = xs;
			if (_p21.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var step = F2(
					function (x, rest) {
						return {
							ctor: '::',
							_0: sep,
							_1: {ctor: '::', _0: x, _1: rest}
						};
					});
				var spersed = A3(
					_elm_lang$core$List$foldr,
					step,
					{ctor: '[]'},
					_p21._1);
				return {ctor: '::', _0: _p21._0, _1: spersed};
			}
		});
	var _elm_lang$core$List$takeReverse = F3(
		function (n, list, taken) {
			takeReverse:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return taken;
				} else {
					var _p22 = list;
					if (_p22.ctor === '[]') {
						return taken;
					} else {
						var _v23 = n - 1,
							_v24 = _p22._1,
							_v25 = {ctor: '::', _0: _p22._0, _1: taken};
						n = _v23;
						list = _v24;
						taken = _v25;
						continue takeReverse;
					}
				}
			}
		});
	var _elm_lang$core$List$takeTailRec = F2(
		function (n, list) {
			return _elm_lang$core$List$reverse(
				A3(
					_elm_lang$core$List$takeReverse,
					n,
					list,
					{ctor: '[]'}));
		});
	var _elm_lang$core$List$takeFast = F3(
		function (ctr, n, list) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return {ctor: '[]'};
			} else {
				var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
				_v26_5:
				do {
					_v26_1:
					do {
						if (_p23.ctor === '_Tuple2') {
							if (_p23._1.ctor === '[]') {
								return list;
							} else {
								if (_p23._1._1.ctor === '::') {
									switch (_p23._0) {
										case 1:
											break _v26_1;
										case 2:
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {ctor: '[]'}
												}
											};
										case 3:
											if (_p23._1._1._1.ctor === '::') {
												return {
													ctor: '::',
													_0: _p23._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._0,
														_1: {
															ctor: '::',
															_0: _p23._1._1._1._0,
															_1: {ctor: '[]'}
														}
													}
												};
											} else {
												break _v26_5;
											}
										default:
											if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
												var _p28 = _p23._1._1._1._0;
												var _p27 = _p23._1._1._0;
												var _p26 = _p23._1._0;
												var _p25 = _p23._1._1._1._1._0;
												var _p24 = _p23._1._1._1._1._1;
												return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
													ctor: '::',
													_0: _p26,
													_1: {
														ctor: '::',
														_0: _p27,
														_1: {
															ctor: '::',
															_0: _p28,
															_1: {
																ctor: '::',
																_0: _p25,
																_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
															}
														}
													}
												} : {
													ctor: '::',
													_0: _p26,
													_1: {
														ctor: '::',
														_0: _p27,
														_1: {
															ctor: '::',
															_0: _p28,
															_1: {
																ctor: '::',
																_0: _p25,
																_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
															}
														}
													}
												};
											} else {
												break _v26_5;
											}
									}
								} else {
									if (_p23._0 === 1) {
										break _v26_1;
									} else {
										break _v26_5;
									}
								}
							}
						} else {
							break _v26_5;
						}
					} while(false);
					return {
						ctor: '::',
						_0: _p23._1._0,
						_1: {ctor: '[]'}
					};
				} while(false);
				return list;
			}
		});
	var _elm_lang$core$List$take = F2(
		function (n, list) {
			return A3(_elm_lang$core$List$takeFast, 0, n, list);
		});
	var _elm_lang$core$List$repeatHelp = F3(
		function (result, n, value) {
			repeatHelp:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return result;
				} else {
					var _v27 = {ctor: '::', _0: value, _1: result},
						_v28 = n - 1,
						_v29 = value;
					result = _v27;
					n = _v28;
					value = _v29;
					continue repeatHelp;
				}
			}
		});
	var _elm_lang$core$List$repeat = F2(
		function (n, value) {
			return A3(
				_elm_lang$core$List$repeatHelp,
				{ctor: '[]'},
				n,
				value);
		});
	var _elm_lang$core$List$rangeHelp = F3(
		function (lo, hi, list) {
			rangeHelp:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
					var _v30 = lo,
						_v31 = hi - 1,
						_v32 = {ctor: '::', _0: hi, _1: list};
					lo = _v30;
					hi = _v31;
					list = _v32;
					continue rangeHelp;
				} else {
					return list;
				}
			}
		});
	var _elm_lang$core$List$range = F2(
		function (lo, hi) {
			return A3(
				_elm_lang$core$List$rangeHelp,
				lo,
				hi,
				{ctor: '[]'});
		});
	var _elm_lang$core$List$indexedMap = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$map2,
				f,
				A2(
					_elm_lang$core$List$range,
					0,
					_elm_lang$core$List$length(xs) - 1),
				xs);
		});

	var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
	var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
	var _elm_lang$core$Array$isEmpty = function (array) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$Array$length(array),
			0);
	};
	var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
	var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
	var _elm_lang$core$Array$get = F2(
		function (i, array) {
			return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
				i,
				_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
				A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
		});
	var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
	var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
	var _elm_lang$core$Array$filter = F2(
		function (isOkay, arr) {
			var update = F2(
				function (x, xs) {
					return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
				});
			return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
		});
	var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
	var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
	var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
	var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
	var _elm_lang$core$Array$toIndexedList = function (array) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$Native_Array.length(array) - 1),
			_elm_lang$core$Native_Array.toList(array));
	};
	var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
	var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
	var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
	var _elm_lang$core$Array$repeat = F2(
		function (n, e) {
			return A2(
				_elm_lang$core$Array$initialize,
				n,
				_elm_lang$core$Basics$always(e));
		});
	var _elm_lang$core$Array$Array = {ctor: 'Array'};

	//import Native.Utils //

	var _elm_lang$core$Native_Debug = function() {

	function log(tag, value)
	{
		var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
		var process = process || {};
		if (process.stdout)
		{
			process.stdout.write(msg);
		}
		else
		{
			console.log(msg);
		}
		return value;
	}

	function crash(message)
	{
		throw new Error(message);
	}

	return {
		crash: crash,
		log: F2(log)
	};

	}();
	//import Maybe, Native.List, Native.Utils, Result //

	var _elm_lang$core$Native_String = function() {

	function isEmpty(str)
	{
		return str.length === 0;
	}
	function cons(chr, str)
	{
		return chr + str;
	}
	function uncons(str)
	{
		var hd = str[0];
		if (hd)
		{
			return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
		}
		return _elm_lang$core$Maybe$Nothing;
	}
	function append(a, b)
	{
		return a + b;
	}
	function concat(strs)
	{
		return _elm_lang$core$Native_List.toArray(strs).join('');
	}
	function length(str)
	{
		return str.length;
	}
	function map(f, str)
	{
		var out = str.split('');
		for (var i = out.length; i--; )
		{
			out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
		}
		return out.join('');
	}
	function filter(pred, str)
	{
		return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
	}
	function reverse(str)
	{
		return str.split('').reverse().join('');
	}
	function foldl(f, b, str)
	{
		var len = str.length;
		for (var i = 0; i < len; ++i)
		{
			b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
		}
		return b;
	}
	function foldr(f, b, str)
	{
		for (var i = str.length; i--; )
		{
			b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
		}
		return b;
	}
	function split(sep, str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(sep));
	}
	function join(sep, strs)
	{
		return _elm_lang$core$Native_List.toArray(strs).join(sep);
	}
	function repeat(n, str)
	{
		var result = '';
		while (n > 0)
		{
			if (n & 1)
			{
				result += str;
			}
			n >>= 1, str += str;
		}
		return result;
	}
	function slice(start, end, str)
	{
		return str.slice(start, end);
	}
	function left(n, str)
	{
		return n < 1 ? '' : str.slice(0, n);
	}
	function right(n, str)
	{
		return n < 1 ? '' : str.slice(-n);
	}
	function dropLeft(n, str)
	{
		return n < 1 ? str : str.slice(n);
	}
	function dropRight(n, str)
	{
		return n < 1 ? str : str.slice(0, -n);
	}
	function pad(n, chr, str)
	{
		var half = (n - str.length) / 2;
		return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
	}
	function padRight(n, chr, str)
	{
		return str + repeat(n - str.length, chr);
	}
	function padLeft(n, chr, str)
	{
		return repeat(n - str.length, chr) + str;
	}

	function trim(str)
	{
		return str.trim();
	}
	function trimLeft(str)
	{
		return str.replace(/^\s+/, '');
	}
	function trimRight(str)
	{
		return str.replace(/\s+$/, '');
	}

	function words(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
	}
	function lines(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
	}

	function toUpper(str)
	{
		return str.toUpperCase();
	}
	function toLower(str)
	{
		return str.toLowerCase();
	}

	function any(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
			{
				return true;
			}
		}
		return false;
	}
	function all(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
			{
				return false;
			}
		}
		return true;
	}

	function contains(sub, str)
	{
		return str.indexOf(sub) > -1;
	}
	function startsWith(sub, str)
	{
		return str.indexOf(sub) === 0;
	}
	function endsWith(sub, str)
	{
		return str.length >= sub.length &&
			str.lastIndexOf(sub) === str.length - sub.length;
	}
	function indexes(sub, str)
	{
		var subLen = sub.length;
		
		if (subLen < 1)
		{
			return _elm_lang$core$Native_List.Nil;
		}

		var i = 0;
		var is = [];

		while ((i = str.indexOf(sub, i)) > -1)
		{
			is.push(i);
			i = i + subLen;
		}	
		
		return _elm_lang$core$Native_List.fromArray(is);
	}

	function toInt(s)
	{
		var len = s.length;
		if (len === 0)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
		var start = 0;
		if (s[0] === '-')
		{
			if (len === 1)
			{
				return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
			}
			start = 1;
		}
		for (var i = start; i < len; ++i)
		{
			var c = s[i];
			if (c < '0' || '9' < c)
			{
				return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
			}
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 10));
	}

	function toFloat(s)
	{
		var len = s.length;
		if (len === 0)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		var start = 0;
		if (s[0] === '-')
		{
			if (len === 1)
			{
				return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
			}
			start = 1;
		}
		var dotCount = 0;
		for (var i = start; i < len; ++i)
		{
			var c = s[i];
			if ('0' <= c && c <= '9')
			{
				continue;
			}
			if (c === '.')
			{
				dotCount += 1;
				if (dotCount <= 1)
				{
					continue;
				}
			}
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		return _elm_lang$core$Result$Ok(parseFloat(s));
	}

	function toList(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
	}
	function fromList(chars)
	{
		return _elm_lang$core$Native_List.toArray(chars).join('');
	}

	return {
		isEmpty: isEmpty,
		cons: F2(cons),
		uncons: uncons,
		append: F2(append),
		concat: concat,
		length: length,
		map: F2(map),
		filter: F2(filter),
		reverse: reverse,
		foldl: F3(foldl),
		foldr: F3(foldr),

		split: F2(split),
		join: F2(join),
		repeat: F2(repeat),

		slice: F3(slice),
		left: F2(left),
		right: F2(right),
		dropLeft: F2(dropLeft),
		dropRight: F2(dropRight),

		pad: F3(pad),
		padLeft: F3(padLeft),
		padRight: F3(padRight),

		trim: trim,
		trimLeft: trimLeft,
		trimRight: trimRight,

		words: words,
		lines: lines,

		toUpper: toUpper,
		toLower: toLower,

		any: F2(any),
		all: F2(all),

		contains: F2(contains),
		startsWith: F2(startsWith),
		endsWith: F2(endsWith),
		indexes: F2(indexes),

		toInt: toInt,
		toFloat: toFloat,
		toList: toList,
		fromList: fromList
	};

	}();

	//import Native.Utils //

	var _elm_lang$core$Native_Char = function() {

	return {
		fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
		toCode: function(c) { return c.charCodeAt(0); },
		toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
		toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
		toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
		toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
	};

	}();
	var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
	var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
	var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
	var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
	var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
	var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
	var _elm_lang$core$Char$isBetween = F3(
		function (low, high, $char) {
			var code = _elm_lang$core$Char$toCode($char);
			return (_elm_lang$core$Native_Utils.cmp(
				code,
				_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
				code,
				_elm_lang$core$Char$toCode(high)) < 1);
		});
	var _elm_lang$core$Char$isUpper = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('Z'));
	var _elm_lang$core$Char$isLower = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('z'));
	var _elm_lang$core$Char$isDigit = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('0'),
		_elm_lang$core$Native_Utils.chr('9'));
	var _elm_lang$core$Char$isOctDigit = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('0'),
		_elm_lang$core$Native_Utils.chr('7'));
	var _elm_lang$core$Char$isHexDigit = function ($char) {
		return _elm_lang$core$Char$isDigit($char) || (A3(
			_elm_lang$core$Char$isBetween,
			_elm_lang$core$Native_Utils.chr('a'),
			_elm_lang$core$Native_Utils.chr('f'),
			$char) || A3(
			_elm_lang$core$Char$isBetween,
			_elm_lang$core$Native_Utils.chr('A'),
			_elm_lang$core$Native_Utils.chr('F'),
			$char));
	};

	var _elm_lang$core$Result$toMaybe = function (result) {
		var _p0 = result;
		if (_p0.ctor === 'Ok') {
			return _elm_lang$core$Maybe$Just(_p0._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$Result$withDefault = F2(
		function (def, result) {
			var _p1 = result;
			if (_p1.ctor === 'Ok') {
				return _p1._0;
			} else {
				return def;
			}
		});
	var _elm_lang$core$Result$Err = function (a) {
		return {ctor: 'Err', _0: a};
	};
	var _elm_lang$core$Result$andThen = F2(
		function (callback, result) {
			var _p2 = result;
			if (_p2.ctor === 'Ok') {
				return callback(_p2._0);
			} else {
				return _elm_lang$core$Result$Err(_p2._0);
			}
		});
	var _elm_lang$core$Result$Ok = function (a) {
		return {ctor: 'Ok', _0: a};
	};
	var _elm_lang$core$Result$map = F2(
		function (func, ra) {
			var _p3 = ra;
			if (_p3.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					func(_p3._0));
			} else {
				return _elm_lang$core$Result$Err(_p3._0);
			}
		});
	var _elm_lang$core$Result$map2 = F3(
		function (func, ra, rb) {
			var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
			if (_p4._0.ctor === 'Ok') {
				if (_p4._1.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A2(func, _p4._0._0, _p4._1._0));
				} else {
					return _elm_lang$core$Result$Err(_p4._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p4._0._0);
			}
		});
	var _elm_lang$core$Result$map3 = F4(
		function (func, ra, rb, rc) {
			var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
			if (_p5._0.ctor === 'Ok') {
				if (_p5._1.ctor === 'Ok') {
					if (_p5._2.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
					} else {
						return _elm_lang$core$Result$Err(_p5._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p5._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._0._0);
			}
		});
	var _elm_lang$core$Result$map4 = F5(
		function (func, ra, rb, rc, rd) {
			var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
			if (_p6._0.ctor === 'Ok') {
				if (_p6._1.ctor === 'Ok') {
					if (_p6._2.ctor === 'Ok') {
						if (_p6._3.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
						} else {
							return _elm_lang$core$Result$Err(_p6._3._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p6._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._0._0);
			}
		});
	var _elm_lang$core$Result$map5 = F6(
		function (func, ra, rb, rc, rd, re) {
			var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
			if (_p7._0.ctor === 'Ok') {
				if (_p7._1.ctor === 'Ok') {
					if (_p7._2.ctor === 'Ok') {
						if (_p7._3.ctor === 'Ok') {
							if (_p7._4.ctor === 'Ok') {
								return _elm_lang$core$Result$Ok(
									A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
							} else {
								return _elm_lang$core$Result$Err(_p7._4._0);
							}
						} else {
							return _elm_lang$core$Result$Err(_p7._3._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._0._0);
			}
		});
	var _elm_lang$core$Result$mapError = F2(
		function (f, result) {
			var _p8 = result;
			if (_p8.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(_p8._0);
			} else {
				return _elm_lang$core$Result$Err(
					f(_p8._0));
			}
		});
	var _elm_lang$core$Result$fromMaybe = F2(
		function (err, maybe) {
			var _p9 = maybe;
			if (_p9.ctor === 'Just') {
				return _elm_lang$core$Result$Ok(_p9._0);
			} else {
				return _elm_lang$core$Result$Err(err);
			}
		});

	var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
	var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
	var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
	var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
	var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
	var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
	var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
	var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
	var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
	var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
	var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
	var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
	var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
	var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
	var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
	var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
	var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
	var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
	var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
	var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
	var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
	var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
	var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
	var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
	var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
	var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
	var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
	var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
	var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
	var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
	var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
	var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
	var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
	var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
	var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
	var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
	var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
	var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
	var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
	var _elm_lang$core$String$fromChar = function ($char) {
		return A2(_elm_lang$core$String$cons, $char, '');
	};
	var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

	var _elm_lang$core$Dict$foldr = F3(
		function (f, acc, t) {
			foldr:
			while (true) {
				var _p0 = t;
				if (_p0.ctor === 'RBEmpty_elm_builtin') {
					return acc;
				} else {
					var _v1 = f,
						_v2 = A3(
						f,
						_p0._1,
						_p0._2,
						A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
						_v3 = _p0._3;
					f = _v1;
					acc = _v2;
					t = _v3;
					continue foldr;
				}
			}
		});
	var _elm_lang$core$Dict$keys = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, keyList) {
					return {ctor: '::', _0: key, _1: keyList};
				}),
			{ctor: '[]'},
			dict);
	};
	var _elm_lang$core$Dict$values = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, valueList) {
					return {ctor: '::', _0: value, _1: valueList};
				}),
			{ctor: '[]'},
			dict);
	};
	var _elm_lang$core$Dict$toList = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, list) {
					return {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: key, _1: value},
						_1: list
					};
				}),
			{ctor: '[]'},
			dict);
	};
	var _elm_lang$core$Dict$foldl = F3(
		function (f, acc, dict) {
			foldl:
			while (true) {
				var _p1 = dict;
				if (_p1.ctor === 'RBEmpty_elm_builtin') {
					return acc;
				} else {
					var _v5 = f,
						_v6 = A3(
						f,
						_p1._1,
						_p1._2,
						A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
						_v7 = _p1._4;
					f = _v5;
					acc = _v6;
					dict = _v7;
					continue foldl;
				}
			}
		});
	var _elm_lang$core$Dict$merge = F6(
		function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
			var stepState = F3(
				function (rKey, rValue, _p2) {
					stepState:
					while (true) {
						var _p3 = _p2;
						var _p9 = _p3._1;
						var _p8 = _p3._0;
						var _p4 = _p8;
						if (_p4.ctor === '[]') {
							return {
								ctor: '_Tuple2',
								_0: _p8,
								_1: A3(rightStep, rKey, rValue, _p9)
							};
						} else {
							var _p7 = _p4._1;
							var _p6 = _p4._0._1;
							var _p5 = _p4._0._0;
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
								var _v10 = rKey,
									_v11 = rValue,
									_v12 = {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A3(leftStep, _p5, _p6, _p9)
								};
								rKey = _v10;
								rValue = _v11;
								_p2 = _v12;
								continue stepState;
							} else {
								if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
									return {
										ctor: '_Tuple2',
										_0: _p8,
										_1: A3(rightStep, rKey, rValue, _p9)
									};
								} else {
									return {
										ctor: '_Tuple2',
										_0: _p7,
										_1: A4(bothStep, _p5, _p6, rValue, _p9)
									};
								}
							}
						}
					}
				});
			var _p10 = A3(
				_elm_lang$core$Dict$foldl,
				stepState,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$Dict$toList(leftDict),
					_1: initialResult
				},
				rightDict);
			var leftovers = _p10._0;
			var intermediateResult = _p10._1;
			return A3(
				_elm_lang$core$List$foldl,
				F2(
					function (_p11, result) {
						var _p12 = _p11;
						return A3(leftStep, _p12._0, _p12._1, result);
					}),
				intermediateResult,
				leftovers);
		});
	var _elm_lang$core$Dict$reportRemBug = F4(
		function (msg, c, lgot, rgot) {
			return _elm_lang$core$Native_Debug.crash(
				_elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Internal red-black tree invariant violated, expected ',
						_1: {
							ctor: '::',
							_0: msg,
							_1: {
								ctor: '::',
								_0: ' and got ',
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Basics$toString(c),
									_1: {
										ctor: '::',
										_0: '/',
										_1: {
											ctor: '::',
											_0: lgot,
											_1: {
												ctor: '::',
												_0: '/',
												_1: {
													ctor: '::',
													_0: rgot,
													_1: {
														ctor: '::',
														_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						}
					}));
		});
	var _elm_lang$core$Dict$isBBlack = function (dict) {
		var _p13 = dict;
		_v14_2:
		do {
			if (_p13.ctor === 'RBNode_elm_builtin') {
				if (_p13._0.ctor === 'BBlack') {
					return true;
				} else {
					break _v14_2;
				}
			} else {
				if (_p13._0.ctor === 'LBBlack') {
					return true;
				} else {
					break _v14_2;
				}
			}
		} while(false);
		return false;
	};
	var _elm_lang$core$Dict$sizeHelp = F2(
		function (n, dict) {
			sizeHelp:
			while (true) {
				var _p14 = dict;
				if (_p14.ctor === 'RBEmpty_elm_builtin') {
					return n;
				} else {
					var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
						_v17 = _p14._3;
					n = _v16;
					dict = _v17;
					continue sizeHelp;
				}
			}
		});
	var _elm_lang$core$Dict$size = function (dict) {
		return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
	};
	var _elm_lang$core$Dict$get = F2(
		function (targetKey, dict) {
			get:
			while (true) {
				var _p15 = dict;
				if (_p15.ctor === 'RBEmpty_elm_builtin') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
					switch (_p16.ctor) {
						case 'LT':
							var _v20 = targetKey,
								_v21 = _p15._3;
							targetKey = _v20;
							dict = _v21;
							continue get;
						case 'EQ':
							return _elm_lang$core$Maybe$Just(_p15._2);
						default:
							var _v22 = targetKey,
								_v23 = _p15._4;
							targetKey = _v22;
							dict = _v23;
							continue get;
					}
				}
			}
		});
	var _elm_lang$core$Dict$member = F2(
		function (key, dict) {
			var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
			if (_p17.ctor === 'Just') {
				return true;
			} else {
				return false;
			}
		});
	var _elm_lang$core$Dict$maxWithDefault = F3(
		function (k, v, r) {
			maxWithDefault:
			while (true) {
				var _p18 = r;
				if (_p18.ctor === 'RBEmpty_elm_builtin') {
					return {ctor: '_Tuple2', _0: k, _1: v};
				} else {
					var _v26 = _p18._1,
						_v27 = _p18._2,
						_v28 = _p18._4;
					k = _v26;
					v = _v27;
					r = _v28;
					continue maxWithDefault;
				}
			}
		});
	var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
	var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
	var _elm_lang$core$Dict$Black = {ctor: 'Black'};
	var _elm_lang$core$Dict$blackish = function (t) {
		var _p19 = t;
		if (_p19.ctor === 'RBNode_elm_builtin') {
			var _p20 = _p19._0;
			return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
		} else {
			return true;
		}
	};
	var _elm_lang$core$Dict$Red = {ctor: 'Red'};
	var _elm_lang$core$Dict$moreBlack = function (color) {
		var _p21 = color;
		switch (_p21.ctor) {
			case 'Black':
				return _elm_lang$core$Dict$BBlack;
			case 'Red':
				return _elm_lang$core$Dict$Black;
			case 'NBlack':
				return _elm_lang$core$Dict$Red;
			default:
				return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
		}
	};
	var _elm_lang$core$Dict$lessBlack = function (color) {
		var _p22 = color;
		switch (_p22.ctor) {
			case 'BBlack':
				return _elm_lang$core$Dict$Black;
			case 'Black':
				return _elm_lang$core$Dict$Red;
			case 'Red':
				return _elm_lang$core$Dict$NBlack;
			default:
				return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
		}
	};
	var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
	var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
	var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
		return {ctor: 'RBEmpty_elm_builtin', _0: a};
	};
	var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	var _elm_lang$core$Dict$isEmpty = function (dict) {
		return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
	};
	var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
		function (a, b, c, d, e) {
			return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
		});
	var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
		var _p23 = dict;
		if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
		} else {
			return dict;
		}
	};
	var _elm_lang$core$Dict$lessBlackTree = function (dict) {
		var _p24 = dict;
		if (_p24.ctor === 'RBNode_elm_builtin') {
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$lessBlack(_p24._0),
				_p24._1,
				_p24._2,
				_p24._3,
				_p24._4);
		} else {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		}
	};
	var _elm_lang$core$Dict$balancedTree = function (col) {
		return function (xk) {
			return function (xv) {
				return function (yk) {
					return function (yv) {
						return function (zk) {
							return function (zv) {
								return function (a) {
									return function (b) {
										return function (c) {
											return function (d) {
												return A5(
													_elm_lang$core$Dict$RBNode_elm_builtin,
													_elm_lang$core$Dict$lessBlack(col),
													yk,
													yv,
													A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
													A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _elm_lang$core$Dict$blacken = function (t) {
		var _p25 = t;
		if (_p25.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
		}
	};
	var _elm_lang$core$Dict$redden = function (t) {
		var _p26 = t;
		if (_p26.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
		} else {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
		}
	};
	var _elm_lang$core$Dict$balanceHelp = function (tree) {
		var _p27 = tree;
		_v36_6:
		do {
			_v36_5:
			do {
				_v36_4:
				do {
					_v36_3:
					do {
						_v36_2:
						do {
							_v36_1:
							do {
								_v36_0:
								do {
									if (_p27.ctor === 'RBNode_elm_builtin') {
										if (_p27._3.ctor === 'RBNode_elm_builtin') {
											if (_p27._4.ctor === 'RBNode_elm_builtin') {
												switch (_p27._3._0.ctor) {
													case 'Red':
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																			break _v36_2;
																		} else {
																			if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																				break _v36_3;
																			} else {
																				break _v36_6;
																			}
																		}
																	}
																}
															case 'NBlack':
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																			break _v36_4;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															default:
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		break _v36_6;
																	}
																}
														}
													case 'NBlack':
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																	break _v36_2;
																} else {
																	if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																		break _v36_3;
																	} else {
																		if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																			break _v36_5;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															case 'NBlack':
																if (_p27._0.ctor === 'BBlack') {
																	if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																			break _v36_5;
																		} else {
																			break _v36_6;
																		}
																	}
																} else {
																	break _v36_6;
																}
															default:
																if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																	break _v36_5;
																} else {
																	break _v36_6;
																}
														}
													default:
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																	break _v36_2;
																} else {
																	if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																		break _v36_3;
																	} else {
																		break _v36_6;
																	}
																}
															case 'NBlack':
																if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	break _v36_6;
																}
															default:
																break _v36_6;
														}
												}
											} else {
												switch (_p27._3._0.ctor) {
													case 'Red':
														if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
															break _v36_0;
														} else {
															if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																break _v36_1;
															} else {
																break _v36_6;
															}
														}
													case 'NBlack':
														if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
															break _v36_5;
														} else {
															break _v36_6;
														}
													default:
														break _v36_6;
												}
											}
										} else {
											if (_p27._4.ctor === 'RBNode_elm_builtin') {
												switch (_p27._4._0.ctor) {
													case 'Red':
														if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
															break _v36_2;
														} else {
															if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																break _v36_3;
															} else {
																break _v36_6;
															}
														}
													case 'NBlack':
														if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
															break _v36_4;
														} else {
															break _v36_6;
														}
													default:
														break _v36_6;
												}
											} else {
												break _v36_6;
											}
										}
									} else {
										break _v36_6;
									}
								} while(false);
								return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
				} while(false);
				return A5(
					_elm_lang$core$Dict$RBNode_elm_builtin,
					_elm_lang$core$Dict$Black,
					_p27._4._3._1,
					_p27._4._3._2,
					A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
					A5(
						_elm_lang$core$Dict$balance,
						_elm_lang$core$Dict$Black,
						_p27._4._1,
						_p27._4._2,
						_p27._4._3._4,
						_elm_lang$core$Dict$redden(_p27._4._4)));
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._3._4._1,
				_p27._3._4._2,
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._3._1,
					_p27._3._2,
					_elm_lang$core$Dict$redden(_p27._3._3),
					_p27._3._4._3),
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
		} while(false);
		return tree;
	};
	var _elm_lang$core$Dict$balance = F5(
		function (c, k, v, l, r) {
			var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
			return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
		});
	var _elm_lang$core$Dict$bubble = F5(
		function (c, k, v, l, r) {
			return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$moreBlack(c),
				k,
				v,
				_elm_lang$core$Dict$lessBlackTree(l),
				_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		});
	var _elm_lang$core$Dict$removeMax = F5(
		function (c, k, v, l, r) {
			var _p28 = r;
			if (_p28.ctor === 'RBEmpty_elm_builtin') {
				return A3(_elm_lang$core$Dict$rem, c, l, r);
			} else {
				return A5(
					_elm_lang$core$Dict$bubble,
					c,
					k,
					v,
					l,
					A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
			}
		});
	var _elm_lang$core$Dict$rem = F3(
		function (color, left, right) {
			var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
			if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
				if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
					var _p30 = color;
					switch (_p30.ctor) {
						case 'Red':
							return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
						case 'Black':
							return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
						default:
							return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
					}
				} else {
					var _p33 = _p29._1._0;
					var _p32 = _p29._0._0;
					var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
					if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
						return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
					} else {
						return A4(
							_elm_lang$core$Dict$reportRemBug,
							'Black/LBlack/Red',
							color,
							_elm_lang$core$Basics$toString(_p32),
							_elm_lang$core$Basics$toString(_p33));
					}
				}
			} else {
				if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
					var _p36 = _p29._1._0;
					var _p35 = _p29._0._0;
					var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
					if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
						return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
					} else {
						return A4(
							_elm_lang$core$Dict$reportRemBug,
							'Black/Red/LBlack',
							color,
							_elm_lang$core$Basics$toString(_p35),
							_elm_lang$core$Basics$toString(_p36));
					}
				} else {
					var _p40 = _p29._0._2;
					var _p39 = _p29._0._4;
					var _p38 = _p29._0._1;
					var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
					var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
					var k = _p37._0;
					var v = _p37._1;
					return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
				}
			}
		});
	var _elm_lang$core$Dict$map = F2(
		function (f, dict) {
			var _p41 = dict;
			if (_p41.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
			} else {
				var _p42 = _p41._1;
				return A5(
					_elm_lang$core$Dict$RBNode_elm_builtin,
					_p41._0,
					_p42,
					A2(f, _p42, _p41._2),
					A2(_elm_lang$core$Dict$map, f, _p41._3),
					A2(_elm_lang$core$Dict$map, f, _p41._4));
			}
		});
	var _elm_lang$core$Dict$Same = {ctor: 'Same'};
	var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
	var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
	var _elm_lang$core$Dict$update = F3(
		function (k, alter, dict) {
			var up = function (dict) {
				var _p43 = dict;
				if (_p43.ctor === 'RBEmpty_elm_builtin') {
					var _p44 = alter(_elm_lang$core$Maybe$Nothing);
					if (_p44.ctor === 'Nothing') {
						return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
					} else {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Dict$Insert,
							_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
						};
					}
				} else {
					var _p55 = _p43._2;
					var _p54 = _p43._4;
					var _p53 = _p43._3;
					var _p52 = _p43._1;
					var _p51 = _p43._0;
					var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
					switch (_p45.ctor) {
						case 'EQ':
							var _p46 = alter(
								_elm_lang$core$Maybe$Just(_p55));
							if (_p46.ctor === 'Nothing') {
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
								};
							}
						case 'LT':
							var _p47 = up(_p53);
							var flag = _p47._0;
							var newLeft = _p47._1;
							var _p48 = flag;
							switch (_p48.ctor) {
								case 'Same':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Same,
										_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
									};
								case 'Insert':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Insert,
										_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
									};
								default:
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Remove,
										_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
									};
							}
						default:
							var _p49 = up(_p54);
							var flag = _p49._0;
							var newRight = _p49._1;
							var _p50 = flag;
							switch (_p50.ctor) {
								case 'Same':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Same,
										_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
									};
								case 'Insert':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Insert,
										_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
									};
								default:
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Remove,
										_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
									};
							}
					}
				}
			};
			var _p56 = up(dict);
			var flag = _p56._0;
			var updatedDict = _p56._1;
			var _p57 = flag;
			switch (_p57.ctor) {
				case 'Same':
					return updatedDict;
				case 'Insert':
					return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
				default:
					return _elm_lang$core$Dict$blacken(updatedDict);
			}
		});
	var _elm_lang$core$Dict$insert = F3(
		function (key, value, dict) {
			return A3(
				_elm_lang$core$Dict$update,
				key,
				_elm_lang$core$Basics$always(
					_elm_lang$core$Maybe$Just(value)),
				dict);
		});
	var _elm_lang$core$Dict$singleton = F2(
		function (key, value) {
			return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
		});
	var _elm_lang$core$Dict$union = F2(
		function (t1, t2) {
			return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
		});
	var _elm_lang$core$Dict$filter = F2(
		function (predicate, dictionary) {
			var add = F3(
				function (key, value, dict) {
					return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
				});
			return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
		});
	var _elm_lang$core$Dict$intersect = F2(
		function (t1, t2) {
			return A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p58) {
						return A2(_elm_lang$core$Dict$member, k, t2);
					}),
				t1);
		});
	var _elm_lang$core$Dict$partition = F2(
		function (predicate, dict) {
			var add = F3(
				function (key, value, _p59) {
					var _p60 = _p59;
					var _p62 = _p60._1;
					var _p61 = _p60._0;
					return A2(predicate, key, value) ? {
						ctor: '_Tuple2',
						_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
						_1: _p62
					} : {
						ctor: '_Tuple2',
						_0: _p61,
						_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
					};
				});
			return A3(
				_elm_lang$core$Dict$foldl,
				add,
				{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
				dict);
		});
	var _elm_lang$core$Dict$fromList = function (assocs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p63, dict) {
					var _p64 = _p63;
					return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
				}),
			_elm_lang$core$Dict$empty,
			assocs);
	};
	var _elm_lang$core$Dict$remove = F2(
		function (key, dict) {
			return A3(
				_elm_lang$core$Dict$update,
				key,
				_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
				dict);
		});
	var _elm_lang$core$Dict$diff = F2(
		function (t1, t2) {
			return A3(
				_elm_lang$core$Dict$foldl,
				F3(
					function (k, v, t) {
						return A2(_elm_lang$core$Dict$remove, k, t);
					}),
				t1,
				t2);
		});

	//import Maybe, Native.Array, Native.List, Native.Utils, Result //

	var _elm_lang$core$Native_Json = function() {


	// CORE DECODERS

	function succeed(msg)
	{
		return {
			ctor: '<decoder>',
			tag: 'succeed',
			msg: msg
		};
	}

	function fail(msg)
	{
		return {
			ctor: '<decoder>',
			tag: 'fail',
			msg: msg
		};
	}

	function decodePrimitive(tag)
	{
		return {
			ctor: '<decoder>',
			tag: tag
		};
	}

	function decodeContainer(tag, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: tag,
			decoder: decoder
		};
	}

	function decodeNull(value)
	{
		return {
			ctor: '<decoder>',
			tag: 'null',
			value: value
		};
	}

	function decodeField(field, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'field',
			field: field,
			decoder: decoder
		};
	}

	function decodeIndex(index, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'index',
			index: index,
			decoder: decoder
		};
	}

	function decodeKeyValuePairs(decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'key-value',
			decoder: decoder
		};
	}

	function mapMany(f, decoders)
	{
		return {
			ctor: '<decoder>',
			tag: 'map-many',
			func: f,
			decoders: decoders
		};
	}

	function andThen(callback, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'andThen',
			decoder: decoder,
			callback: callback
		};
	}

	function oneOf(decoders)
	{
		return {
			ctor: '<decoder>',
			tag: 'oneOf',
			decoders: decoders
		};
	}


	// DECODING OBJECTS

	function map1(f, d1)
	{
		return mapMany(f, [d1]);
	}

	function map2(f, d1, d2)
	{
		return mapMany(f, [d1, d2]);
	}

	function map3(f, d1, d2, d3)
	{
		return mapMany(f, [d1, d2, d3]);
	}

	function map4(f, d1, d2, d3, d4)
	{
		return mapMany(f, [d1, d2, d3, d4]);
	}

	function map5(f, d1, d2, d3, d4, d5)
	{
		return mapMany(f, [d1, d2, d3, d4, d5]);
	}

	function map6(f, d1, d2, d3, d4, d5, d6)
	{
		return mapMany(f, [d1, d2, d3, d4, d5, d6]);
	}

	function map7(f, d1, d2, d3, d4, d5, d6, d7)
	{
		return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
	}

	function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
	{
		return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
	}


	// DECODE HELPERS

	function ok(value)
	{
		return { tag: 'ok', value: value };
	}

	function badPrimitive(type, value)
	{
		return { tag: 'primitive', type: type, value: value };
	}

	function badIndex(index, nestedProblems)
	{
		return { tag: 'index', index: index, rest: nestedProblems };
	}

	function badField(field, nestedProblems)
	{
		return { tag: 'field', field: field, rest: nestedProblems };
	}

	function badIndex(index, nestedProblems)
	{
		return { tag: 'index', index: index, rest: nestedProblems };
	}

	function badOneOf(problems)
	{
		return { tag: 'oneOf', problems: problems };
	}

	function bad(msg)
	{
		return { tag: 'fail', msg: msg };
	}

	function badToString(problem)
	{
		var context = '_';
		while (problem)
		{
			switch (problem.tag)
			{
				case 'primitive':
					return 'Expecting ' + problem.type
						+ (context === '_' ? '' : ' at ' + context)
						+ ' but instead got: ' + jsToString(problem.value);

				case 'index':
					context += '[' + problem.index + ']';
					problem = problem.rest;
					break;

				case 'field':
					context += '.' + problem.field;
					problem = problem.rest;
					break;

				case 'index':
					context += '[' + problem.index + ']';
					problem = problem.rest;
					break;

				case 'oneOf':
					var problems = problem.problems;
					for (var i = 0; i < problems.length; i++)
					{
						problems[i] = badToString(problems[i]);
					}
					return 'I ran into the following problems'
						+ (context === '_' ? '' : ' at ' + context)
						+ ':\n\n' + problems.join('\n');

				case 'fail':
					return 'I ran into a `fail` decoder'
						+ (context === '_' ? '' : ' at ' + context)
						+ ': ' + problem.msg;
			}
		}
	}

	function jsToString(value)
	{
		return value === undefined
			? 'undefined'
			: JSON.stringify(value);
	}


	// DECODE

	function runOnString(decoder, string)
	{
		var json;
		try
		{
			json = JSON.parse(string);
		}
		catch (e)
		{
			return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
		}
		return run(decoder, json);
	}

	function run(decoder, value)
	{
		var result = runHelp(decoder, value);
		return (result.tag === 'ok')
			? _elm_lang$core$Result$Ok(result.value)
			: _elm_lang$core$Result$Err(badToString(result));
	}

	function runHelp(decoder, value)
	{
		switch (decoder.tag)
		{
			case 'bool':
				return (typeof value === 'boolean')
					? ok(value)
					: badPrimitive('a Bool', value);

			case 'int':
				if (typeof value !== 'number') {
					return badPrimitive('an Int', value);
				}

				if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
					return ok(value);
				}

				if (isFinite(value) && !(value % 1)) {
					return ok(value);
				}

				return badPrimitive('an Int', value);

			case 'float':
				return (typeof value === 'number')
					? ok(value)
					: badPrimitive('a Float', value);

			case 'string':
				return (typeof value === 'string')
					? ok(value)
					: (value instanceof String)
						? ok(value + '')
						: badPrimitive('a String', value);

			case 'null':
				return (value === null)
					? ok(decoder.value)
					: badPrimitive('null', value);

			case 'value':
				return ok(value);

			case 'list':
				if (!(value instanceof Array))
				{
					return badPrimitive('a List', value);
				}

				var list = _elm_lang$core$Native_List.Nil;
				for (var i = value.length; i--; )
				{
					var result = runHelp(decoder.decoder, value[i]);
					if (result.tag !== 'ok')
					{
						return badIndex(i, result)
					}
					list = _elm_lang$core$Native_List.Cons(result.value, list);
				}
				return ok(list);

			case 'array':
				if (!(value instanceof Array))
				{
					return badPrimitive('an Array', value);
				}

				var len = value.length;
				var array = new Array(len);
				for (var i = len; i--; )
				{
					var result = runHelp(decoder.decoder, value[i]);
					if (result.tag !== 'ok')
					{
						return badIndex(i, result);
					}
					array[i] = result.value;
				}
				return ok(_elm_lang$core$Native_Array.fromJSArray(array));

			case 'maybe':
				var result = runHelp(decoder.decoder, value);
				return (result.tag === 'ok')
					? ok(_elm_lang$core$Maybe$Just(result.value))
					: ok(_elm_lang$core$Maybe$Nothing);

			case 'field':
				var field = decoder.field;
				if (typeof value !== 'object' || value === null || !(field in value))
				{
					return badPrimitive('an object with a field named `' + field + '`', value);
				}

				var result = runHelp(decoder.decoder, value[field]);
				return (result.tag === 'ok') ? result : badField(field, result);

			case 'index':
				var index = decoder.index;
				if (!(value instanceof Array))
				{
					return badPrimitive('an array', value);
				}
				if (index >= value.length)
				{
					return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
				}

				var result = runHelp(decoder.decoder, value[index]);
				return (result.tag === 'ok') ? result : badIndex(index, result);

			case 'key-value':
				if (typeof value !== 'object' || value === null || value instanceof Array)
				{
					return badPrimitive('an object', value);
				}

				var keyValuePairs = _elm_lang$core$Native_List.Nil;
				for (var key in value)
				{
					var result = runHelp(decoder.decoder, value[key]);
					if (result.tag !== 'ok')
					{
						return badField(key, result);
					}
					var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
					keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
				}
				return ok(keyValuePairs);

			case 'map-many':
				var answer = decoder.func;
				var decoders = decoder.decoders;
				for (var i = 0; i < decoders.length; i++)
				{
					var result = runHelp(decoders[i], value);
					if (result.tag !== 'ok')
					{
						return result;
					}
					answer = answer(result.value);
				}
				return ok(answer);

			case 'andThen':
				var result = runHelp(decoder.decoder, value);
				return (result.tag !== 'ok')
					? result
					: runHelp(decoder.callback(result.value), value);

			case 'oneOf':
				var errors = [];
				var temp = decoder.decoders;
				while (temp.ctor !== '[]')
				{
					var result = runHelp(temp._0, value);

					if (result.tag === 'ok')
					{
						return result;
					}

					errors.push(result);

					temp = temp._1;
				}
				return badOneOf(errors);

			case 'fail':
				return bad(decoder.msg);

			case 'succeed':
				return ok(decoder.msg);
		}
	}


	// EQUALITY

	function equality(a, b)
	{
		if (a === b)
		{
			return true;
		}

		if (a.tag !== b.tag)
		{
			return false;
		}

		switch (a.tag)
		{
			case 'succeed':
			case 'fail':
				return a.msg === b.msg;

			case 'bool':
			case 'int':
			case 'float':
			case 'string':
			case 'value':
				return true;

			case 'null':
				return a.value === b.value;

			case 'list':
			case 'array':
			case 'maybe':
			case 'key-value':
				return equality(a.decoder, b.decoder);

			case 'field':
				return a.field === b.field && equality(a.decoder, b.decoder);

			case 'index':
				return a.index === b.index && equality(a.decoder, b.decoder);

			case 'map-many':
				if (a.func !== b.func)
				{
					return false;
				}
				return listEquality(a.decoders, b.decoders);

			case 'andThen':
				return a.callback === b.callback && equality(a.decoder, b.decoder);

			case 'oneOf':
				return listEquality(a.decoders, b.decoders);
		}
	}

	function listEquality(aDecoders, bDecoders)
	{
		var len = aDecoders.length;
		if (len !== bDecoders.length)
		{
			return false;
		}
		for (var i = 0; i < len; i++)
		{
			if (!equality(aDecoders[i], bDecoders[i]))
			{
				return false;
			}
		}
		return true;
	}


	// ENCODE

	function encode(indentLevel, value)
	{
		return JSON.stringify(value, null, indentLevel);
	}

	function identity(value)
	{
		return value;
	}

	function encodeObject(keyValuePairs)
	{
		var obj = {};
		while (keyValuePairs.ctor !== '[]')
		{
			var pair = keyValuePairs._0;
			obj[pair._0] = pair._1;
			keyValuePairs = keyValuePairs._1;
		}
		return obj;
	}

	return {
		encode: F2(encode),
		runOnString: F2(runOnString),
		run: F2(run),

		decodeNull: decodeNull,
		decodePrimitive: decodePrimitive,
		decodeContainer: F2(decodeContainer),

		decodeField: F2(decodeField),
		decodeIndex: F2(decodeIndex),

		map1: F2(map1),
		map2: F3(map2),
		map3: F4(map3),
		map4: F5(map4),
		map5: F6(map5),
		map6: F7(map6),
		map7: F8(map7),
		map8: F9(map8),
		decodeKeyValuePairs: decodeKeyValuePairs,

		andThen: F2(andThen),
		fail: fail,
		succeed: succeed,
		oneOf: oneOf,

		identity: identity,
		encodeNull: null,
		encodeArray: _elm_lang$core$Native_Array.toJSArray,
		encodeList: _elm_lang$core$Native_List.toArray,
		encodeObject: encodeObject,

		equality: equality
	};

	}();

	var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
	var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
	var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
	var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
	var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
	var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

	var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
	var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
	var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
	var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
	var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
	var _elm_lang$core$Json_Decode$lazy = function (thunk) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			thunk,
			_elm_lang$core$Json_Decode$succeed(
				{ctor: '_Tuple0'}));
	};
	var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
	var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
	var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
	var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
	var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
	var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
	var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
	var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
	var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
	var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
	var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
	var _elm_lang$core$Json_Decode$maybe = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
	};
	var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
	var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
	var _elm_lang$core$Json_Decode$at = F2(
		function (fields, decoder) {
			return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
		});
	var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
	var _elm_lang$core$Json_Decode$dict = function (decoder) {
		return A2(
			_elm_lang$core$Json_Decode$map,
			_elm_lang$core$Dict$fromList,
			_elm_lang$core$Json_Decode$keyValuePairs(decoder));
	};
	var _elm_lang$core$Json_Decode$array = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
	};
	var _elm_lang$core$Json_Decode$list = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
	};
	var _elm_lang$core$Json_Decode$nullable = function (decoder) {
		return _elm_lang$core$Json_Decode$oneOf(
			{
				ctor: '::',
				_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
					_1: {ctor: '[]'}
				}
			});
	};
	var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
	var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
	var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
	var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
	var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

	var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
	var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

	var _elm_lang$core$Tuple$mapSecond = F2(
		function (func, _p0) {
			var _p1 = _p0;
			return {
				ctor: '_Tuple2',
				_0: _p1._0,
				_1: func(_p1._1)
			};
		});
	var _elm_lang$core$Tuple$mapFirst = F2(
		function (func, _p2) {
			var _p3 = _p2;
			return {
				ctor: '_Tuple2',
				_0: func(_p3._0),
				_1: _p3._1
			};
		});
	var _elm_lang$core$Tuple$second = function (_p4) {
		var _p5 = _p4;
		return _p5._1;
	};
	var _elm_lang$core$Tuple$first = function (_p6) {
		var _p7 = _p6;
		return _p7._0;
	};

	//import //

	var _elm_lang$core$Native_Platform = function() {


	// PROGRAMS

	function program(impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName)
			{
				object['worker'] = function worker(flags)
				{
					if (typeof flags !== 'undefined')
					{
						throw new Error(
							'The `' + moduleName + '` module does not need flags.\n'
							+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
						);
					}

					return initialize(
						impl.init,
						impl.update,
						impl.subscriptions,
						renderer
					);
				};
			};
		};
	}

	function programWithFlags(impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName)
			{
				object['worker'] = function worker(flags)
				{
					if (typeof flagDecoder === 'undefined')
					{
						throw new Error(
							'Are you trying to sneak a Never value into Elm? Trickster!\n'
							+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
							+ 'Use `program` instead if you do not want flags.'
						);
					}

					var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
					if (result.ctor === 'Err')
					{
						throw new Error(
							moduleName + '.worker(...) was called with an unexpected argument.\n'
							+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
							+ result._0
						);
					}

					return initialize(
						impl.init(result._0),
						impl.update,
						impl.subscriptions,
						renderer
					);
				};
			};
		};
	}

	function renderer(enqueue, _)
	{
		return function(_) {};
	}


	// HTML TO PROGRAM

	function htmlToProgram(vnode)
	{
		var emptyBag = batch(_elm_lang$core$Native_List.Nil);
		var noChange = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			emptyBag
		);

		return _elm_lang$virtual_dom$VirtualDom$program({
			init: noChange,
			view: function(model) { return main; },
			update: F2(function(msg, model) { return noChange; }),
			subscriptions: function (model) { return emptyBag; }
		});
	}


	// INITIALIZE A PROGRAM

	function initialize(init, update, subscriptions, renderer)
	{
		// ambient state
		var managers = {};
		var updateView;

		// init and update state in main process
		var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var model = init._0;
			updateView = renderer(enqueue, model);
			var cmds = init._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});

		function onMessage(msg, model)
		{
			return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
				var results = A2(update, msg, model);
				model = results._0;
				updateView(model);
				var cmds = results._1;
				var subs = subscriptions(model);
				dispatchEffects(managers, cmds, subs);
				callback(_elm_lang$core$Native_Scheduler.succeed(model));
			});
		}

		var mainProcess = spawnLoop(initApp, onMessage);

		function enqueue(msg)
		{
			_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
		}

		var ports = setupEffects(managers, enqueue);

		return ports ? { ports: ports } : {};
	}


	// EFFECT MANAGERS

	var effectManagers = {};

	function setupEffects(managers, callback)
	{
		var ports;

		// setup all necessary effect managers
		for (var key in effectManagers)
		{
			var manager = effectManagers[key];

			if (manager.isForeign)
			{
				ports = ports || {};
				ports[key] = manager.tag === 'cmd'
					? setupOutgoingPort(key)
					: setupIncomingPort(key, callback);
			}

			managers[key] = makeManager(manager, callback);
		}

		return ports;
	}

	function makeManager(info, callback)
	{
		var router = {
			main: callback,
			self: undefined
		};

		var tag = info.tag;
		var onEffects = info.onEffects;
		var onSelfMsg = info.onSelfMsg;

		function onMessage(msg, state)
		{
			if (msg.ctor === 'self')
			{
				return A3(onSelfMsg, router, msg._0, state);
			}

			var fx = msg._0;
			switch (tag)
			{
				case 'cmd':
					return A3(onEffects, router, fx.cmds, state);

				case 'sub':
					return A3(onEffects, router, fx.subs, state);

				case 'fx':
					return A4(onEffects, router, fx.cmds, fx.subs, state);
			}
		}

		var process = spawnLoop(info.init, onMessage);
		router.self = process;
		return process;
	}

	function sendToApp(router, msg)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			router.main(msg);
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}

	function sendToSelf(router, msg)
	{
		return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
			ctor: 'self',
			_0: msg
		});
	}


	// HELPER for STATEFUL LOOPS

	function spawnLoop(init, onMessage)
	{
		var andThen = _elm_lang$core$Native_Scheduler.andThen;

		function loop(state)
		{
			var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
				return onMessage(msg, state);
			});
			return A2(andThen, loop, handleMsg);
		}

		var task = A2(andThen, loop, init);

		return _elm_lang$core$Native_Scheduler.rawSpawn(task);
	}


	// BAGS

	function leaf(home)
	{
		return function(value)
		{
			return {
				type: 'leaf',
				home: home,
				value: value
			};
		};
	}

	function batch(list)
	{
		return {
			type: 'node',
			branches: list
		};
	}

	function map(tagger, bag)
	{
		return {
			type: 'map',
			tagger: tagger,
			tree: bag
		}
	}


	// PIPE BAGS INTO EFFECT MANAGERS

	function dispatchEffects(managers, cmdBag, subBag)
	{
		var effectsDict = {};
		gatherEffects(true, cmdBag, effectsDict, null);
		gatherEffects(false, subBag, effectsDict, null);

		for (var home in managers)
		{
			var fx = home in effectsDict
				? effectsDict[home]
				: {
					cmds: _elm_lang$core$Native_List.Nil,
					subs: _elm_lang$core$Native_List.Nil
				};

			_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
		}
	}

	function gatherEffects(isCmd, bag, effectsDict, taggers)
	{
		switch (bag.type)
		{
			case 'leaf':
				var home = bag.home;
				var effect = toEffect(isCmd, home, taggers, bag.value);
				effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
				return;

			case 'node':
				var list = bag.branches;
				while (list.ctor !== '[]')
				{
					gatherEffects(isCmd, list._0, effectsDict, taggers);
					list = list._1;
				}
				return;

			case 'map':
				gatherEffects(isCmd, bag.tree, effectsDict, {
					tagger: bag.tagger,
					rest: taggers
				});
				return;
		}
	}

	function toEffect(isCmd, home, taggers, value)
	{
		function applyTaggers(x)
		{
			var temp = taggers;
			while (temp)
			{
				x = temp.tagger(x);
				temp = temp.rest;
			}
			return x;
		}

		var map = isCmd
			? effectManagers[home].cmdMap
			: effectManagers[home].subMap;

		return A2(map, applyTaggers, value)
	}

	function insert(isCmd, newEffect, effects)
	{
		effects = effects || {
			cmds: _elm_lang$core$Native_List.Nil,
			subs: _elm_lang$core$Native_List.Nil
		};
		if (isCmd)
		{
			effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
			return effects;
		}
		effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
		return effects;
	}


	// PORTS

	function checkPortName(name)
	{
		if (name in effectManagers)
		{
			throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
		}
	}


	// OUTGOING PORTS

	function outgoingPort(name, converter)
	{
		checkPortName(name);
		effectManagers[name] = {
			tag: 'cmd',
			cmdMap: outgoingPortMap,
			converter: converter,
			isForeign: true
		};
		return leaf(name);
	}

	var outgoingPortMap = F2(function cmdMap(tagger, value) {
		return value;
	});

	function setupOutgoingPort(name)
	{
		var subs = [];
		var converter = effectManagers[name].converter;

		// CREATE MANAGER

		var init = _elm_lang$core$Native_Scheduler.succeed(null);

		function onEffects(router, cmdList, state)
		{
			while (cmdList.ctor !== '[]')
			{
				// grab a separate reference to subs in case unsubscribe is called
				var currentSubs = subs;
				var value = converter(cmdList._0);
				for (var i = 0; i < currentSubs.length; i++)
				{
					currentSubs[i](value);
				}
				cmdList = cmdList._1;
			}
			return init;
		}

		effectManagers[name].init = init;
		effectManagers[name].onEffects = F3(onEffects);

		// PUBLIC API

		function subscribe(callback)
		{
			subs.push(callback);
		}

		function unsubscribe(callback)
		{
			// copy subs into a new array in case unsubscribe is called within a
			// subscribed callback
			subs = subs.slice();
			var index = subs.indexOf(callback);
			if (index >= 0)
			{
				subs.splice(index, 1);
			}
		}

		return {
			subscribe: subscribe,
			unsubscribe: unsubscribe
		};
	}


	// INCOMING PORTS

	function incomingPort(name, converter)
	{
		checkPortName(name);
		effectManagers[name] = {
			tag: 'sub',
			subMap: incomingPortMap,
			converter: converter,
			isForeign: true
		};
		return leaf(name);
	}

	var incomingPortMap = F2(function subMap(tagger, finalTagger)
	{
		return function(value)
		{
			return tagger(finalTagger(value));
		};
	});

	function setupIncomingPort(name, callback)
	{
		var sentBeforeInit = [];
		var subs = _elm_lang$core$Native_List.Nil;
		var converter = effectManagers[name].converter;
		var currentOnEffects = preInitOnEffects;
		var currentSend = preInitSend;

		// CREATE MANAGER

		var init = _elm_lang$core$Native_Scheduler.succeed(null);

		function preInitOnEffects(router, subList, state)
		{
			var postInitResult = postInitOnEffects(router, subList, state);

			for(var i = 0; i < sentBeforeInit.length; i++)
			{
				postInitSend(sentBeforeInit[i]);
			}

			sentBeforeInit = null; // to release objects held in queue
			currentSend = postInitSend;
			currentOnEffects = postInitOnEffects;
			return postInitResult;
		}

		function postInitOnEffects(router, subList, state)
		{
			subs = subList;
			return init;
		}

		function onEffects(router, subList, state)
		{
			return currentOnEffects(router, subList, state);
		}

		effectManagers[name].init = init;
		effectManagers[name].onEffects = F3(onEffects);

		// PUBLIC API

		function preInitSend(value)
		{
			sentBeforeInit.push(value);
		}

		function postInitSend(incomingValue)
		{
			var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
			if (result.ctor === 'Err')
			{
				throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
			}

			var value = result._0;
			var temp = subs;
			while (temp.ctor !== '[]')
			{
				callback(temp._0(value));
				temp = temp._1;
			}
		}

		function send(incomingValue)
		{
			currentSend(incomingValue);
		}

		return { send: send };
	}

	return {
		// routers
		sendToApp: F2(sendToApp),
		sendToSelf: F2(sendToSelf),

		// global setup
		effectManagers: effectManagers,
		outgoingPort: outgoingPort,
		incomingPort: incomingPort,

		htmlToProgram: htmlToProgram,
		program: program,
		programWithFlags: programWithFlags,
		initialize: initialize,

		// effect bags
		leaf: leaf,
		batch: batch,
		map: F2(map)
	};

	}();

	//import Native.Utils //

	var _elm_lang$core$Native_Scheduler = function() {

	var MAX_STEPS = 10000;


	// TASKS

	function succeed(value)
	{
		return {
			ctor: '_Task_succeed',
			value: value
		};
	}

	function fail(error)
	{
		return {
			ctor: '_Task_fail',
			value: error
		};
	}

	function nativeBinding(callback)
	{
		return {
			ctor: '_Task_nativeBinding',
			callback: callback,
			cancel: null
		};
	}

	function andThen(callback, task)
	{
		return {
			ctor: '_Task_andThen',
			callback: callback,
			task: task
		};
	}

	function onError(callback, task)
	{
		return {
			ctor: '_Task_onError',
			callback: callback,
			task: task
		};
	}

	function receive(callback)
	{
		return {
			ctor: '_Task_receive',
			callback: callback
		};
	}


	// PROCESSES

	function rawSpawn(task)
	{
		var process = {
			ctor: '_Process',
			id: _elm_lang$core$Native_Utils.guid(),
			root: task,
			stack: null,
			mailbox: []
		};

		enqueue(process);

		return process;
	}

	function spawn(task)
	{
		return nativeBinding(function(callback) {
			var process = rawSpawn(task);
			callback(succeed(process));
		});
	}

	function rawSend(process, msg)
	{
		process.mailbox.push(msg);
		enqueue(process);
	}

	function send(process, msg)
	{
		return nativeBinding(function(callback) {
			rawSend(process, msg);
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}

	function kill(process)
	{
		return nativeBinding(function(callback) {
			var root = process.root;
			if (root.ctor === '_Task_nativeBinding' && root.cancel)
			{
				root.cancel();
			}

			process.root = null;

			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}

	function sleep(time)
	{
		return nativeBinding(function(callback) {
			var id = setTimeout(function() {
				callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
			}, time);

			return function() { clearTimeout(id); };
		});
	}


	// STEP PROCESSES

	function step(numSteps, process)
	{
		while (numSteps < MAX_STEPS)
		{
			var ctor = process.root.ctor;

			if (ctor === '_Task_succeed')
			{
				while (process.stack && process.stack.ctor === '_Task_onError')
				{
					process.stack = process.stack.rest;
				}
				if (process.stack === null)
				{
					break;
				}
				process.root = process.stack.callback(process.root.value);
				process.stack = process.stack.rest;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_fail')
			{
				while (process.stack && process.stack.ctor === '_Task_andThen')
				{
					process.stack = process.stack.rest;
				}
				if (process.stack === null)
				{
					break;
				}
				process.root = process.stack.callback(process.root.value);
				process.stack = process.stack.rest;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_andThen')
			{
				process.stack = {
					ctor: '_Task_andThen',
					callback: process.root.callback,
					rest: process.stack
				};
				process.root = process.root.task;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_onError')
			{
				process.stack = {
					ctor: '_Task_onError',
					callback: process.root.callback,
					rest: process.stack
				};
				process.root = process.root.task;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_nativeBinding')
			{
				process.root.cancel = process.root.callback(function(newRoot) {
					process.root = newRoot;
					enqueue(process);
				});

				break;
			}

			if (ctor === '_Task_receive')
			{
				var mailbox = process.mailbox;
				if (mailbox.length === 0)
				{
					break;
				}

				process.root = process.root.callback(mailbox.shift());
				++numSteps;
				continue;
			}

			throw new Error(ctor);
		}

		if (numSteps < MAX_STEPS)
		{
			return numSteps + 1;
		}
		enqueue(process);

		return numSteps;
	}


	// WORK QUEUE

	var working = false;
	var workQueue = [];

	function enqueue(process)
	{
		workQueue.push(process);

		if (!working)
		{
			setTimeout(work, 0);
			working = true;
		}
	}

	function work()
	{
		var numSteps = 0;
		var process;
		while (numSteps < MAX_STEPS && (process = workQueue.shift()))
		{
			if (process.root)
			{
				numSteps = step(numSteps, process);
			}
		}
		if (!process)
		{
			working = false;
			return;
		}
		setTimeout(work, 0);
	}


	return {
		succeed: succeed,
		fail: fail,
		nativeBinding: nativeBinding,
		andThen: F2(andThen),
		onError: F2(onError),
		receive: receive,

		spawn: spawn,
		kill: kill,
		sleep: sleep,
		send: F2(send),

		rawSpawn: rawSpawn,
		rawSend: rawSend
	};

	}();
	var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
	var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
		{ctor: '[]'});
	var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
	_elm_lang$core$Platform_Cmd_ops['!'] = F2(
		function (model, commands) {
			return {
				ctor: '_Tuple2',
				_0: model,
				_1: _elm_lang$core$Platform_Cmd$batch(commands)
			};
		});
	var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
	var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

	var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
	var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
		{ctor: '[]'});
	var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
	var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

	var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
	var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
	var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
	var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
	var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
	var _elm_lang$core$Platform$Program = {ctor: 'Program'};
	var _elm_lang$core$Platform$Task = {ctor: 'Task'};
	var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
	var _elm_lang$core$Platform$Router = {ctor: 'Router'};

	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode = _elm_lang$core$Json_Decode$succeed;
	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$resolve = _elm_lang$core$Json_Decode$andThen(_elm_lang$core$Basics$identity);
	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom = _elm_lang$core$Json_Decode$map2(
		F2(
			function (x, y) {
				return y(x);
			}));
	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$hardcoded = function (_p0) {
		return _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom(
			_elm_lang$core$Json_Decode$succeed(_p0));
	};
	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder = F3(
		function (pathDecoder, valDecoder, fallback) {
			var nullOr = function (decoder) {
				return _elm_lang$core$Json_Decode$oneOf(
					{
						ctor: '::',
						_0: decoder,
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Json_Decode$null(fallback),
							_1: {ctor: '[]'}
						}
					});
			};
			var handleResult = function (input) {
				var _p1 = A2(_elm_lang$core$Json_Decode$decodeValue, pathDecoder, input);
				if (_p1.ctor === 'Ok') {
					var _p2 = A2(
						_elm_lang$core$Json_Decode$decodeValue,
						nullOr(valDecoder),
						_p1._0);
					if (_p2.ctor === 'Ok') {
						return _elm_lang$core$Json_Decode$succeed(_p2._0);
					} else {
						return _elm_lang$core$Json_Decode$fail(_p2._0);
					}
				} else {
					return _elm_lang$core$Json_Decode$succeed(fallback);
				}
			};
			return A2(_elm_lang$core$Json_Decode$andThen, handleResult, _elm_lang$core$Json_Decode$value);
		});
	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalAt = F4(
		function (path, valDecoder, fallback, decoder) {
			return A2(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder,
					A2(_elm_lang$core$Json_Decode$at, path, _elm_lang$core$Json_Decode$value),
					valDecoder,
					fallback),
				decoder);
		});
	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional = F4(
		function (key, valDecoder, fallback, decoder) {
			return A2(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder,
					A2(_elm_lang$core$Json_Decode$field, key, _elm_lang$core$Json_Decode$value),
					valDecoder,
					fallback),
				decoder);
		});
	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$requiredAt = F3(
		function (path, valDecoder, decoder) {
			return A2(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
				A2(_elm_lang$core$Json_Decode$at, path, valDecoder),
				decoder);
		});
	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required = F3(
		function (key, valDecoder, decoder) {
			return A2(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
				A2(_elm_lang$core$Json_Decode$field, key, valDecoder),
				decoder);
		});

	var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
	var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
	var _elm_lang$core$Task$spawnCmd = F2(
		function (router, _p0) {
			var _p1 = _p0;
			return _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$core$Platform$sendToApp(router),
					_p1._0));
		});
	var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
	var _elm_lang$core$Task$mapError = F2(
		function (convert, task) {
			return A2(
				_elm_lang$core$Task$onError,
				function (_p2) {
					return _elm_lang$core$Task$fail(
						convert(_p2));
				},
				task);
		});
	var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
	var _elm_lang$core$Task$map = F2(
		function (func, taskA) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return _elm_lang$core$Task$succeed(
						func(a));
				},
				taskA);
		});
	var _elm_lang$core$Task$map2 = F3(
		function (func, taskA, taskB) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (b) {
							return _elm_lang$core$Task$succeed(
								A2(func, a, b));
						},
						taskB);
				},
				taskA);
		});
	var _elm_lang$core$Task$map3 = F4(
		function (func, taskA, taskB, taskC) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								function (c) {
									return _elm_lang$core$Task$succeed(
										A3(func, a, b, c));
								},
								taskC);
						},
						taskB);
				},
				taskA);
		});
	var _elm_lang$core$Task$map4 = F5(
		function (func, taskA, taskB, taskC, taskD) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								function (c) {
									return A2(
										_elm_lang$core$Task$andThen,
										function (d) {
											return _elm_lang$core$Task$succeed(
												A4(func, a, b, c, d));
										},
										taskD);
								},
								taskC);
						},
						taskB);
				},
				taskA);
		});
	var _elm_lang$core$Task$map5 = F6(
		function (func, taskA, taskB, taskC, taskD, taskE) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								function (c) {
									return A2(
										_elm_lang$core$Task$andThen,
										function (d) {
											return A2(
												_elm_lang$core$Task$andThen,
												function (e) {
													return _elm_lang$core$Task$succeed(
														A5(func, a, b, c, d, e));
												},
												taskE);
										},
										taskD);
								},
								taskC);
						},
						taskB);
				},
				taskA);
		});
	var _elm_lang$core$Task$sequence = function (tasks) {
		var _p3 = tasks;
		if (_p3.ctor === '[]') {
			return _elm_lang$core$Task$succeed(
				{ctor: '[]'});
		} else {
			return A3(
				_elm_lang$core$Task$map2,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				_p3._0,
				_elm_lang$core$Task$sequence(_p3._1));
		}
	};
	var _elm_lang$core$Task$onEffects = F3(
		function (router, commands, state) {
			return A2(
				_elm_lang$core$Task$map,
				function (_p4) {
					return {ctor: '_Tuple0'};
				},
				_elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						_elm_lang$core$Task$spawnCmd(router),
						commands)));
		});
	var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
		{ctor: '_Tuple0'});
	var _elm_lang$core$Task$onSelfMsg = F3(
		function (_p7, _p6, _p5) {
			return _elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'});
		});
	var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
	var _elm_lang$core$Task$Perform = function (a) {
		return {ctor: 'Perform', _0: a};
	};
	var _elm_lang$core$Task$perform = F2(
		function (toMessage, task) {
			return _elm_lang$core$Task$command(
				_elm_lang$core$Task$Perform(
					A2(_elm_lang$core$Task$map, toMessage, task)));
		});
	var _elm_lang$core$Task$attempt = F2(
		function (resultToMessage, task) {
			return _elm_lang$core$Task$command(
				_elm_lang$core$Task$Perform(
					A2(
						_elm_lang$core$Task$onError,
						function (_p8) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Err(_p8)));
						},
						A2(
							_elm_lang$core$Task$andThen,
							function (_p9) {
								return _elm_lang$core$Task$succeed(
									resultToMessage(
										_elm_lang$core$Result$Ok(_p9)));
							},
							task))));
		});
	var _elm_lang$core$Task$cmdMap = F2(
		function (tagger, _p10) {
			var _p11 = _p10;
			return _elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, tagger, _p11._0));
		});
	_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

	//import Native.Scheduler //

	var _elm_lang$core$Native_Time = function() {

	var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
	});

	function setInterval_(interval, task)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			var id = setInterval(function() {
				_elm_lang$core$Native_Scheduler.rawSpawn(task);
			}, interval);

			return function() { clearInterval(id); };
		});
	}

	return {
		now: now,
		setInterval_: F2(setInterval_)
	};

	}();
	var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
	var _elm_lang$core$Time$spawnHelp = F3(
		function (router, intervals, processes) {
			var _p0 = intervals;
			if (_p0.ctor === '[]') {
				return _elm_lang$core$Task$succeed(processes);
			} else {
				var _p1 = _p0._0;
				var spawnRest = function (id) {
					return A3(
						_elm_lang$core$Time$spawnHelp,
						router,
						_p0._1,
						A3(_elm_lang$core$Dict$insert, _p1, id, processes));
				};
				var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
					A2(
						_elm_lang$core$Time$setInterval,
						_p1,
						A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
				return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
			}
		});
	var _elm_lang$core$Time$addMySub = F2(
		function (_p2, state) {
			var _p3 = _p2;
			var _p6 = _p3._1;
			var _p5 = _p3._0;
			var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
			if (_p4.ctor === 'Nothing') {
				return A3(
					_elm_lang$core$Dict$insert,
					_p5,
					{
						ctor: '::',
						_0: _p6,
						_1: {ctor: '[]'}
					},
					state);
			} else {
				return A3(
					_elm_lang$core$Dict$insert,
					_p5,
					{ctor: '::', _0: _p6, _1: _p4._0},
					state);
			}
		});
	var _elm_lang$core$Time$inMilliseconds = function (t) {
		return t;
	};
	var _elm_lang$core$Time$millisecond = 1;
	var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
	var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
	var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
	var _elm_lang$core$Time$inHours = function (t) {
		return t / _elm_lang$core$Time$hour;
	};
	var _elm_lang$core$Time$inMinutes = function (t) {
		return t / _elm_lang$core$Time$minute;
	};
	var _elm_lang$core$Time$inSeconds = function (t) {
		return t / _elm_lang$core$Time$second;
	};
	var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
	var _elm_lang$core$Time$onSelfMsg = F3(
		function (router, interval, state) {
			var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
			if (_p7.ctor === 'Nothing') {
				return _elm_lang$core$Task$succeed(state);
			} else {
				var tellTaggers = function (time) {
					return _elm_lang$core$Task$sequence(
						A2(
							_elm_lang$core$List$map,
							function (tagger) {
								return A2(
									_elm_lang$core$Platform$sendToApp,
									router,
									tagger(time));
							},
							_p7._0));
				};
				return A2(
					_elm_lang$core$Task$andThen,
					function (_p8) {
						return _elm_lang$core$Task$succeed(state);
					},
					A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
			}
		});
	var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
	var _elm_lang$core$Time$State = F2(
		function (a, b) {
			return {taggers: a, processes: b};
		});
	var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
		A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
	var _elm_lang$core$Time$onEffects = F3(
		function (router, subs, _p9) {
			var _p10 = _p9;
			var rightStep = F3(
				function (_p12, id, _p11) {
					var _p13 = _p11;
					return {
						ctor: '_Tuple3',
						_0: _p13._0,
						_1: _p13._1,
						_2: A2(
							_elm_lang$core$Task$andThen,
							function (_p14) {
								return _p13._2;
							},
							_elm_lang$core$Native_Scheduler.kill(id))
					};
				});
			var bothStep = F4(
				function (interval, taggers, id, _p15) {
					var _p16 = _p15;
					return {
						ctor: '_Tuple3',
						_0: _p16._0,
						_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
						_2: _p16._2
					};
				});
			var leftStep = F3(
				function (interval, taggers, _p17) {
					var _p18 = _p17;
					return {
						ctor: '_Tuple3',
						_0: {ctor: '::', _0: interval, _1: _p18._0},
						_1: _p18._1,
						_2: _p18._2
					};
				});
			var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
			var _p19 = A6(
				_elm_lang$core$Dict$merge,
				leftStep,
				bothStep,
				rightStep,
				newTaggers,
				_p10.processes,
				{
					ctor: '_Tuple3',
					_0: {ctor: '[]'},
					_1: _elm_lang$core$Dict$empty,
					_2: _elm_lang$core$Task$succeed(
						{ctor: '_Tuple0'})
				});
			var spawnList = _p19._0;
			var existingDict = _p19._1;
			var killTask = _p19._2;
			return A2(
				_elm_lang$core$Task$andThen,
				function (newProcesses) {
					return _elm_lang$core$Task$succeed(
						A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
				},
				A2(
					_elm_lang$core$Task$andThen,
					function (_p20) {
						return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
					},
					killTask));
		});
	var _elm_lang$core$Time$Every = F2(
		function (a, b) {
			return {ctor: 'Every', _0: a, _1: b};
		});
	var _elm_lang$core$Time$every = F2(
		function (interval, tagger) {
			return _elm_lang$core$Time$subscription(
				A2(_elm_lang$core$Time$Every, interval, tagger));
		});
	var _elm_lang$core$Time$subMap = F2(
		function (f, _p21) {
			var _p22 = _p21;
			return A2(
				_elm_lang$core$Time$Every,
				_p22._0,
				function (_p23) {
					return f(
						_p22._1(_p23));
				});
		});
	_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

	var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
	var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
	var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

	var _elm_lang$dom$Native_Dom = function() {

	var fakeNode = {
		addEventListener: function() {},
		removeEventListener: function() {}
	};

	var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
	var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

	function on(node)
	{
		return function(eventName, decoder, toTask)
		{
			return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

				function performTask(event)
				{
					var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
					if (result.ctor === 'Ok')
					{
						_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
					}
				}

				node.addEventListener(eventName, performTask);

				return function()
				{
					node.removeEventListener(eventName, performTask);
				};
			});
		};
	}

	var rAF = typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { callback(); };

	function withNode(id, doStuff)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			rAF(function()
			{
				var node = document.getElementById(id);
				if (node === null)
				{
					callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
					return;
				}
				callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
			});
		});
	}


	// FOCUS

	function focus(id)
	{
		return withNode(id, function(node) {
			node.focus();
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}

	function blur(id)
	{
		return withNode(id, function(node) {
			node.blur();
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}


	// SCROLLING

	function getScrollTop(id)
	{
		return withNode(id, function(node) {
			return node.scrollTop;
		});
	}

	function setScrollTop(id, desiredScrollTop)
	{
		return withNode(id, function(node) {
			node.scrollTop = desiredScrollTop;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}

	function toBottom(id)
	{
		return withNode(id, function(node) {
			node.scrollTop = node.scrollHeight;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}

	function getScrollLeft(id)
	{
		return withNode(id, function(node) {
			return node.scrollLeft;
		});
	}

	function setScrollLeft(id, desiredScrollLeft)
	{
		return withNode(id, function(node) {
			node.scrollLeft = desiredScrollLeft;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}

	function toRight(id)
	{
		return withNode(id, function(node) {
			node.scrollLeft = node.scrollWidth;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}


	// SIZE

	function width(options, id)
	{
		return withNode(id, function(node) {
			switch (options.ctor)
			{
				case 'Content':
					return node.scrollWidth;
				case 'VisibleContent':
					return node.clientWidth;
				case 'VisibleContentWithBorders':
					return node.offsetWidth;
				case 'VisibleContentWithBordersAndMargins':
					var rect = node.getBoundingClientRect();
					return rect.right - rect.left;
			}
		});
	}

	function height(options, id)
	{
		return withNode(id, function(node) {
			switch (options.ctor)
			{
				case 'Content':
					return node.scrollHeight;
				case 'VisibleContent':
					return node.clientHeight;
				case 'VisibleContentWithBorders':
					return node.offsetHeight;
				case 'VisibleContentWithBordersAndMargins':
					var rect = node.getBoundingClientRect();
					return rect.bottom - rect.top;
			}
		});
	}

	return {
		onDocument: F3(onDocument),
		onWindow: F3(onWindow),

		focus: focus,
		blur: blur,

		getScrollTop: getScrollTop,
		setScrollTop: F2(setScrollTop),
		getScrollLeft: getScrollLeft,
		setScrollLeft: F2(setScrollLeft),
		toBottom: toBottom,
		toRight: toRight,

		height: F2(height),
		width: F2(width)
	};

	}();

	var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
	var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

	var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
	var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

	var _elm_lang$virtual_dom$Native_VirtualDom = function() {

	var STYLE_KEY = 'STYLE';
	var EVENT_KEY = 'EVENT';
	var ATTR_KEY = 'ATTR';
	var ATTR_NS_KEY = 'ATTR_NS';

	var localDoc = typeof document !== 'undefined' ? document : {};


	////////////  VIRTUAL DOM NODES  ////////////


	function text(string)
	{
		return {
			type: 'text',
			text: string
		};
	}


	function node(tag)
	{
		return F2(function(factList, kidList) {
			return nodeHelp(tag, factList, kidList);
		});
	}


	function nodeHelp(tag, factList, kidList)
	{
		var organized = organizeFacts(factList);
		var namespace = organized.namespace;
		var facts = organized.facts;

		var children = [];
		var descendantsCount = 0;
		while (kidList.ctor !== '[]')
		{
			var kid = kidList._0;
			descendantsCount += (kid.descendantsCount || 0);
			children.push(kid);
			kidList = kidList._1;
		}
		descendantsCount += children.length;

		return {
			type: 'node',
			tag: tag,
			facts: facts,
			children: children,
			namespace: namespace,
			descendantsCount: descendantsCount
		};
	}


	function keyedNode(tag, factList, kidList)
	{
		var organized = organizeFacts(factList);
		var namespace = organized.namespace;
		var facts = organized.facts;

		var children = [];
		var descendantsCount = 0;
		while (kidList.ctor !== '[]')
		{
			var kid = kidList._0;
			descendantsCount += (kid._1.descendantsCount || 0);
			children.push(kid);
			kidList = kidList._1;
		}
		descendantsCount += children.length;

		return {
			type: 'keyed-node',
			tag: tag,
			facts: facts,
			children: children,
			namespace: namespace,
			descendantsCount: descendantsCount
		};
	}


	function custom(factList, model, impl)
	{
		var facts = organizeFacts(factList).facts;

		return {
			type: 'custom',
			facts: facts,
			model: model,
			impl: impl
		};
	}


	function map(tagger, node)
	{
		return {
			type: 'tagger',
			tagger: tagger,
			node: node,
			descendantsCount: 1 + (node.descendantsCount || 0)
		};
	}


	function thunk(func, args, thunk)
	{
		return {
			type: 'thunk',
			func: func,
			args: args,
			thunk: thunk,
			node: undefined
		};
	}

	function lazy(fn, a)
	{
		return thunk(fn, [a], function() {
			return fn(a);
		});
	}

	function lazy2(fn, a, b)
	{
		return thunk(fn, [a,b], function() {
			return A2(fn, a, b);
		});
	}

	function lazy3(fn, a, b, c)
	{
		return thunk(fn, [a,b,c], function() {
			return A3(fn, a, b, c);
		});
	}



	// FACTS


	function organizeFacts(factList)
	{
		var namespace, facts = {};

		while (factList.ctor !== '[]')
		{
			var entry = factList._0;
			var key = entry.key;

			if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
			{
				var subFacts = facts[key] || {};
				subFacts[entry.realKey] = entry.value;
				facts[key] = subFacts;
			}
			else if (key === STYLE_KEY)
			{
				var styles = facts[key] || {};
				var styleList = entry.value;
				while (styleList.ctor !== '[]')
				{
					var style = styleList._0;
					styles[style._0] = style._1;
					styleList = styleList._1;
				}
				facts[key] = styles;
			}
			else if (key === 'namespace')
			{
				namespace = entry.value;
			}
			else if (key === 'className')
			{
				var classes = facts[key];
				facts[key] = typeof classes === 'undefined'
					? entry.value
					: classes + ' ' + entry.value;
			}
	 		else
			{
				facts[key] = entry.value;
			}
			factList = factList._1;
		}

		return {
			facts: facts,
			namespace: namespace
		};
	}



	////////////  PROPERTIES AND ATTRIBUTES  ////////////


	function style(value)
	{
		return {
			key: STYLE_KEY,
			value: value
		};
	}


	function property(key, value)
	{
		return {
			key: key,
			value: value
		};
	}


	function attribute(key, value)
	{
		return {
			key: ATTR_KEY,
			realKey: key,
			value: value
		};
	}


	function attributeNS(namespace, key, value)
	{
		return {
			key: ATTR_NS_KEY,
			realKey: key,
			value: {
				value: value,
				namespace: namespace
			}
		};
	}


	function on(name, options, decoder)
	{
		return {
			key: EVENT_KEY,
			realKey: name,
			value: {
				options: options,
				decoder: decoder
			}
		};
	}


	function equalEvents(a, b)
	{
		if (!a.options === b.options)
		{
			if (a.stopPropagation !== b.stopPropagation || a.preventDefault !== b.preventDefault)
			{
				return false;
			}
		}
		return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
	}


	function mapProperty(func, property)
	{
		if (property.key !== EVENT_KEY)
		{
			return property;
		}
		return on(
			property.realKey,
			property.value.options,
			A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
		);
	}


	////////////  RENDER  ////////////


	function render(vNode, eventNode)
	{
		switch (vNode.type)
		{
			case 'thunk':
				if (!vNode.node)
				{
					vNode.node = vNode.thunk();
				}
				return render(vNode.node, eventNode);

			case 'tagger':
				var subNode = vNode.node;
				var tagger = vNode.tagger;

				while (subNode.type === 'tagger')
				{
					typeof tagger !== 'object'
						? tagger = [tagger, subNode.tagger]
						: tagger.push(subNode.tagger);

					subNode = subNode.node;
				}

				var subEventRoot = { tagger: tagger, parent: eventNode };
				var domNode = render(subNode, subEventRoot);
				domNode.elm_event_node_ref = subEventRoot;
				return domNode;

			case 'text':
				return localDoc.createTextNode(vNode.text);

			case 'node':
				var domNode = vNode.namespace
					? localDoc.createElementNS(vNode.namespace, vNode.tag)
					: localDoc.createElement(vNode.tag);

				applyFacts(domNode, eventNode, vNode.facts);

				var children = vNode.children;

				for (var i = 0; i < children.length; i++)
				{
					domNode.appendChild(render(children[i], eventNode));
				}

				return domNode;

			case 'keyed-node':
				var domNode = vNode.namespace
					? localDoc.createElementNS(vNode.namespace, vNode.tag)
					: localDoc.createElement(vNode.tag);

				applyFacts(domNode, eventNode, vNode.facts);

				var children = vNode.children;

				for (var i = 0; i < children.length; i++)
				{
					domNode.appendChild(render(children[i]._1, eventNode));
				}

				return domNode;

			case 'custom':
				var domNode = vNode.impl.render(vNode.model);
				applyFacts(domNode, eventNode, vNode.facts);
				return domNode;
		}
	}



	////////////  APPLY FACTS  ////////////


	function applyFacts(domNode, eventNode, facts)
	{
		for (var key in facts)
		{
			var value = facts[key];

			switch (key)
			{
				case STYLE_KEY:
					applyStyles(domNode, value);
					break;

				case EVENT_KEY:
					applyEvents(domNode, eventNode, value);
					break;

				case ATTR_KEY:
					applyAttrs(domNode, value);
					break;

				case ATTR_NS_KEY:
					applyAttrsNS(domNode, value);
					break;

				case 'value':
					if (domNode[key] !== value)
					{
						domNode[key] = value;
					}
					break;

				default:
					domNode[key] = value;
					break;
			}
		}
	}

	function applyStyles(domNode, styles)
	{
		var domNodeStyle = domNode.style;

		for (var key in styles)
		{
			domNodeStyle[key] = styles[key];
		}
	}

	function applyEvents(domNode, eventNode, events)
	{
		var allHandlers = domNode.elm_handlers || {};

		for (var key in events)
		{
			var handler = allHandlers[key];
			var value = events[key];

			if (typeof value === 'undefined')
			{
				domNode.removeEventListener(key, handler);
				allHandlers[key] = undefined;
			}
			else if (typeof handler === 'undefined')
			{
				var handler = makeEventHandler(eventNode, value);
				domNode.addEventListener(key, handler);
				allHandlers[key] = handler;
			}
			else
			{
				handler.info = value;
			}
		}

		domNode.elm_handlers = allHandlers;
	}

	function makeEventHandler(eventNode, info)
	{
		function eventHandler(event)
		{
			var info = eventHandler.info;

			var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

			if (value.ctor === 'Ok')
			{
				var options = info.options;
				if (options.stopPropagation)
				{
					event.stopPropagation();
				}
				if (options.preventDefault)
				{
					event.preventDefault();
				}

				var message = value._0;

				var currentEventNode = eventNode;
				while (currentEventNode)
				{
					var tagger = currentEventNode.tagger;
					if (typeof tagger === 'function')
					{
						message = tagger(message);
					}
					else
					{
						for (var i = tagger.length; i--; )
						{
							message = tagger[i](message);
						}
					}
					currentEventNode = currentEventNode.parent;
				}
			}
		};

		eventHandler.info = info;

		return eventHandler;
	}

	function applyAttrs(domNode, attrs)
	{
		for (var key in attrs)
		{
			var value = attrs[key];
			if (typeof value === 'undefined')
			{
				domNode.removeAttribute(key);
			}
			else
			{
				domNode.setAttribute(key, value);
			}
		}
	}

	function applyAttrsNS(domNode, nsAttrs)
	{
		for (var key in nsAttrs)
		{
			var pair = nsAttrs[key];
			var namespace = pair.namespace;
			var value = pair.value;

			if (typeof value === 'undefined')
			{
				domNode.removeAttributeNS(namespace, key);
			}
			else
			{
				domNode.setAttributeNS(namespace, key, value);
			}
		}
	}



	////////////  DIFF  ////////////


	function diff(a, b)
	{
		var patches = [];
		diffHelp(a, b, patches, 0);
		return patches;
	}


	function makePatch(type, index, data)
	{
		return {
			index: index,
			type: type,
			data: data,
			domNode: undefined,
			eventNode: undefined
		};
	}


	function diffHelp(a, b, patches, index)
	{
		if (a === b)
		{
			return;
		}

		var aType = a.type;
		var bType = b.type;

		// Bail if you run into different types of nodes. Implies that the
		// structure has changed significantly and it's not worth a diff.
		if (aType !== bType)
		{
			patches.push(makePatch('p-redraw', index, b));
			return;
		}

		// Now we know that both nodes are the same type.
		switch (bType)
		{
			case 'thunk':
				var aArgs = a.args;
				var bArgs = b.args;
				var i = aArgs.length;
				var same = a.func === b.func && i === bArgs.length;
				while (same && i--)
				{
					same = aArgs[i] === bArgs[i];
				}
				if (same)
				{
					b.node = a.node;
					return;
				}
				b.node = b.thunk();
				var subPatches = [];
				diffHelp(a.node, b.node, subPatches, 0);
				if (subPatches.length > 0)
				{
					patches.push(makePatch('p-thunk', index, subPatches));
				}
				return;

			case 'tagger':
				// gather nested taggers
				var aTaggers = a.tagger;
				var bTaggers = b.tagger;
				var nesting = false;

				var aSubNode = a.node;
				while (aSubNode.type === 'tagger')
				{
					nesting = true;

					typeof aTaggers !== 'object'
						? aTaggers = [aTaggers, aSubNode.tagger]
						: aTaggers.push(aSubNode.tagger);

					aSubNode = aSubNode.node;
				}

				var bSubNode = b.node;
				while (bSubNode.type === 'tagger')
				{
					nesting = true;

					typeof bTaggers !== 'object'
						? bTaggers = [bTaggers, bSubNode.tagger]
						: bTaggers.push(bSubNode.tagger);

					bSubNode = bSubNode.node;
				}

				// Just bail if different numbers of taggers. This implies the
				// structure of the virtual DOM has changed.
				if (nesting && aTaggers.length !== bTaggers.length)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}

				// check if taggers are "the same"
				if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
				{
					patches.push(makePatch('p-tagger', index, bTaggers));
				}

				// diff everything below the taggers
				diffHelp(aSubNode, bSubNode, patches, index + 1);
				return;

			case 'text':
				if (a.text !== b.text)
				{
					patches.push(makePatch('p-text', index, b.text));
					return;
				}

				return;

			case 'node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}

				var factsDiff = diffFacts(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}

				diffChildren(a, b, patches, index);
				return;

			case 'keyed-node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}

				var factsDiff = diffFacts(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}

				diffKeyedChildren(a, b, patches, index);
				return;

			case 'custom':
				if (a.impl !== b.impl)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}

				var factsDiff = diffFacts(a.facts, b.facts);
				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}

				var patch = b.impl.diff(a,b);
				if (patch)
				{
					patches.push(makePatch('p-custom', index, patch));
					return;
				}

				return;
		}
	}


	// assumes the incoming arrays are the same length
	function pairwiseRefEqual(as, bs)
	{
		for (var i = 0; i < as.length; i++)
		{
			if (as[i] !== bs[i])
			{
				return false;
			}
		}

		return true;
	}


	// TODO Instead of creating a new diff object, it's possible to just test if
	// there *is* a diff. During the actual patch, do the diff again and make the
	// modifications directly. This way, there's no new allocations. Worth it?
	function diffFacts(a, b, category)
	{
		var diff;

		// look for changes and removals
		for (var aKey in a)
		{
			if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
			{
				var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
				if (subDiff)
				{
					diff = diff || {};
					diff[aKey] = subDiff;
				}
				continue;
			}

			// remove if not in the new facts
			if (!(aKey in b))
			{
				diff = diff || {};
				diff[aKey] =
					(typeof category === 'undefined')
						? (typeof a[aKey] === 'string' ? '' : null)
						:
					(category === STYLE_KEY)
						? ''
						:
					(category === EVENT_KEY || category === ATTR_KEY)
						? undefined
						:
					{ namespace: a[aKey].namespace, value: undefined };

				continue;
			}

			var aValue = a[aKey];
			var bValue = b[aKey];

			// reference equal, so don't worry about it
			if (aValue === bValue && aKey !== 'value'
				|| category === EVENT_KEY && equalEvents(aValue, bValue))
			{
				continue;
			}

			diff = diff || {};
			diff[aKey] = bValue;
		}

		// add new stuff
		for (var bKey in b)
		{
			if (!(bKey in a))
			{
				diff = diff || {};
				diff[bKey] = b[bKey];
			}
		}

		return diff;
	}


	function diffChildren(aParent, bParent, patches, rootIndex)
	{
		var aChildren = aParent.children;
		var bChildren = bParent.children;

		var aLen = aChildren.length;
		var bLen = bChildren.length;

		// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

		if (aLen > bLen)
		{
			patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
		}
		else if (aLen < bLen)
		{
			patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
		}

		// PAIRWISE DIFF EVERYTHING ELSE

		var index = rootIndex;
		var minLen = aLen < bLen ? aLen : bLen;
		for (var i = 0; i < minLen; i++)
		{
			index++;
			var aChild = aChildren[i];
			diffHelp(aChild, bChildren[i], patches, index);
			index += aChild.descendantsCount || 0;
		}
	}



	////////////  KEYED DIFF  ////////////


	function diffKeyedChildren(aParent, bParent, patches, rootIndex)
	{
		var localPatches = [];

		var changes = {}; // Dict String Entry
		var inserts = []; // Array { index : Int, entry : Entry }
		// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

		var aChildren = aParent.children;
		var bChildren = bParent.children;
		var aLen = aChildren.length;
		var bLen = bChildren.length;
		var aIndex = 0;
		var bIndex = 0;

		var index = rootIndex;

		while (aIndex < aLen && bIndex < bLen)
		{
			var a = aChildren[aIndex];
			var b = bChildren[bIndex];

			var aKey = a._0;
			var bKey = b._0;
			var aNode = a._1;
			var bNode = b._1;

			// check if keys match

			if (aKey === bKey)
			{
				index++;
				diffHelp(aNode, bNode, localPatches, index);
				index += aNode.descendantsCount || 0;

				aIndex++;
				bIndex++;
				continue;
			}

			// look ahead 1 to detect insertions and removals.

			var aLookAhead = aIndex + 1 < aLen;
			var bLookAhead = bIndex + 1 < bLen;

			if (aLookAhead)
			{
				var aNext = aChildren[aIndex + 1];
				var aNextKey = aNext._0;
				var aNextNode = aNext._1;
				var oldMatch = bKey === aNextKey;
			}

			if (bLookAhead)
			{
				var bNext = bChildren[bIndex + 1];
				var bNextKey = bNext._0;
				var bNextNode = bNext._1;
				var newMatch = aKey === bNextKey;
			}


			// swap a and b
			if (aLookAhead && bLookAhead && newMatch && oldMatch)
			{
				index++;
				diffHelp(aNode, bNextNode, localPatches, index);
				insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
				index += aNode.descendantsCount || 0;

				index++;
				removeNode(changes, localPatches, aKey, aNextNode, index);
				index += aNextNode.descendantsCount || 0;

				aIndex += 2;
				bIndex += 2;
				continue;
			}

			// insert b
			if (bLookAhead && newMatch)
			{
				index++;
				insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
				diffHelp(aNode, bNextNode, localPatches, index);
				index += aNode.descendantsCount || 0;

				aIndex += 1;
				bIndex += 2;
				continue;
			}

			// remove a
			if (aLookAhead && oldMatch)
			{
				index++;
				removeNode(changes, localPatches, aKey, aNode, index);
				index += aNode.descendantsCount || 0;

				index++;
				diffHelp(aNextNode, bNode, localPatches, index);
				index += aNextNode.descendantsCount || 0;

				aIndex += 2;
				bIndex += 1;
				continue;
			}

			// remove a, insert b
			if (aLookAhead && bLookAhead && aNextKey === bNextKey)
			{
				index++;
				removeNode(changes, localPatches, aKey, aNode, index);
				insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
				index += aNode.descendantsCount || 0;

				index++;
				diffHelp(aNextNode, bNextNode, localPatches, index);
				index += aNextNode.descendantsCount || 0;

				aIndex += 2;
				bIndex += 2;
				continue;
			}

			break;
		}

		// eat up any remaining nodes with removeNode and insertNode

		while (aIndex < aLen)
		{
			index++;
			var a = aChildren[aIndex];
			var aNode = a._1;
			removeNode(changes, localPatches, a._0, aNode, index);
			index += aNode.descendantsCount || 0;
			aIndex++;
		}

		var endInserts;
		while (bIndex < bLen)
		{
			endInserts = endInserts || [];
			var b = bChildren[bIndex];
			insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
			bIndex++;
		}

		if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
		{
			patches.push(makePatch('p-reorder', rootIndex, {
				patches: localPatches,
				inserts: inserts,
				endInserts: endInserts
			}));
		}
	}



	////////////  CHANGES FROM KEYED DIFF  ////////////


	var POSTFIX = '_elmW6BL';


	function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
	{
		var entry = changes[key];

		// never seen this key before
		if (typeof entry === 'undefined')
		{
			entry = {
				tag: 'insert',
				vnode: vnode,
				index: bIndex,
				data: undefined
			};

			inserts.push({ index: bIndex, entry: entry });
			changes[key] = entry;

			return;
		}

		// this key was removed earlier, a match!
		if (entry.tag === 'remove')
		{
			inserts.push({ index: bIndex, entry: entry });

			entry.tag = 'move';
			var subPatches = [];
			diffHelp(entry.vnode, vnode, subPatches, entry.index);
			entry.index = bIndex;
			entry.data.data = {
				patches: subPatches,
				entry: entry
			};

			return;
		}

		// this key has already been inserted or moved, a duplicate!
		insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
	}


	function removeNode(changes, localPatches, key, vnode, index)
	{
		var entry = changes[key];

		// never seen this key before
		if (typeof entry === 'undefined')
		{
			var patch = makePatch('p-remove', index, undefined);
			localPatches.push(patch);

			changes[key] = {
				tag: 'remove',
				vnode: vnode,
				index: index,
				data: patch
			};

			return;
		}

		// this key was inserted earlier, a match!
		if (entry.tag === 'insert')
		{
			entry.tag = 'move';
			var subPatches = [];
			diffHelp(vnode, entry.vnode, subPatches, index);

			var patch = makePatch('p-remove', index, {
				patches: subPatches,
				entry: entry
			});
			localPatches.push(patch);

			return;
		}

		// this key has already been removed or moved, a duplicate!
		removeNode(changes, localPatches, key + POSTFIX, vnode, index);
	}



	////////////  ADD DOM NODES  ////////////
	//
	// Each DOM node has an "index" assigned in order of traversal. It is important
	// to minimize our crawl over the actual DOM, so these indexes (along with the
	// descendantsCount of virtual nodes) let us skip touching entire subtrees of
	// the DOM if we know there are no patches there.


	function addDomNodes(domNode, vNode, patches, eventNode)
	{
		addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
	}


	// assumes `patches` is non-empty and indexes increase monotonically.
	function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
	{
		var patch = patches[i];
		var index = patch.index;

		while (index === low)
		{
			var patchType = patch.type;

			if (patchType === 'p-thunk')
			{
				addDomNodes(domNode, vNode.node, patch.data, eventNode);
			}
			else if (patchType === 'p-reorder')
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;

				var subPatches = patch.data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
			else if (patchType === 'p-remove')
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;

				var data = patch.data;
				if (typeof data !== 'undefined')
				{
					data.entry.data = domNode;
					var subPatches = data.patches;
					if (subPatches.length > 0)
					{
						addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
					}
				}
			}
			else
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;
			}

			i++;

			if (!(patch = patches[i]) || (index = patch.index) > high)
			{
				return i;
			}
		}

		switch (vNode.type)
		{
			case 'tagger':
				var subNode = vNode.node;

				while (subNode.type === "tagger")
				{
					subNode = subNode.node;
				}

				return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

			case 'node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;
				for (var j = 0; j < vChildren.length; j++)
				{
					low++;
					var vChild = vChildren[j];
					var nextLow = low + (vChild.descendantsCount || 0);
					if (low <= index && index <= nextLow)
					{
						i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
						if (!(patch = patches[i]) || (index = patch.index) > high)
						{
							return i;
						}
					}
					low = nextLow;
				}
				return i;

			case 'keyed-node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;
				for (var j = 0; j < vChildren.length; j++)
				{
					low++;
					var vChild = vChildren[j]._1;
					var nextLow = low + (vChild.descendantsCount || 0);
					if (low <= index && index <= nextLow)
					{
						i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
						if (!(patch = patches[i]) || (index = patch.index) > high)
						{
							return i;
						}
					}
					low = nextLow;
				}
				return i;

			case 'text':
			case 'thunk':
				throw new Error('should never traverse `text` or `thunk` nodes like this');
		}
	}



	////////////  APPLY PATCHES  ////////////


	function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
	{
		if (patches.length === 0)
		{
			return rootDomNode;
		}

		addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
		return applyPatchesHelp(rootDomNode, patches);
	}

	function applyPatchesHelp(rootDomNode, patches)
	{
		for (var i = 0; i < patches.length; i++)
		{
			var patch = patches[i];
			var localDomNode = patch.domNode
			var newNode = applyPatch(localDomNode, patch);
			if (localDomNode === rootDomNode)
			{
				rootDomNode = newNode;
			}
		}
		return rootDomNode;
	}

	function applyPatch(domNode, patch)
	{
		switch (patch.type)
		{
			case 'p-redraw':
				return applyPatchRedraw(domNode, patch.data, patch.eventNode);

			case 'p-facts':
				applyFacts(domNode, patch.eventNode, patch.data);
				return domNode;

			case 'p-text':
				domNode.replaceData(0, domNode.length, patch.data);
				return domNode;

			case 'p-thunk':
				return applyPatchesHelp(domNode, patch.data);

			case 'p-tagger':
				if (typeof domNode.elm_event_node_ref !== 'undefined')
				{
					domNode.elm_event_node_ref.tagger = patch.data;
				}
				else
				{
					domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
				}
				return domNode;

			case 'p-remove-last':
				var i = patch.data;
				while (i--)
				{
					domNode.removeChild(domNode.lastChild);
				}
				return domNode;

			case 'p-append':
				var newNodes = patch.data;
				for (var i = 0; i < newNodes.length; i++)
				{
					domNode.appendChild(render(newNodes[i], patch.eventNode));
				}
				return domNode;

			case 'p-remove':
				var data = patch.data;
				if (typeof data === 'undefined')
				{
					domNode.parentNode.removeChild(domNode);
					return domNode;
				}
				var entry = data.entry;
				if (typeof entry.index !== 'undefined')
				{
					domNode.parentNode.removeChild(domNode);
				}
				entry.data = applyPatchesHelp(domNode, data.patches);
				return domNode;

			case 'p-reorder':
				return applyPatchReorder(domNode, patch);

			case 'p-custom':
				var impl = patch.data;
				return impl.applyPatch(domNode, impl.data);

			default:
				throw new Error('Ran into an unknown patch!');
		}
	}


	function applyPatchRedraw(domNode, vNode, eventNode)
	{
		var parentNode = domNode.parentNode;
		var newNode = render(vNode, eventNode);

		if (typeof newNode.elm_event_node_ref === 'undefined')
		{
			newNode.elm_event_node_ref = domNode.elm_event_node_ref;
		}

		if (parentNode && newNode !== domNode)
		{
			parentNode.replaceChild(newNode, domNode);
		}
		return newNode;
	}


	function applyPatchReorder(domNode, patch)
	{
		var data = patch.data;

		// remove end inserts
		var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

		// removals
		domNode = applyPatchesHelp(domNode, data.patches);

		// inserts
		var inserts = data.inserts;
		for (var i = 0; i < inserts.length; i++)
		{
			var insert = inserts[i];
			var entry = insert.entry;
			var node = entry.tag === 'move'
				? entry.data
				: render(entry.vnode, patch.eventNode);
			domNode.insertBefore(node, domNode.childNodes[insert.index]);
		}

		// add end inserts
		if (typeof frag !== 'undefined')
		{
			domNode.appendChild(frag);
		}

		return domNode;
	}


	function applyPatchReorderEndInsertsHelp(endInserts, patch)
	{
		if (typeof endInserts === 'undefined')
		{
			return;
		}

		var frag = localDoc.createDocumentFragment();
		for (var i = 0; i < endInserts.length; i++)
		{
			var insert = endInserts[i];
			var entry = insert.entry;
			frag.appendChild(entry.tag === 'move'
				? entry.data
				: render(entry.vnode, patch.eventNode)
			);
		}
		return frag;
	}


	// PROGRAMS

	var program = makeProgram(checkNoFlags);
	var programWithFlags = makeProgram(checkYesFlags);

	function makeProgram(flagChecker)
	{
		return F2(function(debugWrap, impl)
		{
			return function(flagDecoder)
			{
				return function(object, moduleName, debugMetadata)
				{
					var checker = flagChecker(flagDecoder, moduleName);
					if (typeof debugMetadata === 'undefined')
					{
						normalSetup(impl, object, moduleName, checker);
					}
					else
					{
						debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
					}
				};
			};
		});
	}

	function staticProgram(vNode)
	{
		var nothing = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			_elm_lang$core$Platform_Cmd$none
		);
		return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
			init: nothing,
			view: function() { return vNode; },
			update: F2(function() { return nothing; }),
			subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
		})();
	}


	// FLAG CHECKERS

	function checkNoFlags(flagDecoder, moduleName)
	{
		return function(init, flags, domNode)
		{
			if (typeof flags === 'undefined')
			{
				return init;
			}

			var errorMessage =
				'The `' + moduleName + '` module does not need flags.\n'
				+ 'Initialize it with no arguments and you should be all set!';

			crash(errorMessage, domNode);
		};
	}

	function checkYesFlags(flagDecoder, moduleName)
	{
		return function(init, flags, domNode)
		{
			if (typeof flagDecoder === 'undefined')
			{
				var errorMessage =
					'Are you trying to sneak a Never value into Elm? Trickster!\n'
					+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
					+ 'Use `program` instead if you do not want flags.'

				crash(errorMessage, domNode);
			}

			var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
			if (result.ctor === 'Ok')
			{
				return init(result._0);
			}

			var errorMessage =
				'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
				+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
				+ result._0;

			crash(errorMessage, domNode);
		};
	}

	function crash(errorMessage, domNode)
	{
		if (domNode)
		{
			domNode.innerHTML =
				'<div style="padding-left:1em;">'
				+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
				+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
				+ '</div>';
		}

		throw new Error(errorMessage);
	}


	//  NORMAL SETUP

	function normalSetup(impl, object, moduleName, flagChecker)
	{
		object['embed'] = function embed(node, flags)
		{
			while (node.lastChild)
			{
				node.removeChild(node.lastChild);
			}

			return _elm_lang$core$Native_Platform.initialize(
				flagChecker(impl.init, flags, node),
				impl.update,
				impl.subscriptions,
				normalRenderer(node, impl.view)
			);
		};

		object['fullscreen'] = function fullscreen(flags)
		{
			return _elm_lang$core$Native_Platform.initialize(
				flagChecker(impl.init, flags, document.body),
				impl.update,
				impl.subscriptions,
				normalRenderer(document.body, impl.view)
			);
		};
	}

	function normalRenderer(parentNode, view)
	{
		return function(tagger, initialModel)
		{
			var eventNode = { tagger: tagger, parent: undefined };
			var initialVirtualNode = view(initialModel);
			var domNode = render(initialVirtualNode, eventNode);
			parentNode.appendChild(domNode);
			return makeStepper(domNode, view, initialVirtualNode, eventNode);
		};
	}


	// STEPPER

	var rAF =
		typeof requestAnimationFrame !== 'undefined'
			? requestAnimationFrame
			: function(callback) { callback(); };

	function makeStepper(domNode, view, initialVirtualNode, eventNode)
	{
		var state = 'NO_REQUEST';
		var currNode = initialVirtualNode;
		var nextModel;

		function updateIfNeeded()
		{
			switch (state)
			{
				case 'NO_REQUEST':
					throw new Error(
						'Unexpected draw callback.\n' +
						'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
					);

				case 'PENDING_REQUEST':
					rAF(updateIfNeeded);
					state = 'EXTRA_REQUEST';

					var nextNode = view(nextModel);
					var patches = diff(currNode, nextNode);
					domNode = applyPatches(domNode, currNode, patches, eventNode);
					currNode = nextNode;

					return;

				case 'EXTRA_REQUEST':
					state = 'NO_REQUEST';
					return;
			}
		}

		return function stepper(model)
		{
			if (state === 'NO_REQUEST')
			{
				rAF(updateIfNeeded);
			}
			state = 'PENDING_REQUEST';
			nextModel = model;
		};
	}


	// DEBUG SETUP

	function debugSetup(impl, object, moduleName, flagChecker)
	{
		object['fullscreen'] = function fullscreen(flags)
		{
			var popoutRef = { doc: undefined };
			return _elm_lang$core$Native_Platform.initialize(
				flagChecker(impl.init, flags, document.body),
				impl.update(scrollTask(popoutRef)),
				impl.subscriptions,
				debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
			);
		};

		object['embed'] = function fullscreen(node, flags)
		{
			var popoutRef = { doc: undefined };
			return _elm_lang$core$Native_Platform.initialize(
				flagChecker(impl.init, flags, node),
				impl.update(scrollTask(popoutRef)),
				impl.subscriptions,
				debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
			);
		};
	}

	function scrollTask(popoutRef)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			var doc = popoutRef.doc;
			if (doc)
			{
				var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
				if (msgs)
				{
					msgs.scrollTop = msgs.scrollHeight;
				}
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}


	function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
	{
		return function(tagger, initialModel)
		{
			var appEventNode = { tagger: tagger, parent: undefined };
			var eventNode = { tagger: tagger, parent: undefined };

			// make normal stepper
			var appVirtualNode = view(initialModel);
			var appNode = render(appVirtualNode, appEventNode);
			parentNode.appendChild(appNode);
			var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

			// make overlay stepper
			var overVirtualNode = viewIn(initialModel)._1;
			var overNode = render(overVirtualNode, eventNode);
			parentNode.appendChild(overNode);
			var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
			var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

			// make debugger stepper
			var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

			return function stepper(model)
			{
				appStepper(model);
				overStepper(model);
				debugStepper(model);
			}
		};
	}

	function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
	{
		var curr;
		var domNode;

		return function stepper(model)
		{
			if (!model.isDebuggerOpen)
			{
				return;
			}

			if (!popoutRef.doc)
			{
				curr = view(model);
				domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
				return;
			}

			// switch to document of popout
			localDoc = popoutRef.doc;

			var next = view(model);
			var patches = diff(curr, next);
			domNode = applyPatches(domNode, curr, patches, eventNode);
			curr = next;

			// switch back to normal document
			localDoc = document;
		};
	}

	function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
	{
		var w = 900;
		var h = 360;
		var x = screen.width - w;
		var y = screen.height - h;
		var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

		// switch to window document
		localDoc = debugWindow.document;

		popoutRef.doc = localDoc;
		localDoc.title = 'Debugger - ' + moduleName;
		localDoc.body.style.margin = '0';
		localDoc.body.style.padding = '0';
		var domNode = render(virtualNode, eventNode);
		localDoc.body.appendChild(domNode);

		localDoc.addEventListener('keydown', function(event) {
			if (event.metaKey && event.which === 82)
			{
				window.location.reload();
			}
			if (event.which === 38)
			{
				eventNode.tagger({ ctor: 'Up' });
				event.preventDefault();
			}
			if (event.which === 40)
			{
				eventNode.tagger({ ctor: 'Down' });
				event.preventDefault();
			}
		});

		function close()
		{
			popoutRef.doc = undefined;
			debugWindow.close();
		}
		window.addEventListener('unload', close);
		debugWindow.addEventListener('unload', function() {
			popoutRef.doc = undefined;
			window.removeEventListener('unload', close);
			eventNode.tagger({ ctor: 'Close' });
		});

		// switch back to the normal document
		localDoc = document;

		return domNode;
	}


	// BLOCK EVENTS

	function wrapViewIn(appEventNode, overlayNode, viewIn)
	{
		var ignorer = makeIgnorer(overlayNode);
		var blocking = 'Normal';
		var overflow;

		var normalTagger = appEventNode.tagger;
		var blockTagger = function() {};

		return function(model)
		{
			var tuple = viewIn(model);
			var newBlocking = tuple._0.ctor;
			appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
			if (blocking !== newBlocking)
			{
				traverse('removeEventListener', ignorer, blocking);
				traverse('addEventListener', ignorer, newBlocking);

				if (blocking === 'Normal')
				{
					overflow = document.body.style.overflow;
					document.body.style.overflow = 'hidden';
				}

				if (newBlocking === 'Normal')
				{
					document.body.style.overflow = overflow;
				}

				blocking = newBlocking;
			}
			return tuple._1;
		}
	}

	function traverse(verbEventListener, ignorer, blocking)
	{
		switch(blocking)
		{
			case 'Normal':
				return;

			case 'Pause':
				return traverseHelp(verbEventListener, ignorer, mostEvents);

			case 'Message':
				return traverseHelp(verbEventListener, ignorer, allEvents);
		}
	}

	function traverseHelp(verbEventListener, handler, eventNames)
	{
		for (var i = 0; i < eventNames.length; i++)
		{
			document.body[verbEventListener](eventNames[i], handler, true);
		}
	}

	function makeIgnorer(overlayNode)
	{
		return function(event)
		{
			if (event.type === 'keydown' && event.metaKey && event.which === 82)
			{
				return;
			}

			var isScroll = event.type === 'scroll' || event.type === 'wheel';

			var node = event.target;
			while (node !== null)
			{
				if (node.className === 'elm-overlay-message-details' && isScroll)
				{
					return;
				}

				if (node === overlayNode && !isScroll)
				{
					return;
				}
				node = node.parentNode;
			}

			event.stopPropagation();
			event.preventDefault();
		}
	}

	var mostEvents = [
		'click', 'dblclick', 'mousemove',
		'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
		'touchstart', 'touchend', 'touchcancel', 'touchmove',
		'pointerdown', 'pointerup', 'pointerover', 'pointerout',
		'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
		'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
		'keyup', 'keydown', 'keypress',
		'input', 'change',
		'focus', 'blur'
	];

	var allEvents = mostEvents.concat('wheel', 'scroll');


	return {
		node: node,
		text: text,
		custom: custom,
		map: F2(map),

		on: F3(on),
		style: style,
		property: F2(property),
		attribute: F2(attribute),
		attributeNS: F3(attributeNS),
		mapProperty: F2(mapProperty),

		lazy: F2(lazy),
		lazy2: F3(lazy2),
		lazy3: F4(lazy3),
		keyedNode: F3(keyedNode),

		program: program,
		programWithFlags: programWithFlags,
		staticProgram: staticProgram
	};

	}();

	var _elm_lang$virtual_dom$Native_Debug = function() {


	// IMPORT / EXPORT

	function unsafeCoerce(value)
	{
		return value;
	}

	var upload = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var element = document.createElement('input');
		element.setAttribute('type', 'file');
		element.setAttribute('accept', 'text/json');
		element.style.display = 'none';
		element.addEventListener('change', function(event)
		{
			var fileReader = new FileReader();
			fileReader.onload = function(e)
			{
				callback(_elm_lang$core$Native_Scheduler.succeed(e.target.result));
			};
			fileReader.readAsText(event.target.files[0]);
			document.body.removeChild(element);
		});
		document.body.appendChild(element);
		element.click();
	});

	function download(historyLength, json)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			var fileName = 'history-' + historyLength + '.txt';
			var jsonString = JSON.stringify(json);
			var mime = 'text/plain;charset=utf-8';
			var done = _elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0);

			// for IE10+
			if (navigator.msSaveBlob)
			{
				navigator.msSaveBlob(new Blob([jsonString], {type: mime}), fileName);
				return callback(done);
			}

			// for HTML5
			var element = document.createElement('a');
			element.setAttribute('href', 'data:' + mime + ',' + encodeURIComponent(jsonString));
			element.setAttribute('download', fileName);
			element.style.display = 'none';
			document.body.appendChild(element);
			element.click();
			document.body.removeChild(element);
			callback(done);
		});
	}


	// POPOUT

	function messageToString(value)
	{
		switch (typeof value)
		{
			case 'boolean':
				return value ? 'True' : 'False';
			case 'number':
				return value + '';
			case 'string':
				return '"' + addSlashes(value, false) + '"';
		}
		if (value instanceof String)
		{
			return '\'' + addSlashes(value, true) + '\'';
		}
		if (typeof value !== 'object' || value === null || !('ctor' in value))
		{
			return '…';
		}

		var ctorStarter = value.ctor.substring(0, 5);
		if (ctorStarter === '_Tupl' || ctorStarter === '_Task')
		{
			return '…'
		}
		if (['_Array', '<decoder>', '_Process', '::', '[]', 'Set_elm_builtin', 'RBNode_elm_builtin', 'RBEmpty_elm_builtin'].indexOf(value.ctor) >= 0)
		{
			return '…';
		}

		var keys = Object.keys(value);
		switch (keys.length)
		{
			case 1:
				return value.ctor;
			case 2:
				return value.ctor + ' ' + messageToString(value._0);
			default:
				return value.ctor + ' … ' + messageToString(value[keys[keys.length - 1]]);
		}
	}


	function primitive(str)
	{
		return { ctor: 'Primitive', _0: str };
	}


	function init(value)
	{
		var type = typeof value;

		if (type === 'boolean')
		{
			return {
				ctor: 'Constructor',
				_0: _elm_lang$core$Maybe$Just(value ? 'True' : 'False'),
				_1: true,
				_2: _elm_lang$core$Native_List.Nil
			};
		}

		if (type === 'number')
		{
			return primitive(value + '');
		}

		if (type === 'string')
		{
			return { ctor: 'S', _0: '"' + addSlashes(value, false) + '"' };
		}

		if (value instanceof String)
		{
			return { ctor: 'S', _0: "'" + addSlashes(value, true) + "'" };
		}

		if (value instanceof Date)
		{
			return primitive('<' + value.toString() + '>');
		}

		if (value === null)
		{
			return primitive('XXX');
		}

		if (type === 'object' && 'ctor' in value)
		{
			var ctor = value.ctor;

			if (ctor === '::' || ctor === '[]')
			{
				return {
					ctor: 'Sequence',
					_0: {ctor: 'ListSeq'},
					_1: true,
					_2: A2(_elm_lang$core$List$map, init, value)
				};
			}

			if (ctor === 'Set_elm_builtin')
			{
				return {
					ctor: 'Sequence',
					_0: {ctor: 'SetSeq'},
					_1: true,
					_2: A3(_elm_lang$core$Set$foldr, initCons, _elm_lang$core$Native_List.Nil, value)
				};
			}

			if (ctor === 'RBNode_elm_builtin' || ctor == 'RBEmpty_elm_builtin')
			{
				return {
					ctor: 'Dictionary',
					_0: true,
					_1: A3(_elm_lang$core$Dict$foldr, initKeyValueCons, _elm_lang$core$Native_List.Nil, value)
				};
			}

			if (ctor === '_Array')
			{
				return {
					ctor: 'Sequence',
					_0: {ctor: 'ArraySeq'},
					_1: true,
					_2: A3(_elm_lang$core$Array$foldr, initCons, _elm_lang$core$Native_List.Nil, value)
				};
			}

			var ctorStarter = value.ctor.substring(0, 5);
			if (ctorStarter === '_Task')
			{
				return primitive('<task>');
			}

			if (ctor === '<decoder>')
			{
				return primitive(ctor);
			}

			if (ctor === '_Process')
			{
				return primitive('<process>');
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i in value)
			{
				if (i === 'ctor') continue;
				list = _elm_lang$core$Native_List.Cons(init(value[i]), list);
			}
			return {
				ctor: 'Constructor',
				_0: ctorStarter === '_Tupl' ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(ctor),
				_1: true,
				_2: _elm_lang$core$List$reverse(list)
			};
		}

		if (type === 'object')
		{
			var dict = _elm_lang$core$Dict$empty;
			for (var i in value)
			{
				dict = A3(_elm_lang$core$Dict$insert, i, init(value[i]), dict);
			}
			return { ctor: 'Record', _0: true, _1: dict };
		}

		return primitive('XXX');
	}

	var initCons = F2(initConsHelp);

	function initConsHelp(value, list)
	{
		return _elm_lang$core$Native_List.Cons(init(value), list);
	}

	var initKeyValueCons = F3(initKeyValueConsHelp);

	function initKeyValueConsHelp(key, value, list)
	{
		return _elm_lang$core$Native_List.Cons(
			_elm_lang$core$Native_Utils.Tuple2(init(key), init(value)),
			list
		);
	}

	function addSlashes(str, isChar)
	{
		var s = str.replace(/\\/g, '\\\\')
				  .replace(/\n/g, '\\n')
				  .replace(/\t/g, '\\t')
				  .replace(/\r/g, '\\r')
				  .replace(/\v/g, '\\v')
				  .replace(/\0/g, '\\0');
		if (isChar)
		{
			return s.replace(/\'/g, '\\\'');
		}
		else
		{
			return s.replace(/\"/g, '\\"');
		}
	}


	return {
		upload: upload,
		download: F2(download),
		unsafeCoerce: unsafeCoerce,
		messageToString: messageToString,
		init: init
	}

	}();

	var _elm_lang$virtual_dom$VirtualDom_Helpers$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
	var _elm_lang$virtual_dom$VirtualDom_Helpers$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
	var _elm_lang$virtual_dom$VirtualDom_Helpers$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
	var _elm_lang$virtual_dom$VirtualDom_Helpers$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
	var _elm_lang$virtual_dom$VirtualDom_Helpers$defaultOptions = {stopPropagation: false, preventDefault: false};
	var _elm_lang$virtual_dom$VirtualDom_Helpers$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
	var _elm_lang$virtual_dom$VirtualDom_Helpers$on = F2(
		function (eventName, decoder) {
			return A3(_elm_lang$virtual_dom$VirtualDom_Helpers$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom_Helpers$defaultOptions, decoder);
		});
	var _elm_lang$virtual_dom$VirtualDom_Helpers$onClick = function (msg) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$on,
			'click',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$virtual_dom$VirtualDom_Helpers$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
	var _elm_lang$virtual_dom$VirtualDom_Helpers$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
	var _elm_lang$virtual_dom$VirtualDom_Helpers$id = _elm_lang$virtual_dom$VirtualDom_Helpers$attribute('id');
	var _elm_lang$virtual_dom$VirtualDom_Helpers$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
	var _elm_lang$virtual_dom$VirtualDom_Helpers$class = function (name) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$property,
			'className',
			_elm_lang$core$Json_Encode$string(name));
	};
	var _elm_lang$virtual_dom$VirtualDom_Helpers$href = function (name) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$property,
			'href',
			_elm_lang$core$Json_Encode$string(name));
	};
	var _elm_lang$virtual_dom$VirtualDom_Helpers$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
	var _elm_lang$virtual_dom$VirtualDom_Helpers$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
	var _elm_lang$virtual_dom$VirtualDom_Helpers$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
	var _elm_lang$virtual_dom$VirtualDom_Helpers$div = _elm_lang$virtual_dom$VirtualDom_Helpers$node('div');
	var _elm_lang$virtual_dom$VirtualDom_Helpers$span = _elm_lang$virtual_dom$VirtualDom_Helpers$node('span');
	var _elm_lang$virtual_dom$VirtualDom_Helpers$a = _elm_lang$virtual_dom$VirtualDom_Helpers$node('a');
	var _elm_lang$virtual_dom$VirtualDom_Helpers$h1 = _elm_lang$virtual_dom$VirtualDom_Helpers$node('h1');
	var _elm_lang$virtual_dom$VirtualDom_Helpers$Options = F2(
		function (a, b) {
			return {stopPropagation: a, preventDefault: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_Helpers$Node = {ctor: 'Node'};
	var _elm_lang$virtual_dom$VirtualDom_Helpers$Property = {ctor: 'Property'};

	var _elm_lang$virtual_dom$VirtualDom_Expando$purple = _elm_lang$virtual_dom$VirtualDom_Helpers$style(
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'color', _1: 'rgb(136, 19, 145)'},
			_1: {ctor: '[]'}
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$blue = _elm_lang$virtual_dom$VirtualDom_Helpers$style(
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'color', _1: 'rgb(28, 0, 207)'},
			_1: {ctor: '[]'}
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$red = _elm_lang$virtual_dom$VirtualDom_Helpers$style(
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'color', _1: 'rgb(196, 26, 22)'},
			_1: {ctor: '[]'}
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$leftPad = function (maybeKey) {
		var _p0 = maybeKey;
		if (_p0.ctor === 'Nothing') {
			return _elm_lang$virtual_dom$VirtualDom_Helpers$style(
				{ctor: '[]'});
		} else {
			return _elm_lang$virtual_dom$VirtualDom_Helpers$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'padding-left', _1: '4ch'},
					_1: {ctor: '[]'}
				});
		}
	};
	var _elm_lang$virtual_dom$VirtualDom_Expando$makeArrow = function (arrow) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$span,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'color', _1: '#777'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'padding-left', _1: '2ch'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'width', _1: '2ch'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(arrow),
				_1: {ctor: '[]'}
			});
	};
	var _elm_lang$virtual_dom$VirtualDom_Expando$lineStarter = F3(
		function (maybeKey, maybeIsClosed, description) {
			var arrow = function () {
				var _p1 = maybeIsClosed;
				if (_p1.ctor === 'Nothing') {
					return _elm_lang$virtual_dom$VirtualDom_Expando$makeArrow('');
				} else {
					if (_p1._0 === true) {
						return _elm_lang$virtual_dom$VirtualDom_Expando$makeArrow('▸');
					} else {
						return _elm_lang$virtual_dom$VirtualDom_Expando$makeArrow('▾');
					}
				}
			}();
			var _p2 = maybeKey;
			if (_p2.ctor === 'Nothing') {
				return {ctor: '::', _0: arrow, _1: description};
			} else {
				return {
					ctor: '::',
					_0: arrow,
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$span,
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Expando$purple,
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p2._0),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' = '),
							_1: description
						}
					}
				};
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTinyRecord = F3(
		function (length, starter, entries) {
			var _p3 = entries;
			if (_p3.ctor === '[]') {
				return {
					ctor: '_Tuple2',
					_0: length + 1,
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('}'),
						_1: {ctor: '[]'}
					}
				};
			} else {
				var _p5 = _p3._0;
				var nextLength = (length + _elm_lang$core$String$length(_p5)) + 1;
				if (_elm_lang$core$Native_Utils.cmp(nextLength, 18) > 0) {
					return {
						ctor: '_Tuple2',
						_0: length + 2,
						_1: {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('…}'),
							_1: {ctor: '[]'}
						}
					};
				} else {
					var _p4 = A3(_elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTinyRecord, nextLength, ',', _p3._1);
					var finalLength = _p4._0;
					var otherNodes = _p4._1;
					return {
						ctor: '_Tuple2',
						_0: finalLength,
						_1: {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(starter),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$span,
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Expando$purple,
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p5),
										_1: {ctor: '[]'}
									}),
								_1: otherNodes
							}
						}
					};
				}
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$elideMiddle = function (str) {
		return (_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$String$length(str),
			18) < 1) ? str : A2(
			_elm_lang$core$Basics_ops['++'],
			A2(_elm_lang$core$String$left, 8, str),
			A2(
				_elm_lang$core$Basics_ops['++'],
				'...',
				A2(_elm_lang$core$String$right, 8, str)));
	};
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp = function (str) {
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$String$length(str),
			_1: {
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(str),
				_1: {ctor: '[]'}
			}
		};
	};
	var _elm_lang$virtual_dom$VirtualDom_Expando$updateIndex = F3(
		function (n, func, list) {
			var _p6 = list;
			if (_p6.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var _p8 = _p6._1;
				var _p7 = _p6._0;
				return (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) ? {
					ctor: '::',
					_0: func(_p7),
					_1: _p8
				} : {
					ctor: '::',
					_0: _p7,
					_1: A3(_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex, n - 1, func, _p8)
				};
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$seqTypeToString = F2(
		function (n, seqType) {
			var _p9 = seqType;
			switch (_p9.ctor) {
				case 'ListSeq':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'List(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(n),
							')'));
				case 'SetSeq':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'Set(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(n),
							')'));
				default:
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'Array(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(n),
							')'));
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewTiny = function (value) {
		var _p10 = value;
		switch (_p10.ctor) {
			case 'S':
				var str = _elm_lang$virtual_dom$VirtualDom_Expando$elideMiddle(_p10._0);
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$String$length(str),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$span,
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Expando$red,
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(str),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				};
			case 'Primitive':
				var _p11 = _p10._0;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$String$length(_p11),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$span,
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Expando$blue,
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p11),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				};
			case 'Sequence':
				return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp(
					A2(
						_elm_lang$virtual_dom$VirtualDom_Expando$seqTypeToString,
						_elm_lang$core$List$length(_p10._2),
						_p10._0));
			case 'Dictionary':
				return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'Dict(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(
								_elm_lang$core$List$length(_p10._1)),
							')')));
			case 'Record':
				return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecord(_p10._1);
			default:
				if (_p10._2.ctor === '[]') {
					return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp(
						A2(_elm_lang$core$Maybe$withDefault, 'Unit', _p10._0));
				} else {
					return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp(
						function () {
							var _p12 = _p10._0;
							if (_p12.ctor === 'Nothing') {
								return A2(
									_elm_lang$core$Basics_ops['++'],
									'Tuple(',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(
											_elm_lang$core$List$length(_p10._2)),
										')'));
							} else {
								return A2(_elm_lang$core$Basics_ops['++'], _p12._0, ' …');
							}
						}());
				}
		}
	};
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecord = function (record) {
		return _elm_lang$core$Dict$isEmpty(record) ? {
			ctor: '_Tuple2',
			_0: 2,
			_1: {
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('{}'),
				_1: {ctor: '[]'}
			}
		} : A3(
			_elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecordHelp,
			0,
			'{ ',
			_elm_lang$core$Dict$toList(record));
	};
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecordHelp = F3(
		function (length, starter, entries) {
			var _p13 = entries;
			if (_p13.ctor === '[]') {
				return {
					ctor: '_Tuple2',
					_0: length + 2,
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' }'),
						_1: {ctor: '[]'}
					}
				};
			} else {
				var _p16 = _p13._0._0;
				var _p14 = _elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTiny(_p13._0._1);
				var valueLen = _p14._0;
				var valueNodes = _p14._1;
				var fieldLen = _elm_lang$core$String$length(_p16);
				var newLength = ((length + fieldLen) + valueLen) + 5;
				if (_elm_lang$core$Native_Utils.cmp(newLength, 60) > 0) {
					return {
						ctor: '_Tuple2',
						_0: length + 4,
						_1: {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(', … }'),
							_1: {ctor: '[]'}
						}
					};
				} else {
					var _p15 = A3(_elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecordHelp, newLength, ', ', _p13._1);
					var finalLength = _p15._0;
					var otherNodes = _p15._1;
					return {
						ctor: '_Tuple2',
						_0: finalLength,
						_1: {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(starter),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$span,
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Expando$purple,
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p16),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' = '),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$virtual_dom$VirtualDom_Helpers$span,
											{ctor: '[]'},
											valueNodes),
										_1: otherNodes
									}
								}
							}
						}
					};
				}
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTiny = function (value) {
		var _p17 = value;
		if (_p17.ctor === 'Record') {
			return A3(
				_elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTinyRecord,
				0,
				'{',
				_elm_lang$core$Dict$keys(_p17._1));
		} else {
			return _elm_lang$virtual_dom$VirtualDom_Expando$viewTiny(value);
		}
	};
	var _elm_lang$virtual_dom$VirtualDom_Expando$Constructor = F3(
		function (a, b, c) {
			return {ctor: 'Constructor', _0: a, _1: b, _2: c};
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$Record = F2(
		function (a, b) {
			return {ctor: 'Record', _0: a, _1: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$Dictionary = F2(
		function (a, b) {
			return {ctor: 'Dictionary', _0: a, _1: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$Sequence = F3(
		function (a, b, c) {
			return {ctor: 'Sequence', _0: a, _1: b, _2: c};
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$initHelp = F2(
		function (isOuter, expando) {
			var _p18 = expando;
			switch (_p18.ctor) {
				case 'S':
					return expando;
				case 'Primitive':
					return expando;
				case 'Sequence':
					var _p20 = _p18._0;
					var _p19 = _p18._2;
					return isOuter ? A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$Sequence,
						_p20,
						false,
						A2(
							_elm_lang$core$List$map,
							_elm_lang$virtual_dom$VirtualDom_Expando$initHelp(false),
							_p19)) : ((_elm_lang$core$Native_Utils.cmp(
						_elm_lang$core$List$length(_p19),
						8) < 1) ? A3(_elm_lang$virtual_dom$VirtualDom_Expando$Sequence, _p20, false, _p19) : expando);
				case 'Dictionary':
					var _p23 = _p18._1;
					return isOuter ? A2(
						_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary,
						false,
						A2(
							_elm_lang$core$List$map,
							function (_p21) {
								var _p22 = _p21;
								return {
									ctor: '_Tuple2',
									_0: _p22._0,
									_1: A2(_elm_lang$virtual_dom$VirtualDom_Expando$initHelp, false, _p22._1)
								};
							},
							_p23)) : ((_elm_lang$core$Native_Utils.cmp(
						_elm_lang$core$List$length(_p23),
						8) < 1) ? A2(_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary, false, _p23) : expando);
				case 'Record':
					var _p25 = _p18._1;
					return isOuter ? A2(
						_elm_lang$virtual_dom$VirtualDom_Expando$Record,
						false,
						A2(
							_elm_lang$core$Dict$map,
							F2(
								function (_p24, v) {
									return A2(_elm_lang$virtual_dom$VirtualDom_Expando$initHelp, false, v);
								}),
							_p25)) : ((_elm_lang$core$Native_Utils.cmp(
						_elm_lang$core$Dict$size(_p25),
						4) < 1) ? A2(_elm_lang$virtual_dom$VirtualDom_Expando$Record, false, _p25) : expando);
				default:
					var _p27 = _p18._0;
					var _p26 = _p18._2;
					return isOuter ? A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$Constructor,
						_p27,
						false,
						A2(
							_elm_lang$core$List$map,
							_elm_lang$virtual_dom$VirtualDom_Expando$initHelp(false),
							_p26)) : ((_elm_lang$core$Native_Utils.cmp(
						_elm_lang$core$List$length(_p26),
						4) < 1) ? A3(_elm_lang$virtual_dom$VirtualDom_Expando$Constructor, _p27, false, _p26) : expando);
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$init = function (value) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Expando$initHelp,
			true,
			_elm_lang$virtual_dom$Native_Debug.init(value));
	};
	var _elm_lang$virtual_dom$VirtualDom_Expando$mergeHelp = F2(
		function (old, $new) {
			var _p28 = {ctor: '_Tuple2', _0: old, _1: $new};
			_v12_6:
			do {
				if (_p28.ctor === '_Tuple2') {
					switch (_p28._1.ctor) {
						case 'S':
							return $new;
						case 'Primitive':
							return $new;
						case 'Sequence':
							if (_p28._0.ctor === 'Sequence') {
								return A3(
									_elm_lang$virtual_dom$VirtualDom_Expando$Sequence,
									_p28._1._0,
									_p28._0._1,
									A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeListHelp, _p28._0._2, _p28._1._2));
							} else {
								break _v12_6;
							}
						case 'Dictionary':
							if (_p28._0.ctor === 'Dictionary') {
								return A2(_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary, _p28._0._0, _p28._1._1);
							} else {
								break _v12_6;
							}
						case 'Record':
							if (_p28._0.ctor === 'Record') {
								return A2(
									_elm_lang$virtual_dom$VirtualDom_Expando$Record,
									_p28._0._0,
									A2(
										_elm_lang$core$Dict$map,
										_elm_lang$virtual_dom$VirtualDom_Expando$mergeDictHelp(_p28._0._1),
										_p28._1._1));
							} else {
								break _v12_6;
							}
						default:
							if (_p28._0.ctor === 'Constructor') {
								return A3(
									_elm_lang$virtual_dom$VirtualDom_Expando$Constructor,
									_p28._1._0,
									_p28._0._1,
									A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeListHelp, _p28._0._2, _p28._1._2));
							} else {
								break _v12_6;
							}
					}
				} else {
					break _v12_6;
				}
			} while(false);
			return $new;
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$mergeDictHelp = F3(
		function (oldDict, key, value) {
			var _p29 = A2(_elm_lang$core$Dict$get, key, oldDict);
			if (_p29.ctor === 'Nothing') {
				return value;
			} else {
				return A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeHelp, _p29._0, value);
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$mergeListHelp = F2(
		function (olds, news) {
			var _p30 = {ctor: '_Tuple2', _0: olds, _1: news};
			if (_p30._0.ctor === '[]') {
				return news;
			} else {
				if (_p30._1.ctor === '[]') {
					return news;
				} else {
					return {
						ctor: '::',
						_0: A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeHelp, _p30._0._0, _p30._1._0),
						_1: A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeListHelp, _p30._0._1, _p30._1._1)
					};
				}
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$merge = F2(
		function (value, expando) {
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Expando$mergeHelp,
				expando,
				_elm_lang$virtual_dom$Native_Debug.init(value));
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$update = F2(
		function (msg, value) {
			var _p31 = value;
			switch (_p31.ctor) {
				case 'S':
					return _elm_lang$core$Native_Utils.crashCase(
						'VirtualDom.Expando',
						{
							start: {line: 168, column: 3},
							end: {line: 235, column: 50}
						},
						_p31)('No messages for primitives');
				case 'Primitive':
					return _elm_lang$core$Native_Utils.crashCase(
						'VirtualDom.Expando',
						{
							start: {line: 168, column: 3},
							end: {line: 235, column: 50}
						},
						_p31)('No messages for primitives');
				case 'Sequence':
					var _p39 = _p31._2;
					var _p38 = _p31._0;
					var _p37 = _p31._1;
					var _p34 = msg;
					switch (_p34.ctor) {
						case 'Toggle':
							return A3(_elm_lang$virtual_dom$VirtualDom_Expando$Sequence, _p38, !_p37, _p39);
						case 'Index':
							if (_p34._0.ctor === 'None') {
								return A3(
									_elm_lang$virtual_dom$VirtualDom_Expando$Sequence,
									_p38,
									_p37,
									A3(
										_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex,
										_p34._1,
										_elm_lang$virtual_dom$VirtualDom_Expando$update(_p34._2),
										_p39));
							} else {
								return _elm_lang$core$Native_Utils.crashCase(
									'VirtualDom.Expando',
									{
										start: {line: 176, column: 7},
										end: {line: 188, column: 46}
									},
									_p34)('No redirected indexes on sequences');
							}
						default:
							return _elm_lang$core$Native_Utils.crashCase(
								'VirtualDom.Expando',
								{
									start: {line: 176, column: 7},
									end: {line: 188, column: 46}
								},
								_p34)('No field on sequences');
					}
				case 'Dictionary':
					var _p51 = _p31._1;
					var _p50 = _p31._0;
					var _p40 = msg;
					switch (_p40.ctor) {
						case 'Toggle':
							return A2(_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary, !_p50, _p51);
						case 'Index':
							var _p48 = _p40._2;
							var _p47 = _p40._1;
							var _p41 = _p40._0;
							switch (_p41.ctor) {
								case 'None':
									return _elm_lang$core$Native_Utils.crashCase(
										'VirtualDom.Expando',
										{
											start: {line: 196, column: 11},
											end: {line: 206, column: 81}
										},
										_p41)('must have redirect for dictionaries');
								case 'Key':
									return A2(
										_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary,
										_p50,
										A3(
											_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex,
											_p47,
											function (_p43) {
												var _p44 = _p43;
												return {
													ctor: '_Tuple2',
													_0: A2(_elm_lang$virtual_dom$VirtualDom_Expando$update, _p48, _p44._0),
													_1: _p44._1
												};
											},
											_p51));
								default:
									return A2(
										_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary,
										_p50,
										A3(
											_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex,
											_p47,
											function (_p45) {
												var _p46 = _p45;
												return {
													ctor: '_Tuple2',
													_0: _p46._0,
													_1: A2(_elm_lang$virtual_dom$VirtualDom_Expando$update, _p48, _p46._1)
												};
											},
											_p51));
							}
						default:
							return _elm_lang$core$Native_Utils.crashCase(
								'VirtualDom.Expando',
								{
									start: {line: 191, column: 7},
									end: {line: 209, column: 50}
								},
								_p40)('no field for dictionaries');
					}
				case 'Record':
					var _p55 = _p31._1;
					var _p54 = _p31._0;
					var _p52 = msg;
					switch (_p52.ctor) {
						case 'Toggle':
							return A2(_elm_lang$virtual_dom$VirtualDom_Expando$Record, !_p54, _p55);
						case 'Index':
							return _elm_lang$core$Native_Utils.crashCase(
								'VirtualDom.Expando',
								{
									start: {line: 212, column: 7},
									end: {line: 220, column: 77}
								},
								_p52)('No index for records');
						default:
							return A2(
								_elm_lang$virtual_dom$VirtualDom_Expando$Record,
								_p54,
								A3(
									_elm_lang$core$Dict$update,
									_p52._0,
									_elm_lang$virtual_dom$VirtualDom_Expando$updateField(_p52._1),
									_p55));
					}
				default:
					var _p61 = _p31._2;
					var _p60 = _p31._0;
					var _p59 = _p31._1;
					var _p56 = msg;
					switch (_p56.ctor) {
						case 'Toggle':
							return A3(_elm_lang$virtual_dom$VirtualDom_Expando$Constructor, _p60, !_p59, _p61);
						case 'Index':
							if (_p56._0.ctor === 'None') {
								return A3(
									_elm_lang$virtual_dom$VirtualDom_Expando$Constructor,
									_p60,
									_p59,
									A3(
										_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex,
										_p56._1,
										_elm_lang$virtual_dom$VirtualDom_Expando$update(_p56._2),
										_p61));
							} else {
								return _elm_lang$core$Native_Utils.crashCase(
									'VirtualDom.Expando',
									{
										start: {line: 223, column: 7},
										end: {line: 235, column: 50}
									},
									_p56)('No redirected indexes on sequences');
							}
						default:
							return _elm_lang$core$Native_Utils.crashCase(
								'VirtualDom.Expando',
								{
									start: {line: 223, column: 7},
									end: {line: 235, column: 50}
								},
								_p56)('No field for constructors');
					}
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$updateField = F2(
		function (msg, maybeExpando) {
			var _p62 = maybeExpando;
			if (_p62.ctor === 'Nothing') {
				return _elm_lang$core$Native_Utils.crashCase(
					'VirtualDom.Expando',
					{
						start: {line: 253, column: 3},
						end: {line: 258, column: 32}
					},
					_p62)('key does not exist');
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(_elm_lang$virtual_dom$VirtualDom_Expando$update, msg, _p62._0));
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$Primitive = function (a) {
		return {ctor: 'Primitive', _0: a};
	};
	var _elm_lang$virtual_dom$VirtualDom_Expando$S = function (a) {
		return {ctor: 'S', _0: a};
	};
	var _elm_lang$virtual_dom$VirtualDom_Expando$ArraySeq = {ctor: 'ArraySeq'};
	var _elm_lang$virtual_dom$VirtualDom_Expando$SetSeq = {ctor: 'SetSeq'};
	var _elm_lang$virtual_dom$VirtualDom_Expando$ListSeq = {ctor: 'ListSeq'};
	var _elm_lang$virtual_dom$VirtualDom_Expando$Field = F2(
		function (a, b) {
			return {ctor: 'Field', _0: a, _1: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$Index = F3(
		function (a, b, c) {
			return {ctor: 'Index', _0: a, _1: b, _2: c};
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$Toggle = {ctor: 'Toggle'};
	var _elm_lang$virtual_dom$VirtualDom_Expando$Value = {ctor: 'Value'};
	var _elm_lang$virtual_dom$VirtualDom_Expando$Key = {ctor: 'Key'};
	var _elm_lang$virtual_dom$VirtualDom_Expando$None = {ctor: 'None'};
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorEntry = F2(
		function (index, value) {
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$map,
				A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, index),
				A2(
					_elm_lang$virtual_dom$VirtualDom_Expando$view,
					_elm_lang$core$Maybe$Just(
						_elm_lang$core$Basics$toString(index)),
					value));
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$view = F2(
		function (maybeKey, expando) {
			var _p64 = expando;
			switch (_p64.ctor) {
				case 'S':
					return A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$div,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
							_1: {ctor: '[]'}
						},
						A3(
							_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
							maybeKey,
							_elm_lang$core$Maybe$Nothing,
							{
								ctor: '::',
								_0: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$span,
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Expando$red,
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p64._0),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}));
				case 'Primitive':
					return A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$div,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
							_1: {ctor: '[]'}
						},
						A3(
							_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
							maybeKey,
							_elm_lang$core$Maybe$Nothing,
							{
								ctor: '::',
								_0: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$span,
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Expando$blue,
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p64._0),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}));
				case 'Sequence':
					return A4(_elm_lang$virtual_dom$VirtualDom_Expando$viewSequence, maybeKey, _p64._0, _p64._1, _p64._2);
				case 'Dictionary':
					return A3(_elm_lang$virtual_dom$VirtualDom_Expando$viewDictionary, maybeKey, _p64._0, _p64._1);
				case 'Record':
					return A3(_elm_lang$virtual_dom$VirtualDom_Expando$viewRecord, maybeKey, _p64._0, _p64._1);
				default:
					return A4(_elm_lang$virtual_dom$VirtualDom_Expando$viewConstructor, maybeKey, _p64._0, _p64._1, _p64._2);
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructor = F4(
		function (maybeKey, maybeName, isClosed, valueList) {
			var _p65 = function () {
				var _p66 = valueList;
				if (_p66.ctor === '[]') {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Maybe$Nothing,
						_1: A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$div,
							{ctor: '[]'},
							{ctor: '[]'})
					};
				} else {
					if (_p66._1.ctor === '[]') {
						var _p67 = _p66._0;
						switch (_p67.ctor) {
							case 'S':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Maybe$Nothing,
									_1: A2(
										_elm_lang$virtual_dom$VirtualDom_Helpers$div,
										{ctor: '[]'},
										{ctor: '[]'})
								};
							case 'Primitive':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Maybe$Nothing,
									_1: A2(
										_elm_lang$virtual_dom$VirtualDom_Helpers$div,
										{ctor: '[]'},
										{ctor: '[]'})
								};
							case 'Sequence':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Maybe$Just(isClosed),
									_1: isClosed ? A2(
										_elm_lang$virtual_dom$VirtualDom_Helpers$div,
										{ctor: '[]'},
										{ctor: '[]'}) : A2(
										_elm_lang$virtual_dom$VirtualDom_Helpers$map,
										A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, 0),
										_elm_lang$virtual_dom$VirtualDom_Expando$viewSequenceOpen(_p67._2))
								};
							case 'Dictionary':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Maybe$Just(isClosed),
									_1: isClosed ? A2(
										_elm_lang$virtual_dom$VirtualDom_Helpers$div,
										{ctor: '[]'},
										{ctor: '[]'}) : A2(
										_elm_lang$virtual_dom$VirtualDom_Helpers$map,
										A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, 0),
										_elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryOpen(_p67._1))
								};
							case 'Record':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Maybe$Just(isClosed),
									_1: isClosed ? A2(
										_elm_lang$virtual_dom$VirtualDom_Helpers$div,
										{ctor: '[]'},
										{ctor: '[]'}) : A2(
										_elm_lang$virtual_dom$VirtualDom_Helpers$map,
										A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, 0),
										_elm_lang$virtual_dom$VirtualDom_Expando$viewRecordOpen(_p67._1))
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Maybe$Just(isClosed),
									_1: isClosed ? A2(
										_elm_lang$virtual_dom$VirtualDom_Helpers$div,
										{ctor: '[]'},
										{ctor: '[]'}) : A2(
										_elm_lang$virtual_dom$VirtualDom_Helpers$map,
										A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, 0),
										_elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorOpen(_p67._2))
								};
						}
					} else {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Maybe$Just(isClosed),
							_1: isClosed ? A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$div,
								{ctor: '[]'},
								{ctor: '[]'}) : _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorOpen(valueList)
						};
					}
				}
			}();
			var maybeIsClosed = _p65._0;
			var openHtml = _p65._1;
			var tinyArgs = A2(
				_elm_lang$core$List$map,
				function (_p68) {
					return _elm_lang$core$Tuple$second(
						_elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTiny(_p68));
				},
				valueList);
			var description = function () {
				var _p69 = {ctor: '_Tuple2', _0: maybeName, _1: tinyArgs};
				if (_p69._0.ctor === 'Nothing') {
					if (_p69._1.ctor === '[]') {
						return {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('()'),
							_1: {ctor: '[]'}
						};
					} else {
						return {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('( '),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$span,
									{ctor: '[]'},
									_p69._1._0),
								_1: A3(
									_elm_lang$core$List$foldr,
									F2(
										function (args, rest) {
											return {
												ctor: '::',
												_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(', '),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$virtual_dom$VirtualDom_Helpers$span,
														{ctor: '[]'},
														args),
													_1: rest
												}
											};
										}),
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' )'),
										_1: {ctor: '[]'}
									},
									_p69._1._1)
							}
						};
					}
				} else {
					if (_p69._1.ctor === '[]') {
						return {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p69._0._0),
							_1: {ctor: '[]'}
						};
					} else {
						return {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
								A2(_elm_lang$core$Basics_ops['++'], _p69._0._0, ' ')),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$span,
									{ctor: '[]'},
									_p69._1._0),
								_1: A3(
									_elm_lang$core$List$foldr,
									F2(
										function (args, rest) {
											return {
												ctor: '::',
												_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' '),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$virtual_dom$VirtualDom_Helpers$span,
														{ctor: '[]'},
														args),
													_1: rest
												}
											};
										}),
									{ctor: '[]'},
									_p69._1._1)
							}
						};
					}
				}
			}();
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$div,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Expando$Toggle),
							_1: {ctor: '[]'}
						},
						A3(_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter, maybeKey, maybeIsClosed, description)),
					_1: {
						ctor: '::',
						_0: openHtml,
						_1: {ctor: '[]'}
					}
				});
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorOpen = function (valueList) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{ctor: '[]'},
			A2(_elm_lang$core$List$indexedMap, _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorEntry, valueList));
	};
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryOpen = function (keyValuePairs) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{ctor: '[]'},
			A2(_elm_lang$core$List$indexedMap, _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryEntry, keyValuePairs));
	};
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryEntry = F2(
		function (index, _p70) {
			var _p71 = _p70;
			var _p74 = _p71._1;
			var _p73 = _p71._0;
			var _p72 = _p73;
			switch (_p72.ctor) {
				case 'S':
					return A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$map,
						A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$Value, index),
						A2(
							_elm_lang$virtual_dom$VirtualDom_Expando$view,
							_elm_lang$core$Maybe$Just(_p72._0),
							_p74));
				case 'Primitive':
					return A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$map,
						A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$Value, index),
						A2(
							_elm_lang$virtual_dom$VirtualDom_Expando$view,
							_elm_lang$core$Maybe$Just(_p72._0),
							_p74));
				default:
					return A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$div,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$map,
								A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$Key, index),
								A2(
									_elm_lang$virtual_dom$VirtualDom_Expando$view,
									_elm_lang$core$Maybe$Just('key'),
									_p73)),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$map,
									A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$Value, index),
									A2(
										_elm_lang$virtual_dom$VirtualDom_Expando$view,
										_elm_lang$core$Maybe$Just('value'),
										_p74)),
								_1: {ctor: '[]'}
							}
						});
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewRecordOpen = function (record) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{ctor: '[]'},
			A2(
				_elm_lang$core$List$map,
				_elm_lang$virtual_dom$VirtualDom_Expando$viewRecordEntry,
				_elm_lang$core$Dict$toList(record)));
	};
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewRecordEntry = function (_p75) {
		var _p76 = _p75;
		var _p77 = _p76._0;
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$map,
			_elm_lang$virtual_dom$VirtualDom_Expando$Field(_p77),
			A2(
				_elm_lang$virtual_dom$VirtualDom_Expando$view,
				_elm_lang$core$Maybe$Just(_p77),
				_p76._1));
	};
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewSequenceOpen = function (values) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{ctor: '[]'},
			A2(_elm_lang$core$List$indexedMap, _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorEntry, values));
	};
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionary = F3(
		function (maybeKey, isClosed, keyValuePairs) {
			var starter = A2(
				_elm_lang$core$Basics_ops['++'],
				'Dict(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(
						_elm_lang$core$List$length(keyValuePairs)),
					')'));
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$div,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Expando$Toggle),
							_1: {ctor: '[]'}
						},
						A3(
							_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
							maybeKey,
							_elm_lang$core$Maybe$Just(isClosed),
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(starter),
								_1: {ctor: '[]'}
							})),
					_1: {
						ctor: '::',
						_0: isClosed ? _elm_lang$virtual_dom$VirtualDom_Helpers$text('') : _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryOpen(keyValuePairs),
						_1: {ctor: '[]'}
					}
				});
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewRecord = F3(
		function (maybeKey, isClosed, record) {
			var _p78 = isClosed ? {
				ctor: '_Tuple3',
				_0: _elm_lang$core$Tuple$second(
					_elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecord(record)),
				_1: _elm_lang$virtual_dom$VirtualDom_Helpers$text(''),
				_2: _elm_lang$virtual_dom$VirtualDom_Helpers$text('')
			} : {
				ctor: '_Tuple3',
				_0: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('{'),
					_1: {ctor: '[]'}
				},
				_1: _elm_lang$virtual_dom$VirtualDom_Expando$viewRecordOpen(record),
				_2: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(
							_elm_lang$core$Maybe$Just(
								{ctor: '_Tuple0'})),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('}'),
						_1: {ctor: '[]'}
					})
			};
			var start = _p78._0;
			var middle = _p78._1;
			var end = _p78._2;
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$div,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Expando$Toggle),
							_1: {ctor: '[]'}
						},
						A3(
							_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
							maybeKey,
							_elm_lang$core$Maybe$Just(isClosed),
							start)),
					_1: {
						ctor: '::',
						_0: middle,
						_1: {
							ctor: '::',
							_0: end,
							_1: {ctor: '[]'}
						}
					}
				});
		});
	var _elm_lang$virtual_dom$VirtualDom_Expando$viewSequence = F4(
		function (maybeKey, seqType, isClosed, valueList) {
			var starter = A2(
				_elm_lang$virtual_dom$VirtualDom_Expando$seqTypeToString,
				_elm_lang$core$List$length(valueList),
				seqType);
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$div,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Expando$Toggle),
							_1: {ctor: '[]'}
						},
						A3(
							_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
							maybeKey,
							_elm_lang$core$Maybe$Just(isClosed),
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(starter),
								_1: {ctor: '[]'}
							})),
					_1: {
						ctor: '::',
						_0: isClosed ? _elm_lang$virtual_dom$VirtualDom_Helpers$text('') : _elm_lang$virtual_dom$VirtualDom_Expando$viewSequenceOpen(valueList),
						_1: {ctor: '[]'}
					}
				});
		});

	var _elm_lang$virtual_dom$VirtualDom_Report$some = function (list) {
		return !_elm_lang$core$List$isEmpty(list);
	};
	var _elm_lang$virtual_dom$VirtualDom_Report$TagChanges = F4(
		function (a, b, c, d) {
			return {removed: a, changed: b, added: c, argsMatch: d};
		});
	var _elm_lang$virtual_dom$VirtualDom_Report$emptyTagChanges = function (argsMatch) {
		return A4(
			_elm_lang$virtual_dom$VirtualDom_Report$TagChanges,
			{ctor: '[]'},
			{ctor: '[]'},
			{ctor: '[]'},
			argsMatch);
	};
	var _elm_lang$virtual_dom$VirtualDom_Report$hasTagChanges = function (tagChanges) {
		return _elm_lang$core$Native_Utils.eq(
			tagChanges,
			A4(
				_elm_lang$virtual_dom$VirtualDom_Report$TagChanges,
				{ctor: '[]'},
				{ctor: '[]'},
				{ctor: '[]'},
				true));
	};
	var _elm_lang$virtual_dom$VirtualDom_Report$SomethingChanged = function (a) {
		return {ctor: 'SomethingChanged', _0: a};
	};
	var _elm_lang$virtual_dom$VirtualDom_Report$MessageChanged = F2(
		function (a, b) {
			return {ctor: 'MessageChanged', _0: a, _1: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_Report$VersionChanged = F2(
		function (a, b) {
			return {ctor: 'VersionChanged', _0: a, _1: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_Report$CorruptHistory = {ctor: 'CorruptHistory'};
	var _elm_lang$virtual_dom$VirtualDom_Report$UnionChange = F2(
		function (a, b) {
			return {ctor: 'UnionChange', _0: a, _1: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_Report$AliasChange = function (a) {
		return {ctor: 'AliasChange', _0: a};
	};
	var _elm_lang$virtual_dom$VirtualDom_Report$Fine = {ctor: 'Fine'};
	var _elm_lang$virtual_dom$VirtualDom_Report$Risky = {ctor: 'Risky'};
	var _elm_lang$virtual_dom$VirtualDom_Report$Impossible = {ctor: 'Impossible'};
	var _elm_lang$virtual_dom$VirtualDom_Report$worstCase = F2(
		function (status, statusList) {
			worstCase:
			while (true) {
				var _p0 = statusList;
				if (_p0.ctor === '[]') {
					return status;
				} else {
					switch (_p0._0.ctor) {
						case 'Impossible':
							return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
						case 'Risky':
							var _v1 = _elm_lang$virtual_dom$VirtualDom_Report$Risky,
								_v2 = _p0._1;
							status = _v1;
							statusList = _v2;
							continue worstCase;
						default:
							var _v3 = status,
								_v4 = _p0._1;
							status = _v3;
							statusList = _v4;
							continue worstCase;
					}
				}
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Report$evaluateChange = function (change) {
		var _p1 = change;
		if (_p1.ctor === 'AliasChange') {
			return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
		} else {
			return ((!_p1._1.argsMatch) || (_elm_lang$virtual_dom$VirtualDom_Report$some(_p1._1.changed) || _elm_lang$virtual_dom$VirtualDom_Report$some(_p1._1.removed))) ? _elm_lang$virtual_dom$VirtualDom_Report$Impossible : (_elm_lang$virtual_dom$VirtualDom_Report$some(_p1._1.added) ? _elm_lang$virtual_dom$VirtualDom_Report$Risky : _elm_lang$virtual_dom$VirtualDom_Report$Fine);
		}
	};
	var _elm_lang$virtual_dom$VirtualDom_Report$evaluate = function (report) {
		var _p2 = report;
		switch (_p2.ctor) {
			case 'CorruptHistory':
				return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
			case 'VersionChanged':
				return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
			case 'MessageChanged':
				return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
			default:
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Report$worstCase,
					_elm_lang$virtual_dom$VirtualDom_Report$Fine,
					A2(_elm_lang$core$List$map, _elm_lang$virtual_dom$VirtualDom_Report$evaluateChange, _p2._0));
		}
	};

	var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeDict = F2(
		function (f, dict) {
			return _elm_lang$core$Json_Encode$object(
				_elm_lang$core$Dict$toList(
					A2(
						_elm_lang$core$Dict$map,
						F2(
							function (key, value) {
								return f(value);
							}),
						dict)));
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeUnion = function (_p0) {
		var _p1 = _p0;
		return _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'args',
					_1: _elm_lang$core$Json_Encode$list(
						A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p1.args))
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'tags',
						_1: A2(
							_elm_lang$virtual_dom$VirtualDom_Metadata$encodeDict,
							function (_p2) {
								return _elm_lang$core$Json_Encode$list(
									A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p2));
							},
							_p1.tags)
					},
					_1: {ctor: '[]'}
				}
			});
	};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeAlias = function (_p3) {
		var _p4 = _p3;
		return _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'args',
					_1: _elm_lang$core$Json_Encode$list(
						A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p4.args))
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'type',
						_1: _elm_lang$core$Json_Encode$string(_p4.tipe)
					},
					_1: {ctor: '[]'}
				}
			});
	};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeTypes = function (_p5) {
		var _p6 = _p5;
		return _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'message',
					_1: _elm_lang$core$Json_Encode$string(_p6.message)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'aliases',
						_1: A2(_elm_lang$virtual_dom$VirtualDom_Metadata$encodeDict, _elm_lang$virtual_dom$VirtualDom_Metadata$encodeAlias, _p6.aliases)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'unions',
							_1: A2(_elm_lang$virtual_dom$VirtualDom_Metadata$encodeDict, _elm_lang$virtual_dom$VirtualDom_Metadata$encodeUnion, _p6.unions)
						},
						_1: {ctor: '[]'}
					}
				}
			});
	};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeVersions = function (_p7) {
		var _p8 = _p7;
		return _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'elm',
					_1: _elm_lang$core$Json_Encode$string(_p8.elm)
				},
				_1: {ctor: '[]'}
			});
	};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$encode = function (_p9) {
		var _p10 = _p9;
		return _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'versions',
					_1: _elm_lang$virtual_dom$VirtualDom_Metadata$encodeVersions(_p10.versions)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'types',
						_1: _elm_lang$virtual_dom$VirtualDom_Metadata$encodeTypes(_p10.types)
					},
					_1: {ctor: '[]'}
				}
			});
	};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$checkTag = F4(
		function (tag, old, $new, changes) {
			return _elm_lang$core$Native_Utils.eq(old, $new) ? changes : _elm_lang$core$Native_Utils.update(
				changes,
				{
					changed: {ctor: '::', _0: tag, _1: changes.changed}
				});
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$addTag = F3(
		function (tag, _p11, changes) {
			return _elm_lang$core$Native_Utils.update(
				changes,
				{
					added: {ctor: '::', _0: tag, _1: changes.added}
				});
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$removeTag = F3(
		function (tag, _p12, changes) {
			return _elm_lang$core$Native_Utils.update(
				changes,
				{
					removed: {ctor: '::', _0: tag, _1: changes.removed}
				});
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$checkUnion = F4(
		function (name, old, $new, changes) {
			var tagChanges = A6(
				_elm_lang$core$Dict$merge,
				_elm_lang$virtual_dom$VirtualDom_Metadata$removeTag,
				_elm_lang$virtual_dom$VirtualDom_Metadata$checkTag,
				_elm_lang$virtual_dom$VirtualDom_Metadata$addTag,
				old.tags,
				$new.tags,
				_elm_lang$virtual_dom$VirtualDom_Report$emptyTagChanges(
					_elm_lang$core$Native_Utils.eq(old.args, $new.args)));
			return _elm_lang$virtual_dom$VirtualDom_Report$hasTagChanges(tagChanges) ? changes : {
				ctor: '::',
				_0: A2(_elm_lang$virtual_dom$VirtualDom_Report$UnionChange, name, tagChanges),
				_1: changes
			};
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$checkAlias = F4(
		function (name, old, $new, changes) {
			return (_elm_lang$core$Native_Utils.eq(old.tipe, $new.tipe) && _elm_lang$core$Native_Utils.eq(old.args, $new.args)) ? changes : {
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Report$AliasChange(name),
				_1: changes
			};
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$ignore = F3(
		function (key, value, report) {
			return report;
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$checkTypes = F2(
		function (old, $new) {
			return (!_elm_lang$core$Native_Utils.eq(old.message, $new.message)) ? A2(_elm_lang$virtual_dom$VirtualDom_Report$MessageChanged, old.message, $new.message) : _elm_lang$virtual_dom$VirtualDom_Report$SomethingChanged(
				A6(
					_elm_lang$core$Dict$merge,
					_elm_lang$virtual_dom$VirtualDom_Metadata$ignore,
					_elm_lang$virtual_dom$VirtualDom_Metadata$checkUnion,
					_elm_lang$virtual_dom$VirtualDom_Metadata$ignore,
					old.unions,
					$new.unions,
					A6(
						_elm_lang$core$Dict$merge,
						_elm_lang$virtual_dom$VirtualDom_Metadata$ignore,
						_elm_lang$virtual_dom$VirtualDom_Metadata$checkAlias,
						_elm_lang$virtual_dom$VirtualDom_Metadata$ignore,
						old.aliases,
						$new.aliases,
						{ctor: '[]'})));
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$check = F2(
		function (old, $new) {
			return (!_elm_lang$core$Native_Utils.eq(old.versions.elm, $new.versions.elm)) ? A2(_elm_lang$virtual_dom$VirtualDom_Report$VersionChanged, old.versions.elm, $new.versions.elm) : A2(_elm_lang$virtual_dom$VirtualDom_Metadata$checkTypes, old.types, $new.types);
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$hasProblem = F2(
		function (tipe, _p13) {
			var _p14 = _p13;
			return A2(_elm_lang$core$String$contains, _p14._1, tipe) ? _elm_lang$core$Maybe$Just(_p14._0) : _elm_lang$core$Maybe$Nothing;
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$Metadata = F2(
		function (a, b) {
			return {versions: a, types: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$Versions = function (a) {
		return {elm: a};
	};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$decodeVersions = A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$virtual_dom$VirtualDom_Metadata$Versions,
		A2(_elm_lang$core$Json_Decode$field, 'elm', _elm_lang$core$Json_Decode$string));
	var _elm_lang$virtual_dom$VirtualDom_Metadata$Types = F3(
		function (a, b, c) {
			return {message: a, aliases: b, unions: c};
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$Alias = F2(
		function (a, b) {
			return {args: a, tipe: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$decodeAlias = A3(
		_elm_lang$core$Json_Decode$map2,
		_elm_lang$virtual_dom$VirtualDom_Metadata$Alias,
		A2(
			_elm_lang$core$Json_Decode$field,
			'args',
			_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)),
		A2(_elm_lang$core$Json_Decode$field, 'type', _elm_lang$core$Json_Decode$string));
	var _elm_lang$virtual_dom$VirtualDom_Metadata$Union = F2(
		function (a, b) {
			return {args: a, tags: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$decodeUnion = A3(
		_elm_lang$core$Json_Decode$map2,
		_elm_lang$virtual_dom$VirtualDom_Metadata$Union,
		A2(
			_elm_lang$core$Json_Decode$field,
			'args',
			_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)),
		A2(
			_elm_lang$core$Json_Decode$field,
			'tags',
			_elm_lang$core$Json_Decode$dict(
				_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string))));
	var _elm_lang$virtual_dom$VirtualDom_Metadata$decodeTypes = A4(
		_elm_lang$core$Json_Decode$map3,
		_elm_lang$virtual_dom$VirtualDom_Metadata$Types,
		A2(_elm_lang$core$Json_Decode$field, 'message', _elm_lang$core$Json_Decode$string),
		A2(
			_elm_lang$core$Json_Decode$field,
			'aliases',
			_elm_lang$core$Json_Decode$dict(_elm_lang$virtual_dom$VirtualDom_Metadata$decodeAlias)),
		A2(
			_elm_lang$core$Json_Decode$field,
			'unions',
			_elm_lang$core$Json_Decode$dict(_elm_lang$virtual_dom$VirtualDom_Metadata$decodeUnion)));
	var _elm_lang$virtual_dom$VirtualDom_Metadata$decoder = A3(
		_elm_lang$core$Json_Decode$map2,
		_elm_lang$virtual_dom$VirtualDom_Metadata$Metadata,
		A2(_elm_lang$core$Json_Decode$field, 'versions', _elm_lang$virtual_dom$VirtualDom_Metadata$decodeVersions),
		A2(_elm_lang$core$Json_Decode$field, 'types', _elm_lang$virtual_dom$VirtualDom_Metadata$decodeTypes));
	var _elm_lang$virtual_dom$VirtualDom_Metadata$Error = F2(
		function (a, b) {
			return {message: a, problems: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$ProblemType = F2(
		function (a, b) {
			return {name: a, problems: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$VirtualDom = {ctor: 'VirtualDom'};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$Program = {ctor: 'Program'};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$Request = {ctor: 'Request'};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$Socket = {ctor: 'Socket'};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$Process = {ctor: 'Process'};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$Task = {ctor: 'Task'};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$Decoder = {ctor: 'Decoder'};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$Function = {ctor: 'Function'};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$problemTable = {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Function, _1: '->'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Decoder, _1: 'Json.Decode.Decoder'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Task, _1: 'Task.Task'},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Process, _1: 'Process.Id'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Socket, _1: 'WebSocket.LowLevel.WebSocket'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Request, _1: 'Http.Request'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Program, _1: 'Platform.Program'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$VirtualDom, _1: 'VirtualDom.Node'},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$VirtualDom, _1: 'VirtualDom.Attribute'},
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			}
		}
	};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$findProblems = function (tipe) {
		return A2(
			_elm_lang$core$List$filterMap,
			_elm_lang$virtual_dom$VirtualDom_Metadata$hasProblem(tipe),
			_elm_lang$virtual_dom$VirtualDom_Metadata$problemTable);
	};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$collectBadAliases = F3(
		function (name, _p15, list) {
			var _p16 = _p15;
			var _p17 = _elm_lang$virtual_dom$VirtualDom_Metadata$findProblems(_p16.tipe);
			if (_p17.ctor === '[]') {
				return list;
			} else {
				return {
					ctor: '::',
					_0: A2(_elm_lang$virtual_dom$VirtualDom_Metadata$ProblemType, name, _p17),
					_1: list
				};
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$collectBadUnions = F3(
		function (name, _p18, list) {
			var _p19 = _p18;
			var _p20 = A2(
				_elm_lang$core$List$concatMap,
				_elm_lang$virtual_dom$VirtualDom_Metadata$findProblems,
				_elm_lang$core$List$concat(
					_elm_lang$core$Dict$values(_p19.tags)));
			if (_p20.ctor === '[]') {
				return list;
			} else {
				return {
					ctor: '::',
					_0: A2(_elm_lang$virtual_dom$VirtualDom_Metadata$ProblemType, name, _p20),
					_1: list
				};
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Metadata$isPortable = function (_p21) {
		var _p22 = _p21;
		var _p24 = _p22.types;
		var badAliases = A3(
			_elm_lang$core$Dict$foldl,
			_elm_lang$virtual_dom$VirtualDom_Metadata$collectBadAliases,
			{ctor: '[]'},
			_p24.aliases);
		var _p23 = A3(_elm_lang$core$Dict$foldl, _elm_lang$virtual_dom$VirtualDom_Metadata$collectBadUnions, badAliases, _p24.unions);
		if (_p23.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			return _elm_lang$core$Maybe$Just(
				A2(_elm_lang$virtual_dom$VirtualDom_Metadata$Error, _p24.message, _p23));
		}
	};
	var _elm_lang$virtual_dom$VirtualDom_Metadata$decode = function (value) {
		var _p25 = A2(_elm_lang$core$Json_Decode$decodeValue, _elm_lang$virtual_dom$VirtualDom_Metadata$decoder, value);
		if (_p25.ctor === 'Err') {
			return _elm_lang$core$Native_Utils.crashCase(
				'VirtualDom.Metadata',
				{
					start: {line: 229, column: 3},
					end: {line: 239, column: 20}
				},
				_p25)('Compiler is generating bad metadata. Report this at <https://github.com/elm-lang/virtual-dom/issues>.');
		} else {
			var _p28 = _p25._0;
			var _p27 = _elm_lang$virtual_dom$VirtualDom_Metadata$isPortable(_p28);
			if (_p27.ctor === 'Nothing') {
				return _elm_lang$core$Result$Ok(_p28);
			} else {
				return _elm_lang$core$Result$Err(_p27._0);
			}
		}
	};

	var _elm_lang$virtual_dom$VirtualDom_History$viewMessage = F3(
		function (currentIndex, index, msg) {
			var className = _elm_lang$core$Native_Utils.eq(currentIndex, index) ? 'messages-entry messages-entry-selected' : 'messages-entry';
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class(className),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$on,
							'click',
							_elm_lang$core$Json_Decode$succeed(index)),
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('messages-entry-content'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
								_elm_lang$virtual_dom$Native_Debug.messageToString(msg)),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$span,
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('messages-entry-index'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
									_elm_lang$core$Basics$toString(index)),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				});
		});
	var _elm_lang$virtual_dom$VirtualDom_History$consMsg = F3(
		function (currentIndex, msg, _p0) {
			var _p1 = _p0;
			var _p2 = _p1._0;
			return {
				ctor: '_Tuple2',
				_0: _p2 - 1,
				_1: {
					ctor: '::',
					_0: A4(_elm_lang$virtual_dom$VirtualDom_Helpers$lazy3, _elm_lang$virtual_dom$VirtualDom_History$viewMessage, currentIndex, _p2, msg),
					_1: _p1._1
				}
			};
		});
	var _elm_lang$virtual_dom$VirtualDom_History$viewSnapshot = F3(
		function (currentIndex, index, _p3) {
			var _p4 = _p3;
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{ctor: '[]'},
				_elm_lang$core$Tuple$second(
					A3(
						_elm_lang$core$Array$foldl,
						_elm_lang$virtual_dom$VirtualDom_History$consMsg(currentIndex),
						{
							ctor: '_Tuple2',
							_0: index - 1,
							_1: {ctor: '[]'}
						},
						_p4.messages)));
		});
	var _elm_lang$virtual_dom$VirtualDom_History$undone = function (getResult) {
		var _p5 = getResult;
		if (_p5.ctor === 'Done') {
			return {ctor: '_Tuple2', _0: _p5._1, _1: _p5._0};
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'VirtualDom.History',
				{
					start: {line: 195, column: 3},
					end: {line: 200, column: 39}
				},
				_p5)('Bug in History.get');
		}
	};
	var _elm_lang$virtual_dom$VirtualDom_History$elmToJs = _elm_lang$virtual_dom$Native_Debug.unsafeCoerce;
	var _elm_lang$virtual_dom$VirtualDom_History$encodeHelp = F2(
		function (snapshot, allMessages) {
			return A3(
				_elm_lang$core$Array$foldl,
				F2(
					function (elm, msgs) {
						return {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_History$elmToJs(elm),
							_1: msgs
						};
					}),
				allMessages,
				snapshot.messages);
		});
	var _elm_lang$virtual_dom$VirtualDom_History$encode = function (_p7) {
		var _p8 = _p7;
		var recentJson = A2(
			_elm_lang$core$List$map,
			_elm_lang$virtual_dom$VirtualDom_History$elmToJs,
			_elm_lang$core$List$reverse(_p8.recent.messages));
		return _elm_lang$core$Json_Encode$list(
			A3(_elm_lang$core$Array$foldr, _elm_lang$virtual_dom$VirtualDom_History$encodeHelp, recentJson, _p8.snapshots));
	};
	var _elm_lang$virtual_dom$VirtualDom_History$jsToElm = _elm_lang$virtual_dom$Native_Debug.unsafeCoerce;
	var _elm_lang$virtual_dom$VirtualDom_History$initialModel = function (_p9) {
		var _p10 = _p9;
		var _p11 = A2(_elm_lang$core$Array$get, 0, _p10.snapshots);
		if (_p11.ctor === 'Just') {
			return _p11._0.model;
		} else {
			return _p10.recent.model;
		}
	};
	var _elm_lang$virtual_dom$VirtualDom_History$size = function (history) {
		return history.numMessages;
	};
	var _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize = 64;
	var _elm_lang$virtual_dom$VirtualDom_History$consSnapshot = F3(
		function (currentIndex, snapshot, _p12) {
			var _p13 = _p12;
			var _p14 = _p13._0;
			var nextIndex = _p14 - _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize;
			var currentIndexHelp = ((_elm_lang$core$Native_Utils.cmp(nextIndex, currentIndex) < 1) && (_elm_lang$core$Native_Utils.cmp(currentIndex, _p14) < 0)) ? currentIndex : -1;
			return {
				ctor: '_Tuple2',
				_0: _p14 - _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize,
				_1: {
					ctor: '::',
					_0: A4(_elm_lang$virtual_dom$VirtualDom_Helpers$lazy3, _elm_lang$virtual_dom$VirtualDom_History$viewSnapshot, currentIndexHelp, _p14, snapshot),
					_1: _p13._1
				}
			};
		});
	var _elm_lang$virtual_dom$VirtualDom_History$viewSnapshots = F2(
		function (currentIndex, snapshots) {
			var highIndex = _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize * _elm_lang$core$Array$length(snapshots);
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{ctor: '[]'},
				_elm_lang$core$Tuple$second(
					A3(
						_elm_lang$core$Array$foldr,
						_elm_lang$virtual_dom$VirtualDom_History$consSnapshot(currentIndex),
						{
							ctor: '_Tuple2',
							_0: highIndex,
							_1: {ctor: '[]'}
						},
						snapshots)));
		});
	var _elm_lang$virtual_dom$VirtualDom_History$view = F2(
		function (maybeIndex, _p15) {
			var _p16 = _p15;
			var _p17 = function () {
				var _p18 = maybeIndex;
				if (_p18.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: -1, _1: 'debugger-sidebar-messages'};
				} else {
					return {ctor: '_Tuple2', _0: _p18._0, _1: 'debugger-sidebar-messages-paused'};
				}
			}();
			var index = _p17._0;
			var className = _p17._1;
			var oldStuff = A3(_elm_lang$virtual_dom$VirtualDom_Helpers$lazy2, _elm_lang$virtual_dom$VirtualDom_History$viewSnapshots, index, _p16.snapshots);
			var newStuff = _elm_lang$core$Tuple$second(
				A3(
					_elm_lang$core$List$foldl,
					_elm_lang$virtual_dom$VirtualDom_History$consMsg(index),
					{
						ctor: '_Tuple2',
						_0: _p16.numMessages - 1,
						_1: {ctor: '[]'}
					},
					_p16.recent.messages));
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class(className),
					_1: {ctor: '[]'}
				},
				{ctor: '::', _0: oldStuff, _1: newStuff});
		});
	var _elm_lang$virtual_dom$VirtualDom_History$History = F3(
		function (a, b, c) {
			return {snapshots: a, recent: b, numMessages: c};
		});
	var _elm_lang$virtual_dom$VirtualDom_History$RecentHistory = F3(
		function (a, b, c) {
			return {model: a, messages: b, numMessages: c};
		});
	var _elm_lang$virtual_dom$VirtualDom_History$empty = function (model) {
		return A3(
			_elm_lang$virtual_dom$VirtualDom_History$History,
			_elm_lang$core$Array$empty,
			A3(
				_elm_lang$virtual_dom$VirtualDom_History$RecentHistory,
				model,
				{ctor: '[]'},
				0),
			0);
	};
	var _elm_lang$virtual_dom$VirtualDom_History$Snapshot = F2(
		function (a, b) {
			return {model: a, messages: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_History$addRecent = F3(
		function (msg, newModel, _p19) {
			var _p20 = _p19;
			var _p23 = _p20.numMessages;
			var _p22 = _p20.model;
			var _p21 = _p20.messages;
			return _elm_lang$core$Native_Utils.eq(_p23, _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize) ? {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$virtual_dom$VirtualDom_History$Snapshot,
						_p22,
						_elm_lang$core$Array$fromList(_p21))),
				_1: A3(
					_elm_lang$virtual_dom$VirtualDom_History$RecentHistory,
					newModel,
					{
						ctor: '::',
						_0: msg,
						_1: {ctor: '[]'}
					},
					1)
			} : {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Maybe$Nothing,
				_1: A3(
					_elm_lang$virtual_dom$VirtualDom_History$RecentHistory,
					_p22,
					{ctor: '::', _0: msg, _1: _p21},
					_p23 + 1)
			};
		});
	var _elm_lang$virtual_dom$VirtualDom_History$add = F3(
		function (msg, model, _p24) {
			var _p25 = _p24;
			var _p28 = _p25.snapshots;
			var _p27 = _p25.numMessages;
			var _p26 = A3(_elm_lang$virtual_dom$VirtualDom_History$addRecent, msg, model, _p25.recent);
			if (_p26._0.ctor === 'Just') {
				return A3(
					_elm_lang$virtual_dom$VirtualDom_History$History,
					A2(_elm_lang$core$Array$push, _p26._0._0, _p28),
					_p26._1,
					_p27 + 1);
			} else {
				return A3(_elm_lang$virtual_dom$VirtualDom_History$History, _p28, _p26._1, _p27 + 1);
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_History$decoder = F2(
		function (initialModel, update) {
			var addMessage = F2(
				function (rawMsg, _p29) {
					var _p30 = _p29;
					var _p31 = _p30._0;
					var msg = _elm_lang$virtual_dom$VirtualDom_History$jsToElm(rawMsg);
					return {
						ctor: '_Tuple2',
						_0: A2(update, msg, _p31),
						_1: A3(_elm_lang$virtual_dom$VirtualDom_History$add, msg, _p31, _p30._1)
					};
				});
			var updateModel = function (rawMsgs) {
				return A3(
					_elm_lang$core$List$foldl,
					addMessage,
					{
						ctor: '_Tuple2',
						_0: initialModel,
						_1: _elm_lang$virtual_dom$VirtualDom_History$empty(initialModel)
					},
					rawMsgs);
			};
			return A2(
				_elm_lang$core$Json_Decode$map,
				updateModel,
				_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value));
		});
	var _elm_lang$virtual_dom$VirtualDom_History$Done = F2(
		function (a, b) {
			return {ctor: 'Done', _0: a, _1: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_History$Stepping = F2(
		function (a, b) {
			return {ctor: 'Stepping', _0: a, _1: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_History$getHelp = F3(
		function (update, msg, getResult) {
			var _p32 = getResult;
			if (_p32.ctor === 'Done') {
				return getResult;
			} else {
				var _p34 = _p32._0;
				var _p33 = _p32._1;
				return _elm_lang$core$Native_Utils.eq(_p34, 0) ? A2(
					_elm_lang$virtual_dom$VirtualDom_History$Done,
					msg,
					_elm_lang$core$Tuple$first(
						A2(update, msg, _p33))) : A2(
					_elm_lang$virtual_dom$VirtualDom_History$Stepping,
					_p34 - 1,
					_elm_lang$core$Tuple$first(
						A2(update, msg, _p33)));
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_History$get = F3(
		function (update, index, _p35) {
			var _p36 = _p35;
			var _p39 = _p36.recent;
			var snapshotMax = _p36.numMessages - _p39.numMessages;
			if (_elm_lang$core$Native_Utils.cmp(index, snapshotMax) > -1) {
				return _elm_lang$virtual_dom$VirtualDom_History$undone(
					A3(
						_elm_lang$core$List$foldr,
						_elm_lang$virtual_dom$VirtualDom_History$getHelp(update),
						A2(_elm_lang$virtual_dom$VirtualDom_History$Stepping, index - snapshotMax, _p39.model),
						_p39.messages));
			} else {
				var _p37 = A2(_elm_lang$core$Array$get, (index / _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize) | 0, _p36.snapshots);
				if (_p37.ctor === 'Nothing') {
					return _elm_lang$core$Native_Utils.crashCase(
						'VirtualDom.History',
						{
							start: {line: 165, column: 7},
							end: {line: 171, column: 95}
						},
						_p37)('UI should only let you ask for real indexes!');
				} else {
					return _elm_lang$virtual_dom$VirtualDom_History$undone(
						A3(
							_elm_lang$core$Array$foldr,
							_elm_lang$virtual_dom$VirtualDom_History$getHelp(update),
							A2(
								_elm_lang$virtual_dom$VirtualDom_History$Stepping,
								A2(_elm_lang$core$Basics$rem, index, _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize),
								_p37._0.model),
							_p37._0.messages));
				}
			}
		});

	var _elm_lang$virtual_dom$VirtualDom_Overlay$styles = A3(
		_elm_lang$virtual_dom$VirtualDom_Helpers$node,
		'style',
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('\n\n.elm-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  color: white;\n  pointer-events: none;\n  font-family: \'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif;\n}\n\n.elm-overlay-resume {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  text-align: center;\n  pointer-events: auto;\n  background-color: rgba(200, 200, 200, 0.7);\n}\n\n.elm-overlay-resume-words {\n  position: absolute;\n  top: calc(50% - 40px);\n  font-size: 80px;\n  line-height: 80px;\n  height: 80px;\n  width: 100%;\n}\n\n.elm-mini-controls {\n  position: fixed;\n  bottom: 0;\n  right: 6px;\n  border-radius: 4px;\n  background-color: rgb(61, 61, 61);\n  font-family: monospace;\n  pointer-events: auto;\n}\n\n.elm-mini-controls-button {\n  padding: 6px;\n  cursor: pointer;\n  text-align: center;\n  min-width: 24ch;\n}\n\n.elm-mini-controls-import-export {\n  padding: 4px 0;\n  font-size: 0.8em;\n  text-align: center;\n  background-color: rgb(50, 50, 50);\n}\n\n.elm-overlay-message {\n  position: absolute;\n  width: 600px;\n  height: 100%;\n  padding-left: calc(50% - 300px);\n  padding-right: calc(50% - 300px);\n  background-color: rgba(200, 200, 200, 0.7);\n  pointer-events: auto;\n}\n\n.elm-overlay-message-title {\n  font-size: 36px;\n  height: 80px;\n  background-color: rgb(50, 50, 50);\n  padding-left: 22px;\n  vertical-align: middle;\n  line-height: 80px;\n}\n\n.elm-overlay-message-details {\n  padding: 8px 20px;\n  overflow-y: auto;\n  max-height: calc(100% - 156px);\n  background-color: rgb(61, 61, 61);\n}\n\n.elm-overlay-message-details-type {\n  font-size: 1.5em;\n}\n\n.elm-overlay-message-details ul {\n  list-style-type: none;\n  padding-left: 20px;\n}\n\n.elm-overlay-message-details ul ul {\n  list-style-type: disc;\n  padding-left: 2em;\n}\n\n.elm-overlay-message-details li {\n  margin: 8px 0;\n}\n\n.elm-overlay-message-buttons {\n  height: 60px;\n  line-height: 60px;\n  text-align: right;\n  background-color: rgb(50, 50, 50);\n}\n\n.elm-overlay-message-buttons button {\n  margin-right: 20px;\n}\n\n'),
			_1: {ctor: '[]'}
		});
	var _elm_lang$virtual_dom$VirtualDom_Overlay$button = F2(
		function (msg, label) {
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$span,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(msg),
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$style(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'},
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(label),
					_1: {ctor: '[]'}
				});
		});
	var _elm_lang$virtual_dom$VirtualDom_Overlay$viewImportExport = F3(
		function (props, importMsg, exportMsg) {
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				props,
				{
					ctor: '::',
					_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$button, importMsg, 'Import'),
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' / '),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$button, exportMsg, 'Export'),
							_1: {ctor: '[]'}
						}
					}
				});
		});
	var _elm_lang$virtual_dom$VirtualDom_Overlay$viewMiniControls = F2(
		function (config, numMsgs) {
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-mini-controls'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$div,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(config.open),
							_1: {
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-mini-controls-button'),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
								A2(
									_elm_lang$core$Basics_ops['++'],
									'Explore History (',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(numMsgs),
										')'))),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A3(
							_elm_lang$virtual_dom$VirtualDom_Overlay$viewImportExport,
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-mini-controls-import-export'),
								_1: {ctor: '[]'}
							},
							config.importHistory,
							config.exportHistory),
						_1: {ctor: '[]'}
					}
				});
		});
	var _elm_lang$virtual_dom$VirtualDom_Overlay$addCommas = function (items) {
		var _p0 = items;
		if (_p0.ctor === '[]') {
			return '';
		} else {
			if (_p0._1.ctor === '[]') {
				return _p0._0;
			} else {
				if (_p0._1._1.ctor === '[]') {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						_p0._0,
						A2(_elm_lang$core$Basics_ops['++'], ' and ', _p0._1._0));
				} else {
					return A2(
						_elm_lang$core$String$join,
						', ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p0._1,
							{
								ctor: '::',
								_0: A2(_elm_lang$core$Basics_ops['++'], ' and ', _p0._0),
								_1: {ctor: '[]'}
							}));
				}
			}
		}
	};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$problemToString = function (problem) {
		var _p1 = problem;
		switch (_p1.ctor) {
			case 'Function':
				return 'functions';
			case 'Decoder':
				return 'JSON decoders';
			case 'Task':
				return 'tasks';
			case 'Process':
				return 'processes';
			case 'Socket':
				return 'web sockets';
			case 'Request':
				return 'HTTP requests';
			case 'Program':
				return 'programs';
			default:
				return 'virtual DOM values';
		}
	};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$goodNews2 = '\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n';
	var _elm_lang$virtual_dom$VirtualDom_Overlay$goodNews1 = '\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n';
	var _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode = function (name) {
		return A3(
			_elm_lang$virtual_dom$VirtualDom_Helpers$node,
			'code',
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(name),
				_1: {ctor: '[]'}
			});
	};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$viewMention = F2(
		function (tags, verbed) {
			var _p2 = A2(
				_elm_lang$core$List$map,
				_elm_lang$virtual_dom$VirtualDom_Overlay$viewCode,
				_elm_lang$core$List$reverse(tags));
			if (_p2.ctor === '[]') {
				return _elm_lang$virtual_dom$VirtualDom_Helpers$text('');
			} else {
				if (_p2._1.ctor === '[]') {
					return A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'li',
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(verbed),
							_1: {
								ctor: '::',
								_0: _p2._0,
								_1: {
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('.'),
									_1: {ctor: '[]'}
								}
							}
						});
				} else {
					if (_p2._1._1.ctor === '[]') {
						return A3(
							_elm_lang$virtual_dom$VirtualDom_Helpers$node,
							'li',
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(verbed),
								_1: {
									ctor: '::',
									_0: _p2._1._0,
									_1: {
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' and '),
										_1: {
											ctor: '::',
											_0: _p2._0,
											_1: {
												ctor: '::',
												_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('.'),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							});
					} else {
						return A3(
							_elm_lang$virtual_dom$VirtualDom_Helpers$node,
							'li',
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(verbed),
								_1: A2(
									_elm_lang$core$Basics_ops['++'],
									A2(
										_elm_lang$core$List$intersperse,
										_elm_lang$virtual_dom$VirtualDom_Helpers$text(', '),
										_elm_lang$core$List$reverse(_p2._1)),
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(', and '),
										_1: {
											ctor: '::',
											_0: _p2._0,
											_1: {
												ctor: '::',
												_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('.'),
												_1: {ctor: '[]'}
											}
										}
									})
							});
					}
				}
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Overlay$viewChange = function (change) {
		return A3(
			_elm_lang$virtual_dom$VirtualDom_Helpers$node,
			'li',
			{ctor: '[]'},
			function () {
				var _p3 = change;
				if (_p3.ctor === 'AliasChange') {
					return {
						ctor: '::',
						_0: A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$span,
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-details-type'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p3._0),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					};
				} else {
					return {
						ctor: '::',
						_0: A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$span,
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-details-type'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p3._0),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A3(
								_elm_lang$virtual_dom$VirtualDom_Helpers$node,
								'ul',
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewMention, _p3._1.removed, 'Removed '),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewMention, _p3._1.changed, 'Changed '),
										_1: {
											ctor: '::',
											_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewMention, _p3._1.added, 'Added '),
											_1: {ctor: '[]'}
										}
									}
								}),
							_1: {
								ctor: '::',
								_0: _p3._1.argsMatch ? _elm_lang$virtual_dom$VirtualDom_Helpers$text('') : _elm_lang$virtual_dom$VirtualDom_Helpers$text('This may be due to the fact that the type variable names changed.'),
								_1: {ctor: '[]'}
							}
						}
					};
				}
			}());
	};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$viewProblemType = function (_p4) {
		var _p5 = _p4;
		return A3(
			_elm_lang$virtual_dom$VirtualDom_Helpers$node,
			'li',
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p5.name),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
						A2(
							_elm_lang$core$Basics_ops['++'],
							' can contain ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$virtual_dom$VirtualDom_Overlay$addCommas(
									A2(_elm_lang$core$List$map, _elm_lang$virtual_dom$VirtualDom_Overlay$problemToString, _p5.problems)),
								'.'))),
					_1: {ctor: '[]'}
				}
			});
	};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$viewBadMetadata = function (_p6) {
		var _p7 = _p6;
		return {
			ctor: '::',
			_0: A3(
				_elm_lang$virtual_dom$VirtualDom_Helpers$node,
				'p',
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('The '),
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p7.message),
						_1: {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' type of your program cannot be reliably serialized for history files.'),
							_1: {ctor: '[]'}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: A3(
					_elm_lang$virtual_dom$VirtualDom_Helpers$node,
					'p',
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'ul',
						{ctor: '[]'},
						A2(_elm_lang$core$List$map, _elm_lang$virtual_dom$VirtualDom_Overlay$viewProblemType, _p7.problems)),
					_1: {
						ctor: '::',
						_0: A3(
							_elm_lang$virtual_dom$VirtualDom_Helpers$node,
							'p',
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_elm_lang$virtual_dom$VirtualDom_Overlay$goodNews1),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$virtual_dom$VirtualDom_Helpers$a,
										{
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$href('https://guide.elm-lang.org/types/union_types.html'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('union types'),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(', in your messages. From there, your '),
										_1: {
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode('update'),
											_1: {
												ctor: '::',
												_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_elm_lang$virtual_dom$VirtualDom_Overlay$goodNews2),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}),
						_1: {ctor: '[]'}
					}
				}
			}
		};
	};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$explanationRisky = '\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n';
	var _elm_lang$virtual_dom$VirtualDom_Overlay$explanationBad = '\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n';
	var _elm_lang$virtual_dom$VirtualDom_Overlay$viewReport = F2(
		function (isBad, report) {
			var _p8 = report;
			switch (_p8.ctor) {
				case 'CorruptHistory':
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('Looks like this history file is corrupt. I cannot understand it.'),
						_1: {ctor: '[]'}
					};
				case 'VersionChanged':
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'This history was created with Elm ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_p8._0,
									A2(
										_elm_lang$core$Basics_ops['++'],
										', but you are using Elm ',
										A2(_elm_lang$core$Basics_ops['++'], _p8._1, ' right now.'))))),
						_1: {ctor: '[]'}
					};
				case 'MessageChanged':
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
							A2(_elm_lang$core$Basics_ops['++'], 'To import some other history, the overall message type must', ' be the same. The old history has ')),
						_1: {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p8._0),
							_1: {
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' messages, but the new program works with '),
								_1: {
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p8._1),
									_1: {
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' messages.'),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					};
				default:
					return {
						ctor: '::',
						_0: A3(
							_elm_lang$virtual_dom$VirtualDom_Helpers$node,
							'p',
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
									isBad ? _elm_lang$virtual_dom$VirtualDom_Overlay$explanationBad : _elm_lang$virtual_dom$VirtualDom_Overlay$explanationRisky),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A3(
								_elm_lang$virtual_dom$VirtualDom_Helpers$node,
								'ul',
								{ctor: '[]'},
								A2(_elm_lang$core$List$map, _elm_lang$virtual_dom$VirtualDom_Overlay$viewChange, _p8._0)),
							_1: {ctor: '[]'}
						}
					};
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Overlay$viewResume = function (config) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-resume'),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(config.resume),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-resume-words'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('Click to Resume'),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$uploadDecoder = A3(
		_elm_lang$core$Json_Decode$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(_elm_lang$core$Json_Decode$field, 'metadata', _elm_lang$virtual_dom$VirtualDom_Metadata$decoder),
		A2(_elm_lang$core$Json_Decode$field, 'history', _elm_lang$core$Json_Decode$value));
	var _elm_lang$virtual_dom$VirtualDom_Overlay$close = F2(
		function (msg, state) {
			var _p9 = state;
			switch (_p9.ctor) {
				case 'None':
					return _elm_lang$core$Maybe$Nothing;
				case 'BadMetadata':
					return _elm_lang$core$Maybe$Nothing;
				case 'BadImport':
					return _elm_lang$core$Maybe$Nothing;
				default:
					var _p10 = msg;
					if (_p10.ctor === 'Cancel') {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Maybe$Just(_p9._1);
					}
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Overlay$isBlocking = function (state) {
		var _p11 = state;
		if (_p11.ctor === 'None') {
			return false;
		} else {
			return true;
		}
	};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$Config = F5(
		function (a, b, c, d, e) {
			return {resume: a, open: b, importHistory: c, exportHistory: d, wrap: e};
		});
	var _elm_lang$virtual_dom$VirtualDom_Overlay$RiskyImport = F2(
		function (a, b) {
			return {ctor: 'RiskyImport', _0: a, _1: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_Overlay$BadImport = function (a) {
		return {ctor: 'BadImport', _0: a};
	};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$corruptImport = _elm_lang$virtual_dom$VirtualDom_Overlay$BadImport(_elm_lang$virtual_dom$VirtualDom_Report$CorruptHistory);
	var _elm_lang$virtual_dom$VirtualDom_Overlay$assessImport = F2(
		function (metadata, jsonString) {
			var _p12 = A2(_elm_lang$core$Json_Decode$decodeString, _elm_lang$virtual_dom$VirtualDom_Overlay$uploadDecoder, jsonString);
			if (_p12.ctor === 'Err') {
				return _elm_lang$core$Result$Err(_elm_lang$virtual_dom$VirtualDom_Overlay$corruptImport);
			} else {
				var _p14 = _p12._0._1;
				var report = A2(_elm_lang$virtual_dom$VirtualDom_Metadata$check, _p12._0._0, metadata);
				var _p13 = _elm_lang$virtual_dom$VirtualDom_Report$evaluate(report);
				switch (_p13.ctor) {
					case 'Impossible':
						return _elm_lang$core$Result$Err(
							_elm_lang$virtual_dom$VirtualDom_Overlay$BadImport(report));
					case 'Risky':
						return _elm_lang$core$Result$Err(
							A2(_elm_lang$virtual_dom$VirtualDom_Overlay$RiskyImport, report, _p14));
					default:
						return _elm_lang$core$Result$Ok(_p14);
				}
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Overlay$BadMetadata = function (a) {
		return {ctor: 'BadMetadata', _0: a};
	};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$badMetadata = _elm_lang$virtual_dom$VirtualDom_Overlay$BadMetadata;
	var _elm_lang$virtual_dom$VirtualDom_Overlay$None = {ctor: 'None'};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$none = _elm_lang$virtual_dom$VirtualDom_Overlay$None;
	var _elm_lang$virtual_dom$VirtualDom_Overlay$Proceed = {ctor: 'Proceed'};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$Cancel = {ctor: 'Cancel'};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$viewButtons = function (buttons) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-buttons'),
				_1: {ctor: '[]'}
			},
			function () {
				var _p15 = buttons;
				if (_p15.ctor === 'Accept') {
					return {
						ctor: '::',
						_0: A3(
							_elm_lang$virtual_dom$VirtualDom_Helpers$node,
							'button',
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Overlay$Proceed),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p15._0),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					};
				} else {
					return {
						ctor: '::',
						_0: A3(
							_elm_lang$virtual_dom$VirtualDom_Helpers$node,
							'button',
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Overlay$Cancel),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p15._0),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A3(
								_elm_lang$virtual_dom$VirtualDom_Helpers$node,
								'button',
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Overlay$Proceed),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p15._1),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					};
				}
			}());
	};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$Message = {ctor: 'Message'};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$viewMessage = F4(
		function (config, title, details, buttons) {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$virtual_dom$VirtualDom_Overlay$Message,
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$div,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$div,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-title'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(title),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-details'),
										_1: {ctor: '[]'}
									},
									details),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$virtual_dom$VirtualDom_Helpers$map,
										config.wrap,
										_elm_lang$virtual_dom$VirtualDom_Overlay$viewButtons(buttons)),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			};
		});
	var _elm_lang$virtual_dom$VirtualDom_Overlay$Pause = {ctor: 'Pause'};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$Normal = {ctor: 'Normal'};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$Choose = F2(
		function (a, b) {
			return {ctor: 'Choose', _0: a, _1: b};
		});
	var _elm_lang$virtual_dom$VirtualDom_Overlay$Accept = function (a) {
		return {ctor: 'Accept', _0: a};
	};
	var _elm_lang$virtual_dom$VirtualDom_Overlay$viewHelp = F5(
		function (config, isPaused, isOpen, numMsgs, state) {
			var _p16 = state;
			switch (_p16.ctor) {
				case 'None':
					var miniControls = isOpen ? {ctor: '[]'} : {
						ctor: '::',
						_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewMiniControls, config, numMsgs),
						_1: {ctor: '[]'}
					};
					return {
						ctor: '_Tuple2',
						_0: isPaused ? _elm_lang$virtual_dom$VirtualDom_Overlay$Pause : _elm_lang$virtual_dom$VirtualDom_Overlay$Normal,
						_1: (isPaused && (!isOpen)) ? {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewResume(config),
							_1: miniControls
						} : miniControls
					};
				case 'BadMetadata':
					return A4(
						_elm_lang$virtual_dom$VirtualDom_Overlay$viewMessage,
						config,
						'Cannot use Import or Export',
						_elm_lang$virtual_dom$VirtualDom_Overlay$viewBadMetadata(_p16._0),
						_elm_lang$virtual_dom$VirtualDom_Overlay$Accept('Ok'));
				case 'BadImport':
					return A4(
						_elm_lang$virtual_dom$VirtualDom_Overlay$viewMessage,
						config,
						'Cannot Import History',
						A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewReport, true, _p16._0),
						_elm_lang$virtual_dom$VirtualDom_Overlay$Accept('Ok'));
				default:
					return A4(
						_elm_lang$virtual_dom$VirtualDom_Overlay$viewMessage,
						config,
						'Warning',
						A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewReport, false, _p16._0),
						A2(_elm_lang$virtual_dom$VirtualDom_Overlay$Choose, 'Cancel', 'Import Anyway'));
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Overlay$view = F5(
		function (config, isPaused, isOpen, numMsgs, state) {
			var _p17 = A5(_elm_lang$virtual_dom$VirtualDom_Overlay$viewHelp, config, isPaused, isOpen, numMsgs, state);
			var block = _p17._0;
			var nodes = _p17._1;
			return {
				ctor: '_Tuple2',
				_0: block,
				_1: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay'),
						_1: {ctor: '[]'}
					},
					{ctor: '::', _0: _elm_lang$virtual_dom$VirtualDom_Overlay$styles, _1: nodes})
			};
		});

	var _elm_lang$virtual_dom$VirtualDom_Debug$styles = A3(
		_elm_lang$virtual_dom$VirtualDom_Helpers$node,
		'style',
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('\n\nhtml {\n    overflow: hidden;\n    height: 100%;\n}\n\nbody {\n    height: 100%;\n    overflow: auto;\n}\n\n#debugger {\n  width: 100%\n  height: 100%;\n  font-family: monospace;\n}\n\n#values {\n  display: block;\n  float: left;\n  height: 100%;\n  width: calc(100% - 30ch);\n  margin: 0;\n  overflow: auto;\n  cursor: default;\n}\n\n.debugger-sidebar {\n  display: block;\n  float: left;\n  width: 30ch;\n  height: 100%;\n  color: white;\n  background-color: rgb(61, 61, 61);\n}\n\n.debugger-sidebar-controls {\n  width: 100%;\n  text-align: center;\n  background-color: rgb(50, 50, 50);\n}\n\n.debugger-sidebar-controls-import-export {\n  width: 100%;\n  height: 24px;\n  line-height: 24px;\n  font-size: 12px;\n}\n\n.debugger-sidebar-controls-resume {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  cursor: pointer;\n}\n\n.debugger-sidebar-controls-resume:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.debugger-sidebar-messages {\n  width: 100%;\n  overflow-y: auto;\n  height: calc(100% - 24px);\n}\n\n.debugger-sidebar-messages-paused {\n  width: 100%;\n  overflow-y: auto;\n  height: calc(100% - 54px);\n}\n\n.messages-entry {\n  cursor: pointer;\n  width: 100%;\n}\n\n.messages-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.messages-entry-selected, .messages-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.messages-entry-content {\n  width: calc(100% - 7ch);\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 1ch;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.messages-entry-index {\n  color: #666;\n  width: 5ch;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-right: 1ch;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n'),
			_1: {ctor: '[]'}
		});
	var _elm_lang$virtual_dom$VirtualDom_Debug$button = F2(
		function (msg, label) {
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$span,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(msg),
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$style(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'},
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(label),
					_1: {ctor: '[]'}
				});
		});
	var _elm_lang$virtual_dom$VirtualDom_Debug$getLatestModel = function (state) {
		var _p0 = state;
		if (_p0.ctor === 'Running') {
			return _p0._0;
		} else {
			return _p0._2;
		}
	};
	var _elm_lang$virtual_dom$VirtualDom_Debug$withGoodMetadata = F2(
		function (model, func) {
			var _p1 = model.metadata;
			if (_p1.ctor === 'Ok') {
				return func(_p1._0);
			} else {
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$badMetadata(_p1._0)
						}),
					{ctor: '[]'});
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Debug$Model = F6(
		function (a, b, c, d, e, f) {
			return {history: a, state: b, expando: c, metadata: d, overlay: e, isDebuggerOpen: f};
		});
	var _elm_lang$virtual_dom$VirtualDom_Debug$Paused = F3(
		function (a, b, c) {
			return {ctor: 'Paused', _0: a, _1: b, _2: c};
		});
	var _elm_lang$virtual_dom$VirtualDom_Debug$Running = function (a) {
		return {ctor: 'Running', _0: a};
	};
	var _elm_lang$virtual_dom$VirtualDom_Debug$loadNewHistory = F3(
		function (rawHistory, userUpdate, model) {
			var pureUserUpdate = F2(
				function (msg, userModel) {
					return _elm_lang$core$Tuple$first(
						A2(userUpdate, msg, userModel));
				});
			var initialUserModel = _elm_lang$virtual_dom$VirtualDom_History$initialModel(model.history);
			var decoder = A2(_elm_lang$virtual_dom$VirtualDom_History$decoder, initialUserModel, pureUserUpdate);
			var _p2 = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, rawHistory);
			if (_p2.ctor === 'Err') {
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$corruptImport}),
					{ctor: '[]'});
			} else {
				var _p3 = _p2._0._0;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							history: _p2._0._1,
							state: _elm_lang$virtual_dom$VirtualDom_Debug$Running(_p3),
							expando: _elm_lang$virtual_dom$VirtualDom_Expando$init(_p3),
							overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$none
						}),
					{ctor: '[]'});
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Debug$OverlayMsg = function (a) {
		return {ctor: 'OverlayMsg', _0: a};
	};
	var _elm_lang$virtual_dom$VirtualDom_Debug$Upload = function (a) {
		return {ctor: 'Upload', _0: a};
	};
	var _elm_lang$virtual_dom$VirtualDom_Debug$upload = A2(_elm_lang$core$Task$perform, _elm_lang$virtual_dom$VirtualDom_Debug$Upload, _elm_lang$virtual_dom$Native_Debug.upload);
	var _elm_lang$virtual_dom$VirtualDom_Debug$Export = {ctor: 'Export'};
	var _elm_lang$virtual_dom$VirtualDom_Debug$Import = {ctor: 'Import'};
	var _elm_lang$virtual_dom$VirtualDom_Debug$Down = {ctor: 'Down'};
	var _elm_lang$virtual_dom$VirtualDom_Debug$Up = {ctor: 'Up'};
	var _elm_lang$virtual_dom$VirtualDom_Debug$Close = {ctor: 'Close'};
	var _elm_lang$virtual_dom$VirtualDom_Debug$Open = {ctor: 'Open'};
	var _elm_lang$virtual_dom$VirtualDom_Debug$Jump = function (a) {
		return {ctor: 'Jump', _0: a};
	};
	var _elm_lang$virtual_dom$VirtualDom_Debug$Resume = {ctor: 'Resume'};
	var _elm_lang$virtual_dom$VirtualDom_Debug$overlayConfig = {resume: _elm_lang$virtual_dom$VirtualDom_Debug$Resume, open: _elm_lang$virtual_dom$VirtualDom_Debug$Open, importHistory: _elm_lang$virtual_dom$VirtualDom_Debug$Import, exportHistory: _elm_lang$virtual_dom$VirtualDom_Debug$Export, wrap: _elm_lang$virtual_dom$VirtualDom_Debug$OverlayMsg};
	var _elm_lang$virtual_dom$VirtualDom_Debug$viewIn = function (_p4) {
		var _p5 = _p4;
		var isPaused = function () {
			var _p6 = _p5.state;
			if (_p6.ctor === 'Running') {
				return false;
			} else {
				return true;
			}
		}();
		return A5(
			_elm_lang$virtual_dom$VirtualDom_Overlay$view,
			_elm_lang$virtual_dom$VirtualDom_Debug$overlayConfig,
			isPaused,
			_p5.isDebuggerOpen,
			_elm_lang$virtual_dom$VirtualDom_History$size(_p5.history),
			_p5.overlay);
	};
	var _elm_lang$virtual_dom$VirtualDom_Debug$resumeButton = A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Debug$Resume),
			_1: {
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('debugger-sidebar-controls-resume'),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('Resume'),
			_1: {ctor: '[]'}
		});
	var _elm_lang$virtual_dom$VirtualDom_Debug$viewResumeButton = function (maybeIndex) {
		var _p7 = maybeIndex;
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$virtual_dom$VirtualDom_Helpers$text('');
		} else {
			return _elm_lang$virtual_dom$VirtualDom_Debug$resumeButton;
		}
	};
	var _elm_lang$virtual_dom$VirtualDom_Debug$playButton = function (maybeIndex) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('debugger-sidebar-controls'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Debug$viewResumeButton(maybeIndex),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$div,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('debugger-sidebar-controls-import-export'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$button, _elm_lang$virtual_dom$VirtualDom_Debug$Import, 'Import'),
							_1: {
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' / '),
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$button, _elm_lang$virtual_dom$VirtualDom_Debug$Export, 'Export'),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			});
	};
	var _elm_lang$virtual_dom$VirtualDom_Debug$viewSidebar = F2(
		function (state, history) {
			var maybeIndex = function () {
				var _p8 = state;
				if (_p8.ctor === 'Running') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					return _elm_lang$core$Maybe$Just(_p8._0);
				}
			}();
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('debugger-sidebar'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$map,
						_elm_lang$virtual_dom$VirtualDom_Debug$Jump,
						A2(_elm_lang$virtual_dom$VirtualDom_History$view, maybeIndex, history)),
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Debug$playButton(maybeIndex),
						_1: {ctor: '[]'}
					}
				});
		});
	var _elm_lang$virtual_dom$VirtualDom_Debug$ExpandoMsg = function (a) {
		return {ctor: 'ExpandoMsg', _0: a};
	};
	var _elm_lang$virtual_dom$VirtualDom_Debug$viewOut = function (_p9) {
		var _p10 = _p9;
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$id('debugger'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Debug$styles,
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$viewSidebar, _p10.state, _p10.history),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$map,
							_elm_lang$virtual_dom$VirtualDom_Debug$ExpandoMsg,
							A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$div,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$id('values'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(_elm_lang$virtual_dom$VirtualDom_Expando$view, _elm_lang$core$Maybe$Nothing, _p10.expando),
									_1: {ctor: '[]'}
								})),
						_1: {ctor: '[]'}
					}
				}
			});
	};
	var _elm_lang$virtual_dom$VirtualDom_Debug$UserMsg = function (a) {
		return {ctor: 'UserMsg', _0: a};
	};
	var _elm_lang$virtual_dom$VirtualDom_Debug$wrapInit = F2(
		function (metadata, _p11) {
			var _p12 = _p11;
			var _p13 = _p12._0;
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				{
					history: _elm_lang$virtual_dom$VirtualDom_History$empty(_p13),
					state: _elm_lang$virtual_dom$VirtualDom_Debug$Running(_p13),
					expando: _elm_lang$virtual_dom$VirtualDom_Expando$init(_p13),
					metadata: _elm_lang$virtual_dom$VirtualDom_Metadata$decode(metadata),
					overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$none,
					isDebuggerOpen: false
				},
				{
					ctor: '::',
					_0: A2(_elm_lang$core$Platform_Cmd$map, _elm_lang$virtual_dom$VirtualDom_Debug$UserMsg, _p12._1),
					_1: {ctor: '[]'}
				});
		});
	var _elm_lang$virtual_dom$VirtualDom_Debug$wrapSubs = F2(
		function (userSubscriptions, _p14) {
			var _p15 = _p14;
			return A2(
				_elm_lang$core$Platform_Sub$map,
				_elm_lang$virtual_dom$VirtualDom_Debug$UserMsg,
				userSubscriptions(
					_elm_lang$virtual_dom$VirtualDom_Debug$getLatestModel(_p15.state)));
		});
	var _elm_lang$virtual_dom$VirtualDom_Debug$wrapView = F2(
		function (userView, _p16) {
			var _p17 = _p16;
			var currentModel = function () {
				var _p18 = _p17.state;
				if (_p18.ctor === 'Running') {
					return _p18._0;
				} else {
					return _p18._1;
				}
			}();
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$map,
				_elm_lang$virtual_dom$VirtualDom_Debug$UserMsg,
				userView(currentModel));
		});
	var _elm_lang$virtual_dom$VirtualDom_Debug$NoOp = {ctor: 'NoOp'};
	var _elm_lang$virtual_dom$VirtualDom_Debug$download = F2(
		function (metadata, history) {
			var json = _elm_lang$core$Json_Encode$object(
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'metadata',
						_1: _elm_lang$virtual_dom$VirtualDom_Metadata$encode(metadata)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'history',
							_1: _elm_lang$virtual_dom$VirtualDom_History$encode(history)
						},
						_1: {ctor: '[]'}
					}
				});
			var historyLength = _elm_lang$virtual_dom$VirtualDom_History$size(history);
			return A2(
				_elm_lang$core$Task$perform,
				function (_p19) {
					return _elm_lang$virtual_dom$VirtualDom_Debug$NoOp;
				},
				A2(_elm_lang$virtual_dom$Native_Debug.download, historyLength, json));
		});
	var _elm_lang$virtual_dom$VirtualDom_Debug$runIf = F2(
		function (bool, task) {
			return bool ? A2(
				_elm_lang$core$Task$perform,
				_elm_lang$core$Basics$always(_elm_lang$virtual_dom$VirtualDom_Debug$NoOp),
				task) : _elm_lang$core$Platform_Cmd$none;
		});
	var _elm_lang$virtual_dom$VirtualDom_Debug$updateUserMsg = F4(
		function (userUpdate, scrollTask, userMsg, _p20) {
			var _p21 = _p20;
			var _p25 = _p21.state;
			var _p24 = _p21;
			var userModel = _elm_lang$virtual_dom$VirtualDom_Debug$getLatestModel(_p25);
			var newHistory = A3(_elm_lang$virtual_dom$VirtualDom_History$add, userMsg, userModel, _p21.history);
			var _p22 = A2(userUpdate, userMsg, userModel);
			var newUserModel = _p22._0;
			var userCmds = _p22._1;
			var commands = A2(_elm_lang$core$Platform_Cmd$map, _elm_lang$virtual_dom$VirtualDom_Debug$UserMsg, userCmds);
			var _p23 = _p25;
			if (_p23.ctor === 'Running') {
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						_p24,
						{
							history: newHistory,
							state: _elm_lang$virtual_dom$VirtualDom_Debug$Running(newUserModel),
							expando: A2(_elm_lang$virtual_dom$VirtualDom_Expando$merge, newUserModel, _p21.expando)
						}),
					{
						ctor: '::',
						_0: commands,
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$runIf, _p24.isDebuggerOpen, scrollTask),
							_1: {ctor: '[]'}
						}
					});
			} else {
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						_p24,
						{
							history: newHistory,
							state: A3(_elm_lang$virtual_dom$VirtualDom_Debug$Paused, _p23._0, _p23._1, newUserModel)
						}),
					{
						ctor: '::',
						_0: commands,
						_1: {ctor: '[]'}
					});
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Debug$wrapUpdate = F4(
		function (userUpdate, scrollTask, msg, model) {
			wrapUpdate:
			while (true) {
				var _p26 = msg;
				switch (_p26.ctor) {
					case 'NoOp':
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{ctor: '[]'});
					case 'UserMsg':
						return A4(_elm_lang$virtual_dom$VirtualDom_Debug$updateUserMsg, userUpdate, scrollTask, _p26._0, model);
					case 'ExpandoMsg':
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									expando: A2(_elm_lang$virtual_dom$VirtualDom_Expando$update, _p26._0, model.expando)
								}),
							{ctor: '[]'});
					case 'Resume':
						var _p27 = model.state;
						if (_p27.ctor === 'Running') {
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								model,
								{ctor: '[]'});
						} else {
							var _p28 = _p27._2;
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								_elm_lang$core$Native_Utils.update(
									model,
									{
										state: _elm_lang$virtual_dom$VirtualDom_Debug$Running(_p28),
										expando: A2(_elm_lang$virtual_dom$VirtualDom_Expando$merge, _p28, model.expando)
									}),
								{
									ctor: '::',
									_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$runIf, model.isDebuggerOpen, scrollTask),
									_1: {ctor: '[]'}
								});
						}
					case 'Jump':
						var _p30 = _p26._0;
						var _p29 = A3(_elm_lang$virtual_dom$VirtualDom_History$get, userUpdate, _p30, model.history);
						var indexModel = _p29._0;
						var indexMsg = _p29._1;
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									state: A3(
										_elm_lang$virtual_dom$VirtualDom_Debug$Paused,
										_p30,
										indexModel,
										_elm_lang$virtual_dom$VirtualDom_Debug$getLatestModel(model.state)),
									expando: A2(_elm_lang$virtual_dom$VirtualDom_Expando$merge, indexModel, model.expando)
								}),
							{ctor: '[]'});
					case 'Open':
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{isDebuggerOpen: true}),
							{ctor: '[]'});
					case 'Close':
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{isDebuggerOpen: false}),
							{ctor: '[]'});
					case 'Up':
						var index = function () {
							var _p31 = model.state;
							if (_p31.ctor === 'Paused') {
								return _p31._0;
							} else {
								return _elm_lang$virtual_dom$VirtualDom_History$size(model.history);
							}
						}();
						if (_elm_lang$core$Native_Utils.cmp(index, 0) > 0) {
							var _v17 = userUpdate,
								_v18 = scrollTask,
								_v19 = _elm_lang$virtual_dom$VirtualDom_Debug$Jump(index - 1),
								_v20 = model;
							userUpdate = _v17;
							scrollTask = _v18;
							msg = _v19;
							model = _v20;
							continue wrapUpdate;
						} else {
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								model,
								{ctor: '[]'});
						}
					case 'Down':
						var _p32 = model.state;
						if (_p32.ctor === 'Running') {
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								model,
								{ctor: '[]'});
						} else {
							var _p33 = _p32._0;
							if (_elm_lang$core$Native_Utils.eq(
								_p33,
								_elm_lang$virtual_dom$VirtualDom_History$size(model.history) - 1)) {
								var _v22 = userUpdate,
									_v23 = scrollTask,
									_v24 = _elm_lang$virtual_dom$VirtualDom_Debug$Resume,
									_v25 = model;
								userUpdate = _v22;
								scrollTask = _v23;
								msg = _v24;
								model = _v25;
								continue wrapUpdate;
							} else {
								var _v26 = userUpdate,
									_v27 = scrollTask,
									_v28 = _elm_lang$virtual_dom$VirtualDom_Debug$Jump(_p33 + 1),
									_v29 = model;
								userUpdate = _v26;
								scrollTask = _v27;
								msg = _v28;
								model = _v29;
								continue wrapUpdate;
							}
						}
					case 'Import':
						return A2(
							_elm_lang$virtual_dom$VirtualDom_Debug$withGoodMetadata,
							model,
							function (_p34) {
								return A2(
									_elm_lang$core$Platform_Cmd_ops['!'],
									model,
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Debug$upload,
										_1: {ctor: '[]'}
									});
							});
					case 'Export':
						return A2(
							_elm_lang$virtual_dom$VirtualDom_Debug$withGoodMetadata,
							model,
							function (metadata) {
								return A2(
									_elm_lang$core$Platform_Cmd_ops['!'],
									model,
									{
										ctor: '::',
										_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$download, metadata, model.history),
										_1: {ctor: '[]'}
									});
							});
					case 'Upload':
						return A2(
							_elm_lang$virtual_dom$VirtualDom_Debug$withGoodMetadata,
							model,
							function (metadata) {
								var _p35 = A2(_elm_lang$virtual_dom$VirtualDom_Overlay$assessImport, metadata, _p26._0);
								if (_p35.ctor === 'Err') {
									return A2(
										_elm_lang$core$Platform_Cmd_ops['!'],
										_elm_lang$core$Native_Utils.update(
											model,
											{overlay: _p35._0}),
										{ctor: '[]'});
								} else {
									return A3(_elm_lang$virtual_dom$VirtualDom_Debug$loadNewHistory, _p35._0, userUpdate, model);
								}
							});
					default:
						var _p36 = A2(_elm_lang$virtual_dom$VirtualDom_Overlay$close, _p26._0, model.overlay);
						if (_p36.ctor === 'Nothing') {
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								_elm_lang$core$Native_Utils.update(
									model,
									{overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$none}),
								{ctor: '[]'});
						} else {
							return A3(_elm_lang$virtual_dom$VirtualDom_Debug$loadNewHistory, _p36._0, userUpdate, model);
						}
				}
			}
		});
	var _elm_lang$virtual_dom$VirtualDom_Debug$wrap = F2(
		function (metadata, _p37) {
			var _p38 = _p37;
			return {
				init: A2(_elm_lang$virtual_dom$VirtualDom_Debug$wrapInit, metadata, _p38.init),
				view: _elm_lang$virtual_dom$VirtualDom_Debug$wrapView(_p38.view),
				update: _elm_lang$virtual_dom$VirtualDom_Debug$wrapUpdate(_p38.update),
				viewIn: _elm_lang$virtual_dom$VirtualDom_Debug$viewIn,
				viewOut: _elm_lang$virtual_dom$VirtualDom_Debug$viewOut,
				subscriptions: _elm_lang$virtual_dom$VirtualDom_Debug$wrapSubs(_p38.subscriptions)
			};
		});
	var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags = F2(
		function (metadata, _p39) {
			var _p40 = _p39;
			return {
				init: function (flags) {
					return A2(
						_elm_lang$virtual_dom$VirtualDom_Debug$wrapInit,
						metadata,
						_p40.init(flags));
				},
				view: _elm_lang$virtual_dom$VirtualDom_Debug$wrapView(_p40.view),
				update: _elm_lang$virtual_dom$VirtualDom_Debug$wrapUpdate(_p40.update),
				viewIn: _elm_lang$virtual_dom$VirtualDom_Debug$viewIn,
				viewOut: _elm_lang$virtual_dom$VirtualDom_Debug$viewOut,
				subscriptions: _elm_lang$virtual_dom$VirtualDom_Debug$wrapSubs(_p40.subscriptions)
			};
		});

	var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
		return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
	};
	var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
		return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
	};
	var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
	var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
	var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
	var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
	var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
	var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
	var _elm_lang$virtual_dom$VirtualDom$on = F2(
		function (eventName, decoder) {
			return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
		});
	var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
	var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
	var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
	var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
	var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
	var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
	var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
	var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
	var _elm_lang$virtual_dom$VirtualDom$Options = F2(
		function (a, b) {
			return {stopPropagation: a, preventDefault: b};
		});
	var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
	var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

	var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
	var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
	var _elm_lang$html$Html$beginnerProgram = function (_p0) {
		var _p1 = _p0;
		return _elm_lang$html$Html$program(
			{
				init: A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_p1.model,
					{ctor: '[]'}),
				update: F2(
					function (msg, model) {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							A2(_p1.update, msg, model),
							{ctor: '[]'});
					}),
				view: _p1.view,
				subscriptions: function (_p2) {
					return _elm_lang$core$Platform_Sub$none;
				}
			});
	};
	var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
	var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
	var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
	var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
	var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
	var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
	var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
	var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
	var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
	var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
	var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
	var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
	var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
	var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
	var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
	var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
	var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
	var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
	var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
	var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
	var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
	var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
	var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
	var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
	var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
	var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
	var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
	var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
	var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
	var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
	var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
	var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
	var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
	var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
	var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
	var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
	var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
	var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
	var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
	var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
	var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
	var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
	var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
	var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
	var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
	var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
	var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
	var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
	var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
	var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
	var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
	var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
	var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
	var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
	var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
	var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
	var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
	var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
	var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
	var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
	var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
	var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
	var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
	var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
	var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
	var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
	var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
	var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
	var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
	var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
	var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
	var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
	var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
	var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
	var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
	var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
	var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
	var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
	var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
	var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
	var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
	var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
	var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
	var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
	var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
	var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
	var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
	var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
	var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
	var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
	var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
	var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
	var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
	var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
	var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
	var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
	var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
	var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
	var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
	var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
	var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

	var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
	var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
	var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
	};
	var _elm_lang$html$Html_Attributes$draggable = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
	};
	var _elm_lang$html$Html_Attributes$itemprop = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
	};
	var _elm_lang$html$Html_Attributes$tabindex = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'tabIndex',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$charset = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
	};
	var _elm_lang$html$Html_Attributes$height = function (value) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'height',
			_elm_lang$core$Basics$toString(value));
	};
	var _elm_lang$html$Html_Attributes$width = function (value) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'width',
			_elm_lang$core$Basics$toString(value));
	};
	var _elm_lang$html$Html_Attributes$formaction = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
	};
	var _elm_lang$html$Html_Attributes$list = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
	};
	var _elm_lang$html$Html_Attributes$minlength = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'minLength',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$maxlength = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'maxlength',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$size = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'size',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$form = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
	};
	var _elm_lang$html$Html_Attributes$cols = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'cols',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$rows = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'rows',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$challenge = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
	};
	var _elm_lang$html$Html_Attributes$media = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
	};
	var _elm_lang$html$Html_Attributes$rel = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
	};
	var _elm_lang$html$Html_Attributes$datetime = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
	};
	var _elm_lang$html$Html_Attributes$pubdate = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
	};
	var _elm_lang$html$Html_Attributes$colspan = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'colspan',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$rowspan = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'rowspan',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$manifest = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
	};
	var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
	var _elm_lang$html$Html_Attributes$stringProperty = F2(
		function (name, string) {
			return A2(
				_elm_lang$html$Html_Attributes$property,
				name,
				_elm_lang$core$Json_Encode$string(string));
		});
	var _elm_lang$html$Html_Attributes$class = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
	};
	var _elm_lang$html$Html_Attributes$id = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
	};
	var _elm_lang$html$Html_Attributes$title = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
	};
	var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'accessKey',
			_elm_lang$core$String$fromChar($char));
	};
	var _elm_lang$html$Html_Attributes$dir = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
	};
	var _elm_lang$html$Html_Attributes$dropzone = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
	};
	var _elm_lang$html$Html_Attributes$lang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
	};
	var _elm_lang$html$Html_Attributes$content = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
	};
	var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
	};
	var _elm_lang$html$Html_Attributes$language = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
	};
	var _elm_lang$html$Html_Attributes$src = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
	};
	var _elm_lang$html$Html_Attributes$alt = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
	};
	var _elm_lang$html$Html_Attributes$preload = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
	};
	var _elm_lang$html$Html_Attributes$poster = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
	};
	var _elm_lang$html$Html_Attributes$kind = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
	};
	var _elm_lang$html$Html_Attributes$srclang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
	};
	var _elm_lang$html$Html_Attributes$sandbox = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
	};
	var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
	};
	var _elm_lang$html$Html_Attributes$type_ = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
	};
	var _elm_lang$html$Html_Attributes$value = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
	};
	var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
	};
	var _elm_lang$html$Html_Attributes$placeholder = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
	};
	var _elm_lang$html$Html_Attributes$accept = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
	};
	var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
	};
	var _elm_lang$html$Html_Attributes$action = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
	};
	var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'autocomplete',
			bool ? 'on' : 'off');
	};
	var _elm_lang$html$Html_Attributes$enctype = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
	};
	var _elm_lang$html$Html_Attributes$method = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
	};
	var _elm_lang$html$Html_Attributes$name = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
	};
	var _elm_lang$html$Html_Attributes$pattern = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
	};
	var _elm_lang$html$Html_Attributes$for = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
	};
	var _elm_lang$html$Html_Attributes$max = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
	};
	var _elm_lang$html$Html_Attributes$min = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
	};
	var _elm_lang$html$Html_Attributes$step = function (n) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
	};
	var _elm_lang$html$Html_Attributes$wrap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
	};
	var _elm_lang$html$Html_Attributes$usemap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
	};
	var _elm_lang$html$Html_Attributes$shape = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
	};
	var _elm_lang$html$Html_Attributes$coords = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
	};
	var _elm_lang$html$Html_Attributes$keytype = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
	};
	var _elm_lang$html$Html_Attributes$align = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
	};
	var _elm_lang$html$Html_Attributes$cite = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
	};
	var _elm_lang$html$Html_Attributes$href = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
	};
	var _elm_lang$html$Html_Attributes$target = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
	};
	var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
	};
	var _elm_lang$html$Html_Attributes$hreflang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
	};
	var _elm_lang$html$Html_Attributes$ping = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
	};
	var _elm_lang$html$Html_Attributes$start = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'start',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$headers = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
	};
	var _elm_lang$html$Html_Attributes$scope = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
	};
	var _elm_lang$html$Html_Attributes$boolProperty = F2(
		function (name, bool) {
			return A2(
				_elm_lang$html$Html_Attributes$property,
				name,
				_elm_lang$core$Json_Encode$bool(bool));
		});
	var _elm_lang$html$Html_Attributes$hidden = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
	};
	var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
	};
	var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
	};
	var _elm_lang$html$Html_Attributes$async = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
	};
	var _elm_lang$html$Html_Attributes$defer = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
	};
	var _elm_lang$html$Html_Attributes$scoped = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
	};
	var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
	};
	var _elm_lang$html$Html_Attributes$controls = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
	};
	var _elm_lang$html$Html_Attributes$loop = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
	};
	var _elm_lang$html$Html_Attributes$default = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
	};
	var _elm_lang$html$Html_Attributes$seamless = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
	};
	var _elm_lang$html$Html_Attributes$checked = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
	};
	var _elm_lang$html$Html_Attributes$selected = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
	};
	var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
	};
	var _elm_lang$html$Html_Attributes$disabled = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
	};
	var _elm_lang$html$Html_Attributes$multiple = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
	};
	var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
	};
	var _elm_lang$html$Html_Attributes$readonly = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
	};
	var _elm_lang$html$Html_Attributes$required = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
	};
	var _elm_lang$html$Html_Attributes$ismap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
	};
	var _elm_lang$html$Html_Attributes$download = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
	};
	var _elm_lang$html$Html_Attributes$reversed = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
	};
	var _elm_lang$html$Html_Attributes$classList = function (list) {
		return _elm_lang$html$Html_Attributes$class(
			A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Tuple$first,
					A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
	};
	var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

	var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
	var _elm_lang$html$Html_Events$targetChecked = A2(
		_elm_lang$core$Json_Decode$at,
		{
			ctor: '::',
			_0: 'target',
			_1: {
				ctor: '::',
				_0: 'checked',
				_1: {ctor: '[]'}
			}
		},
		_elm_lang$core$Json_Decode$bool);
	var _elm_lang$html$Html_Events$targetValue = A2(
		_elm_lang$core$Json_Decode$at,
		{
			ctor: '::',
			_0: 'target',
			_1: {
				ctor: '::',
				_0: 'value',
				_1: {ctor: '[]'}
			}
		},
		_elm_lang$core$Json_Decode$string);
	var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
	var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
	var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
	var _elm_lang$html$Html_Events$onFocus = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'focus',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onBlur = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'blur',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
		_elm_lang$html$Html_Events$defaultOptions,
		{preventDefault: true});
	var _elm_lang$html$Html_Events$onSubmit = function (msg) {
		return A3(
			_elm_lang$html$Html_Events$onWithOptions,
			'submit',
			_elm_lang$html$Html_Events$onSubmitOptions,
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onCheck = function (tagger) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'change',
			A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
	};
	var _elm_lang$html$Html_Events$onInput = function (tagger) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'input',
			A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
	};
	var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseout',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseover',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseleave',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseenter',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseup',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mousedown',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'dblclick',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onClick = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'click',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$Options = F2(
		function (a, b) {
			return {stopPropagation: a, preventDefault: b};
		});

	var _elm_lang$html$Html_Keyed$node = _elm_lang$virtual_dom$VirtualDom$keyedNode;
	var _elm_lang$html$Html_Keyed$ol = _elm_lang$html$Html_Keyed$node('ol');
	var _elm_lang$html$Html_Keyed$ul = _elm_lang$html$Html_Keyed$node('ul');

	var _elm_lang$html$Html_Lazy$lazy3 = _elm_lang$virtual_dom$VirtualDom$lazy3;
	var _elm_lang$html$Html_Lazy$lazy2 = _elm_lang$virtual_dom$VirtualDom$lazy2;
	var _elm_lang$html$Html_Lazy$lazy = _elm_lang$virtual_dom$VirtualDom$lazy;

	var _elm_lang$http$Native_Http = function() {


	// ENCODING AND DECODING

	function encodeUri(string)
	{
		return encodeURIComponent(string);
	}

	function decodeUri(string)
	{
		try
		{
			return _elm_lang$core$Maybe$Just(decodeURIComponent(string));
		}
		catch(e)
		{
			return _elm_lang$core$Maybe$Nothing;
		}
	}


	// SEND REQUEST

	function toTask(request, maybeProgress)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			var xhr = new XMLHttpRequest();

			configureProgress(xhr, maybeProgress);

			xhr.addEventListener('error', function() {
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NetworkError' }));
			});
			xhr.addEventListener('timeout', function() {
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'Timeout' }));
			});
			xhr.addEventListener('load', function() {
				callback(handleResponse(xhr, request.expect.responseToResult));
			});

			try
			{
				xhr.open(request.method, request.url, true);
			}
			catch (e)
			{
				return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'BadUrl', _0: request.url }));
			}

			configureRequest(xhr, request);
			send(xhr, request.body);

			return function() { xhr.abort(); };
		});
	}

	function configureProgress(xhr, maybeProgress)
	{
		if (maybeProgress.ctor === 'Nothing')
		{
			return;
		}

		xhr.addEventListener('progress', function(event) {
			if (!event.lengthComputable)
			{
				return;
			}
			_elm_lang$core$Native_Scheduler.rawSpawn(maybeProgress._0({
				bytes: event.loaded,
				bytesExpected: event.total
			}));
		});
	}

	function configureRequest(xhr, request)
	{
		function setHeader(pair)
		{
			xhr.setRequestHeader(pair._0, pair._1);
		}

		A2(_elm_lang$core$List$map, setHeader, request.headers);
		xhr.responseType = request.expect.responseType;
		xhr.withCredentials = request.withCredentials;

		if (request.timeout.ctor === 'Just')
		{
			xhr.timeout = request.timeout._0;
		}
	}

	function send(xhr, body)
	{
		switch (body.ctor)
		{
			case 'EmptyBody':
				xhr.send();
				return;

			case 'StringBody':
				xhr.setRequestHeader('Content-Type', body._0);
				xhr.send(body._1);
				return;

			case 'FormDataBody':
				xhr.send(body._0);
				return;
		}
	}


	// RESPONSES

	function handleResponse(xhr, responseToResult)
	{
		var response = toResponse(xhr);

		if (xhr.status < 200 || 300 <= xhr.status)
		{
			response.body = xhr.responseText;
			return _elm_lang$core$Native_Scheduler.fail({
				ctor: 'BadStatus',
				_0: response
			});
		}

		var result = responseToResult(response);

		if (result.ctor === 'Ok')
		{
			return _elm_lang$core$Native_Scheduler.succeed(result._0);
		}
		else
		{
			response.body = xhr.responseText;
			return _elm_lang$core$Native_Scheduler.fail({
				ctor: 'BadPayload',
				_0: result._0,
				_1: response
			});
		}
	}

	function toResponse(xhr)
	{
		return {
			status: { code: xhr.status, message: xhr.statusText },
			headers: parseHeaders(xhr.getAllResponseHeaders()),
			url: xhr.responseURL,
			body: xhr.response
		};
	}

	function parseHeaders(rawHeaders)
	{
		var headers = _elm_lang$core$Dict$empty;

		if (!rawHeaders)
		{
			return headers;
		}

		var headerPairs = rawHeaders.split('\u000d\u000a');
		for (var i = headerPairs.length; i--; )
		{
			var headerPair = headerPairs[i];
			var index = headerPair.indexOf('\u003a\u0020');
			if (index > 0)
			{
				var key = headerPair.substring(0, index);
				var value = headerPair.substring(index + 2);

				headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
					if (oldValue.ctor === 'Just')
					{
						return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
					}
					return _elm_lang$core$Maybe$Just(value);
				}, headers);
			}
		}

		return headers;
	}


	// EXPECTORS

	function expectStringResponse(responseToResult)
	{
		return {
			responseType: 'text',
			responseToResult: responseToResult
		};
	}

	function mapExpect(func, expect)
	{
		return {
			responseType: expect.responseType,
			responseToResult: function(response) {
				var convertedResponse = expect.responseToResult(response);
				return A2(_elm_lang$core$Result$map, func, convertedResponse);
			}
		};
	}


	// BODY

	function multipart(parts)
	{
		var formData = new FormData();

		while (parts.ctor !== '[]')
		{
			var part = parts._0;
			formData.append(part._0, part._1);
			parts = parts._1;
		}

		return { ctor: 'FormDataBody', _0: formData };
	}

	return {
		toTask: F2(toTask),
		expectStringResponse: expectStringResponse,
		mapExpect: F2(mapExpect),
		multipart: multipart,
		encodeUri: encodeUri,
		decodeUri: decodeUri
	};

	}();

	var _elm_lang$http$Http_Internal$map = F2(
		function (func, request) {
			return _elm_lang$core$Native_Utils.update(
				request,
				{
					expect: A2(_elm_lang$http$Native_Http.mapExpect, func, request.expect)
				});
		});
	var _elm_lang$http$Http_Internal$RawRequest = F7(
		function (a, b, c, d, e, f, g) {
			return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g};
		});
	var _elm_lang$http$Http_Internal$Request = function (a) {
		return {ctor: 'Request', _0: a};
	};
	var _elm_lang$http$Http_Internal$Expect = {ctor: 'Expect'};
	var _elm_lang$http$Http_Internal$FormDataBody = {ctor: 'FormDataBody'};
	var _elm_lang$http$Http_Internal$StringBody = F2(
		function (a, b) {
			return {ctor: 'StringBody', _0: a, _1: b};
		});
	var _elm_lang$http$Http_Internal$EmptyBody = {ctor: 'EmptyBody'};
	var _elm_lang$http$Http_Internal$Header = F2(
		function (a, b) {
			return {ctor: 'Header', _0: a, _1: b};
		});

	var _elm_lang$http$Http$decodeUri = _elm_lang$http$Native_Http.decodeUri;
	var _elm_lang$http$Http$encodeUri = _elm_lang$http$Native_Http.encodeUri;
	var _elm_lang$http$Http$expectStringResponse = _elm_lang$http$Native_Http.expectStringResponse;
	var _elm_lang$http$Http$expectJson = function (decoder) {
		return _elm_lang$http$Http$expectStringResponse(
			function (response) {
				return A2(_elm_lang$core$Json_Decode$decodeString, decoder, response.body);
			});
	};
	var _elm_lang$http$Http$expectString = _elm_lang$http$Http$expectStringResponse(
		function (response) {
			return _elm_lang$core$Result$Ok(response.body);
		});
	var _elm_lang$http$Http$multipartBody = _elm_lang$http$Native_Http.multipart;
	var _elm_lang$http$Http$stringBody = _elm_lang$http$Http_Internal$StringBody;
	var _elm_lang$http$Http$jsonBody = function (value) {
		return A2(
			_elm_lang$http$Http_Internal$StringBody,
			'application/json',
			A2(_elm_lang$core$Json_Encode$encode, 0, value));
	};
	var _elm_lang$http$Http$emptyBody = _elm_lang$http$Http_Internal$EmptyBody;
	var _elm_lang$http$Http$header = _elm_lang$http$Http_Internal$Header;
	var _elm_lang$http$Http$request = _elm_lang$http$Http_Internal$Request;
	var _elm_lang$http$Http$post = F3(
		function (url, body, decoder) {
			return _elm_lang$http$Http$request(
				{
					method: 'POST',
					headers: {ctor: '[]'},
					url: url,
					body: body,
					expect: _elm_lang$http$Http$expectJson(decoder),
					timeout: _elm_lang$core$Maybe$Nothing,
					withCredentials: false
				});
		});
	var _elm_lang$http$Http$get = F2(
		function (url, decoder) {
			return _elm_lang$http$Http$request(
				{
					method: 'GET',
					headers: {ctor: '[]'},
					url: url,
					body: _elm_lang$http$Http$emptyBody,
					expect: _elm_lang$http$Http$expectJson(decoder),
					timeout: _elm_lang$core$Maybe$Nothing,
					withCredentials: false
				});
		});
	var _elm_lang$http$Http$getString = function (url) {
		return _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {ctor: '[]'},
				url: url,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectString,
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	};
	var _elm_lang$http$Http$toTask = function (_p0) {
		var _p1 = _p0;
		return A2(_elm_lang$http$Native_Http.toTask, _p1._0, _elm_lang$core$Maybe$Nothing);
	};
	var _elm_lang$http$Http$send = F2(
		function (resultToMessage, request) {
			return A2(
				_elm_lang$core$Task$attempt,
				resultToMessage,
				_elm_lang$http$Http$toTask(request));
		});
	var _elm_lang$http$Http$Response = F4(
		function (a, b, c, d) {
			return {url: a, status: b, headers: c, body: d};
		});
	var _elm_lang$http$Http$BadPayload = F2(
		function (a, b) {
			return {ctor: 'BadPayload', _0: a, _1: b};
		});
	var _elm_lang$http$Http$BadStatus = function (a) {
		return {ctor: 'BadStatus', _0: a};
	};
	var _elm_lang$http$Http$NetworkError = {ctor: 'NetworkError'};
	var _elm_lang$http$Http$Timeout = {ctor: 'Timeout'};
	var _elm_lang$http$Http$BadUrl = function (a) {
		return {ctor: 'BadUrl', _0: a};
	};
	var _elm_lang$http$Http$StringPart = F2(
		function (a, b) {
			return {ctor: 'StringPart', _0: a, _1: b};
		});
	var _elm_lang$http$Http$stringPart = _elm_lang$http$Http$StringPart;

	var _elm_lang$navigation$Native_Navigation = function() {

	function go(n)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			if (n !== 0)
			{
				history.go(n);
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}

	function pushState(url)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			history.pushState({}, '', url);
			callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
		});
	}

	function replaceState(url)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			history.replaceState({}, '', url);
			callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
		});
	}

	function getLocation()
	{
		var location = document.location;

		return {
			href: location.href,
			host: location.host,
			hostname: location.hostname,
			protocol: location.protocol,
			origin: location.origin,
			port_: location.port,
			pathname: location.pathname,
			search: location.search,
			hash: location.hash,
			username: location.username,
			password: location.password
		};
	}


	return {
		go: go,
		pushState: pushState,
		replaceState: replaceState,
		getLocation: getLocation
	};

	}();

	var _elm_lang$navigation$Navigation$replaceState = _elm_lang$navigation$Native_Navigation.replaceState;
	var _elm_lang$navigation$Navigation$pushState = _elm_lang$navigation$Native_Navigation.pushState;
	var _elm_lang$navigation$Navigation$go = _elm_lang$navigation$Native_Navigation.go;
	var _elm_lang$navigation$Navigation$spawnPopState = function (router) {
		return _elm_lang$core$Process$spawn(
			A3(
				_elm_lang$dom$Dom_LowLevel$onWindow,
				'popstate',
				_elm_lang$core$Json_Decode$value,
				function (_p0) {
					return A2(
						_elm_lang$core$Platform$sendToSelf,
						router,
						_elm_lang$navigation$Native_Navigation.getLocation(
							{ctor: '_Tuple0'}));
				}));
	};
	var _elm_lang$navigation$Navigation_ops = _elm_lang$navigation$Navigation_ops || {};
	_elm_lang$navigation$Navigation_ops['&>'] = F2(
		function (task1, task2) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p1) {
					return task2;
				},
				task1);
		});
	var _elm_lang$navigation$Navigation$notify = F3(
		function (router, subs, location) {
			var send = function (_p2) {
				var _p3 = _p2;
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p3._0(location));
			};
			return A2(
				_elm_lang$navigation$Navigation_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, subs)),
				_elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'}));
		});
	var _elm_lang$navigation$Navigation$onSelfMsg = F3(
		function (router, location, state) {
			return A2(
				_elm_lang$navigation$Navigation_ops['&>'],
				A3(_elm_lang$navigation$Navigation$notify, router, state.subs, location),
				_elm_lang$core$Task$succeed(state));
		});
	var _elm_lang$navigation$Navigation$cmdHelp = F3(
		function (router, subs, cmd) {
			var _p4 = cmd;
			switch (_p4.ctor) {
				case 'Jump':
					return _elm_lang$navigation$Navigation$go(_p4._0);
				case 'New':
					return A2(
						_elm_lang$core$Task$andThen,
						A2(_elm_lang$navigation$Navigation$notify, router, subs),
						_elm_lang$navigation$Navigation$pushState(_p4._0));
				default:
					return A2(
						_elm_lang$core$Task$andThen,
						A2(_elm_lang$navigation$Navigation$notify, router, subs),
						_elm_lang$navigation$Navigation$replaceState(_p4._0));
			}
		});
	var _elm_lang$navigation$Navigation$subscription = _elm_lang$core$Native_Platform.leaf('Navigation');
	var _elm_lang$navigation$Navigation$command = _elm_lang$core$Native_Platform.leaf('Navigation');
	var _elm_lang$navigation$Navigation$Location = function (a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return function (i) {
										return function (j) {
											return function (k) {
												return {href: a, host: b, hostname: c, protocol: d, origin: e, port_: f, pathname: g, search: h, hash: i, username: j, password: k};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _elm_lang$navigation$Navigation$State = F2(
		function (a, b) {
			return {subs: a, process: b};
		});
	var _elm_lang$navigation$Navigation$init = _elm_lang$core$Task$succeed(
		A2(
			_elm_lang$navigation$Navigation$State,
			{ctor: '[]'},
			_elm_lang$core$Maybe$Nothing));
	var _elm_lang$navigation$Navigation$onEffects = F4(
		function (router, cmds, subs, _p5) {
			var _p6 = _p5;
			var _p9 = _p6.process;
			var stepState = function () {
				var _p7 = {ctor: '_Tuple2', _0: subs, _1: _p9};
				_v3_2:
				do {
					if (_p7._0.ctor === '[]') {
						if (_p7._1.ctor === 'Just') {
							return A2(
								_elm_lang$navigation$Navigation_ops['&>'],
								_elm_lang$core$Process$kill(_p7._1._0),
								_elm_lang$core$Task$succeed(
									A2(_elm_lang$navigation$Navigation$State, subs, _elm_lang$core$Maybe$Nothing)));
						} else {
							break _v3_2;
						}
					} else {
						if (_p7._1.ctor === 'Nothing') {
							return A2(
								_elm_lang$core$Task$map,
								function (_p8) {
									return A2(
										_elm_lang$navigation$Navigation$State,
										subs,
										_elm_lang$core$Maybe$Just(_p8));
								},
								_elm_lang$navigation$Navigation$spawnPopState(router));
						} else {
							break _v3_2;
						}
					}
				} while(false);
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$navigation$Navigation$State, subs, _p9));
			}();
			return A2(
				_elm_lang$navigation$Navigation_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						A2(_elm_lang$navigation$Navigation$cmdHelp, router, subs),
						cmds)),
				stepState);
		});
	var _elm_lang$navigation$Navigation$Modify = function (a) {
		return {ctor: 'Modify', _0: a};
	};
	var _elm_lang$navigation$Navigation$modifyUrl = function (url) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$Modify(url));
	};
	var _elm_lang$navigation$Navigation$New = function (a) {
		return {ctor: 'New', _0: a};
	};
	var _elm_lang$navigation$Navigation$newUrl = function (url) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$New(url));
	};
	var _elm_lang$navigation$Navigation$Jump = function (a) {
		return {ctor: 'Jump', _0: a};
	};
	var _elm_lang$navigation$Navigation$back = function (n) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$Jump(0 - n));
	};
	var _elm_lang$navigation$Navigation$forward = function (n) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$Jump(n));
	};
	var _elm_lang$navigation$Navigation$cmdMap = F2(
		function (_p10, myCmd) {
			var _p11 = myCmd;
			switch (_p11.ctor) {
				case 'Jump':
					return _elm_lang$navigation$Navigation$Jump(_p11._0);
				case 'New':
					return _elm_lang$navigation$Navigation$New(_p11._0);
				default:
					return _elm_lang$navigation$Navigation$Modify(_p11._0);
			}
		});
	var _elm_lang$navigation$Navigation$Monitor = function (a) {
		return {ctor: 'Monitor', _0: a};
	};
	var _elm_lang$navigation$Navigation$program = F2(
		function (locationToMessage, stuff) {
			var init = stuff.init(
				_elm_lang$navigation$Native_Navigation.getLocation(
					{ctor: '_Tuple0'}));
			var subs = function (model) {
				return _elm_lang$core$Platform_Sub$batch(
					{
						ctor: '::',
						_0: _elm_lang$navigation$Navigation$subscription(
							_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
						_1: {
							ctor: '::',
							_0: stuff.subscriptions(model),
							_1: {ctor: '[]'}
						}
					});
			};
			return _elm_lang$html$Html$program(
				{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
		});
	var _elm_lang$navigation$Navigation$programWithFlags = F2(
		function (locationToMessage, stuff) {
			var init = function (flags) {
				return A2(
					stuff.init,
					flags,
					_elm_lang$navigation$Native_Navigation.getLocation(
						{ctor: '_Tuple0'}));
			};
			var subs = function (model) {
				return _elm_lang$core$Platform_Sub$batch(
					{
						ctor: '::',
						_0: _elm_lang$navigation$Navigation$subscription(
							_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
						_1: {
							ctor: '::',
							_0: stuff.subscriptions(model),
							_1: {ctor: '[]'}
						}
					});
			};
			return _elm_lang$html$Html$programWithFlags(
				{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
		});
	var _elm_lang$navigation$Navigation$subMap = F2(
		function (func, _p12) {
			var _p13 = _p12;
			return _elm_lang$navigation$Navigation$Monitor(
				function (_p14) {
					return func(
						_p13._0(_p14));
				});
		});
	_elm_lang$core$Native_Platform.effectManagers['Navigation'] = {pkg: 'elm-lang/navigation', init: _elm_lang$navigation$Navigation$init, onEffects: _elm_lang$navigation$Navigation$onEffects, onSelfMsg: _elm_lang$navigation$Navigation$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$navigation$Navigation$cmdMap, subMap: _elm_lang$navigation$Navigation$subMap};

	var _evancz$elm_sortable_table$Table$findSorter = F2(
		function (selectedColumn, columnData) {
			findSorter:
			while (true) {
				var _p0 = columnData;
				if (_p0.ctor === '[]') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_elm_lang$core$Native_Utils.eq(_p0._0.name, selectedColumn)) {
						return _elm_lang$core$Maybe$Just(_p0._0.sorter);
					} else {
						var _v1 = selectedColumn,
							_v2 = _p0._1;
						selectedColumn = _v1;
						columnData = _v2;
						continue findSorter;
					}
				}
			}
		});
	var _evancz$elm_sortable_table$Table$applySorter = F3(
		function (isReversed, sorter, data) {
			var _p1 = sorter;
			switch (_p1.ctor) {
				case 'None':
					return data;
				case 'Increasing':
					return _p1._0(data);
				case 'Decreasing':
					return _elm_lang$core$List$reverse(
						_p1._0(data));
				case 'IncOrDec':
					var _p2 = _p1._0;
					return isReversed ? _elm_lang$core$List$reverse(
						_p2(data)) : _p2(data);
				default:
					var _p3 = _p1._0;
					return isReversed ? _p3(data) : _elm_lang$core$List$reverse(
						_p3(data));
			}
		});
	var _evancz$elm_sortable_table$Table$sort = F3(
		function (_p4, columnData, data) {
			var _p5 = _p4;
			var _p6 = A2(_evancz$elm_sortable_table$Table$findSorter, _p5._0, columnData);
			if (_p6.ctor === 'Nothing') {
				return data;
			} else {
				return A3(_evancz$elm_sortable_table$Table$applySorter, _p5._1, _p6._0, data);
			}
		});
	var _evancz$elm_sortable_table$Table$viewCell = F2(
		function (data, _p7) {
			var _p8 = _p7;
			var details = _p8.viewData(data);
			return A2(_elm_lang$html$Html$td, details.attributes, details.children);
		});
	var _evancz$elm_sortable_table$Table$viewRowHelp = F3(
		function (columns, toRowAttrs, data) {
			return A2(
				_elm_lang$html$Html$tr,
				toRowAttrs(data),
				A2(
					_elm_lang$core$List$map,
					_evancz$elm_sortable_table$Table$viewCell(data),
					columns));
		});
	var _evancz$elm_sortable_table$Table$viewRow = F4(
		function (toId, columns, toRowAttrs, data) {
			return {
				ctor: '_Tuple2',
				_0: toId(data),
				_1: A4(_elm_lang$html$Html_Lazy$lazy3, _evancz$elm_sortable_table$Table$viewRowHelp, columns, toRowAttrs, data)
			};
		});
	var _evancz$elm_sortable_table$Table$simpleRowAttrs = function (_p9) {
		return {ctor: '[]'};
	};
	var _evancz$elm_sortable_table$Table$lightGrey = function (symbol) {
		return A2(
			_elm_lang$html$Html$span,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'color', _1: '#ccc'},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(
					A2(_elm_lang$core$Basics_ops['++'], ' ', symbol)),
				_1: {ctor: '[]'}
			});
	};
	var _evancz$elm_sortable_table$Table$darkGrey = function (symbol) {
		return A2(
			_elm_lang$html$Html$span,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'color', _1: '#555'},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(
					A2(_elm_lang$core$Basics_ops['++'], ' ', symbol)),
				_1: {ctor: '[]'}
			});
	};
	var _evancz$elm_sortable_table$Table$simpleTheadHelp = function (_p10) {
		var _p11 = _p10;
		var _p13 = _p11._0;
		var content = function () {
			var _p12 = _p11._1;
			switch (_p12.ctor) {
				case 'Unsortable':
					return {
						ctor: '::',
						_0: _elm_lang$html$Html$text(_p13),
						_1: {ctor: '[]'}
					};
				case 'Sortable':
					return {
						ctor: '::',
						_0: _elm_lang$html$Html$text(_p13),
						_1: {
							ctor: '::',
							_0: _p12._0 ? _evancz$elm_sortable_table$Table$darkGrey('↓') : _evancz$elm_sortable_table$Table$lightGrey('↓'),
							_1: {ctor: '[]'}
						}
					};
				default:
					if (_p12._0.ctor === 'Nothing') {
						return {
							ctor: '::',
							_0: _elm_lang$html$Html$text(_p13),
							_1: {
								ctor: '::',
								_0: _evancz$elm_sortable_table$Table$lightGrey('↕'),
								_1: {ctor: '[]'}
							}
						};
					} else {
						return {
							ctor: '::',
							_0: _elm_lang$html$Html$text(_p13),
							_1: {
								ctor: '::',
								_0: _evancz$elm_sortable_table$Table$darkGrey(
									_p12._0._0 ? '↑' : '↓'),
								_1: {ctor: '[]'}
							}
						};
					}
			}
		}();
		return A2(
			_elm_lang$html$Html$th,
			{
				ctor: '::',
				_0: _p11._2,
				_1: {ctor: '[]'}
			},
			content);
	};
	var _evancz$elm_sortable_table$Table$Customizations = F6(
		function (a, b, c, d, e, f) {
			return {tableAttrs: a, caption: b, thead: c, tfoot: d, tbodyAttrs: e, rowAttrs: f};
		});
	var _evancz$elm_sortable_table$Table$HtmlDetails = F2(
		function (a, b) {
			return {attributes: a, children: b};
		});
	var _evancz$elm_sortable_table$Table$simpleThead = function (headers) {
		return A2(
			_evancz$elm_sortable_table$Table$HtmlDetails,
			{ctor: '[]'},
			A2(_elm_lang$core$List$map, _evancz$elm_sortable_table$Table$simpleTheadHelp, headers));
	};
	var _evancz$elm_sortable_table$Table$defaultCustomizations = {
		tableAttrs: {ctor: '[]'},
		caption: _elm_lang$core$Maybe$Nothing,
		thead: _evancz$elm_sortable_table$Table$simpleThead,
		tfoot: _elm_lang$core$Maybe$Nothing,
		tbodyAttrs: {ctor: '[]'},
		rowAttrs: _evancz$elm_sortable_table$Table$simpleRowAttrs
	};
	var _evancz$elm_sortable_table$Table$textDetails = function (str) {
		return A2(
			_evancz$elm_sortable_table$Table$HtmlDetails,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(str),
				_1: {ctor: '[]'}
			});
	};
	var _evancz$elm_sortable_table$Table$ColumnData = F3(
		function (a, b, c) {
			return {name: a, viewData: b, sorter: c};
		});
	var _evancz$elm_sortable_table$Table$State = F2(
		function (a, b) {
			return {ctor: 'State', _0: a, _1: b};
		});
	var _evancz$elm_sortable_table$Table$initialSort = function (header) {
		return A2(_evancz$elm_sortable_table$Table$State, header, false);
	};
	var _evancz$elm_sortable_table$Table$onClick = F3(
		function (name, isReversed, toMsg) {
			return A2(
				_elm_lang$html$Html_Events$on,
				'click',
				A2(
					_elm_lang$core$Json_Decode$map,
					toMsg,
					A3(
						_elm_lang$core$Json_Decode$map2,
						_evancz$elm_sortable_table$Table$State,
						_elm_lang$core$Json_Decode$succeed(name),
						_elm_lang$core$Json_Decode$succeed(isReversed))));
		});
	var _evancz$elm_sortable_table$Table$Config = function (a) {
		return {ctor: 'Config', _0: a};
	};
	var _evancz$elm_sortable_table$Table$config = function (_p14) {
		var _p15 = _p14;
		return _evancz$elm_sortable_table$Table$Config(
			{
				toId: _p15.toId,
				toMsg: _p15.toMsg,
				columns: A2(
					_elm_lang$core$List$map,
					function (_p16) {
						var _p17 = _p16;
						return _p17._0;
					},
					_p15.columns),
				customizations: _evancz$elm_sortable_table$Table$defaultCustomizations
			});
	};
	var _evancz$elm_sortable_table$Table$customConfig = function (_p18) {
		var _p19 = _p18;
		return _evancz$elm_sortable_table$Table$Config(
			{
				toId: _p19.toId,
				toMsg: _p19.toMsg,
				columns: A2(
					_elm_lang$core$List$map,
					function (_p20) {
						var _p21 = _p20;
						return _p21._0;
					},
					_p19.columns),
				customizations: _p19.customizations
			});
	};
	var _evancz$elm_sortable_table$Table$Reversible = function (a) {
		return {ctor: 'Reversible', _0: a};
	};
	var _evancz$elm_sortable_table$Table$Sortable = function (a) {
		return {ctor: 'Sortable', _0: a};
	};
	var _evancz$elm_sortable_table$Table$Unsortable = {ctor: 'Unsortable'};
	var _evancz$elm_sortable_table$Table$toHeaderInfo = F3(
		function (_p23, toMsg, _p22) {
			var _p24 = _p23;
			var _p29 = _p24._0;
			var _p28 = _p24._1;
			var _p25 = _p22;
			var _p27 = _p25.name;
			var _p26 = _p25.sorter;
			switch (_p26.ctor) {
				case 'None':
					return {
						ctor: '_Tuple3',
						_0: _p27,
						_1: _evancz$elm_sortable_table$Table$Unsortable,
						_2: A3(_evancz$elm_sortable_table$Table$onClick, _p29, _p28, toMsg)
					};
				case 'Increasing':
					return {
						ctor: '_Tuple3',
						_0: _p27,
						_1: _evancz$elm_sortable_table$Table$Sortable(
							_elm_lang$core$Native_Utils.eq(_p27, _p29)),
						_2: A3(_evancz$elm_sortable_table$Table$onClick, _p27, false, toMsg)
					};
				case 'Decreasing':
					return {
						ctor: '_Tuple3',
						_0: _p27,
						_1: _evancz$elm_sortable_table$Table$Sortable(
							_elm_lang$core$Native_Utils.eq(_p27, _p29)),
						_2: A3(_evancz$elm_sortable_table$Table$onClick, _p27, false, toMsg)
					};
				case 'IncOrDec':
					return _elm_lang$core$Native_Utils.eq(_p27, _p29) ? {
						ctor: '_Tuple3',
						_0: _p27,
						_1: _evancz$elm_sortable_table$Table$Reversible(
							_elm_lang$core$Maybe$Just(_p28)),
						_2: A3(_evancz$elm_sortable_table$Table$onClick, _p27, !_p28, toMsg)
					} : {
						ctor: '_Tuple3',
						_0: _p27,
						_1: _evancz$elm_sortable_table$Table$Reversible(_elm_lang$core$Maybe$Nothing),
						_2: A3(_evancz$elm_sortable_table$Table$onClick, _p27, false, toMsg)
					};
				default:
					return _elm_lang$core$Native_Utils.eq(_p27, _p29) ? {
						ctor: '_Tuple3',
						_0: _p27,
						_1: _evancz$elm_sortable_table$Table$Reversible(
							_elm_lang$core$Maybe$Just(_p28)),
						_2: A3(_evancz$elm_sortable_table$Table$onClick, _p27, !_p28, toMsg)
					} : {
						ctor: '_Tuple3',
						_0: _p27,
						_1: _evancz$elm_sortable_table$Table$Reversible(_elm_lang$core$Maybe$Nothing),
						_2: A3(_evancz$elm_sortable_table$Table$onClick, _p27, false, toMsg)
					};
			}
		});
	var _evancz$elm_sortable_table$Table$view = F3(
		function (_p30, state, data) {
			var _p31 = _p30;
			var _p35 = _p31._0.customizations;
			var _p34 = _p31._0.columns;
			var theadDetails = _p35.thead(
				A2(
					_elm_lang$core$List$map,
					A2(_evancz$elm_sortable_table$Table$toHeaderInfo, state, _p31._0.toMsg),
					_p34));
			var thead = A2(_elm_lang$html$Html$thead, theadDetails.attributes, theadDetails.children);
			var sortedData = A3(_evancz$elm_sortable_table$Table$sort, state, _p34, data);
			var tbody = A3(
				_elm_lang$html$Html_Keyed$node,
				'tbody',
				_p35.tbodyAttrs,
				A2(
					_elm_lang$core$List$map,
					A3(_evancz$elm_sortable_table$Table$viewRow, _p31._0.toId, _p34, _p35.rowAttrs),
					sortedData));
			var withFoot = function () {
				var _p32 = _p35.tfoot;
				if (_p32.ctor === 'Nothing') {
					return {
						ctor: '::',
						_0: tbody,
						_1: {ctor: '[]'}
					};
				} else {
					return {
						ctor: '::',
						_0: A2(_elm_lang$html$Html$tfoot, _p32._0.attributes, _p32._0.children),
						_1: {
							ctor: '::',
							_0: tbody,
							_1: {ctor: '[]'}
						}
					};
				}
			}();
			return A2(
				_elm_lang$html$Html$table,
				_p35.tableAttrs,
				function () {
					var _p33 = _p35.caption;
					if (_p33.ctor === 'Nothing') {
						return {ctor: '::', _0: thead, _1: withFoot};
					} else {
						return {
							ctor: '::',
							_0: A2(_elm_lang$html$Html$caption, _p33._0.attributes, _p33._0.children),
							_1: {ctor: '::', _0: thead, _1: withFoot}
						};
					}
				}());
		});
	var _evancz$elm_sortable_table$Table$Column = function (a) {
		return {ctor: 'Column', _0: a};
	};
	var _evancz$elm_sortable_table$Table$customColumn = function (_p36) {
		var _p37 = _p36;
		return _evancz$elm_sortable_table$Table$Column(
			A3(
				_evancz$elm_sortable_table$Table$ColumnData,
				_p37.name,
				function (_p38) {
					return _evancz$elm_sortable_table$Table$textDetails(
						_p37.viewData(_p38));
				},
				_p37.sorter));
	};
	var _evancz$elm_sortable_table$Table$veryCustomColumn = _evancz$elm_sortable_table$Table$Column;
	var _evancz$elm_sortable_table$Table$DecOrInc = function (a) {
		return {ctor: 'DecOrInc', _0: a};
	};
	var _evancz$elm_sortable_table$Table$decreasingOrIncreasingBy = function (toComparable) {
		return _evancz$elm_sortable_table$Table$DecOrInc(
			_elm_lang$core$List$sortBy(toComparable));
	};
	var _evancz$elm_sortable_table$Table$IncOrDec = function (a) {
		return {ctor: 'IncOrDec', _0: a};
	};
	var _evancz$elm_sortable_table$Table$increasingOrDecreasingBy = function (toComparable) {
		return _evancz$elm_sortable_table$Table$IncOrDec(
			_elm_lang$core$List$sortBy(toComparable));
	};
	var _evancz$elm_sortable_table$Table$stringColumn = F2(
		function (name, toStr) {
			return _evancz$elm_sortable_table$Table$Column(
				{
					name: name,
					viewData: function (_p39) {
						return _evancz$elm_sortable_table$Table$textDetails(
							toStr(_p39));
					},
					sorter: _evancz$elm_sortable_table$Table$increasingOrDecreasingBy(toStr)
				});
		});
	var _evancz$elm_sortable_table$Table$intColumn = F2(
		function (name, toInt) {
			return _evancz$elm_sortable_table$Table$Column(
				{
					name: name,
					viewData: function (_p40) {
						return _evancz$elm_sortable_table$Table$textDetails(
							_elm_lang$core$Basics$toString(
								toInt(_p40)));
					},
					sorter: _evancz$elm_sortable_table$Table$increasingOrDecreasingBy(toInt)
				});
		});
	var _evancz$elm_sortable_table$Table$floatColumn = F2(
		function (name, toFloat) {
			return _evancz$elm_sortable_table$Table$Column(
				{
					name: name,
					viewData: function (_p41) {
						return _evancz$elm_sortable_table$Table$textDetails(
							_elm_lang$core$Basics$toString(
								toFloat(_p41)));
					},
					sorter: _evancz$elm_sortable_table$Table$increasingOrDecreasingBy(toFloat)
				});
		});
	var _evancz$elm_sortable_table$Table$Decreasing = function (a) {
		return {ctor: 'Decreasing', _0: a};
	};
	var _evancz$elm_sortable_table$Table$decreasingBy = function (toComparable) {
		return _evancz$elm_sortable_table$Table$Decreasing(
			_elm_lang$core$List$sortBy(toComparable));
	};
	var _evancz$elm_sortable_table$Table$Increasing = function (a) {
		return {ctor: 'Increasing', _0: a};
	};
	var _evancz$elm_sortable_table$Table$increasingBy = function (toComparable) {
		return _evancz$elm_sortable_table$Table$Increasing(
			_elm_lang$core$List$sortBy(toComparable));
	};
	var _evancz$elm_sortable_table$Table$None = {ctor: 'None'};
	var _evancz$elm_sortable_table$Table$unsortable = _evancz$elm_sortable_table$Table$None;

	var _evancz$url_parser$UrlParser$toKeyValuePair = function (segment) {
		var _p0 = A2(_elm_lang$core$String$split, '=', segment);
		if (((_p0.ctor === '::') && (_p0._1.ctor === '::')) && (_p0._1._1.ctor === '[]')) {
			return A3(
				_elm_lang$core$Maybe$map2,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				_elm_lang$http$Http$decodeUri(_p0._0),
				_elm_lang$http$Http$decodeUri(_p0._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _evancz$url_parser$UrlParser$parseParams = function (queryString) {
		return _elm_lang$core$Dict$fromList(
			A2(
				_elm_lang$core$List$filterMap,
				_evancz$url_parser$UrlParser$toKeyValuePair,
				A2(
					_elm_lang$core$String$split,
					'&',
					A2(_elm_lang$core$String$dropLeft, 1, queryString))));
	};
	var _evancz$url_parser$UrlParser$splitUrl = function (url) {
		var _p1 = A2(_elm_lang$core$String$split, '/', url);
		if ((_p1.ctor === '::') && (_p1._0 === '')) {
			return _p1._1;
		} else {
			return _p1;
		}
	};
	var _evancz$url_parser$UrlParser$parseHelp = function (states) {
		parseHelp:
		while (true) {
			var _p2 = states;
			if (_p2.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p4 = _p2._0;
				var _p3 = _p4.unvisited;
				if (_p3.ctor === '[]') {
					return _elm_lang$core$Maybe$Just(_p4.value);
				} else {
					if ((_p3._0 === '') && (_p3._1.ctor === '[]')) {
						return _elm_lang$core$Maybe$Just(_p4.value);
					} else {
						var _v4 = _p2._1;
						states = _v4;
						continue parseHelp;
					}
				}
			}
		}
	};
	var _evancz$url_parser$UrlParser$parse = F3(
		function (_p5, url, params) {
			var _p6 = _p5;
			return _evancz$url_parser$UrlParser$parseHelp(
				_p6._0(
					{
						visited: {ctor: '[]'},
						unvisited: _evancz$url_parser$UrlParser$splitUrl(url),
						params: params,
						value: _elm_lang$core$Basics$identity
					}));
		});
	var _evancz$url_parser$UrlParser$parseHash = F2(
		function (parser, location) {
			return A3(
				_evancz$url_parser$UrlParser$parse,
				parser,
				A2(_elm_lang$core$String$dropLeft, 1, location.hash),
				_evancz$url_parser$UrlParser$parseParams(location.search));
		});
	var _evancz$url_parser$UrlParser$parsePath = F2(
		function (parser, location) {
			return A3(
				_evancz$url_parser$UrlParser$parse,
				parser,
				location.pathname,
				_evancz$url_parser$UrlParser$parseParams(location.search));
		});
	var _evancz$url_parser$UrlParser$intParamHelp = function (maybeValue) {
		var _p7 = maybeValue;
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			return _elm_lang$core$Result$toMaybe(
				_elm_lang$core$String$toInt(_p7._0));
		}
	};
	var _evancz$url_parser$UrlParser$mapHelp = F2(
		function (func, _p8) {
			var _p9 = _p8;
			return {
				visited: _p9.visited,
				unvisited: _p9.unvisited,
				params: _p9.params,
				value: func(_p9.value)
			};
		});
	var _evancz$url_parser$UrlParser$State = F4(
		function (a, b, c, d) {
			return {visited: a, unvisited: b, params: c, value: d};
		});
	var _evancz$url_parser$UrlParser$Parser = function (a) {
		return {ctor: 'Parser', _0: a};
	};
	var _evancz$url_parser$UrlParser$s = function (str) {
		return _evancz$url_parser$UrlParser$Parser(
			function (_p10) {
				var _p11 = _p10;
				var _p12 = _p11.unvisited;
				if (_p12.ctor === '[]') {
					return {ctor: '[]'};
				} else {
					var _p13 = _p12._0;
					return _elm_lang$core$Native_Utils.eq(_p13, str) ? {
						ctor: '::',
						_0: A4(
							_evancz$url_parser$UrlParser$State,
							{ctor: '::', _0: _p13, _1: _p11.visited},
							_p12._1,
							_p11.params,
							_p11.value),
						_1: {ctor: '[]'}
					} : {ctor: '[]'};
				}
			});
	};
	var _evancz$url_parser$UrlParser$custom = F2(
		function (tipe, stringToSomething) {
			return _evancz$url_parser$UrlParser$Parser(
				function (_p14) {
					var _p15 = _p14;
					var _p16 = _p15.unvisited;
					if (_p16.ctor === '[]') {
						return {ctor: '[]'};
					} else {
						var _p18 = _p16._0;
						var _p17 = stringToSomething(_p18);
						if (_p17.ctor === 'Ok') {
							return {
								ctor: '::',
								_0: A4(
									_evancz$url_parser$UrlParser$State,
									{ctor: '::', _0: _p18, _1: _p15.visited},
									_p16._1,
									_p15.params,
									_p15.value(_p17._0)),
								_1: {ctor: '[]'}
							};
						} else {
							return {ctor: '[]'};
						}
					}
				});
		});
	var _evancz$url_parser$UrlParser$string = A2(_evancz$url_parser$UrlParser$custom, 'STRING', _elm_lang$core$Result$Ok);
	var _evancz$url_parser$UrlParser$int = A2(_evancz$url_parser$UrlParser$custom, 'NUMBER', _elm_lang$core$String$toInt);
	var _evancz$url_parser$UrlParser_ops = _evancz$url_parser$UrlParser_ops || {};
	_evancz$url_parser$UrlParser_ops['</>'] = F2(
		function (_p20, _p19) {
			var _p21 = _p20;
			var _p22 = _p19;
			return _evancz$url_parser$UrlParser$Parser(
				function (state) {
					return A2(
						_elm_lang$core$List$concatMap,
						_p22._0,
						_p21._0(state));
				});
		});
	var _evancz$url_parser$UrlParser$map = F2(
		function (subValue, _p23) {
			var _p24 = _p23;
			return _evancz$url_parser$UrlParser$Parser(
				function (_p25) {
					var _p26 = _p25;
					return A2(
						_elm_lang$core$List$map,
						_evancz$url_parser$UrlParser$mapHelp(_p26.value),
						_p24._0(
							{visited: _p26.visited, unvisited: _p26.unvisited, params: _p26.params, value: subValue}));
				});
		});
	var _evancz$url_parser$UrlParser$oneOf = function (parsers) {
		return _evancz$url_parser$UrlParser$Parser(
			function (state) {
				return A2(
					_elm_lang$core$List$concatMap,
					function (_p27) {
						var _p28 = _p27;
						return _p28._0(state);
					},
					parsers);
			});
	};
	var _evancz$url_parser$UrlParser$top = _evancz$url_parser$UrlParser$Parser(
		function (state) {
			return {
				ctor: '::',
				_0: state,
				_1: {ctor: '[]'}
			};
		});
	var _evancz$url_parser$UrlParser_ops = _evancz$url_parser$UrlParser_ops || {};
	_evancz$url_parser$UrlParser_ops['<?>'] = F2(
		function (_p30, _p29) {
			var _p31 = _p30;
			var _p32 = _p29;
			return _evancz$url_parser$UrlParser$Parser(
				function (state) {
					return A2(
						_elm_lang$core$List$concatMap,
						_p32._0,
						_p31._0(state));
				});
		});
	var _evancz$url_parser$UrlParser$QueryParser = function (a) {
		return {ctor: 'QueryParser', _0: a};
	};
	var _evancz$url_parser$UrlParser$customParam = F2(
		function (key, func) {
			return _evancz$url_parser$UrlParser$QueryParser(
				function (_p33) {
					var _p34 = _p33;
					var _p35 = _p34.params;
					return {
						ctor: '::',
						_0: A4(
							_evancz$url_parser$UrlParser$State,
							_p34.visited,
							_p34.unvisited,
							_p35,
							_p34.value(
								func(
									A2(_elm_lang$core$Dict$get, key, _p35)))),
						_1: {ctor: '[]'}
					};
				});
		});
	var _evancz$url_parser$UrlParser$stringParam = function (name) {
		return A2(_evancz$url_parser$UrlParser$customParam, name, _elm_lang$core$Basics$identity);
	};
	var _evancz$url_parser$UrlParser$intParam = function (name) {
		return A2(_evancz$url_parser$UrlParser$customParam, name, _evancz$url_parser$UrlParser$intParamHelp);
	};

	var _user$project$Tree_Models$TempNode = F4(
		function (a, b, c, d) {
			return {id: a, type_: b, name: c, hasChildren: d};
		});
	var _user$project$Tree_Models$TempChildren = F3(
		function (a, b, c) {
			return {id: a, type_: b, children: c};
		});
	var _user$project$Tree_Models$TempRoot = F4(
		function (a, b, c, d) {
			return {id: a, type_: b, name: c, children: d};
		});
	var _user$project$Tree_Models$Node = F6(
		function (a, b, c, d, e, f) {
			return {id: a, nodeType: b, name: c, selected: d, childrenState: e, childNodes: f};
		});
	var _user$project$Tree_Models$Tree = F7(
		function (a, b, c, d, e, f, g) {
			return {id: a, nodeType: b, name: c, selected: d, childrenState: e, childNodes: f, path: g};
		});
	var _user$project$Tree_Models$Expanded = {ctor: 'Expanded'};
	var _user$project$Tree_Models$Expanding = {ctor: 'Expanding'};
	var _user$project$Tree_Models$Collapsed = {ctor: 'Collapsed'};
	var _user$project$Tree_Models$NoChildren = {ctor: 'NoChildren'};
	var _user$project$Tree_Models$FolderType = {ctor: 'FolderType'};
	var _user$project$Tree_Models$StaffType = {ctor: 'StaffType'};
	var _user$project$Tree_Models$SiteType = {ctor: 'SiteType'};
	var _user$project$Tree_Models$ClientType = {ctor: 'ClientType'};
	var _user$project$Tree_Models$CustomerType = {ctor: 'CustomerType'};
	var _user$project$Tree_Models$RootType = {ctor: 'RootType'};
	var _user$project$Tree_Models$convertNodeType = function (type_) {
		return _elm_lang$core$Native_Utils.eq(type_, 'root') ? _elm_lang$core$Maybe$Just(_user$project$Tree_Models$RootType) : (_elm_lang$core$Native_Utils.eq(type_, 'customer') ? _elm_lang$core$Maybe$Just(_user$project$Tree_Models$CustomerType) : (_elm_lang$core$Native_Utils.eq(type_, 'client') ? _elm_lang$core$Maybe$Just(_user$project$Tree_Models$ClientType) : (_elm_lang$core$Native_Utils.eq(type_, 'site') ? _elm_lang$core$Maybe$Just(_user$project$Tree_Models$SiteType) : (_elm_lang$core$Native_Utils.eq(type_, 'staff') ? _elm_lang$core$Maybe$Just(_user$project$Tree_Models$StaffType) : (_elm_lang$core$Native_Utils.eq(type_, 'folder') ? _elm_lang$core$Maybe$Just(_user$project$Tree_Models$FolderType) : _elm_lang$core$Maybe$Nothing)))));
	};
	var _user$project$Tree_Models$ChildNodes = function (a) {
		return {ctor: 'ChildNodes', _0: a};
	};
	var _user$project$Tree_Models$initialTree = {
		id: '',
		nodeType: _user$project$Tree_Models$RootType,
		name: '',
		selected: true,
		childrenState: _user$project$Tree_Models$NoChildren,
		childNodes: _user$project$Tree_Models$ChildNodes(
			{ctor: '[]'}),
		path: {ctor: '[]'}
	};

	var _user$project$Header_Models$headerId = function (headerInfo) {
		var _p0 = headerInfo.header;
		switch (_p0.ctor) {
			case 'RootHeader':
				return _p0._0.id;
			case 'CustomerHeader':
				return _p0._0.id;
			case 'ClientHeader':
				return _p0._0.id;
			case 'SiteHeader':
				return _p0._0.id;
			case 'StaffHeader':
				return _p0._0.id;
			default:
				return '';
		}
	};
	var _user$project$Header_Models$HeaderInfo = F2(
		function (a, b) {
			return {header: a, tabs: b};
		});
	var _user$project$Header_Models$Root = F2(
		function (a, b) {
			return {id: a, name: b};
		});
	var _user$project$Header_Models$Customer = F3(
		function (a, b, c) {
			return {id: a, access: b, values: c};
		});
	var _user$project$Header_Models$CustomerAccess = F4(
		function (a, b, c, d) {
			return {name: a, image: b, address: c, contact: d};
		});
	var _user$project$Header_Models$CustomerValues = function (a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return function (i) {
										return function (j) {
											return {name: a, image: b, address1: c, address2: d, address3: e, address4: f, postcode: g, contact: h, tel: i, email: j};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _user$project$Header_Models$Client = F3(
		function (a, b, c) {
			return {id: a, access: b, values: c};
		});
	var _user$project$Header_Models$ClientValues = function (a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return function (i) {
										return function (j) {
											return function (k) {
												return {no: a, name: b, image: c, address1: d, address2: e, address3: f, address4: g, postcode: h, contact: i, tel: j, email: k};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _user$project$Header_Models$ClientAccess = F4(
		function (a, b, c, d) {
			return {name: a, image: b, address: c, contact: d};
		});
	var _user$project$Header_Models$Site = F3(
		function (a, b, c) {
			return {id: a, access: b, values: c};
		});
	var _user$project$Header_Models$SiteValues = function (a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return function (i) {
										return function (j) {
											return function (k) {
												return function (l) {
													return function (m) {
														return function (n) {
															return {no: a, name: b, image: c, address1: d, address2: e, address3: f, address4: g, postcode: h, contact: i, tel: j, email: k, divisionMgr: l, areaMgr: m, supervisor: n};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _user$project$Header_Models$SiteAccess = F5(
		function (a, b, c, d, e) {
			return {name: a, image: b, address: c, contact: d, managers: e};
		});
	var _user$project$Header_Models$Staff = F3(
		function (a, b, c) {
			return {id: a, access: b, values: c};
		});
	var _user$project$Header_Models$StaffValues = function (a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return function (i) {
										return function (j) {
											return function (k) {
												return {no: a, name: b, image: c, address1: d, address2: e, address3: f, address4: g, postcode: h, tel: i, mob: j, email: k};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _user$project$Header_Models$StaffAccess = F4(
		function (a, b, c, d) {
			return {name: a, image: b, address: c, contact: d};
		});
	var _user$project$Header_Models$Tab = F2(
		function (a, b) {
			return {tabType: a, name: b};
		});
	var _user$project$Header_Models$Empty = {ctor: 'Empty'};
	var _user$project$Header_Models$initialHeaderInfo = {
		header: _user$project$Header_Models$Empty,
		tabs: {ctor: '[]'}
	};
	var _user$project$Header_Models$StaffHeader = function (a) {
		return {ctor: 'StaffHeader', _0: a};
	};
	var _user$project$Header_Models$SiteHeader = function (a) {
		return {ctor: 'SiteHeader', _0: a};
	};
	var _user$project$Header_Models$ClientHeader = function (a) {
		return {ctor: 'ClientHeader', _0: a};
	};
	var _user$project$Header_Models$CustomerHeader = function (a) {
		return {ctor: 'CustomerHeader', _0: a};
	};
	var _user$project$Header_Models$RootHeader = function (a) {
		return {ctor: 'RootHeader', _0: a};
	};
	var _user$project$Header_Models$Write = {ctor: 'Write'};
	var _user$project$Header_Models$Read = {ctor: 'Read'};
	var _user$project$Header_Models$None = {ctor: 'None'};
	var _user$project$Header_Models$convertAccessType = function (type_) {
		return _elm_lang$core$Native_Utils.eq(type_, 'r') ? _user$project$Header_Models$Read : (_elm_lang$core$Native_Utils.eq(type_, 'w') ? _user$project$Header_Models$Write : _user$project$Header_Models$None);
	};
	var _user$project$Header_Models$EmptyTab = {ctor: 'EmptyTab'};
	var _user$project$Header_Models$CasesType = {ctor: 'CasesType'};
	var _user$project$Header_Models$UsersType = {ctor: 'UsersType'};
	var _user$project$Header_Models$FoldersType = {ctor: 'FoldersType'};

	var _user$project$Tree_Messages$SelectNode = function (a) {
		return {ctor: 'SelectNode', _0: a};
	};
	var _user$project$Tree_Messages$SelectRoot = {ctor: 'SelectRoot'};
	var _user$project$Tree_Messages$ToggleNode = F2(
		function (a, b) {
			return {ctor: 'ToggleNode', _0: a, _1: b};
		});
	var _user$project$Tree_Messages$OnFetchNode = F2(
		function (a, b) {
			return {ctor: 'OnFetchNode', _0: a, _1: b};
		});
	var _user$project$Tree_Messages$OnFetchRoot = function (a) {
		return {ctor: 'OnFetchRoot', _0: a};
	};

	var _user$project$Header_Messages$OnFetchStaff = F2(
		function (a, b) {
			return {ctor: 'OnFetchStaff', _0: a, _1: b};
		});
	var _user$project$Header_Messages$OnFetchSite = F2(
		function (a, b) {
			return {ctor: 'OnFetchSite', _0: a, _1: b};
		});
	var _user$project$Header_Messages$OnFetchClient = F2(
		function (a, b) {
			return {ctor: 'OnFetchClient', _0: a, _1: b};
		});
	var _user$project$Header_Messages$OnFetchCustomer = F2(
		function (a, b) {
			return {ctor: 'OnFetchCustomer', _0: a, _1: b};
		});
	var _user$project$Header_Messages$OnFetchRoot = F2(
		function (a, b) {
			return {ctor: 'OnFetchRoot', _0: a, _1: b};
		});

	var _user$project$Content_Models$Folders = F6(
		function (a, b, c, d, e, f) {
			return {tree: a, selected: b, path: c, files: d, tableState: e, query: f};
		});
	var _user$project$Content_Models$File = F3(
		function (a, b, c) {
			return {id: a, name: b, datetime: c};
		});
	var _user$project$Content_Models$Users = F2(
		function (a, b) {
			return {id: a, name: b};
		});
	var _user$project$Content_Models$Cases = F2(
		function (a, b) {
			return {id: a, name: b};
		});
	var _user$project$Content_Models$EmptyContent = {ctor: 'EmptyContent'};
	var _user$project$Content_Models$initialContent = _user$project$Content_Models$EmptyContent;
	var _user$project$Content_Models$CasesContent = function (a) {
		return {ctor: 'CasesContent', _0: a};
	};
	var _user$project$Content_Models$UsersContent = function (a) {
		return {ctor: 'UsersContent', _0: a};
	};
	var _user$project$Content_Models$FoldersContent = function (a) {
		return {ctor: 'FoldersContent', _0: a};
	};

	var _user$project$Content_Messages$SetTableState = function (a) {
		return {ctor: 'SetTableState', _0: a};
	};
	var _user$project$Content_Messages$SetQuery = function (a) {
		return {ctor: 'SetQuery', _0: a};
	};
	var _user$project$Content_Messages$OnFetchFiles = F2(
		function (a, b) {
			return {ctor: 'OnFetchFiles', _0: a, _1: b};
		});
	var _user$project$Content_Messages$TreeMsg = function (a) {
		return {ctor: 'TreeMsg', _0: a};
	};
	var _user$project$Content_Messages$OnFetchCases = F2(
		function (a, b) {
			return {ctor: 'OnFetchCases', _0: a, _1: b};
		});
	var _user$project$Content_Messages$OnFetchUsers = F2(
		function (a, b) {
			return {ctor: 'OnFetchUsers', _0: a, _1: b};
		});
	var _user$project$Content_Messages$OnFetchFolders = F2(
		function (a, b) {
			return {ctor: 'OnFetchFolders', _0: a, _1: b};
		});

	var _user$project$Container_Messages$ContentMsg = function (a) {
		return {ctor: 'ContentMsg', _0: a};
	};
	var _user$project$Container_Messages$HeaderMsg = function (a) {
		return {ctor: 'HeaderMsg', _0: a};
	};
	var _user$project$Container_Messages$TreeMsg = function (a) {
		return {ctor: 'TreeMsg', _0: a};
	};
	var _user$project$Container_Messages$SelectTab = function (a) {
		return {ctor: 'SelectTab', _0: a};
	};
	var _user$project$Container_Messages$SelectPath = function (a) {
		return {ctor: 'SelectPath', _0: a};
	};
	var _user$project$Container_Messages$ShowContainer = {ctor: 'ShowContainer'};

	var _user$project$Container_Models$initialContainer = {
		tree: _user$project$Tree_Models$initialTree,
		path: {ctor: '[]'},
		headerInfo: _user$project$Header_Models$initialHeaderInfo,
		tab: A2(_user$project$Header_Models$Tab, _user$project$Header_Models$EmptyTab, ''),
		content: _user$project$Content_Models$initialContent
	};
	var _user$project$Container_Models$Container = F5(
		function (a, b, c, d, e) {
			return {tree: a, path: b, headerInfo: c, tab: d, content: e};
		});
	var _user$project$Container_Models$PathItem = F3(
		function (a, b, c) {
			return {id: a, nodeType: b, name: c};
		});

	var _user$project$Tree_Commands$tempNodeDecoder = A5(
		_elm_lang$core$Json_Decode$map4,
		_user$project$Tree_Models$TempNode,
		A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'type', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'hasChildren', _elm_lang$core$Json_Decode$bool));
	var _user$project$Tree_Commands$tempRootDecoder = A5(
		_elm_lang$core$Json_Decode$map4,
		_user$project$Tree_Models$TempRoot,
		A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'type', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string),
		A2(
			_elm_lang$core$Json_Decode$field,
			'children',
			_elm_lang$core$Json_Decode$list(_user$project$Tree_Commands$tempNodeDecoder)));
	var _user$project$Tree_Commands$tempChildrenDecoder = A4(
		_elm_lang$core$Json_Decode$map3,
		_user$project$Tree_Models$TempChildren,
		A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'type', _elm_lang$core$Json_Decode$string),
		A2(
			_elm_lang$core$Json_Decode$field,
			'children',
			_elm_lang$core$Json_Decode$list(_user$project$Tree_Commands$tempNodeDecoder)));
	var _user$project$Tree_Commands$fetchNodeUrl = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				origin,
				A2(_elm_lang$core$Basics_ops['++'], 'api/Node/', nodeId));
		});
	var _user$project$Tree_Commands$fetchNode = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$http$Http$send,
				_user$project$Tree_Messages$OnFetchNode(nodeId),
				A2(
					_elm_lang$http$Http$get,
					A2(_user$project$Tree_Commands$fetchNodeUrl, origin, nodeId),
					_user$project$Tree_Commands$tempChildrenDecoder));
		});
	var _user$project$Tree_Commands$fetchRoot = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$http$Http$send,
				_user$project$Tree_Messages$OnFetchRoot,
				A2(
					_elm_lang$http$Http$get,
					A2(_user$project$Tree_Commands$fetchNodeUrl, origin, nodeId),
					_user$project$Tree_Commands$tempRootDecoder));
		});

	var _user$project$Header_Commands$createTab = F2(
		function (id, name) {
			return _elm_lang$core$Native_Utils.eq(id, 'folders') ? A2(_user$project$Header_Models$Tab, _user$project$Header_Models$FoldersType, name) : (_elm_lang$core$Native_Utils.eq(id, 'users') ? A2(_user$project$Header_Models$Tab, _user$project$Header_Models$UsersType, name) : (_elm_lang$core$Native_Utils.eq(id, 'cases') ? A2(_user$project$Header_Models$Tab, _user$project$Header_Models$CasesType, name) : A2(_user$project$Header_Models$Tab, _user$project$Header_Models$FoldersType, name)));
		});
	var _user$project$Header_Commands$tabDecoder = A3(
		_elm_lang$core$Json_Decode$map2,
		_user$project$Header_Commands$createTab,
		A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string));
	var _user$project$Header_Commands$staffValuesDecoder = A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'email',
		_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'mob',
			_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'tel',
				_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'postcode',
					_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'address4',
						_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
						A3(
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
							'address3',
							_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
							A3(
								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
								'address2',
								_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
								A3(
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
									'address1',
									_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
									A3(
										_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
										'image',
										_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
										A3(
											_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
											'name',
											_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
											A3(
												_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
												'no',
												_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
												_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Header_Models$StaffValues))))))))))));
	var _user$project$Header_Commands$createStaffAccess = F4(
		function (name, image, address, contact) {
			return A4(
				_user$project$Header_Models$StaffAccess,
				_user$project$Header_Models$convertAccessType(name),
				_user$project$Header_Models$convertAccessType(image),
				_user$project$Header_Models$convertAccessType(address),
				_user$project$Header_Models$convertAccessType(contact));
		});
	var _user$project$Header_Commands$staffAccessDecoder = A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'contact',
		_elm_lang$core$Json_Decode$string,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'address',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'image',
				_elm_lang$core$Json_Decode$string,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'name',
					_elm_lang$core$Json_Decode$string,
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Header_Commands$createStaffAccess)))));
	var _user$project$Header_Commands$staffDecoder = A3(
		_elm_lang$core$Json_Decode$map2,
		_user$project$Header_Models$HeaderInfo,
		A2(
			_elm_lang$core$Json_Decode$map,
			_user$project$Header_Models$StaffHeader,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'values',
				_user$project$Header_Commands$staffValuesDecoder,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'access',
					_user$project$Header_Commands$staffAccessDecoder,
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'id',
						_elm_lang$core$Json_Decode$string,
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Header_Models$Staff))))),
		A2(
			_elm_lang$core$Json_Decode$field,
			'tabs',
			_elm_lang$core$Json_Decode$list(_user$project$Header_Commands$tabDecoder)));
	var _user$project$Header_Commands$siteValuesDecoder = A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'supervisor',
		_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'areaMgr',
			_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'divisionMgr',
				_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'email',
					_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'tel',
						_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
						A3(
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
							'contact',
							_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
							A3(
								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
								'postcode',
								_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
								A3(
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
									'address4',
									_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
									A3(
										_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
										'address3',
										_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
										A3(
											_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
											'address2',
											_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
											A3(
												_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
												'address1',
												_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
												A3(
													_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
													'image',
													_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
													A3(
														_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
														'name',
														_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
														A3(
															_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
															'no',
															_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
															_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Header_Models$SiteValues)))))))))))))));
	var _user$project$Header_Commands$createSiteAccess = F5(
		function (name, image, address, contact, managers) {
			return A5(
				_user$project$Header_Models$SiteAccess,
				_user$project$Header_Models$convertAccessType(name),
				_user$project$Header_Models$convertAccessType(image),
				_user$project$Header_Models$convertAccessType(address),
				_user$project$Header_Models$convertAccessType(contact),
				_user$project$Header_Models$convertAccessType(managers));
		});
	var _user$project$Header_Commands$siteAccessDecoder = A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'managers',
		_elm_lang$core$Json_Decode$string,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'contact',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'address',
				_elm_lang$core$Json_Decode$string,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'image',
					_elm_lang$core$Json_Decode$string,
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'name',
						_elm_lang$core$Json_Decode$string,
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Header_Commands$createSiteAccess))))));
	var _user$project$Header_Commands$siteDecoder = A3(
		_elm_lang$core$Json_Decode$map2,
		_user$project$Header_Models$HeaderInfo,
		A2(
			_elm_lang$core$Json_Decode$map,
			_user$project$Header_Models$SiteHeader,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'values',
				_user$project$Header_Commands$siteValuesDecoder,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'access',
					_user$project$Header_Commands$siteAccessDecoder,
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'id',
						_elm_lang$core$Json_Decode$string,
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Header_Models$Site))))),
		A2(
			_elm_lang$core$Json_Decode$field,
			'tabs',
			_elm_lang$core$Json_Decode$list(_user$project$Header_Commands$tabDecoder)));
	var _user$project$Header_Commands$clientValuesDecoder = A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'email',
		_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'tel',
			_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'contact',
				_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'postcode',
					_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'address4',
						_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
						A3(
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
							'address3',
							_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
							A3(
								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
								'address2',
								_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
								A3(
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
									'address1',
									_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
									A3(
										_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
										'image',
										_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
										A3(
											_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
											'name',
											_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
											A3(
												_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
												'no',
												_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
												_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Header_Models$ClientValues))))))))))));
	var _user$project$Header_Commands$createClientAccess = F4(
		function (name, image, address, contact) {
			return A4(
				_user$project$Header_Models$ClientAccess,
				_user$project$Header_Models$convertAccessType(name),
				_user$project$Header_Models$convertAccessType(image),
				_user$project$Header_Models$convertAccessType(address),
				_user$project$Header_Models$convertAccessType(contact));
		});
	var _user$project$Header_Commands$clientAccessDecoder = A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'contact',
		_elm_lang$core$Json_Decode$string,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'address',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'image',
				_elm_lang$core$Json_Decode$string,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'name',
					_elm_lang$core$Json_Decode$string,
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Header_Commands$createClientAccess)))));
	var _user$project$Header_Commands$clientDecoder = A3(
		_elm_lang$core$Json_Decode$map2,
		_user$project$Header_Models$HeaderInfo,
		A2(
			_elm_lang$core$Json_Decode$map,
			_user$project$Header_Models$ClientHeader,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'values',
				_user$project$Header_Commands$clientValuesDecoder,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'access',
					_user$project$Header_Commands$clientAccessDecoder,
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'id',
						_elm_lang$core$Json_Decode$string,
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Header_Models$Client))))),
		A2(
			_elm_lang$core$Json_Decode$field,
			'tabs',
			_elm_lang$core$Json_Decode$list(_user$project$Header_Commands$tabDecoder)));
	var _user$project$Header_Commands$customerValuesDecoder = A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'email',
		_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'tel',
			_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'contact',
				_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'postcode',
					_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'address4',
						_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
						A3(
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
							'address3',
							_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
							A3(
								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
								'address2',
								_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
								A3(
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
									'address1',
									_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
									A3(
										_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
										'image',
										_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
										A3(
											_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
											'name',
											_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
											_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Header_Models$CustomerValues)))))))))));
	var _user$project$Header_Commands$createCustomerAccess = F4(
		function (name, image, address, contact) {
			return A4(
				_user$project$Header_Models$CustomerAccess,
				_user$project$Header_Models$convertAccessType(name),
				_user$project$Header_Models$convertAccessType(image),
				_user$project$Header_Models$convertAccessType(address),
				_user$project$Header_Models$convertAccessType(contact));
		});
	var _user$project$Header_Commands$customerAccessDecoder = A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'contact',
		_elm_lang$core$Json_Decode$string,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'address',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'image',
				_elm_lang$core$Json_Decode$string,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'name',
					_elm_lang$core$Json_Decode$string,
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Header_Commands$createCustomerAccess)))));
	var _user$project$Header_Commands$customerDecoder = A3(
		_elm_lang$core$Json_Decode$map2,
		_user$project$Header_Models$HeaderInfo,
		A2(
			_elm_lang$core$Json_Decode$map,
			_user$project$Header_Models$CustomerHeader,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'values',
				_user$project$Header_Commands$customerValuesDecoder,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'access',
					_user$project$Header_Commands$customerAccessDecoder,
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'id',
						_elm_lang$core$Json_Decode$string,
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Header_Models$Customer))))),
		A2(
			_elm_lang$core$Json_Decode$field,
			'tabs',
			_elm_lang$core$Json_Decode$list(_user$project$Header_Commands$tabDecoder)));
	var _user$project$Header_Commands$rootDecoder = A3(
		_elm_lang$core$Json_Decode$map2,
		_user$project$Header_Models$HeaderInfo,
		A2(
			_elm_lang$core$Json_Decode$map,
			_user$project$Header_Models$RootHeader,
			A3(
				_elm_lang$core$Json_Decode$map2,
				_user$project$Header_Models$Root,
				A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$string),
				A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string))),
		A2(
			_elm_lang$core$Json_Decode$field,
			'tabs',
			_elm_lang$core$Json_Decode$list(_user$project$Header_Commands$tabDecoder)));
	var _user$project$Header_Commands$apiUrl = function (origin) {
		return A2(_elm_lang$core$Basics_ops['++'], origin, 'api/');
	};
	var _user$project$Header_Commands$rootUrl = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$Header_Commands$apiUrl(origin),
				A2(_elm_lang$core$Basics_ops['++'], 'Roots/', nodeId));
		});
	var _user$project$Header_Commands$customerUrl = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$Header_Commands$apiUrl(origin),
				A2(_elm_lang$core$Basics_ops['++'], 'Customers/', nodeId));
		});
	var _user$project$Header_Commands$clientUrl = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$Header_Commands$apiUrl(origin),
				A2(_elm_lang$core$Basics_ops['++'], 'Clients/', nodeId));
		});
	var _user$project$Header_Commands$siteUrl = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$Header_Commands$apiUrl(origin),
				A2(_elm_lang$core$Basics_ops['++'], 'Sites/', nodeId));
		});
	var _user$project$Header_Commands$staffUrl = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$Header_Commands$apiUrl(origin),
				A2(_elm_lang$core$Basics_ops['++'], 'Staff/', nodeId));
		});
	var _user$project$Header_Commands$fetchStaff = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$http$Http$send,
				_user$project$Header_Messages$OnFetchStaff(nodeId),
				A2(
					_elm_lang$http$Http$get,
					A2(_user$project$Header_Commands$staffUrl, origin, nodeId),
					_user$project$Header_Commands$staffDecoder));
		});
	var _user$project$Header_Commands$fetchSite = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$http$Http$send,
				_user$project$Header_Messages$OnFetchSite(nodeId),
				A2(
					_elm_lang$http$Http$get,
					A2(_user$project$Header_Commands$siteUrl, origin, nodeId),
					_user$project$Header_Commands$siteDecoder));
		});
	var _user$project$Header_Commands$fetchClient = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$http$Http$send,
				_user$project$Header_Messages$OnFetchClient(nodeId),
				A2(
					_elm_lang$http$Http$get,
					A2(_user$project$Header_Commands$clientUrl, origin, nodeId),
					_user$project$Header_Commands$clientDecoder));
		});
	var _user$project$Header_Commands$fetchCustomer = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$http$Http$send,
				_user$project$Header_Messages$OnFetchCustomer(nodeId),
				A2(
					_elm_lang$http$Http$get,
					A2(_user$project$Header_Commands$customerUrl, origin, nodeId),
					_user$project$Header_Commands$customerDecoder));
		});
	var _user$project$Header_Commands$fetchRoot = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$http$Http$send,
				_user$project$Header_Messages$OnFetchRoot(nodeId),
				A2(
					_elm_lang$http$Http$get,
					A2(_user$project$Header_Commands$rootUrl, origin, nodeId),
					_user$project$Header_Commands$rootDecoder));
		});
	var _user$project$Header_Commands$fetchHeader = F3(
		function (origin, nodeType, nodeId) {
			if (!_elm_lang$core$Native_Utils.eq(nodeId, '')) {
				var _p0 = nodeType;
				switch (_p0.ctor) {
					case 'RootType':
						return A2(_user$project$Header_Commands$fetchRoot, origin, nodeId);
					case 'CustomerType':
						return A2(_user$project$Header_Commands$fetchCustomer, origin, nodeId);
					case 'ClientType':
						return A2(_user$project$Header_Commands$fetchClient, origin, nodeId);
					case 'SiteType':
						return A2(_user$project$Header_Commands$fetchSite, origin, nodeId);
					case 'StaffType':
						return A2(_user$project$Header_Commands$fetchStaff, origin, nodeId);
					default:
						return _elm_lang$core$Platform_Cmd$none;
				}
			} else {
				return _elm_lang$core$Platform_Cmd$none;
			}
		});

	var _user$project$Container_Commands$fetchAll = F4(
		function (origin, nodeType, nodeId, container) {
			var headerCmd = _elm_lang$core$Native_Utils.eq(container.headerInfo.header, _user$project$Header_Models$Empty) ? A2(
				_elm_lang$core$Platform_Cmd$map,
				_user$project$Container_Messages$HeaderMsg,
				A3(_user$project$Header_Commands$fetchHeader, origin, nodeType, nodeId)) : _elm_lang$core$Platform_Cmd$none;
			var treeCmd = _elm_lang$core$Native_Utils.eq(container.tree.childrenState, _user$project$Tree_Models$NoChildren) ? A2(
				_elm_lang$core$Platform_Cmd$map,
				_user$project$Container_Messages$TreeMsg,
				A2(_user$project$Tree_Commands$fetchRoot, origin, nodeId)) : _elm_lang$core$Platform_Cmd$none;
			return _elm_lang$core$Platform_Cmd$batch(
				{
					ctor: '::',
					_0: treeCmd,
					_1: {
						ctor: '::',
						_0: headerCmd,
						_1: {ctor: '[]'}
					}
				});
		});

	var _user$project$Tree_Update$createNode = function (tempNode) {
		var nodeType = A2(
			_elm_lang$core$Maybe$withDefault,
			_user$project$Tree_Models$RootType,
			_user$project$Tree_Models$convertNodeType(tempNode.type_));
		return {
			id: tempNode.id,
			nodeType: nodeType,
			name: tempNode.name,
			selected: false,
			childrenState: tempNode.hasChildren ? _user$project$Tree_Models$Collapsed : _user$project$Tree_Models$NoChildren,
			childNodes: _user$project$Tree_Models$ChildNodes(
				{ctor: '[]'})
		};
	};
	var _user$project$Tree_Update$fetchedRoot = function (tempRoot) {
		var nodeType = A2(
			_elm_lang$core$Maybe$withDefault,
			_user$project$Tree_Models$RootType,
			_user$project$Tree_Models$convertNodeType(tempRoot.type_));
		return {
			id: tempRoot.id,
			nodeType: nodeType,
			name: tempRoot.name,
			selected: true,
			childrenState: _user$project$Tree_Models$Expanded,
			childNodes: _user$project$Tree_Models$ChildNodes(
				A2(_elm_lang$core$List$map, _user$project$Tree_Update$createNode, tempRoot.children)),
			path: {ctor: '[]'}
		};
	};
	var _user$project$Tree_Update$convertChildren = function (tempChildren) {
		return A2(_elm_lang$core$List$map, _user$project$Tree_Update$createNode, tempChildren.children);
	};
	var _user$project$Tree_Update$expandChildren = F3(
		function (nodeId, tempChildren, node) {
			if (_elm_lang$core$Native_Utils.eq(nodeId, node.id)) {
				return _elm_lang$core$Native_Utils.update(
					node,
					{
						childrenState: _user$project$Tree_Models$Expanded,
						childNodes: _user$project$Tree_Models$ChildNodes(
							_user$project$Tree_Update$convertChildren(tempChildren))
					});
			} else {
				var _p0 = node.childNodes;
				var childNodes = _p0._0;
				var newChildNodes = A2(
					_elm_lang$core$List$map,
					A2(_user$project$Tree_Update$expandChildren, nodeId, tempChildren),
					childNodes);
				return _elm_lang$core$Native_Utils.update(
					node,
					{
						childNodes: _user$project$Tree_Models$ChildNodes(newChildNodes)
					});
			}
		});
	var _user$project$Tree_Update$fetchedNode = F3(
		function (nodeId, tempChildren, tree) {
			var _p1 = tree.childNodes;
			var childNodes = _p1._0;
			var newChildren = A2(
				_elm_lang$core$List$map,
				A2(_user$project$Tree_Update$expandChildren, nodeId, tempChildren),
				childNodes);
			return _elm_lang$core$Native_Utils.update(
				tree,
				{
					childNodes: _user$project$Tree_Models$ChildNodes(newChildren)
				});
		});
	var _user$project$Tree_Update$toggleChildNodes = F3(
		function (origin, nodeId, node) {
			var _p2 = node.childNodes;
			var childNodes = _p2._0;
			var results = A2(
				_elm_lang$core$List$map,
				A2(_user$project$Tree_Update$toggleNode, origin, nodeId),
				childNodes);
			var _p3 = _elm_lang$core$List$unzip(results);
			var newChildNodes = _p3._0;
			var cmds = _p3._1;
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.update(
					node,
					{
						childNodes: _user$project$Tree_Models$ChildNodes(newChildNodes)
					}),
				_1: _elm_lang$core$Platform_Cmd$batch(cmds)
			};
		});
	var _user$project$Tree_Update$toggleNode = F3(
		function (origin, nodeId, node) {
			var _p4 = function () {
				if (_elm_lang$core$Native_Utils.eq(nodeId, node.id)) {
					var _p5 = node.childrenState;
					switch (_p5.ctor) {
						case 'NoChildren':
							return {ctor: '_Tuple2', _0: node, _1: _elm_lang$core$Platform_Cmd$none};
						case 'Collapsed':
							var _p6 = node.childNodes;
							var childNodes = _p6._0;
							return _elm_lang$core$List$isEmpty(childNodes) ? {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Native_Utils.update(
									node,
									{childrenState: _user$project$Tree_Models$Expanding}),
								_1: A2(_user$project$Tree_Commands$fetchNode, origin, node.id)
							} : {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Native_Utils.update(
									node,
									{childrenState: _user$project$Tree_Models$Expanded}),
								_1: _elm_lang$core$Platform_Cmd$none
							};
						case 'Expanding':
							return {ctor: '_Tuple2', _0: node, _1: _elm_lang$core$Platform_Cmd$none};
						default:
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Native_Utils.update(
									node,
									{childrenState: _user$project$Tree_Models$Collapsed}),
								_1: _elm_lang$core$Platform_Cmd$none
							};
					}
				} else {
					return A3(_user$project$Tree_Update$toggleChildNodes, origin, nodeId, node);
				}
			}();
			var newNode = _p4._0;
			var cmd = _p4._1;
			return {ctor: '_Tuple2', _0: newNode, _1: cmd};
		});
	var _user$project$Tree_Update$toggle = F3(
		function (origin, nodeId, tree) {
			var _p7 = tree.childNodes;
			var childNodes = _p7._0;
			var results = A2(
				_elm_lang$core$List$map,
				A2(_user$project$Tree_Update$toggleNode, origin, nodeId),
				childNodes);
			var _p8 = _elm_lang$core$List$unzip(results);
			var newChildren = _p8._0;
			var cmds = _p8._1;
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.update(
					tree,
					{
						childNodes: _user$project$Tree_Models$ChildNodes(newChildren)
					}),
				_1: _elm_lang$core$Platform_Cmd$batch(cmds)
			};
		});
	var _user$project$Tree_Update$selectNode = F2(
		function (nodeId, node) {
			var _p9 = node.childNodes;
			var childNodes = _p9._0;
			var results = A2(
				_elm_lang$core$List$map,
				_user$project$Tree_Update$selectNode(nodeId),
				childNodes);
			var _p10 = _elm_lang$core$List$unzip(results);
			var newChildNodes = _p10._0;
			var newPathLists = _p10._1;
			var newNode = _elm_lang$core$Native_Utils.update(
				node,
				{
					childNodes: _user$project$Tree_Models$ChildNodes(newChildNodes),
					selected: _elm_lang$core$Native_Utils.eq(node.id, nodeId)
				});
			var newPath = function () {
				if (newNode.selected) {
					return {
						ctor: '::',
						_0: newNode,
						_1: {ctor: '[]'}
					};
				} else {
					var concatLists = _elm_lang$core$List$concat(newPathLists);
					return _elm_lang$core$List$isEmpty(concatLists) ? concatLists : A2(
						_elm_lang$core$List$append,
						concatLists,
						{
							ctor: '::',
							_0: newNode,
							_1: {ctor: '[]'}
						});
				}
			}();
			return {ctor: '_Tuple2', _0: newNode, _1: newPath};
		});
	var _user$project$Tree_Update$select = F2(
		function (nodeId, tree) {
			var _p11 = tree.childNodes;
			var childNodes = _p11._0;
			var results = A2(
				_elm_lang$core$List$map,
				_user$project$Tree_Update$selectNode(nodeId),
				childNodes);
			var _p12 = _elm_lang$core$List$unzip(results);
			var newChildren = _p12._0;
			var newPathLists = _p12._1;
			var newPath = _elm_lang$core$List$concat(newPathLists);
			var newSelected = _elm_lang$core$Native_Utils.eq(
				_elm_lang$core$List$length(newPath),
				0);
			return _elm_lang$core$Native_Utils.update(
				tree,
				{
					childNodes: _user$project$Tree_Models$ChildNodes(newChildren),
					selected: newSelected,
					path: newPath
				});
		});
	var _user$project$Tree_Update$update = F2(
		function (message, tree) {
			var _p13 = message;
			switch (_p13.ctor) {
				case 'OnFetchRoot':
					if (_p13._0.ctor === 'Ok') {
						return {
							ctor: '_Tuple3',
							_0: _user$project$Tree_Update$fetchedRoot(_p13._0._0),
							_1: _elm_lang$core$Platform_Cmd$none,
							_2: tree.path
						};
					} else {
						return {ctor: '_Tuple3', _0: tree, _1: _elm_lang$core$Platform_Cmd$none, _2: tree.path};
					}
				case 'OnFetchNode':
					if (_p13._1.ctor === 'Ok') {
						return {
							ctor: '_Tuple3',
							_0: A3(_user$project$Tree_Update$fetchedNode, _p13._0, _p13._1._0, tree),
							_1: _elm_lang$core$Platform_Cmd$none,
							_2: tree.path
						};
					} else {
						return {ctor: '_Tuple3', _0: tree, _1: _elm_lang$core$Platform_Cmd$none, _2: tree.path};
					}
				case 'ToggleNode':
					var _p14 = A3(_user$project$Tree_Update$toggle, _p13._0, _p13._1, tree);
					var newTree = _p14._0;
					var cmds = _p14._1;
					return {ctor: '_Tuple3', _0: newTree, _1: cmds, _2: tree.path};
				case 'SelectRoot':
					var newTree = A2(_user$project$Tree_Update$select, tree.id, tree);
					return {ctor: '_Tuple3', _0: newTree, _1: _elm_lang$core$Platform_Cmd$none, _2: newTree.path};
				default:
					var newTree = A2(_user$project$Tree_Update$select, _p13._0, tree);
					return {ctor: '_Tuple3', _0: newTree, _1: _elm_lang$core$Platform_Cmd$none, _2: newTree.path};
			}
		});

	var _user$project$Header_Update$update = F2(
		function (message, headerInfo) {
			var _p0 = message;
			switch (_p0.ctor) {
				case 'OnFetchRoot':
					if (_p0._1.ctor === 'Ok') {
						return {ctor: '_Tuple2', _0: _p0._1._0, _1: _elm_lang$core$Platform_Cmd$none};
					} else {
						return {ctor: '_Tuple2', _0: headerInfo, _1: _elm_lang$core$Platform_Cmd$none};
					}
				case 'OnFetchCustomer':
					if (_p0._1.ctor === 'Ok') {
						return {ctor: '_Tuple2', _0: _p0._1._0, _1: _elm_lang$core$Platform_Cmd$none};
					} else {
						return {ctor: '_Tuple2', _0: headerInfo, _1: _elm_lang$core$Platform_Cmd$none};
					}
				case 'OnFetchClient':
					if (_p0._1.ctor === 'Ok') {
						return {ctor: '_Tuple2', _0: _p0._1._0, _1: _elm_lang$core$Platform_Cmd$none};
					} else {
						return {ctor: '_Tuple2', _0: headerInfo, _1: _elm_lang$core$Platform_Cmd$none};
					}
				case 'OnFetchSite':
					if (_p0._1.ctor === 'Ok') {
						return {ctor: '_Tuple2', _0: _p0._1._0, _1: _elm_lang$core$Platform_Cmd$none};
					} else {
						return {ctor: '_Tuple2', _0: headerInfo, _1: _elm_lang$core$Platform_Cmd$none};
					}
				default:
					if (_p0._1.ctor === 'Ok') {
						return {ctor: '_Tuple2', _0: _p0._1._0, _1: _elm_lang$core$Platform_Cmd$none};
					} else {
						return {ctor: '_Tuple2', _0: headerInfo, _1: _elm_lang$core$Platform_Cmd$none};
					}
			}
		});

	var _user$project$Content_Commands$fileDecoder = A4(
		_elm_lang$core$Json_Decode$map3,
		_user$project$Content_Models$File,
		A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'datetime', _elm_lang$core$Json_Decode$int));
	var _user$project$Content_Commands$filesDecoder = A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Basics$identity,
		A2(
			_elm_lang$core$Json_Decode$field,
			'files',
			_elm_lang$core$Json_Decode$list(_user$project$Content_Commands$fileDecoder)));
	var _user$project$Content_Commands$casesDecoder = A3(
		_elm_lang$core$Json_Decode$map2,
		_user$project$Content_Models$Cases,
		A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string));
	var _user$project$Content_Commands$usersDecoder = A3(
		_elm_lang$core$Json_Decode$map2,
		_user$project$Content_Models$Users,
		A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string));
	var _user$project$Content_Commands$createChild = F3(
		function (nodeId, type_, name) {
			var children = {ctor: '[]'};
			var a = A2(_elm_lang$core$Debug$log, 'nodeId', nodeId);
			return A6(
				_user$project$Tree_Models$Node,
				nodeId,
				A2(
					_elm_lang$core$Maybe$withDefault,
					_user$project$Tree_Models$FolderType,
					_user$project$Tree_Models$convertNodeType(type_)),
				name,
				false,
				_elm_lang$core$Native_Utils.eq(
					_elm_lang$core$List$length(children),
					0) ? _user$project$Tree_Models$NoChildren : _user$project$Tree_Models$Expanded,
				_user$project$Tree_Models$ChildNodes(children));
		});
	var _user$project$Content_Commands$createNode = F4(
		function (nodeId, type_, name, children) {
			return A6(
				_user$project$Tree_Models$Node,
				nodeId,
				A2(
					_elm_lang$core$Maybe$withDefault,
					_user$project$Tree_Models$FolderType,
					_user$project$Tree_Models$convertNodeType(type_)),
				name,
				false,
				_elm_lang$core$Native_Utils.eq(
					_elm_lang$core$List$length(children),
					0) ? _user$project$Tree_Models$NoChildren : _user$project$Tree_Models$Expanded,
				_user$project$Tree_Models$ChildNodes(children));
		});
	var _user$project$Content_Commands$createTree = F4(
		function (nodeId, type_, name, children) {
			return A7(
				_user$project$Tree_Models$Tree,
				nodeId,
				A2(
					_elm_lang$core$Maybe$withDefault,
					_user$project$Tree_Models$FolderType,
					_user$project$Tree_Models$convertNodeType(type_)),
				name,
				true,
				_user$project$Tree_Models$Expanded,
				_user$project$Tree_Models$ChildNodes(children),
				{ctor: '[]'});
		});
	var _user$project$Content_Commands$childDecoder = A4(
		_elm_lang$core$Json_Decode$map3,
		_user$project$Content_Commands$createChild,
		A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'type', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string));
	var _user$project$Content_Commands$folderDecoder = A5(
		_elm_lang$core$Json_Decode$map4,
		_user$project$Content_Commands$createNode,
		A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'type', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string),
		A2(
			_elm_lang$core$Json_Decode$field,
			'children',
			_elm_lang$core$Json_Decode$list(
				_elm_lang$core$Json_Decode$lazy(
					function (_p0) {
						return _user$project$Content_Commands$folderDecoder;
					}))));
	var _user$project$Content_Commands$createFolders = F4(
		function (nodeId, type_, name, children) {
			var tree = A4(_user$project$Content_Commands$createTree, nodeId, type_, name, children);
			return A6(
				_user$project$Content_Models$Folders,
				tree,
				true,
				{ctor: '[]'},
				{ctor: '[]'},
				_evancz$elm_sortable_table$Table$initialSort('Name'),
				'');
		});
	var _user$project$Content_Commands$foldersDecoder = A5(
		_elm_lang$core$Json_Decode$map4,
		_user$project$Content_Commands$createFolders,
		A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'type', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string),
		A2(
			_elm_lang$core$Json_Decode$field,
			'children',
			_elm_lang$core$Json_Decode$list(
				_elm_lang$core$Json_Decode$lazy(
					function (_p1) {
						return _user$project$Content_Commands$folderDecoder;
					}))));
	var _user$project$Content_Commands$apiUrl = function (origin) {
		return A2(_elm_lang$core$Basics_ops['++'], origin, 'api/');
	};
	var _user$project$Content_Commands$foldersUrl = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$Content_Commands$apiUrl(origin),
				A2(_elm_lang$core$Basics_ops['++'], 'Folders/', nodeId));
		});
	var _user$project$Content_Commands$filesUrl = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$Content_Commands$apiUrl(origin),
				A2(_elm_lang$core$Basics_ops['++'], 'Files/', nodeId));
		});
	var _user$project$Content_Commands$usersUrl = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$Content_Commands$apiUrl(origin),
				A2(_elm_lang$core$Basics_ops['++'], 'Users/', nodeId));
		});
	var _user$project$Content_Commands$casesUrl = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$Content_Commands$apiUrl(origin),
				A2(_elm_lang$core$Basics_ops['++'], 'Cases/', nodeId));
		});
	var _user$project$Content_Commands$fetchCases = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$http$Http$send,
				_user$project$Content_Messages$OnFetchCases(nodeId),
				A2(
					_elm_lang$http$Http$get,
					A2(_user$project$Content_Commands$casesUrl, origin, nodeId),
					_user$project$Content_Commands$casesDecoder));
		});
	var _user$project$Content_Commands$fetchUsers = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$http$Http$send,
				_user$project$Content_Messages$OnFetchUsers(nodeId),
				A2(
					_elm_lang$http$Http$get,
					A2(_user$project$Content_Commands$usersUrl, origin, nodeId),
					_user$project$Content_Commands$usersDecoder));
		});
	var _user$project$Content_Commands$fetchFiles = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$http$Http$send,
				_user$project$Content_Messages$OnFetchFiles(nodeId),
				A2(
					_elm_lang$http$Http$get,
					A2(_user$project$Content_Commands$filesUrl, origin, nodeId),
					_user$project$Content_Commands$filesDecoder));
		});
	var _user$project$Content_Commands$fetchFolders = F2(
		function (origin, nodeId) {
			return A2(
				_elm_lang$http$Http$send,
				_user$project$Content_Messages$OnFetchFolders(nodeId),
				A2(
					_elm_lang$http$Http$get,
					A2(_user$project$Content_Commands$foldersUrl, origin, nodeId),
					_user$project$Content_Commands$foldersDecoder));
		});
	var _user$project$Content_Commands$fetchContent = F3(
		function (origin, tabType, nodeId) {
			if (!_elm_lang$core$Native_Utils.eq(nodeId, '')) {
				var _p2 = tabType;
				switch (_p2.ctor) {
					case 'FoldersType':
						return A2(_user$project$Content_Commands$fetchFolders, origin, nodeId);
					case 'UsersType':
						return A2(_user$project$Content_Commands$fetchUsers, origin, nodeId);
					case 'CasesType':
						return A2(_user$project$Content_Commands$fetchCases, origin, nodeId);
					default:
						return _elm_lang$core$Platform_Cmd$none;
				}
			} else {
				return _elm_lang$core$Platform_Cmd$none;
			}
		});

	var _user$project$Content_Update$updatePathFromTree = F6(
		function (origin, content, folders, updatedTree, cmdTree, path) {
			var maybeSelected = A2(
				_elm_lang$core$Debug$log,
				'path',
				_elm_lang$core$List$head(path));
			var cmdFiles = function () {
				var _p0 = maybeSelected;
				if (_p0.ctor === 'Just') {
					return A2(_user$project$Content_Commands$fetchFiles, origin, _p0._0.id);
				} else {
					return _elm_lang$core$Platform_Cmd$none;
				}
			}();
			var cmdBatch = _elm_lang$core$Platform_Cmd$batch(
				{
					ctor: '::',
					_0: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Content_Messages$TreeMsg, cmdTree),
					_1: {
						ctor: '::',
						_0: cmdFiles,
						_1: {ctor: '[]'}
					}
				});
			return {
				ctor: '_Tuple2',
				_0: _user$project$Content_Models$FoldersContent(
					_elm_lang$core$Native_Utils.update(
						folders,
						{tree: updatedTree, path: path})),
				_1: cmdBatch
			};
		});
	var _user$project$Content_Update$update = F3(
		function (origin, message, content) {
			var _p1 = message;
			switch (_p1.ctor) {
				case 'OnFetchFolders':
					if (_p1._1.ctor === 'Ok') {
						return {
							ctor: '_Tuple2',
							_0: _user$project$Content_Models$FoldersContent(_p1._1._0),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					} else {
						return {ctor: '_Tuple2', _0: content, _1: _elm_lang$core$Platform_Cmd$none};
					}
				case 'OnFetchUsers':
					if (_p1._1.ctor === 'Ok') {
						return {
							ctor: '_Tuple2',
							_0: _user$project$Content_Models$UsersContent(_p1._1._0),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					} else {
						return {ctor: '_Tuple2', _0: content, _1: _elm_lang$core$Platform_Cmd$none};
					}
				case 'OnFetchCases':
					if (_p1._1.ctor === 'Ok') {
						return {
							ctor: '_Tuple2',
							_0: _user$project$Content_Models$CasesContent(_p1._1._0),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					} else {
						return {ctor: '_Tuple2', _0: content, _1: _elm_lang$core$Platform_Cmd$none};
					}
				case 'OnFetchFiles':
					if (_p1._1.ctor === 'Ok') {
						var _p2 = content;
						switch (_p2.ctor) {
							case 'FoldersContent':
								return {
									ctor: '_Tuple2',
									_0: _user$project$Content_Models$FoldersContent(
										_elm_lang$core$Native_Utils.update(
											_p2._0,
											{files: _p1._1._0})),
									_1: _elm_lang$core$Platform_Cmd$none
								};
							case 'UsersContent':
								return {ctor: '_Tuple2', _0: content, _1: _elm_lang$core$Platform_Cmd$none};
							case 'CasesContent':
								return {ctor: '_Tuple2', _0: content, _1: _elm_lang$core$Platform_Cmd$none};
							default:
								return {ctor: '_Tuple2', _0: content, _1: _elm_lang$core$Platform_Cmd$none};
						}
					} else {
						return {ctor: '_Tuple2', _0: content, _1: _elm_lang$core$Platform_Cmd$none};
					}
				case 'TreeMsg':
					var _p3 = content;
					switch (_p3.ctor) {
						case 'FoldersContent':
							var _p5 = _p3._0;
							var _p4 = A2(_user$project$Tree_Update$update, _p1._0, _p5.tree);
							var updatedTree = _p4._0;
							var cmdTree = _p4._1;
							var path = _p4._2;
							return A6(_user$project$Content_Update$updatePathFromTree, origin, content, _p5, updatedTree, cmdTree, path);
						case 'UsersContent':
							return {ctor: '_Tuple2', _0: content, _1: _elm_lang$core$Platform_Cmd$none};
						case 'CasesContent':
							return {ctor: '_Tuple2', _0: content, _1: _elm_lang$core$Platform_Cmd$none};
						default:
							return {ctor: '_Tuple2', _0: content, _1: _elm_lang$core$Platform_Cmd$none};
					}
				case 'SetQuery':
					var _p6 = content;
					switch (_p6.ctor) {
						case 'FoldersContent':
							return {
								ctor: '_Tuple2',
								_0: _user$project$Content_Models$FoldersContent(
									_elm_lang$core$Native_Utils.update(
										_p6._0,
										{query: _p1._0})),
								_1: _elm_lang$core$Platform_Cmd$none
							};
						case 'UsersContent':
							return {ctor: '_Tuple2', _0: content, _1: _elm_lang$core$Platform_Cmd$none};
						case 'CasesContent':
							return {ctor: '_Tuple2', _0: content, _1: _elm_lang$core$Platform_Cmd$none};
						default:
							return {ctor: '_Tuple2', _0: content, _1: _elm_lang$core$Platform_Cmd$none};
					}
				default:
					var _p7 = content;
					switch (_p7.ctor) {
						case 'FoldersContent':
							return {
								ctor: '_Tuple2',
								_0: _user$project$Content_Models$FoldersContent(
									_elm_lang$core$Native_Utils.update(
										_p7._0,
										{tableState: _p1._0})),
								_1: _elm_lang$core$Platform_Cmd$none
							};
						case 'UsersContent':
							return {ctor: '_Tuple2', _0: content, _1: _elm_lang$core$Platform_Cmd$none};
						case 'CasesContent':
							return {ctor: '_Tuple2', _0: content, _1: _elm_lang$core$Platform_Cmd$none};
						default:
							return {ctor: '_Tuple2', _0: content, _1: _elm_lang$core$Platform_Cmd$none};
					}
			}
		});

	var _user$project$Container_Update$updatePathFromTree = F5(
		function (origin, container, updatedTree, cmdTree, path) {
			var maybeSelected = _elm_lang$core$List$head(path);
			var _p0 = function () {
				var _p1 = maybeSelected;
				if (_p1.ctor === 'Just') {
					var _p2 = _p1._0;
					return {ctor: '_Tuple2', _0: _p2.id, _1: _p2.nodeType};
				} else {
					return {ctor: '_Tuple2', _0: container.tree.id, _1: container.tree.nodeType};
				}
			}();
			var headerId = _p0._0;
			var headerType = _p0._1;
			var cmdHeader = (!_elm_lang$core$Native_Utils.eq(
				headerId,
				_user$project$Header_Models$headerId(container.headerInfo))) ? A2(
				_elm_lang$core$Platform_Cmd$map,
				_user$project$Container_Messages$HeaderMsg,
				A3(_user$project$Header_Commands$fetchHeader, origin, headerType, headerId)) : _elm_lang$core$Platform_Cmd$none;
			var cmdBatch = _elm_lang$core$Platform_Cmd$batch(
				{
					ctor: '::',
					_0: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Container_Messages$TreeMsg, cmdTree),
					_1: {
						ctor: '::',
						_0: cmdHeader,
						_1: {ctor: '[]'}
					}
				});
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.update(
					container,
					{tree: updatedTree, path: path}),
				_1: cmdBatch
			};
		});
	var _user$project$Container_Update$update = F3(
		function (origin, message, container) {
			var _p3 = message;
			switch (_p3.ctor) {
				case 'ShowContainer':
					return {
						ctor: '_Tuple2',
						_0: container,
						_1: _elm_lang$navigation$Navigation$newUrl('#container/customer/path/Customer-46-Client')
					};
				case 'SelectPath':
					var _p4 = A2(
						_user$project$Tree_Update$update,
						_user$project$Tree_Messages$SelectNode(_p3._0),
						container.tree);
					var updatedTree = _p4._0;
					var cmdTree = _p4._1;
					var path = _p4._2;
					return A5(_user$project$Container_Update$updatePathFromTree, origin, container, updatedTree, cmdTree, path);
				case 'SelectTab':
					var _p6 = _p3._0;
					var maybeTab = _elm_lang$core$List$head(
						A2(
							_elm_lang$core$List$filter,
							function (t) {
								return _elm_lang$core$Native_Utils.eq(t.tabType, _p6);
							},
							container.headerInfo.tabs));
					var updatedTab = function () {
						var _p5 = maybeTab;
						if (_p5.ctor === 'Just') {
							return _p5._0;
						} else {
							return A2(
								_elm_lang$core$Maybe$withDefault,
								A2(_user$project$Header_Models$Tab, _user$project$Header_Models$EmptyTab, ''),
								_elm_lang$core$List$head(container.headerInfo.tabs));
						}
					}();
					var nodeId = _user$project$Header_Models$headerId(container.headerInfo);
					var cmdContent = A3(_user$project$Content_Commands$fetchContent, origin, _p6, nodeId);
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							container,
							{tab: updatedTab}),
						_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Container_Messages$ContentMsg, cmdContent)
					};
				case 'TreeMsg':
					var _p7 = A2(_user$project$Tree_Update$update, _p3._0, container.tree);
					var updatedTree = _p7._0;
					var cmdTree = _p7._1;
					var path = _p7._2;
					return A5(_user$project$Container_Update$updatePathFromTree, origin, container, updatedTree, cmdTree, path);
				case 'HeaderMsg':
					var _p8 = A2(_user$project$Header_Update$update, _p3._0, container.headerInfo);
					var updatedHeaderInfo = _p8._0;
					var cmdHeader = _p8._1;
					var nodeId = _user$project$Header_Models$headerId(updatedHeaderInfo);
					var maybeTab = _elm_lang$core$List$head(
						A2(
							_elm_lang$core$List$filter,
							function (t) {
								return _elm_lang$core$Native_Utils.eq(t.tabType, container.tab.tabType);
							},
							updatedHeaderInfo.tabs));
					var updatedTab = function () {
						var _p9 = maybeTab;
						if (_p9.ctor === 'Just') {
							return _p9._0;
						} else {
							return A2(
								_elm_lang$core$Maybe$withDefault,
								A2(_user$project$Header_Models$Tab, _user$project$Header_Models$EmptyTab, ''),
								_elm_lang$core$List$head(updatedHeaderInfo.tabs));
						}
					}();
					var cmdContent = A3(_user$project$Content_Commands$fetchContent, origin, updatedTab.tabType, nodeId);
					var cmdBatch = _elm_lang$core$Platform_Cmd$batch(
						{
							ctor: '::',
							_0: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Container_Messages$HeaderMsg, cmdHeader),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Container_Messages$ContentMsg, cmdContent),
								_1: {ctor: '[]'}
							}
						});
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							container,
							{headerInfo: updatedHeaderInfo, tab: updatedTab}),
						_1: cmdBatch
					};
				default:
					var _p10 = A3(_user$project$Content_Update$update, origin, _p3._0, container.content);
					var updatedContent = _p10._0;
					var cmdContent = _p10._1;
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							container,
							{content: updatedContent}),
						_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Container_Messages$ContentMsg, cmdContent)
					};
			}
		});

	var _user$project$Tree_View$viewNode = F2(
		function (origin, node) {
			var _p0 = node.childNodes;
			var childNodes = _p0._0;
			var nodeStyle = A2(
				_elm_lang$core$Basics_ops['++'],
				'k-in btn regular p0',
				node.selected ? ' k-state-selected' : '');
			var _p1 = function () {
				var _p2 = node.childrenState;
				switch (_p2.ctor) {
					case 'Collapsed':
						return {ctor: '_Tuple2', _0: 'k-icon k-plus', _1: 'fa fa-caret-right'};
					case 'Expanding':
						return {ctor: '_Tuple2', _0: 'k-icon k-minus', _1: 'fa fa-spin fa-refresh'};
					case 'Expanded':
						return {ctor: '_Tuple2', _0: 'k-icon k-minus', _1: 'fa fa-caret-down'};
					default:
						return {ctor: '_Tuple2', _0: '', _1: ''};
				}
			}();
			var iconClass = _p1._0;
			var faClass = _p1._1;
			var expandedValue = _elm_lang$core$Native_Utils.eq(node.childrenState, _user$project$Tree_Models$Expanded) ? 'true' : 'false';
			var childStyle = _elm_lang$core$Native_Utils.eq(node.childrenState, _user$project$Tree_Models$Expanded) ? 'display: block;' : 'display: none; overflow: visible; height: 0px;';
			return A2(
				_elm_lang$html$Html$li,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('k-item'),
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'aria-expanded', expandedValue),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'data-expanded', expandedValue),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'treeitem'),
								_1: {ctor: '[]'}
							}
						}
					}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('k-mid'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$span,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class(iconClass),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'presentation'),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onClick(
												A2(_user$project$Tree_Messages$ToggleNode, origin, node.id)),
											_1: {ctor: '[]'}
										}
									}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$i,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class(faClass),
											_1: {ctor: '[]'}
										},
										{ctor: '[]'}),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class(nodeStyle),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onClick(
												_user$project$Tree_Messages$SelectNode(node.id)),
											_1: {ctor: '[]'}
										}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(node.name),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$ul,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('k-group'),
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'group'),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$html$Html_Attributes$attribute, 'style', childStyle),
										_1: {ctor: '[]'}
									}
								}
							},
							A2(
								_elm_lang$core$List$map,
								_user$project$Tree_View$viewNode(origin),
								childNodes)),
						_1: {ctor: '[]'}
					}
				});
		});
	var _user$project$Tree_View$viewRoot = F2(
		function (origin, tree) {
			var _p3 = tree.childNodes;
			var childNodes = _p3._0;
			var nodeStyle = A2(
				_elm_lang$core$Basics_ops['++'],
				'k-in btn regular p0',
				tree.selected ? ' k-state-selected' : '');
			var _p4 = function () {
				var _p5 = tree.childrenState;
				switch (_p5.ctor) {
					case 'Collapsed':
						return {ctor: '_Tuple2', _0: 'k-icon k-plus', _1: 'fa fa-caret-right'};
					case 'Expanding':
						return {ctor: '_Tuple2', _0: 'k-icon k-minus', _1: 'fa fa-spin fa-refresh'};
					case 'Expanded':
						return {ctor: '_Tuple2', _0: 'k-icon k-minus', _1: 'fa fa-caret-down'};
					default:
						return {ctor: '_Tuple2', _0: '', _1: ''};
				}
			}();
			var iconClass = _p4._0;
			var faClass = _p4._1;
			var expandedValue = _elm_lang$core$Native_Utils.eq(tree.childrenState, _user$project$Tree_Models$Expanded) ? 'true' : 'false';
			var childStyle = _elm_lang$core$Native_Utils.eq(tree.childrenState, _user$project$Tree_Models$Expanded) ? 'display: block;' : 'display: none; overflow: visible; height: 0px;';
			return A2(
				_elm_lang$html$Html$li,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('k-item'),
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'aria-expanded', expandedValue),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'data-expanded', expandedValue),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'treeitem'),
								_1: {ctor: '[]'}
							}
						}
					}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('k-mid'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$span,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class(iconClass),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'presentation'),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onClick(
												A2(_user$project$Tree_Messages$ToggleNode, origin, tree.id)),
											_1: {ctor: '[]'}
										}
									}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$i,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class(faClass),
											_1: {ctor: '[]'}
										},
										{ctor: '[]'}),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class(nodeStyle),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onClick(_user$project$Tree_Messages$SelectRoot),
											_1: {ctor: '[]'}
										}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(tree.name),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$ul,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('k-group'),
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'group'),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$html$Html_Attributes$attribute, 'style', childStyle),
										_1: {ctor: '[]'}
									}
								}
							},
							A2(
								_elm_lang$core$List$map,
								_user$project$Tree_View$viewNode(origin),
								childNodes)),
						_1: {ctor: '[]'}
					}
				});
		});
	var _user$project$Tree_View$viewTree = F2(
		function (origin, tree) {
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('k-treeview'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$ul,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('k-group'),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'group'),
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'style', 'display: block;'),
									_1: {ctor: '[]'}
								}
							}
						},
						{
							ctor: '::',
							_0: A2(_user$project$Tree_View$viewRoot, origin, tree),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				});
		});
	var _user$project$Tree_View$view = F2(
		function (origin, tree) {
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(_user$project$Tree_View$viewTree, origin, tree),
					_1: {ctor: '[]'}
				});
		});

	var _user$project$Header_View$headerEmpty = A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('body-header'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Empty'),
			_1: {ctor: '[]'}
		});
	var _user$project$Header_View$fullAddress = F5(
		function (maybeAddress1, maybeAddress2, maybeAddress3, maybeAddress4, maybePostcode) {
			return _elm_lang$core$Maybe$Just(
				A2(
					_elm_lang$core$String$join,
					', ',
					A2(
						_elm_lang$core$List$filter,
						function (a) {
							return _elm_lang$core$Native_Utils.cmp(
								_elm_lang$core$String$length(a),
								0) > 0;
						},
						A2(
							_elm_lang$core$List$map,
							function (mb) {
								return A2(_elm_lang$core$Maybe$withDefault, '', mb);
							},
							{
								ctor: '::',
								_0: maybeAddress1,
								_1: {
									ctor: '::',
									_0: maybeAddress2,
									_1: {
										ctor: '::',
										_0: maybeAddress3,
										_1: {
											ctor: '::',
											_0: maybeAddress4,
											_1: {
												ctor: '::',
												_0: maybePostcode,
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}))));
		});
	var _user$project$Header_View$headerItem = F4(
		function (title, icon, accessType, maybeValue) {
			var hidden = {ctor: '_Tuple2', _0: 'display: none; height: 0px;', _1: ''};
			var _p0 = function () {
				var _p1 = maybeValue;
				if (_p1.ctor === 'Just') {
					var _p2 = _p1._0;
					return ((!_elm_lang$core$Native_Utils.eq(accessType, _user$project$Header_Models$None)) && (_elm_lang$core$Native_Utils.cmp(
						_elm_lang$core$String$length(_p2),
						0) > 0)) ? {
						ctor: '_Tuple2',
						_0: 'display: block;',
						_1: A2(_elm_lang$core$Basics_ops['++'], ' ', _p2)
					} : hidden;
				} else {
					return hidden;
				}
			}();
			var style = _p0._0;
			var textValue = _p0._1;
			return A2(
				_elm_lang$html$Html$p,
				{
					ctor: '::',
					_0: A2(_elm_lang$html$Html_Attributes$attribute, 'style', style),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$abbr,
						{
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'title', title),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$i,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class(
										A2(_elm_lang$core$Basics_ops['++'], 'fa fa-', icon)),
									_1: {ctor: '[]'}
								},
								{ctor: '[]'}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html$text(textValue),
						_1: {ctor: '[]'}
					}
				});
		});
	var _user$project$Header_View$headerCustomer = function (customer) {
		var values = customer.values;
		var address = A5(_user$project$Header_View$fullAddress, values.address1, values.address2, values.address3, values.address4, values.postcode);
		var backgroundImage = function () {
			var _p3 = values.image;
			if (_p3.ctor === 'Just') {
				return {
					ctor: '_Tuple2',
					_0: 'background-image',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						'url(\'',
						A2(_elm_lang$core$Basics_ops['++'], _p3._0, '\')'))
				};
			} else {
				return {ctor: '_Tuple2', _0: 'display', _1: 'none'};
			}
		}();
		var access = customer.access;
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('body-header'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('body-header-image'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$style(
								{
									ctor: '::',
									_0: backgroundImage,
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('body-header-content clearfix pl2 pr2'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A4(_user$project$Header_View$headerItem, 'Name', 'globe', access.name, values.name),
							_1: {
								ctor: '::',
								_0: A4(_user$project$Header_View$headerItem, 'Address', 'home', access.address, address),
								_1: {
									ctor: '::',
									_0: A4(_user$project$Header_View$headerItem, 'Contact', 'user-o', access.contact, values.contact),
									_1: {
										ctor: '::',
										_0: A4(_user$project$Header_View$headerItem, 'Phone', 'phone', access.contact, values.tel),
										_1: {
											ctor: '::',
											_0: A4(_user$project$Header_View$headerItem, 'Email', 'envelope', access.contact, values.email),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('body-header-extra'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Extra'),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}
			});
	};
	var _user$project$Header_View$headerClient = function (client) {
		var values = client.values;
		var address = A5(_user$project$Header_View$fullAddress, values.address1, values.address2, values.address3, values.address4, values.postcode);
		var backgroundImage = function () {
			var _p4 = values.image;
			if (_p4.ctor === 'Just') {
				return {
					ctor: '_Tuple2',
					_0: 'background-image',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						'url(\'',
						A2(_elm_lang$core$Basics_ops['++'], _p4._0, '\')'))
				};
			} else {
				return {ctor: '_Tuple2', _0: 'display', _1: 'none'};
			}
		}();
		var access = client.access;
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('body-header'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('body-header-image'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$style(
								{
									ctor: '::',
									_0: backgroundImage,
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('body-header-content clearfix pl2 pr2'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A4(_user$project$Header_View$headerItem, 'Ref', 'wrench', access.name, values.no),
							_1: {
								ctor: '::',
								_0: A4(_user$project$Header_View$headerItem, 'Name', 'globe', access.name, values.name),
								_1: {
									ctor: '::',
									_0: A4(_user$project$Header_View$headerItem, 'Address', 'home', access.address, address),
									_1: {
										ctor: '::',
										_0: A4(_user$project$Header_View$headerItem, 'Contact', 'user-o', access.contact, values.contact),
										_1: {
											ctor: '::',
											_0: A4(_user$project$Header_View$headerItem, 'Phone', 'phone', access.contact, values.tel),
											_1: {
												ctor: '::',
												_0: A4(_user$project$Header_View$headerItem, 'Email', 'envelope', access.contact, values.email),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('body-header-extra'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Extra'),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}
			});
	};
	var _user$project$Header_View$headerSite = function (site) {
		var values = site.values;
		var address = A5(_user$project$Header_View$fullAddress, values.address1, values.address2, values.address3, values.address4, values.postcode);
		var backgroundImage = function () {
			var _p5 = values.image;
			if (_p5.ctor === 'Just') {
				return {
					ctor: '_Tuple2',
					_0: 'background-image',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						'url(\'',
						A2(_elm_lang$core$Basics_ops['++'], _p5._0, '\')'))
				};
			} else {
				return {ctor: '_Tuple2', _0: 'display', _1: 'none'};
			}
		}();
		var access = site.access;
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('body-header'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('body-header-image'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$style(
								{
									ctor: '::',
									_0: backgroundImage,
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('body-header-content clearfix pl2 pr2'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A4(_user$project$Header_View$headerItem, 'Ref', 'wrench', access.name, values.no),
							_1: {
								ctor: '::',
								_0: A4(_user$project$Header_View$headerItem, 'Name', 'globe', access.name, values.name),
								_1: {
									ctor: '::',
									_0: A4(_user$project$Header_View$headerItem, 'Address', 'home', access.address, address),
									_1: {
										ctor: '::',
										_0: A4(_user$project$Header_View$headerItem, 'Contact', 'user-o', access.contact, values.contact),
										_1: {
											ctor: '::',
											_0: A4(_user$project$Header_View$headerItem, 'Phone', 'phone', access.contact, values.tel),
											_1: {
												ctor: '::',
												_0: A4(_user$project$Header_View$headerItem, 'Email', 'envelope', access.contact, values.email),
												_1: {
													ctor: '::',
													_0: A4(_user$project$Header_View$headerItem, 'Division Mgr', 'user-o', access.managers, values.divisionMgr),
													_1: {
														ctor: '::',
														_0: A4(_user$project$Header_View$headerItem, 'Area Mgr', 'user-o', access.managers, values.areaMgr),
														_1: {
															ctor: '::',
															_0: A4(_user$project$Header_View$headerItem, 'Supervisor', 'user-o', access.managers, values.supervisor),
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('body-header-extra'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Extra'),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}
			});
	};
	var _user$project$Header_View$headerStaff = function (staff) {
		var values = staff.values;
		var address = A5(_user$project$Header_View$fullAddress, values.address1, values.address2, values.address3, values.address4, values.postcode);
		var backgroundImage = function () {
			var _p6 = values.image;
			if (_p6.ctor === 'Just') {
				return {
					ctor: '_Tuple2',
					_0: 'background-image',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						'url(\'',
						A2(_elm_lang$core$Basics_ops['++'], _p6._0, '\')'))
				};
			} else {
				return {ctor: '_Tuple2', _0: 'display', _1: 'none'};
			}
		}();
		var access = staff.access;
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('body-header'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('body-header-image'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$style(
								{
									ctor: '::',
									_0: backgroundImage,
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('body-header-content clearfix pl2 pr2'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A4(_user$project$Header_View$headerItem, 'Ref', 'wrench', access.name, values.no),
							_1: {
								ctor: '::',
								_0: A4(_user$project$Header_View$headerItem, 'Name', 'globe', access.name, values.name),
								_1: {
									ctor: '::',
									_0: A4(_user$project$Header_View$headerItem, 'Address', 'home', access.address, address),
									_1: {
										ctor: '::',
										_0: A4(_user$project$Header_View$headerItem, 'Tel', 'phone', access.contact, values.tel),
										_1: {
											ctor: '::',
											_0: A4(_user$project$Header_View$headerItem, 'Mob', 'phone', access.contact, values.mob),
											_1: {
												ctor: '::',
												_0: A4(_user$project$Header_View$headerItem, 'Email', 'envelope', access.contact, values.email),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('body-header-extra'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Extra'),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}
			});
	};
	var _user$project$Header_View$headerRoot = function (root) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('body-header'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Root'),
				_1: {ctor: '[]'}
			});
	};
	var _user$project$Header_View$view = function (headerInfo) {
		var _p7 = headerInfo.header;
		switch (_p7.ctor) {
			case 'RootHeader':
				return _user$project$Header_View$headerRoot(_p7._0);
			case 'CustomerHeader':
				return _user$project$Header_View$headerCustomer(_p7._0);
			case 'ClientHeader':
				return _user$project$Header_View$headerClient(_p7._0);
			case 'SiteHeader':
				return _user$project$Header_View$headerSite(_p7._0);
			case 'StaffHeader':
				return _user$project$Header_View$headerStaff(_p7._0);
			default:
				return _user$project$Header_View$headerEmpty;
		}
	};

	var _user$project$Content_View$contentEmpty = A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('body-content'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('body-content-content'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Empty'),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
	var _user$project$Content_View$contentCases = function (cases) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('body-content'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('body-content-content'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Cases'),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	};
	var _user$project$Content_View$contentUsers = function (users) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('body-content'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('body-content-content'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Users'),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	};
	var _user$project$Content_View$config = _evancz$elm_sortable_table$Table$config(
		{
			toId: function (_) {
				return _.name;
			},
			toMsg: _user$project$Content_Messages$SetTableState,
			columns: {
				ctor: '::',
				_0: A2(
					_evancz$elm_sortable_table$Table$stringColumn,
					'Name',
					function (_) {
						return _.name;
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_evancz$elm_sortable_table$Table$intColumn,
						'DateTime',
						function (_) {
							return _.datetime;
						}),
					_1: {ctor: '[]'}
				}
			}
		});
	var _user$project$Content_View$contentFiles = function (folders) {
		var lowerQuery = _elm_lang$core$String$toLower(folders.query);
		var acceptableFiles = A2(
			_elm_lang$core$List$filter,
			function (_p0) {
				return A2(
					_elm_lang$core$String$contains,
					lowerQuery,
					_elm_lang$core$String$toLower(
						function (_) {
							return _.name;
						}(_p0)));
			},
			folders.files);
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h1,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Files'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$input,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$placeholder('Search by Name'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onInput(_user$project$Content_Messages$SetQuery),
								_1: {ctor: '[]'}
							}
						},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: A3(_evancz$elm_sortable_table$Table$view, _user$project$Content_View$config, folders.tableState, acceptableFiles),
						_1: {ctor: '[]'}
					}
				}
			});
	};
	var _user$project$Content_View$contentFolders = F2(
		function (origin, folders) {
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('body-content'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('body-content-sidebar'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$map,
								_user$project$Content_Messages$TreeMsg,
								A2(_user$project$Tree_View$view, origin, folders.tree)),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('body-content-content'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _user$project$Content_View$contentFiles(folders),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				});
		});
	var _user$project$Content_View$view = F2(
		function (origin, content) {
			var _p1 = content;
			switch (_p1.ctor) {
				case 'FoldersContent':
					return A2(_user$project$Content_View$contentFolders, origin, _p1._0);
				case 'UsersContent':
					return _user$project$Content_View$contentUsers(_p1._0);
				case 'CasesContent':
					return _user$project$Content_View$contentCases(_p1._0);
				default:
					return _user$project$Content_View$contentEmpty;
			}
		});

	var _user$project$Container_View$tabItem = F2(
		function (selected, tab) {
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'tab', _1: true},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'active',
									_1: _elm_lang$core$Native_Utils.eq(selected.tabType, tab.tabType)
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'clickable',
										_1: !_elm_lang$core$Native_Utils.eq(selected.tabType, tab.tabType)
									},
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onClick(
							_user$project$Container_Messages$SelectTab(tab.tabType)),
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(tab.name),
					_1: {ctor: '[]'}
				});
		});
	var _user$project$Container_View$viewTabs = function (container) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('tabs'),
				_1: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$List$map,
				_user$project$Container_View$tabItem(container.tab),
				container.headerInfo.tabs));
	};
	var _user$project$Container_View$lastPathItem = function (item) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('path-item'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(item.name),
				_1: {ctor: '[]'}
			});
	};
	var _user$project$Container_View$clickablePathItem = function (item) {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('path-item clickable'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(
								_user$project$Container_Messages$SelectPath(item.id)),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(item.name),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$i,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('fa fa-chevron-right'),
							_1: {ctor: '[]'}
						},
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}
			});
	};
	var _user$project$Container_View$viewPath = function (container) {
		var tree = container.tree;
		var rootItem = {id: tree.id, nodeType: tree.nodeType, name: tree.name};
		var _p0 = function () {
			var _p1 = container.path;
			if (_p1.ctor === '[]') {
				return {
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: rootItem
				};
			} else {
				var _p2 = _p1._0;
				var pathItems = A2(
					_elm_lang$core$List$map,
					function (n) {
						return {id: n.id, nodeType: n.nodeType, name: n.name};
					},
					_elm_lang$core$List$reverse(_p1._1));
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: rootItem, _1: pathItems},
					_1: {id: _p2.id, nodeType: _p2.nodeType, name: _p2.name}
				};
			}
		}();
		var items = _p0._0;
		var last = _p0._1;
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('breadcrumb'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					A2(_elm_lang$core$List$map, _user$project$Container_View$clickablePathItem, items)),
				_1: {
					ctor: '::',
					_0: _user$project$Container_View$lastPathItem(last),
					_1: {ctor: '[]'}
				}
			});
	};
	var _user$project$Container_View$view = F2(
		function (origin, container) {
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('fullview'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('sidebar'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$map,
								_user$project$Container_Messages$TreeMsg,
								A2(_user$project$Tree_View$view, origin, container.tree)),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('body'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$map,
									_user$project$Container_Messages$HeaderMsg,
									_user$project$Header_View$view(container.headerInfo)),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$div,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('body-path'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _user$project$Container_View$viewPath(container),
											_1: {
												ctor: '::',
												_0: _user$project$Container_View$viewTabs(container),
												_1: {ctor: '[]'}
											}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$map,
											_user$project$Container_Messages$ContentMsg,
											A2(_user$project$Content_View$view, origin, container.content)),
										_1: {ctor: '[]'}
									}
								}
							}),
						_1: {ctor: '[]'}
					}
				});
		});

	var _user$project$Players_Models$new = {id: '0', name: '', level: 1};
	var _user$project$Players_Models$Player = F3(
		function (a, b, c) {
			return {id: a, name: b, level: c};
		});

	var _user$project$Players_Messages$OnSave = function (a) {
		return {ctor: 'OnSave', _0: a};
	};
	var _user$project$Players_Messages$ChangeLevel = F2(
		function (a, b) {
			return {ctor: 'ChangeLevel', _0: a, _1: b};
		});
	var _user$project$Players_Messages$ShowPlayer = function (a) {
		return {ctor: 'ShowPlayer', _0: a};
	};
	var _user$project$Players_Messages$ShowPlayers = {ctor: 'ShowPlayers'};
	var _user$project$Players_Messages$OnFetchAll = function (a) {
		return {ctor: 'OnFetchAll', _0: a};
	};

	var _user$project$Teams_Models$new = {id: '0', name: '', level: 1};
	var _user$project$Teams_Models$Team = F3(
		function (a, b, c) {
			return {id: a, name: b, level: c};
		});

	var _user$project$Teams_Messages$OnSave = function (a) {
		return {ctor: 'OnSave', _0: a};
	};
	var _user$project$Teams_Messages$ChangeLevel = F2(
		function (a, b) {
			return {ctor: 'ChangeLevel', _0: a, _1: b};
		});
	var _user$project$Teams_Messages$ShowTeam = function (a) {
		return {ctor: 'ShowTeam', _0: a};
	};
	var _user$project$Teams_Messages$ShowTeams = {ctor: 'ShowTeams'};
	var _user$project$Teams_Messages$OnFetchAll = function (a) {
		return {ctor: 'OnFetchAll', _0: a};
	};

	var _user$project$Messages$OnLocationChange = function (a) {
		return {ctor: 'OnLocationChange', _0: a};
	};
	var _user$project$Messages$ContainerMsg = function (a) {
		return {ctor: 'ContainerMsg', _0: a};
	};
	var _user$project$Messages$TeamsMsg = function (a) {
		return {ctor: 'TeamsMsg', _0: a};
	};
	var _user$project$Messages$PlayersMsg = function (a) {
		return {ctor: 'PlayersMsg', _0: a};
	};

	var _user$project$Routing$NotFoundRoute = {ctor: 'NotFoundRoute'};
	var _user$project$Routing$ContainerRoute = F2(
		function (a, b) {
			return {ctor: 'ContainerRoute', _0: a, _1: b};
		});
	var _user$project$Routing$TeamRoute = function (a) {
		return {ctor: 'TeamRoute', _0: a};
	};
	var _user$project$Routing$TeamsRoute = {ctor: 'TeamsRoute'};
	var _user$project$Routing$PlayerRoute = function (a) {
		return {ctor: 'PlayerRoute', _0: a};
	};
	var _user$project$Routing$PlayersRoute = {ctor: 'PlayersRoute'};
	var _user$project$Routing$matchers = _evancz$url_parser$UrlParser$oneOf(
		{
			ctor: '::',
			_0: A2(_evancz$url_parser$UrlParser$map, _user$project$Routing$TeamsRoute, _evancz$url_parser$UrlParser$top),
			_1: {
				ctor: '::',
				_0: A2(
					_evancz$url_parser$UrlParser$map,
					_user$project$Routing$PlayerRoute,
					A2(
						_evancz$url_parser$UrlParser_ops['</>'],
						_evancz$url_parser$UrlParser$s('players'),
						_evancz$url_parser$UrlParser$string)),
				_1: {
					ctor: '::',
					_0: A2(
						_evancz$url_parser$UrlParser$map,
						_user$project$Routing$PlayersRoute,
						_evancz$url_parser$UrlParser$s('players')),
					_1: {
						ctor: '::',
						_0: A2(
							_evancz$url_parser$UrlParser$map,
							_user$project$Routing$TeamRoute,
							A2(
								_evancz$url_parser$UrlParser_ops['</>'],
								_evancz$url_parser$UrlParser$s('teams'),
								_evancz$url_parser$UrlParser$string)),
						_1: {
							ctor: '::',
							_0: A2(
								_evancz$url_parser$UrlParser$map,
								_user$project$Routing$TeamsRoute,
								_evancz$url_parser$UrlParser$s('teams')),
							_1: {
								ctor: '::',
								_0: A2(
									_evancz$url_parser$UrlParser$map,
									_user$project$Routing$ContainerRoute,
									A2(
										_evancz$url_parser$UrlParser_ops['</>'],
										_evancz$url_parser$UrlParser$s('container'),
										A2(
											_evancz$url_parser$UrlParser_ops['</>'],
											_evancz$url_parser$UrlParser$string,
											A2(
												_evancz$url_parser$UrlParser_ops['</>'],
												_evancz$url_parser$UrlParser$s('path'),
												_evancz$url_parser$UrlParser$string)))),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		});
	var _user$project$Routing$parseLocation = function (location) {
		var _p0 = A2(_evancz$url_parser$UrlParser$parseHash, _user$project$Routing$matchers, location);
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return _user$project$Routing$NotFoundRoute;
		}
	};

	var _user$project$Models$baseUrl = function (location) {
		var parts = A2(_elm_lang$core$String$split, '/', location.pathname);
		var pathname = A2(
			_elm_lang$core$String$join,
			'/',
			A2(
				_elm_lang$core$List$take,
				_elm_lang$core$List$length(parts) - 2,
				parts));
		var origin = location.origin;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			origin,
			A2(_elm_lang$core$Basics_ops['++'], pathname, '/'));
	};
	var _user$project$Models$initialModel = F2(
		function (route, location) {
			return {
				players: {ctor: '[]'},
				teams: {ctor: '[]'},
				container: _user$project$Container_Models$initialContainer,
				route: route,
				location: location
			};
		});
	var _user$project$Models$Model = F5(
		function (a, b, c, d, e) {
			return {players: a, teams: b, container: c, route: d, location: e};
		});

	var _user$project$Players_Commands$memberEncoded = function (player) {
		var list = {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'id',
				_1: _elm_lang$core$Json_Encode$string(player.id)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'name',
					_1: _elm_lang$core$Json_Encode$string(player.name)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'level',
						_1: _elm_lang$core$Json_Encode$int(player.level)
					},
					_1: {ctor: '[]'}
				}
			}
		};
		return _elm_lang$core$Json_Encode$object(list);
	};
	var _user$project$Players_Commands$memberDecoder = A4(
		_elm_lang$core$Json_Decode$map3,
		_user$project$Players_Models$Player,
		A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'level', _elm_lang$core$Json_Decode$int));
	var _user$project$Players_Commands$collectionDecoder = _elm_lang$core$Json_Decode$list(_user$project$Players_Commands$memberDecoder);
	var _user$project$Players_Commands$saveUrl = function (playerId) {
		return A2(_elm_lang$core$Basics_ops['++'], 'http://localhost:4000/players/', playerId);
	};
	var _user$project$Players_Commands$saveRequest = function (player) {
		return _elm_lang$http$Http$request(
			{
				body: _elm_lang$http$Http$jsonBody(
					_user$project$Players_Commands$memberEncoded(player)),
				expect: _elm_lang$http$Http$expectJson(_user$project$Players_Commands$memberDecoder),
				headers: {ctor: '[]'},
				method: 'PATCH',
				timeout: _elm_lang$core$Maybe$Nothing,
				url: _user$project$Players_Commands$saveUrl(player.id),
				withCredentials: false
			});
	};
	var _user$project$Players_Commands$save = function (player) {
		return A2(
			_elm_lang$http$Http$send,
			_user$project$Players_Messages$OnSave,
			_user$project$Players_Commands$saveRequest(player));
	};
	var _user$project$Players_Commands$fetchAllUrl = 'http://localhost:4000/players';
	var _user$project$Players_Commands$fetchAll = A2(
		_elm_lang$http$Http$send,
		_user$project$Players_Messages$OnFetchAll,
		A2(_elm_lang$http$Http$get, _user$project$Players_Commands$fetchAllUrl, _user$project$Players_Commands$collectionDecoder));

	var _user$project$Players_Update$updatePlayer = F2(
		function (updatedPlayer, players) {
			var select = function (existingPlayer) {
				return _elm_lang$core$Native_Utils.eq(existingPlayer.id, updatedPlayer.id) ? updatedPlayer : existingPlayer;
			};
			return A2(_elm_lang$core$List$map, select, players);
		});
	var _user$project$Players_Update$changeLevelCommands = F3(
		function (playerId, howMuch, players) {
			var cmdForPlayer = function (existingPlayer) {
				return _elm_lang$core$Native_Utils.eq(existingPlayer.id, playerId) ? _user$project$Players_Commands$save(
					_elm_lang$core$Native_Utils.update(
						existingPlayer,
						{level: existingPlayer.level + howMuch})) : _elm_lang$core$Platform_Cmd$none;
			};
			return A2(_elm_lang$core$List$map, cmdForPlayer, players);
		});
	var _user$project$Players_Update$update = F2(
		function (message, players) {
			var _p0 = message;
			switch (_p0.ctor) {
				case 'OnFetchAll':
					if (_p0._0.ctor === 'Ok') {
						return {ctor: '_Tuple2', _0: _p0._0._0, _1: _elm_lang$core$Platform_Cmd$none};
					} else {
						return {ctor: '_Tuple2', _0: players, _1: _elm_lang$core$Platform_Cmd$none};
					}
				case 'ShowPlayers':
					return {
						ctor: '_Tuple2',
						_0: players,
						_1: _elm_lang$navigation$Navigation$newUrl('#players')
					};
				case 'ShowPlayer':
					return {
						ctor: '_Tuple2',
						_0: players,
						_1: _elm_lang$navigation$Navigation$newUrl(
							A2(_elm_lang$core$Basics_ops['++'], '#players/', _p0._0))
					};
				case 'ChangeLevel':
					return {
						ctor: '_Tuple2',
						_0: players,
						_1: _elm_lang$core$Platform_Cmd$batch(
							A3(_user$project$Players_Update$changeLevelCommands, _p0._0, _p0._1, players))
					};
				default:
					if (_p0._0.ctor === 'Ok') {
						return {
							ctor: '_Tuple2',
							_0: A2(_user$project$Players_Update$updatePlayer, _p0._0._0, players),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					} else {
						return {ctor: '_Tuple2', _0: players, _1: _elm_lang$core$Platform_Cmd$none};
					}
			}
		});

	var _user$project$Teams_Commands$memberEncoded = function (team) {
		var list = {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'id',
				_1: _elm_lang$core$Json_Encode$string(team.id)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'name',
					_1: _elm_lang$core$Json_Encode$string(team.name)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'level',
						_1: _elm_lang$core$Json_Encode$int(team.level)
					},
					_1: {ctor: '[]'}
				}
			}
		};
		return _elm_lang$core$Json_Encode$object(list);
	};
	var _user$project$Teams_Commands$memberDecoder = A4(
		_elm_lang$core$Json_Decode$map3,
		_user$project$Teams_Models$Team,
		A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'level', _elm_lang$core$Json_Decode$int));
	var _user$project$Teams_Commands$collectionDecoder = _elm_lang$core$Json_Decode$list(_user$project$Teams_Commands$memberDecoder);
	var _user$project$Teams_Commands$saveUrl = function (teamId) {
		return A2(_elm_lang$core$Basics_ops['++'], 'http://localhost:4000/teams/', teamId);
	};
	var _user$project$Teams_Commands$saveRequest = function (team) {
		return _elm_lang$http$Http$request(
			{
				body: _elm_lang$http$Http$jsonBody(
					_user$project$Teams_Commands$memberEncoded(team)),
				expect: _elm_lang$http$Http$expectJson(_user$project$Teams_Commands$memberDecoder),
				headers: {ctor: '[]'},
				method: 'PATCH',
				timeout: _elm_lang$core$Maybe$Nothing,
				url: _user$project$Teams_Commands$saveUrl(team.id),
				withCredentials: false
			});
	};
	var _user$project$Teams_Commands$save = function (team) {
		return A2(
			_elm_lang$http$Http$send,
			_user$project$Teams_Messages$OnSave,
			_user$project$Teams_Commands$saveRequest(team));
	};
	var _user$project$Teams_Commands$fetchAllUrl = 'http://localhost:4000/teams';
	var _user$project$Teams_Commands$fetchAll = A2(
		_elm_lang$http$Http$send,
		_user$project$Teams_Messages$OnFetchAll,
		A2(_elm_lang$http$Http$get, _user$project$Teams_Commands$fetchAllUrl, _user$project$Teams_Commands$collectionDecoder));

	var _user$project$Teams_Update$updateTeam = F2(
		function (updatedTeam, teams) {
			var select = function (existingTeam) {
				return _elm_lang$core$Native_Utils.eq(existingTeam.id, updatedTeam.id) ? updatedTeam : existingTeam;
			};
			return A2(_elm_lang$core$List$map, select, teams);
		});
	var _user$project$Teams_Update$changeLevelCommands = F3(
		function (teamId, howMuch, teams) {
			var cmdForTeam = function (existingTeam) {
				return _elm_lang$core$Native_Utils.eq(existingTeam.id, teamId) ? _user$project$Teams_Commands$save(
					_elm_lang$core$Native_Utils.update(
						existingTeam,
						{level: existingTeam.level + howMuch})) : _elm_lang$core$Platform_Cmd$none;
			};
			return A2(_elm_lang$core$List$map, cmdForTeam, teams);
		});
	var _user$project$Teams_Update$update = F2(
		function (message, teams) {
			var _p0 = message;
			switch (_p0.ctor) {
				case 'OnFetchAll':
					if (_p0._0.ctor === 'Ok') {
						return {ctor: '_Tuple2', _0: _p0._0._0, _1: _elm_lang$core$Platform_Cmd$none};
					} else {
						return {ctor: '_Tuple2', _0: teams, _1: _elm_lang$core$Platform_Cmd$none};
					}
				case 'ShowTeams':
					return {
						ctor: '_Tuple2',
						_0: teams,
						_1: _elm_lang$navigation$Navigation$newUrl('#teams')
					};
				case 'ShowTeam':
					return {
						ctor: '_Tuple2',
						_0: teams,
						_1: _elm_lang$navigation$Navigation$newUrl(
							A2(_elm_lang$core$Basics_ops['++'], '#teams/', _p0._0))
					};
				case 'ChangeLevel':
					return {
						ctor: '_Tuple2',
						_0: teams,
						_1: _elm_lang$core$Platform_Cmd$batch(
							A3(_user$project$Teams_Update$changeLevelCommands, _p0._0, _p0._1, teams))
					};
				default:
					if (_p0._0.ctor === 'Ok') {
						return {
							ctor: '_Tuple2',
							_0: A2(_user$project$Teams_Update$updateTeam, _p0._0._0, teams),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					} else {
						return {ctor: '_Tuple2', _0: teams, _1: _elm_lang$core$Platform_Cmd$none};
					}
			}
		});

	var _user$project$Update$fetchData = function (model) {
		var _p0 = model.route;
		switch (_p0.ctor) {
			case 'PlayersRoute':
				return _elm_lang$core$List$isEmpty(model.players) ? A2(_elm_lang$core$Platform_Cmd$map, _user$project$Messages$PlayersMsg, _user$project$Players_Commands$fetchAll) : _elm_lang$core$Platform_Cmd$none;
			case 'PlayerRoute':
				return _elm_lang$core$Platform_Cmd$none;
			case 'TeamsRoute':
				return _elm_lang$core$List$isEmpty(model.teams) ? A2(_elm_lang$core$Platform_Cmd$map, _user$project$Messages$TeamsMsg, _user$project$Teams_Commands$fetchAll) : _elm_lang$core$Platform_Cmd$none;
			case 'TeamRoute':
				return _elm_lang$core$Platform_Cmd$none;
			case 'ContainerRoute':
				var maybeNodeType = _user$project$Tree_Models$convertNodeType(_p0._0);
				var _p1 = maybeNodeType;
				if (_p1.ctor === 'Just') {
					return A2(
						_elm_lang$core$Platform_Cmd$map,
						_user$project$Messages$ContainerMsg,
						A4(
							_user$project$Container_Commands$fetchAll,
							_user$project$Models$baseUrl(model.location),
							_p1._0,
							_p0._1,
							model.container));
				} else {
					return _elm_lang$core$Platform_Cmd$none;
				}
			default:
				return _elm_lang$core$Platform_Cmd$none;
		}
	};
	var _user$project$Update$update = F2(
		function (msg, model) {
			var _p2 = msg;
			switch (_p2.ctor) {
				case 'PlayersMsg':
					var _p3 = A2(_user$project$Players_Update$update, _p2._0, model.players);
					var updatedPlayers = _p3._0;
					var cmd = _p3._1;
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{players: updatedPlayers}),
						_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Messages$PlayersMsg, cmd)
					};
				case 'TeamsMsg':
					var _p4 = A2(_user$project$Teams_Update$update, _p2._0, model.teams);
					var updatedTeams = _p4._0;
					var cmd = _p4._1;
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{teams: updatedTeams}),
						_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Messages$TeamsMsg, cmd)
					};
				case 'ContainerMsg':
					var _p5 = A3(
						_user$project$Container_Update$update,
						_user$project$Models$baseUrl(model.location),
						_p2._0,
						model.container);
					var updatedContainer = _p5._0;
					var cmd = _p5._1;
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{container: updatedContainer}),
						_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Messages$ContainerMsg, cmd)
					};
				default:
					var _p6 = _p2._0;
					var newRoute = _user$project$Routing$parseLocation(_p6);
					var newModel = _elm_lang$core$Native_Utils.update(
						model,
						{route: newRoute, location: _p6});
					return {
						ctor: '_Tuple2',
						_0: newModel,
						_1: _user$project$Update$fetchData(newModel)
					};
			}
		});

	var _user$project$Players_Edit$listBtn = A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('btn regular'),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(_user$project$Players_Messages$ShowPlayers),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$i,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('fa fa-chevron-left mr1'),
					_1: {ctor: '[]'}
				},
				{ctor: '[]'}),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html$text('List'),
				_1: {ctor: '[]'}
			}
		});
	var _user$project$Players_Edit$btnLevelIncrease = function (player) {
		return A2(
			_elm_lang$html$Html$a,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('btn ml1 h1'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(
						A2(_user$project$Players_Messages$ChangeLevel, player.id, 1)),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$i,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('fa fa-plus-circle'),
						_1: {ctor: '[]'}
					},
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			});
	};
	var _user$project$Players_Edit$btnLevelDecrease = function (player) {
		return A2(
			_elm_lang$html$Html$a,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('btn ml1 h1'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(
						A2(_user$project$Players_Messages$ChangeLevel, player.id, -1)),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$i,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('fa fa-minus-circle'),
						_1: {ctor: '[]'}
					},
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			});
	};
	var _user$project$Players_Edit$formLevel = function (player) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('clearfix py1'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('col col-5'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Level'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('col col-7'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$span,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('h2 bold'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(
										_elm_lang$core$Basics$toString(player.level)),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: _user$project$Players_Edit$btnLevelDecrease(player),
								_1: {
									ctor: '::',
									_0: _user$project$Players_Edit$btnLevelIncrease(player),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			});
	};
	var _user$project$Players_Edit$form = function (player) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('m3'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h1,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(player.name),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: _user$project$Players_Edit$formLevel(player),
					_1: {ctor: '[]'}
				}
			});
	};
	var _user$project$Players_Edit$nav = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('clearfix mb2 white bg-black p1'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _user$project$Players_Edit$listBtn,
				_1: {ctor: '[]'}
			});
	};
	var _user$project$Players_Edit$view = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('fullview'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _user$project$Players_Edit$nav(model),
				_1: {
					ctor: '::',
					_0: _user$project$Players_Edit$form(model),
					_1: {ctor: '[]'}
				}
			});
	};

	var _user$project$Players_List$editBtn = function (player) {
		return A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('btn regular p0'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(
						_user$project$Players_Messages$ShowPlayer(player.id)),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$i,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('fa fa-pencil mr1'),
						_1: {ctor: '[]'}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html$text('Edit'),
					_1: {ctor: '[]'}
				}
			});
	};
	var _user$project$Players_List$playerRow = function (player) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('row'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('cell'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(player.id),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('cell'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(player.name),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('cell'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(
									_elm_lang$core$Basics$toString(player.level)),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('cell'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _user$project$Players_List$editBtn(player),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}
				}
			});
	};
	var _user$project$Players_List$list = function (players) {
		var headerRow = A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('row header green'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('cell'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Id'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('cell'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Name'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('cell'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Level'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('cell'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Actions'),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}
				}
			});
		var playerRows = A2(_elm_lang$core$List$map, _user$project$Players_List$playerRow, players);
		var allRows = {ctor: '::', _0: headerRow, _1: playerRows};
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('wrapper'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('table'),
						_1: {ctor: '[]'}
					},
					allRows),
				_1: {ctor: '[]'}
			});
	};
	var _user$project$Players_List$nav = function (players) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('clearfix mb2 white bg-black'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('left p2'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Players'),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	};
	var _user$project$Players_List$view = function (players) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('fullview'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _user$project$Players_List$nav(players),
				_1: {
					ctor: '::',
					_0: _user$project$Players_List$list(players),
					_1: {ctor: '[]'}
				}
			});
	};

	var _user$project$Teams_Edit$listBtn = A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('btn regular'),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(_user$project$Teams_Messages$ShowTeams),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$i,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('fa fa-chevron-left mr1'),
					_1: {ctor: '[]'}
				},
				{ctor: '[]'}),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html$text('List'),
				_1: {ctor: '[]'}
			}
		});
	var _user$project$Teams_Edit$btnLevelIncrease = function (team) {
		return A2(
			_elm_lang$html$Html$a,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('btn ml1 h1'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(
						A2(_user$project$Teams_Messages$ChangeLevel, team.id, 1)),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$i,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('fa fa-plus-circle'),
						_1: {ctor: '[]'}
					},
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			});
	};
	var _user$project$Teams_Edit$btnLevelDecrease = function (team) {
		return A2(
			_elm_lang$html$Html$a,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('btn ml1 h1'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(
						A2(_user$project$Teams_Messages$ChangeLevel, team.id, -1)),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$i,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('fa fa-minus-circle'),
						_1: {ctor: '[]'}
					},
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			});
	};
	var _user$project$Teams_Edit$formLevel = function (team) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('clearfix py1'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('col col-5'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Level'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('col col-7'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$span,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('h2 bold'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(
										_elm_lang$core$Basics$toString(team.level)),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: _user$project$Teams_Edit$btnLevelDecrease(team),
								_1: {
									ctor: '::',
									_0: _user$project$Teams_Edit$btnLevelIncrease(team),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			});
	};
	var _user$project$Teams_Edit$form = function (team) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('m3'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h1,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(team.name),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: _user$project$Teams_Edit$formLevel(team),
					_1: {ctor: '[]'}
				}
			});
	};
	var _user$project$Teams_Edit$nav = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('clearfix mb2 white bg-black p1'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _user$project$Teams_Edit$listBtn,
				_1: {ctor: '[]'}
			});
	};
	var _user$project$Teams_Edit$view = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('fullview'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _user$project$Teams_Edit$nav(model),
				_1: {
					ctor: '::',
					_0: _user$project$Teams_Edit$form(model),
					_1: {ctor: '[]'}
				}
			});
	};

	var _user$project$Teams_List$editBtn = function (team) {
		return A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('btn regular p0'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(
						_user$project$Teams_Messages$ShowTeam(team.id)),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$i,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('fa fa-pencil mr1'),
						_1: {ctor: '[]'}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html$text('Edit'),
					_1: {ctor: '[]'}
				}
			});
	};
	var _user$project$Teams_List$teamRow = function (team) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('row'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('cell'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(team.id),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('cell'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(team.name),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('cell'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(
									_elm_lang$core$Basics$toString(team.level)),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('cell'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _user$project$Teams_List$editBtn(team),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}
				}
			});
	};
	var _user$project$Teams_List$list = function (teams) {
		var headerRow = A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('row header green'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('cell'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Id'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('cell'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Name'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('cell'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Level'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('cell'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Actions'),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}
				}
			});
		var teamRows = A2(_elm_lang$core$List$map, _user$project$Teams_List$teamRow, teams);
		var allRows = {ctor: '::', _0: headerRow, _1: teamRows};
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('wrapper'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('table'),
						_1: {ctor: '[]'}
					},
					allRows),
				_1: {ctor: '[]'}
			});
	};
	var _user$project$Teams_List$nav = function (teams) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('clearfix mb2 white bg-black'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('left p2'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Teams'),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	};
	var _user$project$Teams_List$view = function (teams) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('fullview'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _user$project$Teams_List$nav(teams),
				_1: {
					ctor: '::',
					_0: _user$project$Teams_List$list(teams),
					_1: {ctor: '[]'}
				}
			});
	};

	var _user$project$View$notFoundView = A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Not found'),
			_1: {ctor: '[]'}
		});
	var _user$project$View$teamEditPage = F2(
		function (model, teamId) {
			var maybeTeam = _elm_lang$core$List$head(
				A2(
					_elm_lang$core$List$filter,
					function (team) {
						return _elm_lang$core$Native_Utils.eq(team.id, teamId);
					},
					model.teams));
			var _p0 = maybeTeam;
			if (_p0.ctor === 'Just') {
				return A2(
					_elm_lang$html$Html$map,
					_user$project$Messages$TeamsMsg,
					_user$project$Teams_Edit$view(_p0._0));
			} else {
				return _user$project$View$notFoundView;
			}
		});
	var _user$project$View$playerEditPage = F2(
		function (model, playerId) {
			var maybePlayer = _elm_lang$core$List$head(
				A2(
					_elm_lang$core$List$filter,
					function (player) {
						return _elm_lang$core$Native_Utils.eq(player.id, playerId);
					},
					model.players));
			var _p1 = maybePlayer;
			if (_p1.ctor === 'Just') {
				return A2(
					_elm_lang$html$Html$map,
					_user$project$Messages$PlayersMsg,
					_user$project$Players_Edit$view(_p1._0));
			} else {
				return _user$project$View$notFoundView;
			}
		});
	var _user$project$View$page = function (model) {
		var _p2 = model.route;
		switch (_p2.ctor) {
			case 'PlayersRoute':
				return A2(
					_elm_lang$html$Html$map,
					_user$project$Messages$PlayersMsg,
					_user$project$Players_List$view(model.players));
			case 'PlayerRoute':
				return A2(_user$project$View$playerEditPage, model, _p2._0);
			case 'TeamsRoute':
				return A2(
					_elm_lang$html$Html$map,
					_user$project$Messages$TeamsMsg,
					_user$project$Teams_List$view(model.teams));
			case 'TeamRoute':
				return A2(_user$project$View$teamEditPage, model, _p2._0);
			case 'ContainerRoute':
				return A2(
					_elm_lang$html$Html$map,
					_user$project$Messages$ContainerMsg,
					A2(
						_user$project$Container_View$view,
						_user$project$Models$baseUrl(model.location),
						model.container));
			default:
				return _user$project$View$notFoundView;
		}
	};
	var _user$project$View$treeBtn = A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('btn regular'),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(
					_user$project$Messages$ContainerMsg(_user$project$Container_Messages$ShowContainer)),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Container'),
			_1: {ctor: '[]'}
		});
	var _user$project$View$playersBtn = A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('btn regular'),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(
					_user$project$Messages$PlayersMsg(_user$project$Players_Messages$ShowPlayers)),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Players'),
			_1: {ctor: '[]'}
		});
	var _user$project$View$teamsBtn = A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('btn regular'),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(
					_user$project$Messages$TeamsMsg(_user$project$Teams_Messages$ShowTeams)),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Teams'),
			_1: {ctor: '[]'}
		});
	var _user$project$View$footer = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('footer clearfix p1'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Elm prototype'),
				_1: {ctor: '[]'}
			});
	};
	var _user$project$View$nav = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('navbar clearfix p1'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _user$project$View$teamsBtn,
				_1: {
					ctor: '::',
					_0: _user$project$View$playersBtn,
					_1: {
						ctor: '::',
						_0: _user$project$View$treeBtn,
						_1: {ctor: '[]'}
					}
				}
			});
	};
	var _user$project$View$view = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('layout'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _user$project$View$nav(model),
				_1: {
					ctor: '::',
					_0: _user$project$View$page(model),
					_1: {
						ctor: '::',
						_0: _user$project$View$footer(model),
						_1: {ctor: '[]'}
					}
				}
			});
	};

	var _user$project$Main$subscriptions = function (model) {
		return _elm_lang$core$Platform_Sub$none;
	};
	var _user$project$Main$init = function (location) {
		var currentRoute = _user$project$Routing$parseLocation(location);
		var model = A2(_user$project$Models$initialModel, currentRoute, location);
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _user$project$Update$fetchData(model)
		};
	};
	var _user$project$Main$main = A2(
		_elm_lang$navigation$Navigation$program,
		_user$project$Messages$OnLocationChange,
		{init: _user$project$Main$init, view: _user$project$View$view, update: _user$project$Update$update, subscriptions: _user$project$Main$subscriptions})();

	var Elm = {};
	Elm['Main'] = Elm['Main'] || {};
	if (typeof _user$project$Main$main !== 'undefined') {
	    _user$project$Main$main(Elm['Main'], 'Main', {"types":{"unions":{"Messages.Msg":{"args":[],"tags":{"OnLocationChange":["Navigation.Location"],"TeamsMsg":["Teams.Messages.Msg"],"ContainerMsg":["Container.Messages.Msg"],"PlayersMsg":["Players.Messages.Msg"]}},"Dict.LeafColor":{"args":[],"tags":{"LBBlack":[],"LBlack":[]}},"Teams.Messages.Msg":{"args":[],"tags":{"OnSave":["Result.Result Http.Error Teams.Models.Team"],"OnFetchAll":["Result.Result Http.Error (List Teams.Models.Team)"],"ShowTeams":[],"ChangeLevel":["Teams.Models.TeamId","Int"],"ShowTeam":["Teams.Models.TeamId"]}},"Tree.Messages.Msg":{"args":[],"tags":{"ToggleNode":["String","Tree.Models.NodeId"],"OnFetchNode":["Tree.Models.NodeId","Result.Result Http.Error Tree.Models.TempChildren"],"SelectNode":["Tree.Models.NodeId"],"OnFetchRoot":["Result.Result Http.Error Tree.Models.TempRoot"],"SelectRoot":[]}},"Content.Messages.Msg":{"args":[],"tags":{"OnFetchFiles":["Tree.Models.NodeId","Result.Result Http.Error (List Content.Models.File)"],"SetTableState":["Table.State"],"OnFetchUsers":["Tree.Models.NodeId","Result.Result Http.Error Content.Models.Users"],"TreeMsg":["Tree.Messages.Msg"],"OnFetchCases":["Tree.Models.NodeId","Result.Result Http.Error Content.Models.Cases"],"SetQuery":["String"],"OnFetchFolders":["Tree.Models.NodeId","Result.Result Http.Error Content.Models.Folders"]}},"Dict.Dict":{"args":["k","v"],"tags":{"RBNode_elm_builtin":["Dict.NColor","k","v","Dict.Dict k v","Dict.Dict k v"],"RBEmpty_elm_builtin":["Dict.LeafColor"]}},"Tree.Models.ChildrenState":{"args":[],"tags":{"Expanded":[],"NoChildren":[],"Expanding":[],"Collapsed":[]}},"Maybe.Maybe":{"args":["a"],"tags":{"Just":["a"],"Nothing":[]}},"Container.Messages.Msg":{"args":[],"tags":{"SelectTab":["Header.Models.TabType"],"ShowContainer":[],"TreeMsg":["Tree.Messages.Msg"],"SelectPath":["Tree.Models.NodeId"],"ContentMsg":["Content.Messages.Msg"],"HeaderMsg":["Header.Messages.Msg"]}},"Header.Messages.Msg":{"args":[],"tags":{"OnFetchSite":["Tree.Models.NodeId","Result.Result Http.Error Header.Models.HeaderInfo"],"OnFetchClient":["Tree.Models.NodeId","Result.Result Http.Error Header.Models.HeaderInfo"],"OnFetchStaff":["Tree.Models.NodeId","Result.Result Http.Error Header.Models.HeaderInfo"],"OnFetchRoot":["Tree.Models.NodeId","Result.Result Http.Error Header.Models.HeaderInfo"],"OnFetchCustomer":["Tree.Models.NodeId","Result.Result Http.Error Header.Models.HeaderInfo"]}},"Players.Messages.Msg":{"args":[],"tags":{"ShowPlayer":["Players.Models.PlayerId"],"OnSave":["Result.Result Http.Error Players.Models.Player"],"OnFetchAll":["Result.Result Http.Error (List Players.Models.Player)"],"ChangeLevel":["Players.Models.PlayerId","Int"],"ShowPlayers":[]}},"Header.Models.Header":{"args":[],"tags":{"SiteHeader":["Header.Models.Site"],"Empty":[],"CustomerHeader":["Header.Models.Customer"],"RootHeader":["Header.Models.Root"],"ClientHeader":["Header.Models.Client"],"StaffHeader":["Header.Models.Staff"]}},"Header.Models.TabType":{"args":[],"tags":{"EmptyTab":[],"CasesType":[],"UsersType":[],"FoldersType":[]}},"Header.Models.AccessType":{"args":[],"tags":{"Read":[],"None":[],"Write":[]}},"Table.State":{"args":[],"tags":{"State":["String","Bool"]}},"Dict.NColor":{"args":[],"tags":{"BBlack":[],"Red":[],"NBlack":[],"Black":[]}},"Tree.Models.NodeType":{"args":[],"tags":{"CustomerType":[],"SiteType":[],"StaffType":[],"ClientType":[],"RootType":[],"FolderType":[]}},"Tree.Models.ChildNodes":{"args":[],"tags":{"ChildNodes":["List Tree.Models.Node"]}},"Http.Error":{"args":[],"tags":{"BadUrl":["String"],"NetworkError":[],"Timeout":[],"BadStatus":["Http.Response String"],"BadPayload":["String","Http.Response String"]}},"Result.Result":{"args":["error","value"],"tags":{"Ok":["value"],"Err":["error"]}}},"aliases":{"Header.Models.Tab":{"args":[],"type":"{ tabType : Header.Models.TabType, name : String }"},"Content.Models.Users":{"args":[],"type":"{ id : Tree.Models.NodeId, name : String }"},"Content.Models.Cases":{"args":[],"type":"{ id : Tree.Models.NodeId, name : String }"},"Teams.Models.TeamId":{"args":[],"type":"String"},"Tree.Models.Node":{"args":[],"type":"{ id : Tree.Models.NodeId , nodeType : Tree.Models.NodeType , name : String , selected : Bool , childrenState : Tree.Models.ChildrenState , childNodes : Tree.Models.ChildNodes }"},"Players.Models.PlayerId":{"args":[],"type":"String"},"Http.Response":{"args":["body"],"type":"{ url : String , status : { code : Int, message : String } , headers : Dict.Dict String String , body : body }"},"Tree.Models.TempRoot":{"args":[],"type":"{ id : Tree.Models.NodeId , type_ : String , name : String , children : List Tree.Models.TempNode }"},"Content.Models.Folders":{"args":[],"type":"{ tree : Tree.Models.Tree , selected : Bool , path : List Tree.Models.Node , files : List Content.Models.File , tableState : Table.State , query : String }"},"Tree.Models.TempNode":{"args":[],"type":"{ id : Tree.Models.NodeId , type_ : String , name : String , hasChildren : Bool }"},"Header.Models.ClientAccess":{"args":[],"type":"{ name : Header.Models.AccessType , image : Header.Models.AccessType , address : Header.Models.AccessType , contact : Header.Models.AccessType }"},"Tree.Models.Tree":{"args":[],"type":"{ id : Tree.Models.NodeId , nodeType : Tree.Models.NodeType , name : String , selected : Bool , childrenState : Tree.Models.ChildrenState , childNodes : Tree.Models.ChildNodes , path : List Tree.Models.Node }"},"Header.Models.SiteAccess":{"args":[],"type":"{ name : Header.Models.AccessType , image : Header.Models.AccessType , address : Header.Models.AccessType , contact : Header.Models.AccessType , managers : Header.Models.AccessType }"},"Header.Models.CustomerValues":{"args":[],"type":"{ name : Maybe.Maybe String , image : Maybe.Maybe String , address1 : Maybe.Maybe String , address2 : Maybe.Maybe String , address3 : Maybe.Maybe String , address4 : Maybe.Maybe String , postcode : Maybe.Maybe String , contact : Maybe.Maybe String , tel : Maybe.Maybe String , email : Maybe.Maybe String }"},"Teams.Models.Team":{"args":[],"type":"{ id : Teams.Models.TeamId, name : String, level : Int }"},"Header.Models.Customer":{"args":[],"type":"{ id : Tree.Models.NodeId , access : Header.Models.CustomerAccess , values : Header.Models.CustomerValues }"},"Players.Models.Player":{"args":[],"type":"{ id : Players.Models.PlayerId, name : String, level : Int }"},"Tree.Models.NodeId":{"args":[],"type":"String"},"Header.Models.ClientValues":{"args":[],"type":"{ no : Maybe.Maybe String , name : Maybe.Maybe String , image : Maybe.Maybe String , address1 : Maybe.Maybe String , address2 : Maybe.Maybe String , address3 : Maybe.Maybe String , address4 : Maybe.Maybe String , postcode : Maybe.Maybe String , contact : Maybe.Maybe String , tel : Maybe.Maybe String , email : Maybe.Maybe String }"},"Header.Models.Client":{"args":[],"type":"{ id : Tree.Models.NodeId , access : Header.Models.ClientAccess , values : Header.Models.ClientValues }"},"Header.Models.HeaderInfo":{"args":[],"type":"{ header : Header.Models.Header, tabs : List Header.Models.Tab }"},"Header.Models.Root":{"args":[],"type":"{ id : Tree.Models.NodeId, name : String }"},"Header.Models.Staff":{"args":[],"type":"{ id : Tree.Models.NodeId , access : Header.Models.StaffAccess , values : Header.Models.StaffValues }"},"Header.Models.StaffValues":{"args":[],"type":"{ no : Maybe.Maybe String , name : Maybe.Maybe String , image : Maybe.Maybe String , address1 : Maybe.Maybe String , address2 : Maybe.Maybe String , address3 : Maybe.Maybe String , address4 : Maybe.Maybe String , postcode : Maybe.Maybe String , tel : Maybe.Maybe String , mob : Maybe.Maybe String , email : Maybe.Maybe String }"},"Tree.Models.TempChildren":{"args":[],"type":"{ id : Tree.Models.NodeId , type_ : String , children : List Tree.Models.TempNode }"},"Header.Models.SiteValues":{"args":[],"type":"{ no : Maybe.Maybe String , name : Maybe.Maybe String , image : Maybe.Maybe String , address1 : Maybe.Maybe String , address2 : Maybe.Maybe String , address3 : Maybe.Maybe String , address4 : Maybe.Maybe String , postcode : Maybe.Maybe String , contact : Maybe.Maybe String , tel : Maybe.Maybe String , email : Maybe.Maybe String , divisionMgr : Maybe.Maybe String , areaMgr : Maybe.Maybe String , supervisor : Maybe.Maybe String }"},"Header.Models.Site":{"args":[],"type":"{ id : Tree.Models.NodeId , access : Header.Models.SiteAccess , values : Header.Models.SiteValues }"},"Header.Models.CustomerAccess":{"args":[],"type":"{ name : Header.Models.AccessType , image : Header.Models.AccessType , address : Header.Models.AccessType , contact : Header.Models.AccessType }"},"Content.Models.File":{"args":[],"type":"{ id : Tree.Models.NodeId, name : String, datetime : Int }"},"Header.Models.StaffAccess":{"args":[],"type":"{ name : Header.Models.AccessType , image : Header.Models.AccessType , address : Header.Models.AccessType , contact : Header.Models.AccessType }"},"Navigation.Location":{"args":[],"type":"{ href : String , host : String , hostname : String , protocol : String , origin : String , port_ : String , pathname : String , search : String , hash : String , username : String , password : String }"}},"message":"Messages.Msg"},"versions":{"elm":"0.18.0"}});
	}

	if (typeof define === "function" && define['amd'])
	{
	  define([], function() { return Elm; });
	  return;
	}

	if (typeof module === "object")
	{
	  module['exports'] = Elm;
	  return;
	}

	var globalElm = this['Elm'];
	if (typeof globalElm === "undefined")
	{
	  this['Elm'] = Elm;
	  return;
	}

	for (var publicModule in Elm)
	{
	  if (publicModule in globalElm)
	  {
	    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
	  }
	  globalElm[publicModule] = Elm[publicModule];
	}

	}).call(this);



/***/ }
/******/ ]);