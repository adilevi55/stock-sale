function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-product-user-products-module-user-products-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/user-products/component/user-products.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/user-products/component/user-products.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserProductUserProductsComponentUserProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-product-format [products]=\"products$|async\"></app-product-format>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/user-product/user-products/component/user-products.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/user-product/user-products/component/user-products.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProductUserProductsComponentUserProductsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZHVjdC91c2VyLXByb2R1Y3RzL2NvbXBvbmVudC91c2VyLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user-product/user-products/component/user-products.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/user-product/user-products/component/user-products.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: UserProductsComponent */

  /***/
  function srcAppUserProductUserProductsComponentUserProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProductsComponent", function () {
      return UserProductsComponent;
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

    var UserProductsComponent =
    /*#__PURE__*/
    function () {
      function UserProductsComponent(authenticationService, productsService) {
        _classCallCheck(this, UserProductsComponent);

        this.authenticationService = authenticationService;
        this.productsService = productsService;
      }

      _createClass(UserProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.authenticationService.user;

          if (this.user) {
            this.products$ = this.productsService.getAllUserProduts(this.user._id);
          }
        }
      }]);

      return UserProductsComponent;
    }();

    UserProductsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
      }];
    };

    UserProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-product/user-products/component/user-products.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-products.component.css */
      "./src/app/user-product/user-products/component/user-products.component.css")).default]
    })], UserProductsComponent);
    /***/
  },

  /***/
  "./src/app/user-product/user-products/module/user-products-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/user-product/user-products/module/user-products-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: UserProductsRoutingModule */

  /***/
  function srcAppUserProductUserProductsModuleUserProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProductsRoutingModule", function () {
      return UserProductsRoutingModule;
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


    var _component_user_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/user-products.component */
    "./src/app/user-product/user-products/component/user-products.component.ts");

    var routes = [{
      path: '',
      component: _component_user_products_component__WEBPACK_IMPORTED_MODULE_3__["UserProductsComponent"]
    }];

    var UserProductsRoutingModule = function UserProductsRoutingModule() {
      _classCallCheck(this, UserProductsRoutingModule);
    };

    UserProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
    })], UserProductsRoutingModule);
    /***/
  },

  /***/
  "./src/app/user-product/user-products/module/user-products.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/user-product/user-products/module/user-products.module.ts ***!
    \***************************************************************************/

  /*! exports provided: UserProductsModule */

  /***/
  function srcAppUserProductUserProductsModuleUserProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProductsModule", function () {
      return UserProductsModule;
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


    var _user_products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-products-routing.module */
    "./src/app/user-product/user-products/module/user-products-routing.module.ts");
    /* harmony import */


    var _component_user_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../component/user-products.component */
    "./src/app/user-product/user-products/component/user-products.component.ts");

    var UserProductsModule = function UserProductsModule() {
      _classCallCheck(this, UserProductsModule);
    };

    UserProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_user_products_component__WEBPACK_IMPORTED_MODULE_4__["UserProductsComponent"]],
      imports: [src_app_shear_modul__WEBPACK_IMPORTED_MODULE_2__["ShearModule"], _user_products_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserProductsRoutingModule"]],
      exports: [_user_products_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserProductsRoutingModule"], _component_user_products_component__WEBPACK_IMPORTED_MODULE_4__["UserProductsComponent"]]
    })], UserProductsModule);
    /***/
  }
}]);
//# sourceMappingURL=user-product-user-products-module-user-products-module-es5.js.map