(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section> \r\n    \r\n    <header>\r\n        <app-header-nav-bar></app-header-nav-bar>\r\n    </header>\r\n    <main>\r\n        <router-outlet></router-outlet>\r\n    </main>\r\n    <footer></footer>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header-nav-bar/component/header-nav-bar.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header-nav-bar/component/header-nav-bar.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isUserLogin$|async\">\r\n<app-products-nav-desk-top fxShow fxHide.xs=\"true\"></app-products-nav-desk-top>\r\n<app-products-nav-phone fxShow fxHide.gt-xs=\"true\"></app-products-nav-phone>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loging/loging.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loging/loging.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backgroun-img\"></div>\r\n<div class=\"form-container\">\r\n<form #formInfo=\"ngForm\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <div>\r\n    <mat-icon   class=\"logoIconFirstIcon\">bubble_chart</mat-icon>\r\n  </div>\r\n\r\n  <h1 class=\"logInH1\">LOG IN</h1>\r\n\r\n  <div class=\"div-inputs-and-sub-button\" fxLayout=\"column\">\r\n    <mat-form-field>\r\n      <mat-icon matPrefix>person</mat-icon>\r\n      <input matInput class=\"input-field\" required \r\n      #userNameInfo=\"ngModel\" [(ngModel)]=\"user.userName\" name=\"userName\" \r\n      type=\"text\"  placeholder=\"Username\">\r\n\r\n    <mat-error *ngIf=\"userNameInfo.errors?.required && userNameInfo.touched\">\r\n       User Name Missing</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-icon matPrefix>https</mat-icon>\r\n      <input matInput class=\"input-field\" required \r\n      #passwordInfo=\"ngModel\" [(ngModel)]=\"user.password\" name=\"password\" \r\n      type=\"password\"  placeholder=\"Password\">\r\n  \r\n    <mat-error *ngIf=\"passwordInfo.errors?.required && passwordInfo.touched\">\r\n        Password Missing</mat-error>\r\n    </mat-form-field>\r\n      <a class=\"registerLink\" routerLink=\"/register\">register</a>\r\n    <div fxLayoutAlign=\"center center\">\r\n      <button mat-raised-button color=\"primary\" class=\"submitFormBtn\" \r\n      [disabled]=\"formInfo.form.invalid\" (click)=\"userSubmitLoginForm()\">\r\n        Login\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n \r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/massage/massage.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/massage/massage.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"massage__text\">{{ massage }}</p>\r\n\r\n<a mat-raised-button color=\"primary\" (click)=\"closeModal()\">Ok</a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/component/products.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/component/products.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <main>\r\n        <app-search-product></app-search-product>\r\n        <router-outlet></router-outlet>\r\n    </main>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-format/component/product-format.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-format/component/product-format.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"products; else productsLodding\">\r\n    <div *ngIf=\"products.length > 0;else productsNotFound\"\r\n        fxLayout.xs=\"column\" fxLayoutAlign=\"center center\"\r\n        fxLayout.gt-xs=\"row wrap\" fxLayoutGap.gt-xs=\"10px\"\r\n        >\r\n        \r\n        \r\n        <mat-card class=\"product-card\" *ngFor=\"let p of products\"\r\n         fxFlex=\"100%\"\r\n         fxFlex.xs=\"60%\"\r\n         fxFlex.sm=\"50%\"\r\n         fxFlex.md=\"40%\"\r\n         fxFlex.lg=\"30%\"\r\n         fxFlex.xl=\"20%\"\r\n         >\r\n\r\n                <img mat-card-image class=\"product-img\"\r\n                src=\"{{p.img.url}}\" alt=\"{{p.name}}\">\r\n            <mat-card-content class=\"product-card-content\">\r\n                <h2 class=\"product-name\"> {{p.name}} </h2>\r\n                <h3 class=\"product-category\"> {{p.category.name}} </h3>\r\n            \r\n                <div class=\"product-user-name-location-div\" \r\n                fxLayout=\"row\" fxLayoutGap=\"1.1rem\" fxLayoutAlign=\"center\"\r\n                \r\n                > \r\n                    <div>\r\n                        <h4>UserName</h4>\r\n                        <p>{{p.user.userName}}</p>\r\n                    </div>\r\n\r\n                    <div >\r\n                        <h4>Quantity</h4>\r\n                        <p>{{p.quantities}}</p>\r\n                    </div>\r\n                    <div>\r\n                        <h4>Price</h4>\r\n                        <p>{{p.price | currency}}</p>\r\n                    </div>\r\n                    <div>\r\n                        <h4>Location</h4>\r\n                        <div  class=\"locationP\">\r\n                            <mat-icon> map</mat-icon>\r\n                            <span>{{p.location}}</span>\r\n                        </div>\r\n                    </div>\r\n                     \r\n                </div>\r\n\r\n\r\n             <div class=\"product-call-div-btn\">\r\n                    <button class=\"locationP product-call-btn\" mat-raised-button>\r\n                    <mat-icon class=\"mat-icon-call-user\">call</mat-icon>\r\n                        <a href=\"tel:{{p.user.phone}}\">Call {{p.user.userName}}</a>\r\n                    </button>\r\n                </div>    \r\n            </mat-card-content>\r\n            </mat-card>        \r\n\r\n    </div> \r\n</div>\r\n<ng-template #productsLodding>\r\n        <h1>Products Lodding</h1>\r\n</ng-template>\r\n<ng-template #productsNotFound>\r\n    <h1>Products No Found</h1>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-all-products/component/products-all-products.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-all-products/component/products-all-products.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-product-format [products]=\"products$|async\"></app-product-format>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-by-category/component/products-by-category.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-by-category/component/products-by-category.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-product-format [products]=\"products$|async\"></app-product-format>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-nav-desk-top/component/products-nav-desk-top.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-nav-desk-top/component/products-nav-desk-top.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav mat-tab-nav-bar class=\"nav-bar\">\r\n    <a mat-tab-link routerLink=\"/login\"\r\n    routerLinkActive #rla=\"routerLinkActive\"\r\n    [active]=\"rla.isActive\"\r\n    >\r\n        <mat-icon   class=\"logoIconFirstIcon\">bubble_chart</mat-icon>\r\n    </a>\r\n    <a mat-tab-link \r\n    routerLinkActive #rla=\"routerLinkActive\"\r\n    [active]=\"rla.isActive\"  routerLink=\"/products/all-products\">All Products</a>\r\n    <a mat-tab-link\r\n       *ngFor=\"let link of navLinks$|async\"\r\n       routerLink=\"/products/category/{{link.name}}\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n      {{link.name}}\r\n    </a>\r\n    \r\n  <a mat-tab-link [matMenuTriggerFor]=\"userMenu\" class=\"menu-btn\" \r\n  *ngIf=\"user.userName !== undefined\" >\r\n    User\r\n  </a>\r\n  </nav>\r\n <mat-menu #userMenu=\"matMenu\" class=\"menu-container\" \r\n  >\r\n\r\n    <button mat-menu-item>\r\n      <a class=\"menu-link\" routerLink='/user/products'>User Products</a>\r\n    </button>\r\n    <button mat-menu-item>\r\n      <a class=\"menu-link\" routerLink='/user/add-product'>User Add Products</a>\r\n    </button>\r\n    <button mat-menu-item>\r\n      <a class=\"menu-link\" routerLink='/user/delete-product'>User Delete Products</a>\r\n    </button>\r\n    <button mat-menu-item>\r\n      <a class=\"menu-link\" routerLink='/user/update-product'>User Update Products</a>\r\n    </button>\r\n    <button mat-menu-item>\r\n      <a class=\"menu-link\" routerLink='/user/dashboard'>User Dashboard</a>\r\n    </button>\r\n    <button mat-menu-item>\r\n      <a class=\"menu-link\" (click)=\"logout()\">Logout</a>\r\n    </button>\r\n  \r\n  </mat-menu>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-nav-phone/component/products-nav-phone.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-nav-phone/component/products-nav-phone.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"menu-btn\" >\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n  \r\n  <mat-menu #menu=\"matMenu\" class=\"menu-container\">\r\n    <button mat-menu-item>\r\n      <a routerLink=\"/products/all-products\">All Products</a>\r\n    </button>\r\n    <button mat-menu-item\r\n    *ngFor=\"let link of navLinks$|async\">\r\n\r\n      <a routerLink=\"/products/category/{{link.name}}\"\r\n     >\r\n     {{link.name}}\r\n   </a>\r\n    </button>\r\n\r\n    <button mat-menu-item [matMenuTriggerFor]=\"userMenu\" class=\"menu-btn\"\r\n    *ngIf=\"user.userName !== undefined\" >\r\n      User\r\n    </button>\r\n  </mat-menu>\r\n\r\n  <mat-menu #userMenu=\"matMenu\" class=\"menu-container\" \r\n  >\r\n\r\n    <button mat-menu-item>\r\n      <a routerLink='/user/products'>User Products</a>\r\n    </button>\r\n    <button mat-menu-item>\r\n      <a routerLink='/user/add-product'>User Add Products</a>\r\n    </button>\r\n    <button mat-menu-item>\r\n      <a routerLink='/user/delete-product'>User Delete Products</a>\r\n    </button>\r\n    <button mat-menu-item>\r\n      <a routerLink='/user/update-product'>User Update Products</a>\r\n    </button>\r\n    <button mat-menu-item>\r\n      <a routerLink='/user/dashboard'>User Dashboard</a>\r\n    </button>\r\n    <button mat-menu-item>\r\n      <a (click)=\"logout()\">Logout</a>\r\n    </button>\r\n  \r\n  </mat-menu>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-search/component/products-search.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-search/component/products-search.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-product-format [products]=\"products$|async\"></app-product-format>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/component/register.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/component/register.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background-body\"></div>\r\n<div class=\"form-container\"  fxLayoutAlign=\"center center\"\r\n>\r\n<form #formInfo=\"ngForm\" \r\nfxLayout.xs=\"column\" fxLayoutAlign=\"center center\"\r\nfxLayout.gt-xs=\"row wrap\" fxLayoutGap.gt-xs=\"10px\"\r\n>\r\n    <h1 fxFlex.gt-xs=\"100%\" class=\"form-first-h1-register\"  fxLayoutAlign.gt-xs=\"center\" >REGISTER</h1>\r\n    <mat-form-field color=\"warn\" fxFlex.gt-xs=\"40%\">\r\n      <input matInput class=\"input-field\" required \r\n      #userNameInfo=\"ngModel\" [(ngModel)]=\"user.userName\" name=\"userName\" \r\n      type=\"text\"  placeholder=\"User Name\">\r\n  \r\n    <mat-error *ngIf=\"userNameInfo.errors?.required && userNameInfo.touched\">\r\n       User Name Missing</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"warn\" fxFlex.gt-xs=\"40%\">\r\n      <input matInput class=\"input-field\" required \r\n      #firstNameInfo=\"ngModel\" [(ngModel)]=\"user.firstName\" name=\"firstName\" \r\n      type=\"text\"  placeholder=\"First Name\">\r\n  \r\n    <mat-error *ngIf=\"firstNameInfo.errors?.required && firstNameInfo.touched\">\r\n       First Name Missing</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"warn\" fxFlex.gt-xs=\"40%\">\r\n      <input matInput class=\"input-field\" required \r\n      #lastNameInfo=\"ngModel\" [(ngModel)]=\"user.lastName\" name=\"lastName\" \r\n      type=\"text\"  placeholder=\"Last Name\">\r\n  \r\n    <mat-error *ngIf=\"lastNameInfo.errors?.required && lastNameInfo.touched\">\r\n        Last Name Missing</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"warn\" fxFlex.gt-xs=\"40%\">\r\n      <input matInput class=\"input-field\" required \r\n      #passwordInfo=\"ngModel\" [(ngModel)]=\"user.password\" name=\"password\" \r\n      type=\"password\"  placeholder=\"Password\">\r\n  \r\n    <mat-error *ngIf=\"passwordInfo.errors?.required && passwordInfo.touched\">\r\n        Password Missing</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"warn\" fxFlex.gt-xs=\"40%\">\r\n      <input matInput class=\"input-field\" required \r\n      #passwordConfirmInfo=\"ngModel\" [(ngModel)]=\"passwordConfirm\" name=\"passwordConfirm\" \r\n      type=\"password\"  placeholder=\"Confirm Password\">\r\n  \r\n    <mat-error *ngIf=\"passwordConfirmInfo.errors?.required && passwordConfirmInfo.touched\">\r\n        Confirm Password Missing</mat-error>\r\n    </mat-form-field>\r\n\r\n      <mat-form-field color=\"warn\" fxFlex.gt-xs=\"40%\">\r\n        <input matInput class=\"input-field\" required \r\n        #emailInfo=\"ngModel\" [(ngModel)]=\"user.email\" name=\"email\" \r\n        type=\"email\"  placeholder=\"Email\">\r\n    \r\n      <mat-error *ngIf=\"emailInfo.errors?.required && emailInfo.touched\">\r\n          Email Missing</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field color=\"warn\" fxFlex.gt-xs=\"40%\">\r\n        <input matInput class=\"input-field\" required \r\n        #phoneInfo=\"ngModel\" [(ngModel)]=\"user.phone\" name=\"phone\" \r\n        type=\"tel\"  placeholder=\"Phone\">\r\n    \r\n      <mat-error *ngIf=\"phoneInfo.errors?.required && phoneInfo.touched\">\r\n        Phone Missing</mat-error>\r\n      </mat-form-field>\r\n      <button mat-raised-button color=\"warn\" fxFlex.gt-xs=\"40%\" class=\"submitFormBtn\"\r\n      [disabled]=\"formInfo.form.invalid\" (click)=\"userRegisterSubmitForm()\">\r\n        Register\r\n      </button>\r\n      <a fxFlex.gt-xs=\"100%\" fxLayoutAlign.gt-xs=\"center\"  class=\"loginLink\" routerLink=\"/login\">click her to login</a>\r\n\r\n  </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-product/component/search-product.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-product/component/search-product.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #formInfo=\"ngForm\" fxLayout=\"row warp\" fxLayoutGap.xs=\"10px\"\r\n fxLayoutAlign=\"center\"\r\n fxLayoutGap.gt-xs=\"20px\">\r\n    <mat-form-field class=\"input-product\"\r\n    fxFlex.xs=\"80%\" \r\n    fxFlex.gt-xs=\"40%\" \r\n    appearance=\"outline\">\r\n    <mat-label>Search product</mat-label>\r\n        <input matInput  required \r\n        #searchValueInfo=\"ngModel\" [(ngModel)]=\"searchValue\" name=\"searchValue\" \r\n        type=\"text\"  placeholder=\"Search product\">\r\n    \r\n      <mat-error *ngIf=\"searchValueInfo.errors?.required && searchValueInfo.touched\">\r\n        Search Value Missing</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-radio-group [(ngModel)]=\"searchFiled\" name=\"searchFiled\" required\r\n      fxLayoutGap=\"15px\" fxFlex.xs=\"80%\" fxLayoutAlign=\"center\"\r\n      fxFlex.lt-md=\"11%\" \r\n      fxFlex.gt-xs=\"8%\" \r\n      fxFlex.lg=\"7%\" \r\n      fxFlex.xl=\"4%\" \r\n      fxLayout.gt-xs=\"column\">\r\n        <mat-radio-button value=\"name\">Name</mat-radio-button>\r\n        <mat-radio-button value=\"location\">Location</mat-radio-button>\r\n      </mat-radio-group>\r\n\r\n    <button mat-raised-button class=\"search-btn\" fxFlex.xs=\"100%\" \r\n    fxFlex.gt-xs=\"20%\" fxLayoutAlign=\"center\"\r\n    [disabled]=\"formInfo.form.invalid\" (click)=\"searchProduct()\">\r\n      Search\r\n    </button>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/delete-product/component/delete-product.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/delete-product/component/delete-product.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"(products$|async) as products; else productLodding\"> \r\n  <div *ngIf=\"products.length > 0; else notFoundMessage\">\r\n \r\n<table mat-table [dataSource]=\"products\" class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"location\">\r\n      <th mat-header-cell *matHeaderCellDef> Location </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.location}} </td>\r\n    </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"quantities\">\r\n      <th mat-header-cell *matHeaderCellDef> Quantities </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.quantities}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"price\">\r\n      <th mat-header-cell *matHeaderCellDef> Price </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"details\">\r\n      <th mat-header-cell *matHeaderCellDef> Details </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.details}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"img\">\r\n      <th mat-header-cell *matHeaderCellDef> Image </th>\r\n      <td mat-cell *matCellDef=\"let element\"> \r\n        <img src=\"{{element.img.url}}\" width=\"50px\">     \r\n    </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"category\">\r\n      <th mat-header-cell *matHeaderCellDef> Category </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.category.name}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"delete\">\r\n      <th mat-header-cell *matHeaderCellDef> Delete </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n          <button (click)=\"deleteProduct(element._id)\"\r\n          >X</button\r\n            >\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n</div>\r\n</div>\r\n  <ng-template #notFoundMessage >\r\n    <h1>Products Not Found</h1>\r\n    </ng-template>\r\n  <ng-template #productLodding >\r\n    <h1>Products Lodding</h1>\r\n    </ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/product-update/component/product-update.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/product-update/component/product-update.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div *ngIf=\"products\">\r\n  <div *ngIf=\"products[0] != undefined; else notFoundMessage\">\r\n<table mat-table [dataSource]=\"products\" class=\"mat-elevation-z8\">\r\n    \r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element; let i=index\"> \r\n      <mat-form-field>\r\n      <input matInput  type=\"text\" minlength=\"6\" maxlength=\"15\"  \r\n       [ngModel]=\"element.name\" name=\"name\"\r\n       [(ngModel)]=\"products[i].name\" \r\n       placeholder=\"Product Name\"\r\n      >\r\n    </mat-form-field>\r\n     </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"location\">\r\n      <th mat-header-cell *matHeaderCellDef> Location </th>\r\n      <td mat-cell *matCellDef=\"let element;let i=index\">\r\n         <mat-form-field>\r\n      <input matInput   type=\"text\" minlength=\"6\" maxlength=\"15\" \r\n      placeholder=\"Prodcut Location\" name=\"location\"\r\n      [ngModel]=\"element.location\"\r\n      name=\"location\"\r\n       [(ngModel)]=\"products[i].location\"\r\n      >\r\n    </mat-form-field>\r\n         </td>\r\n    </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"quantities\">\r\n      <th mat-header-cell *matHeaderCellDef> Quantities </th>\r\n      <td mat-cell *matCellDef=\"let element;let i=index\"> \r\n        <mat-form-field>\r\n      <input matInput   type=\"number\" min=\"1\"\r\n      placeholder=\"Product Quantities\" id=\"quantitiesInfo\"  name=\"quantities\"\r\n      [ngModel]=\"element.quantities\"\r\n      name=\"quantities\"\r\n       [(ngModel)]=\"products[i].quantities\">\r\n    </mat-form-field>       \r\n        </td>\r\n    </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"price\">\r\n      <th mat-header-cell *matHeaderCellDef> Price </th>\r\n      <td mat-cell *matCellDef=\"let element;let i=index\"> \r\n        <mat-form-field>\r\n      <input matInput   type=\"number\" min=\"1\"\r\n      placeholder=\"Product Price\" id=\"priceInfo\"  name=\"price\"\r\n      [ngModel]=\"element.price\"\r\n      name=\"price\"\r\n       [(ngModel)]=\"products[i].price\">\r\n    </mat-form-field>       \r\n        </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"details\">\r\n      <th mat-header-cell *matHeaderCellDef> Details </th>\r\n      <td mat-cell *matCellDef=\"let element;let i=index\"> \r\n        <mat-form-field>\r\n      <textarea matInput   type=\"text\" minlength=\"6\" maxlength=\"200\" \r\n      placeholder=\"Product Details\" id=\"detailsInfo\"  name=\"details\"\r\n      [ngModel]=\"element.details\"\r\n      name=\"details\"\r\n       [(ngModel)]=\"products[i].details\">\r\n      </textarea>\r\n    </mat-form-field>       \r\n        </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"img\">\r\n      <th mat-header-cell *matHeaderCellDef> Image </th>\r\n      <td mat-cell *matCellDef=\"let element; let i = index\"> \r\n        \r\n        <input  type=\"file\" (change)=\"onFileSelected($event, i)\"\r\n      ngModel name=\"img\">      \r\n        <img  *ngIf=\"!imgURL[i]\" src=\"{{element.img.url}}\" width=\"50px\">   \r\n        <img *ngIf=\"imgURL[i]\" [src]=\"imgURL[i]\" width=\"50px\">  \r\n    </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"category\">\r\n      <th mat-header-cell *matHeaderCellDef> Category </th>\r\n      <td mat-cell *matCellDef=\"let element;let i=index\">  \r\n        \r\n    <mat-form-field>\r\n        <mat-label>Category</mat-label>\r\n        <mat-select  \r\n        type=\"text\"  \r\n       [ngModel]=\"element.category._id\" name=\"category\"\r\n       [(ngModel)]=\"products[i].category._id\"\r\n       >\r\n          <mat-option *ngFor=\"let c of categories$|async\" [value]=\"c._id\">\r\n            {{c.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n        \r\n        </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"update\">\r\n      <th mat-header-cell *matHeaderCellDef> Update </th>\r\n      <td mat-cell *matCellDef=\"let element;let i=index\">\r\n          <button  (click)=\"updateProduct(element._id,i)\"\r\n          >Update Product</button>\r\n      </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n</div>\r\n</div>\r\n  <ng-template #notFoundMessage >\r\n    <h1>Products Not Found</h1>\r\n    </ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/user-add-product/component/user-add-product.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/user-add-product/component/user-add-product.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-user-add-product-desktop fxShow.gt-sm fxHide.lt-md></app-user-add-product-desktop>\r\n<app-user-add-product-phone fxShow.lt-md fxHide.gt-sm></app-user-add-product-phone>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/user-add-product/user-add-product-desktop/component/user-add-product-desktop.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/user-add-product/user-add-product-desktop/component/user-add-product-desktop.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background-div\"></div>\n<div class=\"card-container\"\nfxLayoutAlign=\"center center\">\n\n<div class=\"add-product-card\">\n  <h1>Add Your Product</h1>\n  <form #formInfo=\"ngForm\" fxLayout=\"row\" fxLayoutGap=\"5px\" >\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" \n      fxLayoutGap=\"5px\" fxFlex=\"50%\">\n      <mat-form-field appearance=\"outline\" fxFlex=\"43%\">\n          <mat-label>Name</mat-label>\n        <input matInput   required type=\"text\"  placeholder=\"Name\" \n        minlength=\"6\" maxlength=\"15\"\n       #nameInfo=\"ngModel\" [(ngModel)]=\"product.name\" name=\"name\">\n      <mat-error class=\"\" *ngIf=\"nameInfo.errors?.required && nameInfo.touched\">\n          Product Name Missing</mat-error>\n      <mat-error  *ngIf=\"nameInfo.errors?.minlength && nameInfo.touched\">\n        Product name too short.<br>\n        Product name must be at least 6 characters</mat-error>\n      </mat-form-field>\n  \n  \n       <mat-form-field appearance=\"outline\" fxFlex=\"43%\">\n          <mat-label>Location</mat-label>\n          <input matInput   required type=\"text\"  placeholder=\"Location\"\n          minlength=\"6\" maxlength=\"15\"\n         #locationInfo=\"ngModel\" [(ngModel)]=\"product.location\" name=\"location\">\n        <mat-error *ngIf=\"locationInfo.errors?.required && locationInfo.touched\">\n          Location Missing</mat-error>\n          <mat-error  *ngIf=\"locationInfo.errors?.minlength && locationInfo.touched\">\n            Location too short.<br>\n            Location must be at least 6 characters</mat-error>\n        </mat-form-field>   \n  \n        <mat-form-field appearance=\"outline\" fxFlex=\"43%\">\n          <mat-label>Quantity</mat-label>\n          <input matInput   required type=\"number\"  placeholder=\"Quantities\" min=\"1\" \n         #quantitiesInfo=\"ngModel\" [(ngModel)]=\"product.quantities\" name=\"quantities\">\n        <mat-error *ngIf=\"quantitiesInfo.errors?.required && quantitiesInfo.touched\">\n          Quantities Missing</mat-error>\n        </mat-form-field>\n      \n        <mat-form-field appearance=\"outline\" fxFlex=\"43\">\n          <mat-label>Price</mat-label>\n          <input matInput   required type=\"number\"  placeholder=\"Price\" min=\"1\" \n         #priceInfo=\"ngModel\" [(ngModel)]=\"product.price\" name=\"price\">\n        <mat-error *ngIf=\"priceInfo.errors?.required && priceInfo.touched\">\n          Price Missing</mat-error>\n        </mat-form-field>\n  \n        <mat-form-field appearance=\"outline\" fxFlex=\"90%\">\n          <mat-label>Category</mat-label>\n          <mat-select  \n          required type=\"text\" \n          #categoryInfo=\"ngModel\" [(ngModel)]=\"product.category\" name=\"category\">\n            <mat-option *ngFor=\"let c of categories$|async\" [value]=\"c._id\">\n              {{c.name}}\n            </mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"categoryInfo.errors?.required && categoryInfo.touched\">\n              Category Missing</mat-error>\n        </mat-form-field>\n  \n        <mat-form-field appearance=\"outline\" fxFlex=\"90%\">\n          <mat-label>Details</mat-label>\n          <textarea matInput   required type=\"text\"  placeholder=\"Details\"\n          minlength=\"6\" maxlength=\"200\"\n         #detailsInfo=\"ngModel\" [(ngModel)]=\"product.details\" name=\"details\">\n         </textarea>\n        <mat-error *ngIf=\"detailsInfo.errors?.required && detailsInfo.touched\">\n          Details Missing</mat-error>\n          <mat-error  *ngIf=\"detailsInfo.errors?.minlength && detailsInfo.touched\">\n            Details too short.<br>\n            Details must be at least 6 characters</mat-error>\n        </mat-form-field>   \n        <button mat-raised-button fxFlex=\"90%\"\n        type=\"submit\" class=\"submitFormBtn\"\n        [disabled]=\"formInfo.form.invalid\"\n        (click)=\"userAddingProduct()\">\n          Add Product\n        </button>\n  \n        </div>\n\n          <input required\n          #imgInfo=\"ngModel\" [(ngModel)]=\"product.img\" name=\"img\"\n          style=\"display:none\"\n          >\n          <input  style=\"display:none\"\n          type=\"file\" (change)=\"onFileSelected($event)\"  accept='image/*'\n          #imgUploader>\n           <div fxLayoutAlign=\"center center\" fxLayout=\"column\" fxFlex=\"50%\">\n               <p *ngIf=\"imgURL\" class=\"img-user-healp\">\n                  To upload another image, click on the image you have already uploaded\n              </p>\n         <img         matTooltip=\"Info about the action\"\n         matTooltipPosition=\"above\"\n         [src]=\"imgURL\" height=\"200\" *ngIf=\"imgURL;else imgNotUpload\"  (click)=\"imgUploader.click()\">\n           \n           <ng-template #imgNotUpload>\n            <div (click)=\"imgUploader.click()\">\n              <i class=\"material-icons add-img-icon\">\n                  add_photo_alternate\n                  </i>\n            </div>\n           </ng-template>\n  \n           <div *ngIf=\"messageFileNoImg\">\n           <p>{{messageFileNoImg}}</p>\n           </div>\n        <div *ngIf=\"imgInfo.errors?.required && imgInfo.touched\">\n          Image Missing\n      </div>\n      </div>\n\n       \n    </form>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/user-add-product/user-add-product-phone/component/user-add-product-phone.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/user-add-product/user-add-product-phone/component/user-add-product-phone.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background-div\"></div>\n<div class=\"add-product-card\">\n<h1>Add Your Product</h1>\n<form #formInfo=\"ngForm\" fxLayout=\"column\" fxLayoutGap=\"5px\" >\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\"\n    fxLayoutGap=\"5px\">\n    <mat-form-field appearance=\"outline\" fxFlex=\"43%\">\n        <mat-label>Name</mat-label>\n      <input matInput   required type=\"text\"  placeholder=\"Name\" \n      minlength=\"6\" maxlength=\"15\"\n     #nameInfo=\"ngModel\" [(ngModel)]=\"product.name\" name=\"name\">\n    <mat-error class=\"\" *ngIf=\"nameInfo.errors?.required && nameInfo.touched\">\n        Product Name Missing</mat-error>\n    <mat-error  *ngIf=\"nameInfo.errors?.minlength && nameInfo.touched\">\n      Product name too short.<br>\n      Product name must be at least 6 characters</mat-error>\n    </mat-form-field>\n\n\n     <mat-form-field appearance=\"outline\" fxFlex=\"43%\">\n        <mat-label>Location</mat-label>\n        <input matInput   required type=\"text\"  placeholder=\"Location\"\n        minlength=\"6\" maxlength=\"15\"\n       #locationInfo=\"ngModel\" [(ngModel)]=\"product.location\" name=\"location\">\n      <mat-error *ngIf=\"locationInfo.errors?.required && locationInfo.touched\">\n        Location Missing</mat-error>\n        <mat-error  *ngIf=\"locationInfo.errors?.minlength && locationInfo.touched\">\n          Location too short.<br>\n          Location must be at least 6 characters</mat-error>\n      </mat-form-field>   \n\n      <mat-form-field appearance=\"outline\" fxFlex=\"43%\">\n        <mat-label>Quantity</mat-label>\n        <input matInput   required type=\"number\"  placeholder=\"Quantities\" min=\"1\" \n       #quantitiesInfo=\"ngModel\" [(ngModel)]=\"product.quantities\" name=\"quantities\">\n      <mat-error *ngIf=\"quantitiesInfo.errors?.required && quantitiesInfo.touched\">\n        Quantities Missing</mat-error>\n      </mat-form-field>\n    \n      <mat-form-field appearance=\"outline\" fxFlex=\"43\">\n        <mat-label>Price</mat-label>\n        <input matInput   required type=\"number\"  placeholder=\"Price\" min=\"1\" \n       #priceInfo=\"ngModel\" [(ngModel)]=\"product.price\" name=\"price\">\n      <mat-error *ngIf=\"priceInfo.errors?.required && priceInfo.touched\">\n        Price Missing</mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" fxFlex=\"90%\">\n        <mat-label>Category</mat-label>\n        <mat-select  \n        required type=\"text\" \n        #categoryInfo=\"ngModel\" [(ngModel)]=\"product.category\" name=\"category\">\n          <mat-option *ngFor=\"let c of categories$|async\" [value]=\"c._id\">\n            {{c.name}}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"categoryInfo.errors?.required && categoryInfo.touched\">\n            Category Missing</mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" fxFlex=\"90%\">\n        <mat-label>Details</mat-label>\n        <textarea matInput   required type=\"text\"  placeholder=\"Details\"\n        minlength=\"6\" maxlength=\"200\"\n       #detailsInfo=\"ngModel\" [(ngModel)]=\"product.details\" name=\"details\">\n       </textarea>\n      <mat-error *ngIf=\"detailsInfo.errors?.required && detailsInfo.touched\">\n        Details Missing</mat-error>\n        <mat-error  *ngIf=\"detailsInfo.errors?.minlength && detailsInfo.touched\">\n          Details too short.<br>\n          Details must be at least 6 characters</mat-error>\n      </mat-form-field>   \n\n\n      </div>\n        <input required\n        #imgInfo=\"ngModel\" [(ngModel)]=\"product.img\" name=\"img\"\n        style=\"display:none\"\n        >\n        <input  style=\"display:none\"\n        type=\"file\" (change)=\"onFileSelected($event)\"  accept='image/*'\n        #imgUploader>\n         <div fxLayoutAlign=\"center center\" fxLayout=\"column\">\n             <p *ngIf=\"imgURL\" class=\"img-user-healp\">\n                To upload another image, click on the image you have already uploaded\n            </p>\n       <img         matTooltip=\"Info about the action\"\n       matTooltipPosition=\"above\"\n       [src]=\"imgURL\" height=\"200\" *ngIf=\"imgURL;else imgNotUpload\"  (click)=\"imgUploader.click()\">\n         \n         <ng-template #imgNotUpload>\n          <div (click)=\"imgUploader.click()\">\n            <i class=\"material-icons add-img-icon\">\n                add_photo_alternate\n                </i>\n          </div>\n         </ng-template>\n\n         <div *ngIf=\"messageFileNoImg\">\n         <p>{{messageFileNoImg}}</p>\n         </div>\n      <div *ngIf=\"imgInfo.errors?.required && imgInfo.touched\">\n        Image Missing\n    </div>\n    </div>\n\n      <button mat-raised-button fxFlex=\"90%\"\n      type=\"submit\" \n      [disabled]=\"formInfo.form.invalid\"\n      (click)=\"userAddingProduct()\">\n        Add Product\n      </button>\n \n  </form>\n  </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngualrMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngualrMaterialModule", function() { return AngualrMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
















let AngualrMaterialModule = class AngualrMaterialModule {
};
AngualrMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"]
        ]
    })
], AngualrMaterialModule);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loging_loging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loging/loging.component */ "./src/app/loging/loging.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");






