function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-dashboard-module-user-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/component/user-dashboard.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/component/user-dashboard.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserDashboardComponentUserDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-user-dashboard-navbar></app-user-dashboard-navbar>\r\n<app-user-dashboard-details></app-user-dashboard-details>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/user-dashboard-details/component/user-dashboard-details.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/user-dashboard-details/component/user-dashboard-details.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserDashboardUserDashboardDetailsComponentUserDashboardDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form #formInfo=\"ngForm\">\r\n    \r\n    <mat-form-field>\r\n        <input matInput class=\"input-field\"  minlength=\"3\" maxlength=\"15\"\r\n        #firstNameInfo=\"ngModel\" [(ngModel)]=\"user.firstName\" name=\"firstName\" \r\n        type=\"text\"  placeholder=\"First Name\">\r\n        <mat-error *ngIf=\"firstNameInfo.errors?.minlength && firstNameInfo.touched\">\r\n            First name too short.<br>\r\n            First name must be at least 3 characters\r\n        </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n        <input matInput class=\"input-field\"  minlength=\"3\" maxlength=\"15\"\r\n        #lastNameInfo=\"ngModel\" [(ngModel)]=\"user.lastName\" name=\"lastName\" \r\n        type=\"text\"  placeholder=\"Last Name\">\r\n        <mat-error *ngIf=\"lastNameInfo.errors?.minlength && lastNameInfo.touched\">\r\n            Last name too short.<br>\r\n            Last name must be at least 3 characters\r\n        </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n        <input matInput class=\"input-field\"  minlength=\"3\" maxlength=\"15\"\r\n        #phoneInfo=\"ngModel\" [(ngModel)]=\"user.phone\" name=\"phone\" \r\n        type=\"tel\"  placeholder=\"Phone Number\">\r\n    </mat-form-field>\r\n\r\n    <button (click)=\"userUpdateDetails()\"\r\n    [disabled]=\"formInfo.invalid\"\r\n    >Update User Details</button>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/user-dashboard-navbar/component/user-dashboard-navbar.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/user-dashboard-navbar/component/user-dashboard-navbar.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserDashboardUserDashboardNavbarComponentUserDashboardNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>user-dashboard-navbar works!</p>\r\n";
    /***/
  },

  /***/
  "./src/app/modals/user-no-password-email.ts":
  /*!**************************************************!*\
    !*** ./src/app/modals/user-no-password-email.ts ***!
    \**************************************************/

  /*! exports provided: UserNoPasswordEmail */

  /***/
  function srcAppModalsUserNoPasswordEmailTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserNoPasswordEmail", function () {
      return UserNoPasswordEmail;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var UserNoPasswordEmail = function UserNoPasswordEmail(firstName, lastName, phone, _id) {
      _classCallCheck(this, UserNoPasswordEmail);

      this.firstName = firstName;
      this.lastName = lastName;
      this.phone = phone;
      this._id = _id;
    };
    /***/

  },

  /***/
  "./src/app/services/user-details.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/user-details.service.ts ***!
    \**************************************************/

  /*! exports provided: UserDetailsService */

  /***/
  function srcAppServicesUserDetailsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailsService", function () {
      return UserDetailsService;
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

    var UserDetailsService =
    /*#__PURE__*/
    function () {
      function UserDetailsService(http) {
        _classCallCheck(this, UserDetailsService);

        this.http = http;
      }

      _createClass(UserDetailsService, [{
        key: "userUpdateDetails",
        value: function userUpdateDetails(user) {
          return this.http.put('https://test-node-app0.herokuapp.com/api/user/details', user);
        }
      }]);

      return UserDetailsService;
    }();

    UserDetailsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserDetailsService);
    /***/
  },

  /***/
  "./src/app/user-dashboard/component/user-dashboard.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/user-dashboard/component/user-dashboard.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserDashboardComponentUserDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGFzaGJvYXJkL2NvbXBvbmVudC91c2VyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user-dashboard/component/user-dashboard.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/user-dashboard/component/user-dashboard.component.ts ***!
    \**********************************************************************/

  /*! exports provided: UserDashboardComponent */

  /***/
  function srcAppUserDashboardComponentUserDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function () {
      return UserDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserDashboardComponent =
    /*#__PURE__*/
    function () {
      function UserDashboardComponent() {
        _classCallCheck(this, UserDashboardComponent);
      }

      _createClass(UserDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserDashboardComponent;
    }();

    UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/component/user-dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-dashboard.component.css */
      "./src/app/user-dashboard/component/user-dashboard.component.css")).default]
    })], UserDashboardComponent);
    /***/
  },

  /***/
  "./src/app/user-dashboard/module/user-dashboard-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/user-dashboard/module/user-dashboard-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: UserDashboardRoutingModule */

  /***/
  function srcAppUserDashboardModuleUserDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardRoutingModule", function () {
      return UserDashboardRoutingModule;
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


    var _component_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/user-dashboard.component */
    "./src/app/user-dashboard/component/user-dashboard.component.ts");

    var routes = [{
      path: '',
      component: _component_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"]
    }];

    var UserDashboardRoutingModule = function UserDashboardRoutingModule() {
      _classCallCheck(this, UserDashboardRoutingModule);
    };

    UserDashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserDashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/user-dashboard/module/user-dashboard.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/user-dashboard/module/user-dashboard.module.ts ***!
    \****************************************************************/

  /*! exports provided: UserDashboardModule */

  /***/
  function srcAppUserDashboardModuleUserDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardModule", function () {
      return UserDashboardModule;
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


    var _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-dashboard-routing.module */
    "./src/app/user-dashboard/module/user-dashboard-routing.module.ts");
    /* harmony import */


    var _user_dashboard_details_module_user_dashboard_details_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-dashboard-details/module/user-dashboard-details.module */
    "./src/app/user-dashboard/user-dashboard-details/module/user-dashboard-details.module.ts");
    /* harmony import */


    var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shear.modul */
    "./src/app/shear.modul.ts");
    /* harmony import */


    var _user_dashboard_navbar_module_user_dashboard_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../user-dashboard-navbar/module/user-dashboard-navbar.module */
    "./src/app/user-dashboard/user-dashboard-navbar/module/user-dashboard-navbar.module.ts");
    /* harmony import */


    var _component_user_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../component/user-dashboard.component */
    "./src/app/user-dashboard/component/user-dashboard.component.ts");

    var UserDashboardModule = function UserDashboardModule() {
      _classCallCheck(this, UserDashboardModule);
    };

    UserDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_user_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["UserDashboardComponent"]],
      imports: [src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__["ShearModule"], _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserDashboardRoutingModule"], _user_dashboard_details_module_user_dashboard_details_module__WEBPACK_IMPORTED_MODULE_3__["UserDashboardDetailsModule"], _user_dashboard_navbar_module_user_dashboard_navbar_module__WEBPACK_IMPORTED_MODULE_5__["UserDashboardNavbarModule"]]
    })], UserDashboardModule);
    /***/
  },

  /***/
  "./src/app/user-dashboard/user-dashboard-details/component/user-dashboard-details.component.css":
  /*!******************************************************************************************************!*\
    !*** ./src/app/user-dashboard/user-dashboard-details/component/user-dashboard-details.component.css ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserDashboardUserDashboardDetailsComponentUserDashboardDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLWRldGFpbHMvY29tcG9uZW50L3VzZXItZGFzaGJvYXJkLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user-dashboard/user-dashboard-details/component/user-dashboard-details.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/user-dashboard/user-dashboard-details/component/user-dashboard-details.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: UserDashboardDetailsComponent */

  /***/
  function srcAppUserDashboardUserDashboardDetailsComponentUserDashboardDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardDetailsComponent", function () {
      return UserDashboardDetailsComponent;
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


    var src_app_modals_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/modals/user */
    "./src/app/modals/user.ts");
    /* harmony import */


    var src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user-details.service */
    "./src/app/services/user-details.service.ts");
    /* harmony import */


    var src_app_modals_user_no_password_email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/modals/user-no-password-email */
    "./src/app/modals/user-no-password-email.ts");

    var UserDashboardDetailsComponent =
    /*#__PURE__*/
    function () {
      function UserDashboardDetailsComponent(authenticationService, userDetailsService) {
        _classCallCheck(this, UserDashboardDetailsComponent);

        this.authenticationService = authenticationService;
        this.userDetailsService = userDetailsService;
        this.user = new src_app_modals_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.cheackUserUpdated = false;
        this.userNoPasswordEmail = new src_app_modals_user_no_password_email__WEBPACK_IMPORTED_MODULE_5__["UserNoPasswordEmail"]();
      }

      _createClass(UserDashboardDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.authenticationService.user;
        }
      }, {
        key: "userUpdateDetails",
        value: function userUpdateDetails() {
          var _this = this;

          console.log(this.user);
          this.userNoPasswordEmail = {};
          this.userNoPasswordEmail._id = this.user._id;
          this.userNoPasswordEmail.firstName = this.user.firstName;
          this.userNoPasswordEmail.lastName = this.user.lastName;
          this.userNoPasswordEmail.phone = this.user.phone;
          this.userSub = this.userDetailsService.userUpdateDetails(this.userNoPasswordEmail).subscribe(function (newUser) {
            _this.user = newUser;
            alert('Hi ' + _this.user.userName + " your user details has changed");
            _this.cheackUserUpdated = true;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.cheackUserUpdated === true) {
            this.userSub.unsubscribe();
          }
        }
      }]);

      return UserDashboardDetailsComponent;
    }();

    UserDashboardDetailsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_4__["UserDetailsService"]
      }];
    };

    UserDashboardDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-dashboard-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-dashboard-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/user-dashboard-details/component/user-dashboard-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-dashboard-details.component.css */
      "./src/app/user-dashboard/user-dashboard-details/component/user-dashboard-details.component.css")).default]
    })], UserDashboardDetailsComponent);
    /***/
  },

  /***/
  "./src/app/user-dashboard/user-dashboard-details/module/user-dashboard-details-routing.module.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/user-dashboard/user-dashboard-details/module/user-dashboard-details-routing.module.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: UserDashboardDetailsRoutingModule */

  /***/
  function srcAppUserDashboardUserDashboardDetailsModuleUserDashboardDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardDetailsRoutingModule", function () {
      return UserDashboardDetailsRoutingModule;
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

    var routes = [];

    var UserDashboardDetailsRoutingModule = function UserDashboardDetailsRoutingModule() {
      _classCallCheck(this, UserDashboardDetailsRoutingModule);
    };

    UserDashboardDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserDashboardDetailsRoutingModule);
    /***/
  },

  /***/
  "./src/app/user-dashboard/user-dashboard-details/module/user-dashboard-details.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/user-dashboard/user-dashboard-details/module/user-dashboard-details.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: UserDashboardDetailsModule */

  /***/
  function srcAppUserDashboardUserDashboardDetailsModuleUserDashboardDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardDetailsModule", function () {
      return UserDashboardDetailsModule;
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


    var _user_dashboard_details_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-dashboard-details-routing.module */
    "./src/app/user-dashboard/user-dashboard-details/module/user-dashboard-details-routing.module.ts");
    /* harmony import */


    var _component_user_dashboard_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/user-dashboard-details.component */
    "./src/app/user-dashboard/user-dashboard-details/component/user-dashboard-details.component.ts");
    /* harmony import */


    var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shear.modul */
    "./src/app/shear.modul.ts");

    var UserDashboardDetailsModule = function UserDashboardDetailsModule() {
      _classCallCheck(this, UserDashboardDetailsModule);
    };

    UserDashboardDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_user_dashboard_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardDetailsComponent"]],
      imports: [src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__["ShearModule"], _user_dashboard_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserDashboardDetailsRoutingModule"]],
      exports: [_component_user_dashboard_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardDetailsComponent"]]
    })], UserDashboardDetailsModule);
    /***/
  },

  /***/
  "./src/app/user-dashboard/user-dashboard-navbar/component/user-dashboard-navbar.component.css":
  /*!****************************************************************************************************!*\
    !*** ./src/app/user-dashboard/user-dashboard-navbar/component/user-dashboard-navbar.component.css ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserDashboardUserDashboardNavbarComponentUserDashboardNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLW5hdmJhci9jb21wb25lbnQvdXNlci1kYXNoYm9hcmQtbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user-dashboard/user-dashboard-navbar/component/user-dashboard-navbar.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/user-dashboard/user-dashboard-navbar/component/user-dashboard-navbar.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: UserDashboardNavbarComponent */

  /***/
  function srcAppUserDashboardUserDashboardNavbarComponentUserDashboardNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardNavbarComponent", function () {
      return UserDashboardNavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserDashboardNavbarComponent =
    /*#__PURE__*/
    function () {
      function UserDashboardNavbarComponent() {
        _classCallCheck(this, UserDashboardNavbarComponent);
      }

      _createClass(UserDashboardNavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserDashboardNavbarComponent;
    }();

    UserDashboardNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-dashboard-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-dashboard-navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/user-dashboard-navbar/component/user-dashboard-navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-dashboard-navbar.component.css */
      "./src/app/user-dashboard/user-dashboard-navbar/component/user-dashboard-navbar.component.css")).default]
    })], UserDashboardNavbarComponent);
    /***/
  },

  /***/
  "./src/app/user-dashboard/user-dashboard-navbar/module/user-dashboard-navbar-routing.module.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/user-dashboard/user-dashboard-navbar/module/user-dashboard-navbar-routing.module.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: UserDashboardNavbarRoutingModule */

  /***/
  function srcAppUserDashboardUserDashboardNavbarModuleUserDashboardNavbarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardNavbarRoutingModule", function () {
      return UserDashboardNavbarRoutingModule;
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

    var routes = [];

    var UserDashboardNavbarRoutingModule = function UserDashboardNavbarRoutingModule() {
      _classCallCheck(this, UserDashboardNavbarRoutingModule);
    };

    UserDashboardNavbarRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserDashboardNavbarRoutingModule);
    /***/
  },

  /***/
  "./src/app/user-dashboard/user-dashboard-navbar/module/user-dashboard-navbar.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/user-dashboard/user-dashboard-navbar/module/user-dashboard-navbar.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: UserDashboardNavbarModule */

  /***/
  function srcAppUserDashboardUserDashboardNavbarModuleUserDashboardNavbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardNavbarModule", function () {
      return UserDashboardNavbarModule;
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


    var _user_dashboard_navbar_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-dashboard-navbar-routing.module */
    "./src/app/user-dashboard/user-dashboard-navbar/module/user-dashboard-navbar-routing.module.ts");
    /* harmony import */


    var _component_user_dashboard_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/user-dashboard-navbar.component */
    "./src/app/user-dashboard/user-dashboard-navbar/component/user-dashboard-navbar.component.ts");
    /* harmony import */


    var src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shear.modul */
    "./src/app/shear.modul.ts");

    var UserDashboardNavbarModule = function UserDashboardNavbarModule() {
      _classCallCheck(this, UserDashboardNavbarModule);
    };

    UserDashboardNavbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_user_dashboard_navbar_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardNavbarComponent"]],
      imports: [src_app_shear_modul__WEBPACK_IMPORTED_MODULE_4__["ShearModule"], _user_dashboard_navbar_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserDashboardNavbarRoutingModule"]],
      exports: [_component_user_dashboard_navbar_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardNavbarComponent"]]
    })], UserDashboardNavbarModule);
    /***/
  }
}]);
//# sourceMappingURL=user-dashboard-module-user-dashboard-module-es5.js.map