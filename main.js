(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lucas/Documents/Projects/wordcounter/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FQO1":
/*!*****************************************************!*\
  !*** ./src/app/components/limit/limit.component.ts ***!
  \*****************************************************/
/*! exports provided: LimitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitComponent", function() { return LimitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_string_counter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/string-counter.service */ "We/i");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class LimitComponent {
    constructor(StringConter) {
        this.StringConter = StringConter;
        this.limit = 0;
        this.onWrite = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.limit = this.StringConter.limit;
    }
    handleStart() {
        this.onWrite.emit();
        this.StringConter.setLimit(this.limit);
    }
}
LimitComponent.ɵfac = function LimitComponent_Factory(t) { return new (t || LimitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_string_counter_service__WEBPACK_IMPORTED_MODULE_1__["StringCounterService"])); };
LimitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LimitComponent, selectors: [["app-limit"]], outputs: { onWrite: "onWrite" }, decls: 10, vars: 1, consts: [["id", "container"], [1, "direction-row"], ["type", "number", "name", "limit", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function LimitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Limite de palavras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "deixe como zero para que n\u00E3o haja limite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LimitComponent_Template_input_ngModelChange_7_listener($event) { return ctx.limit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LimitComponent_Template_button_click_8_listener() { return ctx.handleStart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Come\u00E7ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.limit);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["#container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 200px;\n  width: 100%;\n}\n\n#container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  font-size: 21px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.direction-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  background-color: #626866;\n  border-radius: 5px;\n  color: #fff;\n  border: 0px;\n  border: 1px;\n  font-size: 21px;\n  padding: 10px;\n  font-weight: bold;\n  text-align: right;\n  transition: 300ms;\n}\n\n#container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background-color: #343837;\n  border-bottom: 1px solid #ddd;\n  border-radius: 0px;\n}\n\n#container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #03719c;\n  border: 0px;\n  border-radius: 5px;\n  align-self: center;\n  padding: 10px 50px;\n  font-size: 18px;\n  color: #fff;\n  margin-top: 20px;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n  transition: 300ms;\n}\n\n#container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n\n\n#container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, #container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n  display: none;\n}\n\n\n\n#container[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n@media screen and (max-width: 620px) {\n  .direction-row[_ngcontent-%COMP%] {\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    flex-direction: column;\n  }\n  #container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin: 0px;\n    margin-top: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbWl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxnQ0FBZ0M7O0FBQ2hDOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBLFlBQVk7O0FBQ1o7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJsaW1pdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2NvbnRhaW5lciBoNCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIxcHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRpcmVjdGlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jY29udGFpbmVyIGlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MjY4NjY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMHB4O1xuICBib3JkZXI6IDFweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRyYW5zaXRpb246IDMwMG1zO1xufVxuXG4jY29udGFpbmVyIGlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzgzNztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuI2NvbnRhaW5lciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM3MTljO1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggNTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0cmFuc2l0aW9uOiAzMDBtcztcbn1cblxuI2NvbnRhaW5lciBidXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xuI2NvbnRhaW5lciBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiNjb250YWluZXIgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogRmlyZWZveCAqL1xuI2NvbnRhaW5lciBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5kaXJlY3Rpb24tcm93IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gICNjb250YWluZXIgaW5wdXQge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_limit_limit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/limit/limit.component */ "FQO1");
/* harmony import */ var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/counter/counter.component */ "oZrj");




function AppComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(me\u00E7a suas palavras par\u00E7a)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_limit_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-limit", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onWrite", function AppComponent_app_limit_3_Template_app_limit_onWrite_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.handleWriting(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(aperte espa\u00E7o para atualizar)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-counter");
} }
class AppComponent {
    constructor() {
        this.writing = false;
    }
    handleWriting() {
        console.log('test');
        this.writing = !this.writing;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 3, consts: [["id", "container"], ["src", "../assets/title.svg", "alt", "Contador"], [4, "ngIf"], [3, "onWrite", 4, "ngIf", "ngIfElse"], ["counter", ""], [3, "onWrite"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_p_2_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_limit_3_Template, 1, 0, "app-limit", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_template_4_Template, 3, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.writing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.writing)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _components_limit_limit_component__WEBPACK_IMPORTED_MODULE_2__["LimitComponent"], _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_3__["CounterComponent"]], styles: ["#container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 100px;\n  margin-bottom: -100px;\n}\n\n#container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 400px;\n  margin-bottom: 10px;\n}\n\n@media screen and (max-width: 420px) {\n  #container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0xMDBweDtcbn1cblxuI2NvbnRhaW5lciBpbWcge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gICNjb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "We/i":
/*!****************************************************!*\
  !*** ./src/app/services/string-counter.service.ts ***!
  \****************************************************/
/*! exports provided: StringCounterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringCounterService", function() { return StringCounterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class StringCounterService {
    constructor() {
        this.text = '';
        this.limit = 0;
    }
    handleTextChange(data) {
        this.text = data;
    }
    setLimit(limit) {
        this.limit = limit;
        console.log('Limite setado para ' + limit);
    }
    countWords() {
        let splitString = this.text.trim().replace(/\n/g, ' ').split(' ');
        const filteredArray = splitString.filter((item) => item !== '');
        return filteredArray.length;
    }
    handleLimitDif(words) {
        return this.limit - words;
    }
}
StringCounterService.ɵfac = function StringCounterService_Factory(t) { return new (t || StringCounterService)(); };
StringCounterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StringCounterService, factory: StringCounterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_limit_limit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/limit/limit.component */ "FQO1");
/* harmony import */ var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/counter/counter.component */ "oZrj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _components_limit_limit_component__WEBPACK_IMPORTED_MODULE_2__["LimitComponent"], _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_3__["CounterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();


/***/ }),