const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _loging_loging_component__WEBPACK_IMPORTED_MODULE_3__["LogingComponent"] },
    { path: 'register', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./register/module/register/register.module */ "./src/app/register/module/register/register.module.ts"))
            .then(m => m.RegisterModule) },
    { path: 'products', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./products/module/products.module */ "./src/app/products/module/products.module.ts"))
            .then(m => m.ProductsModule), canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    },
    { path: 'user/products', loadChildren: () => __webpack_require__.e(/*! import() | user-product-user-products-module-user-products-module */ "user-product-user-products-module-user-products-module").then(__webpack_require__.bind(null, /*! ./user-product/user-products/module/user-products.module */ "./src/app/user-product/user-products/module/user-products.module.ts"))
            .then(m => m.UserProductsModule), canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    },
    { path: 'user/add-product', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./user-product/user-add-product/module/user-add-product.module */ "./src/app/user-product/user-add-product/module/user-add-product.module.ts"))
            .then(m => m.UserAddProductModule) //, canActivate: [AuthGuardService]
    },
    { path: 'user/delete-product', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./user-product/delete-product/module/delete-product.module */ "./src/app/user-product/delete-product/module/delete-product.module.ts"))
            .then(m => m.DeleteProductModule), canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    },
    { path: 'user/dashboard', loadChildren: () => __webpack_require__.e(/*! import() | user-dashboard-module-user-dashboard-module */ "user-dashboard-module-user-dashboard-module").then(__webpack_require__.bind(null, /*! ./user-dashboard/module/user-dashboard.module */ "./src/app/user-dashboard/module/user-dashboard.module.ts"))
            .then(m => m.UserDashboardModule), canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    },
    { path: 'user/update-product', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./user-product/product-update/module/product-update.module */ "./src/app/user-product/product-update/module/product-update.module.ts"))
            .then(m => m.ProductUpdateModule), canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nmain{\r\n    position: relative;\r\n    top: 45px;\r\n}\r\nheader{\r\n    position: relative;\r\n    background-color: #1976D2;\r\n}\r\n@media only screen and (min-width:600px){\r\n    main{\r\n        top: 0;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0k7UUFDSSxNQUFNO0lBQ1Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm1haW57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDQ1cHg7XHJcbn1cclxuaGVhZGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZEMjtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjAwcHgpe1xyXG4gICAgbWFpbntcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Stock Sale';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _loging_loging_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loging/loging.component */ "./src/app/loging/loging.component.ts");
/* harmony import */ var _register_module_register_register_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/module/register/register.module */ "./src/app/register/module/register/register.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shear_modul__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shear.modul */ "./src/app/shear.modul.ts");
/* harmony import */ var _massage_massage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./massage/massage.component */ "./src/app/massage/massage.component.ts");
/* harmony import */ var _error_inteceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error.inteceptor */ "./src/app/error.inteceptor.ts");
/* harmony import */ var _products_module_products_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products/module/products.module */ "./src/app/products/module/products.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _header_nav_bar_module_module_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header-nav-bar/module/module.module */ "./src/app/header-nav-bar/module/module.module.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _user_product_user_add_product_module_user_add_product_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-product/user-add-product/module/user-add-product.module */ "./src/app/user-product/user-add-product/module/user-add-product.module.ts");
/* harmony import */ var _user_product_delete_product_module_delete_product_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-product/delete-product/module/delete-product.module */ "./src/app/user-product/delete-product/module/delete-product.module.ts");
/* harmony import */ var _user_product_product_update_module_product_update_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-product/product-update/module/product-update.module */ "./src/app/user-product/product-update/module/product-update.module.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _loging_loging_component__WEBPACK_IMPORTED_MODULE_5__["LogingComponent"],
            _massage_massage_component__WEBPACK_IMPORTED_MODULE_10__["MassageComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"]
        ],
        entryComponents: [_massage_massage_component__WEBPACK_IMPORTED_MODULE_10__["MassageComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _register_module_register_register_module__WEBPACK_IMPORTED_MODULE_6__["RegisterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _shear_modul__WEBPACK_IMPORTED_MODULE_9__["ShearModule"],
            _products_module_products_module__WEBPACK_IMPORTED_MODULE_12__["ProductsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
            _header_nav_bar_module_module_module__WEBPACK_IMPORTED_MODULE_14__["HeaderNavBarModule"],
            _user_product_user_add_product_module_user_add_product_module__WEBPACK_IMPORTED_MODULE_16__["UserAddProductModule"],
            _user_product_delete_product_module_delete_product_module__WEBPACK_IMPORTED_MODULE_17__["DeleteProductModule"],
            _user_product_product_update_module_product_update_module__WEBPACK_IMPORTED_MODULE_18__["ProductUpdateModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayModule"],
            _header_nav_bar_module_module_module__WEBPACK_IMPORTED_MODULE_14__["HeaderNavBarModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _error_inteceptor__WEBPACK_IMPORTED_MODULE_11__["HttpErrorInteceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/error.inteceptor.ts":
/*!*************************************!*\
  !*** ./src/app/error.inteceptor.ts ***!
  \*************************************/
/*! exports provided: HttpErrorInteceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInteceptor", function() { return HttpErrorInteceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _massage_massage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./massage/massage.component */ "./src/app/massage/massage.component.ts");






let HttpErrorInteceptor = class HttpErrorInteceptor {
    constructor(dialog) {
        this.dialog = dialog;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            let err;
            if (error.status === 409) {
                err = error.error.message;
            }
            else {
                err = error.message;
            }
            const dialogRef = this.dialog.open(_massage_massage_component__WEBPACK_IMPORTED_MODULE_5__["MassageComponent"], {
                width: '33rem',
                data: { error: err }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
};
HttpErrorInteceptor.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
HttpErrorInteceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], HttpErrorInteceptor);



/***/ }),

/***/ "./src/app/header-nav-bar/component/header-nav-bar.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/header-nav-bar/component/header-nav-bar.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\napp-products-nav-phone {\r\n    position: fixed;\r\n    z-index: 100;\r\n    right: 0;\r\n    background-color:#1976D2;\r\n    width:100%;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLW5hdi1iYXIvY29tcG9uZW50L2hlYWRlci1uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixRQUFRO0lBQ1Isd0JBQXdCO0lBQ3hCLFVBQVU7O0FBRWQiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXItbmF2LWJhci9jb21wb25lbnQvaGVhZGVyLW5hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5hcHAtcHJvZHVjdHMtbmF2LXBob25lIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTk3NkQyO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/header-nav-bar/component/header-nav-bar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/header-nav-bar/component/header-nav-bar.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavBarComponent", function() { return HeaderNavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");




let HeaderNavBarComponent = class HeaderNavBarComponent {
    constructor(authGuardService, authenticationService) {
        this.authGuardService = authGuardService;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        this.isUserLogin$ = this.authGuardService.checkLogin();
        this.user$ = this.authenticationService.getUser().subscribe(user => {
            this.user = user;
        });
    }
    ngOnDestroy() {
        this.user$.unsubscribe();
    }
    logout() {
        this.authenticationService.loguot();
    }
};
HeaderNavBarComponent.ctorParameters = () => [
    { type: src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
HeaderNavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header-nav-bar/component/header-nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-nav-bar.component.css */ "./src/app/header-nav-bar/component/header-nav-bar.component.css")).default]
    })
], HeaderNavBarComponent);



