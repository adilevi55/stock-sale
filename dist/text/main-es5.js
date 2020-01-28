function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\r\n<section>    \r\n    <header>\r\n        <app-header-nav-bar></app-header-nav-bar>\r\n    </header>\r\n    <main>\r\n        <router-outlet></router-outlet>\r\n    </main>\r\n    <footer></footer>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header-nav-bar/component/header-nav-bar.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header-nav-bar/component/header-nav-bar.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderNavBarComponentHeaderNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <nav mat-tab-nav-bar *ngIf=\"isUserLogin$|async\">\r\n    <a mat-tab-link (click)=\"logout()\">Logout</a>\r\n    <a mat-tab-link routerLink='/user/products'>User Products</a>\r\n    <a mat-tab-link routerLink='/user/add-product'>User Add Products</a>\r\n    <a mat-tab-link routerLink='/products/all-products'>All Products</a>\r\n    <a mat-tab-link routerLink='/user/delete-product'>User Delete Products</a>\r\n    <a mat-tab-link routerLink='/user/update-product'>User Update Products</a>\r\n    <a mat-tab-link routerLink='/user/dashboard'>User Dashboard</a>\r\n  <span *ngIf=\"user\">{{user.userName}}</span>\r\n  </nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loging/loging.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loging/loging.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLogingLogingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"backgroun-img\"></div>\r\n<div class=\"form-continer\">\r\n<form #formInfo=\"ngForm\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <div>\r\n    <mat-icon   class=\"logoIconFirstIcon\">extension icon</mat-icon>\r\n  </div>\r\n\r\n  <h1 class=\"logInH1\">LOG IN</h1>\r\n\r\n  <div class=\"div-inputs-and-sub-button\" fxLayout=\"column\">\r\n    <mat-form-field>\r\n      <mat-icon matPrefix>person</mat-icon>\r\n      <input matInput class=\"input-field\" required \r\n      #userNameInfo=\"ngModel\" [(ngModel)]=\"user.userName\" name=\"userName\" \r\n      type=\"text\"  placeholder=\"Username\">\r\n\r\n    <mat-error *ngIf=\"userNameInfo.errors?.required && userNameInfo.touched\">\r\n       User Name Missing</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-icon matPrefix>https</mat-icon>\r\n      <input matInput class=\"input-field\" required \r\n      #passwordInfo=\"ngModel\" [(ngModel)]=\"user.password\" name=\"password\" \r\n      type=\"password\"  placeholder=\"Password\">\r\n  \r\n    <mat-error *ngIf=\"passwordInfo.errors?.required && passwordInfo.touched\">\r\n        Password Missing</mat-error>\r\n    </mat-form-field>\r\n      <a class=\"registerLink\" routerLink=\"/register\">register</a>\r\n    <div fxLayoutAlign=\"center center\">\r\n      <button mat-raised-button color=\"primary\" class=\"submitFormBtn\" \r\n      [disabled]=\"formInfo.form.invalid\" (click)=\"userSubmitLoginForm()\">\r\n        Login\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n \r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/massage/massage.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/massage/massage.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMassageMassageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p class=\"massage__text\">{{ massage }}</p>\r\n\r\n<a mat-raised-button color=\"primary\" (click)=\"closeModal()\">Ok</a>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>page-not-found works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/component/products.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/component/products.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsComponentProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-products-nav></app-products-nav>\r\n<app-search-product></app-search-product>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-format/component/product-format.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-format/component/product-format.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsProductFormatComponentProductFormatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"products; else productsLodding\">\r\n    <div *ngIf=\"products.length > 0;else productsNotFound\">\r\n        <div *ngFor=\"let p of products\">\r\n            <p>Product Name: {{p.name}}</p>\r\n            <p>Location: {{p.location}}</p>\r\n            <p>Quantities: {{p.quantities}}</p>\r\n            <p>UserName: {{p.user.userName}}</p>\r\n            <a href=\"tel:{{p.user.phone}}\">call user Phone</a>\r\n            <img src=\"{{p.img.url}}\" width=\"100px\">\r\n            <p>Category: {{p.category.name}}</p>\r\n            </div>\r\n    </div> \r\n</div>\r\n<ng-template #productsLodding>\r\n        <h1>Products Lodding</h1>\r\n</ng-template>\r\n<ng-template #productsNotFound>\r\n    <h1>Products No Found</h1>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-all-products/component/products-all-products.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-all-products/component/products-all-products.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsProductsAllProductsComponentProductsAllProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-product-format [products]=\"products$|async\"></app-product-format>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-by-category/component/products-by-category.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-by-category/component/products-by-category.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsProductsByCategoryComponentProductsByCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-product-format [products]=\"products$|async\"></app-product-format>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-nav/component/products-nav.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-nav/component/products-nav.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsProductsNavComponentProductsNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <nav mat-tab-nav-bar>\r\n    <a mat-tab-link \r\n    routerLinkActive #rla=\"routerLinkActive\"\r\n    [active]=\"rla.isActive\"  routerLink=\"/products/all-products\">All Products</a>\r\n    <a mat-tab-link\r\n       *ngFor=\"let link of navLinks$|async\"\r\n       routerLink=\"/products/category/{{link.name}}\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n      {{link.name}}\r\n    </a>\r\n  </nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-search/component/products-search.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-search/component/products-search.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsProductsSearchComponentProductsSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-product-format [products]=\"products$|async\"></app-product-format>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/component/register.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/component/register.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterComponentRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a routerLink=\"/proudcts/category/Decking\">Decking</a> |\r\n\r\n<form #formInfo=\"ngForm\">\r\n\r\n    <mat-form-field color=\"warn\">\r\n      <input matInput class=\"input-field\" required \r\n      #userNameInfo=\"ngModel\" [(ngModel)]=\"user.userName\" name=\"userName\" \r\n      type=\"text\"  placeholder=\"User Name\">\r\n  \r\n    <mat-error *ngIf=\"userNameInfo.errors?.required && userNameInfo.touched\">\r\n       User Name Missing</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"warn\">\r\n      <input matInput class=\"input-field\" required \r\n      #firstNameInfo=\"ngModel\" [(ngModel)]=\"user.firstName\" name=\"firstName\" \r\n      type=\"text\"  placeholder=\"First Name\">\r\n  \r\n    <mat-error *ngIf=\"firstNameInfo.errors?.required && firstNameInfo.touched\">\r\n       First Name Missing</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"warn\">\r\n      <input matInput class=\"input-field\" required \r\n      #lastNameInfo=\"ngModel\" [(ngModel)]=\"user.lastName\" name=\"lastName\" \r\n      type=\"text\"  placeholder=\"Last Name\">\r\n  \r\n    <mat-error *ngIf=\"lastNameInfo.errors?.required && lastNameInfo.touched\">\r\n        Last Name Missing</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"warn\">\r\n      <input matInput class=\"input-field\" required \r\n      #passwordInfo=\"ngModel\" [(ngModel)]=\"user.password\" name=\"password\" \r\n      type=\"password\"  placeholder=\"Password\">\r\n  \r\n    <mat-error *ngIf=\"passwordInfo.errors?.required && passwordInfo.touched\">\r\n        Password Missing</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"warn\">\r\n      <input matInput class=\"input-field\" required \r\n      #passwordConfirmInfo=\"ngModel\" [(ngModel)]=\"passwordConfirm\" name=\"passwordConfirm\" \r\n      type=\"password\"  placeholder=\"Confirm Password\">\r\n  \r\n    <mat-error *ngIf=\"passwordConfirmInfo.errors?.required && passwordConfirmInfo.touched\">\r\n        Confirm Password Missing</mat-error>\r\n    </mat-form-field>\r\n\r\n      <mat-form-field color=\"warn\">\r\n        <input matInput class=\"input-field\" required \r\n        #emailInfo=\"ngModel\" [(ngModel)]=\"user.email\" name=\"email\" \r\n        type=\"email\"  placeholder=\"Email\">\r\n    \r\n      <mat-error *ngIf=\"emailInfo.errors?.required && emailInfo.touched\">\r\n          Email Missing</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field color=\"warn\">\r\n        <input matInput class=\"input-field\" required \r\n        #phoneInfo=\"ngModel\" [(ngModel)]=\"user.phone\" name=\"phone\" \r\n        type=\"tel\"  placeholder=\"Phone\">\r\n    \r\n      <mat-error *ngIf=\"phoneInfo.errors?.required && phoneInfo.touched\">\r\n        Phone Missing</mat-error>\r\n      </mat-form-field>\r\n  \r\n      <button mat-raised-button color=\"warn\" \r\n      [disabled]=\"formInfo.form.invalid\" (click)=\"userRegisterSubmitForm()\">\r\n        Register\r\n      </button>\r\n \r\n  </form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search-product/component/search-product.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-product/component/search-product.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchProductComponentSearchProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>search product works!</p>\r\n<form #formInfo=\"ngForm\">\r\n    <mat-form-field>\r\n        <input matInput class=\"input-field\" required \r\n        #searchValueInfo=\"ngModel\" [(ngModel)]=\"searchValue\" name=\"searchValue\" \r\n        type=\"text\"  placeholder=\"search product\">\r\n    \r\n      <mat-error *ngIf=\"searchValueInfo.errors?.required && searchValueInfo.touched\">\r\n        Search Value Missing</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-radio-group [(ngModel)]=\"searchFiled\" name=\"searchFiled\" required>\r\n        <mat-radio-button class=\"example-margin\" value=\"name\">Name</mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"location\">Location</mat-radio-button>\r\n      </mat-radio-group>\r\n\r\n    <button mat-raised-button \r\n    [disabled]=\"formInfo.form.invalid\" (click)=\"searchProduct()\">\r\n      Search\r\n    </button>\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/delete-product/component/delete-product.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/delete-product/component/delete-product.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserProductDeleteProductComponentDeleteProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"(products$|async) as products; else productLodding\"> \r\n  <div *ngIf=\"products.length > 0; else notFoundMessage\">\r\n \r\n<table mat-table [dataSource]=\"products\" class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"location\">\r\n      <th mat-header-cell *matHeaderCellDef> Location </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.location}} </td>\r\n    </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"quantities\">\r\n      <th mat-header-cell *matHeaderCellDef> Quantities </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.quantities}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"img\">\r\n      <th mat-header-cell *matHeaderCellDef> Image </th>\r\n      <td mat-cell *matCellDef=\"let element\"> \r\n        <img src=\"{{element.img.url}}\" width=\"50px\">     \r\n    </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"category\">\r\n      <th mat-header-cell *matHeaderCellDef> Category </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.category.name}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"delete\">\r\n      <th mat-header-cell *matHeaderCellDef> Delete </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n          <button (click)=\"deleteProduct(element._id)\"\r\n          >X</button\r\n            >\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n</div>\r\n</div>\r\n  <ng-template #notFoundMessage >\r\n    <h1>Products Not Found</h1>\r\n    </ng-template>\r\n  <ng-template #productLodding >\r\n    <h1>Products Lodding</h1>\r\n    </ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/product-update/component/product-update.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/product-update/component/product-update.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserProductProductUpdateComponentProductUpdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"(products$|async) as products; else productLodding\"> \r\n  <div *ngIf=\"products.length > 0; else notFoundMessage\">\r\n<table mat-table [dataSource]=\"products\" class=\"mat-elevation-z8\">\r\n    \r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let element; let i=index\"> \r\n      <mat-form-field>\r\n      <input matInput  type=\"text\" minlength=\"6\" maxlength=\"15\"  \r\n       [ngModel]=\"element.name\" name=\"name\"\r\n       [(ngModel)]=\"products[i].name\" \r\n       placeholder=\"Product Name\"\r\n      >\r\n    </mat-form-field>\r\n     </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"location\">\r\n      <th mat-header-cell *matHeaderCellDef> Location </th>\r\n      <td mat-cell *matCellDef=\"let element;let i=index\">\r\n         <mat-form-field>\r\n      <input matInput   type=\"text\" minlength=\"6\" maxlength=\"15\" \r\n      placeholder=\"Prodcut Location\" name=\"location\"\r\n      [ngModel]=\"element.location\"\r\n      name=\"location\"\r\n       [(ngModel)]=\"products[i].location\"\r\n      >\r\n    </mat-form-field>\r\n         </td>\r\n    </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"quantities\">\r\n      <th mat-header-cell *matHeaderCellDef> Quantities </th>\r\n      <td mat-cell *matCellDef=\"let element;let i=index\"> \r\n        <mat-form-field>\r\n      <input matInput   type=\"text\" minlength=\"6\" maxlength=\"15\" \r\n      placeholder=\"Product Quantities\" id=\"quantitiesInfo\"  name=\"quantities\"\r\n      [ngModel]=\"element.quantities\"\r\n      name=\"quantities\"\r\n       [(ngModel)]=\"products[i].quantities\">\r\n    </mat-form-field>       \r\n        </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"img\">\r\n      <th mat-header-cell *matHeaderCellDef> Image </th>\r\n      <td mat-cell *matCellDef=\"let element; let i = index\"> \r\n        \r\n        <input  type=\"file\" (change)=\"onFileSelected($event, i)\"\r\n      ngModel name=\"img\">      \r\n        <img  *ngIf=\"!imgURL[i]\" src=\"{{element.img.url}}\" width=\"50px\">   \r\n        <img *ngIf=\"imgURL[i]\" [src]=\"imgURL[i]\" width=\"50px\">  \r\n    </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"category\">\r\n      <th mat-header-cell *matHeaderCellDef> Category </th>\r\n      <td mat-cell *matCellDef=\"let element;let i=index\">  \r\n        \r\n    <mat-form-field>\r\n        <mat-label>Category</mat-label>\r\n        <mat-select  \r\n        type=\"text\"  \r\n       [ngModel]=\"element.category._id\" name=\"category\"\r\n       [(ngModel)]=\"products[i].category._id\"\r\n       >\r\n          <mat-option *ngFor=\"let c of categories$|async\" [value]=\"c._id\">\r\n            {{c.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n        \r\n        </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"update\">\r\n      <th mat-header-cell *matHeaderCellDef> Update </th>\r\n      <td mat-cell *matCellDef=\"let element;let i=index\">\r\n          <button  (click)=\"updateProduct(element._id,i)\"\r\n          >Update Product</button>\r\n      </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n</div>\r\n</div>\r\n  <ng-template #notFoundMessage >\r\n    <h1>Products Not Found</h1>\r\n    </ng-template>\r\n  <ng-template #productLodding >\r\n    <h1>Products Lodding</h1>\r\n    </ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/user-add-product/component/user-add-product.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/user-add-product/component/user-add-product.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserProductUserAddProductComponentUserAddProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form #formInfo=\"ngForm\" >\n\n    <mat-form-field>\n      <input matInput   required type=\"text\"  placeholder=\"Name\" \n      minlength=\"6\" maxlength=\"15\"\n     #nameInfo=\"ngModel\" [(ngModel)]=\"product.name\" name=\"name\">\n    <mat-error class=\"\" *ngIf=\"nameInfo.errors?.required && nameInfo.touched\">\n        Product Name Missing</mat-error>\n    <mat-error  *ngIf=\"nameInfo.errors?.minlength && nameInfo.touched\">\n      Product name too short.<br>\n      Product name must be at least 6 characters</mat-error>\n    </mat-form-field>\n\n\n     <mat-form-field>\n        <input matInput   required type=\"text\"  placeholder=\"Location\"\n        minlength=\"6\" maxlength=\"15\"\n       #locationInfo=\"ngModel\" [(ngModel)]=\"product.location\" name=\"location\">\n      <mat-error *ngIf=\"locationInfo.errors?.required && locationInfo.touched\">\n        Location Missing</mat-error>\n        <mat-error  *ngIf=\"locationInfo.errors?.minlength && locationInfo.touched\">\n          Location too short.<br>\n          Location must be at least 6 characters</mat-error>\n      </mat-form-field>   \n\n      <mat-form-field>\n        <input matInput   required type=\"number\"  placeholder=\"Quantities\" min=\"1\" \n       #quantitiesInfo=\"ngModel\" [(ngModel)]=\"product.quantities\" name=\"quantities\">\n      <mat-error *ngIf=\"quantitiesInfo.errors?.required && quantitiesInfo.touched\">\n        Quantities Missing</mat-error>\n      </mat-form-field>\n\n\n    <mat-form-field>\n        <mat-label>Category</mat-label>\n        <mat-select  \n        required type=\"text\" \n        #categoryInfo=\"ngModel\" [(ngModel)]=\"product.category\" name=\"category\">\n          <mat-option *ngFor=\"let c of categories$|async\" [value]=\"c._id\">\n            {{c.name}}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"categoryInfo.errors?.required && categoryInfo.touched\">\n            Category Missing</mat-error>\n      </mat-form-field>\n\n        <input  required\n        type=\"file\" (change)=\"onFileSelected($event)\"\n       #imgInfo=\"ngModel\" [(ngModel)]=\"product.img\" name=\"img\">\n      <div *ngIf=\"imgInfo.errors?.required && imgInfo.touched\">\n        Image Missing</div>\n\n      <button mat-raised-button  \n      type=\"submit\" \n      [disabled]=\"formInfo.form.invalid\"\n      (click)=\"userAddingProduct()\">\n        Add Product\n      </button>\n \n  </form>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/angular-material.module.ts":
  /*!********************************************!*\
    !*** ./src/app/angular-material.module.ts ***!
    \********************************************/

  /*! exports provided: AngualrMaterialModule */

  /***/
  function srcAppAngularMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngualrMaterialModule", function () {
      return AngualrMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");

    var AngualrMaterialModule = function AngualrMaterialModule() {
      _classCallCheck(this, AngualrMaterialModule);
    };

    AngualrMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"]]
    })], AngualrMaterialModule);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _loging_loging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./loging/loging.component */
    "./src/app/loging/loging.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");

    var routes = [{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _loging_loging_component__WEBPACK_IMPORTED_MODULE_3__["LogingComponent"]
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./register/module/register/register.module */
        "./src/app/register/module/register/register.module.ts")).then(function (m) {
          return m.RegisterModule;
        });
      }
    }, {
      path: 'products',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./products/module/products.module */
        "./src/app/products/module/products.module.ts")).then(function (m) {
          return m.ProductsModule;
        });
      },
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    }, {
      path: 'user/products',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | user-product-user-products-module-user-products-module */
        "user-product-user-products-module-user-products-module").then(__webpack_require__.bind(null,
        /*! ./user-product/user-products/module/user-products.module */
        "./src/app/user-product/user-products/module/user-products.module.ts")).then(function (m) {
          return m.UserProductsModule;
        });
      },
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    }, {
      path: 'user/add-product',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./user-product/user-add-product/module/user-add-product.module */
        "./src/app/user-product/user-add-product/module/user-add-product.module.ts")).then(function (m) {
          return m.UserAddProductModule;
        });
      },
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    }, {
      path: 'user/delete-product',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./user-product/delete-product/module/delete-product.module */
        "./src/app/user-product/delete-product/module/delete-product.module.ts")).then(function (m) {
          return m.DeleteProductModule;
        });
      },
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    }, {
      path: 'user/dashboard',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | user-dashboard-module-user-dashboard-module */
        "user-dashboard-module-user-dashboard-module").then(__webpack_require__.bind(null,
        /*! ./user-dashboard/module/user-dashboard.module */
        "./src/app/user-dashboard/module/user-dashboard.module.ts")).then(function (m) {
          return m.UserDashboardModule;
        });
      },
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    }, {
      path: 'user/update-product',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./user-product/product-update/module/product-update.module */
        "./src/app/user-product/product-update/module/product-update.module.ts")).then(function (m) {
          return m.ProductUpdateModule;
        });
      },
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Stock Sale';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _loging_loging_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./loging/loging.component */
    "./src/app/loging/loging.component.ts");
    /* harmony import */


    var _register_module_register_register_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register/module/register/register.module */
    "./src/app/register/module/register/register.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shear_modul__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shear.modul */
    "./src/app/shear.modul.ts");
    /* harmony import */


    var _massage_massage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./massage/massage.component */
    "./src/app/massage/massage.component.ts");
    /* harmony import */


    var _error_inteceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./error.inteceptor */
    "./src/app/error.inteceptor.ts");
    /* harmony import */


    var _products_module_products_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./products/module/products.module */
    "./src/app/products/module/products.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _header_nav_bar_module_module_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./header-nav-bar/module/module.module */
    "./src/app/header-nav-bar/module/module.module.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _user_product_user_add_product_module_user_add_product_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./user-product/user-add-product/module/user-add-product.module */
    "./src/app/user-product/user-add-product/module/user-add-product.module.ts");
    /* harmony import */


    var _user_product_delete_product_module_delete_product_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./user-product/delete-product/module/delete-product.module */
    "./src/app/user-product/delete-product/module/delete-product.module.ts");
    /* harmony import */


    var _user_product_product_update_module_product_update_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./user-product/product-update/module/product-update.module */
    "./src/app/user-product/product-update/module/product-update.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _loging_loging_component__WEBPACK_IMPORTED_MODULE_5__["LogingComponent"], _massage_massage_component__WEBPACK_IMPORTED_MODULE_10__["MassageComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"]],
      entryComponents: [_massage_massage_component__WEBPACK_IMPORTED_MODULE_10__["MassageComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _register_module_register_register_module__WEBPACK_IMPORTED_MODULE_6__["RegisterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _shear_modul__WEBPACK_IMPORTED_MODULE_9__["ShearModule"], _products_module_products_module__WEBPACK_IMPORTED_MODULE_12__["ProductsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _header_nav_bar_module_module_module__WEBPACK_IMPORTED_MODULE_14__["HeaderNavBarModule"], _user_product_user_add_product_module_user_add_product_module__WEBPACK_IMPORTED_MODULE_16__["UserAddProductModule"], _user_product_delete_product_module_delete_product_module__WEBPACK_IMPORTED_MODULE_17__["DeleteProductModule"], _user_product_product_update_module_product_update_module__WEBPACK_IMPORTED_MODULE_18__["ProductUpdateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _error_inteceptor__WEBPACK_IMPORTED_MODULE_11__["HttpErrorInteceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/error.inteceptor.ts":
  /*!*************************************!*\
    !*** ./src/app/error.inteceptor.ts ***!
    \*************************************/

  /*! exports provided: HttpErrorInteceptor */

  /***/
  function srcAppErrorInteceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorInteceptor", function () {
      return HttpErrorInteceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _massage_massage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./massage/massage.component */
    "./src/app/massage/massage.component.ts");

    var HttpErrorInteceptor =
    /*#__PURE__*/
    function () {
      function HttpErrorInteceptor(dialog) {
        _classCallCheck(this, HttpErrorInteceptor);

        this.dialog = dialog;
      }

      _createClass(HttpErrorInteceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            var err;

            if (error.status === 409) {
              err = error.error.message;
            } else {
              err = error.message;
            }

            var dialogRef = _this.dialog.open(_massage_massage_component__WEBPACK_IMPORTED_MODULE_5__["MassageComponent"], {
              width: '33rem',
              data: {
                error: err
              }
            });

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }]);

      return HttpErrorInteceptor;
    }();

    HttpErrorInteceptor.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    HttpErrorInteceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], HttpErrorInteceptor);
    /***/
  },

  /***/
  "./src/app/header-nav-bar/component/header-nav-bar.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/header-nav-bar/component/header-nav-bar.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderNavBarComponentHeaderNavBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1uYXYtYmFyL2NvbXBvbmVudC9oZWFkZXItbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/header-nav-bar/component/header-nav-bar.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/header-nav-bar/component/header-nav-bar.component.ts ***!
    \**********************************************************************/

  /*! exports provided: HeaderNavBarComponent */

  /***/
  function srcAppHeaderNavBarComponentHeaderNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderNavBarComponent", function () {
      return HeaderNavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var HeaderNavBarComponent =
    /*#__PURE__*/
    function () {
      function HeaderNavBarComponent(authGuardService, authenticationService) {
        _classCallCheck(this, HeaderNavBarComponent);

        this.authGuardService = authGuardService;
        this.authenticationService = authenticationService;
      }

      _createClass(HeaderNavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.isUserLogin$ = this.authGuardService.checkLogin();
          this.user$ = this.authenticationService.getUser().subscribe(function (user) {
            _this2.user = user;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.user$.unsubscribe();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.loguot();
        }
      }]);

      return HeaderNavBarComponent;
    }();

    HeaderNavBarComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]
      }, {
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    HeaderNavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header-nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header-nav-bar/component/header-nav-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header-nav-bar.component.css */
      "./src/app/header-nav-bar/component/header-nav-bar.component.css")).default]
    })], HeaderNavBarComponent);
    /***/
  },

  /***/
  "./src/app/header-nav-bar/module/module.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/header-nav-bar/module/module.module.ts ***!
    \********************************************************/

  /*! exports provided: HeaderNavBarModule */

  /***/
  function srcAppHeaderNavBarModuleModuleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderNavBarModule", function () {
      return HeaderNavBarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _component_header_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../component/header-nav-bar.component */
    "./src/app/header-nav-bar/component/header-nav-bar.component.ts");
    /* harmony import */


    var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shear.modul */
    "./src/app/shear.modul.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderNavBarModule = function HeaderNavBarModule() {
      _classCallCheck(this, HeaderNavBarModule);
    };

    HeaderNavBarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_header_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["HeaderNavBarComponent"]],
      imports: [src_app_shear_modul__WEBPACK_IMPORTED_MODULE_3__["ShearModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
      exports: [_component_header_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["HeaderNavBarComponent"]]
    })], HeaderNavBarModule);
    /***/
  },

  /***/
  "./src/app/loging/loging.component.css":
  /*!*********************************************!*\
    !*** ./src/app/loging/loging.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLogingLogingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-continer{\r\n    height: 100vh;\r\n    width:100%;\r\n}\r\n.backgroun-img{\r\n    background-image: url('login-form-body-background.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    width: 100%;\r\n    top:0;\r\n    height: 110vh;\r\n    position: absolute;\r\n    z-index: -1;  \r\n}\r\nform{\r\nbackground-image: -webkit-gradient(linear, left bottom, left top, from(#30cfd0), to(#330867));\r\nbackground-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);\r\nborder-radius: 10px;\r\nmargin:15px;\r\nheight: 100vh;\r\nbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\r\n\r\n}\r\n.logInH1{\r\n    font-size: 1.8rem;\r\n}\r\n.logoIconFirstIcon{\r\n    background-color: #ffffff;\r\n    color: black;\r\n    padding:2rem;\r\n    border-radius: 50%;\r\n    box-sizing: content-box;\r\n    font-size: 3rem;\r\n    height: 3rem;\r\n    width: 3rem;\r\n}\r\n.registerLink{\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    color:#ffffff;\r\n    font-weight:600;\r\n    margin-bottom: 10px;\r\n}\r\n.submitFormBtn{\r\n    display: block;\r\n}\r\n@media only screen and (min-width: 600px) and (max-width: 1439px){\r\n    .form-continer{\r\n        width:50%;\r\n        margin: auto;\r\n        }\r\n  }\r\n@media only screen and (min-width: 1440px) and (max-width: 2560px){\r\n    .form-continer{\r\n        width:30%;\r\n        margin: auto;\r\n        }\r\n  }\r\n@media only screen and (min-width: 2560px){\r\n    form {\r\n        font-size: 2rem;\r\n        line-height: 2rem;\r\n    }\r\n   .div-inputs-and-sub-button{\r\n              width: 80%;\r\n          }\r\n    .submitFormBtn{\r\n        width: 50%;\r\n        height: 11vh;\r\n        font-size: 1.5rem;\r\n    }\r\n    .logoIconFirstIcon{\r\n        padding:4rem;\r\n        font-size: 5rem;\r\n        height: 5rem;\r\n        width: 5rem;\r\n\r\n    }\r\n    .logInH1{\r\n        font-size: 4rem;\r\n\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5nL2xvZ2luZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDtBQUNBO0lBQ0ksdURBQTJFO0lBQzNFLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLEtBQUs7SUFDTCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUVBO0FBQ0EsNkZBQW1FO0FBQW5FLG1FQUFtRTtBQUNuRSxtQkFBbUI7QUFDbkIsV0FBVztBQUNYLGFBQWE7QUFDYiw0RUFBNEU7OztBQUc1RTtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBSUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxZQUFZO1FBQ1o7RUFDTjtBQUVBO0lBQ0U7UUFDSSxTQUFTO1FBQ1QsWUFBWTtRQUNaO0VBQ047QUFDQTtJQUNFO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtHQUNEO2NBQ1csVUFBVTtVQUNkO0lBQ047UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZixZQUFZO1FBQ1osV0FBVzs7SUFFZjtJQUNBO1FBQ0ksZUFBZTs7SUFFbkI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luZy9sb2dpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuLmJhY2tncm91bi1pbWd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4tZm9ybS1ib2R5LWJhY2tncm91bmQucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBoZWlnaHQ6IDExMHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7ICBcclxufVxyXG5cclxuZm9ybXtcclxuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzMwY2ZkMCAwJSwgIzMzMDg2NyAxMDAlKTtcclxuYm9yZGVyLXJhZGl1czogMTBweDtcclxubWFyZ2luOjE1cHg7XHJcbmhlaWdodDogMTAwdmg7XHJcbmJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcblxyXG5cclxufVxyXG4ubG9nSW5IMXtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG59XHJcblxyXG4ubG9nb0ljb25GaXJzdEljb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzoycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICB3aWR0aDogM3JlbTtcclxufVxyXG4ucmVnaXN0ZXJMaW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6I2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zdWJtaXRGb3JtQnRue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4gIFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTQzOXB4KXtcclxuICAgIC5mb3JtLWNvbnRpbmVye1xyXG4gICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LXdpZHRoOiAyNTYwcHgpe1xyXG4gICAgLmZvcm0tY29udGluZXJ7XHJcbiAgICAgICAgd2lkdGg6MzAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KXtcclxuICAgIGZvcm0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgIH1cclxuICAgLmRpdi1pbnB1dHMtYW5kLXN1Yi1idXR0b257XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIH1cclxuICAgIC5zdWJtaXRGb3JtQnRue1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMXZoO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgLmxvZ29JY29uRmlyc3RJY29ue1xyXG4gICAgICAgIHBhZGRpbmc6NHJlbTtcclxuICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgIHdpZHRoOiA1cmVtO1xyXG5cclxuICAgIH1cclxuICAgIC5sb2dJbkgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/loging/loging.component.ts":
  /*!********************************************!*\
    !*** ./src/app/loging/loging.component.ts ***!
    \********************************************/

  /*! exports provided: LogingComponent */

  /***/
  function srcAppLogingLogingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogingComponent", function () {
      return LogingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modals_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modals/user */
    "./src/app/modals/user.ts");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var LogingComponent =
    /*#__PURE__*/
    function () {
      function LogingComponent(authenticationService) {
        _classCallCheck(this, LogingComponent);

        this.authenticationService = authenticationService;
        this.user = new src_app_modals_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
      }

      _createClass(LogingComponent, [{
        key: "userSubmitLoginForm",
        value: function userSubmitLoginForm() {
          this.authenticationService.login(this.user);
        }
      }]);

      return LogingComponent;
    }();

    LogingComponent.ctorParameters = function () {
      return [{
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    LogingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loging',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loging.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loging/loging.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loging.component.css */
      "./src/app/loging/loging.component.css")).default]
    })], LogingComponent);
    /***/
  },

  /***/
  "./src/app/massage/massage.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/massage/massage.component.ts ***!
    \**********************************************/

  /*! exports provided: MassageComponent */

  /***/
  function srcAppMassageMassageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MassageComponent", function () {
      return MassageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MassageComponent =
    /*#__PURE__*/
    function () {
      function MassageComponent(data, matDialog) {
        _classCallCheck(this, MassageComponent);

        this.data = data;
        this.matDialog = matDialog;
      }

      _createClass(MassageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.massage = this.data.error;
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.matDialog.closeAll();
        }
      }]);

      return MassageComponent;
    }();

    MassageComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    MassageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-massage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./massage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/massage/massage.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], MassageComponent);
    /***/
  },

  /***/
  "./src/app/modals/product.ts":
  /*!***********************************!*\
    !*** ./src/app/modals/product.ts ***!
    \***********************************/

  /*! exports provided: Product */

  /***/
  function srcAppModalsProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Product = function Product(_id, name, location, quantities, user, img, category) {
      _classCallCheck(this, Product);

      this._id = _id;
      this.name = name;
      this.location = location;
      this.quantities = quantities;
      this.user = user;
      this.img = img;
      this.category = category;
    };
    /***/

  },

  /***/
  "./src/app/modals/user.ts":
  /*!********************************!*\
    !*** ./src/app/modals/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModalsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User(userName, firstName, lastName, password, email, phone, _id) {
      _classCallCheck(this, User);

      this.userName = userName;
      this.firstName = firstName;
      this.lastName = lastName;
      this.password = password;
      this.email = email;
      this.phone = phone;
      this._id = _id;
    };
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.css */
      "./src/app/page-not-found/page-not-found.component.css")).default]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/products/component/products.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/products/component/products.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsComponentProductsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-products-nav{\r\n    color:black\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50L3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50L3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcHJvZHVjdHMtbmF2e1xyXG4gICAgY29sb3I6YmxhY2tcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/products/component/products.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/products/component/products.component.ts ***!
    \**********************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppProductsComponentProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductsComponent = function ProductsComponent() {
      _classCallCheck(this, ProductsComponent);
    };

    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/component/products.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.component.css */
      "./src/app/products/component/products.component.css")).default]
    })], ProductsComponent);
    /***/
  },

  /***/
  "./src/app/products/module/products-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/products/module/products-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: ProductsRoutingModule */

  /***/
  function srcAppProductsModuleProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () {
      return ProductsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/products.component */
    "./src/app/products/component/products.component.ts");
    /* harmony import */


    var _products_all_products_component_products_all_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../products-all-products/component/products-all-products.component */
    "./src/app/products/products-all-products/component/products-all-products.component.ts");
    /* harmony import */


    var _products_by_category_component_products_by_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../products-by-category/component/products-by-category.component */
    "./src/app/products/products-by-category/component/products-by-category.component.ts");
    /* harmony import */


    var _products_search_component_products_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../products-search/component/products-search.component */
    "./src/app/products/products-search/component/products-search.component.ts");

    var routes = [{
      path: '',
      component: _component_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
      children: [{
        path: '',
        component: _component_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
      }, {
        path: 'all-products',
        component: _products_all_products_component_products_all_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsAllProductsComponent"]
      }, {
        path: 'category/:categoryName',
        component: _products_by_category_component_products_by_category_component__WEBPACK_IMPORTED_MODULE_5__["ProductsByCategoryComponent"]
      }, {
        path: 'search/:fild/:searchVal',
        component: _products_search_component_products_search_component__WEBPACK_IMPORTED_MODULE_6__["ProductsSearchComponent"]
      }]
    }];

    var ProductsRoutingModule = function ProductsRoutingModule() {
      _classCallCheck(this, ProductsRoutingModule);
    };

    ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductsRoutingModule);
    /***/
  },

  /***/
  "./src/app/products/module/products.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/products/module/products.module.ts ***!
    \****************************************************/

  /*! exports provided: ProductsModule */

  /***/
  function srcAppProductsModuleProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _component_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../component/products.component */
    "./src/app/products/component/products.component.ts");
    /* harmony import */


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/products/module/products-routing.module.ts");
    /* harmony import */


    var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shear.modul */
    "./src/app/shear.modul.ts");
    /* harmony import */


    var _products_nav_module_products_nav_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../products-nav/module/products-nav.module */
    "./src/app/products/products-nav/module/products-nav.module.ts");
    /* harmony import */


    var _products_all_products_module_products_all_products_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../products-all-products/module/products-all-products.module */
    "./src/app/products/products-all-products/module/products-all-products.module.ts");
    /* harmony import */


    var _products_by_category_module_products_by_category_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../products-by-category/module/products-by-category.module */
    "./src/app/products/products-by-category/module/products-by-category.module.ts");
    /* harmony import */


    var _products_search_module_products_search_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../products-search/module/products-search.module */
    "./src/app/products/products-search/module/products-search.module.ts");
    /* harmony import */


    var src_app_search_product_module_search_product_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/search-product/module/search-product.module */
    "./src/app/search-product/module/search-product.module.ts");

    var ProductsModule = function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    };

    ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"]],
      imports: [_products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"], src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__["ShearModule"], _products_nav_module_products_nav_module__WEBPACK_IMPORTED_MODULE_5__["ProductsNavModule"], _products_all_products_module_products_all_products_module__WEBPACK_IMPORTED_MODULE_6__["ProductsAllProductsModule"], _products_by_category_module_products_by_category_module__WEBPACK_IMPORTED_MODULE_7__["ProductsByCategoryModule"], _products_search_module_products_search_module__WEBPACK_IMPORTED_MODULE_8__["ProductsSearchModule"], src_app_search_product_module_search_product_module__WEBPACK_IMPORTED_MODULE_9__["SearchProductModule"]],
      exports: [_component_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"], _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"]]
    })], ProductsModule);
    /***/
  },

  /***/
  "./src/app/products/product-format/component/product-format.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/products/product-format/component/product-format.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsProductFormatComponentProductFormatComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZm9ybWF0L2NvbXBvbmVudC9wcm9kdWN0LWZvcm1hdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/products/product-format/component/product-format.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/products/product-format/component/product-format.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ProductFormatComponent */

  /***/
  function srcAppProductsProductFormatComponentProductFormatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductFormatComponent", function () {
      return ProductFormatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductFormatComponent = function ProductFormatComponent() {
      _classCallCheck(this, ProductFormatComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductFormatComponent.prototype, "products", void 0);
    ProductFormatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-format',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-format.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-format/component/product-format.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-format.component.css */
      "./src/app/products/product-format/component/product-format.component.css")).default]
    })], ProductFormatComponent);
    /***/
  },

  /***/
  "./src/app/products/product-format/module/product-format.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/products/product-format/module/product-format.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ProductFormatModule */

  /***/
  function srcAppProductsProductFormatModuleProductFormatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductFormatModule", function () {
      return ProductFormatModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _component_product_format_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/product-format.component */
    "./src/app/products/product-format/component/product-format.component.ts");

    var ProductFormatModule = function ProductFormatModule() {
      _classCallCheck(this, ProductFormatModule);
    };

    ProductFormatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_product_format_component__WEBPACK_IMPORTED_MODULE_3__["ProductFormatComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_component_product_format_component__WEBPACK_IMPORTED_MODULE_3__["ProductFormatComponent"]]
    })], ProductFormatModule);
    /***/
  },

  /***/
  "./src/app/products/products-all-products/component/products-all-products.component.css":
  /*!**********************************************************************************************!*\
    !*** ./src/app/products/products-all-products/component/products-all-products.component.css ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsProductsAllProductsComponentProductsAllProductsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLWFsbC1wcm9kdWN0cy9jb21wb25lbnQvcHJvZHVjdHMtYWxsLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/products/products-all-products/component/products-all-products.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/products/products-all-products/component/products-all-products.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ProductsAllProductsComponent */

  /***/
  function srcAppProductsProductsAllProductsComponentProductsAllProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsAllProductsComponent", function () {
      return ProductsAllProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/products.service */
    "./src/app/services/products.service.ts");

    var ProductsAllProductsComponent =
    /*#__PURE__*/
    function () {
      function ProductsAllProductsComponent(productsService) {
        _classCallCheck(this, ProductsAllProductsComponent);

        this.productsService = productsService;
      }

      _createClass(ProductsAllProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.products$ = this.productsService.getAllProducts();
        }
      }]);

      return ProductsAllProductsComponent;
    }();

    ProductsAllProductsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
      }];
    };

    ProductsAllProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products-all-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products-all-products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-all-products/component/products-all-products.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products-all-products.component.css */
      "./src/app/products/products-all-products/component/products-all-products.component.css")).default]
    })], ProductsAllProductsComponent);
    /***/
  },

  /***/
  "./src/app/products/products-all-products/module/products-all-products-routing.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/products/products-all-products/module/products-all-products-routing.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ProductsAllProductsRoutingModule */

  /***/
  function srcAppProductsProductsAllProductsModuleProductsAllProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsAllProductsRoutingModule", function () {
      return ProductsAllProductsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/products-all-products.component */
    "./src/app/products/products-all-products/component/products-all-products.component.ts");

    var route = [{
      path: '',
      component: _component_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsAllProductsComponent"]
    }];

    var ProductsAllProductsRoutingModule = function ProductsAllProductsRoutingModule() {
      _classCallCheck(this, ProductsAllProductsRoutingModule);
    };

    ProductsAllProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductsAllProductsRoutingModule);
    /***/
  },

  /***/
  "./src/app/products/products-all-products/module/products-all-products.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/products/products-all-products/module/products-all-products.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: ProductsAllProductsModule */

  /***/
  function srcAppProductsProductsAllProductsModuleProductsAllProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsAllProductsModule", function () {
      return ProductsAllProductsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _component_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/products-all-products.component */
    "./src/app/products/products-all-products/component/products-all-products.component.ts");
    /* harmony import */


    var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shear.modul */
    "./src/app/shear.modul.ts");
    /* harmony import */


    var _products_all_products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./products-all-products-routing.module */
    "./src/app/products/products-all-products/module/products-all-products-routing.module.ts");

    var ProductsAllProductsModule = function ProductsAllProductsModule() {
      _classCallCheck(this, ProductsAllProductsModule);
    };

    ProductsAllProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsAllProductsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__["ShearModule"], _products_all_products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsAllProductsRoutingModule"]],
      exports: [_component_products_all_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsAllProductsComponent"]]
    })], ProductsAllProductsModule);
    /***/
  },

  /***/
  "./src/app/products/products-by-category/component/products-by-category.component.css":
  /*!********************************************************************************************!*\
    !*** ./src/app/products/products-by-category/component/products-by-category.component.css ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsProductsByCategoryComponentProductsByCategoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLWJ5LWNhdGVnb3J5L2NvbXBvbmVudC9wcm9kdWN0cy1ieS1jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/products/products-by-category/component/products-by-category.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/products/products-by-category/component/products-by-category.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ProductsByCategoryComponent */

  /***/
  function srcAppProductsProductsByCategoryComponentProductsByCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsByCategoryComponent", function () {
      return ProductsByCategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/category.service */
    "./src/app/services/category.service.ts");

    var ProductsByCategoryComponent =
    /*#__PURE__*/
    function () {
      function ProductsByCategoryComponent(productsService, router, categoryService) {
        _classCallCheck(this, ProductsByCategoryComponent);

        this.productsService = productsService;
        this.router = router;
        this.categoryService = categoryService;
      }

      _createClass(ProductsByCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.route$ = this.router.params.subscribe(function (params) {
            console.log(params.categoryName);

            _this3.categoryService.getCategoryByName(params.categoryName).subscribe(function (categoy) {
              console.log(categoy._id);
              _this3.products$ = _this3.productsService.getProductsByCategory(categoy._id);
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.route$.unsubscribe();
        }
      }]);

      return ProductsByCategoryComponent;
    }();

    ProductsByCategoryComponent.ctorParameters = function () {
      return [{
        type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]
      }];
    };

    ProductsByCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products-by-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products-by-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-by-category/component/products-by-category.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products-by-category.component.css */
      "./src/app/products/products-by-category/component/products-by-category.component.css")).default]
    })], ProductsByCategoryComponent);
    /***/
  },

  /***/
  "./src/app/products/products-by-category/module/products-by-category-routing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/products/products-by-category/module/products-by-category-routing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ProductsByCategoryRoutingModule */

  /***/
  function srcAppProductsProductsByCategoryModuleProductsByCategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsByCategoryRoutingModule", function () {
      return ProductsByCategoryRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _component_products_by_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../component/products-by-category.component */
    "./src/app/products/products-by-category/component/products-by-category.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var route = [{
      path: '',
      component: _component_products_by_category_component__WEBPACK_IMPORTED_MODULE_2__["ProductsByCategoryComponent"]
    }];

    var ProductsByCategoryRoutingModule = function ProductsByCategoryRoutingModule() {
      _classCallCheck(this, ProductsByCategoryRoutingModule);
    };

    ProductsByCategoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(route)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], ProductsByCategoryRoutingModule);
    /***/
  },

  /***/
  "./src/app/products/products-by-category/module/products-by-category.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/products/products-by-category/module/products-by-category.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ProductsByCategoryModule */

  /***/
  function srcAppProductsProductsByCategoryModuleProductsByCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsByCategoryModule", function () {
      return ProductsByCategoryModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _component_products_by_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/products-by-category.component */
    "./src/app/products/products-by-category/component/products-by-category.component.ts");
    /* harmony import */


    var _products_by_category_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./products-by-category-routing.module */
    "./src/app/products/products-by-category/module/products-by-category-routing.module.ts");
    /* harmony import */


    var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shear.modul */
    "./src/app/shear.modul.ts");

    var ProductsByCategoryModule = function ProductsByCategoryModule() {
      _classCallCheck(this, ProductsByCategoryModule);
    };

    ProductsByCategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_products_by_category_component__WEBPACK_IMPORTED_MODULE_3__["ProductsByCategoryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _products_by_category_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductsByCategoryRoutingModule"], src_app_shear_modul__WEBPACK_IMPORTED_MODULE_5__["ShearModule"]],
      exports: [_component_products_by_category_component__WEBPACK_IMPORTED_MODULE_3__["ProductsByCategoryComponent"], _products_by_category_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductsByCategoryRoutingModule"]]
    })], ProductsByCategoryModule);
    /***/
  },

  /***/
  "./src/app/products/products-nav/component/products-nav.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/products/products-nav/component/products-nav.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsProductsNavComponentProductsNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav{\r\n    color: black;\r\n    background-color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMtbmF2L2NvbXBvbmVudC9wcm9kdWN0cy1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy1uYXYvY29tcG9uZW50L3Byb2R1Y3RzLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/products/products-nav/component/products-nav.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/products/products-nav/component/products-nav.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ProductsNavComponent */

  /***/
  function srcAppProductsProductsNavComponentProductsNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsNavComponent", function () {
      return ProductsNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/category.service */
    "./src/app/services/category.service.ts");

    var ProductsNavComponent =
    /*#__PURE__*/
    function () {
      function ProductsNavComponent(categoryService) {
        _classCallCheck(this, ProductsNavComponent);

        this.categoryService = categoryService;
      }

      _createClass(ProductsNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.navLinks$ = this.categoryService.getAllCategories();
        }
      }]);

      return ProductsNavComponent;
    }();

    ProductsNavComponent.ctorParameters = function () {
      return [{
        type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }];
    };

    ProductsNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-nav/component/products-nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products-nav.component.css */
      "./src/app/products/products-nav/component/products-nav.component.css")).default]
    })], ProductsNavComponent);
    /***/
  },

  /***/
  "./src/app/products/products-nav/module/products-nav.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/products/products-nav/module/products-nav.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ProductsNavModule */

  /***/
  function srcAppProductsProductsNavModuleProductsNavModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsNavModule", function () {
      return ProductsNavModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shear.modul */
    "./src/app/shear.modul.ts");
    /* harmony import */


    var _component_products_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/products-nav.component */
    "./src/app/products/products-nav/component/products-nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProductsNavModule = function ProductsNavModule() {
      _classCallCheck(this, ProductsNavModule);
    };

    ProductsNavModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_products_nav_component__WEBPACK_IMPORTED_MODULE_3__["ProductsNavComponent"]],
      imports: [src_app_shear_modul__WEBPACK_IMPORTED_MODULE_2__["ShearModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
      exports: [_component_products_nav_component__WEBPACK_IMPORTED_MODULE_3__["ProductsNavComponent"]]
    })], ProductsNavModule);
    /***/
  },

  /***/
  "./src/app/products/products-search/component/products-search.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/products/products-search/component/products-search.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsProductsSearchComponentProductsSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLXNlYXJjaC9jb21wb25lbnQvcHJvZHVjdHMtc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/products/products-search/component/products-search.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/products/products-search/component/products-search.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ProductsSearchComponent */

  /***/
  function srcAppProductsProductsSearchComponentProductsSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsSearchComponent", function () {
      return ProductsSearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProductsSearchComponent =
    /*#__PURE__*/
    function () {
      function ProductsSearchComponent(router, productService) {
        _classCallCheck(this, ProductsSearchComponent);

        this.router = router;
        this.productService = productService;
      }

      _createClass(ProductsSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.route$ = this.router.params.subscribe(function (params) {
            _this4.products$ = _this4.productService.getProductBySearch(params.fild, params.searchVal);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.route$.unsubscribe();
        }
      }]);

      return ProductsSearchComponent;
    }();

    ProductsSearchComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
      }];
    };

    ProductsSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products-search/component/products-search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products-search.component.css */
      "./src/app/products/products-search/component/products-search.component.css")).default]
    })], ProductsSearchComponent);
    /***/
  },

  /***/
  "./src/app/products/products-search/module/products-search-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/products/products-search/module/products-search-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ProductsSearchRoutingModule */

  /***/
  function srcAppProductsProductsSearchModuleProductsSearchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsSearchRoutingModule", function () {
      return ProductsSearchRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_products_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/products-search.component */
    "./src/app/products/products-search/component/products-search.component.ts");

    var route = [{
      path: '',
      component: _component_products_search_component__WEBPACK_IMPORTED_MODULE_3__["ProductsSearchComponent"]
    }];

    var ProductsSearchRoutingModule = function ProductsSearchRoutingModule() {
      _classCallCheck(this, ProductsSearchRoutingModule);
    };

    ProductsSearchRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductsSearchRoutingModule);
    /***/
  },

  /***/
  "./src/app/products/products-search/module/products-search.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/products/products-search/module/products-search.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ProductsSearchModule */

  /***/
  function srcAppProductsProductsSearchModuleProductsSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsSearchModule", function () {
      return ProductsSearchModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _component_products_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/products-search.component */
    "./src/app/products/products-search/component/products-search.component.ts");
    /* harmony import */


    var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shear.modul */
    "./src/app/shear.modul.ts");
    /* harmony import */


    var _products_search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./products-search-routing.module */
    "./src/app/products/products-search/module/products-search-routing.module.ts");

    var ProductsSearchModule = function ProductsSearchModule() {
      _classCallCheck(this, ProductsSearchModule);
    };

    ProductsSearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_products_search_component__WEBPACK_IMPORTED_MODULE_3__["ProductsSearchComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__["ShearModule"], _products_search_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsSearchRoutingModule"]],
      exports: [_component_products_search_component__WEBPACK_IMPORTED_MODULE_3__["ProductsSearchComponent"]]
    })], ProductsSearchModule);
    /***/
  },

  /***/
  "./src/app/register/component/register.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/register/component/register.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterComponentRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "componentform{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    background-color:black;\r\n    color:#ffff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvY29tcG9uZW50L3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvY29tcG9uZW50L3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjb21wb25lbnRmb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgY29sb3I6I2ZmZmY7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/register/component/register.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/register/component/register.component.ts ***!
    \**********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterComponentRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modals_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modals/user */
    "./src/app/modals/user.ts");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(authenticationService) {
        _classCallCheck(this, RegisterComponent);

        this.authenticationService = authenticationService;
        this.user = new src_app_modals_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
      }

      _createClass(RegisterComponent, [{
        key: "userRegisterSubmitForm",
        value: function userRegisterSubmitForm() {
          if (this.user.password === this.passwordConfirm) {
            this.authenticationService.register(this.user);
          } else {
            alert('Confirm Password Not Match');
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/component/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/component/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/register/module/register/register-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/register/module/register/register-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: RegisterRoutingModule */

  /***/
  function srcAppRegisterModuleRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function () {
      return RegisterRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../component/register.component */
    "./src/app/register/component/register.component.ts");

    var routes = [{
      path: '',
      component: _component_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }];

    var RegisterRoutingModule = function RegisterRoutingModule() {
      _classCallCheck(this, RegisterRoutingModule);
    };

    RegisterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterRoutingModule);
    /***/
  },

  /***/
  "./src/app/register/module/register/register.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/register/module/register/register.module.ts ***!
    \*************************************************************/

  /*! exports provided: RegisterModule */

  /***/
  function srcAppRegisterModuleRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterModule", function () {
      return RegisterModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _component_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../component/register.component */
    "./src/app/register/component/register.component.ts");
    /* harmony import */


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/register/module/register/register-routing.module.ts");
    /* harmony import */


    var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shear.modul */
    "./src/app/shear.modul.ts");

    var RegisterModule = function RegisterModule() {
      _classCallCheck(this, RegisterModule);
    };

    RegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterRoutingModule"], src_app_shear_modul__WEBPACK_IMPORTED_MODULE_5__["ShearModule"]],
      exports: [_register_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterRoutingModule"], _component_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]]
    })], RegisterModule);
    /***/
  },

  /***/
  "./src/app/search-product/component/search-product.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/search-product/component/search-product.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchProductComponentSearchProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1wcm9kdWN0L2NvbXBvbmVudC9zZWFyY2gtcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/search-product/component/search-product.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/search-product/component/search-product.component.ts ***!
    \**********************************************************************/

  /*! exports provided: SearchProductComponent */

  /***/
  function srcAppSearchProductComponentSearchProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchProductComponent", function () {
      return SearchProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SearchProductComponent =
    /*#__PURE__*/
    function () {
      function SearchProductComponent(route) {
        _classCallCheck(this, SearchProductComponent);

        this.route = route;
      }

      _createClass(SearchProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "searchProduct",
        value: function searchProduct() {
          this.route.navigate(["/products/search/".concat(this.searchFiled, "/").concat(this.searchValue)]);
        }
      }]);

      return SearchProductComponent;
    }();

    SearchProductComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SearchProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search-product/component/search-product.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-product.component.css */
      "./src/app/search-product/component/search-product.component.css")).default]
    })], SearchProductComponent);
    /***/
  },

  /***/
  "./src/app/search-product/module/search-product.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/search-product/module/search-product.module.ts ***!
    \****************************************************************/

  /*! exports provided: SearchProductModule */

  /***/
  function srcAppSearchProductModuleSearchProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchProductModule", function () {
      return SearchProductModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shear.modul */
    "./src/app/shear.modul.ts");
    /* harmony import */


    var _component_search_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../component/search-product.component */
    "./src/app/search-product/component/search-product.component.ts");

    var SearchProductModule = function SearchProductModule() {
      _classCallCheck(this, SearchProductModule);
    };

    SearchProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_search_product_component__WEBPACK_IMPORTED_MODULE_4__["SearchProductComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shear_modul__WEBPACK_IMPORTED_MODULE_3__["ShearModule"]],
      exports: [_component_search_product_component__WEBPACK_IMPORTED_MODULE_4__["SearchProductComponent"]]
    })], SearchProductModule);
    /***/
  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AuthGuardService =
    /*#__PURE__*/
    function () {
      function AuthGuardService(router) {
        _classCallCheck(this, AuthGuardService);

        this.router = router;
        this.authorization$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(AuthGuardService, [{
        key: "checkLogin",
        value: function checkLogin() {
          return this.authorization$;
        }
      }, {
        key: "userSingIn",
        value: function userSingIn() {
          this.authorization = true;
          this.authorization$.next(true);
        }
      }, {
        key: "userLogout",
        value: function userLogout() {
          this.authorization = false;
          this.authorization$.next(false);
        }
      }, {
        key: "canActivate",
        value: function canActivate() {
          if (this.authorization === true) {
            return true;
          }

          this.router.navigate(['login']);
          return false;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http, authGuardService, route) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.authGuardService = authGuardService;
        this.route = route;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({});
      }

      _createClass(AuthenticationService, [{
        key: "getUser",
        value: function getUser() {
          return this.user$;
        }
      }, {
        key: "register",
        value: function register(user) {
          var _this5 = this;

          this.http.post('https://test-node-app0.herokuapp.com/api/authentication/register', user).subscribe(function (newUser) {
            console.log(newUser);

            _this5.user$.next(newUser);

            _this5.user = newUser;

            _this5.authGuardService.userSingIn();

            alert('Register Success!');

            _this5.route.navigate(['/products/all-products']);
          });
        }
      }, {
        key: "login",
        value: function login(user) {
          var _this6 = this;

          this.http.post('https://test-node-app0.herokuapp.com/api/authentication/login', user).subscribe(function (newUser) {
            console.log(newUser);

            _this6.user$.next(newUser);

            _this6.user = newUser;

            _this6.authGuardService.userSingIn();

            alert('Login Success!');

            _this6.route.navigate(['/products/all-products']);
          });
        }
      }, {
        key: "loguot",
        value: function loguot() {
          this.authGuardService.userLogout();
          this.route.navigate(['/login']);
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/category.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/category.service.ts ***!
    \**********************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppServicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CategoryService =
    /*#__PURE__*/
    function () {
      function CategoryService(http) {
        _classCallCheck(this, CategoryService);

        this.http = http;
      }

      _createClass(CategoryService, [{
        key: "getAllCategories",
        value: function getAllCategories() {
          return this.http.get('https://test-node-app0.herokuapp.com/api/category/all-categoies');
        }
      }, {
        key: "getCategoryByName",
        value: function getCategoryByName(categoryName) {
          return this.http.get("https://test-node-app0.herokuapp.com/api/category/name/".concat(categoryName));
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CategoryService);
    /***/
  },

  /***/
  "./src/app/services/products.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/products.service.ts ***!
    \**********************************************/

  /*! exports provided: ProductsService */

  /***/
  function srcAppServicesProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
      return ProductsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ProductsService =
    /*#__PURE__*/
    function () {
      function ProductsService(http) {
        _classCallCheck(this, ProductsService);

        this.http = http;
      }

      _createClass(ProductsService, [{
        key: "getAllProducts",
        value: function getAllProducts() {
          return this.http.get('https://test-node-app0.herokuapp.com/api/product/all-products');
        }
      }, {
        key: "getProductById",
        value: function getProductById(productId) {
          return this.http.get('https://test-node-app0.herokuapp.com/api/product/id/' + productId);
        }
      }, {
        key: "getProductsByCategory",
        value: function getProductsByCategory(category) {
          return this.http.get("https://test-node-app0.herokuapp.com/api/product/category/".concat(category));
        }
      }, {
        key: "getProductBySearch",
        value: function getProductBySearch(filed, searchValue) {
          return this.http.get("https://test-node-app0.herokuapp.com/api/product/search/".concat(filed, "/").concat(searchValue));
        }
      }, {
        key: "getAllUserProduts",
        value: function getAllUserProduts(userId) {
          return this.http.get("https://test-node-app0.herokuapp.com/api/product/user/".concat(userId));
        }
      }, {
        key: "addProdut",
        value: function addProdut(product) {
          return this.http.post('https://test-node-app0.herokuapp.com/api/product/add', product);
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(product, productId) {
          return this.http.put('https://test-node-app0.herokuapp.com/api/product/' + productId, product);
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(productId) {
          return this.http.delete("https://test-node-app0.herokuapp.com/api/product/".concat(productId));
        }
      }]);

      return ProductsService;
    }();

    ProductsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductsService);
    /***/
  },

  /***/
  "./src/app/shear.modul.ts":
  /*!********************************!*\
    !*** ./src/app/shear.modul.ts ***!
    \********************************/

  /*! exports provided: ShearModule */

  /***/
  function srcAppShearModulTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShearModule", function () {
      return ShearModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _products_product_format_module_product_format_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./products/product-format/module/product-format.module */
    "./src/app/products/product-format/module/product-format.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");

    var ShearModule = function ShearModule() {
      _classCallCheck(this, ShearModule);
    };

    ShearModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]],
      exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngualrMaterialModule"], _products_product_format_module_product_format_module__WEBPACK_IMPORTED_MODULE_5__["ProductFormatModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]]
    })], ShearModule);
    /***/
  },

  /***/
  "./src/app/user-product/delete-product/component/delete-product.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/user-product/delete-product/component/delete-product.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProductDeleteProductComponentDeleteProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9kdWN0L2RlbGV0ZS1wcm9kdWN0L2NvbXBvbmVudC9kZWxldGUtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvdXNlci1wcm9kdWN0L2RlbGV0ZS1wcm9kdWN0L2NvbXBvbmVudC9kZWxldGUtcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user-product/delete-product/component/delete-product.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/user-product/delete-product/component/delete-product.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: DeleteProductComponent */

  /***/
  function srcAppUserProductDeleteProductComponentDeleteProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteProductComponent", function () {
      return DeleteProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/products.service */
    "./src/app/services/products.service.ts");

    var DeleteProductComponent =
    /*#__PURE__*/
    function () {
      function DeleteProductComponent(authenticationService, productsService) {
        _classCallCheck(this, DeleteProductComponent);

        this.authenticationService = authenticationService;
        this.productsService = productsService;
      }

      _createClass(DeleteProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.displayedColumns = ['name', 'location', 'quantities', 'category', 'img', 'delete'];
          this.user = this.authenticationService.user;

          if (this.user) {
            this.products$ = this.productsService.getAllUserProduts(this.user._id);
          }
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(productId) {
          var _this7 = this;

          this.productsService.deleteProduct(productId).subscribe(function () {
            alert('you deteted the prodct');
            _this7.products$ = _this7.productsService.getAllUserProduts(_this7.user._id);
          });
        }
      }]);

      return DeleteProductComponent;
    }();

    DeleteProductComponent.ctorParameters = function () {
      return [{
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
      }];
    };

    DeleteProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delete-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./delete-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/delete-product/component/delete-product.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./delete-product.component.css */
      "./src/app/user-product/delete-product/component/delete-product.component.css")).default]
    })], DeleteProductComponent);
    /***/
  },

  /***/
  "./src/app/user-product/delete-product/module/delete-product-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/user-product/delete-product/module/delete-product-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: DeleteProductRoutingModule */

  /***/
  function srcAppUserProductDeleteProductModuleDeleteProductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteProductRoutingModule", function () {
      return DeleteProductRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_delete_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/delete-product.component */
    "./src/app/user-product/delete-product/component/delete-product.component.ts");

    var routes = [{
      path: '',
      component: _component_delete_product_component__WEBPACK_IMPORTED_MODULE_3__["DeleteProductComponent"]
    }];

    var DeleteProductRoutingModule = function DeleteProductRoutingModule() {
      _classCallCheck(this, DeleteProductRoutingModule);
    };

    DeleteProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeleteProductRoutingModule);
    /***/
  },

  /***/
  "./src/app/user-product/delete-product/module/delete-product.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/user-product/delete-product/module/delete-product.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: DeleteProductModule */

  /***/
  function srcAppUserProductDeleteProductModuleDeleteProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteProductModule", function () {
      return DeleteProductModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _delete_product_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./delete-product-routing.module */
    "./src/app/user-product/delete-product/module/delete-product-routing.module.ts");
    /* harmony import */


    var _component_delete_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/delete-product.component */
    "./src/app/user-product/delete-product/component/delete-product.component.ts");
    /* harmony import */


    var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shear.modul */
    "./src/app/shear.modul.ts");

    var DeleteProductModule = function DeleteProductModule() {
      _classCallCheck(this, DeleteProductModule);
    };

    DeleteProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_delete_product_component__WEBPACK_IMPORTED_MODULE_3__["DeleteProductComponent"]],
      imports: [src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__["ShearModule"], _delete_product_routing_module__WEBPACK_IMPORTED_MODULE_2__["DeleteProductRoutingModule"]],
      exports: [_component_delete_product_component__WEBPACK_IMPORTED_MODULE_3__["DeleteProductComponent"]]
    })], DeleteProductModule);
    /***/
  },

  /***/
  "./src/app/user-product/product-update/component/product-update.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/user-product/product-update/component/product-update.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProductProductUpdateComponentProductUpdateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\r\n    width: 100%;\r\n  }\r\n  mat-error{\r\n    display:fixed ;\r\n    color: red;\r\n    background-color: #ffffff;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9kdWN0L3Byb2R1Y3QtdXBkYXRlL2NvbXBvbmVudC9wcm9kdWN0LXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZHVjdC9wcm9kdWN0LXVwZGF0ZS9jb21wb25lbnQvcHJvZHVjdC11cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBtYXQtZXJyb3J7XHJcbiAgICBkaXNwbGF5OmZpeGVkIDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user-product/product-update/component/product-update.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/user-product/product-update/component/product-update.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ProductUpdateComponent */

  /***/
  function srcAppUserProductProductUpdateComponentProductUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductUpdateComponent", function () {
      return ProductUpdateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/category.service */
    "./src/app/services/category.service.ts");
    /* harmony import */


    var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_modals_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/modals/product */
    "./src/app/modals/product.ts");

    var ProductUpdateComponent =
    /*#__PURE__*/
    function () {
      function ProductUpdateComponent(authenticationService, productsService, categoryService, productService, router) {
        _classCallCheck(this, ProductUpdateComponent);

        this.authenticationService = authenticationService;
        this.productsService = productsService;
        this.categoryService = categoryService;
        this.productService = productService;
        this.router = router;
        this.product = new src_app_modals_product__WEBPACK_IMPORTED_MODULE_6__["Product"]();
        this.productsFormData = [];
        this.productEdd$CheckSubscription = false;
        this.imgURL = [];
      }

      _createClass(ProductUpdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.displayedColumns = ['name', 'location', 'quantities', 'category', 'img', 'update'];
          this.user = this.authenticationService.user;
          this.categories$ = this.categoryService.getAllCategories();

          if (this.user) {
            this.productsService.getAllUserProduts(this.user._id).subscribe(function (products) {
              _this8.products = products;
            });
          }
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event, productArrayIndex) {
          var _this9 = this;

          if (this.productsFormData[productArrayIndex] === undefined) {
            this.productsFormData[productArrayIndex] = new FormData();
            console.log(productArrayIndex);
          }

          this.productsFormData[productArrayIndex].append('img', event.target.files[0], event.target.files[0].name);
          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);

          reader.onload = function (_event) {
            _this9.imgURL[productArrayIndex] = reader.result;
          };
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(event) {
          console.log(event);
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(productId, productIndexInProductsArray) {
          var _this10 = this;

          console.log(this.products[productIndexInProductsArray]);

          if (this.products[productIndexInProductsArray].name.length < 6 || this.products[productIndexInProductsArray].location.length < 6) {
            alert("Prodcut location and Product name must be at least 6 characters");
          } else {
            console.log(this.productsFormData);

            if (this.productsFormData[productIndexInProductsArray] === undefined) {
              this.productsFormData[productIndexInProductsArray] = new FormData();
            }

            this.productsFormData[productIndexInProductsArray].append('name', this.products[productIndexInProductsArray].name);
            this.productsFormData[productIndexInProductsArray].append('location', this.products[productIndexInProductsArray].location);
            this.productsFormData[productIndexInProductsArray].append('quantities', this.products[productIndexInProductsArray].quantities.toString());
            this.productsFormData[productIndexInProductsArray].append('user', this.user._id);
            this.productsFormData[productIndexInProductsArray].append('category', this.products[productIndexInProductsArray].category._id);
            this.productEdd$ = this.productService.updateProduct(this.productsFormData[productIndexInProductsArray], productId).subscribe(function (product) {
              _this10.productEdd$CheckSubscription = true;
              alert("congratulation ".concat(_this10.user.userName, " your product ").concat(product.name, " is successfully updated"));
              console.log(_this10.products[productIndexInProductsArray]);
              console.log(_this10.productsFormData[productIndexInProductsArray]);
              console.log(_this10.productsFormData);
            });
            this.productsFormData[productIndexInProductsArray] = new FormData();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.productEdd$CheckSubscription === true) {
            this.productEdd$.unsubscribe();
          }
        }
      }]);

      return ProductUpdateComponent;
    }();

    ProductUpdateComponent.ctorParameters = function () {
      return [{
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
      }, {
        type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ProductUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-update',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-update.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/product-update/component/product-update.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-update.component.css */
      "./src/app/user-product/product-update/component/product-update.component.css")).default]
    })], ProductUpdateComponent);
    /***/
  },

  /***/
  "./src/app/user-product/product-update/module/product-update-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/user-product/product-update/module/product-update-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ProductUpdateRoutingModule */

  /***/
  function srcAppUserProductProductUpdateModuleProductUpdateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductUpdateRoutingModule", function () {
      return ProductUpdateRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_product_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/product-update.component */
    "./src/app/user-product/product-update/component/product-update.component.ts");

    var routes = [{
      path: '',
      component: _component_product_update_component__WEBPACK_IMPORTED_MODULE_3__["ProductUpdateComponent"]
    }];

    var ProductUpdateRoutingModule = function ProductUpdateRoutingModule() {
      _classCallCheck(this, ProductUpdateRoutingModule);
    };

    ProductUpdateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductUpdateRoutingModule);
    /***/
  },

  /***/
  "./src/app/user-product/product-update/module/product-update.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/user-product/product-update/module/product-update.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ProductUpdateModule */

  /***/
  function srcAppUserProductProductUpdateModuleProductUpdateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductUpdateModule", function () {
      return ProductUpdateModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _product_update_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./product-update-routing.module */
    "./src/app/user-product/product-update/module/product-update-routing.module.ts");
    /* harmony import */


    var _component_product_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/product-update.component */
    "./src/app/user-product/product-update/component/product-update.component.ts");
    /* harmony import */


    var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shear.modul */
    "./src/app/shear.modul.ts");

    var ProductUpdateModule = function ProductUpdateModule() {
      _classCallCheck(this, ProductUpdateModule);
    };

    ProductUpdateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_product_update_component__WEBPACK_IMPORTED_MODULE_3__["ProductUpdateComponent"]],
      imports: [src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__["ShearModule"], _product_update_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductUpdateRoutingModule"]],
      exports: [_component_product_update_component__WEBPACK_IMPORTED_MODULE_3__["ProductUpdateComponent"]]
    })], ProductUpdateModule);
    /***/
  },

  /***/
  "./src/app/user-product/user-add-product/component/user-add-product.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/user-product/user-add-product/component/user-add-product.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProductUserAddProductComponentUserAddProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-error{\r\n    color: red;\r\n    background-color: #ffffff;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9kdWN0L3VzZXItYWRkLXByb2R1Y3QvY29tcG9uZW50L3VzZXItYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2R1Y3QvdXNlci1hZGQtcHJvZHVjdC9jb21wb25lbnQvdXNlci1hZGQtcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWVycm9ye1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user-product/user-add-product/component/user-add-product.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/user-product/user-add-product/component/user-add-product.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: UserAddProductComponent */

  /***/
  function srcAppUserProductUserAddProductComponentUserAddProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserAddProductComponent", function () {
      return UserAddProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/category.service */
    "./src/app/services/category.service.ts");
    /* harmony import */


    var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_modals_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/modals/product */
    "./src/app/modals/product.ts");

    var UserAddProductComponent =
    /*#__PURE__*/
    function () {
      function UserAddProductComponent(authenticationService, categoryService, productService, router) {
        _classCallCheck(this, UserAddProductComponent);

        this.authenticationService = authenticationService;
        this.categoryService = categoryService;
        this.productService = productService;
        this.router = router;
        this.product = new src_app_modals_product__WEBPACK_IMPORTED_MODULE_6__["Product"]();
        this.selectedFile = null;
        this.productEdd$CheckSubscription = false;
      }

      _createClass(UserAddProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.authenticationService.user;
          this.categories$ = this.categoryService.getAllCategories();
        }
      }, {
        key: "userAddingProduct",
        value: function userAddingProduct() {
          var _this11 = this;

          this.productFormData = new FormData();
          this.productFormData.append('img', this.selectedFile, this.selectedFile.name);
          this.productFormData.append('name', this.product.name);
          this.productFormData.append('location', this.product.location);
          this.productFormData.append('quantities', this.product.quantities.toString());
          this.productFormData.append('user', this.user._id);
          this.productFormData.append('category', this.product.category.toString());
          this.productEdd$ = this.productService.addProdut(this.productFormData).subscribe(function (product) {
            _this11.productEdd$CheckSubscription = true;
            alert("congratulation ".concat(_this11.user.userName, " your product ").concat(product.name, " is successfully uploaded"));

            _this11.router.navigate(['user/products']);
          });
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          this.selectedFile = event.target.files[0];
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.productEdd$CheckSubscription === true) {
            this.productEdd$.unsubscribe();
          }
        }
      }]);

      return UserAddProductComponent;
    }();

    UserAddProductComponent.ctorParameters = function () {
      return [{
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    UserAddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-add-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-add-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/user-add-product/component/user-add-product.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-add-product.component.css */
      "./src/app/user-product/user-add-product/component/user-add-product.component.css")).default]
    })], UserAddProductComponent);
    /***/
  },

  /***/
  "./src/app/user-product/user-add-product/module/user-add-product-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/user-product/user-add-product/module/user-add-product-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: UserAddProductRoutingModule */

  /***/
  function srcAppUserProductUserAddProductModuleUserAddProductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserAddProductRoutingModule", function () {
      return UserAddProductRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_user_add_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/user-add-product.component */
    "./src/app/user-product/user-add-product/component/user-add-product.component.ts");

    var routes = [{
      path: '',
      component: _component_user_add_product_component__WEBPACK_IMPORTED_MODULE_3__["UserAddProductComponent"]
    }];

    var UserAddProductRoutingModule = function UserAddProductRoutingModule() {
      _classCallCheck(this, UserAddProductRoutingModule);
    };

    UserAddProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserAddProductRoutingModule);
    /***/
  },

  /***/
  "./src/app/user-product/user-add-product/module/user-add-product.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/user-product/user-add-product/module/user-add-product.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: UserAddProductModule */

  /***/
  function srcAppUserProductUserAddProductModuleUserAddProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserAddProductModule", function () {
      return UserAddProductModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_add_product_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-add-product-routing.module */
    "./src/app/user-product/user-add-product/module/user-add-product-routing.module.ts");
    /* harmony import */


    var _component_user_add_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/user-add-product.component */
    "./src/app/user-product/user-add-product/component/user-add-product.component.ts");
    /* harmony import */


    var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shear.modul */
    "./src/app/shear.modul.ts");

    var UserAddProductModule = function UserAddProductModule() {
      _classCallCheck(this, UserAddProductModule);
    };

    UserAddProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_user_add_product_component__WEBPACK_IMPORTED_MODULE_3__["UserAddProductComponent"]],
      imports: [src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__["ShearModule"], _user_add_product_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserAddProductRoutingModule"]],
      exports: [_component_user_add_product_component__WEBPACK_IMPORTED_MODULE_3__["UserAddProductComponent"]]
    })], UserAddProductModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\adile\OneDrive\שולחן העבודה\תכנות\פרוייקטים\angular\stock-sale\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map