/***/ "oZrj":
/*!*********************************************************!*\
  !*** ./src/app/components/counter/counter.component.ts ***!
  \*********************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_string_counter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/string-counter.service */ "We/i");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CounterComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sem limites :)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CounterComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" restante para o limite: ", ctx_r1.limitDiff, " ");
} }
function CounterComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ultrapassando o limite: ", ctx_r2.limitDiff * -1, " ");
} }
class CounterComponent {
    constructor(StringConter) {
        this.StringConter = StringConter;
        this.textData = '';
        this.limit = 0;
        this.count = 0;
        this.limitDiff = 0;
    }
    ngOnInit() {
        this.limit = this.StringConter.limit;
        if (this.limit !== 0) {
            this.limitDiff = this.StringConter.handleLimitDif(0);
        }
    }
    handleChange(event) {
        //AO APERTAR ESPAÇO, BACKSPACE E LETRA V
        if (event.keyCode == 32 || event.keyCode == 8 || event.keyCode == 86) {
            this.StringConter.text = event.target.value;
            this.count = this.StringConter.countWords();
            if (this.limit > 0) {
                this.limitDiff = this.StringConter.handleLimitDif(this.count);
            }
        }
    }
}
CounterComponent.ɵfac = function CounterComponent_Factory(t) { return new (t || CounterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_string_counter_service__WEBPACK_IMPORTED_MODULE_1__["StringCounterService"])); };
CounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounterComponent, selectors: [["app-counter"]], decls: 7, vars: 5, consts: [["id", "container"], [3, "ngClass"], ["class", "green", 4, "ngIf"], ["class", "red", 4, "ngIf"], ["name", "counter", "id", "counter", 3, "keydown"], [1, "green"], [1, "red"]], template: function CounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CounterComponent_p_3_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CounterComponent_p_4_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CounterComponent_p_5_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function CounterComponent_Template_textarea_keydown_6_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.limitDiff >= 0 ? "green" : "red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.count, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.limit === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.limit !== 0 && ctx.limitDiff >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.limitDiff < 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["#container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n#container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n  background-color: #626866;\n  border-radius: 5px;\n  color: #fff;\n  border: 0px;\n  border: 1px;\n  font-size: 14px;\n  padding: 10px;\n  transition: 300ms;\n  font-family: \"Roboto\", sans-serif;\n  width: 500px;\n  height: 500px;\n}\n\n#container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 42px;\n  text-align: center;\n  transition: 300ms;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  transition: 300ms;\n}\n\n.green[_ngcontent-%COMP%] {\n  color: #14ccbb;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: #cc1414;\n}\n\n@media screen and (max-width: 520px) {\n  #container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6ImNvdW50ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4jY29udGFpbmVyIHRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI2ODY2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweDtcbiAgdHJhbnNpdGlvbjogMzAwbXM7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbiNjb250YWluZXIgaDEge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA0MnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDMwMG1zO1xufVxuI2NvbnRhaW5lciBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0cmFuc2l0aW9uOiAzMDBtcztcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6ICMxNGNjYmI7XG59XG5cbi5yZWQge1xuICBjb2xvcjogI2NjMTQxNDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gICNjb250YWluZXIgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map