/***/ }),

/***/ "./src/app/header-nav-bar/module/module.module.ts":
/*!********************************************************!*\
  !*** ./src/app/header-nav-bar/module/module.module.ts ***!
  \********************************************************/
/*! exports provided: HeaderNavBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavBarModule", function() { return HeaderNavBarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _component_header_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/header-nav-bar.component */ "./src/app/header-nav-bar/component/header-nav-bar.component.ts");
/* harmony import */ var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shear.modul */ "./src/app/shear.modul.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_products_products_nav_desk_top_module_products_nav_desk_top_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/products/products-nav-desk-top/module/products-nav-desk-top.module */ "./src/app/products/products-nav-desk-top/module/products-nav-desk-top.module.ts");
/* harmony import */ var src_app_products_products_nav_phone_module_products_nav_phone_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/products/products-nav-phone/module/products-nav-phone.module */ "./src/app/products/products-nav-phone/module/products-nav-phone.module.ts");







let HeaderNavBarModule = class HeaderNavBarModule {
};
HeaderNavBarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_header_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["HeaderNavBarComponent"]],
        imports: [
            src_app_shear_modul__WEBPACK_IMPORTED_MODULE_3__["ShearModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            src_app_products_products_nav_desk_top_module_products_nav_desk_top_module__WEBPACK_IMPORTED_MODULE_5__["ProductsNavDeskTopModule"],
            src_app_products_products_nav_phone_module_products_nav_phone_module__WEBPACK_IMPORTED_MODULE_6__["ProductsNavPhoneModule"]
        ],
        exports: [_component_header_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["HeaderNavBarComponent"]]
    })
], HeaderNavBarModule);



/***/ }),

/***/ "./src/app/loging/loging.component.css":
/*!*********************************************!*\
  !*** ./src/app/loging/loging.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-container{\r\n    height: 100vh;\r\n    width:100%;\r\n}\r\n.backgroun-img{\r\n    background-image: url('login-form-body-background.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    width: 100%;\r\n    top:-60px;\r\n    height: 130vh;\r\n    position: absolute;\r\n    z-index: -1;  \r\n}\r\nform{\r\nbackground-image: -webkit-gradient(linear, left bottom, left top, from(#30cfd0), to(#330867));\r\nbackground-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);\r\nborder-radius: 10px;\r\nmargin:15px;\r\nheight: 100vh;\r\nbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\r\n\r\n}\r\n.logInH1{\r\n    font-size: 1.8rem;\r\n}\r\n.logoIconFirstIcon{\r\n    background-color: #ffffff;\r\n    color: black;\r\n    padding:2rem;\r\n    border-radius: 50%;\r\n    box-sizing: content-box;\r\n    font-size: 3rem;\r\n    height: 3rem;\r\n    width: 3rem;\r\n}\r\n.registerLink{\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    color:#ffffff;\r\n    font-weight:600;\r\n    margin-bottom: 10px;\r\n}\r\n.submitFormBtn{\r\n    display: block;\r\n}\r\n@media only screen and (min-width: 600px) and (max-width: 1439px){\r\n    .form-container{\r\n        width:50%;\r\n        margin: auto;\r\n        }\r\n        form{\r\n            height:50vh;\r\n        }\r\n  }\r\n@media (min-width: 768px) and (max-width: 1024px) and (orientation:portrait)   {\r\n    .form-container{\r\n        width:50%;\r\n        margin: auto;\r\n        }\r\n        form{\r\n            height:50vh;\r\n        }\r\n  }\r\n@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\r\n    .form-container{\r\n        width:50%;\r\n        margin: auto;\r\n        }\r\n        form{\r\n            height:100vh;\r\n        }\r\n  }\r\n@media only screen and (min-width: 1440px) and (max-width: 2560px){\r\n    .form-container{\r\n        width:30%;\r\n        margin: auto;\r\n        }\r\n        form{\r\n            height:80vh;\r\n        }\r\n  }\r\n@media only screen and (min-width: 2560px){\r\n    form {\r\n        font-size: 2rem;\r\n        line-height: 2rem;\r\n        height:80vh;\r\n\r\n    }\r\n   .div-inputs-and-sub-button{\r\n              width: 80%;\r\n          }\r\n    .submitFormBtn{\r\n        width: 50%;\r\n        height: 11vh;\r\n        font-size: 1.5rem;\r\n    }\r\n    .logoIconFirstIcon{\r\n        padding:4rem;\r\n        font-size: 5rem;\r\n        height: 5rem;\r\n        width: 5rem;\r\n\r\n    }\r\n    .logInH1{\r\n        font-size: 4rem;\r\n\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5nL2xvZ2luZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDtBQUNBO0lBQ0ksdURBQTJFO0lBQzNFLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUVBO0FBQ0EsNkZBQW1FO0FBQW5FLG1FQUFtRTtBQUNuRSxtQkFBbUI7QUFDbkIsV0FBVztBQUNYLGFBQWE7QUFDYiw0RUFBNEU7OztBQUc1RTtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBSUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxZQUFZO1FBQ1o7UUFDQTtZQUNJLFdBQVc7UUFDZjtFQUNOO0FBQ0E7SUFDRTtRQUNJLFNBQVM7UUFDVCxZQUFZO1FBQ1o7UUFDQTtZQUNJLFdBQVc7UUFDZjtFQUNOO0FBRUE7SUFDRTtRQUNJLFNBQVM7UUFDVCxZQUFZO1FBQ1o7UUFDQTtZQUNJLFlBQVk7UUFDaEI7RUFDTjtBQUlBO0lBQ0U7UUFDSSxTQUFTO1FBQ1QsWUFBWTtRQUNaO1FBQ0E7WUFDSSxXQUFXO1FBQ2Y7RUFDTjtBQUNBO0lBQ0U7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLFdBQVc7O0lBRWY7R0FDRDtjQUNXLFVBQVU7VUFDZDtJQUNOO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtRQUNaLFdBQVc7O0lBRWY7SUFDQTtRQUNJLGVBQWU7O0lBRW5CO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbmcvbG9naW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4uYmFja2dyb3VuLWltZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi1mb3JtLWJvZHktYmFja2dyb3VuZC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6LTYwcHg7XHJcbiAgICBoZWlnaHQ6IDEzMHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7ICBcclxufVxyXG5cclxuZm9ybXtcclxuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzMwY2ZkMCAwJSwgIzMzMDg2NyAxMDAlKTtcclxuYm9yZGVyLXJhZGl1czogMTBweDtcclxubWFyZ2luOjE1cHg7XHJcbmhlaWdodDogMTAwdmg7XHJcbmJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcblxyXG5cclxufVxyXG4ubG9nSW5IMXtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG59XHJcblxyXG4ubG9nb0ljb25GaXJzdEljb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzoycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICB3aWR0aDogM3JlbTtcclxufVxyXG4ucmVnaXN0ZXJMaW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6I2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zdWJtaXRGb3JtQnRue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4gIFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTQzOXB4KXtcclxuICAgIC5mb3JtLWNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgICBoZWlnaHQ6NTB2aDtcclxuICAgICAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgICB7XHJcbiAgICAuZm9ybS1jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybXtcclxuICAgICAgICAgICAgaGVpZ2h0OjUwdmg7XHJcbiAgICAgICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgIC5mb3JtLWNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICAgICAgfVxyXG4gIH1cclxuXHJcbiAgICBcclxuIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSBhbmQgKG1heC13aWR0aDogMjU2MHB4KXtcclxuICAgIC5mb3JtLWNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDozMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgICBoZWlnaHQ6ODB2aDtcclxuICAgICAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KXtcclxuICAgIGZvcm0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICBoZWlnaHQ6ODB2aDtcclxuXHJcbiAgICB9XHJcbiAgIC5kaXYtaW5wdXRzLWFuZC1zdWItYnV0dG9ue1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAuc3VibWl0Rm9ybUJ0bntcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTF2aDtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgIC5sb2dvSWNvbkZpcnN0SWNvbntcclxuICAgICAgICBwYWRkaW5nOjRyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgICAgIGhlaWdodDogNXJlbTtcclxuICAgICAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICB9XHJcbiAgICAubG9nSW5IMXtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcblxyXG4gICAgfVxyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/loging/loging.component.ts":
/*!********************************************!*\
  !*** ./src/app/loging/loging.component.ts ***!
  \********************************************/
/*! exports provided: LogingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogingComponent", function() { return LogingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modals_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/user */ "./src/app/modals/user.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");




let LogingComponent = class LogingComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.user = new src_app_modals_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    userSubmitLoginForm() {
        this.authenticationService.login(this.user);
    }
};
LogingComponent.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
LogingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loging',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loging.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loging/loging.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loging.component.css */ "./src/app/loging/loging.component.css")).default]
    })
], LogingComponent);



/***/ }),

/***/ "./src/app/massage/massage.component.ts":
/*!**********************************************!*\
  !*** ./src/app/massage/massage.component.ts ***!
  \**********************************************/
/*! exports provided: MassageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MassageComponent", function() { return MassageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let MassageComponent = class MassageComponent {
    constructor(data, matDialog) {
        this.data = data;
        this.matDialog = matDialog;
    }
    ngOnInit() {
        this.massage = this.data.error;
    }
    closeModal() {
        this.matDialog.closeAll();
    }
};
MassageComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
MassageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-massage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./massage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/massage/massage.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], MassageComponent);



/***/ }),

/***/ "./src/app/modals/product.ts":
/*!***********************************!*\
  !*** ./src/app/modals/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Product {
    constructor(_id, name, location, details, quantities, price, user, img, category) {
        this._id = _id;
        this.name = name;
        this.location = location;
        this.details = details;
        this.quantities = quantities;
        this.price = price;
        this.user = user;
        this.img = img;
        this.category = category;
    }
}


/***/ }),

/***/ "./src/app/modals/user.ts":
/*!********************************!*\
  !*** ./src/app/modals/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(userName, firstName, lastName, password, email, phone, _id) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this._id = _id;
    }
}


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/products/component/products.component.css":
/*!***********************************************************!*\
  !*** ./src/app/products/component/products.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nsection{\r\n    color:black;\r\n    background:#1976D2;\r\n\r\n}\r\n  main{\r\n    background:#2196F3;\r\n}\r\n  @media only screen and (max-width:600px){\r\n    main{\r\n        top: 48px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50L3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjs7QUFFdEI7RUFDRTtJQUNFLGtCQUFrQjtBQUN0QjtFQUNBO0lBQ0k7UUFDSSxTQUFTO0lBQ2I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudC9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnNlY3Rpb257XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGJhY2tncm91bmQ6IzE5NzZEMjtcclxuXHJcbn1cclxuICBtYWlue1xyXG4gICAgYmFja2dyb3VuZDojMjE5NkYzO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCl7XHJcbiAgICBtYWlue1xyXG4gICAgICAgIHRvcDogNDhweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/products/component/products.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/products/component/products.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductsComponent = class ProductsComponent {
};
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/component/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.css */ "./src/app/products/component/products.component.css")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/products/module/products-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/products/module/products-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/products.component */ "./src/app/products/component/products.component.ts");
/* harmony import */ var _products_all_products_component_products_all_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../products-all-products/component/products-all-products.component */ "./src/app/products/products-all-products/component/products-all-products.component.ts");
/* harmony import */ var _products_by_category_component_products_by_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products-by-category/component/products-by-category.component */ "./src/app/products/products-by-category/component/products-by-category.component.ts");
/* harmony import */ var _products_search_component_products_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../products-search/component/products-search.component */ "./src/app/products/products-search/component/products-search.component.ts");







const routes = [
    { path: '', component: _component_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], children: [
            { path: '', component: _component_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"] },
            { path: 'all-products', component: _products_all_products_component_products_all_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsAllProductsComponent"] },
            { path: 'category/:categoryName', component: _products_by_category_component_products_by_category_component__WEBPACK_IMPORTED_MODULE_5__["ProductsByCategoryComponent"] },
            { path: 'search/:fild/:searchVal', component: _products_search_component_products_search_component__WEBPACK_IMPORTED_MODULE_6__["ProductsSearchComponent"] },
        ] }
];
let ProductsRoutingModule = class ProductsRoutingModule {
};
ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductsRoutingModule);



/***/ }),

/***/ "./src/app/products/module/products.module.ts":
/*!****************************************************!*\
  !*** ./src/app/products/module/products.module.ts ***!
  \****************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _component_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/products.component */ "./src/app/products/component/products.component.ts");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/products/module/products-routing.module.ts");
/* harmony import */ var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shear.modul */ "./src/app/shear.modul.ts");
/* harmony import */ var _products_all_products_module_products_all_products_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products-all-products/module/products-all-products.module */ "./src/app/products/products-all-products/module/products-all-products.module.ts");
/* harmony import */ var _products_by_category_module_products_by_category_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../products-by-category/module/products-by-category.module */ "./src/app/products/products-by-category/module/products-by-category.module.ts");
/* harmony import */ var _products_search_module_products_search_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../products-search/module/products-search.module */ "./src/app/products/products-search/module/products-search.module.ts");
/* harmony import */ var src_app_search_product_module_search_product_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/search-product/module/search-product.module */ "./src/app/search-product/module/search-product.module.ts");









let ProductsModule = class ProductsModule {
};
ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"]],
        imports: [
            _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"],
            src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__["ShearModule"],
            _products_all_products_module_products_all_products_module__WEBPACK_IMPORTED_MODULE_5__["ProductsAllProductsModule"],
            _products_by_category_module_products_by_category_module__WEBPACK_IMPORTED_MODULE_6__["ProductsByCategoryModule"],
            _products_search_module_products_search_module__WEBPACK_IMPORTED_MODULE_7__["ProductsSearchModule"],
            src_app_search_product_module_search_product_module__WEBPACK_IMPORTED_MODULE_8__["SearchProductModule"]
        ],
        exports: [_component_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"],
        ]
    })
], ProductsModule);



/***/ }),

/***/ "./src/app/products/product-format/component/product-format.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/products/product-format/component/product-format.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.product-card{\r\n    background-color: #E1F5FE;\r\n    color:#000000;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    font-family: 'Oswald', sans-serif;\r\n    margin-bottom:10px;\r\n\r\n}\r\n.product-img{\r\n\r\n}\r\n.product-card-content{\r\n    color: #212121;\r\n}\r\n.product-name{\r\n    text-align: center;\r\n    font-family: 'Bowlby One SC', cursive;\r\n    font-weight: 700;\r\n    font-size:2rem;\r\n}\r\n.product-category{\r\n    font-weight: 700;\r\n    font-size:1.1rem;\r\n}\r\n.product-user-name-location-div{\r\n\r\n}\r\n.locationP{\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n.product-call-div-btn{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n.product-call-btn{\r\n    background: #80D8FF;\r\n}\r\n.product-call-btn a {\r\n    text-decoration: none;\r\n    color: #00B0FF;\r\n}\r\n.mat-icon-call-user{\r\n    color:#0D47A1;\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1mb3JtYXQvY29tcG9uZW50L3Byb2R1Y3QtZm9ybWF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw0RUFBNEU7SUFDNUUsaUNBQWlDO0lBQ2pDLGtCQUFrQjs7QUFFdEI7QUFDQTs7QUFFQTtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxtQkFBWTtJQUFaLFlBQVk7SUFDWix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1mb3JtYXQvY29tcG9uZW50L3Byb2R1Y3QtZm9ybWF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnByb2R1Y3QtY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUY1RkU7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuXHJcbn1cclxuLnByb2R1Y3QtaW1ne1xyXG5cclxufVxyXG4ucHJvZHVjdC1jYXJkLWNvbnRlbnR7XHJcbiAgICBjb2xvcjogIzIxMjEyMTtcclxufVxyXG5cclxuLnByb2R1Y3QtbmFtZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQm93bGJ5IE9uZSBTQycsIGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOjJyZW07XHJcbn1cclxuLnByb2R1Y3QtY2F0ZWdvcnl7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOjEuMXJlbTtcclxufVxyXG4ucHJvZHVjdC11c2VyLW5hbWUtbG9jYXRpb24tZGl2e1xyXG5cclxufVxyXG4ubG9jYXRpb25Qe1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucHJvZHVjdC1jYWxsLWRpdi1idG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnByb2R1Y3QtY2FsbC1idG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjODBEOEZGO1xyXG59XHJcbi5wcm9kdWN0LWNhbGwtYnRuIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMwMEIwRkY7XHJcbn1cclxuLm1hdC1pY29uLWNhbGwtdXNlcntcclxuICAgIGNvbG9yOiMwRDQ3QTE7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/products/product-format/component/product-format.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/products/product-format/component/product-format.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductFormatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormatComponent", function() { return ProductFormatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductFormatComponent = class ProductFormatComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductFormatComponent.prototype, "products", void 0);
ProductFormatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-format',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-format.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-format/component/product-format.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-format.component.css */ "./src/app/products/product-format/component/product-format.component.css")).default]
    })
], ProductFormatComponent);



/***/ }),

/***/ "./src/app/products/product-format/module/product-format.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/products/product-format/module/product-format.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProductFormatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormatModule", function() { return ProductFormatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _component_product_format_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/product-format.component */ "./src/app/products/product-format/component/product-format.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/angular-material.module */ "./src/app/angular-material.module.ts");





let ProductFormatModule = class ProductFormatModule {
};
ProductFormatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_product_format_component__WEBPACK_IMPORTED_MODULE_2__["ProductFormatComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngualrMaterialModule"]
        ],
        exports: [_component_product_format_component__WEBPACK_IMPORTED_MODULE_2__["ProductFormatComponent"]]
    })
], ProductFormatModule);



/***/ }),

/***/ "./src/app/products/products-all-products/component/products-all-products.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/products/products-all-products/component/products-all-products.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLWFsbC1wcm9kdWN0cy9jb21wb25lbnQvcHJvZHVjdHMtYWxsLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/products/products-all-products/component/products-all-products.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/products/products-all-products/component/products-all-products.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProductsAllProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsAllProductsComponent", function() { return ProductsAllProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");



let ProductsAllProductsComponent = class ProductsAllProductsComponent {
    constructor(productsService) {
        this.productsService = productsService;
    }
    ngOnInit() {
        this.products$ = this.productsService.getAllProducts();
    }
};
ProductsAllProductsComponent.ctorParameters = () => [
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
];
ProductsAllProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-all-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products-all-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-all-products/component/products-all-products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products-all-products.component.css */ "./src/app/products/products-all-products/component/products-all-products.component.css")).default]
    })
], ProductsAllProductsComponent);



/***/ }),

/***/ "./src/app/products/products-all-products/module/products-all-products-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/products/products-all-products/module/products-all-products-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProductsAllProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsAllProductsRoutingModule", function() { return ProductsAllProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/products-all-products.component */ "./src/app/products/products-all-products/component/products-all-products.component.ts");




const route = [
    { path: '', component: _component_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsAllProductsComponent"] }
];
let ProductsAllProductsRoutingModule = class ProductsAllProductsRoutingModule {
};
ProductsAllProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductsAllProductsRoutingModule);



/***/ }),

/***/ "./src/app/products/products-all-products/module/products-all-products.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/products/products-all-products/module/products-all-products.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ProductsAllProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsAllProductsModule", function() { return ProductsAllProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _component_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/products-all-products.component */ "./src/app/products/products-all-products/component/products-all-products.component.ts");
/* harmony import */ var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shear.modul */ "./src/app/shear.modul.ts");
/* harmony import */ var _products_all_products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-all-products-routing.module */ "./src/app/products/products-all-products/module/products-all-products-routing.module.ts");






let ProductsAllProductsModule = class ProductsAllProductsModule {
};
ProductsAllProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsAllProductsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__["ShearModule"],
            _products_all_products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsAllProductsRoutingModule"]
        ],
        exports: [_component_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsAllProductsComponent"]]
    })
], ProductsAllProductsModule);



/***/ }),

/***/ "./src/app/products/products-by-category/component/products-by-category.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/products/products-by-category/component/products-by-category.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLWJ5LWNhdGVnb3J5L2NvbXBvbmVudC9wcm9kdWN0cy1ieS1jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/products/products-by-category/component/products-by-category.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/products/products-by-category/component/products-by-category.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProductsByCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsByCategoryComponent", function() { return ProductsByCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");





let ProductsByCategoryComponent = class ProductsByCategoryComponent {
    constructor(productsService, router, categoryService) {
        this.productsService = productsService;
        this.router = router;
        this.categoryService = categoryService;
    }
    ngOnInit() {
        this.route$ = this.router.params.subscribe((params) => {
            console.log(params.categoryName);
            this.categoryService.getCategoryByName(params.categoryName)
                .subscribe(categoy => {
                console.log(categoy._id);
                this.products$ = this.productsService.getProductsByCategory(categoy._id);
            });
        });
    }
    ngOnDestroy() {
        this.route$.unsubscribe();
    }
};
ProductsByCategoryComponent.ctorParameters = () => [
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }
];
ProductsByCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-by-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products-by-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-by-category/component/products-by-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products-by-category.component.css */ "./src/app/products/products-by-category/component/products-by-category.component.css")).default]
    })
], ProductsByCategoryComponent);



/***/ }),

/***/ "./src/app/products/products-by-category/module/products-by-category-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/products/products-by-category/module/products-by-category-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProductsByCategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsByCategoryRoutingModule", function() { return ProductsByCategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _component_products_by_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/products-by-category.component */ "./src/app/products/products-by-category/component/products-by-category.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const route = [
    { path: '', component: _component_products_by_category_component__WEBPACK_IMPORTED_MODULE_2__["ProductsByCategoryComponent"] }
];
let ProductsByCategoryRoutingModule = class ProductsByCategoryRoutingModule {
};
ProductsByCategoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(route)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ProductsByCategoryRoutingModule);



/***/ }),

/***/ "./src/app/products/products-by-category/module/products-by-category.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/products/products-by-category/module/products-by-category.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductsByCategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsByCategoryModule", function() { return ProductsByCategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _component_products_by_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/products-by-category.component */ "./src/app/products/products-by-category/component/products-by-category.component.ts");
/* harmony import */ var _products_by_category_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-by-category-routing.module */ "./src/app/products/products-by-category/module/products-by-category-routing.module.ts");
/* harmony import */ var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shear.modul */ "./src/app/shear.modul.ts");






let ProductsByCategoryModule = class ProductsByCategoryModule {
};
ProductsByCategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_products_by_category_component__WEBPACK_IMPORTED_MODULE_3__["ProductsByCategoryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _products_by_category_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductsByCategoryRoutingModule"],
            src_app_shear_modul__WEBPACK_IMPORTED_MODULE_5__["ShearModule"]
        ],
        exports: [_component_products_by_category_component__WEBPACK_IMPORTED_MODULE_3__["ProductsByCategoryComponent"], _products_by_category_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductsByCategoryRoutingModule"]]
    })
], ProductsByCategoryModule);



/***/ }),

/***/ "./src/app/products/products-nav-desk-top/component/products-nav-desk-top.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/products/products-nav-desk-top/component/products-nav-desk-top.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.nav-bar{\r\n    background:#1976D2;\r\n\r\n}\r\na{\r\n    color:#ffffff;\r\n}\r\n.logoIconFirstIcon{\r\n    background-color: #ffffff;\r\n    color: black;\r\n    padding:1rem;\r\n    border-radius: 50%;\r\n    box-sizing: content-box;\r\n    font-size: 1.2rem;\r\n    height: 1.2rem;\r\n    width: 1.2rem;\r\n}\r\nbutton{\r\n    background:#00B0FF;\r\n}\r\n.menu-btn{\r\n    background:#1976D2;\r\n}\r\n.menu-link {\r\n    color:#ffffff;\r\n    text-decoration:none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMtbmF2LWRlc2stdG9wL2NvbXBvbmVudC9wcm9kdWN0cy1uYXYtZGVzay10b3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy1uYXYtZGVzay10b3AvY29tcG9uZW50L3Byb2R1Y3RzLW5hdi1kZXNrLXRvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uYXYtYmFye1xyXG4gICAgYmFja2dyb3VuZDojMTk3NkQyO1xyXG5cclxufVxyXG5he1xyXG4gICAgY29sb3I6I2ZmZmZmZjtcclxufVxyXG4ubG9nb0ljb25GaXJzdEljb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzoxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGhlaWdodDogMS4ycmVtO1xyXG4gICAgd2lkdGg6IDEuMnJlbTtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiMwMEIwRkY7XHJcbn1cclxuLm1lbnUtYnRue1xyXG4gICAgYmFja2dyb3VuZDojMTk3NkQyO1xyXG59XHJcbi5tZW51LWxpbmsge1xyXG4gICAgY29sb3I6I2ZmZmZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/products/products-nav-desk-top/component/products-nav-desk-top.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/products/products-nav-desk-top/component/products-nav-desk-top.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProductsNavDeskTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsNavDeskTopComponent", function() { return ProductsNavDeskTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");




let ProductsNavDeskTopComponent = class ProductsNavDeskTopComponent {
    constructor(categoryService, authenticationService) {
        this.categoryService = categoryService;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        this.navLinks$ = this.categoryService.getAllCategories();
        this.user$ = this.authenticationService.getUser().subscribe(user => {
            this.user = user;
        });
    }
    ngOnDestroy() {
        this.user$.unsubscribe();
    }
    logout() {
        this.authenticationService.loguot();
    }
};
ProductsNavDeskTopComponent.ctorParameters = () => [
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
ProductsNavDeskTopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-products-nav-desk-top',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products-nav-desk-top.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-nav-desk-top/component/products-nav-desk-top.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products-nav-desk-top.component.css */ "./src/app/products/products-nav-desk-top/component/products-nav-desk-top.component.css")).default]
    })
], ProductsNavDeskTopComponent);



/***/ }),

/***/ "./src/app/products/products-nav-desk-top/module/products-nav-desk-top.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/products/products-nav-desk-top/module/products-nav-desk-top.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ProductsNavDeskTopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsNavDeskTopModule", function() { return ProductsNavDeskTopModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_products_nav_desk_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/products-nav-desk-top.component */ "./src/app/products/products-nav-desk-top/component/products-nav-desk-top.component.ts");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let ProductsNavDeskTopModule = class ProductsNavDeskTopModule {
};
ProductsNavDeskTopModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_products_nav_desk_top_component__WEBPACK_IMPORTED_MODULE_3__["ProductsNavDeskTopComponent"]],
        imports: [
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngualrMaterialModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
        exports: [_component_products_nav_desk_top_component__WEBPACK_IMPORTED_MODULE_3__["ProductsNavDeskTopComponent"]]
    })
], ProductsNavDeskTopModule);



/***/ }),

/***/ "./src/app/products/products-nav-phone/component/products-nav-phone.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/products/products-nav-phone/component/products-nav-phone.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.menu-container{\r\n    background-color:#00B0FF !important;\r\n}\r\nbutton{\r\n    background:#00B0FF;\r\n}\r\n.menu-btn{\r\n    background:#1976D2;\r\n}\r\na{\r\n    color:#ffffff;\r\n    text-decoration:none;\r\n    background:#00B0FF;\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMtbmF2LXBob25lL2NvbXBvbmVudC9wcm9kdWN0cy1uYXYtcGhvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGtCQUFrQjs7QUFFdEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy1uYXYtcGhvbmUvY29tcG9uZW50L3Byb2R1Y3RzLW5hdi1waG9uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tZW51LWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwQjBGRiAhaW1wb3J0YW50O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6IzAwQjBGRjtcclxufVxyXG4ubWVudS1idG57XHJcbiAgICBiYWNrZ3JvdW5kOiMxOTc2RDI7XHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGJhY2tncm91bmQ6IzAwQjBGRjtcclxuXHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/products/products-nav-phone/component/products-nav-phone.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/products/products-nav-phone/component/products-nav-phone.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProductsNavPhoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsNavPhoneComponent", function() { return ProductsNavPhoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");




let ProductsNavPhoneComponent = class ProductsNavPhoneComponent {
    constructor(categoryService, authenticationService) {
        this.categoryService = categoryService;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        this.navLinks$ = this.categoryService.getAllCategories();
        this.user$ = this.authenticationService.getUser().subscribe(user => {
            this.user = user;
        });
    }
    ngOnDestroy() {
        this.user$.unsubscribe();
    }
    logout() {
        this.authenticationService.loguot();
    }
};
ProductsNavPhoneComponent.ctorParameters = () => [
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
ProductsNavPhoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-products-nav-phone',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products-nav-phone.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-nav-phone/component/products-nav-phone.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products-nav-phone.component.css */ "./src/app/products/products-nav-phone/component/products-nav-phone.component.css")).default]
    })
], ProductsNavPhoneComponent);



/***/ }),

/***/ "./src/app/products/products-nav-phone/module/products-nav-phone.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/products/products-nav-phone/module/products-nav-phone.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductsNavPhoneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsNavPhoneModule", function() { return ProductsNavPhoneModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _component_products_nav_phone_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/products-nav-phone.component */ "./src/app/products/products-nav-phone/component/products-nav-phone.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let ProductsNavPhoneModule = class ProductsNavPhoneModule {
};
ProductsNavPhoneModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_products_nav_phone_component__WEBPACK_IMPORTED_MODULE_2__["ProductsNavPhoneComponent"]],
        imports: [
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngualrMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
        ],
        exports: [_component_products_nav_phone_component__WEBPACK_IMPORTED_MODULE_2__["ProductsNavPhoneComponent"]]
    })
], ProductsNavPhoneModule);



/***/ }),

/***/ "./src/app/products/products-search/component/products-search.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/products/products-search/component/products-search.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLXNlYXJjaC9jb21wb25lbnQvcHJvZHVjdHMtc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/products/products-search/component/products-search.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/products/products-search/component/products-search.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductsSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsSearchComponent", function() { return ProductsSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProductsSearchComponent = class ProductsSearchComponent {
    constructor(router, productService) {
        this.router = router;
        this.productService = productService;
    }
    ngOnInit() {
        this.route$ = this.router.params.subscribe((params) => {
            this.products$ = this.productService.getProductBySearch(params.fild, params.searchVal);
        });
    }
    ngOnDestroy() {
        this.route$.unsubscribe();
    }
};
ProductsSearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
];
ProductsSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-search/component/products-search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products-search.component.css */ "./src/app/products/products-search/component/products-search.component.css")).default]
    })
], ProductsSearchComponent);



/***/ }),

/***/ "./src/app/products/products-search/module/products-search-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/products/products-search/module/products-search-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductsSearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsSearchRoutingModule", function() { return ProductsSearchRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_products_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/products-search.component */ "./src/app/products/products-search/component/products-search.component.ts");




const route = [
    { path: '', component: _component_products_search_component__WEBPACK_IMPORTED_MODULE_3__["ProductsSearchComponent"] }
];
let ProductsSearchRoutingModule = class ProductsSearchRoutingModule {
};
ProductsSearchRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductsSearchRoutingModule);



/***/ }),

/***/ "./src/app/products/products-search/module/products-search.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/products/products-search/module/products-search.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProductsSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsSearchModule", function() { return ProductsSearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _component_products_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/products-search.component */ "./src/app/products/products-search/component/products-search.component.ts");
/* harmony import */ var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shear.modul */ "./src/app/shear.modul.ts");
/* harmony import */ var _products_search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-search-routing.module */ "./src/app/products/products-search/module/products-search-routing.module.ts");






let ProductsSearchModule = class ProductsSearchModule {
};
ProductsSearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_products_search_component__WEBPACK_IMPORTED_MODULE_3__["ProductsSearchComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__["ShearModule"],
            _products_search_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsSearchRoutingModule"]
        ],
        exports: [_component_products_search_component__WEBPACK_IMPORTED_MODULE_3__["ProductsSearchComponent"]]
    })
], ProductsSearchModule);



/***/ }),

/***/ "./src/app/register/component/register.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register/component/register.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-body{\r\n    background-image: -webkit-gradient(linear, left bottom, left top, from(#30cfd0), to(#330867));\r\n    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 120%;\r\n    z-index: -1;\r\n}\r\n.form-container{\r\n    height: 100vh;\r\n    width:100%;\r\n}\r\nform{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    border-radius: 10px;\r\n    padding:2rem;\r\n    margin-top: 10px;\r\n\r\n}\r\n.form-first-h1-register{\r\n\r\n}\r\n.loginLink{\r\n    text-decoration:none;\r\n    color:#ffff;\r\n    margin-top:7px;\r\n}\r\n@media only screen and (min-width: 768px) and (max-height: 1024px) {\r\n    .form-container{\r\n        width:80%;\r\n        margin: auto;\r\n        height: 50vh;\r\n    }\r\n        form{\r\n            padding:1.7rem;\r\n            margin-top: 2rem;\r\n        }\r\n  \r\n  }\r\n@media only screen  and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\r\n    form{\r\n\r\n    }\r\n    .form-container{\r\n        height: 70vh;\r\n        width:80%;\r\n        margin: auto;\r\n    }\r\n  }\r\n@media only screen and (min-width: 1024px) and (max-width: 1440px) {\r\n    form{\r\n        margin-top: 200px;\r\n    }\r\n    .form-container{\r\n        height: 50vh;\r\n        width:80%;\r\n        margin: auto;\r\n    }\r\n  }\r\n@media only screen and (min-width: 1440px) and (max-width: 2560px) {\r\n    form{\r\n    }\r\n    .form-container{\r\n        height: 100vh;\r\n        width:80%;\r\n        margin: auto;\r\n    }\r\n  }\r\n@media only screen and (min-width: 2560px) {\r\n    form{\r\n        font-size: 2rem;\r\n        line-height: 2rem;\r\n        padding:2rem;\r\n    }\r\n    .form-container{\r\n        height: 100vh;\r\n        width:80%;\r\n        margin: auto;\r\n    }\r\n    .submitFormBtn{\r\n        width: 50%;\r\n        height: 10vh;\r\n        font-size: 1.5rem;\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvY29tcG9uZW50L3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2RkFBbUU7SUFBbkUsbUVBQW1FO0lBQ25FLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDtBQUNBO0lBQ0ksNEVBQTRFO0lBQzVFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCOztBQUVwQjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFFQTtJQUNJO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixZQUFZO0lBQ2hCO1FBQ0k7WUFDSSxjQUFjO1lBQ2QsZ0JBQWdCO1FBQ3BCOztFQUVOO0FBQ0Y7SUFDSTs7SUFFQTtJQUNBO1FBQ0ksWUFBWTtRQUNaLFNBQVM7UUFDVCxZQUFZO0lBQ2hCO0VBQ0Y7QUFDRjtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osU0FBUztRQUNULFlBQVk7SUFDaEI7RUFDRjtBQUNGO0lBQ0k7SUFDQTtJQUNBO1FBQ0ksYUFBYTtRQUNiLFNBQVM7UUFDVCxZQUFZO0lBQ2hCO0VBQ0Y7QUFFQTtJQUNFO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsU0FBUztRQUNULFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9jb21wb25lbnQvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMzBjZmQwIDAlLCAjMzMwODY3IDEwMCUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEyMCU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG4uZm9ybS1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5mb3Jte1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOjJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxufVxyXG4uZm9ybS1maXJzdC1oMS1yZWdpc3RlcntcclxuXHJcbn1cclxuLmxvZ2luTGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgY29sb3I6I2ZmZmY7XHJcbiAgICBtYXJnaW4tdG9wOjdweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcclxuICAgIC5mb3JtLWNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDo4MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogNTB2aDtcclxuICAgIH1cclxuICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEuN3JlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgfVxyXG5AbWVkaWEgb25seSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICBmb3Jte1xyXG5cclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICAgICAgd2lkdGg6ODAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udGFpbmVye1xyXG4gICAgICAgIGhlaWdodDogNTB2aDtcclxuICAgICAgICB3aWR0aDo4MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LXdpZHRoOiAyNTYwcHgpIHtcclxuICAgIGZvcm17XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250YWluZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB3aWR0aDo4MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNTYwcHgpIHtcclxuICAgIGZvcm17XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIHBhZGRpbmc6MnJlbTtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHdpZHRoOjgwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICAuc3VibWl0Rm9ybUJ0bntcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTB2aDtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/register/component/register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register/component/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modals_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/user */ "./src/app/modals/user.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");




let RegisterComponent = class RegisterComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.user = new src_app_modals_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    userRegisterSubmitForm() {
        if (this.user.password === this.passwordConfirm) {
            this.authenticationService.register(this.user);
        }
        else {
            alert('Confirm Password Not Match');
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/component/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/component/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/register/module/register/register-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/register/module/register/register-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/register.component */ "./src/app/register/component/register.component.ts");




const routes = [
    { path: '', component: _component_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] }
];
let RegisterRoutingModule = class RegisterRoutingModule {
};
RegisterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RegisterRoutingModule);



/***/ }),

/***/ "./src/app/register/module/register/register.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/register/module/register/register.module.ts ***!
  \*************************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _component_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/register.component */ "./src/app/register/component/register.component.ts");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/module/register/register-routing.module.ts");
/* harmony import */ var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shear.modul */ "./src/app/shear.modul.ts");






let RegisterModule = class RegisterModule {
};
RegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterRoutingModule"],
            src_app_shear_modul__WEBPACK_IMPORTED_MODULE_5__["ShearModule"]
        ],
        exports: [_register_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterRoutingModule"], _component_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]]
    })
], RegisterModule);



/***/ }),

/***/ "./src/app/search-product/component/search-product.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/search-product/component/search-product.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.search-btn{\r\n    background: #80D8FF;\r\n    margin-top:5px;\r\n}\r\n@media only screen and (max-width:700px){\r\n    mat-radio-group {\r\n        margin-bottom: 20;\r\n    }\r\n}\r\n@media only screen and (min-width:599px){\r\n    .input-product{\r\n        margin-top: 1.3rem;\r\n        }\r\n        .search-btn{\r\n            max-height: 66px;\r\n            margin-top: 1.3rem;\r\n        }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXByb2R1Y3QvY29tcG9uZW50L3NlYXJjaC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCO1FBQ0E7WUFDSSxnQkFBZ0I7WUFDaEIsa0JBQWtCO1FBQ3RCO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtcHJvZHVjdC9jb21wb25lbnQvc2VhcmNoLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2VhcmNoLWJ0bntcclxuICAgIGJhY2tncm91bmQ6ICM4MEQ4RkY7XHJcbiAgICBtYXJnaW4tdG9wOjVweDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpe1xyXG4gICAgbWF0LXJhZGlvLWdyb3VwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTk5cHgpe1xyXG4gICAgLmlucHV0LXByb2R1Y3R7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS4zcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoLWJ0bntcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNjZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMS4zcmVtO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/search-product/component/search-product.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/search-product/component/search-product.component.ts ***!
  \**********************************************************************/
/*! exports provided: SearchProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProductComponent", function() { return SearchProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SearchProductComponent = class SearchProductComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.searchFiled = 'name';
    }
    searchProduct() {
        this.route.navigate([`/products/search/${this.searchFiled}/${this.searchValue}`]);
    }
};
SearchProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SearchProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-product/component/search-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-product.component.css */ "./src/app/search-product/component/search-product.component.css")).default]
    })
], SearchProductComponent);



/***/ }),

/***/ "./src/app/search-product/module/search-product.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/search-product/module/search-product.module.ts ***!
  \****************************************************************/
/*! exports provided: SearchProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProductModule", function() { return SearchProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shear.modul */ "./src/app/shear.modul.ts");
/* harmony import */ var _component_search_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/search-product.component */ "./src/app/search-product/component/search-product.component.ts");





let SearchProductModule = class SearchProductModule {
};
SearchProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_search_product_component__WEBPACK_IMPORTED_MODULE_4__["SearchProductComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shear_modul__WEBPACK_IMPORTED_MODULE_3__["ShearModule"]
        ],
        exports: [
            _component_search_product_component__WEBPACK_IMPORTED_MODULE_4__["SearchProductComponent"]
        ]
    })
], SearchProductModule);



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AuthGuardService = class AuthGuardService {
    constructor(router) {
        this.router = router;
        this.authorization$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    checkLogin() {
        return this.authorization$;
    }
    userSingIn() {
        this.authorization = true;
        this.authorization$.next(true);
    }
    userLogout() {
        this.authorization = false;
        this.authorization$.next(false);
    }
    canActivate() {
        if (this.authorization === true) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let AuthenticationService = class AuthenticationService {
    constructor(http, authGuardService, route) {
        this.http = http;
        this.authGuardService = authGuardService;
        this.route = route;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({});
    }
    getUser() {
        return this.user$;
    }
    register(user) {
        this.http.post('https://test-node-app0.herokuapp.com/api/authentication/register', user)
            .subscribe(newUser => {
            console.log(newUser);
            this.user$.next(newUser);
            this.user = newUser;
            this.authGuardService.userSingIn();
            alert('Register Success!');
            this.route.navigate(['/products/all-products']);
        });
    }
    login(user) {
        this.http.post('https://test-node-app0.herokuapp.com/api/authentication/login', user)
            .subscribe(newUser => {
            this.user$.next(newUser);
            this.user = newUser;
            this.authGuardService.userSingIn();
            alert('Login Success!');
            this.route.navigate(['/products/all-products']);
        });
    }
    loguot() {
        this.authGuardService.userLogout();
        this.user = null;
        this.route.navigate(['/login']);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
    }
    getAllCategories() {
        return this.http.get('https://test-node-app0.herokuapp.com/api/category/all-categoies');
    }
    getCategoryByName(categoryName) {
        return this.http.get(`https://test-node-app0.herokuapp.com/api/category/name/${categoryName}`);
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductsService = class ProductsService {
    constructor(http) {
        this.http = http;
    }
    getAllProducts() {
        return this.http.get('https://test-node-app0.herokuapp.com/api/product/all-products');
    }
    getProductById(productId) {
        return this.http.get('https://test-node-app0.herokuapp.com/api/product/id/' + productId);
    }
    getProductsByCategory(category) {
        return this.http.get(`https://test-node-app0.herokuapp.com/api/product/category/${category}`);
    }
    getProductBySearch(filed, searchValue) {
        return this.http.get(`https://test-node-app0.herokuapp.com/api/product/search/${filed}/${searchValue}`);
    }
    getAllUserProduts(userId) {
        return this.http.get(`https://test-node-app0.herokuapp.com/api/product/user/${userId}`);
    }
    addProdut(product) {
        return this.http.post('https://test-node-app0.herokuapp.com/api/product/add', product);
    }
    updateProduct(product, productId) {
        return this.http.put('https://test-node-app0.herokuapp.com/api/product/' + productId, product);
    }
    deleteProduct(productId) {
        return this.http.delete(`https://test-node-app0.herokuapp.com/api/product/${productId}`);
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductsService);



/***/ }),

/***/ "./src/app/shear.modul.ts":
/*!********************************!*\
  !*** ./src/app/shear.modul.ts ***!
  \********************************/
/*! exports provided: ShearModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShearModule", function() { return ShearModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _products_product_format_module_product_format_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/product-format/module/product-format.module */ "./src/app/products/product-format/module/product-format.module.ts");






let ShearModule = class ShearModule {
};
ShearModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngualrMaterialModule"],
            _products_product_format_module_product_format_module__WEBPACK_IMPORTED_MODULE_5__["ProductFormatModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ]
    })
], ShearModule);



/***/ }),

/***/ "./src/app/user-product/delete-product/component/delete-product.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/user-product/delete-product/component/delete-product.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9kdWN0L2RlbGV0ZS1wcm9kdWN0L2NvbXBvbmVudC9kZWxldGUtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvdXNlci1wcm9kdWN0L2RlbGV0ZS1wcm9kdWN0L2NvbXBvbmVudC9kZWxldGUtcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/user-product/delete-product/component/delete-product.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/user-product/delete-product/component/delete-product.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DeleteProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProductComponent", function() { return DeleteProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");




let DeleteProductComponent = class DeleteProductComponent {
    constructor(authenticationService, productsService) {
        this.authenticationService = authenticationService;
        this.productsService = productsService;
    }
    ngOnInit() {
        this.displayedColumns = ['name', 'location', 'quantities', 'price', 'details', 'category', 'img', 'delete'];
        this.user = this.authenticationService.user;
        if (this.user) {
            this.products$ = this.productsService.getAllUserProduts(this.user._id);
        }
    }
    deleteProduct(productId) {
        this.productsService.deleteProduct(productId).subscribe(() => {
            alert('you deteted the prodct');
            this.products$ = this.productsService.getAllUserProduts(this.user._id);
        });
    }
};
DeleteProductComponent.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }
];
DeleteProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/delete-product/component/delete-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-product.component.css */ "./src/app/user-product/delete-product/component/delete-product.component.css")).default]
    })
], DeleteProductComponent);



/***/ }),

/***/ "./src/app/user-product/delete-product/module/delete-product-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/user-product/delete-product/module/delete-product-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: DeleteProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProductRoutingModule", function() { return DeleteProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_delete_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/delete-product.component */ "./src/app/user-product/delete-product/component/delete-product.component.ts");




const routes = [
    { path: '', component: _component_delete_product_component__WEBPACK_IMPORTED_MODULE_3__["DeleteProductComponent"] }
];
let DeleteProductRoutingModule = class DeleteProductRoutingModule {
};
DeleteProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DeleteProductRoutingModule);



/***/ }),

/***/ "./src/app/user-product/delete-product/module/delete-product.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/user-product/delete-product/module/delete-product.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DeleteProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProductModule", function() { return DeleteProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _delete_product_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-product-routing.module */ "./src/app/user-product/delete-product/module/delete-product-routing.module.ts");
/* harmony import */ var _component_delete_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/delete-product.component */ "./src/app/user-product/delete-product/component/delete-product.component.ts");
/* harmony import */ var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shear.modul */ "./src/app/shear.modul.ts");





let DeleteProductModule = class DeleteProductModule {
};
DeleteProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_delete_product_component__WEBPACK_IMPORTED_MODULE_3__["DeleteProductComponent"]],
        imports: [
            src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__["ShearModule"],
            _delete_product_routing_module__WEBPACK_IMPORTED_MODULE_2__["DeleteProductRoutingModule"]
        ],
        exports: [
            _component_delete_product_component__WEBPACK_IMPORTED_MODULE_3__["DeleteProductComponent"]
        ]
    })
], DeleteProductModule);



/***/ }),

/***/ "./src/app/user-product/product-update/component/product-update.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/user-product/product-update/component/product-update.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n  }\r\n  mat-error{\r\n    display:fixed ;\r\n    color: red;\r\n    background-color: #ffffff;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9kdWN0L3Byb2R1Y3QtdXBkYXRlL2NvbXBvbmVudC9wcm9kdWN0LXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZHVjdC9wcm9kdWN0LXVwZGF0ZS9jb21wb25lbnQvcHJvZHVjdC11cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBtYXQtZXJyb3J7XHJcbiAgICBkaXNwbGF5OmZpeGVkIDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/user-product/product-update/component/product-update.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/user-product/product-update/component/product-update.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUpdateComponent", function() { return ProductUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var src_app_modals_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/product */ "./src/app/modals/product.ts");






let ProductUpdateComponent = class ProductUpdateComponent {
    constructor(authenticationService, productsService, categoryService, productService) {
        this.authenticationService = authenticationService;
        this.productsService = productsService;
        this.categoryService = categoryService;
        this.productService = productService;
        this.product = new src_app_modals_product__WEBPACK_IMPORTED_MODULE_5__["Product"]();
        this.productsFormData = [];
        this.productEdd$CheckSubscription = false;
        this.imgURL = [];
    }
    ngOnInit() {
        this.displayedColumns = ['name', 'location', 'quantities', 'category', 'price', 'details', 'img', 'update'];
        this.user = this.authenticationService.user;
        this.categories$ = this.categoryService.getAllCategories();
        if (this.user) {
            this.getProductsOb$ = this.productsService.getAllUserProduts(this.user._id).subscribe(products => {
                this.products = products;
            });
        }
    }
    onFileSelected(event, productArrayIndex) {
        if (this.productsFormData[productArrayIndex] === undefined) {
            this.productsFormData[productArrayIndex] = new FormData();
            console.log(productArrayIndex);
        }
        this.productsFormData[productArrayIndex].append('img', event.target.files[0], event.target.files[0].name);
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            this.imgURL[productArrayIndex] = reader.result;
        };
    }
    onSubmit(event) {
        console.log(event);
    }
    updateProduct(productId, productIndexInProductsArray) {
        console.log(this.products[productIndexInProductsArray]);
        if (this.products[productIndexInProductsArray].name.length < 6 ||
            this.products[productIndexInProductsArray].location.length < 6) {
            alert("Prodcut location and Product name must be at least 6 characters");
        }
        else {
            console.log(this.productsFormData);
            if (this.productsFormData[productIndexInProductsArray] === undefined) {
                this.productsFormData[productIndexInProductsArray] = new FormData();
            }
            this.productsFormData[productIndexInProductsArray].append('name', this.products[productIndexInProductsArray].name);
            this.productsFormData[productIndexInProductsArray].append('location', this.products[productIndexInProductsArray].location);
            this.productsFormData[productIndexInProductsArray].append('quantities', this.products[productIndexInProductsArray].quantities.toString());
            this.productsFormData[productIndexInProductsArray].append('price', this.products[productIndexInProductsArray].price.toString());
            this.productsFormData[productIndexInProductsArray].append('details', this.products[productIndexInProductsArray].details);
            this.productsFormData[productIndexInProductsArray].append('user', this.user._id);
            this.productsFormData[productIndexInProductsArray].append('category', this.products[productIndexInProductsArray].category._id);
            this.productEdd$ = this.productService.updateProduct(this.productsFormData[productIndexInProductsArray], productId).subscribe(product => {
                this.productEdd$CheckSubscription = true;
                alert(`congratulation ${this.user.userName} your product ${product.name} is successfully updated`);
                console.log(this.products[productIndexInProductsArray]);
                console.log(this.productsFormData[productIndexInProductsArray]);
                console.log(this.productsFormData);
            });
            this.productsFormData[productIndexInProductsArray] = new FormData();
        }
    }
    ngOnDestroy() {
        if (this.user) {
            this.getProductsOb$.unsubscribe();
        }
        if (this.productEdd$CheckSubscription === true) {
            this.productEdd$.unsubscribe();
        }
    }
};
ProductUpdateComponent.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] }
];
ProductUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/product-update/component/product-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-update.component.css */ "./src/app/user-product/product-update/component/product-update.component.css")).default]
    })
], ProductUpdateComponent);



/***/ }),

/***/ "./src/app/user-product/product-update/module/product-update-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/user-product/product-update/module/product-update-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductUpdateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUpdateRoutingModule", function() { return ProductUpdateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_product_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/product-update.component */ "./src/app/user-product/product-update/component/product-update.component.ts");




const routes = [
    { path: '', component: _component_product_update_component__WEBPACK_IMPORTED_MODULE_3__["ProductUpdateComponent"] }
];
let ProductUpdateRoutingModule = class ProductUpdateRoutingModule {
};
ProductUpdateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductUpdateRoutingModule);



/***/ }),

/***/ "./src/app/user-product/product-update/module/product-update.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/user-product/product-update/module/product-update.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUpdateModule", function() { return ProductUpdateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_update_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-update-routing.module */ "./src/app/user-product/product-update/module/product-update-routing.module.ts");
/* harmony import */ var _component_product_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/product-update.component */ "./src/app/user-product/product-update/component/product-update.component.ts");
/* harmony import */ var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shear.modul */ "./src/app/shear.modul.ts");





let ProductUpdateModule = class ProductUpdateModule {
};
ProductUpdateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_product_update_component__WEBPACK_IMPORTED_MODULE_3__["ProductUpdateComponent"]],
        imports: [
            src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__["ShearModule"],
            _product_update_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductUpdateRoutingModule"]
        ],
        exports: [
            _component_product_update_component__WEBPACK_IMPORTED_MODULE_3__["ProductUpdateComponent"]
        ]
    })
], ProductUpdateModule);



/***/ }),

/***/ "./src/app/user-product/user-add-product/component/user-add-product.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/user-product/user-add-product/component/user-add-product.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZHVjdC91c2VyLWFkZC1wcm9kdWN0L2NvbXBvbmVudC91c2VyLWFkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user-product/user-add-product/component/user-add-product.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/user-product/user-add-product/component/user-add-product.component.ts ***!
  \***************************************************************************************/
/*! exports provided: UserAddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddProductComponent", function() { return UserAddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserAddProductComponent = class UserAddProductComponent {
};
UserAddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-add-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-add-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/user-add-product/component/user-add-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-add-product.component.css */ "./src/app/user-product/user-add-product/component/user-add-product.component.css")).default]
    })
], UserAddProductComponent);



/***/ }),

/***/ "./src/app/user-product/user-add-product/module/user-add-product-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/user-product/user-add-product/module/user-add-product-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: UserAddProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddProductRoutingModule", function() { return UserAddProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_user_add_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/user-add-product.component */ "./src/app/user-product/user-add-product/component/user-add-product.component.ts");




const routes = [
    { path: '', component: _component_user_add_product_component__WEBPACK_IMPORTED_MODULE_3__["UserAddProductComponent"] }
];
let UserAddProductRoutingModule = class UserAddProductRoutingModule {
};
UserAddProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserAddProductRoutingModule);



/***/ }),

/***/ "./src/app/user-product/user-add-product/module/user-add-product.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/user-product/user-add-product/module/user-add-product.module.ts ***!
  \*********************************************************************************/
/*! exports provided: UserAddProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddProductModule", function() { return UserAddProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_add_product_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-add-product-routing.module */ "./src/app/user-product/user-add-product/module/user-add-product-routing.module.ts");
/* harmony import */ var _component_user_add_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/user-add-product.component */ "./src/app/user-product/user-add-product/component/user-add-product.component.ts");
/* harmony import */ var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shear.modul */ "./src/app/shear.modul.ts");
/* harmony import */ var _user_add_product_desktop_module_user_add_product_desktop_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-add-product-desktop/module/user-add-product-desktop.module */ "./src/app/user-product/user-add-product/user-add-product-desktop/module/user-add-product-desktop.module.ts");
/* harmony import */ var _user_add_product_phone_module_user_add_product_phone_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-add-product-phone/module/user-add-product-phone.module */ "./src/app/user-product/user-add-product/user-add-product-phone/module/user-add-product-phone.module.ts");







let UserAddProductModule = class UserAddProductModule {
};
UserAddProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_user_add_product_component__WEBPACK_IMPORTED_MODULE_3__["UserAddProductComponent"]],
        imports: [
            src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__["ShearModule"],
            _user_add_product_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserAddProductRoutingModule"],
            _user_add_product_desktop_module_user_add_product_desktop_module__WEBPACK_IMPORTED_MODULE_5__["UserAddProductDesktopModule"],
            _user_add_product_phone_module_user_add_product_phone_module__WEBPACK_IMPORTED_MODULE_6__["UserAddProductPhoneModule"]
        ],
        exports: [
            _component_user_add_product_component__WEBPACK_IMPORTED_MODULE_3__["UserAddProductComponent"]
        ]
    })
], UserAddProductModule);



/***/ }),

/***/ "./src/app/user-product/user-add-product/user-add-product-desktop/component/user-add-product-desktop.component.css":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/user-product/user-add-product/user-add-product-desktop/component/user-add-product-desktop.component.css ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  .background-div{\r\n    background-image: -webkit-gradient(linear, left bottom, left top, from(#48c6ef), to(#6f86d6));\r\n    background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    z-index: -1;\r\n  }\r\n  .card-container{\r\n    width:100%;\r\n    height:100%;\r\n  }\r\n  .add-product-card{\r\n    background-color: #ffffff;\r\n    box-shadow: 0 4px 8px 0 rgb(255, 255, 255), 0 6px 20px 0 rgb(255, 255, 255);\r\n    border-radius:16px;\r\n    padding:1.2rem;\r\n    margin:10rem;\r\n    font-family: 'Bowlby One SC', cursive;\r\n}\r\n  .add-img-icon{\r\n    font-size:20vh;\r\n}\r\n  .img-user-healp{\r\n    color:#80D8FF;\r\n}\r\n  @media only screen and (min-width: 2560px) {\r\n  form{\r\n      font-size: 2rem;\r\n      line-height: 2rem;\r\n      padding:2rem;\r\n  }\r\n  .submitFormBtn{\r\n      height: 7vh;\r\n      font-size: 1.5rem;\r\n  }\r\n  .add-img-icon{\r\n    font-size:30vh;\r\n}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9kdWN0L3VzZXItYWRkLXByb2R1Y3QvdXNlci1hZGQtcHJvZHVjdC1kZXNrdG9wL2NvbXBvbmVudC91c2VyLWFkZC1wcm9kdWN0LWRlc2t0b3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLDZGQUFtRTtJQUFuRSxtRUFBbUU7SUFDbkUsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7RUFDYjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDJFQUEyRTtJQUMzRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixxQ0FBcUM7QUFDekM7RUFDQTtJQUNJLGNBQWM7QUFDbEI7RUFDQTtJQUNJLGFBQWE7QUFDakI7RUFFQTtFQUNFO01BQ0ksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixZQUFZO0VBQ2hCO0VBQ0E7TUFDSSxXQUFXO01BQ1gsaUJBQWlCO0VBQ3JCO0VBQ0E7SUFDRSxjQUFjO0FBQ2xCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2R1Y3QvdXNlci1hZGQtcHJvZHVjdC91c2VyLWFkZC1wcm9kdWN0LWRlc2t0b3AvY29tcG9uZW50L3VzZXItYWRkLXByb2R1Y3QtZGVza3RvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuYmFja2dyb3VuZC1kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjNDhjNmVmIDAlLCAjNmY4NmQ2IDEwMCUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIC5jYXJkLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICB9XHJcblxyXG4gIC5hZGQtcHJvZHVjdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYigyNTUsIDI1NSwgMjU1KSwgMCA2cHggMjBweCAwIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTZweDtcclxuICAgIHBhZGRpbmc6MS4ycmVtO1xyXG4gICAgbWFyZ2luOjEwcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCb3dsYnkgT25lIFNDJywgY3Vyc2l2ZTtcclxufVxyXG4uYWRkLWltZy1pY29ue1xyXG4gICAgZm9udC1zaXplOjIwdmg7XHJcbn1cclxuLmltZy11c2VyLWhlYWxwe1xyXG4gICAgY29sb3I6IzgwRDhGRjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNTYwcHgpIHtcclxuICBmb3Jte1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICBwYWRkaW5nOjJyZW07XHJcbiAgfVxyXG4gIC5zdWJtaXRGb3JtQnRue1xyXG4gICAgICBoZWlnaHQ6IDd2aDtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG4gIC5hZGQtaW1nLWljb257XHJcbiAgICBmb250LXNpemU6MzB2aDtcclxufVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/user-product/user-add-product/user-add-product-desktop/component/user-add-product-desktop.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/user-product/user-add-product/user-add-product-desktop/component/user-add-product-desktop.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: UserAddProductDesktopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddProductDesktopComponent", function() { return UserAddProductDesktopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_modals_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/product */ "./src/app/modals/product.ts");







let UserAddProductDesktopComponent = class UserAddProductDesktopComponent {
    constructor(authenticationService, categoryService, productService, router) {
        this.authenticationService = authenticationService;
        this.categoryService = categoryService;
        this.productService = productService;
        this.router = router;
        this.product = new src_app_modals_product__WEBPACK_IMPORTED_MODULE_6__["Product"]();
        this.selectedFile = null;
        this.productEdd$CheckSubscription = false;
    }
    ngOnInit() {
        this.user = this.authenticationService.user;
        this.categories$ = this.categoryService.getAllCategories();
    }
    userAddingProduct() {
        this.productFormData = new FormData();
        this.productFormData.append('img', this.selectedFile, this.selectedFile.name);
        this.productFormData.append('name', this.product.name);
        this.productFormData.append('location', this.product.location);
        this.productFormData.append('quantities', this.product.quantities.toString());
        this.productFormData.append('price', this.product.price.toString());
        this.productFormData.append('details', this.product.details);
        this.productFormData.append('user', this.user._id);
        this.productFormData.append('category', this.product.category.toString());
        this.productEdd$ = this.productService.addProdut(this.productFormData).subscribe(product => {
            this.productEdd$CheckSubscription = true;
            alert(`congratulation ${this.user.userName} your product ${product.name} is successfully uploaded`);
            this.router.navigate(['user/products']);
        });
    }
    onFileSelected(event) {
        console.log(this.product.img);
        if (event.target.files.length === 0) {
            if (this.imgURL) {
                this.product.img = {
                    'url': "null",
                    'name': "null",
                    'imgId': "null",
                };
            }
            return;
        }
        this.product.img = {
            'url': "null",
            'name': "null",
            'imgId': "null",
        };
        this.selectedFile = event.target.files[0];
        console.log("ok");
        console.log(this.product.img);
        const mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.messageFileNoImg = 'Only images are supported.';
            return;
        }
        const reader = new FileReader();
        this.imagePath = event.target.files[0];
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
        };
        this.messageFileNoImg = '';
    }
    ngOnDestroy() {
        if (this.productEdd$CheckSubscription === true) {
            this.productEdd$.unsubscribe();
        }
    }
};
UserAddProductDesktopComponent.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UserAddProductDesktopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-add-product-desktop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-add-product-desktop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/user-add-product/user-add-product-desktop/component/user-add-product-desktop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-add-product-desktop.component.css */ "./src/app/user-product/user-add-product/user-add-product-desktop/component/user-add-product-desktop.component.css")).default]
    })
], UserAddProductDesktopComponent);



/***/ }),

/***/ "./src/app/user-product/user-add-product/user-add-product-desktop/module/user-add-product-desktop.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/user-product/user-add-product/user-add-product-desktop/module/user-add-product-desktop.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: UserAddProductDesktopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddProductDesktopModule", function() { return UserAddProductDesktopModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shear.modul */ "./src/app/shear.modul.ts");
/* harmony import */ var _component_user_add_product_desktop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/user-add-product-desktop.component */ "./src/app/user-product/user-add-product/user-add-product-desktop/component/user-add-product-desktop.component.ts");




let UserAddProductDesktopModule = class UserAddProductDesktopModule {
};
UserAddProductDesktopModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_user_add_product_desktop_component__WEBPACK_IMPORTED_MODULE_3__["UserAddProductDesktopComponent"]],
        imports: [
            src_app_shear_modul__WEBPACK_IMPORTED_MODULE_2__["ShearModule"]
        ],
        exports: [_component_user_add_product_desktop_component__WEBPACK_IMPORTED_MODULE_3__["UserAddProductDesktopComponent"]]
    })
], UserAddProductDesktopModule);



/***/ }),

/***/ "./src/app/user-product/user-add-product/user-add-product-phone/component/user-add-product-phone.component.css":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/user-product/user-add-product/user-add-product-phone/component/user-add-product-phone.component.css ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-div{\r\n    display:none;\r\n}\r\n.add-product-card{\r\n    /* background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%); */\r\n    background-color: #ffffff;\r\n    box-shadow: 0 4px 8px 0 rgb(255, 255, 255), 0 6px 20px 0 rgb(255, 255, 255);\r\n    border-radius:16px;\r\n    padding:1.2rem;\r\n    margin: 1.2rem;\r\n    font-family: 'Bowlby One SC', cursive;\r\n}\r\n.add-img-icon{\r\n    /* font-size:4rem; */\r\n    font-size:20vh;\r\n}\r\n.img-user-healp{\r\n    color:#80D8FF;\r\n}\r\n@media only screen and (min-width: 500px) and (max-width:900px){\r\n    .background-div{\r\n        display: block;\r\n        position: absolute;\r\n        top:-20vh;\r\n        width:100%;\r\n        height:1000vh;\r\n        background-color: #1976D2;\r\n        z-index: -1;\r\n    }\r\n    .add-product-card{\r\n        margin: 4.2rem;\r\n\r\n    }\r\n\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9kdWN0L3VzZXItYWRkLXByb2R1Y3QvdXNlci1hZGQtcHJvZHVjdC1waG9uZS9jb21wb25lbnQvdXNlci1hZGQtcHJvZHVjdC1waG9uZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUVBQXlFO0lBQ3pFLHlCQUF5QjtJQUN6QiwyRUFBMkU7SUFDM0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2QscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsYUFBYTtRQUNiLHlCQUF5QjtRQUN6QixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGNBQWM7O0lBRWxCOztFQUVGIiwiZmlsZSI6InNyYy9hcHAvdXNlci1wcm9kdWN0L3VzZXItYWRkLXByb2R1Y3QvdXNlci1hZGQtcHJvZHVjdC1waG9uZS9jb21wb25lbnQvdXNlci1hZGQtcHJvZHVjdC1waG9uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtZGl2e1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcbi5hZGQtcHJvZHVjdC1jYXJke1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzQ4YzZlZiAwJSwgIzZmODZkNiAxMDAlKTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2IoMjU1LCAyNTUsIDI1NSksIDAgNnB4IDIwcHggMCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOjE2cHg7XHJcbiAgICBwYWRkaW5nOjEuMnJlbTtcclxuICAgIG1hcmdpbjogMS4ycmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCb3dsYnkgT25lIFNDJywgY3Vyc2l2ZTtcclxufVxyXG4uYWRkLWltZy1pY29ue1xyXG4gICAgLyogZm9udC1zaXplOjRyZW07ICovXHJcbiAgICBmb250LXNpemU6MjB2aDtcclxufVxyXG4uaW1nLXVzZXItaGVhbHB7XHJcbiAgICBjb2xvcjojODBEOEZGO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDo5MDBweCl7XHJcbiAgICAuYmFja2dyb3VuZC1kaXZ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDotMjB2aDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDoxMDAwdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZEMjtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICAgIC5hZGQtcHJvZHVjdC1jYXJke1xyXG4gICAgICAgIG1hcmdpbjogNC4ycmVtO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/user-product/user-add-product/user-add-product-phone/component/user-add-product-phone.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/user-product/user-add-product/user-add-product-phone/component/user-add-product-phone.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: UserAddProductPhoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddProductPhoneComponent", function() { return UserAddProductPhoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_modals_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/product */ "./src/app/modals/product.ts");







let UserAddProductPhoneComponent = class UserAddProductPhoneComponent {
    constructor(authenticationService, categoryService, productService, router) {
        this.authenticationService = authenticationService;
        this.categoryService = categoryService;
        this.productService = productService;
        this.router = router;
        this.product = new src_app_modals_product__WEBPACK_IMPORTED_MODULE_6__["Product"]();
        this.selectedFile = null;
        this.productEdd$CheckSubscription = false;
    }
    ngOnInit() {
        this.user = this.authenticationService.user;
        this.categories$ = this.categoryService.getAllCategories();
    }
    userAddingProduct() {
        this.productFormData = new FormData();
        this.productFormData.append('img', this.selectedFile, this.selectedFile.name);
        this.productFormData.append('name', this.product.name);
        this.productFormData.append('location', this.product.location);
        this.productFormData.append('quantities', this.product.quantities.toString());
        this.productFormData.append('price', this.product.price.toString());
        this.productFormData.append('details', this.product.details);
        this.productFormData.append('user', this.user._id);
        this.productFormData.append('category', this.product.category.toString());
        this.productEdd$ = this.productService.addProdut(this.productFormData).subscribe(product => {
            this.productEdd$CheckSubscription = true;
            alert(`congratulation ${this.user.userName} your product ${product.name} is successfully uploaded`);
            this.router.navigate(['user/products']);
        });
    }
    onFileSelected(event) {
        console.log(this.product.img);
        if (event.target.files.length === 0) {
            if (this.imgURL) {
                this.product.img = {
                    'url': "null",
                    'name': "null",
                    'imgId': "null",
                };
            }
            return;
        }
        this.product.img = {
            'url': "null",
            'name': "null",
            'imgId': "null",
        };
        this.selectedFile = event.target.files[0];
        console.log("ok");
        console.log(this.product.img);
        const mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.messageFileNoImg = 'Only images are supported.';
            return;
        }
        const reader = new FileReader();
        this.imagePath = event.target.files[0];
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
        };
        this.messageFileNoImg = '';
    }
    ngOnDestroy() {
        if (this.productEdd$CheckSubscription === true) {
            this.productEdd$.unsubscribe();
        }
    }
};
UserAddProductPhoneComponent.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UserAddProductPhoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-add-product-phone',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-add-product-phone.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/user-add-product/user-add-product-phone/component/user-add-product-phone.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-add-product-phone.component.css */ "./src/app/user-product/user-add-product/user-add-product-phone/component/user-add-product-phone.component.css")).default]
    })
], UserAddProductPhoneComponent);



/***/ }),

/***/ "./src/app/user-product/user-add-product/user-add-product-phone/module/user-add-product-phone.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/user-product/user-add-product/user-add-product-phone/module/user-add-product-phone.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: UserAddProductPhoneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddProductPhoneModule", function() { return UserAddProductPhoneModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shear.modul */ "./src/app/shear.modul.ts");
/* harmony import */ var _component_user_add_product_phone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/user-add-product-phone.component */ "./src/app/user-product/user-add-product/user-add-product-phone/component/user-add-product-phone.component.ts");




let UserAddProductPhoneModule = class UserAddProductPhoneModule {
};
UserAddProductPhoneModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_user_add_product_phone_component__WEBPACK_IMPORTED_MODULE_3__["UserAddProductPhoneComponent"]],
        imports: [
            src_app_shear_modul__WEBPACK_IMPORTED_MODULE_2__["ShearModule"]
        ],
        exports: [_component_user_add_product_phone_component__WEBPACK_IMPORTED_MODULE_3__["UserAddProductPhoneComponent"]]
    })
], UserAddProductPhoneModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yoyot\Desktop\stock-sale\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map