webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-header></app-header>\n</div>\n\n<div>\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_common_header_header_component__ = __webpack_require__("../../../../../src/app/components/common/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_common_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/components/common/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_search_search_results_search_results_component__ = __webpack_require__("../../../../../src/app/components/search/search-results/search-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_users_register_register_component__ = __webpack_require__("../../../../../src/app/components/users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_users_login_login_component__ = __webpack_require__("../../../../../src/app/components/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_users_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/users/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_users_edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/components/users/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_items_add_item_add_item_component__ = __webpack_require__("../../../../../src/app/components/items/add-item/add-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_items_add_service_add_service_component__ = __webpack_require__("../../../../../src/app/components/items/add-service/add-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_items_view_item_view_item_component__ = __webpack_require__("../../../../../src/app/components/items/view-item/view-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_items_view_service_view_service_component__ = __webpack_require__("../../../../../src/app/components/items/view-service/view-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_users_view_user_view_user_component__ = __webpack_require__("../../../../../src/app/components/users/view-user/view-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_users_edit_account_edit_account_component__ = __webpack_require__("../../../../../src/app/components/users/edit-account/edit-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_items_edit_item_edit_item_component__ = __webpack_require__("../../../../../src/app/components/items/edit-item/edit-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_items_edit_service_edit_service_component__ = __webpack_require__("../../../../../src/app/components/items/edit-service/edit-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_common_notifications_notifications_component__ = __webpack_require__("../../../../../src/app/components/common/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_common_requests_requests_component__ = __webpack_require__("../../../../../src/app/components/common/requests/requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_common_admin_dashboard_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/components/common/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_common_help_help_component__ = __webpack_require__("../../../../../src/app/components/common/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_common_help_help_reglog_help_reglog_component__ = __webpack_require__("../../../../../src/app/components/common/help/help-reglog/help-reglog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_common_help_help_prof_help_prof_component__ = __webpack_require__("../../../../../src/app/components/common/help/help-prof/help-prof.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_common_help_help_home_help_home_component__ = __webpack_require__("../../../../../src/app/components/common/help/help-home/help-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_common_help_help_navbar_help_navbar_component__ = __webpack_require__("../../../../../src/app/components/common/help/help-navbar/help-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_common_help_help_editprof_help_editprof_component__ = __webpack_require__("../../../../../src/app/components/common/help/help-editprof/help-editprof.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_common_help_help_addsale_help_addsale_component__ = __webpack_require__("../../../../../src/app/components/common/help/help-addsale/help-addsale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_common_help_help_editsale_help_editsale_component__ = __webpack_require__("../../../../../src/app/components/common/help/help-editsale/help-editsale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_common_help_help_favreqsale_help_favreqsale_component__ = __webpack_require__("../../../../../src/app/components/common/help/help-favreqsale/help-favreqsale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_common_help_help_reviewsale_help_reviewsale_component__ = __webpack_require__("../../../../../src/app/components/common/help/help-reviewsale/help-reviewsale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_common_help_help_notifications_help_notifications_component__ = __webpack_require__("../../../../../src/app/components/common/help/help-notifications/help-notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_common_help_help_search_help_search_component__ = __webpack_require__("../../../../../src/app/components/common/help/help-search/help-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_common_help_help_requests_help_requests_component__ = __webpack_require__("../../../../../src/app/components/common/help/help-requests/help-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_users_edit_profile_enter_pass_enter_pass_component__ = __webpack_require__("../../../../../src/app/components/users/edit-profile/enter-pass/enter-pass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_items_view_item_confirm_delete_confirm_delete_component__ = __webpack_require__("../../../../../src/app/components/items/view-item/confirm-delete/confirm-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_items_view_service_confirm_servicedelete_confirm_servicedelete_component__ = __webpack_require__("../../../../../src/app/components/items/view-service/confirm-servicedelete/confirm-servicedelete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_items_view_item_add_review_add_review_component__ = __webpack_require__("../../../../../src/app/components/items/view-item/add-review/add-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_items_view_service_add_service_review_add_service_review_component__ = __webpack_require__("../../../../../src/app/components/items/view-service/add-service-review/add-service-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_users_profile_confirm_review_delete_confirm_review_delete_component__ = __webpack_require__("../../../../../src/app/components/users/profile/confirm-review-delete/confirm-review-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_users_profile_edit_review_edit_review_component__ = __webpack_require__("../../../../../src/app/components/users/profile/edit-review/edit-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_users_edit_account_confirm_delete_account_confirm_delete_account_component__ = __webpack_require__("../../../../../src/app/components/users/edit-account/confirm-delete-account/confirm-delete-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__services_validate_validate_service__ = __webpack_require__("../../../../../src/app/services/validate/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__services_authenticate_auth_service__ = __webpack_require__("../../../../../src/app/services/authenticate/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__services_items_item_service__ = __webpack_require__("../../../../../src/app/services/items/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__services_search_search_service__ = __webpack_require__("../../../../../src/app/services/search/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__services_reviews_review_service__ = __webpack_require__("../../../../../src/app/services/reviews/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__services_notifications_notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__services_requests_request_service__ = __webpack_require__("../../../../../src/app/services/requests/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__services_admin_admin_service__ = __webpack_require__("../../../../../src/app/services/admin/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__services_image_image_service__ = __webpack_require__("../../../../../src/app/services/image/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_common_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'search/:query', component: __WEBPACK_IMPORTED_MODULE_13__components_search_search_results_search_results_component__["a" /* SearchResultsComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_14__components_users_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_15__components_users_login_login_component__["a" /* LoginComponent */] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_26__components_common_notifications_notifications_component__["a" /* NotificationsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_59__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'requests', component: __WEBPACK_IMPORTED_MODULE_27__components_common_requests_requests_component__["a" /* RequestsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_59__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_16__components_users_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_59__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile/editProf', component: __WEBPACK_IMPORTED_MODULE_17__components_users_edit_profile_edit_profile_component__["a" /* EditProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_59__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile/editAcc', component: __WEBPACK_IMPORTED_MODULE_23__components_users_edit_account_edit_account_component__["a" /* EditAccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_59__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users/:type/:id', component: __WEBPACK_IMPORTED_MODULE_22__components_users_view_user_view_user_component__["a" /* ViewUserComponent */] },
    { path: 'items/new', component: __WEBPACK_IMPORTED_MODULE_18__components_items_add_item_add_item_component__["a" /* AddItemComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_59__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'items/:id', component: __WEBPACK_IMPORTED_MODULE_20__components_items_view_item_view_item_component__["a" /* ViewItemComponent */] },
    { path: 'items/:id/edit', component: __WEBPACK_IMPORTED_MODULE_24__components_items_edit_item_edit_item_component__["a" /* EditItemComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_59__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'services/new', component: __WEBPACK_IMPORTED_MODULE_19__components_items_add_service_add_service_component__["a" /* AddServiceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_59__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'services/:id', component: __WEBPACK_IMPORTED_MODULE_21__components_items_view_service_view_service_component__["a" /* ViewServiceComponent */] },
    { path: 'services/:id/edit', component: __WEBPACK_IMPORTED_MODULE_25__components_items_edit_service_edit_service_component__["a" /* EditServiceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_59__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_28__components_common_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */] },
    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_29__components_common_help_help_component__["a" /* HelpComponent */] },
    { path: 'help/helpreglog', component: __WEBPACK_IMPORTED_MODULE_30__components_common_help_help_reglog_help_reglog_component__["a" /* HelpReglogComponent */] },
    { path: 'help/helpprofile', component: __WEBPACK_IMPORTED_MODULE_31__components_common_help_help_prof_help_prof_component__["a" /* HelpProfComponent */] },
    { path: 'help/helphome', component: __WEBPACK_IMPORTED_MODULE_32__components_common_help_help_home_help_home_component__["a" /* HelpHomeComponent */] },
    { path: 'help/helpnavbar', component: __WEBPACK_IMPORTED_MODULE_33__components_common_help_help_navbar_help_navbar_component__["a" /* HelpNavbarComponent */] },
    { path: 'help/helpeditprof', component: __WEBPACK_IMPORTED_MODULE_34__components_common_help_help_editprof_help_editprof_component__["a" /* HelpEditprofComponent */] },
    { path: 'help/helpaddsale', component: __WEBPACK_IMPORTED_MODULE_35__components_common_help_help_addsale_help_addsale_component__["a" /* HelpAddsaleComponent */] },
    { path: 'help/helpeditsale', component: __WEBPACK_IMPORTED_MODULE_36__components_common_help_help_editsale_help_editsale_component__["a" /* HelpEditsaleComponent */] },
    { path: 'help/helpfavreq', component: __WEBPACK_IMPORTED_MODULE_37__components_common_help_help_favreqsale_help_favreqsale_component__["a" /* HelpFavreqsaleComponent */] },
    { path: 'help/helprev', component: __WEBPACK_IMPORTED_MODULE_38__components_common_help_help_reviewsale_help_reviewsale_component__["a" /* HelpReviewsaleComponent */] },
    { path: 'help/helpnotifications', component: __WEBPACK_IMPORTED_MODULE_39__components_common_help_help_notifications_help_notifications_component__["a" /* HelpNotificationsComponent */] },
    { path: 'help/helpsearch', component: __WEBPACK_IMPORTED_MODULE_40__components_common_help_help_search_help_search_component__["a" /* HelpSearchComponent */] },
    { path: 'help/helprequests', component: __WEBPACK_IMPORTED_MODULE_41__components_common_help_help_requests_help_requests_component__["a" /* HelpRequestsComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_common_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_common_welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_search_search_results_search_results_component__["a" /* SearchResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_users_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_users_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_users_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_users_edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_users_edit_account_edit_account_component__["a" /* EditAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_users_view_user_view_user_component__["a" /* ViewUserComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_items_add_item_add_item_component__["a" /* AddItemComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_items_view_item_view_item_component__["a" /* ViewItemComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_items_edit_item_edit_item_component__["a" /* EditItemComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_items_add_service_add_service_component__["a" /* AddServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_items_view_service_view_service_component__["a" /* ViewServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_items_edit_service_edit_service_component__["a" /* EditServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_common_requests_requests_component__["a" /* RequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_common_notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_common_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_users_edit_profile_enter_pass_enter_pass_component__["a" /* EnterPassDialog */],
                __WEBPACK_IMPORTED_MODULE_43__components_items_view_item_confirm_delete_confirm_delete_component__["a" /* ConfirmDeleteDialog */],
                __WEBPACK_IMPORTED_MODULE_44__components_items_view_service_confirm_servicedelete_confirm_servicedelete_component__["a" /* ConfirmServicedeleteDialog */],
                __WEBPACK_IMPORTED_MODULE_45__components_items_view_item_add_review_add_review_component__["a" /* AddReviewDialog */],
                __WEBPACK_IMPORTED_MODULE_46__components_items_view_service_add_service_review_add_service_review_component__["a" /* AddServiceReviewDialog */],
                __WEBPACK_IMPORTED_MODULE_47__components_users_profile_confirm_review_delete_confirm_review_delete_component__["a" /* ConfirmReviewDeleteDialog */],
                __WEBPACK_IMPORTED_MODULE_48__components_users_profile_edit_review_edit_review_component__["a" /* EditReviewDialog */],
                __WEBPACK_IMPORTED_MODULE_49__components_users_edit_account_confirm_delete_account_confirm_delete_account_component__["a" /* ConfirmDeleteAccountDialog */],
                __WEBPACK_IMPORTED_MODULE_29__components_common_help_help_component__["a" /* HelpComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_common_help_help_prof_help_prof_component__["a" /* HelpProfComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_common_help_help_home_help_home_component__["a" /* HelpHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_common_help_help_navbar_help_navbar_component__["a" /* HelpNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_common_help_help_editprof_help_editprof_component__["a" /* HelpEditprofComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_common_help_help_addsale_help_addsale_component__["a" /* HelpAddsaleComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_common_help_help_editsale_help_editsale_component__["a" /* HelpEditsaleComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_common_help_help_favreqsale_help_favreqsale_component__["a" /* HelpFavreqsaleComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_common_help_help_reviewsale_help_reviewsale_component__["a" /* HelpReviewsaleComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_common_help_help_notifications_help_notifications_component__["a" /* HelpNotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_common_help_help_search_help_search_component__["a" /* HelpSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_common_help_help_requests_help_requests_component__["a" /* HelpRequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_common_help_help_reglog_help_reglog_component__["a" /* HelpReglogComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { onSameUrlNavigation: 'reload' }),
                __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_42__components_users_edit_profile_enter_pass_enter_pass_component__["a" /* EnterPassDialog */],
                __WEBPACK_IMPORTED_MODULE_43__components_items_view_item_confirm_delete_confirm_delete_component__["a" /* ConfirmDeleteDialog */],
                __WEBPACK_IMPORTED_MODULE_44__components_items_view_service_confirm_servicedelete_confirm_servicedelete_component__["a" /* ConfirmServicedeleteDialog */],
                __WEBPACK_IMPORTED_MODULE_45__components_items_view_item_add_review_add_review_component__["a" /* AddReviewDialog */],
                __WEBPACK_IMPORTED_MODULE_46__components_items_view_service_add_service_review_add_service_review_component__["a" /* AddServiceReviewDialog */],
                __WEBPACK_IMPORTED_MODULE_47__components_users_profile_confirm_review_delete_confirm_review_delete_component__["a" /* ConfirmReviewDeleteDialog */],
                __WEBPACK_IMPORTED_MODULE_48__components_users_profile_edit_review_edit_review_component__["a" /* EditReviewDialog */],
                __WEBPACK_IMPORTED_MODULE_49__components_users_edit_account_confirm_delete_account_confirm_delete_account_component__["a" /* ConfirmDeleteAccountDialog */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_50__services_validate_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_51__services_authenticate_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_59__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_52__services_items_item_service__["a" /* ItemService */],
                __WEBPACK_IMPORTED_MODULE_53__services_search_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_54__services_reviews_review_service__["a" /* ReviewService */],
                __WEBPACK_IMPORTED_MODULE_55__services_notifications_notifications_service__["a" /* NotificationsService */],
                __WEBPACK_IMPORTED_MODULE_56__services_requests_request_service__["a" /* RequestService */],
                __WEBPACK_IMPORTED_MODULE_57__services_admin_admin_service__["a" /* AdminService */],
                __WEBPACK_IMPORTED_MODULE_58__services_image_image_service__["a" /* ImageService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/admin-dashboard/admin-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/admin-dashboard/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!loaded\" style=\"margin: 20px auto\">\n    <mat-progress-spinner color=\"primary\" mode=\"indeterminate\" style=\"margin:0 auto;\"></mat-progress-spinner>\n  </div>\n\n  <div>\n\n    <mat-card style=\"margin: 10px 0\">\n      <div *ngIf=\"loaded\">\n        <mat-card style=\"margin-bottom: 20px\">\n          <mat-grid-list cols=\"4\" rowHeight=\"150px\">\n            <mat-grid-tile>\n              <div style=\"height: 100%; width: 100%; margin-right: 10px; text-align: center; padding: 0 10px\">\n                <mat-card style=\"margin: 10px 0\">\n                  <div style=\"width: 100%; height: 100%\">\n                    <p>\n                      <span style=\"font-size: 40px;\"><strong>{{numbers.items}}</strong></span>\n                      <br/>\n                      <span style=\"float: right; color: grey\">Items</span>\n                    </p>\n                  </div>\n                </mat-card>\n              </div>\n            </mat-grid-tile>\n\n            <mat-grid-tile>\n              <div style=\"height: 100%; width: 100%; margin-right: 10px; margin-left: 10px; text-align: center; padding: 0 10px\">\n                <mat-card style=\"margin: 10px 0\">\n                  <div style=\"width: 100%; height: 100%\">\n                    <p>\n                      <span style=\"font-size: 40px;\"><strong>{{numbers.services}}</strong></span>\n                      <br/>\n                      <span style=\"float: right; color: grey\">Services</span>\n                    </p>\n                  </div>\n                </mat-card>\n              </div>\n            </mat-grid-tile>\n\n            <mat-grid-tile>\n              <div style=\"height: 100%; width: 100%; margin-right: 10px; margin-left: 10px; text-align: center; padding: 0 10px\">\n                <mat-card style=\"margin: 10px 0\">\n                  <div style=\"width: 100%; height: 100%\">\n                    <p>\n                      <span style=\"font-size: 40px;\"><strong>{{numbers.sellers}}</strong></span>\n                      <br/>\n                      <span style=\"float: right; color: grey\">Sellers</span>\n                    </p>\n                  </div>\n                </mat-card>\n              </div>\n            </mat-grid-tile>\n\n            <mat-grid-tile>\n              <div style=\"height: 100%; width: 100%; margin-left: 10px; text-align: center; padding: 0 10px\">\n                <mat-card style=\"margin: 10px 0\">\n                  <div style=\"width: 100%; height: 100%\">\n                    <p>\n                      <span style=\"font-size: 40px;\"><strong>{{numbers.customers}}</strong></span>\n                      <br/>\n                      <span style=\"float: right; color: grey\">Customers</span>\n                    </p>\n                  </div>\n                </mat-card>\n              </div>\n            </mat-grid-tile>\n          </mat-grid-list>\n        </mat-card>\n\n        <mat-card style=\"margin-bottom: 20px\">\n          <mat-card-title>\n            Top Rated\n          </mat-card-title>\n\n          <mat-card-content>\n            <mat-tab-group>\n              <mat-tab label=\"Sellers\">\n                <div style=\"margin: 20px;\" *ngFor=\"let seller of topRated.sellers; let i = index\">\n                  <h5>{{i+1}}. <a [routerLink]=\"['/users/seller/' + seller._id]\"><strong>{{seller.username}}</strong></a></h5>\n                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rating: {{seller.avgRating}}</p>\n                  <hr>\n                </div>\n              </mat-tab>\n\n              <mat-tab label=\"Items\">\n                <div style=\"margin: 20px;\" *ngFor=\"let item of topRated.items; let i = index\">\n                  <h5>{{i+1}}. <a [routerLink]=\"['/items/' + item._id]\"><strong>{{item.name}}</strong></a></h5>\n                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rating: {{item.avgRating}}</p>\n                  <hr>\n                </div>\n              </mat-tab>\n\n              <mat-tab label=\"Services\">\n                <div style=\"margin: 20px;\" *ngFor=\"let service of topRated.services; let i = index\">\n                  <h5>{{i+1}}. <a [routerLink]=\"['/services/' + service._id]\"><strong>{{service.name}}</strong></a></h5>\n                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rating: {{service.avgRating}}</p>\n                  <hr>\n                </div>\n              </mat-tab>\n            </mat-tab-group>\n          </mat-card-content>\n        </mat-card>\n\n        <mat-card style=\"margin-bottom: 20px\">\n          <mat-card-title>\n            Top Users\n          </mat-card-title>\n\n          <mat-card-content>\n            <div style=\"width: 100%; height: 100%\">\n              <mat-card style=\"margin-bottom: 20px\">\n                <h5>\n                  Top Sellers\n                </h5>\n\n                <mat-tab-group>\n                  <mat-tab label=\"Selling\">\n                    <mat-tab-group>\n                      <mat-tab label=\"Items\">\n                        <div style=\"margin: 20px;\" *ngFor=\"let seller of sellerStats.selling.items; let i = index\">\n                          <h5>{{i+1}}. <a [routerLink]=\"['/users/seller/' + seller._id]\"><strong>{{seller.username}}</strong></a></h5>\n                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Items for sale: {{seller.totItems}}</p>\n                          <hr>\n                        </div>\n                      </mat-tab>\n\n                      <mat-tab label=\"Services\">\n                        <div style=\"margin: 20px;\" *ngFor=\"let seller of sellerStats.selling.items; let i = index\">\n                          <h5>{{i+1}}. <a [routerLink]=\"['/users/seller/' + seller._id]\"><strong>{{seller.username}}</strong></a></h5>\n                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Services for sale: {{seller.totItems}}</p>\n                          <hr>\n                        </div>\n                      </mat-tab>\n                    </mat-tab-group>\n                  </mat-tab>\n\n                  <mat-tab label=\"Sold\">\n                    <mat-tab-group>\n                      <mat-tab label=\"Items\">\n                        <div style=\"margin: 20px;\" *ngFor=\"let seller of sellerStats.buys.items; let i = index\">\n                          <h5>{{i+1}}. <a [routerLink]=\"['/users/seller/' + seller._id]\"><strong>{{seller.username}}</strong></a></h5>\n                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Items sold: {{seller.buys}}</p>\n                          <hr>\n                        </div>\n                      </mat-tab>\n\n                      <mat-tab label=\"Services\">\n                        <div style=\"margin: 20px;\" *ngFor=\"let seller of sellerStats.buys.services; let i = index\">\n                          <h5>{{i+1}}. <a [routerLink]=\"['/users/seller/' + seller._id]\"><strong>{{seller.username}}</strong></a></h5>\n                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Services sold: {{seller.buys}}</p>\n                          <hr>\n                        </div>\n                      </mat-tab>\n                    </mat-tab-group>\n                  </mat-tab>\n\n                  <mat-tab label=\"Requests\">\n                    <mat-tab-group>\n                      <mat-tab label=\"Items\">\n                        <div style=\"margin: 20px;\" *ngFor=\"let seller of sellerStats.reqs.items; let i = index\">\n                          <h5>{{i+1}}. <a [routerLink]=\"['/users/seller/' + seller._id]\"><strong>{{seller.username}}</strong></a></h5>\n                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pending requests for items: {{seller.reqs}}</p>\n                          <hr>\n                        </div>\n                      </mat-tab>\n\n                      <mat-tab label=\"Services\">\n                        <div style=\"margin: 20px;\" *ngFor=\"let seller of sellerStats.reqs.services; let i = index\">\n                          <h5>{{i+1}}. <a [routerLink]=\"['/users/seller/' + seller._id]\"><strong>{{seller.username}}</strong></a></h5>\n                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pending requests for services: {{seller.reqs}}</p>\n                          <hr>\n                        </div>\n                      </mat-tab>\n                    </mat-tab-group>\n                  </mat-tab>\n\n                  <mat-tab label=\"Favorites\">\n                    <mat-tab-group>\n                      <mat-tab label=\"Items\">\n                        <div style=\"margin: 20px;\" *ngFor=\"let seller of sellerStats.favs.items; let i = index\">\n                          <h5>{{i+1}}. <a [routerLink]=\"['/users/seller/' + seller._id]\"><strong>{{seller.username}}</strong></a></h5>\n                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Favorited items: {{seller.favs}}</p>\n                          <hr>\n                        </div>\n                      </mat-tab>\n\n                      <mat-tab label=\"Services\">\n                        <div style=\"margin: 20px;\" *ngFor=\"let seller of sellerStats.favs.services; let i = index\">\n                          <h5>{{i+1}}. <a [routerLink]=\"['/users/seller/' + seller._id]\"><strong>{{seller.username}}</strong></a></h5>\n                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Favorited services: {{seller.favs}}</p>\n                          <hr>\n                        </div>\n                      </mat-tab>\n                    </mat-tab-group>\n                  </mat-tab>\n                </mat-tab-group>\n              </mat-card>\n            </div>\n\n            <div style=\"width: 100%; height: 100%\">\n              <mat-card>\n                <h5>\n                  Top Customers\n                </h5>\n\n                <mat-tab-group>\n                  <mat-tab label=\"Buys\">\n                    <mat-tab-group>\n                      <mat-tab label=\"Items\">\n                        <div style=\"margin: 20px;\" *ngFor=\"let customer of customerStats.bought.items; let i = index\">\n                          <h5>{{i+1}}. <a [routerLink]=\"['/users/customer/' + customer._id]\"><strong>{{customer.username}}</strong></a></h5>\n                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Items bought: {{customer.boughtItems}}</p>\n                          <hr>\n                        </div>\n                      </mat-tab>\n\n                      <mat-tab label=\"Services\">\n                        <div style=\"margin: 20px;\" *ngFor=\"let customer of customerStats.bought.services; let i = index\">\n                          <h5>{{i+1}}. <a [routerLink]=\"['/users/customer/' + customer._id]\"><strong>{{customer.username}}</strong></a></h5>\n                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Services bought: {{customer.boughtServices}}</p>\n                          <hr>\n                        </div>\n                      </mat-tab>\n                    </mat-tab-group>\n                  </mat-tab>\n\n                  <mat-tab label=\"Requests\">\n                    <mat-tab-group>\n                      <mat-tab label=\"Items\">\n                        <div style=\"margin: 20px;\" *ngFor=\"let customer of customerStats.req.items; let i = index\">\n                          <h5>{{i+1}}. <a [routerLink]=\"['/users/customer/' + customer._id]\"><strong>{{customer.username}}</strong></a></h5>\n                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pending requests for items: {{customer.reqItems}}</p>\n                          <hr>\n                        </div>\n                      </mat-tab>\n\n                      <mat-tab label=\"Services\">\n                        <div style=\"margin: 20px;\" *ngFor=\"let customer of customerStats.req.services; let i = index\">\n                          <h5>{{i+1}}. <a [routerLink]=\"['/users/customer/' + customer._id]\"><strong>{{customer.username}}</strong></a></h5>\n                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pending requests for services: {{customer.reqServices}}</p>\n                          <hr>\n                        </div>\n                      </mat-tab>\n                    </mat-tab-group>\n                  </mat-tab>\n\n                  <mat-tab label=\"Favorites\">\n                    <mat-tab-group>\n                      <mat-tab label=\"Items\">\n                        <div style=\"margin: 20px;\" *ngFor=\"let customer of customerStats.fav.items; let i = index\">\n                          <h5>{{i+1}}. <a [routerLink]=\"['/users/customer/' + customer._id]\"><strong>{{customer.username}}</strong></a></h5>\n                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Favorited items: {{customer.favItems}}</p>\n                          <hr>\n                        </div>\n                      </mat-tab>\n\n                      <mat-tab label=\"Services\">\n                        <div style=\"margin: 20px;\" *ngFor=\"let customer of customerStats.fav.services; let i = index\">\n                          <h5>{{i+1}}. <a [routerLink]=\"['/users/customer/' + customer._id]\"><strong>{{customer.username}}</strong></a></h5>\n                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Favorited services: {{customer.favServices}}</p>\n                          <hr>\n                        </div>\n                      </mat-tab>\n                    </mat-tab-group>\n                  </mat-tab>\n                </mat-tab-group>\n              </mat-card>\n            </div>\n          </mat-card-content>\n        </mat-card>\n\n        <mat-card style=\"margin-bottom: 20px\">\n          <mat-card-title>\n            Top Sales\n          </mat-card-title>\n\n          <mat-card-content>\n            <div style=\"width: 100%; height: 100%\">\n              <mat-card style=\"margin-bottom: 20px\">\n                <h5>\n                  Top Items\n                </h5>\n\n                <mat-tab-group>\n                  <mat-tab label=\"Bought\">\n                    <div style=\"margin: 20px;\" *ngFor=\"let item of itemStats.mostBuys; let i = index\">\n                      <h5>{{i+1}}. <a [routerLink]=\"['/items/' + item._id]\"><strong>{{item.name}}</strong></a></h5>\n                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of buys: {{item.buys}}</p>\n                      <hr>\n                    </div>\n                  </mat-tab>\n\n                  <mat-tab label=\"Favorited\">\n                    <div style=\"margin: 20px;\" *ngFor=\"let item of itemStats.mostFavs; let i = index\">\n                      <h5>{{i+1}}. <a [routerLink]=\"['/items/' + item._id]\"><strong>{{item.name}}</strong></a></h5>\n                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of favorites: {{item.favs}}</p>\n                      <hr>\n                    </div>\n                  </mat-tab>\n\n                  <mat-tab label=\"Requested\">\n                    <div style=\"margin: 20px;\" *ngFor=\"let item of itemStats.mostReqs; let i = index\">\n                      <h5>{{i+1}}. <a [routerLink]=\"['/items/' + item._id]\"><strong>{{item.name}}</strong></a></h5>\n                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of pending requests: {{item.reqs}}</p>\n                      <hr>\n                    </div>\n                  </mat-tab>\n                </mat-tab-group>\n              </mat-card>\n            </div>\n\n            <div style=\"width: 100%; height: 100%\">\n              <mat-card style=\"margin-bottom: 20px\">\n                <h5>\n                  Top Services\n                </h5>\n\n                <mat-tab-group>\n                  <mat-tab label=\"Bought\">\n                    <div style=\"margin: 20px;\" *ngFor=\"let service of serviceStats.mostBuys; let i = index\">\n                      <h5>{{i+1}}. <a [routerLink]=\"['/services/' + service._id]\"><strong>{{service.name}}</strong></a></h5>\n                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of buys: {{service.buys}}</p>\n                      <hr>\n                    </div>\n                  </mat-tab>\n\n                  <mat-tab label=\"Favorited\">\n                    <div style=\"margin: 20px;\" *ngFor=\"let service of serviceStats.mostFavs; let i = index\">\n                      <h5>{{i+1}}. <a [routerLink]=\"['/services/' + service._id]\"><strong>{{service.name}}</strong></a></h5>\n                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of favorites: {{service.favs}}</p>\n                      <hr>\n                    </div>\n                  </mat-tab>\n\n                  <mat-tab label=\"Requested\">\n                    <div style=\"margin: 20px;\" *ngFor=\"let service of serviceStats.mostReqs; let i = index\">\n                      <h5>{{i+1}}. <a [routerLink]=\"['/services/' + service._id]\"><strong>{{service.name}}</strong></a></h5>\n                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of pending requests: {{service.reqs}}</p>\n                      <hr>\n                    </div>\n                  </mat-tab>\n                </mat-tab-group>\n              </mat-card>\n            </div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n\n      <mat-card style=\"margin-bottom: 20px\">\n        <mat-card-title>\n          Statistics on New Additions\n        </mat-card-title>\n\n        <mat-card-content>\n          <mat-grid-list cols=\"2\" rowHeight=\"400px\">\n            <mat-grid-tile>\n              <div style=\"width: 100%; height: 100%;\">\n                <mat-card style=\"margin: 10px\">\n                  <div>\n                    <canvas id=\"sellerCanvas\">{{sellerChart}}</canvas>\n                  </div>\n\n                  <div style=\"width: 100%; text-align: center; margin-top: 10px\">\n                    <strong>Seller Registrations</strong>\n                  </div>\n                </mat-card>\n              </div>\n            </mat-grid-tile>\n\n            <mat-grid-tile>\n              <div style=\"width: 100%; height: 100%;\">\n                <mat-card style=\"margin: 10px\">\n                  <div>\n                    <canvas id=\"customerCanvas\">{{customerChart}}</canvas>\n                  </div>\n\n                  <div style=\"width: 100%; text-align: center; margin-top: 10px\">\n                    <strong>Customer Registrations</strong>\n                  </div>\n                </mat-card>\n              </div>\n            </mat-grid-tile>\n\n            <mat-grid-tile>\n              <div style=\"width: 100%; height: 100%;\">\n                <mat-card style=\"margin: 10px\">\n                  <div>\n                    <canvas id=\"itemCanvas\">{{itemChart}}</canvas>\n                  </div>\n\n                  <div style=\"width: 100%; text-align: center; margin-top: 10px\">\n                    <strong>Item Additions</strong>\n                  </div>\n                </mat-card>\n              </div>\n            </mat-grid-tile>\n\n            <mat-grid-tile>\n              <div style=\"width: 100%; height: 100%;\">\n                <mat-card style=\"margin: 10px\">\n                  <div>\n                    <canvas id=\"serviceCanvas\">{{serviceChart}}</canvas>\n                  </div>\n\n                  <div style=\"width: 100%; text-align: center; margin-top: 10px\">\n                    <strong>Service Additions</strong>\n                  </div>\n                </mat-card>\n              </div>\n            </mat-grid-tile>\n          </mat-grid-list>\n        </mat-card-content>\n      </mat-card>\n    </mat-card>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/common/admin-dashboard/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_admin_service__ = __webpack_require__("../../../../../src/app/services/admin/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(adminService, flashMessagesService, router) {
        this.adminService = adminService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.loaded = false;
        this.monthList = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        this.startYear = "2018";
        this.sellerDateCount = [];
        this.customerDateCount = [];
        this.itemDateCount = [];
        this.serviceDateCount = [];
        this.currentYear = (new Date(Date.now())).toString().split(" ")[3];
        this.currentMonth = (new Date(Date.now())).toString().split(" ")[1];
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('user_type') !== 'admin') {
            this.flashMessagesService.show("You must be an admin to access this page", { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/profile']);
            return false;
        }
        this.adminService.getNumbers()
            .subscribe(function (data) {
            if (data.success) {
                _this.numbers = data.stats;
                // console.log(this.numbers);
                _this.dataLoaded();
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
        this.adminService.getTimes()
            .subscribe(function (data) {
            if (data.success) {
                _this.times = data.stats;
                _this.createDates(_this.sellerDateCount);
                _this.createDates(_this.customerDateCount);
                _this.createDates(_this.itemDateCount);
                _this.createDates(_this.serviceDateCount);
                // console.log(this.times);
                _this.times = _this.prepareTime();
                // console.log(this.times);
                _this.dataLoaded();
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
        this.adminService.getTopRated()
            .subscribe(function (data) {
            if (data.success) {
                _this.topRated = data.stats;
                // console.log(this.topRated);
                _this.dataLoaded();
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
        this.adminService.getCustomerStats()
            .subscribe(function (data) {
            if (data.success) {
                _this.customerStats = data.stats;
                // console.log(this.customerStats);
                _this.dataLoaded();
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
        this.adminService.getItemStats()
            .subscribe(function (data) {
            if (data.success) {
                _this.itemStats = data.stats;
                // console.log(this.itemStats);
                _this.dataLoaded();
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
        this.adminService.getServiceStats()
            .subscribe(function (data) {
            if (data.success) {
                _this.serviceStats = data.stats;
                // console.log(this.serviceStats);
                _this.dataLoaded();
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
        this.adminService.getSellerStats()
            .subscribe(function (data) {
            if (data.success) {
                _this.sellerStats = data.stats;
                for (var statType in _this.sellerStats) {
                    if (_this.sellerStats.hasOwnProperty(statType)) {
                        if (statType !== 'selling') {
                            for (var itemType in _this.sellerStats[statType]) {
                                if (_this.sellerStats[statType].hasOwnProperty(itemType)) {
                                    _this.sellerStats[statType][itemType].forEach(function (seller) {
                                        _this.adminService.getSellerUsername(seller._id)
                                            .subscribe(function (data) {
                                            seller.username = data.username;
                                        });
                                    });
                                }
                            }
                        }
                    }
                }
                // console.log(this.sellerStats);
                _this.dataLoaded();
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    AdminDashboardComponent.prototype.dataLoaded = function () {
        if (this.numbers && this.times && this.topRated && this.sellerStats && this.customerStats && this.itemStats && this.serviceStats) {
            this.loaded = true;
            this.sellerChart = this.drawChart('sellerCanvas', this.times.sellers, 'Seller');
            this.customerChart = this.drawChart('customerCanvas', this.times.customers, 'Customer');
            this.itemChart = this.drawChart('itemCanvas', this.times.items, 'Items');
            this.serviceChart = this.drawChart('serviceCanvas', this.times.services, 'Services');
        }
    };
    AdminDashboardComponent.prototype.prepareTime = function () {
        var returnObj = {
            sellers: [],
            customers: [],
            items: [],
            services: []
        };
        var sellers = this.sellerDateCount;
        var customers = this.customerDateCount;
        var items = this.itemDateCount;
        var services = this.serviceDateCount;
        if (this.times.users.sellers.length > 0) {
            for (var i = 0; i < this.times.users.sellers.length; i++) {
                var dateToCompare = this.times.users.sellers[i].year + " " + this.times.users.sellers[i].month;
                for (var j = 0; j < sellers.length; j++) {
                    if (dateToCompare === sellers[j].date) {
                        sellers[j].count++;
                    }
                }
            }
        }
        if (this.times.users.customers.length > 0) {
            for (var i = 0; i < this.times.users.customers.length; i++) {
                var dateToCompare = this.times.users.customers[i].year + " " + this.times.users.customers[i].month;
                for (var j = 0; j < customers.length; j++) {
                    if (dateToCompare === customers[j].date) {
                        customers[j].count++;
                    }
                }
            }
        }
        if (this.times.sales.items.length > 0) {
            for (var i = 0; i < this.times.sales.items.length; i++) {
                var dateToCompare = this.times.sales.items[i].year + " " + this.times.sales.items[i].month;
                for (var j = 0; j < items.length; j++) {
                    if (dateToCompare === items[j].date) {
                        items[j].count++;
                    }
                }
            }
        }
        if (this.times.sales.services.length > 0) {
            for (var i = 0; i < this.times.sales.services.length; i++) {
                var dateToCompare = this.times.sales.services[i].year + " " + this.times.sales.services[i].month;
                for (var j = 0; j < services.length; j++) {
                    if (dateToCompare === services[j].date) {
                        services[j].count++;
                    }
                }
            }
        }
        returnObj.sellers = sellers;
        returnObj.customers = customers;
        returnObj.items = items;
        returnObj.services = services;
        return returnObj;
    };
    AdminDashboardComponent.prototype.createDates = function (array) {
        var i = 0;
        var year = this.startYear;
        while (true) {
            array.push({
                date: year + " " + this.monthList[i],
                count: 0
            });
            if ((this.currentYear === year) && (this.currentMonth) === this.monthList[i]) {
                break;
            }
            i++;
            if (i === 12) {
                i = 0;
                year = (parseInt(year.toString()) + 1).toString();
            }
        }
    };
    AdminDashboardComponent.prototype.drawChart = function (ctx, data, name) {
        var chart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                        // label: '',
                        data: [],
                        backgroundColor: [
                            'rgba(255, 255, 255, 0)'
                        ],
                        borderColor: [
                            'rgba(0, 0, 0, 0.5)'
                        ],
                        borderWidth: 2.5
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        this.enterChartData(chart, data, name);
        return chart;
    };
    AdminDashboardComponent.prototype.enterChartData = function (chart, data, name) {
        chart.data.datasets.label = name;
        data.forEach(function (element) {
            chart.data.labels.push(element.date);
            chart.data.datasets[0].data.push(element.count);
        });
        chart.update();
    };
    AdminDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__("../../../../../src/app/components/common/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fill-remaining-space {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n#search-form {\r\n  height: 15px;\r\n  margin-left: 2%;\r\n  margin-right: 10%;\r\n  width: 50%;\r\n}\r\n\r\n.menu-buttons {\r\n  margin-left: auto;\r\n  margin-right: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <button mat-button [routerLink]=\"['/']\"><mat-icon>home</mat-icon></button>\n\n  <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm style=\"width: 100%\">\n\n    <form id=\"search-form\">\n      <div>\n        <button type=\"submit\" mat-button style=\"float: right\" (click)=\"quickSearch(searchKeyword)\"><mat-icon>search</mat-icon></button>\n        <div class=\"form-group\" style=\"overflow: hidden; padding-right: .5em;\">\n          <input class=\"form-control\" type=\"text\" placeholder=\"Quick Search...\" style=\"width: 100%;\"  [(ngModel)]=\"searchKeyword\" name=\"searchKeyword\"/>\n        </div>​\n      </div>\n    </form>\n\n    <div class=\"menu-buttons\">\n      <button mat-button *ngIf=\"this.authService.loggedIn() && !this.isAdmin()\" [routerLink]=\"['/notifications']\"><mat-icon>notifications</mat-icon> Notifications</button>\n      <button mat-button *ngIf=\"this.authService.loggedIn() && !this.isAdmin()\" [routerLink]=\"['/profile']\"><mat-icon>account_circle</mat-icon> Profile</button>\n      <button mat-button *ngIf=\"this.authService.loggedIn() && this.isAdmin()\" [routerLink]=\"['/dashboard']\"><mat-icon>dashboard</mat-icon> Dashboard</button>\n      <button mat-button *ngIf=\"this.authService.loggedIn()\" (click)=\"onLogoutClick()\"><mat-icon>person_outline</mat-icon> LogOut</button>\n      <button mat-button *ngIf=\"!this.authService.loggedIn()\" [routerLink]=\"['/register']\"><mat-icon>person_add</mat-icon> Register</button>\n      <button mat-button *ngIf=\"!this.authService.loggedIn()\" [routerLink]=\"['/login']\"><mat-icon>person</mat-icon> LogIn</button>\n    </div>\n\n  </div>\n\n  <button mat-button [mat-menu-trigger-for]=\"menu\" fxHide=\"false\" fxHide.gt-sm class=\"menu-buttons\">\n    <mat-icon>menu</mat-icon>\n  </button>\n\n</mat-toolbar>\n\n<!--<mat-menu x-position=\"below\" #menu=\"matMenu\">-->\n<mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\n  <button mat-menu-item *ngIf=\"!this.authService.loggedIn()\" [routerLink]=\"['/register']\"><mat-icon>person_add</mat-icon> Register</button>\n  <button mat-menu-item *ngIf=\"!this.authService.loggedIn()\" [routerLink]=\"['/login']\"><mat-icon>person</mat-icon> LogIn</button>\n  <button mat-menu-item *ngIf=\"this.authService.loggedIn()\" [routerLink]=\"['/profile']\"><mat-icon>account_circle</mat-icon> Profile</button>\n  <button mat-menu-item *ngIf=\"this.authService.loggedIn()\" (click)=\"onLogoutClick()\"><mat-icon>person_outline</mat-icon> LogOut</button>\n</mat-menu>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_auth_service__ = __webpack_require__("../../../../../src/app/services/authenticate/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, flashMessagesService, router) {
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.searchObject = {};
        this.types = {};
        this.sortBy = {};
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show("User logged out", { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['/login']);
        return false;
    };
    HeaderComponent.prototype.quickSearch = function (searchKeyword) {
        if (!searchKeyword) {
            return this.flashMessagesService.show("Please enter a keyword to search", { cssClass: 'alert-danger', timeout: 5000 });
        }
        this.types.items = true;
        this.types.services = true;
        this.sortBy.criteria = 'rating';
        this.sortBy.way = 'asc';
        this.searchObject.name = searchKeyword;
        this.searchObject.types = this.types;
        this.searchObject.sortBy = this.sortBy;
        this.router.navigate(['search/results', { search: JSON.stringify(this.searchObject) }]);
        window.location.reload();
    };
    HeaderComponent.prototype.isAdmin = function () {
        return (localStorage.getItem('user_type') === 'admin');
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/common/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authenticate_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/help/help-addsale/help-addsale.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-addsale/help-addsale.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card style=\"margin: 15px 0\">\n    <h3>Add Item/Service for Sale</h3>\n\n    <hr>\n\n    <p><strong>This can be done only if you are registered as a seller.</strong></p>\n\n    <ul>\n      <li>\n        <h5>Add Item</h5>\n        <p>Select the \"Add Item for Sale\" button from the <a [routerLink]=\"['/help/helpprofile']\">profile</a> page.</p>\n        <img src=\"../../../../../assets/help/addItem.png\" style=\"width: 75%\">\n      </li>\n\n      <br>\n      <br>\n\n      <li>\n        <h5>Add Service</h5>\n        <p>Select the \"Add Service for Sale\" button from the <a [routerLink]=\"['/help/helpprofile']\">profile</a> page.</p>\n        <img src=\"../../../../../assets/help/addService.png\" style=\"width: 75%\">\n      </li>\n    </ul>\n\n    <div style=\"width: 100%; text-align: right; margin-top: 25px\">\n      <a [routerLink]=\"['/help']\"><mat-icon style=\"vertical-align: middle\">arrow_back</mat-icon> Back to Help</a>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-addsale/help-addsale.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpAddsaleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpAddsaleComponent = /** @class */ (function () {
    function HelpAddsaleComponent() {
    }
    HelpAddsaleComponent.prototype.ngOnInit = function () {
    };
    HelpAddsaleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help-addsale',
            template: __webpack_require__("../../../../../src/app/components/common/help/help-addsale/help-addsale.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/help/help-addsale/help-addsale.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpAddsaleComponent);
    return HelpAddsaleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/help/help-editprof/help-editprof.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-editprof/help-editprof.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card style=\"margin: 15px 0\">\n    <h3>Edit Profile/Account Details</h3>\n\n    <hr>\n\n    <ul>\n      <li>\n        <h5>Edit Profile and Account Details</h5>\n        <ol>\n          <li>\n            <p>Select the \"Edit\" button on the bottom right hand corner of the <a [routerLink]=\"['/help/helpprofile']\">profile</a> page.</p>\n            <img src=\"../../../../../assets/help/editProfile1.png\" style=\"width: 75%\">\n          </li>\n\n          <br>\n\n          <li>\n            <p>Edit the profile as you wish.</p>\n            <p>If you wish to change the password or email, click \"Edit Email/Password\" button.</p>\n            <img src=\"../../../../../assets/help/editProfile2.png\" style=\"width: 75%\">\n          </li>\n\n          <br>\n\n          <li>\n            <p>Re-enter your password.</p>\n            <img src=\"../../../../../assets/help/editProfile3.png\" style=\"width: 50%\">\n          </li>\n\n          <br>\n\n          <li>\n            <p>Edit the details as you wish.</p>\n            <p>Deleting the account also can be done through this page.</p>\n            <img src=\"../../../../../assets/help/editProfile4.png\" style=\"width: 75%\">\n          </li>\n        </ol>\n      </li>\n\n      <br>\n      <br>\n\n      <li>\n        <h5>Edit Profile Picture</h5>\n\n        <ol>\n          <li>\n            <p>Bring the mouse over the profile picture area, and click the \"Add new profile picture button\".</p>\n            <img src=\"../../../../../assets/help/editProfilePic1.png\" style=\"width: 50%\">\n          </li>\n\n          <br>\n\n          <li>\n            <p>Click the browse button, browse for an image, select the image and click the \"Upload\" button.</p>\n            <img src=\"../../../../../assets/help/editProfilePic2.png\" style=\"width: 50%\">\n          </li>\n\n          <br>\n\n          <li>\n            <p>After uploading, the profile picture can be edited (the same way as adding) or deleted.</p>\n            <img src=\"../../../../../assets/help/editProfilePic3.png\" style=\"width: 50%\">\n          </li>\n        </ol>\n      </li>\n    </ul>\n\n    <div style=\"width: 100%; text-align: right; margin-top: 25px\">\n      <a [routerLink]=\"['/help']\"><mat-icon style=\"vertical-align: middle\">arrow_back</mat-icon> Back to Help</a>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-editprof/help-editprof.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpEditprofComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpEditprofComponent = /** @class */ (function () {
    function HelpEditprofComponent() {
    }
    HelpEditprofComponent.prototype.ngOnInit = function () {
    };
    HelpEditprofComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help-editprof',
            template: __webpack_require__("../../../../../src/app/components/common/help/help-editprof/help-editprof.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/help/help-editprof/help-editprof.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpEditprofComponent);
    return HelpEditprofComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/help/help-editsale/help-editsale.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-editsale/help-editsale.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card style=\"margin: 15px 0\">\n    <h3>View and Edit Items/Services you have added for sale</h3>\n\n    <hr>\n\n    <p><strong>This can be done only if you are registered as a seller and the item/service is published by you for sale.</strong></p>\n\n    <ul>\n      <li>\n        <h5>View Item</h5>\n        <p>Select the item by <a [routerLink]=\"['/help/helpsearch']\">searching</a> for the item or through your <a [routerLink]=\"['/help/helpprofile']\">profile</a> page.</p>\n        <p>Click the \"Edit\" button if you want to edit the item and \"Delete\" button if you want to delete the item.</p>\n        <img src=\"../../../../../assets/help/viewItemOwner.png\" style=\"width: 75%\">\n      </li>\n\n      <br>\n      <br>\n\n      <li>\n        <h5>View the reviews on the item</h5>\n        <p>Scroll down the item's page.</p>\n        <img src=\"../../../../../assets/help/viewItemOwnerReviews.png\" style=\"width: 75%\">\n      </li>\n\n      <br>\n      <br>\n\n      <li>\n        <h5>Add/Change the image of the item</h5>\n        <ol>\n          <li>\n            <p>Bring the mouse over the item's image area, and click the \"Add new profile picture button\".</p>\n            <img src=\"../../../../../assets/help/addItemImage1.png\" style=\"width: 50%\">\n          </li>\n\n          <br>\n\n          <li>\n            <p>Click the browse button, browse for an image, select the image and click the \"Upload\" button.</p>\n            <img src=\"../../../../../assets/help/addItemImage2.png\" style=\"width: 50%\">\n          </li>\n\n          <br>\n\n          <li>\n            <p>After uploading, the profile picture can be edited (the same way as adding) or deleted.</p>\n            <img src=\"../../../../../assets/help/addItemImage3.png\" style=\"width: 50%\">\n          </li>\n        </ol>\n      </li>\n    </ul>\n\n    <br>\n    <br>\n\n    <h5><strong><em>The procedure will be identical for a Service.</em></strong></h5>\n\n    <div style=\"width: 100%; text-align: right; margin-top: 25px\">\n      <a [routerLink]=\"['/help']\"><mat-icon style=\"vertical-align: middle\">arrow_back</mat-icon> Back to Help</a>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-editsale/help-editsale.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpEditsaleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpEditsaleComponent = /** @class */ (function () {
    function HelpEditsaleComponent() {
    }
    HelpEditsaleComponent.prototype.ngOnInit = function () {
    };
    HelpEditsaleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help-editsale',
            template: __webpack_require__("../../../../../src/app/components/common/help/help-editsale/help-editsale.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/help/help-editsale/help-editsale.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpEditsaleComponent);
    return HelpEditsaleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/help/help-favreqsale/help-favreqsale.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-favreqsale/help-favreqsale.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card style=\"margin: 15px 0\">\n    <h3>View, Favorite and Request Items/Services</h3>\n\n    <hr>\n\n    <p><strong>This can be done only if you are registered as a customer.</strong></p>\n\n    <ul>\n      <li>\n        <h5>View, Favorite and Request for an Item</h5>\n        <p>Select the item by <a [routerLink]=\"['/help/helpsearch']\">searching</a> for the item or through your <a [routerLink]=\"['/help/helpprofile']\">profile</a> page (if you have bought, fevorited or requested the item).</p>\n        <p>The item can be favorited by clicking the \"Favorite\" button and requested for purchase by using \"Request\" button</p>\n        <img src=\"../../../../../assets/help/viewItemCustomer.png\" style=\"width: 75%\">\n      </li>\n\n      <br>\n      <br>\n\n      <li>\n        <h5>Unfavorite an item (<em>if favorited</em>)</h5>\n        <p>Select the item by <a [routerLink]=\"['/help/helpsearch']\">searching</a> for the item or through your <a [routerLink]=\"['/help/helpprofile']\">profile</a> page (under the \"Favorited\" tab).</p>\n        <img src=\"../../../../../assets/help/viewItemCustomerUnfav.png\" style=\"width: 25%\">\n      </li>\n\n      <br>\n      <br>\n\n      <li>\n        <h5>Cancel request to purchase an item (<em>if requested</em>)</h5>\n        <p>Select the item by <a [routerLink]=\"['/help/helpsearch']\">searching</a> for the item or through your <a [routerLink]=\"['/help/helpprofile']\">profile</a> page (under the \"Requested\" tab).</p>\n        <img src=\"../../../../../assets/help/viewItemCustomerCancelReq.png\" style=\"width: 25%\">\n      </li>\n    </ul>\n\n    <br>\n    <br>\n\n    <h5><strong><em>The procedure will be identical for a Service.</em></strong></h5>\n\n    <div style=\"width: 100%; text-align: right; margin-top: 25px\">\n      <a [routerLink]=\"['/help']\"><mat-icon style=\"vertical-align: middle\">arrow_back</mat-icon> Back to Help</a>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-favreqsale/help-favreqsale.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpFavreqsaleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpFavreqsaleComponent = /** @class */ (function () {
    function HelpFavreqsaleComponent() {
    }
    HelpFavreqsaleComponent.prototype.ngOnInit = function () {
    };
    HelpFavreqsaleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help-favreqsale',
            template: __webpack_require__("../../../../../src/app/components/common/help/help-favreqsale/help-favreqsale.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/help/help-favreqsale/help-favreqsale.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpFavreqsaleComponent);
    return HelpFavreqsaleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/help/help-home/help-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-home/help-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card style=\"margin: 15px 0\">\n    <h3>Homepage</h3>\n\n    <hr>\n\n    <ul>\n      <li>\n        <h5>When logged out</h5>\n        <p>Select the \"Home\" button from the <a [routerLink]=\"['/help/helpnavbar']\">navbar</a>.</p>\n        <img src=\"../../../../../assets/help/homeLoggedOut.png\" style=\"width: 75%\">\n      </li>\n\n      <br>\n      <br>\n\n      <li>\n        <h5>When logged  in</h5>\n        <p>Select the \"Home\" button from the <a [routerLink]=\"['/help/helpnavbar']\">navbar</a>.</p>\n        <img src=\"../../../../../assets/help/homeLoggedOut.png\" style=\"width: 75%\">\n      </li>\n    </ul>\n\n    <div style=\"width: 100%; text-align: right; margin-top: 25px\">\n      <a [routerLink]=\"['/help']\"><mat-icon style=\"vertical-align: middle\">arrow_back</mat-icon> Back to Help</a>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-home/help-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpHomeComponent = /** @class */ (function () {
    function HelpHomeComponent() {
    }
    HelpHomeComponent.prototype.ngOnInit = function () {
    };
    HelpHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help-home',
            template: __webpack_require__("../../../../../src/app/components/common/help/help-home/help-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/help/help-home/help-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpHomeComponent);
    return HelpHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/help/help-navbar/help-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-navbar/help-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card style=\"margin: 15px 0\">\n    <h3>NavBar</h3>\n\n    <hr>\n\n    <p><strong>NavBar will always be visible on the top of the page.</strong></p>\n\n    <ul>\n      <li>\n        <h5>When logged out</h5>\n        <img src=\"../../../../../assets/help/navbarLoggedOut.png\" style=\"width: 100%\">\n      </li>\n\n      <br>\n      <br>\n\n      <li>\n        <h5>When logged  in</h5>\n        <img src=\"../../../../../assets/help/navbarLoggedIn.png\" style=\"width: 100%\">\n      </li>\n    </ul>\n\n    <div style=\"width: 100%; text-align: right; margin-top: 25px\">\n      <a [routerLink]=\"['/help']\"><mat-icon style=\"vertical-align: middle\">arrow_back</mat-icon> Back to Help</a>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-navbar/help-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpNavbarComponent = /** @class */ (function () {
    function HelpNavbarComponent() {
    }
    HelpNavbarComponent.prototype.ngOnInit = function () {
    };
    HelpNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help-navbar',
            template: __webpack_require__("../../../../../src/app/components/common/help/help-navbar/help-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/help/help-navbar/help-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpNavbarComponent);
    return HelpNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/help/help-notifications/help-notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-notifications/help-notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card style=\"margin: 15px 0\">\n    <h3>Checking Notifications</h3>\n\n    <hr>\n\n    <ul>\n      <li>\n        <h5>Check Notifications</h5>\n        <p>Click the \"Notifications\" button on the <a [routerLink]=\"['/help/helpnavbar']\">navbar</a> or through yout <a [routerLink]=\"['/help/helpprofile']\">profile</a> page (<em>if any new notifications are there</em>).</p>\n        <p>The notifications can be deleted if necessary.</p>\n        <img src=\"../../../../../assets/help/notifications.png\" style=\"width: 75%\">\n      </li>\n    </ul>\n\n    <div style=\"width: 100%; text-align: right; margin-top: 25px\">\n      <a [routerLink]=\"['/help']\"><mat-icon style=\"vertical-align: middle\">arrow_back</mat-icon> Back to Help</a>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-notifications/help-notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpNotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpNotificationsComponent = /** @class */ (function () {
    function HelpNotificationsComponent() {
    }
    HelpNotificationsComponent.prototype.ngOnInit = function () {
    };
    HelpNotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help-notifications',
            template: __webpack_require__("../../../../../src/app/components/common/help/help-notifications/help-notifications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/help/help-notifications/help-notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpNotificationsComponent);
    return HelpNotificationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/help/help-prof/help-prof.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-prof/help-prof.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card style=\"margin: 15px 0\">\n    <h3>User Profiles</h3>\n\n    <hr>\n\n    <ul>\n      <li>\n        <p>If new notifications are available, they will be displayed on top when you're visiting your profile.</p>\n        <img src=\"../../../../../assets/help/profileNotifications.png\" style=\"width: 100%\">\n      </li>\n\n      <br>\n      <br>\n\n      <li>\n        <h5>Seller Profile</h5>\n        <p>Select the \"Profile\" button from the <a [routerLink]=\"['/help/helpnavbar']\">navbar</a> or the <a [routerLink]=\"['/help/helphome']\">homepage</a> (while logged in).</p>\n        <img src=\"../../../../../assets/help/profileSeller.png\" style=\"width: 75%\">\n      </li>\n\n      <br>\n      <br>\n\n      <li>\n        <h5>Customer Profile</h5>\n        <p>Select the \"Profile\" button from the <a [routerLink]=\"['/help/helpnavbar']\">navbar</a> or the <a [routerLink]=\"['/help/helphome']\">homepage</a> (while logged in).</p>\n        <img src=\"../../../../../assets/help/profileCustomer.png\" style=\"width: 75%\">\n      </li>\n    </ul>\n\n    <div style=\"width: 100%; text-align: right; margin-top: 25px\">\n      <a [routerLink]=\"['/help']\"><mat-icon style=\"vertical-align: middle\">arrow_back</mat-icon> Back to Help</a>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-prof/help-prof.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpProfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpProfComponent = /** @class */ (function () {
    function HelpProfComponent() {
    }
    HelpProfComponent.prototype.ngOnInit = function () {
    };
    HelpProfComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help-prof',
            template: __webpack_require__("../../../../../src/app/components/common/help/help-prof/help-prof.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/help/help-prof/help-prof.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpProfComponent);
    return HelpProfComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/help/help-reglog/help-reglog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-reglog/help-reglog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card style=\"margin: 15px 0\">\n    <h3>Register and Login</h3>\n\n    <hr>\n\n    <ul>\n      <li>\n        <h5>Register</h5>\n        <p>Select the \"Register\" button from the <a [routerLink]=\"['/help/helpnavbar']\">navbar</a> or the <a [routerLink]=\"['/help/helphome']\">homepage</a> (while logged out).</p>\n        <img src=\"../../../../../assets/help/register.png\" style=\"width: 75%\">\n      </li>\n\n      <br>\n      <br>\n\n      <li>\n        <h5>Login</h5>\n        <p>Select the \"Login\" button from the <a [routerLink]=\"['/help/helpnavbar']\">navbar</a> or the <a [routerLink]=\"['/help/helphome']\">homepage</a> (while logged out).</p>\n        <img src=\"../../../../../assets/help/login.png\" style=\"width: 75%\">\n      </li>\n    </ul>\n\n    <div style=\"width: 100%; text-align: right; margin-top: 25px\">\n      <a [routerLink]=\"['/help']\"><mat-icon style=\"vertical-align: middle\">arrow_back</mat-icon> Back to Help</a>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-reglog/help-reglog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpReglogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpReglogComponent = /** @class */ (function () {
    function HelpReglogComponent() {
    }
    HelpReglogComponent.prototype.ngOnInit = function () {
    };
    HelpReglogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help-reglog',
            template: __webpack_require__("../../../../../src/app/components/common/help/help-reglog/help-reglog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/help/help-reglog/help-reglog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpReglogComponent);
    return HelpReglogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/help/help-requests/help-requests.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-requests/help-requests.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card style=\"margin: 15px 0\">\n    <h3>Manage Purchase Requests</h3>\n\n    <hr>\n\n    <p><strong>This can be done only if you are registered as a seller.</strong></p>\n\n    <ul>\n      <li>\n        <h5>Accept/Decline Requests</h5>\n        <p>Go to the requests page via your <a [routerLink]=\"['/help/helpprofile']\">profile</a> or through <a [routerLink]=\"['/help/helpnotifications']\">notifications</a>.</p>\n        <p>Notifications can be viewed, accepted and declined as you wish.</p>\n        <img src=\"../../../../../assets/help/requests.png\" style=\"width: 75%\">\n      </li>\n    </ul>\n\n    <div style=\"width: 100%; text-align: right; margin-top: 25px\">\n      <a [routerLink]=\"['/help']\"><mat-icon style=\"vertical-align: middle\">arrow_back</mat-icon> Back to Help</a>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-requests/help-requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpRequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpRequestsComponent = /** @class */ (function () {
    function HelpRequestsComponent() {
    }
    HelpRequestsComponent.prototype.ngOnInit = function () {
    };
    HelpRequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help-requests',
            template: __webpack_require__("../../../../../src/app/components/common/help/help-requests/help-requests.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/help/help-requests/help-requests.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpRequestsComponent);
    return HelpRequestsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/help/help-reviewsale/help-reviewsale.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-reviewsale/help-reviewsale.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card style=\"margin: 15px 0\">\n    <h3>Add a Review on an Item/Service</h3>\n\n    <hr>\n\n    <ul>\n      <li>\n        <h5>Add/Edit a Review</h5>\n\n        <ol>\n          <li>\n            <p>Select the item by <a [routerLink]=\"['/help/helpsearch']\">searching</a> for the item or through your <a [routerLink]=\"['/help/helpprofile']\">profile</a> page (if you have bought, fevorited or requested the item).</p>\n            <p>Scroll to the bottom and click the \"Add Review\" button.</p>\n            <img src=\"../../../../../assets/help/addReview1.png\" style=\"width: 50%\">\n          </li>\n\n          <br>\n\n          <li>\n            <p>Type the review and select the rating you want to give for the item and submit.</p>\n            <img src=\"../../../../../assets/help/addReview2.png\" style=\"width: 75%\">\n          </li>\n\n          <br>\n\n          <li>\n            <p>Click the \"Edit\" button to edit the review and \"Delete\" button to delete the review (<em>if you have added a review</em>).</p>\n            <img src=\"../../../../../assets/help/addReview3.png\" style=\"width: 75%\">\n          </li>\n        </ol>\n      </li>\n    </ul>\n\n    <br>\n    <br>\n\n    <h5><strong><em>The procedure will be identical when reviewing a Service.</em></strong></h5>\n\n    <div style=\"width: 100%; text-align: right; margin-top: 25px\">\n      <a [routerLink]=\"['/help']\"><mat-icon style=\"vertical-align: middle\">arrow_back</mat-icon> Back to Help</a>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-reviewsale/help-reviewsale.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpReviewsaleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpReviewsaleComponent = /** @class */ (function () {
    function HelpReviewsaleComponent() {
    }
    HelpReviewsaleComponent.prototype.ngOnInit = function () {
    };
    HelpReviewsaleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help-reviewsale',
            template: __webpack_require__("../../../../../src/app/components/common/help/help-reviewsale/help-reviewsale.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/help/help-reviewsale/help-reviewsale.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpReviewsaleComponent);
    return HelpReviewsaleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/help/help-search/help-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-search/help-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card style=\"margin: 15px 0\">\n    <h3>Search for Items/Services</h3>\n\n    <hr>\n\n    <ul>\n      <li>\n        <h5>Search</h5>\n        <p>Type a keyword and enter using the search bar in the <a [routerLink]=\"['/help/helpnavbar']\">navbar</a>.</p>\n      </li>\n\n      <br>\n      <br>\n\n      <li>\n        <h5>Search results</h5>\n        <img src=\"../../../../../assets/help/searchResults.png\" style=\"width: 75%\">\n      </li>\n\n      <br>\n      <br>\n\n      <li>\n        <h5>Refine search results</h5>\n        <p>Expand the \"Refine Search\" form in the \"Search Results\" page.</p>\n        <p>Refine the search as you wish and submit.</p>\n        <img src=\"../../../../../assets/help/searchRefine.png\" style=\"width: 75%\">\n      </li>\n    </ul>\n\n    <div style=\"width: 100%; text-align: right; margin-top: 25px\">\n      <a [routerLink]=\"['/help']\"><mat-icon style=\"vertical-align: middle\">arrow_back</mat-icon> Back to Help</a>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/help/help-search/help-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpSearchComponent = /** @class */ (function () {
    function HelpSearchComponent() {
    }
    HelpSearchComponent.prototype.ngOnInit = function () {
    };
    HelpSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help-search',
            template: __webpack_require__("../../../../../src/app/components/common/help/help-search/help-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/help/help-search/help-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpSearchComponent);
    return HelpSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div style=\"text-align: center; margin: 15px\">\n    <h2>Help and FAQ</h2>\n  </div>\n  <mat-card>\n    <div style=\"width: 100%; height: 100%\">\n      <ul>\n        <li><p><a [routerLink]=\"['/help/helpreglog']\">Register and Login</a></p></li>\n        <li><p><a [routerLink]=\"['/help/helpprofile']\">User Profiles</a></p></li>\n        <li><p><a [routerLink]=\"['/help/helphome']\">Homepage</a></p></li>\n        <li><p><a [routerLink]=\"['/help/helpnavbar']\">NavBar</a></p></li>\n        <li><p><a [routerLink]=\"['/help/helpeditprof']\">Edit Profile and Account Details</a></p></li>\n        <li><p><a [routerLink]=\"['/help/helpaddsale']\">Add Items/Services for Sale</a></p></li>\n        <li><p><a [routerLink]=\"['/help/helpeditsale']\">Viewing and Editing the Items/Services you have added for sale</a></p></li>\n        <li><p><a [routerLink]=\"['/help/helpfavreq']\">Favorite and Request for Items/Services</a></p></li>\n        <li><p><a [routerLink]=\"['/help/helprev']\">Adding Ratings and Reviews for Items/Services</a></p></li>\n        <li><p><a [routerLink]=\"['/help/helpnotifications']\">Checking Notifications</a></p></li>\n        <li><p><a [routerLink]=\"['/help/helpsearch']\">Searching for Items/Services</a></p></li>\n        <li><p><a [routerLink]=\"['/help/helprequests']\">Manage Purchase Requests</a></p></li>\n      </ul>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help',
            template: __webpack_require__("../../../../../src/app/components/common/help/help.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/notifications/notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 10px\">\n  <div *ngIf=\"!notsAvailable\" style=\"margin-top: 100px; text-align: center; width: 100%\">\n    <p><mat-icon>report_problem</mat-icon></p>\n    <h3>You have no notifications</h3>\n  </div>\n\n  <div *ngIf=\"notsAvailable\">\n    <div *ngFor=\"let notification of notifications\">\n      <p *ngIf=\"!notification.checked\" style=\"padding: 10px; background: lightblue\">\n\n        <span *ngIf=\"notification.type === 'review'\">\n          <span><mat-icon style=\"vertical-align: middle\">rate_review</mat-icon> &nbsp;&nbsp;</span>\n\n          <span><a [routerLink]=\"['/users/' + notification.fromType + '/' + notification.fromId]\">{{notification.fromUsername}}</a></span>\n\n          <span> has </span>\n\n          <span>reviewed your <a [routerLink]=\"['/' + notification.itemType + 's/' + notification.itemId]\">{{notification.itemType}}</a></span>\n        </span>\n\n        <span *ngIf=\"notification.type === 'favorite'\">\n          <span><mat-icon style=\"vertical-align: middle\">favorite</mat-icon> &nbsp;&nbsp;</span>\n\n          <span><a [routerLink]=\"['/users/' + notification.fromType + '/' + notification.fromId]\">{{notification.fromUsername}}</a></span>\n\n          <span> has </span>\n\n          <span>favorited your <a [routerLink]=\"['/' + notification.itemType + 's/' + notification.itemId]\">{{notification.itemType}}</a></span>\n        </span>\n\n        <span *ngIf=\"notification.type === 'updateFav'\">\n          <span><mat-icon style=\"vertical-align: middle\">edit</mat-icon> &nbsp;&nbsp;</span>\n\n          <span><a [routerLink]=\"['/users/' + notification.fromType + '/' + notification.fromId]\">{{notification.fromUsername}}</a></span>\n\n          <span> has </span>\n\n          <span>updated the <a [routerLink]=\"['/' + notification.itemType + 's/' + notification.itemId]\">{{notification.itemType}}</a> you have favorited</span>\n        </span>\n\n        <span *ngIf=\"notification.type === 'deleteFav'\">\n          <span><mat-icon style=\"vertical-align: middle\">delete</mat-icon> &nbsp;&nbsp;</span>\n\n          <span><a [routerLink]=\"['/users/' + notification.fromType + '/' + notification.fromId]\">{{notification.fromUsername}}</a></span>\n\n          <span> has </span>\n\n          <span>deleted the item/service you have favorited</span>\n        </span>\n\n        <span *ngIf=\"notification.type === 'request'\">\n          <span><mat-icon style=\"vertical-align: middle\">info</mat-icon> &nbsp;&nbsp;</span>\n\n          <span>You have a new purchase </span>\n\n          <span><a [routerLink]=\"['/requests/']\">request</a></span>\n        </span>\n\n        <span *ngIf=\"notification.type === 'reqAccept'\">\n          <span><mat-icon style=\"vertical-align: middle\">done</mat-icon> &nbsp;&nbsp;</span>\n\n          <span>The </span>\n\n          <span><a [routerLink]=\"['/' + notification.itemType + 's/' + notification.itemId]\">{{notification.itemType}}</a></span>\n\n          <span> you have request for purchase has been accepted by</span>\n\n          <span><a [routerLink]=\"['/users/' + notification.fromType + '/' + notification.fromId]\">{{notification.fromUsername}}</a></span>\n        </span>\n\n        <span *ngIf=\"notification.type === 'reqDecline'\">\n          <span><mat-icon style=\"vertical-align: middle\">clear</mat-icon> &nbsp;&nbsp;</span>\n\n          <span>The </span>\n\n          <span><a [routerLink]=\"['/' + notification.itemType + 's/' + notification.itemId]\">{{notification.itemType}}</a></span>\n\n          <span> you have request for purchase has been declined by</span>\n\n          <span><a [routerLink]=\"['/users/' + notification.fromType + '/' + notification.fromId]\">{{notification.fromUsername}}</a></span>\n        </span>\n\n        <button mat-icon-button style=\"float: right\" color=\"warn\" (click)=\"deleteNot(notification._id)\"><mat-icon>delete</mat-icon></button>\n      </p>\n\n      <p *ngIf=\"notification.checked\" style=\"padding: 10px\">\n\n        <span *ngIf=\"notification.type === 'review'\">\n          <span><mat-icon style=\"vertical-align: middle\">rate_review</mat-icon> &nbsp;&nbsp;</span>\n\n          <span><a [routerLink]=\"['/users/' + notification.fromType + '/' + notification.fromId]\">{{notification.fromUsername}}</a></span>\n\n          <span> has </span>\n\n          <span>reviewed your <a [routerLink]=\"['/' + notification.itemType + 's/' + notification.itemId]\">{{notification.itemType}}</a></span>\n        </span>\n\n        <span *ngIf=\"notification.type === 'favorite'\">\n          <span><mat-icon style=\"vertical-align: middle\">favorite</mat-icon> &nbsp;&nbsp;</span>\n\n          <span><a [routerLink]=\"['/users/' + notification.fromType + '/' + notification.fromId]\">{{notification.fromUsername}}</a></span>\n\n          <span> has </span>\n\n          <span>favorited your <a [routerLink]=\"['/' + notification.itemType + 's/' + notification.itemId]\">{{notification.itemType}}</a></span>\n        </span>\n\n        <span *ngIf=\"notification.type === 'updateFav'\">\n          <span><mat-icon style=\"vertical-align: middle\">edit</mat-icon> &nbsp;&nbsp;</span>\n\n          <span><a [routerLink]=\"['/users/' + notification.fromType + '/' + notification.fromId]\">{{notification.fromUsername}}</a></span>\n\n          <span> has </span>\n\n          <span>updated the <a [routerLink]=\"['/' + notification.itemType + 's/' + notification.itemId]\">{{notification.itemType}}</a> you have favorited</span>\n        </span>\n\n        <span *ngIf=\"notification.type === 'deleteFav'\">\n          <span><mat-icon style=\"vertical-align: middle\">delete</mat-icon> &nbsp;&nbsp;</span>\n\n          <span><a [routerLink]=\"['/users/' + notification.fromType + '/' + notification.fromId]\">{{notification.fromUsername}}</a></span>\n\n          <span> has </span>\n\n          <span>deleted the item/service you have favorited</span>\n        </span>\n\n        <span *ngIf=\"notification.type === 'request'\">\n          <span><mat-icon style=\"vertical-align: middle\">info</mat-icon> &nbsp;&nbsp;</span>\n\n          <span>You have a new purchase </span>\n\n          <span><a [routerLink]=\"['/requests/']\">request</a></span>\n        </span>\n\n        <span *ngIf=\"notification.type === 'reqAccept'\">\n          <span><mat-icon style=\"vertical-align: middle\">done</mat-icon> &nbsp;&nbsp;</span>\n\n          <span>The </span>\n\n          <span><a [routerLink]=\"['/' + notification.itemType + 's/' + notification.itemId]\">{{notification.itemType}}</a></span>\n\n          <span> you have request for purchase has been accepted by</span>\n\n          <span><a [routerLink]=\"['/users/' + notification.fromType + '/' + notification.fromId]\">{{notification.fromUsername}}</a></span>\n        </span>\n\n        <span *ngIf=\"notification.type === 'reqDecline'\">\n          <span><mat-icon style=\"vertical-align: middle\">clear</mat-icon> &nbsp;&nbsp;</span>\n\n          <span>The </span>\n\n          <span><a [routerLink]=\"['/' + notification.itemType + 's/' + notification.itemId]\">{{notification.itemType}}</a></span>\n\n          <span> you have request for purchase has been declined by</span>\n\n          <span><a [routerLink]=\"['/users/' + notification.fromType + '/' + notification.fromId]\">{{notification.fromUsername}}</a></span>\n        </span>\n\n        <button mat-icon-button style=\"float: right\" color=\"warn\" (click)=\"deleteNot(notification._id)\"><mat-icon>delete</mat-icon></button>\n      </p>\n      <mat-divider></mat-divider>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notifications_notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications/notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authenticate_auth_service__ = __webpack_require__("../../../../../src/app/services/authenticate/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(notificationsService, authService, flashMessagesService, router) {
        this.notificationsService = notificationsService;
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.userId = localStorage.getItem('user_id');
        this.notsAvailable = false;
        this.notifications = [];
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authService.loggedIn()) {
            return this.router.navigate(['/login']);
        }
        this.notificationsService.getNotifications(this.userId)
            .subscribe(function (data) {
            if (!data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            else {
                if (data.nots.length !== 0) {
                    _this.notsAvailable = true;
                }
                data.nots.forEach(function (not) {
                    _this.notifications.push(not);
                });
                _this.notifications = _this.sortByKey(_this.notifications, 'timestamp').reverse();
            }
        });
    };
    NotificationsComponent.prototype.sortByKey = function (array, key) {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    };
    NotificationsComponent.prototype.checkNots = function (nots) {
        var _this = this;
        nots.forEach(function (not) {
            if (!not.checked) {
                _this.notificationsService.checkNotification(not._id)
                    .subscribe(function (data) {
                });
            }
        });
    };
    NotificationsComponent.prototype.ngOnDestroy = function () {
        this.checkNots(this.notifications);
    };
    NotificationsComponent.prototype.deleteNot = function (notId) {
        var _this = this;
        this.notificationsService.deleteNotification(notId)
            .subscribe(function (data) {
            if (!data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            else {
                window.location.reload();
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
        });
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__("../../../../../src/app/components/common/notifications/notifications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_notifications_notifications_service__["a" /* NotificationsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_authenticate_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/requests/requests.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/requests/requests.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div style=\"width: 100%; text-align: center; margin: 25px 0;\"><h2>Purchase Requests</h2></div>\n\n  <div *ngIf=\"!reqsAvailable\" style=\"margin-top: 100px; text-align: center; width: 100%\">\n    <mat-card>\n      <p><mat-icon>report_problem</mat-icon></p>\n      <h3>You have no purchase requests</h3>\n    </mat-card>\n  </div>\n\n  <div *ngIf=\"reqsAvailable\">\n    <mat-card style=\"width: 100%; margin-bottom: 5px\" *ngFor=\"let request of requests\">\n      <mat-grid-list cols=\"16\" rowHeight=\"20px\">\n        <mat-grid-tile colspan=\"2\" rowspan=\"4\">\n          <div style=\"width: 100%; height: 100%;\">\n            <div *ngIf=\"!request.item.image\">\n              <img src=\"https://www.jainsusa.com/images/store/landscape/not-available.jpg\" style=\"width: 100%\">\n            </div>\n\n            <div *ngIf=\"request.item.image\">\n              <!--<img [src]=\"'http://localhost:3000/images/' + request.item.image\" style=\"width: 100%\">-->\n              <img [src]=\"'images/' + request.item.image\" style=\"width: 100%\">\n            </div>\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"3\" rowspan=\"2\">\n          <div style=\"width: 100%; height: 100%; padding-left: 25px\">\n            <p *ngIf=\"request.itemType==='item'\">Item: </p>\n            <p *ngIf=\"request.itemType==='service'\">Service: </p>\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"8\" rowspan=\"2\">\n          <div style=\"width: 100%; height: 100%; padding-left: 25px\">\n            <a [routerLink]=\"['/' + request.itemType + 's/' + request.item._id]\"><p>{{request.item.name}}</p></a>\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"3\" rowspan=\"2\">\n          <div style=\"width: 100%; height: 100%; padding-left: 25px\" *ngIf=\"!request.accepted\">\n            <button mat-raised-button color=\"primary\" (click)=\"acceptReq(request.id)\">Accept</button>\n          </div>\n\n          <div style=\"width: 100%; height: 100%; padding-left: 25px\" *ngIf=\"request.accepted\">\n            <p style=\"color: red\"><strong>Accepted Request</strong></p>\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"3\" rowspan=\"2\">\n          <div style=\"width: 100%; height: 100%; padding-left: 25px\">\n            <p>Request By: </p>\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"8\" rowspan=\"2\">\n          <div style=\"width: 100%; height: 100%; padding-left: 25px\">\n            <a [routerLink]=\"['/users/customer/' + request.from._id]\"><p>{{request.from.username}}</p></a>\n\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"3\" rowspan=\"2\">\n          <div style=\"width: 100%; height: 100%; padding-left: 25px\" *ngIf=\"!request.accepted\">\n            <button mat-raised-button color=\"warn\" (click)=\"declineReq(request.id)\">Decline</button>\n          </div>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/requests/requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_requests_request_service__ = __webpack_require__("../../../../../src/app/services/requests/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authenticate_auth_service__ = __webpack_require__("../../../../../src/app/services/authenticate/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_items_item_service__ = __webpack_require__("../../../../../src/app/services/items/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequestsComponent = /** @class */ (function () {
    function RequestsComponent(router, authService, requestService, itemService, flashMessagesService) {
        this.router = router;
        this.authService = authService;
        this.requestService = requestService;
        this.itemService = itemService;
        this.flashMessagesService = flashMessagesService;
        this.requests = [];
        this.reqsAvailable = false;
    }
    RequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('user_type') !== 'seller') {
            this.flashMessagesService.show('You much be logged in as a seller to access that page', { cssClass: 'alert-danger', timeout: 5000 });
            return this.router.navigate(['/profile']);
        }
        if (!this.authService.loggedIn()) {
            this.flashMessagesService.show('You much be logged in to access that page', { cssClass: 'alert-danger', timeout: 5000 });
            return this.router.navigate(['/login']);
        }
        if (localStorage.getItem('user_type') !== 'seller') {
            this.flashMessagesService.show('You much be signed in as a seller to receive purchase requests', { cssClass: 'alert-danger', timeout: 5000 });
            return this.router.navigate(['/profile']);
        }
        this.requestService.getRequstsBySeller(localStorage.getItem('user_id'))
            .subscribe(function (data) {
            if (!data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            else {
                data.reqs.forEach(function (req) {
                    _this.authService.getUser(req.from, 'customer')
                        .subscribe(function (users) {
                        if (!users.success) {
                            _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                        }
                        else {
                            if (req.itemType === 'item') {
                                _this.itemService.getItem(req.item)
                                    .subscribe(function (items) {
                                    if (!items.success) {
                                        _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                                    }
                                    else {
                                        var request = {
                                            id: req._id,
                                            from: users.user,
                                            item: items.item,
                                            itemType: 'item',
                                            accepted: req.accepted,
                                            timestamp: req.timestamp
                                        };
                                        _this.requests.push(request);
                                        if (_this.requests.length > 0) {
                                            _this.reqsAvailable = true;
                                        }
                                    }
                                });
                            }
                            else if (req.itemType === 'service') {
                                _this.itemService.getService(req.item)
                                    .subscribe(function (services) {
                                    if (!services.success) {
                                        _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                                    }
                                    else {
                                        var request = {
                                            id: req._id,
                                            from: users.user,
                                            item: services.service,
                                            itemType: 'service',
                                            accepted: req.accepted,
                                            timestamp: req.timestamp
                                        };
                                        _this.requests.push(request);
                                        if (_this.requests.length > 0) {
                                            _this.reqsAvailable = true;
                                        }
                                    }
                                });
                            }
                        }
                    });
                });
            }
        });
    };
    RequestsComponent.prototype.acceptReq = function (reqId) {
        var _this = this;
        this.requestService.acceptRequest(reqId)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show("The request for purchase has been accepted", { cssClass: 'alert-success', timeout: 5000 });
                window.location.reload();
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    RequestsComponent.prototype.declineReq = function (reqId) {
        var _this = this;
        this.requestService.declineRequest(reqId)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show("The was successfully declined", { cssClass: 'alert-success', timeout: 5000 });
                window.location.reload();
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    RequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-requests',
            template: __webpack_require__("../../../../../src/app/components/common/requests/requests.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/requests/requests.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_authenticate_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__services_requests_request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_5__services_items_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], RequestsComponent);
    return RequestsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/WallpaperStudio10-73456.jpg")) + ");\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-color:#464646;\r\n  height: 100vh;\r\n  width: 100%;\r\n}\r\n\r\n.welcome {\r\n  margin: auto;\r\n  height: 50%;\r\n  padding-top: 15%;\r\n  width: 50%;\r\n  text-align: center;\r\n}\r\n\r\nh1,h3 {\r\n  text-shadow: 5px 5px 5px #82a3e0;\r\n  color: white;\r\n}\r\n\r\nbutton {\r\n  margin: 10px;\r\n}\r\n\r\n.footer {\r\n  /*position: absolute;*/\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  padding: 1.5%;\r\n  background-color: rgba(0, 0, 0, 0.15);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n  <div class=\"welcome\">\r\n    <h1>Find-Anything</h1>\r\n    <h3>A website to find everything you need!</h3>\r\n\r\n    <div *ngIf=\"!loggedIn\">\r\n      <button mat-raised-button [routerLink]=\"['/register']\" color=\"primary\">Register</button>\r\n      <button mat-raised-button [routerLink]=\"['/login']\">Login</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"loggedIn\">\r\n      <button mat-raised-button [routerLink]=\"['/profile']\" color=\"primary\">Profile</button>\r\n      <button mat-raised-button (click)=\"onLogoutClick()\" color=\"warn\">Logout</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"footer\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5\">\r\n      <div style=\"width: 100%; height: 100%; text-align: justify;\">\r\n        <h6>About</h6>\r\n        <hr>\r\n        <p>Find anything is a website designed for people all over Sri Lanka who are willing to buy and sell items and services. You can register as a seller and publish your items and services for sale or register as a customer and buy the items and services published.</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3\">\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <div style=\"width: 100%; height: 100%; text-align: left\">\r\n        <h6>Website designed by <strong>Yumantha De Silva</strong></h6>\r\n        <p><mat-icon>phone</mat-icon>&nbsp;&nbsp; +94777169774</p>\r\n        <p><mat-icon>email</mat-icon>&nbsp;&nbsp; yumantha.15@cse.mrt.ac.lk</p>\r\n        <hr>\r\n        <p><a [routerLink]=\"['/help']\"><strong>Help and FAQ</strong></a></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/common/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_auth_service__ = __webpack_require__("../../../../../src/app/services/authenticate/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(authService) {
        this.authService = authService;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.loggedIn = this.authService.loggedIn();
    };
    WelcomeComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.loggedIn = false;
        return false;
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/components/common/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authenticate_auth_service__["a" /* AuthService */]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/items/add-item/add-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-item-field {\r\n  width: 90%;\r\n}\r\n\r\nmat-card {\r\n  text-align: center;\r\n  margin: 20px;\r\n  /*width: 50%;*/\r\n}\r\n\r\nform {\r\n  text-align: center\r\n}\r\n\r\n#price {\r\n  text-align: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/items/add-item/add-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card>\n    <mat-card-title>Add New Item</mat-card-title>\n\n    <mat-card-content>\n      <form (submit)=\"onAddItem()\">\n        <div>\n          <mat-form-field class=\"add-item-field\">\n            <input placeholder=\"Name\" matInput type=\"text\" [(ngModel)]=\"name\" name=\"name\" required>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"add-item-field\">\n            <input placeholder=\"Category\" matInput type=\"text\" [(ngModel)]=\"category\" name=\"category\">\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"add-item-field\">\n            <input matInput placeholder=\"Price\" type=\"number\" [(ngModel)]=\"price\" name=\"price\" required id=\"price\">\n            <span matPrefix>Rs.&nbsp;</span>\n            <span matSuffix>.00</span>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"add-item-field\">\n            <input placeholder=\"Location\" matInput type=\"text\" [(ngModel)]=\"location\" name=\"location\">\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"add-item-field\">\n            <textarea matInput placeholder=\"Description\" [(ngModel)]=\"description\" name=\"description\"></textarea>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-checkbox class=\"example-margin\" [(ngModel)]=\"isAvailable\" name=\"availability\">Item Availability</mat-checkbox>\n        </div>\n\n        <div>\n          <button mat-raised-button color=\"primary\" type=\"submit\" style=\"margin: 10px\">Submit</button>\n          <button mat-raised-button color=\"basic\" type=\"button\" [routerLink]=\"['/profile']\" style=\"margin: 10px\">Cancel</button>\n        </div>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/items/add-item/add-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_validate_service__ = __webpack_require__("../../../../../src/app/services/validate/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_items_item_service__ = __webpack_require__("../../../../../src/app/services/items/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {FormControl} from "@angular/forms";
// import {Observable} from 'rxjs/Observable';
// import {startWith} from 'rxjs/operators/startWith';
// import {map} from 'rxjs/operators/map';
var AddItemComponent = /** @class */ (function () {
    // typeCtrl: FormControl;
    // filteredTypes: Observable<any[]>;
    // types: String[] = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];
    function AddItemComponent(validateService, flashMessagesService, itemService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.itemService = itemService;
        this.router = router;
        this.isAvailable = true;
        this.itemType = 'item';
        // this.typeCtrl = new FormControl();
        // this.filteredTypes = this.typeCtrl.valueChanges
        //   .pipe(
        //     startWith(''),
        //     map(category => category ? this.filterTypes(category) : this.types.slice())
        //   );
    }
    // filterTypes(category: string) {
    //   return this.types.filter(category =>
    //     category.toLowerCase().indexOf(category.toLowerCase()) === 0);
    // }
    AddItemComponent.prototype.ngOnInit = function () {
    };
    AddItemComponent.prototype.onAddItem = function () {
        var _this = this;
        var item = {
            name: this.name,
            itemType: this.itemType,
            category: this.category,
            price: this.price,
            location: this.location,
            description: this.description,
            isAvailable: this.isAvailable,
            sellerID: localStorage.getItem('user_id')
        };
        if (!this.validateService.validateItem(item)) {
            this.flashMessagesService.show("Please fill in all necessary fields", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        if (!this.validateService.validateItemSeller(item.sellerID)) {
            this.flashMessagesService.show("User not found", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        if (!this.validateService.validatePrice(item.price)) {
            this.flashMessagesService.show("Please enter a valid price", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        this.itemService.addItem(item)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show("The item was successfully added", { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/items/new']);
            }
        });
    };
    AddItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__("../../../../../src/app/components/items/add-item/add-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/items/add-item/add-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_items_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/items/add-service/add-service.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-service-field {\r\n  width: 90%;\r\n}\r\n\r\nmat-card {\r\n  text-align: center;\r\n  margin: 20px;\r\n}\r\n\r\nform {\r\n  text-align: center\r\n}\r\n\r\n#price {\r\n  text-align: right;\r\n}\r\n\r\nmat-grid-list {\r\n   width: 90%;\r\n   margin: auto;\r\n }\r\n\r\n.grid-option {\r\n   width: 95%;\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/items/add-service/add-service.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card>\n    <mat-card-title>Add New Service</mat-card-title>\n    <mat-card-content>\n      <form (submit)=\"onAddService()\">\n        <div>\n          <mat-form-field class=\"add-service-field\">\n            <input placeholder=\"Name\" matInput type=\"text\" [(ngModel)]=\"name\" name=\"name\" required>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"add-service-field\">\n            <input placeholder=\"Category\" matInput type=\"text\" [(ngModel)]=\"category\" name=\"category\">\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"add-service-field\">\n            <input matInput placeholder=\"Price\" type=\"number\" [(ngModel)]=\"price\" name=\"price\" required id=\"price\">\n            <span matPrefix>Rs.&nbsp;</span>\n            <span matSuffix>.00</span>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"add-service-field\">\n            <input placeholder=\"Location\" matInput type=\"text\" [(ngModel)]=\"location\" name=\"location\">\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"add-service-field\">\n            <mat-select placeholder=\"District\" [(ngModel)]=\"district\" name=\"district\">\n              <mat-option>None</mat-option>\n              <mat-option *ngFor=\"let dis of districts\" [value]=\"dis.value\">\n                {{dis.viewValue}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"add-service-field\">\n            <textarea matInput placeholder=\"Description\" [(ngModel)]=\"description\" name=\"description\"></textarea>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-grid-list cols=\"4\" rowHeight=\"50px\">\n            <mat-grid-tile colspan=\"2\">\n              <mat-form-field class=\"grid-option\">\n                <mat-select placeholder=\"Available Days\" [(value)]=\"availableDays\">\n                  <mat-option value=\"Everyday\">\n                    Everyday\n                  </mat-option>\n\n                  <mat-option value=\"Weekdays\">\n                    Weekdays\n                  </mat-option>\n\n                  <mat-option value=\"Weekdays and Saturday\">\n                    Weekdays + Saturday\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </mat-grid-tile>\n\n            <mat-grid-tile colspan=\"1\">\n              <mat-form-field class=\"grid-option\">\n                <div matTooltip=\"Enter in 24hr format (HH:MM)\" matTooltipPosition=\"below\">\n                  <input placeholder=\"From\" matInput type=\"text\" [(ngModel)]=\"startTime\" name=\"startTime\">\n                </div>\n              </mat-form-field>\n            </mat-grid-tile>\n\n            <mat-grid-tile colspan=\"1\">\n              <mat-form-field  class=\"grid-option\">\n                <div matTooltip=\"Enter in 24hr format (HH:MM)\" matTooltipPosition=\"below\">\n                  <input placeholder=\"To\" matInput type=\"text\" [(ngModel)]=\"endTime\" name=\"endTime\">\n                </div>\n              </mat-form-field>\n            </mat-grid-tile>\n          </mat-grid-list>\n        </div>\n\n        <div>\n          <mat-form-field class=\"add-service-field\">\n            <textarea matInput placeholder=\"Extra notes\" [(ngModel)]=\"extraNotes\" name=\"extraNotes\"></textarea>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <button mat-raised-button color=\"primary\" type=\"submit\" style=\"margin: 10px\">Submit</button>\n          <button mat-raised-button color=\"basic\" type=\"button\" [routerLink]=\"['/profile']\" style=\"margin: 10px\">Cancel</button>\n        </div>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/items/add-service/add-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_validate_service__ = __webpack_require__("../../../../../src/app/services/validate/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_items_item_service__ = __webpack_require__("../../../../../src/app/services/items/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddServiceComponent = /** @class */ (function () {
    function AddServiceComponent(validateService, router, itemService, flashMessagesService) {
        this.validateService = validateService;
        this.router = router;
        this.itemService = itemService;
        this.flashMessagesService = flashMessagesService;
        this.itemType = 'service';
        this.districts = [
            { value: 'Ampara', viewValue: 'Ampara' },
            { value: 'Anuradhapura', viewValue: 'Anuradhapura' },
            { value: 'Badulla', viewValue: 'Badulla' },
            { value: 'Batticaloa', viewValue: 'Batticaloa' },
            { value: 'Colombo', viewValue: 'Colombo' },
            { value: 'Galle', viewValue: 'Galle' },
            { value: 'Gampaha', viewValue: 'Gampaha' },
            { value: 'Hambantota', viewValue: 'Hambantota' },
            { value: 'Jaffna', viewValue: 'Jaffna' },
            { value: 'Kalutara', viewValue: 'Kalutara' },
            { value: 'Kandy', viewValue: 'Kandy' },
            { value: 'Kegalle', viewValue: 'Kegalle' },
            { value: 'Kilinochchi', viewValue: 'Kilinochchi' },
            { value: 'Kurunegala', viewValue: 'Kurunegala' },
            { value: 'Mannar', viewValue: 'Mannar' },
            { value: 'Matale', viewValue: 'Matale' },
            { value: 'Matara', viewValue: 'Matara' },
            { value: 'Monaragala', viewValue: 'Monaragala' },
            { value: 'Mullaitivu', viewValue: 'Mullaitivu' },
            { value: 'Nuwara Eliya', viewValue: 'Nuwara Eliya' },
            { value: 'Polonnaruwa', viewValue: 'Polonnaruwa' },
            { value: 'Puttalam', viewValue: 'Puttalam' },
            { value: 'Ratnapura', viewValue: 'Ratnapura' },
            { value: 'Trincomalee', viewValue: 'Trincomalee' },
            { value: 'Vavuniya', viewValue: 'Vavuniya' }
        ];
    }
    AddServiceComponent.prototype.ngOnInit = function () {
    };
    AddServiceComponent.prototype.onAddService = function () {
        var _this = this;
        var service = {
            name: this.name,
            itemType: this.itemType,
            category: this.category,
            price: this.price,
            location: this.location,
            district: this.district,
            description: this.description,
            availableDays: this.availableDays,
            startTime: this.startTime,
            endTime: this.endTime,
            extraNotes: this.extraNotes,
            sellerID: localStorage.getItem('user_id')
        };
        if (!this.validateService.validateService(service)) {
            this.flashMessagesService.show("Please fill in all necessary fields", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        if (!this.validateService.validateItemSeller(service.sellerID)) {
            this.flashMessagesService.show("User not found", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        if (!this.validateService.validatePrice(service.price)) {
            this.flashMessagesService.show("Please enter a valid price", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        if (service.startTime) {
            if (!this.validateService.validateTime(service.startTime)) {
                this.flashMessagesService.show("Please enter a valid start time", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        }
        if (service.endTime) {
            if (!this.validateService.validateTime(service.endTime)) {
                this.flashMessagesService.show("Please enter a valid end time", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        }
        if (service.startTime && service.endTime) {
            if (!this.validateService.validateTimeGap(service.startTime, service.endTime)) {
                this.flashMessagesService.show("Please enter valid start and end times", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        }
        this.itemService.addService(service)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show("The service was successfully added", { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/services/new']);
            }
        });
    };
    AddServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-service',
            template: __webpack_require__("../../../../../src/app/components/items/add-service/add-service.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/items/add-service/add-service.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_items_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], AddServiceComponent);
    return AddServiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/items/edit-item/edit-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-item-field {\r\n  width: 90%;\r\n}\r\n\r\nmat-card {\r\n  text-align: center;\r\n  margin: 20px;\r\n}\r\n\r\nform {\r\n  text-align: center\r\n}\r\n\r\n#price {\r\n  text-align: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/items/edit-item/edit-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"dataAvailable\">\n    <mat-card>\n      <mat-card-title>Edit Item</mat-card-title>\n\n      <mat-card-content>\n        <form (submit)=\"onEditItem()\">\n          <div>\n            <mat-form-field class=\"add-item-field\">\n              <input placeholder=\"Name\" matInput type=\"text\" [(ngModel)]=\"item.name\" name=\"name\" required>\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field class=\"add-item-field\">\n              <input placeholder=\"Category\" matInput type=\"text\" [(ngModel)]=\"item.category\" name=\"category\">\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field class=\"add-item-field\">\n              <input matInput placeholder=\"Price\" type=\"number\" [(ngModel)]=\"item.price\" name=\"price\" required id=\"price\">\n              <span matPrefix>Rs.&nbsp;</span>\n              <span matSuffix>.00</span>\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field class=\"add-item-field\">\n              <input placeholder=\"Location\" matInput type=\"text\" [(ngModel)]=\"item.location\" name=\"location\">\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field class=\"add-item-field\">\n              <textarea matInput placeholder=\"Description\" [(ngModel)]=\"item.description\" name=\"description\"></textarea>\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"item.isAvailable\" name=\"availability\">Item Availability</mat-checkbox>\n          </div>\n\n          <div>\n            <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n            <button mat-raised-button type=\"button\" (click)=\"onCancel()\">Cancel</button>\n          </div>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/items/edit-item/edit-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_item_service__ = __webpack_require__("../../../../../src/app/services/items/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_validate_service__ = __webpack_require__("../../../../../src/app/services/validate/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditItemComponent = /** @class */ (function () {
    function EditItemComponent(router, itemService, flashMessagesService, validateService) {
        this.router = router;
        this.itemService = itemService;
        this.flashMessagesService = flashMessagesService;
        this.validateService = validateService;
        this.routeArray = this.router.url.split("/");
        this.itemId = this.routeArray[this.routeArray.length - 2];
        this.dataAvailable = false;
    }
    EditItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getItem(this.itemId)
            .subscribe(function (data) {
            if (data.success) {
                _this.item = data.item;
                _this.dataAvailable = true;
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        });
    };
    EditItemComponent.prototype.onEditItem = function () {
        var _this = this;
        if (!this.validateService.validateItem(this.item)) {
            this.flashMessagesService.show("Please fill in all necessary fields", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        if (!this.validateService.validateItemSeller(this.item.seller)) {
            this.flashMessagesService.show("User not found", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        if (!this.validateService.validatePrice(this.item.price)) {
            this.flashMessagesService.show("Please enter a valid price", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        this.itemService.editItem(this.itemId, this.item)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show("Item successfully edited", { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/items/' + _this.itemId]);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/items/' + _this.itemId]);
            }
        });
    };
    EditItemComponent.prototype.onCancel = function () {
        this.router.navigate(['/items/' + this.itemId]);
    };
    EditItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-item',
            template: __webpack_require__("../../../../../src/app/components/items/edit-item/edit-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/items/edit-item/edit-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_items_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_validate_validate_service__["a" /* ValidateService */]])
    ], EditItemComponent);
    return EditItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/items/edit-service/edit-service.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-service-field {\r\n  width: 90%;\r\n}\r\n\r\nmat-card {\r\n  text-align: center;\r\n  margin: 20px;\r\n}\r\n\r\nform {\r\n  text-align: center\r\n}\r\n\r\n#price {\r\n  text-align: right;\r\n}\r\n\r\nmat-grid-list {\r\n  width: 90%;\r\n  margin: auto;\r\n}\r\n\r\n.grid-option {\r\n  width: 95%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/items/edit-service/edit-service.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"dataAvailable\">\n    <mat-card>\n      <mat-card-title>Edit Service</mat-card-title>\n\n      <mat-card-content>\n        <form (submit)=\"onEditService()\">\n          <div>\n            <mat-form-field class=\"add-service-field\">\n              <input placeholder=\"Name\" matInput type=\"text\" [(ngModel)]=\"service.name\" name=\"name\" required>\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field class=\"add-service-field\">\n              <input placeholder=\"Category\" matInput type=\"text\" [(ngModel)]=\"service.category\" name=\"category\">\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field class=\"add-service-field\">\n              <input matInput placeholder=\"Price\" type=\"number\" [(ngModel)]=\"service.price\" name=\"price\" required id=\"price\">\n              <span matPrefix>Rs.&nbsp;</span>\n              <span matSuffix>.00</span>\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field class=\"add-service-field\">\n              <input placeholder=\"Location\" matInput type=\"text\" [(ngModel)]=\"service.location\" name=\"location\">\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field class=\"add-service-field\">\n              <mat-select placeholder=\"District\" [(ngModel)]=\"service.district\" name=\"district\">\n                <mat-option>None</mat-option>\n                <mat-option *ngFor=\"let dis of districts\" [value]=\"dis.value\">\n                  {{dis.viewValue}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field class=\"add-service-field\">\n              <textarea matInput placeholder=\"Description\" [(ngModel)]=\"service.description\" name=\"description\"></textarea>\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-grid-list cols=\"4\" rowHeight=\"50px\">\n              <mat-grid-tile colspan=\"2\">\n                <mat-form-field class=\"grid-option\">\n                  <mat-select placeholder=\"Available Days\" [(value)]=\"service.availableDays\">\n                    <mat-option value=\"Everyday\">\n                      Everyday\n                    </mat-option>\n\n                    <mat-option value=\"Weekdays\">\n                      Weekdays\n                    </mat-option>\n\n                    <mat-option value=\"Weekdays and Saturday\">\n                      Weekdays + Saturday\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </mat-grid-tile>\n\n              <mat-grid-tile colspan=\"1\">\n                <mat-form-field class=\"grid-option\">\n                  <div matTooltip=\"Enter in 24hr format (HH:MM)\" matTooltipPosition=\"below\">\n                    <input placeholder=\"From\" matInput type=\"text\" [(ngModel)]=\"service.startTime\" name=\"startTime\">\n                  </div>\n                </mat-form-field>\n              </mat-grid-tile>\n\n              <mat-grid-tile colspan=\"1\">\n                <mat-form-field  class=\"grid-option\">\n                  <div matTooltip=\"Enter in 24hr format (HH:MM)\" matTooltipPosition=\"below\">\n                    <input placeholder=\"To\" matInput type=\"text\" [(ngModel)]=\"service.endTime\" name=\"endTime\">\n                  </div>\n                </mat-form-field>\n              </mat-grid-tile>\n            </mat-grid-list>\n          </div>\n\n          <div>\n            <mat-form-field class=\"add-service-field\">\n              <textarea matInput placeholder=\"Extra notes on avalability\" [(ngModel)]=\"service.extraNotes\" name=\"extraNotes\"></textarea>\n            </mat-form-field>\n          </div>\n\n          <div>\n            <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n            <button mat-raised-button type=\"button\" (click)=\"onCancel()\">Cancel</button>\n          </div>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/items/edit-service/edit-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_item_service__ = __webpack_require__("../../../../../src/app/services/items/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_validate_service__ = __webpack_require__("../../../../../src/app/services/validate/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditServiceComponent = /** @class */ (function () {
    function EditServiceComponent(router, itemService, flashMessagesService, validateService) {
        this.router = router;
        this.itemService = itemService;
        this.flashMessagesService = flashMessagesService;
        this.validateService = validateService;
        this.routeArray = this.router.url.split("/");
        this.serviceId = this.routeArray[this.routeArray.length - 2];
        this.dataAvailable = false;
        this.districts = [
            { value: 'Ampara', viewValue: 'Ampara' },
            { value: 'Anuradhapura', viewValue: 'Anuradhapura' },
            { value: 'Badulla', viewValue: 'Badulla' },
            { value: 'Batticaloa', viewValue: 'Batticaloa' },
            { value: 'Colombo', viewValue: 'Colombo' },
            { value: 'Galle', viewValue: 'Galle' },
            { value: 'Gampaha', viewValue: 'Gampaha' },
            { value: 'Hambantota', viewValue: 'Hambantota' },
            { value: 'Jaffna', viewValue: 'Jaffna' },
            { value: 'Kalutara', viewValue: 'Kalutara' },
            { value: 'Kandy', viewValue: 'Kandy' },
            { value: 'Kegalle', viewValue: 'Kegalle' },
            { value: 'Kilinochchi', viewValue: 'Kilinochchi' },
            { value: 'Kurunegala', viewValue: 'Kurunegala' },
            { value: 'Mannar', viewValue: 'Mannar' },
            { value: 'Matale', viewValue: 'Matale' },
            { value: 'Matara', viewValue: 'Matara' },
            { value: 'Monaragala', viewValue: 'Monaragala' },
            { value: 'Mullaitivu', viewValue: 'Mullaitivu' },
            { value: 'Nuwara Eliya', viewValue: 'Nuwara Eliya' },
            { value: 'Polonnaruwa', viewValue: 'Polonnaruwa' },
            { value: 'Puttalam', viewValue: 'Puttalam' },
            { value: 'Ratnapura', viewValue: 'Ratnapura' },
            { value: 'Trincomalee', viewValue: 'Trincomalee' },
            { value: 'Vavuniya', viewValue: 'Vavuniya' }
        ];
    }
    EditServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getService(this.serviceId)
            .subscribe(function (data) {
            if (data.success) {
                _this.service = data.service;
                _this.dataAvailable = true;
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        });
    };
    EditServiceComponent.prototype.onEditService = function () {
        var _this = this;
        if (!this.validateService.validateService(this.service)) {
            this.flashMessagesService.show("Please fill in all necessary fields", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        if (!this.validateService.validateItemSeller(this.service.seller)) {
            this.flashMessagesService.show("User not found", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        if (!this.validateService.validatePrice(this.service.price)) {
            this.flashMessagesService.show("Please enter a valid price", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        if (this.service.startTime) {
            if (!this.validateService.validateTime(this.service.startTime)) {
                this.flashMessagesService.show("Please enter a valid start time", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        }
        if (this.service.endTime) {
            if (!this.validateService.validateTime(this.service.endTime)) {
                this.flashMessagesService.show("Please enter a valid end time", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        }
        if (this.service.startTime && this.service.endTime) {
            if (!this.validateService.validateTimeGap(this.service.startTime, this.service.endTime)) {
                this.flashMessagesService.show("Please enter valid start and end times", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        }
        this.itemService.editService(this.serviceId, this.service)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show("Service successfully edited", { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/services/' + _this.serviceId]);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/services/' + _this.serviceId]);
            }
        });
    };
    EditServiceComponent.prototype.onCancel = function () {
        this.router.navigate(['/services/' + this.serviceId]);
    };
    EditServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-service',
            template: __webpack_require__("../../../../../src/app/components/items/edit-service/edit-service.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/items/edit-service/edit-service.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_items_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_validate_validate_service__["a" /* ValidateService */]])
    ], EditServiceComponent);
    return EditServiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/items/view-item/add-review/add-review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-radio-button {\r\n  margin-right: 10px\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/items/view-item/add-review/add-review.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <h1 mat-dialog-title><strong>Add Review and Rating</strong></h1>\n\n  <mat-dialog-content style=\"text-align: center\">\n    <form>\n      <div>\n        <span><strong>Rating: </strong></span>\n        <mat-radio-group [(ngModel)]=\"rating\" name=\"rating\" style=\"margin-left: 20px\" required>\n          <mat-radio-button value=1>1</mat-radio-button>\n          <mat-radio-button value=2>2</mat-radio-button>\n          <mat-radio-button value=3>3</mat-radio-button>\n          <mat-radio-button value=4>4</mat-radio-button>\n          <mat-radio-button value=5>5</mat-radio-button>\n        </mat-radio-group>\n      </div>\n\n      <div>\n        <mat-form-field style=\"width: 90%\">\n          <textarea matInput placeholder=\"Add a review...\" name=\"review\" [(ngModel)]=\"review\" required></textarea>\n        </mat-form-field>\n      </div>\n    </form>\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <div style=\"width: 100%; text-align: center\">\n      <button mat-raised-button color=\"primary\" (click)=\"onDialogOk()\">Submit</button>\n      <button mat-raised-button (click)=\"onDialogCancel()\">Cancel</button>\n    </div>\n  </mat-dialog-actions>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/items/view-item/add-review/add-review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReviewDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reviews_review_service__ = __webpack_require__("../../../../../src/app/services/reviews/review.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddReviewDialog = /** @class */ (function () {
    function AddReviewDialog(dialogRef, data, reviewService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.reviewService = reviewService;
        this.itemId = this.data.itemId;
        this.itemType = this.data.itemType;
    }
    AddReviewDialog.prototype.ngOnInit = function () {
    };
    AddReviewDialog.prototype.onDialogOk = function () {
        var _this = this;
        var review = {
            review: this.review,
            rating: this.rating,
            customerId: localStorage.getItem('user_id'),
            itemId: this.itemId,
            itemType: this.itemType
        };
        if (!review.customerId) {
            return this.dialogRef.close({
                success: false,
                msg: "You must be logged as a customer to add a review"
            });
        }
        if (!(review.review && review.rating)) {
            return this.dialogRef.close({
                success: false,
                msg: "Please enter a review and a rating"
            });
        }
        this.reviewService.addReview(this.itemId, this.itemType, review)
            .subscribe(function (data) {
            _this.dialogRef.close(data);
        });
    };
    AddReviewDialog.prototype.onDialogCancel = function () {
        this.dialogRef.close({
            success: false
        });
    };
    AddReviewDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-review',
            template: __webpack_require__("../../../../../src/app/components/items/view-item/add-review/add-review.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/items/view-item/add-review/add-review.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__services_reviews_review_service__["a" /* ReviewService */]])
    ], AddReviewDialog);
    return AddReviewDialog;
}());



/***/ }),

/***/ "../../../../../src/app/components/items/view-item/confirm-delete/confirm-delete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n#dialog {\r\n  text-align: center;\r\n}\r\n\r\n#buttons {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/items/view-item/confirm-delete/confirm-delete.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dialog\">\n  <h1 mat-dialog-title>Are you sure you want to delete this item?</h1>\n\n  <mat-dialog-actions>\n    <div id=\"buttons\">\n      <button mat-raised-button (click)=\"onDialogConfirm()\">Yes</button>\n      <button mat-raised-button (click)=\"onDialogCancel()\">No</button>\n    </div>\n  </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/items/view-item/confirm-delete/confirm-delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDeleteDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_item_service__ = __webpack_require__("../../../../../src/app/services/items/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ConfirmDeleteDialog = /** @class */ (function () {
    function ConfirmDeleteDialog(dialogRef, data, itemService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.itemService = itemService;
    }
    ConfirmDeleteDialog.prototype.ngOnInit = function () {
    };
    ConfirmDeleteDialog.prototype.onDialogConfirm = function () {
        var _this = this;
        this.itemService.deleteItem(this.data.itemId)
            .subscribe(function (data) {
            _this.dialogRef.close(data);
        });
    };
    ConfirmDeleteDialog.prototype.onDialogCancel = function () {
        this.dialogRef.close({
            success: false
        });
    };
    ConfirmDeleteDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-delete',
            template: __webpack_require__("../../../../../src/app/components/items/view-item/confirm-delete/confirm-delete.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/items/view-item/confirm-delete/confirm-delete.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__services_items_item_service__["a" /* ItemService */]])
    ], ConfirmDeleteDialog);
    return ConfirmDeleteDialog;
}());



/***/ }),

/***/ "../../../../../src/app/components/items/view-item/view-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-item {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 20px;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n.buttons {\r\n  float: right;\r\n}\r\n\r\n.custom-file-input ~ .custom-file-label::after {\r\n  content: \"Browse\";\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/items/view-item/view-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-card  style=\"margin: 15px 0\">\r\n    <div *ngIf=\"!dataAvailable\" style=\"margin: 20px auto\">\r\n      <mat-progress-spinner color=\"primary\" mode=\"indeterminate\" style=\"margin:0 auto;\"></mat-progress-spinner>\r\n    </div>\r\n\r\n    <div *ngIf=\"dataAvailable\">\r\n      <h1>{{item.name}}</h1>\r\n      <mat-grid-list cols=\"2\" rowHeight=\"100px\" style=\"margin-top: 25px\">\r\n        <mat-grid-tile colspan=\"1\" rowspan=\"5\" (mouseenter)=\"mouseenter()\" (mouseleave)=\"mouseleave()\">\r\n          <div style=\"width: 100%; height: 100%\">\r\n            <div class=\"grid-item\" *ngIf=\"!item.image\">\r\n              <img src=\"https://www.jainsusa.com/images/store/landscape/not-available.jpg\" style=\"height: 75%; width: auto\">\r\n            </div>\r\n\r\n            <div class=\"grid-item\" *ngIf=\"item.image\">\r\n              <img [src]=\"imageUrl\">\r\n            </div>\r\n          </div>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile colspan=\"1\" rowspan=\"5\">\r\n          <div class=\"grid-item\">\r\n            <div *ngIf=\"item.avgRating\">\r\n              <div *ngIf=\"item.avgRating > 0\">\r\n                <p><strong>Rating</strong>: <strong>{{item.avgRating}}</strong>/5</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"item.category\">\r\n              <p><strong>Category</strong>: {{item.category}}</p>\r\n            </div>\r\n\r\n            <div>\r\n              <p><strong>Price</strong>: Rs. {{item.price}}.00</p>\r\n            </div>\r\n\r\n            <div *ngIf=\"item.location\">\r\n              <p><strong>Location</strong>: {{item.location}}</p>\r\n            </div>\r\n\r\n            <div>\r\n              <p><strong>Sold by</strong>: <a [routerLink]=\"['/users/seller/' + item.seller]\">{{seller}}</a></p>\r\n            </div>\r\n\r\n            <div>\r\n              <div *ngIf=\"item.isAvailable; else unavailable\">\r\n                <p style=\"color: blue\"><strong>Item is available</strong></p>\r\n              </div>\r\n              <ng-template #unavailable>\r\n                <p style=\"color: red\"><strong>Item is not available</strong></p>\r\n              </ng-template>\r\n            </div>\r\n\r\n            <div class=\"buttons\" *ngIf=\"isOwner\">\r\n              <button mat-fab color=\"primary\" (click)=\"editItem()\">Edit</button>\r\n              <button mat-fab color=\"warn\" (click)=\"deleteItem()\">Delete</button>\r\n            </div>\r\n\r\n            <div class=\"buttons\" *ngIf=\"isCustomer\" style=\"width: 100%;\">\r\n              <span matTooltip=\"Favourite Item\" matTooltipPosition=\"below\" *ngIf=\"!isFav\">\r\n                <button mat-mini-fab color=\"primary\" (click)=\"favItem()\"><mat-icon>favorite</mat-icon></button>\r\n              </span>\r\n\r\n              <span matTooltip=\"Unavourite Item\" matTooltipPosition=\"below\" *ngIf=\"isFav\">\r\n                <button mat-mini-fab color=\"warn\" (click)=\"unfavItem()\"><mat-icon>favorite</mat-icon></button>\r\n              </span>\r\n\r\n              <button mat-raised-button color=\"primary\" (click)=\"requestItem()\" style=\"float: right\" *ngIf=\"!isReq\">\r\n                Request Item\r\n              </button>\r\n              <button mat-raised-button color=\"warn\" (click)=\"cancelRequest()\" style=\"float: right\" *ngIf=\"isReq\">Cancel\r\n                Request\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n\r\n      <div style=\"width: 50%\">\r\n        <div (mouseenter)=\"mouseenter()\" (mouseleave)=\"mouseleave()\">\r\n          <div *ngIf=\"!item.image\">\r\n            <div style=\"width: 100%; text-align: center; margin-bottom: 0\" [hidden]=\"!showImageButtons\">\r\n                <span matTooltip=\"Add a photo\" matTooltipPosition=\"below\">\r\n                  <button mat-icon-button color=\"primary\" (click)=\"toggleUploadForm()\"><mat-icon>add_circle_outline</mat-icon></button>\r\n                </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"item.image\">\r\n            <div style=\"width: 100%; text-align: center; margin-bottom: 0;\" [hidden]=\"!showImageButtons\">\r\n                <span matTooltip=\"Edit photo\" matTooltipPosition=\"below\">\r\n                  <button mat-icon-button color=\"primary\" (click)=\"toggleEditForm()\"><mat-icon>edit</mat-icon></button>\r\n                </span>\r\n\r\n              <span matTooltip=\"Delete photo\" matTooltipPosition=\"below\">\r\n                  <button mat-icon-button color=\"warn\" (click)=\"deleteImage()\"><mat-icon>delete</mat-icon></button>\r\n                </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div style=\"width: 100%; height: 100%\">\r\n          <div class=\"custom-file\" id=\"customFile\" lang=\"es\" style=\"margin: 25px; width: 100%\" *ngIf=\"showUploadForm\">\r\n            <form #form (submit)=\"addImage()\" enctype=\"multipart/form-data\">\r\n              <input\r\n                ngModel\r\n                (change)=\"getFiles($event)\"\r\n                type=\"file\"\r\n                name=\"file\"\r\n                id=\"file\"\r\n                accept=\"image/jpeg, image/png\"\r\n                class=\"custom-file-input\"\r\n                style=\"width: 20%\"\r\n              >\r\n              <label class=\"custom-file-label\" for=\"file\" style=\"width: 60%\">\r\n                Select File...\r\n              </label>\r\n              <button mat-raised-button type=\"submit\" style=\"float: right; margin-right: 40px;\">Upload</button>\r\n            </form>\r\n          </div>\r\n\r\n          <div class=\"custom-file\" id=\"customFileEdit\" lang=\"es\" style=\"margin: 25px; width: 100%\" *ngIf=\"showEditForm\">\r\n            <form #form (submit)=\"editImage()\" enctype=\"multipart/form-data\">\r\n              <input\r\n                ngModel\r\n                (change)=\"getFiles($event)\"\r\n                type=\"file\"\r\n                name=\"fileEdit\"\r\n                id=\"fileEdit\"\r\n                accept=\"image/jpeg, image/png\"\r\n                class=\"custom-file-input\"\r\n                style=\"width: 20%\"\r\n              >\r\n              <label class=\"custom-file-label\" for=\"fileEdit\" style=\"width: 60%\">\r\n                Select File...\r\n              </label>\r\n              <button mat-raised-button type=\"submit\" style=\"float: right; margin-right: 40px;\">Upload</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n        <mat-grid-list cols=\"2\" rowHwight=\"300\">\r\n          <mat-grid-tile colspan=\"2\">\r\n            <div class=\"grid-item\" *ngIf=\"item.description\">\r\n              <br/>\r\n              <p><strong>Description</strong></p>\r\n              {{item.description}}\r\n            </div>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n    </div>\r\n  </mat-card>\r\n\r\n  <mat-card style=\"margin-bottom: 15px\">\r\n    <mat-card-title>Reviews</mat-card-title>\r\n\r\n    <div *ngIf=\"!reviewsAvailable\">\r\n      No reviews have been added for this item\r\n    </div>\r\n\r\n    <div *ngIf=\"reviewsAvailable\">\r\n      <div *ngFor=\"let review of this.reviews\">\r\n        <mat-card style=\"margin-bottom: 5px\">\r\n          <h3><strong><a [routerLink]=\"['/users/customer/' + review.customer.id]\">{{review.customer.username}}</a></strong></h3>\r\n\r\n          <p>Rating: <strong>{{review.rating}}</strong>/5</p>\r\n          <p>{{review.review}}</p>\r\n\r\n          <div *ngIf=\"review.customer.id === loggedUser\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"editReview(review)\">Edit</button>\r\n            <button mat-raised-button color=\"warn\" (click)=\"deleteReview(review)\">Delete</button>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n    <span matTooltip=\"Add Review\" matTooltipPosition=\"after\" *ngIf=\"!reviewAdded && isCustomer\"\r\n          style=\"position:absolute; bottom: 10px; right: 10px\">\r\n      <button mat-mini-fab color=\"primary\" (click)=\"addReview()\"><mat-icon>add</mat-icon></button>\r\n    </span>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/items/view-item/view-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_items_item_service__ = __webpack_require__("../../../../../src/app/services/items/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_delete_confirm_delete_component__ = __webpack_require__("../../../../../src/app/components/items/view-item/confirm-delete/confirm-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_profile_confirm_review_delete_confirm_review_delete_component__ = __webpack_require__("../../../../../src/app/components/users/profile/confirm-review-delete/confirm-review-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_profile_edit_review_edit_review_component__ = __webpack_require__("../../../../../src/app/components/users/profile/edit-review/edit-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_review_add_review_component__ = __webpack_require__("../../../../../src/app/components/items/view-item/add-review/add-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authenticate_auth_service__ = __webpack_require__("../../../../../src/app/services/authenticate/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_reviews_review_service__ = __webpack_require__("../../../../../src/app/services/reviews/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_requests_request_service__ = __webpack_require__("../../../../../src/app/services/requests/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_image_image_service__ = __webpack_require__("../../../../../src/app/services/image/image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ViewItemComponent = /** @class */ (function () {
    function ViewItemComponent(itemService, authService, reviewService, requestService, imageService, router, flashMessagesService, dialog) {
        this.itemService = itemService;
        this.authService = authService;
        this.reviewService = reviewService;
        this.requestService = requestService;
        this.imageService = imageService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.dialog = dialog;
        this.loggedUser = localStorage.getItem('user_id');
        this.routeArray = this.router.url.split("/");
        this.itemId = this.routeArray[this.routeArray.length - 1];
        this.dataAvailable = false;
        this.isOwner = false;
        this.isFav = false;
        this.isReq = false;
        this.reviewsAvailable = false;
        this.reviewAdded = false;
        this.reviews = [];
        this.showImageButtons = false;
        this.showUploadForm = false;
        this.showEditForm = false;
    }
    ViewItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getItem(this.itemId)
            .subscribe(function (data) {
            if (data.success) {
                _this.item = data.item;
                _this.seller = data.seller;
                _this.dataAvailable = true;
                _this.sellerProfile = '/users/seller/' + data.item.seller;
                if (_this.item.avgRating) {
                    _this.item.avgRating = (Math.round(_this.item.avgRating * 100)) / 100;
                }
                if (_this.item.image) {
                    // this.imageUrl = 'http://localhost:3000/images/' + this.item.image;
                    _this.imageUrl = 'images/' + _this.item.image;
                }
                if (data.item.seller == localStorage.getItem('user_id')) {
                    _this.isOwner = true;
                }
                if (localStorage.getItem('user_type') === 'customer') {
                    _this.isCustomer = true;
                }
                if (_this.item.favBy.includes(localStorage.getItem('user_id'))) {
                    _this.isFav = true;
                }
                if (_this.item.requestedBy.includes(localStorage.getItem('user_id'))) {
                    _this.isReq = true;
                }
                if (_this.item.reviews.length > 0) {
                    _this.reviewsAvailable = true;
                    _this.item.reviews.forEach(function (review) {
                        _this.reviewService.getReview(review, 'any', 'any')
                            .subscribe(function (data) {
                            if (data.review.customer.id === _this.loggedUser) {
                                _this.reviewAdded = true;
                            }
                            _this.reviews.push(data.review);
                        });
                    });
                }
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        });
    };
    ViewItemComponent.prototype.editItem = function () {
        this.router.navigate(['/items/' + this.itemId + '/edit']);
    };
    ViewItemComponent.prototype.deleteItem = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__confirm_delete_confirm_delete_component__["a" /* ConfirmDeleteDialog */], {
            width: '450px',
            data: {
                itemId: this.itemId
            }
        });
        dialogRef.afterClosed()
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('The item was successfully deleted', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/profile']);
            }
            else {
                if (data.msg) {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                }
            }
        });
    };
    ViewItemComponent.prototype.favItem = function () {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessagesService.show('Please login', { cssClass: 'alert-danger', timeout: 5000 });
            return this.router.navigate(['/login']);
        }
        if (!(localStorage.getItem('user_type') === 'customer')) {
            return this.flashMessagesService.show('You must be logged in as a customer to favorite an item', { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (!this.itemId) {
            return this.flashMessagesService.show('Item not found', { cssClass: 'alert-danger', timeout: 5000 });
        }
        this.itemService.favItem(this.itemId, localStorage.getItem('user_id'))
            .subscribe(function (data) {
            if (data.success) {
                _this.isFav = true;
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    ViewItemComponent.prototype.unfavItem = function () {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessagesService.show('Please login', { cssClass: 'alert-danger', timeout: 5000 });
            return this.router.navigate(['/login']);
        }
        if (!(localStorage.getItem('user_type') === 'customer')) {
            return this.flashMessagesService.show('You must be logged in as a customer to favorite an item', { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (!this.itemId) {
            return this.flashMessagesService.show('Item not found', { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (!this.isFav) {
            return this.flashMessagesService.show('This item is not on your favorites', { cssClass: 'alert-danger', timeout: 5000 });
        }
        this.itemService.unfavItem(this.itemId, localStorage.getItem('user_id'))
            .subscribe(function (data) {
            if (data.success) {
                _this.isFav = false;
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    ViewItemComponent.prototype.addReview = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__add_review_add_review_component__["a" /* AddReviewDialog */], {
            width: '600px',
            data: {
                itemId: this.itemId,
                itemType: 'item'
            }
        });
        dialogRef.afterClosed()
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('The review and rating were successfully added', { cssClass: 'alert-success', timeout: 5000 });
                window.location.reload();
            }
            else {
                if (data.msg) {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                }
            }
        });
    };
    ViewItemComponent.prototype.editReview = function (review) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__users_profile_edit_review_edit_review_component__["a" /* EditReviewDialog */], {
            width: '600px',
            data: {
                review: review
            }
        });
        dialogRef.afterClosed()
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('The review and rating were successfully edited', { cssClass: 'alert-success', timeout: 5000 });
                window.location.reload();
            }
            else {
                if (data.msg) {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                }
            }
        });
    };
    ViewItemComponent.prototype.deleteReview = function (review) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__users_profile_confirm_review_delete_confirm_review_delete_component__["a" /* ConfirmReviewDeleteDialog */], {
            width: '450px',
            data: {
                review: review
            }
        });
        dialogRef.afterClosed()
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('The review was successfully deleted', { cssClass: 'alert-success', timeout: 5000 });
                window.location.reload();
            }
            else {
                if (data.msg) {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                }
            }
        });
    };
    ViewItemComponent.prototype.requestItem = function () {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessagesService.show('Please login', { cssClass: 'alert-danger', timeout: 5000 });
            return this.router.navigate(['/login']);
        }
        if (!(localStorage.getItem('user_type') === 'customer')) {
            return this.flashMessagesService.show('You must be logged in as a customer to favorite an item', { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (!this.itemId) {
            return this.flashMessagesService.show('Item not found', { cssClass: 'alert-danger', timeout: 5000 });
        }
        var request = {
            from: localStorage.getItem('user_id'),
            to: this.item.seller,
            item: this.item._id,
            itemType: 'item',
        };
        this.requestService.newRequest(request)
            .subscribe(function (data) {
            if (data.success) {
                _this.isReq = true;
                _this.flashMessagesService.show('The item was successfully requested', { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    ViewItemComponent.prototype.cancelRequest = function () {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessagesService.show('Please login', { cssClass: 'alert-danger', timeout: 5000 });
            return this.router.navigate(['/login']);
        }
        if (!(localStorage.getItem('user_type') === 'customer')) {
            return this.flashMessagesService.show('You must be logged in as a customer to favorite an item', { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (!this.itemId) {
            return this.flashMessagesService.show('Item not found', { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (!this.isReq) {
            return this.flashMessagesService.show('This item is not on your favorites', { cssClass: 'alert-danger', timeout: 5000 });
        }
        var query = localStorage.getItem('user_id') + '+' + this.item._id;
        this.requestService.cancelRequest(query)
            .subscribe(function (data) {
            if (data.success) {
                _this.isReq = false;
                _this.flashMessagesService.show('The item request was successfully cancelled', { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    ViewItemComponent.prototype.mouseenter = function () {
        if (this.isOwner) {
            this.showImageButtons = true;
        }
    };
    ViewItemComponent.prototype.mouseleave = function () {
        if (this.isOwner) {
            this.showImageButtons = false;
        }
    };
    ViewItemComponent.prototype.getFiles = function (event) {
        this.files = event.target.files;
    };
    ViewItemComponent.prototype.toggleUploadForm = function () {
        if (this.isOwner) {
            this.showUploadForm = !this.showUploadForm;
        }
    };
    ViewItemComponent.prototype.toggleEditForm = function () {
        if (this.isOwner) {
            this.showEditForm = !this.showEditForm;
        }
    };
    ViewItemComponent.prototype.addImage = function () {
        var _this = this;
        if (!this.isOwner) {
            return this.flashMessagesService.show("You do not own this item", { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (!this.files) {
            this.flashMessagesService.show("Please select an image to upload", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        else {
            if (this.files.length !== 1) {
                this.flashMessagesService.show("Please select a single image to upload", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
            else {
                this.imageService.uploadImage(this.files[0])
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.imageService.updateInfo('item', _this.item._id)
                            .subscribe(function (data2) {
                            if (data2.success) {
                                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                                window.location.reload();
                                return true;
                            }
                            else {
                                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                                return false;
                            }
                        });
                    }
                    else {
                        _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                        return false;
                    }
                });
            }
        }
    };
    ViewItemComponent.prototype.editImage = function () {
        var _this = this;
        if (!this.isOwner) {
            return this.flashMessagesService.show("You do not own this item", { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (!this.files) {
            this.flashMessagesService.show("Please select an image to upload", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        else {
            if (this.files.length !== 1) {
                this.flashMessagesService.show("Please select a single image to upload", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
            else {
                this.imageService.deleteImage(this.item.image, 'item', this.item._id)
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.imageService.uploadImage(_this.files[0])
                            .subscribe(function (data) {
                            if (data.success) {
                                _this.imageService.updateInfo('item', _this.item._id)
                                    .subscribe(function (data2) {
                                    if (data2.success) {
                                        _this.flashMessagesService.show("Image successfully updated", { cssClass: 'alert-success', timeout: 5000 });
                                        window.location.reload();
                                        return true;
                                    }
                                    else {
                                        _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                                        return false;
                                    }
                                });
                            }
                            else {
                                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                                return false;
                            }
                        });
                    }
                    else {
                        _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                        return false;
                    }
                });
            }
        }
    };
    ViewItemComponent.prototype.deleteImage = function () {
        var _this = this;
        if (!this.isOwner) {
            return this.flashMessagesService.show("You do not own this item", { cssClass: 'alert-danger', timeout: 5000 });
        }
        this.imageService.deleteImage(this.item.image, 'item', this.item._id)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                window.location.reload();
                return true;
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        });
    };
    ViewItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-item',
            template: __webpack_require__("../../../../../src/app/components/items/view-item/view-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/items/view-item/view-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_items_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_9__services_authenticate_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_10__services_reviews_review_service__["a" /* ReviewService */],
            __WEBPACK_IMPORTED_MODULE_11__services_requests_request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_12__services_image_image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialog */]])
    ], ViewItemComponent);
    return ViewItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/items/view-service/add-service-review/add-service-review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-radio-button {\r\n  margin-right: 10px\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/items/view-service/add-service-review/add-service-review.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <h1 mat-dialog-title><strong>Add Review and Rating</strong></h1>\n\n  <mat-dialog-content style=\"text-align: center\">\n    <form>\n      <div>\n        <span><strong>Rating: </strong></span>\n        <mat-radio-group [(ngModel)]=\"rating\" name=\"rating\" style=\"margin-left: 20px\">\n          <mat-radio-button value=1>1</mat-radio-button>\n          <mat-radio-button value=2>2</mat-radio-button>\n          <mat-radio-button value=3>3</mat-radio-button>\n          <mat-radio-button value=4>4</mat-radio-button>\n          <mat-radio-button value=5>5</mat-radio-button>\n        </mat-radio-group>\n      </div>\n\n      <div>\n        <mat-form-field style=\"width: 90%\">\n          <textarea matInput placeholder=\"Add a review...\" name=\"review\" [(ngModel)]=\"review\" required></textarea>\n        </mat-form-field>\n      </div>\n    </form>\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <div style=\"width: 100%; text-align: center\">\n      <button mat-raised-button color=\"primary\" (click)=\"onDialogOk()\">Submit</button>\n      <button mat-raised-button (click)=\"onDialogCancel()\">Cancel</button>\n    </div>\n  </mat-dialog-actions>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/items/view-service/add-service-review/add-service-review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddServiceReviewDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reviews_review_service__ = __webpack_require__("../../../../../src/app/services/reviews/review.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddServiceReviewDialog = /** @class */ (function () {
    function AddServiceReviewDialog(dialogRef, data, reviewService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.reviewService = reviewService;
        this.itemId = this.data.itemId;
        this.itemType = this.data.itemType;
    }
    AddServiceReviewDialog.prototype.ngOnInit = function () {
    };
    AddServiceReviewDialog.prototype.onDialogOk = function () {
        var _this = this;
        var review = {
            review: this.review,
            rating: this.rating,
            customerId: localStorage.getItem('user_id'),
            itemId: this.itemId,
            itemType: this.itemType
        };
        if (!review.customerId) {
            return this.dialogRef.close({
                success: false,
                msg: "You must be logged as a customer to add a review"
            });
        }
        if (!(review.review && review.rating)) {
            return this.dialogRef.close({
                success: false,
                msg: "Please enter a review and a rating"
            });
        }
        this.reviewService.addReview(this.itemId, this.itemType, review)
            .subscribe(function (data) {
            _this.dialogRef.close(data);
        });
    };
    AddServiceReviewDialog.prototype.onDialogCancel = function () {
        this.dialogRef.close({
            success: false
        });
    };
    AddServiceReviewDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-service-review',
            template: __webpack_require__("../../../../../src/app/components/items/view-service/add-service-review/add-service-review.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/items/view-service/add-service-review/add-service-review.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__services_reviews_review_service__["a" /* ReviewService */]])
    ], AddServiceReviewDialog);
    return AddServiceReviewDialog;
}());



/***/ }),

/***/ "../../../../../src/app/components/items/view-service/confirm-servicedelete/confirm-servicedelete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n#dialog {\r\n  text-align: center;\r\n}\r\n\r\n#buttons {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/items/view-service/confirm-servicedelete/confirm-servicedelete.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dialog\">\n  <h1 mat-dialog-title>Are you sure you want to delete this service?</h1>\n\n  <mat-dialog-actions>\n    <div id=\"buttons\">\n      <button mat-raised-button (click)=\"onDialogConfirm()\">Yes</button>\n      <button mat-raised-button (click)=\"onDialogCancel()\">No</button>\n    </div>\n  </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/items/view-service/confirm-servicedelete/confirm-servicedelete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmServicedeleteDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_item_service__ = __webpack_require__("../../../../../src/app/services/items/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ConfirmServicedeleteDialog = /** @class */ (function () {
    function ConfirmServicedeleteDialog(dialogRef, data, itemService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.itemService = itemService;
    }
    ConfirmServicedeleteDialog.prototype.ngOnInit = function () {
    };
    ConfirmServicedeleteDialog.prototype.onDialogConfirm = function () {
        var _this = this;
        this.itemService.deleteService(this.data.serviceId)
            .subscribe(function (data) {
            _this.dialogRef.close(data);
        });
    };
    ConfirmServicedeleteDialog.prototype.onDialogCancel = function () {
        this.dialogRef.close({
            success: false
        });
    };
    ConfirmServicedeleteDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-servicedelete',
            template: __webpack_require__("../../../../../src/app/components/items/view-service/confirm-servicedelete/confirm-servicedelete.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/items/view-service/confirm-servicedelete/confirm-servicedelete.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__services_items_item_service__["a" /* ItemService */]])
    ], ConfirmServicedeleteDialog);
    return ConfirmServicedeleteDialog;
}());



/***/ }),

/***/ "../../../../../src/app/components/items/view-service/view-service.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-item {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 20px;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n.buttons {\r\n  float: right;\r\n}\r\n\r\n.custom-file-input ~ .custom-file-label::after {\r\n  content: \"Browse\";\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/items/view-service/view-service.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card  style=\"margin: 15px 0\">\n    <div *ngIf=\"!dataAvailable\" style=\"margin: 20px auto\">\n      <mat-progress-spinner color=\"primary\" mode=\"indeterminate\" style=\"margin:0 auto;\"></mat-progress-spinner>\n    </div>\n\n    <div *ngIf=\"dataAvailable\">\n      <h1>{{service.name}}</h1>\n      <mat-grid-list cols=\"2\" rowHeight=\"100px\" style=\"margin-top: 25px\">\n        <mat-grid-tile colspan=\"1\" rowspan=\"5\" (mouseenter)=\"mouseenter()\" (mouseleave)=\"mouseleave()\">\n          <div style=\"width: 100%; height: 100%\">\n            <div class=\"grid-item\" *ngIf=\"!service.image\">\n              <img src=\"https://www.jainsusa.com/images/store/landscape/not-available.jpg\" style=\"height: 75%; width: auto\">\n            </div>\n\n            <div class=\"grid-item\" *ngIf=\"service.image\">\n              <img [src]=\"imageUrl\">\n            </div>\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"1\" rowspan=\"5\">\n          <div class=\"grid-item\">\n            <div *ngIf=\"service.avgRating\">\n              <div *ngIf=\"service.avgRating > 0\">\n                <p>Rating: <strong>{{service.avgRating}}</strong>/5</p>\n              </div>\n            </div>\n\n            <div *ngIf=\"service.category\">\n              <p><strong>Category: </strong>{{service.category}}</p>\n            </div>\n\n            <div>\n              <p><strong>Price: </strong>Rs. {{service.price}}.00</p>\n            </div>\n\n            <div *ngIf=\"service.location\">\n              <p><strong>Location: </strong>{{service.location}}</p>\n            </div>\n\n            <div *ngIf=\"service.district\">\n              <p><strong>District: </strong>{{service.district}}</p>\n            </div>\n\n            <div>\n              <p><strong>Sold by: </strong><a [routerLink]=\"['/users/seller/' + service.seller]\">{{seller}}</a></p>\n            </div>\n\n            <div *ngIf=\"service.availableDays || service.startTime || service.endTime\">\n              <p>\n                <strong>Available</strong>\n                <span *ngIf=\"service.availableDays\"><strong>on </strong>{{service.availableDays}}</span>\n                <span *ngIf=\"service.startTime\"><strong>from </strong>{{service.startTime}}</span>\n                <span *ngIf=\"service.endTime\"><strong>to </strong>{{service.endTime}}</span>\n              </p>\n            </div>\n\n            <div class=\"buttons\" *ngIf=\"isOwner\">\n              <button mat-fab color=\"primary\" (click)=\"editService()\">Edit</button>\n              <button mat-fab color=\"warn\" (click)=\"deleteService()\">Delete</button>\n            </div>\n\n            <div class=\"buttons\" *ngIf=\"isCustomer\" style=\"width: 100%;\">\n              <span matTooltip=\"Favourite Item\" matTooltipPosition=\"below\" *ngIf=\"!isFav\">\n                <button mat-mini-fab color=\"primary\" (click)=\"favService()\"><mat-icon>favorite</mat-icon></button>\n              </span>\n\n              <span matTooltip=\"Unavourite Item\" matTooltipPosition=\"below\" *ngIf=\"isFav\">\n                <button mat-mini-fab color=\"warn\" (click)=\"unfavService()\"><mat-icon>favorite</mat-icon></button>\n              </span>\n\n              <button mat-raised-button color=\"primary\" (click)=\"reqService()\" style=\"float: right\" *ngIf=\"!isReq\">Request Service</button>\n              <button mat-raised-button color=\"warn\" (click)=\"cancelRequest()\" style=\"float: right\" *ngIf=\"isReq\">Cancel Request</button>\n            </div>\n          </div>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n      <div style=\"width: 50%\">\n        <div (mouseenter)=\"mouseenter()\" (mouseleave)=\"mouseleave()\">\n          <div *ngIf=\"!service.image\">\n            <div style=\"width: 100%; text-align: center; margin-bottom: 0\" [hidden]=\"!showImageButtons\">\n                <span matTooltip=\"Add a photo\" matTooltipPosition=\"below\">\n                  <button mat-icon-button color=\"primary\" (click)=\"toggleUploadForm()\"><mat-icon>add_circle_outline</mat-icon></button>\n                </span>\n            </div>\n          </div>\n\n          <div *ngIf=\"service.image\">\n            <div style=\"width: 100%; text-align: center; margin-bottom: 0\" [hidden]=\"!showImageButtons\">\n                <span matTooltip=\"Edit photo\" matTooltipPosition=\"below\">\n                  <button mat-icon-button color=\"primary\" (click)=\"toggleEditForm()\"><mat-icon>edit</mat-icon></button>\n                </span>\n\n              <span matTooltip=\"Delete photo\" matTooltipPosition=\"below\">\n                  <button mat-icon-button color=\"warn\" (click)=\"deleteImage()\"><mat-icon>delete</mat-icon></button>\n                </span>\n            </div>\n          </div>\n        </div>\n\n        <div style=\"width: 100%; height: 100%\">\n          <div class=\"custom-file\" id=\"customFile\" lang=\"es\" style=\"margin: 25px; width: 100%\" *ngIf=\"showUploadForm\">\n            <form #form (submit)=\"addImage()\" enctype=\"multipart/form-data\">\n              <input\n                ngModel\n                (change)=\"getFiles($event)\"\n                type=\"file\"\n                name=\"file\"\n                id=\"file\"\n                accept=\"image/jpeg, image/png\"\n                class=\"custom-file-input\"\n                style=\"width: 20%\"\n              >\n              <label class=\"custom-file-label\" for=\"file\" style=\"width: 60%\">\n                Select File...\n              </label>\n              <button mat-raised-button type=\"submit\" style=\"float: right; margin-right: 40px;\">Upload</button>\n            </form>\n          </div>\n\n          <div class=\"custom-file\" id=\"customFileEdit\" lang=\"es\" style=\"margin: 25px; width: 100%\"\n               *ngIf=\"showEditForm\">\n            <form #form (submit)=\"editImage()\" enctype=\"multipart/form-data\">\n              <input\n                ngModel\n                (change)=\"getFiles($event)\"\n                type=\"file\"\n                name=\"fileEdit\"\n                id=\"fileEdit\"\n                accept=\"image/jpeg, image/png\"\n                class=\"custom-file-input\"\n                style=\"width: 20%\"\n              >\n              <label class=\"custom-file-label\" for=\"fileEdit\" style=\"width: 60%\">\n                Select File...\n              </label>\n              <button mat-raised-button type=\"submit\" style=\"float: right; margin-right: 40px;\">Upload</button>\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <mat-grid-list cols=\"2\" rowHeight=\"300px\">\n        <mat-grid-tile colspan=\"2\">\n          <div class=\"grid-item\" *ngIf=\"service.description\">\n            <br/>\n            <p><strong>Description</strong></p>\n            {{service.description}}\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"2\">\n          <div class=\"grid-item\" *ngIf=\"service.extraNotes\">\n            <br/>\n            <p><strong>Extra Notes</strong></p>\n            {{service.extraNotes}}\n          </div>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </mat-card>\n\n  <mat-card style=\"margin-bottom: 15px\">\n    <mat-card-title>Reviews</mat-card-title>\n\n    <div *ngIf=\"!reviewsAvailable\">\n      No reviews have been added for this item\n    </div>\n\n    <div *ngIf=\"reviewsAvailable\">\n      <div *ngFor=\"let review of this.reviews\">\n        <mat-card style=\"margin-bottom: 5px\">\n          <h3><strong><a [routerLink]=\"['/users/customer/' + review.customer.id]\">{{review.customer.username}}</a></strong></h3>\n\n          <p>Rating: <strong>{{review.rating}}</strong>/5</p>\n          <p>{{review.review}}</p>\n\n          <div *ngIf=\"review.customer.id === loggedUser\">\n            <button mat-raised-button color=\"primary\" (click)=\"editReview(review)\">Edit</button>\n            <button mat-raised-button color=\"warn\" (click)=\"deleteReview(review)\">Delete</button>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n\n    <span matTooltip=\"Add Review\" matTooltipPosition=\"after\" *ngIf=\"!reviewAdded && isCustomer\" style=\"position:absolute; bottom: 10px; right: 10px\">\n      <button mat-mini-fab color=\"primary\" (click)=\"addReview()\"><mat-icon>add</mat-icon></button>\n    </span>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/items/view-service/view-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_items_item_service__ = __webpack_require__("../../../../../src/app/services/items/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_servicedelete_confirm_servicedelete_component__ = __webpack_require__("../../../../../src/app/components/items/view-service/confirm-servicedelete/confirm-servicedelete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_profile_confirm_review_delete_confirm_review_delete_component__ = __webpack_require__("../../../../../src/app/components/users/profile/confirm-review-delete/confirm-review-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_service_review_add_service_review_component__ = __webpack_require__("../../../../../src/app/components/items/view-service/add-service-review/add-service-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_profile_edit_review_edit_review_component__ = __webpack_require__("../../../../../src/app/components/users/profile/edit-review/edit-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authenticate_auth_service__ = __webpack_require__("../../../../../src/app/services/authenticate/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_reviews_review_service__ = __webpack_require__("../../../../../src/app/services/reviews/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_requests_request_service__ = __webpack_require__("../../../../../src/app/services/requests/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_image_image_service__ = __webpack_require__("../../../../../src/app/services/image/image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ViewServiceComponent = /** @class */ (function () {
    function ViewServiceComponent(itemService, authService, reviewService, requestService, imageService, router, flashMessagesService, dialog) {
        this.itemService = itemService;
        this.authService = authService;
        this.reviewService = reviewService;
        this.requestService = requestService;
        this.imageService = imageService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.dialog = dialog;
        this.loggedUser = localStorage.getItem('user_id');
        this.routeArray = this.router.url.split("/");
        this.serviceId = this.routeArray[this.routeArray.length - 1];
        this.dataAvailable = false;
        this.isOwner = false;
        this.isFav = false;
        this.isReq = false;
        this.reviewsAvailable = false;
        this.reviewAdded = false;
        this.reviews = [];
        this.showImageButtons = false;
        this.showUploadForm = false;
        this.showEditForm = false;
    }
    ViewServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getService(this.serviceId)
            .subscribe(function (data) {
            if (data.success) {
                _this.service = data.service;
                _this.seller = data.seller;
                _this.dataAvailable = true;
                _this.sellerProfile = '/users/seller/' + data.service.seller;
                if (_this.service.avgRating) {
                    _this.service.avgRating = (Math.round(_this.service.avgRating * 100)) / 100;
                }
                if (_this.service.image) {
                    // this.imageUrl = 'http://localhost:3000/images/' + this.service.image;
                    _this.imageUrl = 'images/' + _this.service.image;
                }
                if (data.service.seller == localStorage.getItem('user_id')) {
                    _this.isOwner = true;
                }
                if (localStorage.getItem('user_type') === 'customer') {
                    _this.isCustomer = true;
                }
                if (_this.service.favBy.includes(localStorage.getItem('user_id'))) {
                    _this.isFav = true;
                }
                if (_this.service.requestedBy.includes(localStorage.getItem('user_id'))) {
                    _this.isReq = true;
                }
                if (_this.service.reviews.length > 0) {
                    _this.reviewsAvailable = true;
                    _this.service.reviews.forEach(function (review) {
                        _this.reviewService.getReview(review, 'any', 'any')
                            .subscribe(function (data) {
                            if (data.review.customer.id === _this.loggedUser) {
                                _this.reviewAdded = true;
                            }
                            _this.reviews.push(data.review);
                        });
                    });
                }
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        });
    };
    ViewServiceComponent.prototype.deleteService = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__confirm_servicedelete_confirm_servicedelete_component__["a" /* ConfirmServicedeleteDialog */], {
            width: '450px',
            data: {
                serviceId: this.serviceId
            }
        });
        dialogRef.afterClosed()
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('The service was successfully deleted', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/profile']);
            }
            else {
                if (data.msg) {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                }
            }
        });
    };
    ViewServiceComponent.prototype.editService = function () {
        this.router.navigate(['/services/' + this.serviceId + '/edit']);
    };
    ViewServiceComponent.prototype.favService = function () {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessagesService.show('Please login', { cssClass: 'alert-danger', timeout: 5000 });
            return this.router.navigate(['/login']);
        }
        if (!(localStorage.getItem('user_type') === 'customer')) {
            return this.flashMessagesService.show('You must be logged in as a customer to favorite a service', { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (!this.serviceId) {
            return this.flashMessagesService.show('Service not found', { cssClass: 'alert-danger', timeout: 5000 });
        }
        this.itemService.favService(this.serviceId, localStorage.getItem('user_id'))
            .subscribe(function (data) {
            if (data.success) {
                _this.isFav = true;
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    ViewServiceComponent.prototype.unfavService = function () {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessagesService.show('Please login', { cssClass: 'alert-danger', timeout: 5000 });
            return this.router.navigate(['/login']);
        }
        if (!(localStorage.getItem('user_type') === 'customer')) {
            return this.flashMessagesService.show('You must be logged in as a customer to favorite a service', { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (!this.serviceId) {
            return this.flashMessagesService.show('Service not found', { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (!this.isFav) {
            return this.flashMessagesService.show('This service is not on your favorites', { cssClass: 'alert-danger', timeout: 5000 });
        }
        this.itemService.unfavService(this.serviceId, localStorage.getItem('user_id'))
            .subscribe(function (data) {
            if (data.success) {
                _this.isFav = false;
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    ViewServiceComponent.prototype.addReview = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__add_service_review_add_service_review_component__["a" /* AddServiceReviewDialog */], {
            width: '600px',
            data: {
                itemId: this.serviceId,
                itemType: 'service'
            }
        });
        dialogRef.afterClosed()
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('The review and rating were successfully added', { cssClass: 'alert-success', timeout: 5000 });
                window.location.reload();
            }
            else {
                if (data.msg) {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                }
            }
        });
    };
    ViewServiceComponent.prototype.editReview = function (review) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__users_profile_edit_review_edit_review_component__["a" /* EditReviewDialog */], {
            width: '600px',
            data: {
                review: review
            }
        });
        dialogRef.afterClosed()
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('The review and rating were successfully edited', { cssClass: 'alert-success', timeout: 5000 });
                window.location.reload();
            }
            else {
                if (data.msg) {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                }
            }
        });
    };
    ViewServiceComponent.prototype.deleteReview = function (review) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__users_profile_confirm_review_delete_confirm_review_delete_component__["a" /* ConfirmReviewDeleteDialog */], {
            width: '450px',
            data: {
                review: review
            }
        });
        dialogRef.afterClosed()
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('The review was successfully deleted', { cssClass: 'alert-success', timeout: 5000 });
                window.location.reload();
            }
            else {
                if (data.msg) {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                }
            }
        });
    };
    ViewServiceComponent.prototype.reqService = function () {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessagesService.show('Please login', { cssClass: 'alert-danger', timeout: 5000 });
            return this.router.navigate(['/login']);
        }
        if (!(localStorage.getItem('user_type') === 'customer')) {
            return this.flashMessagesService.show('You must be logged in as a customer to favorite an item', { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (!this.serviceId) {
            return this.flashMessagesService.show('Service not found', { cssClass: 'alert-danger', timeout: 5000 });
        }
        var request = {
            from: localStorage.getItem('user_id'),
            to: this.service.seller,
            item: this.service._id,
            itemType: 'service',
        };
        this.requestService.newRequest(request)
            .subscribe(function (data) {
            if (data.success) {
                _this.isReq = true;
                _this.flashMessagesService.show('The service was successfully requested', { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    ViewServiceComponent.prototype.cancelRequest = function () {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessagesService.show('Please login', { cssClass: 'alert-danger', timeout: 5000 });
            return this.router.navigate(['/login']);
        }
        if (!(localStorage.getItem('user_type') === 'customer')) {
            return this.flashMessagesService.show('You must be logged in as a customer to favorite an item', { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (!this.serviceId) {
            return this.flashMessagesService.show('Service not found', { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (!this.isReq) {
            return this.flashMessagesService.show('This service is not on your favorites', { cssClass: 'alert-danger', timeout: 5000 });
        }
        var query = localStorage.getItem('user_id') + '+' + this.service._id;
        this.requestService.cancelRequest(query)
            .subscribe(function (data) {
            if (data.success) {
                _this.isReq = false;
                _this.flashMessagesService.show('The item request was successfully cancelled', { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    ViewServiceComponent.prototype.mouseenter = function () {
        if (this.isOwner) {
            this.showImageButtons = true;
        }
    };
    ViewServiceComponent.prototype.mouseleave = function () {
        if (this.isOwner) {
            this.showImageButtons = false;
        }
    };
    ViewServiceComponent.prototype.getFiles = function (event) {
        this.files = event.target.files;
    };
    ViewServiceComponent.prototype.toggleUploadForm = function () {
        if (this.isOwner) {
            this.showUploadForm = !this.showUploadForm;
        }
    };
    ViewServiceComponent.prototype.toggleEditForm = function () {
        if (this.isOwner) {
            this.showEditForm = !this.showEditForm;
        }
    };
    ViewServiceComponent.prototype.addImage = function () {
        var _this = this;
        if (!this.isOwner) {
            return this.flashMessagesService.show("You do not own this item", { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (!this.files) {
            this.flashMessagesService.show("Please select an image to upload", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        else {
            if (this.files.length !== 1) {
                this.flashMessagesService.show("Please select a single image to upload", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
            else {
                this.imageService.uploadImage(this.files[0])
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.imageService.updateInfo('service', _this.service._id)
                            .subscribe(function (data2) {
                            if (data2.success) {
                                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                                window.location.reload();
                                return true;
                            }
                            else {
                                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                                return false;
                            }
                        });
                    }
                    else {
                        _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                        return false;
                    }
                });
            }
        }
    };
    ViewServiceComponent.prototype.editImage = function () {
        var _this = this;
        if (!this.isOwner) {
            return this.flashMessagesService.show("You do not own this item", { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (!this.files) {
            this.flashMessagesService.show("Please select an image to upload", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        else {
            if (this.files.length !== 1) {
                this.flashMessagesService.show("Please select a single image to upload", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
            else {
                this.imageService.deleteImage(this.service.image, 'service', this.service._id)
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.imageService.uploadImage(_this.files[0])
                            .subscribe(function (data) {
                            if (data.success) {
                                _this.imageService.updateInfo('service', _this.service._id)
                                    .subscribe(function (data2) {
                                    if (data2.success) {
                                        _this.flashMessagesService.show("Image successfully updated", { cssClass: 'alert-success', timeout: 5000 });
                                        window.location.reload();
                                        return true;
                                    }
                                    else {
                                        _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                                        return false;
                                    }
                                });
                            }
                            else {
                                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                                return false;
                            }
                        });
                    }
                    else {
                        _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                        return false;
                    }
                });
            }
        }
    };
    ViewServiceComponent.prototype.deleteImage = function () {
        var _this = this;
        if (!this.isOwner) {
            return this.flashMessagesService.show("You do not own this item", { cssClass: 'alert-danger', timeout: 5000 });
        }
        this.imageService.deleteImage(this.service.image, 'service', this.service._id)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                window.location.reload();
                return true;
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        });
    };
    ViewServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-service',
            template: __webpack_require__("../../../../../src/app/components/items/view-service/view-service.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/items/view-service/view-service.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_items_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_9__services_authenticate_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_10__services_reviews_review_service__["a" /* ReviewService */],
            __WEBPACK_IMPORTED_MODULE_11__services_requests_request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_12__services_image_image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialog */]])
    ], ViewServiceComponent);
    return ViewServiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/search/search-results/search-results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search-results/search-results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"searchRefine\" style=\"margin: 10px 0\">\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <mat-icon>youtube_searched_for</mat-icon> Refine Search\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <form (submit)=\"refineSearch()\" style=\"text-align: center\">\n          <mat-card style=\"margin-bottom: 20px\">\n            <div>\n              <mat-form-field style=\"width: 75%\">\n                <input matInput placeholder=\"Name\" [(ngModel)]=\"name\" name=\"name\">\n              </mat-form-field>\n            </div>\n\n            <div>\n              <mat-form-field style=\"width: 75%\">\n                <input matInput placeholder=\"Category\" [(ngModel)]=\"category\" name=\"category\">\n              </mat-form-field>\n            </div>\n\n            <div>\n              <mat-form-field style=\"width: 75%\">\n                <mat-select placeholder=\"District (only for services)\" [(ngModel)]=\"district\" name=\"district\" [disabled]=\"!serviceCheck\">\n                  <mat-option>None</mat-option>\n                  <mat-option *ngFor=\"let dis of districts\" [value]=\"dis.value\">\n                    {{dis.viewValue}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n\n            <div>\n              <mat-form-field style=\"width: 35%; margin: 0 2.5%;\">\n                <input matInput placeholder=\"Price Range: From\" [(ngModel)]=\"priceLower\" name=\"priceUpper\" type=\"number\">\n                <span matPrefix>Rs.&nbsp;</span>\n                <span matSuffix>.00</span>\n              </mat-form-field>\n              <mat-form-field style=\"width: 35%; margin: 0 2.5%;\">\n                <input matInput placeholder=\"Price Range: To\" [(ngModel)]=\"priceUpper\" name=\"priceLower\" type=\"number\">\n                <span matPrefix>Rs.&nbsp;</span>\n                <span matSuffix>.00</span>\n              </mat-form-field>\n            </div>\n\n            <div>\n              <mat-form-field style=\"width: 50%\">\n                <mat-select placeholder=\"Rating\" [(ngModel)]=\"rating\" name=\"rating\">\n                  <mat-option>None</mat-option>\n                  <mat-option *ngFor=\"let rating of ratings\" [value]=\"rating.value\">\n                    {{rating.viewValue}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n\n            <div>\n              <section>\n                <mat-checkbox [(ngModel)]=\"itemCheck\" name=\"item\" style=\"margin: 0 10%\">Items</mat-checkbox>\n                <mat-checkbox [(ngModel)]=\"serviceCheck\" name=\"service\" style=\"margin: 0 10%\">Services</mat-checkbox>\n              </section>\n            </div>\n          </mat-card>\n\n          <mat-card style=\"margin-bottom: 20px\">\n            <div id=\"sortSearch\">\n              <div>\n                <mat-form-field style=\"width: 35%\">\n                  <mat-select placeholder=\"Sort by\" [(ngModel)]=\"sortBy.criteria\" name=\"sortCriteria\">\n                    <mat-option *ngFor=\"let criteria of sortCriterias\" [value]=\"criteria.value\">\n                      {{criteria.viewValue}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n\n              <div>\n                <mat-radio-group [(ngModel)]=\"sortBy.way\" name=\"sortWay\">\n                  <mat-radio-button value=\"asc\" style=\"margin: 0 2.5%\">\n                    Ascending\n                  </mat-radio-button>\n                  <mat-radio-button value=\"desc\" style=\"margin: 0 2.5%\">\n                    Descending\n                  </mat-radio-button>\n                </mat-radio-group>\n              </div>\n            </div>\n          </mat-card>\n\n          <div>\n            <button mat-raised-button color=\"primary\" type=\"submit\">Refine</button>\n          </div>\n        </form>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n\n  <div *ngIf=\"!resultsAvailable\" style=\"margin-top: 100px; text-align: center; width: 100%\">\n    <p><mat-icon>report_problem</mat-icon></p>\n    <h3>Sorry! No results were found for your search</h3>\n  </div>\n\n  <div *ngIf=\"resultsAvailable\">\n    <mat-card style=\"width: 100%; margin-bottom: 5px\" *ngFor=\"let result of resultsArray\">\n      <mat-grid-list cols=\"8\" rowHeight=\"40px\">\n        <mat-grid-tile colspan=\"2\" rowspan=\"4\">\n          <div *ngIf=\"!result.image\">\n            <div style=\"width: 100%; height: 100%;\" *ngIf=\"result.type==='item'\">\n              <img src=\"https://www.jainsusa.com/images/store/landscape/not-available.jpg\" style=\"height: 100%\">\n            </div>\n\n            <div style=\"width: 100%; height: 100%\" *ngIf=\"result.type==='service'\">\n              <img src=\"https://www.jainsusa.com/images/store/landscape/not-available.jpg\" style=\"height: 100%\">\n            </div>\n          </div>\n\n          <div *ngIf=\"result.image\">\n            <div style=\"width: 100%; height: 100%\">\n              <!--<img mat-card-image [src]=\"'http://localhost:3000/images/' + result.image\" style=\"width: 100%\">-->\n              <img mat-card-image [src]=\"'images/' + result.image\" style=\"width: 100%\">\n            </div>\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"6\" rowspan=\"1\">\n          <div style=\"width: 100%; height: 100%; padding-left: 25px\">\n            <mat-card-title><strong>{{result.name}}</strong></mat-card-title>\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"3\" rowspan=\"3\">\n          <div style=\"width: 100%; height: 100%; padding-left: 25px\">\n            <mat-card-subtitle>{{result.category}}</mat-card-subtitle>\n            <p><strong>Rs. {{result.price}}.00</strong></p>\n            <button mat-raised-button color=\"primary\" (click)=\"goToItem(result.id)\" *ngIf=\"result.type==='item'\">Details</button>\n            <button mat-raised-button color=\"primary\" (click)=\"goToService(result.id)\" *ngIf=\"result.type==='service'\">Details</button>\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"3\" rowspan=\"3\">\n          <div style=\"width: 100%; height: 100%\">\n            <h5 *ngIf=\"result.avgRating\">Rating: <strong>{{result.avgRating}}</strong></h5>\n            <p *ngIf=\"result.district\">District: <strong>{{result.district}}</strong></p>\n          </div>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search-results/search-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_search_service__ = __webpack_require__("../../../../../src/app/services/search/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_validate_service__ = __webpack_require__("../../../../../src/app/services/validate/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(router, searchService, flashMessagesService, validateService) {
        this.router = router;
        this.searchService = searchService;
        this.flashMessagesService = flashMessagesService;
        this.validateService = validateService;
        this.routeArray = this.router.url.split("/");
        this.query = this.routeArray.slice(-1)[0];
        this.resultsAvailable = false;
        this.resultsArray = [];
        this.itemCheck = true;
        this.serviceCheck = true;
        this.searchObject = {};
        this.types = {};
        this.priceRange = {};
        this.sortBy = {};
        this.districts = [
            { value: 'Ampara', viewValue: 'Ampara' },
            { value: 'Anuradhapura', viewValue: 'Anuradhapura' },
            { value: 'Badulla', viewValue: 'Badulla' },
            { value: 'Batticaloa', viewValue: 'Batticaloa' },
            { value: 'Colombo', viewValue: 'Colombo' },
            { value: 'Galle', viewValue: 'Galle' },
            { value: 'Gampaha', viewValue: 'Gampaha' },
            { value: 'Hambantota', viewValue: 'Hambantota' },
            { value: 'Jaffna', viewValue: 'Jaffna' },
            { value: 'Kalutara', viewValue: 'Kalutara' },
            { value: 'Kandy', viewValue: 'Kandy' },
            { value: 'Kegalle', viewValue: 'Kegalle' },
            { value: 'Kilinochchi', viewValue: 'Kilinochchi' },
            { value: 'Kurunegala', viewValue: 'Kurunegala' },
            { value: 'Mannar', viewValue: 'Mannar' },
            { value: 'Matale', viewValue: 'Matale' },
            { value: 'Matara', viewValue: 'Matara' },
            { value: 'Monaragala', viewValue: 'Monaragala' },
            { value: 'Mullaitivu', viewValue: 'Mullaitivu' },
            { value: 'Nuwara Eliya', viewValue: 'Nuwara Eliya' },
            { value: 'Polonnaruwa', viewValue: 'Polonnaruwa' },
            { value: 'Puttalam', viewValue: 'Puttalam' },
            { value: 'Ratnapura', viewValue: 'Ratnapura' },
            { value: 'Trincomalee', viewValue: 'Trincomalee' },
            { value: 'Vavuniya', viewValue: 'Vavuniya' }
        ];
        this.ratings = [
            { value: '1', viewValue: '1+' },
            { value: '2', viewValue: '2+' },
            { value: '3', viewValue: '3+' },
            { value: '4', viewValue: '4+' },
        ];
        this.sortCriterias = [
            { value: 'rating', viewValue: 'Rating' },
            { value: 'name', viewValue: 'Name' },
            { value: 'category', viewValue: 'Category' },
            { value: 'price', viewValue: 'Price' }
        ];
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSearchObject();
        this.assignValues();
        this.searchService.search(this.query)
            .subscribe(function (data) {
            if (data.success) {
                if (data.results) {
                    _this.resultsAvailable = true;
                    data.results.forEach(function (result) {
                        if (result.avgRating) {
                            result.avgRating = (Math.round(result.avgRating * 100)) / 100;
                        }
                        _this.resultsArray.push(result);
                    });
                }
            }
            else {
                return _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    SearchResultsComponent.prototype.goToItem = function (itemId) {
        this.router.navigate(['/items/' + itemId]);
    };
    SearchResultsComponent.prototype.goToService = function (serviceId) {
        this.router.navigate(['/services/' + serviceId]);
    };
    SearchResultsComponent.prototype.refineSearch = function () {
        if (!this.name.trim()) {
            return this.flashMessagesService.show('Please enter name to search for', { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (this.priceUpper) {
            if (!this.validateService.validatePrice(this.priceUpper)) {
                return this.flashMessagesService.show('Please enter a valid price', { cssClass: 'alert-danger', timeout: 5000 });
            }
        }
        if (this.priceLower) {
            if (!this.validateService.validatePrice(this.priceLower)) {
                return this.flashMessagesService.show('Please enter a valid price', { cssClass: 'alert-danger', timeout: 5000 });
            }
        }
        if (this.priceLower && this.priceUpper) {
            if (!this.validateService.validatePriceRange(this.priceLower, this.priceUpper)) {
                return this.flashMessagesService.show('Please enter a valid price range', { cssClass: 'alert-danger', timeout: 5000 });
            }
        }
        this.types.items = this.itemCheck;
        this.types.services = this.serviceCheck;
        this.priceRange.priceUpper = this.priceUpper;
        this.priceRange.priceLower = this.priceLower;
        this.searchObject.name = this.name;
        this.searchObject.priceRange = this.priceRange;
        this.searchObject.types = this.types;
        this.searchObject.district = this.district;
        this.searchObject.category = this.category;
        this.searchObject.sortBy = this.sortBy;
        this.searchObject.rating = this.rating;
        this.router.navigate(['search/results', { search: JSON.stringify(this.searchObject) }]);
        window.location.reload();
    };
    SearchResultsComponent.prototype.getSearchObject = function () {
        this.searchObject = JSON.parse(decodeURIComponent(this.query.split(';')[1].split('=')[1]));
    };
    SearchResultsComponent.prototype.assignValues = function () {
        if (this.searchObject.name) {
            this.name = this.searchObject.name;
        }
        if (this.searchObject.priceRange) {
            if (this.searchObject.priceRange.priceUpper) {
                this.priceUpper = this.searchObject.priceRange.priceUpper;
            }
            if (this.searchObject.priceRange.priceLower) {
                this.priceLower = this.searchObject.priceRange.priceLower;
            }
        }
        if (this.searchObject.types) {
            this.itemCheck = this.searchObject.types.items;
            this.serviceCheck = this.searchObject.types.services;
        }
        if (this.searchObject.district) {
            this.district = this.searchObject.district;
        }
        if (this.searchObject.category) {
            this.category = this.searchObject.category;
        }
        if (this.searchObject.sortBy) {
            this.sortBy.criteria = this.searchObject.sortBy.criteria;
            this.sortBy.way = this.searchObject.sortBy.way;
        }
    };
    SearchResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__("../../../../../src/app/components/search/search-results/search-results.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/search/search-results/search-results.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_search_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_validate_validate_service__["a" /* ValidateService */]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/edit-account/confirm-delete-account/confirm-delete-account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n#dialog {\r\n  text-align: center;\r\n}\r\n\r\n#buttons {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/edit-account/confirm-delete-account/confirm-delete-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dialog\">\n  <h1 mat-dialog-title>Are you sure you want to delete your account?</h1>\n\n  <mat-dialog-actions>\n    <div id=\"buttons\">\n      <button mat-raised-button (click)=\"onDialogConfirm()\">Yes</button>\n      <button mat-raised-button (click)=\"onDialogCancel()\">No</button>\n    </div>\n  </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/edit-account/confirm-delete-account/confirm-delete-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDeleteAccountDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authenticate_auth_service__ = __webpack_require__("../../../../../src/app/services/authenticate/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ConfirmDeleteAccountDialog = /** @class */ (function () {
    function ConfirmDeleteAccountDialog(dialogRef, data, authService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.authService = authService;
    }
    ConfirmDeleteAccountDialog.prototype.ngOnInit = function () {
    };
    ConfirmDeleteAccountDialog.prototype.onDialogConfirm = function () {
        var _this = this;
        this.authService.deleteUser(this.data.userId, this.data.userType)
            .subscribe(function (data) {
            _this.dialogRef.close(data);
        });
    };
    ConfirmDeleteAccountDialog.prototype.onDialogCancel = function () {
        this.dialogRef.close({
            success: false
        });
    };
    ConfirmDeleteAccountDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-delete-account',
            template: __webpack_require__("../../../../../src/app/components/users/edit-account/confirm-delete-account/confirm-delete-account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/edit-account/confirm-delete-account/confirm-delete-account.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__services_authenticate_auth_service__["a" /* AuthService */]])
    ], ConfirmDeleteAccountDialog);
    return ConfirmDeleteAccountDialog;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/edit-account/edit-account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reg-form-field {\r\n  width: 90%;\r\n}\r\n\r\n#reg-user {\r\n  width: 50%;\r\n}\r\n\r\nmat-card {\r\n  text-align: center;\r\n  margin: 20px;\r\n}\r\n\r\nform {\r\n  text-align: center\r\n}\r\n\r\nmat-card-actions {\r\n  text-align: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/edit-account/edit-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"dataAvailable\">\n    <mat-card>\n      <mat-card-title>\n        Edit User\n      </mat-card-title>\n\n      <mat-card-content>\n        <form (submit)=\"onEditAcc()\">\n          <div>\n            <mat-form-field class=\"reg-form-field\">\n              <input placeholder=\"Email\" matInput type=\"text\" [(ngModel)]=\"user.email\" name=\"email\">\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field class=\"reg-form-field\">\n              <input type=\"password\" matInput placeholder=\"New password\" [type]=\"hidePass ? 'password' : 'text'\" [(ngModel)]=\"password\" name=\"password\">\n              <mat-icon matSuffix (click)=\"hidePass = !hidePass\">{{hidePass ? 'visibility' : 'visibility_off'}}</mat-icon>\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field class=\"reg-form-field\">\n              <input type=\"password\" matInput placeholder=\"Confirm new password\" [type]=\"hideConfPass ? 'password' : 'text'\" [(ngModel)]=\"confPass\" name=\"confPass\">\n              <mat-icon matSuffix (click)=\"hideConfPass = !hideConfPass\">{{hideConfPass ? 'visibility' : 'visibility_off'}}</mat-icon>\n            </mat-form-field>\n          </div>\n\n          <div>\n            <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n            <button mat-raised-button color=\"basic\" (click)=\"onCancel()\" type=\"button\">Cancel</button>\n            <button mat-raised-button color=\"warn\" (click)=\"deleteAccount()\" type=\"button\">Delete</button>\n          </div>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/edit-account/edit-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_validate_service__ = __webpack_require__("../../../../../src/app/services/validate/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authenticate_auth_service__ = __webpack_require__("../../../../../src/app/services/authenticate/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_delete_account_confirm_delete_account_component__ = __webpack_require__("../../../../../src/app/components/users/edit-account/confirm-delete-account/confirm-delete-account.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditAccountComponent = /** @class */ (function () {
    function EditAccountComponent(validateService, flashMessagesService, authService, router, dialog) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.dataAvailable = false;
        this.hidePass = true;
        this.hideConfPass = true;
        this.userType = localStorage.getItem('user_type');
    }
    EditAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile()
            .subscribe(function (profile) {
            _this.user = profile.user;
            _this.dataAvailable = true;
            // console.log(this.user);
        }, function (error) {
            console.log(error);
            return false;
        });
    };
    EditAccountComponent.prototype.onCancel = function () {
        this.router.navigate(['/profile']);
    };
    EditAccountComponent.prototype.onEditAcc = function () {
        var _this = this;
        if (!this.user.email) {
            this.flashMessagesService.show("Please enter an email address", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        if (!this.validateService.validateEmail(this.user.email)) {
            this.flashMessagesService.show("Please enter a valid email address", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        var editedUser = {
            user_id: this.user._id,
            email: this.user.email,
            userType: this.userType,
            password: null
        };
        if (this.password) {
            if (!this.validateService.validatePassword(this.password, this.confPass)) {
                this.flashMessagesService.show("Password and confirm password do not match", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
            else {
                editedUser.password = this.password;
            }
        }
        this.authService.editUserAcc(editedUser)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show("User edited. Please login again.", { cssClass: 'alert-success', timeout: 5000 });
                _this.authService.logout();
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/profile']);
            }
        });
    };
    EditAccountComponent.prototype.deleteAccount = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__confirm_delete_account_confirm_delete_account_component__["a" /* ConfirmDeleteAccountDialog */], {
            width: '450px',
            data: {
                userId: localStorage.getItem('user_id'),
                userType: localStorage.getItem('user_type')
            }
        });
        dialogRef.afterClosed()
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('The user was successfully deleted', { cssClass: 'alert-success', timeout: 5000 });
                _this.authService.logout();
                _this.router.navigate(['/login']);
            }
            else {
                if (data.msg) {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                    _this.router.navigate(['/profile']);
                }
            }
        });
    };
    EditAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-account',
            template: __webpack_require__("../../../../../src/app/components/users/edit-account/edit-account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/edit-account/edit-account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_authenticate_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialog */]])
    ], EditAccountComponent);
    return EditAccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/edit-profile/edit-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reg-form-field {\r\n  width: 90%;\r\n}\r\n\r\n#reg-user {\r\n  width: 50%;\r\n}\r\n\r\nmat-card {\r\n  text-align: center;\r\n  margin: 20px;\r\n}\r\n\r\nform {\r\n  text-align: center\r\n}\r\n\r\nmat-card-actions {\r\n  text-align: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"dataAvailable\">\n    <mat-card>\n      <mat-card-title>\n        Edit User\n      </mat-card-title>\n\n      <mat-card-content>\n        <form (submit)=\"onEditSubmit()\">\n\n          <div>\n            <mat-form-field class=\"reg-form-field\">\n              <input placeholder=\"Name\" matInput type=\"text\" [(ngModel)]=\"user.name\" name=\"name\">\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field class=\"reg-form-field\">\n              <input placeholder=\"Username\" matInput type=\"text\" [(ngModel)]=\"user.username\" name=\"username\">\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field class=\"reg-form-field\">\n              <span matPrefix>+94 &nbsp;</span>\n              <input placeholder=\"Telephone Number\" matInput type=\"text\" [(ngModel)]=\"user.telephone\" name=\"telephone\" maxlength=\"9\">\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field class=\"reg-form-field\">\n              <span matPrefix>+94 &nbsp;</span>\n              <input placeholder=\"Mobile Number\" matInput type=\"text\" [(ngModel)]=\"user.mobile\" name=\"mobile\" maxlength=\"9\">\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field class=\"reg-form-field\">\n              <input placeholder=\"Address\" matInput type=\"text\" [(ngModel)]=\"user.address\" name=\"address\">\n            </mat-form-field>\n          </div>\n\n          <div>\n            <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n            <button mat-raised-button color=\"basic\" (click)=\"onCancel()\" type=\"button\">Cancel</button>\n          </div>\n\n        </form>\n      </mat-card-content>\n\n      <mat-card-actions>\n        <button mat-button (click)=\"openDialog()\">Edit Email/Password</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/edit-profile/edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_validate_service__ = __webpack_require__("../../../../../src/app/services/validate/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authenticate_auth_service__ = __webpack_require__("../../../../../src/app/services/authenticate/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enter_pass_enter_pass_component__ = __webpack_require__("../../../../../src/app/components/users/edit-profile/enter-pass/enter-pass.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(validateService, flashMessagesService, authService, router, dialog) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.dataAvailable = false;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile()
            .subscribe(function (profile) {
            _this.user = profile.user;
            _this.dataAvailable = true;
            // console.log(this.user);
        }, function (error) {
            console.log(error);
            return false;
        });
    };
    EditProfileComponent.prototype.onCancel = function () {
        this.router.navigate(['/profile']);
    };
    EditProfileComponent.prototype.onEditSubmit = function () {
        var _this = this;
        if (this.user.username) {
            if (!this.validateService.validateUsername(this.user.username)) {
                this.flashMessagesService.show("Please enter a valid username", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        }
        if (this.user.telephone) {
            if (!this.validateService.validatePhone(this.user.telephone)) {
                this.flashMessagesService.show("Please enter a valid telephone number", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        }
        else {
            this.user.telephone = null;
        }
        if (this.user.mobile) {
            if (!this.validateService.validatePhone(this.user.mobile)) {
                this.flashMessagesService.show("Please enter a valid mobile number", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        }
        else {
            delete this.user.mobile;
        }
        if (!this.user.address) {
            delete this.user.address;
        }
        // console.log(this.user);
        this.authService.editUser(this.user)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show("User edited.", { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/profile']);
            }
        });
    };
    EditProfileComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__enter_pass_enter_pass_component__["a" /* EnterPassDialog */], {
            width: '400px'
        });
        dialogRef.afterClosed()
            .subscribe(function (result) {
            if (result.success) {
                _this.router.navigate(['/profile/editAcc']);
            }
            else {
                if (result.msg) {
                    _this.flashMessagesService.show(result.msg, { cssClass: 'alert-danger', timeout: 5000 });
                }
            }
        });
    };
    EditProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__("../../../../../src/app/components/users/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/edit-profile/edit-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_authenticate_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialog */]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/edit-profile/enter-pass/enter-pass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n#dialog {\r\n  text-align: center;\r\n}\r\n\r\n#buttons {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/edit-profile/enter-pass/enter-pass.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dialog\">\r\n  <h1 mat-dialog-title>Please enter your current password</h1>\r\n\r\n  <mat-dialog-content>\r\n    <form>\r\n      <div id=\"currentPass\">\r\n        <mat-form-field>\r\n          <input type=\"password\" matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" name=\"password\" [(ngModel)]=\"password\">\r\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n        </mat-form-field>\r\n      </div>\r\n    </form>\r\n  </mat-dialog-content>\r\n\r\n  <mat-dialog-actions>\r\n    <div id=\"buttons\">\r\n      <button mat-raised-button (click)=\"onDialogOk()\">OK</button>\r\n      <button mat-raised-button (click)=\"onDialogCancel()\">Cancel</button>\r\n    </div>\r\n  </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/users/edit-profile/enter-pass/enter-pass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterPassDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authenticate_auth_service__ = __webpack_require__("../../../../../src/app/services/authenticate/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EnterPassDialog = /** @class */ (function () {
    function EnterPassDialog(dialogRef, data, authService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.authService = authService;
        this.hide = true;
    }
    EnterPassDialog.prototype.ngOnInit = function () {
    };
    EnterPassDialog.prototype.onDialogOk = function () {
        var _this = this;
        var user = {
            user_id: localStorage.getItem('user_id'),
            password: this.password,
            userType: localStorage.getItem('user_type')
        };
        // console.log(user);
        if (user.password) {
            this.authService.comparePasswords(user)
                .subscribe(function (data) {
                _this.dialogRef.close(data);
            });
        }
        else {
            this.dialogRef.close({
                success: false,
                msg: 'Please enter your current password'
            });
        }
    };
    EnterPassDialog.prototype.onDialogCancel = function () {
        this.dialogRef.close({
            success: false
        });
    };
    EnterPassDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-enter-pass',
            template: __webpack_require__("../../../../../src/app/components/users/edit-profile/enter-pass/enter-pass.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/edit-profile/enter-pass/enter-pass.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__services_authenticate_auth_service__["a" /* AuthService */]])
    ], EnterPassDialog);
    return EnterPassDialog;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reg-form-field {\r\n  width: 90%;\r\n}\r\n\r\n#reg-user {\r\n  /*text-align: center;*/\r\n  /*margin-top: 10px;*/\r\n  width: 50%;\r\n}\r\n\r\nmat-card {\r\n  text-align: center;\r\n  margin: 20px;\r\n  /*width: 50%;*/\r\n}\r\n\r\nform {\r\n  text-align: center\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card>\n    <mat-card-title>LogIn</mat-card-title>\n    <mat-card-content>\n      <form (submit)=\"onLoginSubmit()\">\n        <div>\n          <mat-form-field class=\"reg-form-field\">\n            <input placeholder=\"Username\" matInput type=\"text\" [(ngModel)]=\"username\" name=\"username\" required>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"reg-form-field\">\n            <input type=\"password\" matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"password\" name=\"password\" required>\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"reg-form-field\">\n            <mat-select placeholder=\"User Type\" [(value)]=\"userType\" required>\n              <mat-option value=\"customer\">\n                Customer\n              </mat-option>\n              <mat-option value=\"seller\">\n                Seller\n              </mat-option>\n              <mat-option value=\"admin\">\n                Admin\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <button mat-raised-button color=\"primary\" type=\"submit\">LogIn</button>\n        </div>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_auth_service__ = __webpack_require__("../../../../../src/app/services/authenticate/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_validate_service__ = __webpack_require__("../../../../../src/app/services/validate/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(validateService, authService, router, flashMessagesService) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authService.logout();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
            userType: this.userType
        };
        if (!this.validateService.validateLogin(user)) {
            this.flashMessagesService.show("Please enter a username, password and an account category", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        this.authService.authenticateUser(user)
            .subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessagesService.show("User logged in.", { cssClass: 'alert-success', timeout: 5000 });
                if (_this.userType === 'admin') {
                    _this.router.navigate(['/dashboard']);
                }
                else {
                    _this.router.navigate(['/profile']);
                }
            }
            else {
                _this.flashMessagesService.show("Login failed: " + data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/users/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_validate_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_1__services_authenticate_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/profile/confirm-review-delete/confirm-review-delete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n#dialog {\r\n  text-align: center;\r\n}\r\n\r\n#buttons {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/profile/confirm-review-delete/confirm-review-delete.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dialog\">\n  <h1 mat-dialog-title>Are you sure you want to delete this review?</h1>\n\n  <mat-dialog-actions>\n    <div id=\"buttons\">\n      <button mat-raised-button (click)=\"onDialogConfirm()\">Yes</button>\n      <button mat-raised-button (click)=\"onDialogCancel()\">No</button>\n    </div>\n  </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/profile/confirm-review-delete/confirm-review-delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmReviewDeleteDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reviews_review_service__ = __webpack_require__("../../../../../src/app/services/reviews/review.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ConfirmReviewDeleteDialog = /** @class */ (function () {
    function ConfirmReviewDeleteDialog(dialogRef, data, reviewService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.reviewService = reviewService;
        this.review = this.data.review;
    }
    ConfirmReviewDeleteDialog.prototype.ngOnInit = function () {
    };
    ConfirmReviewDeleteDialog.prototype.onDialogConfirm = function () {
        var _this = this;
        this.reviewService.deleteReview(this.review.id, this.review.item.id, this.review.item.type)
            .subscribe(function (data) {
            _this.dialogRef.close(data);
        });
    };
    ConfirmReviewDeleteDialog.prototype.onDialogCancel = function () {
        this.dialogRef.close({
            success: false
        });
    };
    ConfirmReviewDeleteDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-review-delete',
            template: __webpack_require__("../../../../../src/app/components/users/profile/confirm-review-delete/confirm-review-delete.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/profile/confirm-review-delete/confirm-review-delete.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__services_reviews_review_service__["a" /* ReviewService */]])
    ], ConfirmReviewDeleteDialog);
    return ConfirmReviewDeleteDialog;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/profile/edit-review/edit-review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-radio-button {\r\n  margin-right: 10px\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/profile/edit-review/edit-review.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <h1 mat-dialog-title><strong>Edit Review and Rating</strong></h1>\n\n  <mat-dialog-content style=\"text-align: center\">\n    <form>\n      <div>\n        <span><strong>Rating: </strong></span>\n        <mat-radio-group [(ngModel)]=\"review.rating\" name=\"review.rating\" style=\"margin-left: 20px\" required>\n          <mat-radio-button value=1>1</mat-radio-button>\n          <mat-radio-button value=2>2</mat-radio-button>\n          <mat-radio-button value=3>3</mat-radio-button>\n          <mat-radio-button value=4>4</mat-radio-button>\n          <mat-radio-button value=5>5</mat-radio-button>\n        </mat-radio-group>\n      </div>\n\n      <div>\n        <mat-form-field style=\"width: 90%\">\n          <textarea matInput placeholder=\"Add a review...\" name=\"review\" [(ngModel)]=\"review.review\" required></textarea>\n        </mat-form-field>\n      </div>\n    </form>\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <div style=\"width: 100%; text-align: center\">\n      <button mat-raised-button color=\"primary\" (click)=\"onDialogOk()\">Submit</button>\n      <button mat-raised-button (click)=\"onDialogCancel()\">Cancel</button>\n    </div>\n  </mat-dialog-actions>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/profile/edit-review/edit-review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditReviewDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reviews_review_service__ = __webpack_require__("../../../../../src/app/services/reviews/review.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditReviewDialog = /** @class */ (function () {
    function EditReviewDialog(dialogRef, data, reviewService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.reviewService = reviewService;
        this.review = this.data.review;
    }
    EditReviewDialog.prototype.ngOnInit = function () {
    };
    EditReviewDialog.prototype.onDialogOk = function () {
        var _this = this;
        var editedReview = {
            review: this.review.review,
            rating: this.review.rating,
            itemId: this.review.item.id,
            itemType: this.review.item.type
        };
        if (localStorage.getItem('user_type') !== 'customer') {
            return this.dialogRef.close({
                success: false,
                msg: "You must be logged as a customer to add a review"
            });
        }
        if (!(editedReview.review && editedReview.rating)) {
            return this.dialogRef.close({
                success: false,
                msg: "Please enter a review and a rating"
            });
        }
        this.reviewService.editReview(this.review.id, this.review.itemId, this.review.itemType, editedReview)
            .subscribe(function (data) {
            _this.dialogRef.close(data);
        });
    };
    EditReviewDialog.prototype.onDialogCancel = function () {
        this.dialogRef.close({
            success: false
        });
    };
    EditReviewDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-review',
            template: __webpack_require__("../../../../../src/app/components/users/profile/edit-review/edit-review.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/profile/edit-review/edit-review.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__services_reviews_review_service__["a" /* ReviewService */]])
    ], EditReviewDialog);
    return EditReviewDialog;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-grid-list {\r\n  margin: 10px;\r\n}\r\n\r\nbutton {\r\n  margin: 5px;\r\n}\r\n\r\n#profInfo {\r\n  position: absolute;\r\n  left: 50px;\r\n}\r\n\r\n.profPic {\r\n  width: 100%;\r\n}\r\n\r\n.row {\r\n  width: 100%;\r\n  padding: 25px;\r\n}\r\n\r\n.type {\r\n  font-weight: bold;\r\n}\r\n\r\n#editProfile {\r\n  float: right;\r\n  margin: 10px;\r\n}\r\n\r\n#addItem {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\nmat-grid-tile {\r\n  overflow: visible;\r\n}\r\n\r\n.custom-file-input ~ .custom-file-label::after {\r\n  content: \"Browse\";\r\n}\r\n\r\n.notification-bar{\r\n  width: 100%;\r\n  height: 50px;\r\n  background: lightblue;\r\n  padding: 10px 0 10px 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notification-bar\" *ngIf=\"newNotifications\">\n  <p>You have <strong>{{newNotNum}}</strong> new <a [routerLink]=\"['/notifications']\">notifications</a></p>\n</div>\n\n<div class=\"container\">\n  <mat-card style=\"margin: 15px 0\">\n    <div *ngIf=\"!user\" style=\"margin: 20px auto\">\n      <mat-progress-spinner color=\"primary\" mode=\"indeterminate\" style=\"margin:0 auto;\"></mat-progress-spinner>\n    </div>\n\n    <div *ngIf=\"user\">\n      <mat-grid-list cols=\"8\" rowHeight=\"175px\">\n        <mat-grid-tile colspan=\"1\" (mouseenter)=\"mouseenter()\" (mouseleave)=\"mouseleave()\">\n          <div *ngIf=\"!user.image\" style=\"width: 100%; height: 100%;\">\n            <img src=\"https://www.bighandi.com/img/profile-demo.png\" class=\"profPic\">\n\n            <div style=\"width: 100%; text-align: center; margin-bottom: 0\" [hidden]=\"!showImageButtons\">\n              <span matTooltip=\"Add a profile pic\" matTooltipPosition=\"below\">\n                <button mat-icon-button color=\"primary\" (click)=\"toggleUploadForm()\"><mat-icon>add_circle_outline</mat-icon></button>\n              </span>\n            </div>\n          </div>\n\n          <div *ngIf=\"user.image\">\n            <img [src]=\"imageUrl\" class=\"profPic\">\n\n            <div style=\"width: 100%; text-align: center; margin-bottom: 0\" [hidden]=\"!showImageButtons\">\n            <span matTooltip=\"Edit profile pic\" matTooltipPosition=\"below\">\n              <button mat-icon-button color=\"primary\" (click)=\"toggleEditForm()\"><mat-icon>edit</mat-icon></button>\n            </span>\n\n              <span matTooltip=\"Delete profile pic\" matTooltipPosition=\"below\">\n              <button mat-icon-button color=\"warn\" (click)=\"deleteImage()\"><mat-icon>delete</mat-icon></button>\n            </span>\n            </div>\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"5\">\n          <div id=\"profInfo\">\n            <h1>{{user.name}}</h1>\n            <mat-divider></mat-divider>\n            <p>{{user.username}}</p>\n            <p>{{user.email}}</p>\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"2\">\n          <div id=\"addItem\" *ngIf=\"this.user.userType === 'seller'\">\n            <div *ngIf=\"user.avgRating\">\n              <div *ngIf=\"user.avgRating > 0\">\n                <p>Rating: <span style=\"font-weight: bolder\">{{user.avgRating}}</span>/5</p>\n              </div>\n            </div>\n            <button style=\"width: 185px\" mat-raised-button color=\"primary\" [routerLink]=\"['/items/new']\"><mat-icon>add_circle_outline</mat-icon> Add Item for Sale</button>\n            <button style=\"width: 185px\" mat-raised-button color=\"primary\" [routerLink]=\"['/services/new']\"><mat-icon>add_circle_outline</mat-icon> Add Service for Sale</button>\n            <button style=\"width: 185px\" mat-raised-button color=\"basic\" [routerLink]=\"['/requests']\">Requests Recieved</button>\n          </div>\n        </mat-grid-tile>\n\n      </mat-grid-list>\n\n      <div class=\"custom-file\" id=\"customFile\" lang=\"es\" style=\"margin: 25px; width: 50%\" *ngIf=\"showUploadForm\">\n        <form #form (submit)=\"addImage()\" enctype=\"multipart/form-data\">\n          <input\n            ngModel\n            (change)=\"getFiles($event)\"\n            type=\"file\"\n            name=\"file\"\n            id=\"file\"\n            accept=\"image/jpeg, image/png\"\n            class=\"custom-file-input\"\n            style=\"width: 20%\"\n          >\n          <label class=\"custom-file-label\" for=\"file\" style=\"width: 75%\">\n            Select File...\n          </label>\n          <button mat-raised-button type=\"submit\" style=\"float: right\">Upload</button>\n        </form>\n      </div>\n\n      <div class=\"custom-file\" id=\"customFileEdit\" lang=\"es\" style=\"margin: 25px; width: 50%\" *ngIf=\"showEditForm\">\n        <form #form (submit)=\"editImage()\" enctype=\"multipart/form-data\">\n          <input\n            ngModel\n            (change)=\"getFiles($event)\"\n            type=\"file\"\n            name=\"fileEdit\"\n            id=\"fileEdit\"\n            accept=\"image/jpeg, image/png\"\n            class=\"custom-file-input\"\n            style=\"width: 20%\"\n          >\n          <label class=\"custom-file-label\" for=\"fileEdit\" style=\"width: 75%\">\n            Select File...\n          </label>\n          <button mat-raised-button type=\"submit\" style=\"float: right\">Upload</button>\n        </form>\n      </div>\n\n      <mat-tab-group>\n        <mat-tab label=\"User Info\">\n          <div class=\"row\">\n\n            <div class=\"col-3 type\">\n              Name\n            </div>\n\n            <div class=\"col-9 property\">\n              {{user.name}}\n            </div>\n\n          </div>\n\n          <mat-divider></mat-divider>\n\n          <div class=\"row\">\n\n            <div class=\"col-3 type\">\n              Username\n            </div>\n\n            <div class=\"col-9 property\">\n              {{user.username}}\n            </div>\n\n          </div>\n\n          <mat-divider></mat-divider>\n\n          <div class=\"row\">\n\n            <div class=\"col-3 type\">\n              Email\n            </div>\n\n            <div class=\"col-9 property\">\n              {{user.email}}\n            </div>\n\n          </div>\n\n          <mat-divider *ngIf=\"user.telephone\"></mat-divider>\n\n          <div class=\"row\" *ngIf=\"user.telephone\">\n\n            <div class=\"col-3 type\">\n              Telephone Number\n            </div>\n\n            <div class=\"col-9 property\">\n              +94 {{user.telephone}}\n            </div>\n\n          </div>\n\n          <mat-divider *ngIf=\"user.mobile\"></mat-divider>\n\n          <div class=\"row\" *ngIf=\"user.mobile\">\n\n            <div class=\"col-3 type\">\n              Mobile Number\n            </div>\n\n            <div class=\"col-9 property\">\n              +94 {{user.mobile}}\n            </div>\n\n          </div>\n\n          <mat-divider *ngIf=\"user.address\"></mat-divider>\n\n          <div class=\"row\" *ngIf=\"user.address\">\n\n            <div class=\"col-3 type\">\n              Address\n            </div>\n\n            <div class=\"col-9 property\">\n              {{user.address}}\n            </div>\n\n          </div>\n\n          <div>\n            <button mat-mini-fab color=\"primary\" id=\"editProfile\" [routerLink]=\"['/profile/editProf']\">Edit</button>\n          </div>\n\n        </mat-tab>\n\n        <div *ngIf=\"user.userType === 'customer'\">\n          <mat-tab label=\"Favourite\">\n            <mat-tab-group>\n              <mat-tab label=\"Items\">\n                <div *ngIf=\"favItemsList.length > 0\">\n                  <mat-grid-list cols=\"4\" rowHeight=\"450px\">\n                    <mat-grid-tile *ngFor=\"let item of favItemsList\">\n                      <mat-card style=\"margin: 10px; text-align: center\">\n                        <div *ngIf=\"!item.image\">\n                          <img mat-card-image src=\"https://www.jainsusa.com/images/store/landscape/not-available.jpg\" style=\"padding: 5px\">\n                        </div>\n\n                        <div *ngIf=\"item.image\">\n                          <!--<img mat-card-image [src]=\"'http://localhost:3000/images/' + item.image\" style=\"padding: 5px\">-->\n                          <img mat-card-image [src]=\"'images/' + item.image\" style=\"padding: 5px\">\n                        </div>\n\n                        <mat-card-header>\n                          <div style=\"width: 100%; margin-left: -15px\">\n                            <mat-card-title><strong>{{item.name}}</strong></mat-card-title>\n                            <mat-card-subtitle>{{item.category}}</mat-card-subtitle>\n                          </div>\n                        </mat-card-header>\n                        <mat-divider></mat-divider>\n                        <mat-card-content style=\"margin-top: 10px\">\n                          <p>Rs. {{item.price}}.00</p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                          <button mat-button color=\"primary\" style=\"width: 100%;\" (click)=\"goToItem(item._id)\">Details</button>\n                        </mat-card-actions>\n                      </mat-card>\n                    </mat-grid-tile>\n                  </mat-grid-list>\n                </div>\n\n                <div *ngIf=\"favItemsList.length === 0\" style=\"width: 100%; text-align: center; margin: 50px 0;\">\n                  <h4>You have no favorited items</h4>\n                </div>\n              </mat-tab>\n\n              <mat-tab label=\"Services\">\n                <div *ngIf=\"favServicesList.length > 0\">\n                  <mat-grid-list cols=\"4\" rowHeight=\"400px\">\n                    <mat-grid-tile *ngFor=\"let service of favServicesList\">\n                      <mat-card style=\"margin: 10px; text-align: center\">\n                        <div *ngIf=\"!service.image\">\n                          <img mat-card-image src=\"https://www.jainsusa.com/images/store/landscape/not-available.jpg\" style=\"padding: 5px\">\n                        </div>\n\n                        <div *ngIf=\"service.image\">\n                          <!--<img mat-card-image [src]=\"'http://localhost:3000/images/' + service.image\" style=\"padding: 5px\">-->\n                          <img mat-card-image [src]=\"'images/' + service.image\" style=\"padding: 5px\">\n                        </div>\n                        <mat-card-header>\n                          <div style=\"width: 100%; margin-left: -15px\">\n                            <mat-card-title><strong>{{service.name}}</strong></mat-card-title>\n                            <mat-card-subtitle>{{service.category}}</mat-card-subtitle>\n                          </div>\n                        </mat-card-header>\n                        <mat-divider></mat-divider>\n                        <mat-card-content style=\"margin-top: 10px\">\n                          <p>Rs. {{service.price}}.00</p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                          <button mat-button color=\"primary\" style=\"width: 100%;\" (click)=\"goToService(service._id)\">Details</button>\n                        </mat-card-actions>\n                      </mat-card>\n                    </mat-grid-tile>\n                  </mat-grid-list>\n                </div>\n\n                <div *ngIf=\"favServicesList.length === 0\" style=\"width: 100%; text-align: center; margin: 50px 0;\">\n                  <h4>You have no favorited services</h4>\n                </div>\n              </mat-tab>\n            </mat-tab-group>\n          </mat-tab>\n\n          <mat-tab label=\"Requested\">\n            <mat-tab-group>\n              <mat-tab label=\"Items\">\n                <div *ngIf=\"reqItemsList.length > 0\">\n                  <mat-grid-list cols=\"4\" rowHeight=\"450px\">\n                    <mat-grid-tile *ngFor=\"let item of reqItemsList\">\n                      <mat-card style=\"margin: 10px; text-align: center\">\n                        <div *ngIf=\"!item.image\">\n                          <img mat-card-image src=\"https://www.jainsusa.com/images/store/landscape/not-available.jpg\" style=\"padding: 5px\">\n                        </div>\n\n                        <div *ngIf=\"item.image\">\n                          <!--<img mat-card-image [src]=\"'http://localhost:3000/images/' + item.image\" style=\"padding: 5px\">-->\n                          <img mat-card-image [src]=\"'images/' + item.image\" style=\"padding: 5px\">\n                        </div>\n                        <mat-card-header>\n                          <div style=\"width: 100%; margin-left: -15px\">\n                            <mat-card-title><strong>{{item.name}}</strong></mat-card-title>\n                            <mat-card-subtitle>{{item.category}}</mat-card-subtitle>\n                          </div>\n                        </mat-card-header>\n                        <mat-divider></mat-divider>\n                        <mat-card-content style=\"margin-top: 10px\">\n                          <p>Rs. {{item.price}}.00</p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                          <button mat-button color=\"primary\" style=\"width: 100%;\" (click)=\"goToItem(item._id)\">Details</button>\n                        </mat-card-actions>\n                      </mat-card>\n                    </mat-grid-tile>\n                  </mat-grid-list>\n                </div>\n\n                <div *ngIf=\"reqItemsList.length === 0\" style=\"width: 100%; text-align: center; margin: 50px 0;\">\n                  <h4>You have no requested items</h4>\n                </div>\n              </mat-tab>\n\n              <mat-tab label=\"Services\">\n                <div *ngIf=\"reqServicesList.length > 0\">\n                  <mat-grid-list cols=\"4\" rowHeight=\"400px\">\n                    <mat-grid-tile *ngFor=\"let service of reqServicesList\">\n                      <mat-card style=\"margin: 10px; text-align: center\">\n                        <div *ngIf=\"!service.image\">\n                          <img mat-card-image src=\"https://www.jainsusa.com/images/store/landscape/not-available.jpg\" style=\"padding: 5px\">\n                        </div>\n\n                        <div *ngIf=\"service.image\">\n                          <!--<img mat-card-image [src]=\"'http://localhost:3000/images/' + service.image\" style=\"padding: 5px\">-->\n                          <img mat-card-image [src]=\"'images/' + service.image\" style=\"padding: 5px\">\n                        </div>\n                        <mat-card-header>\n                          <div style=\"width: 100%; margin-left: -15px\">\n                            <mat-card-title><strong>{{service.name}}</strong></mat-card-title>\n                            <mat-card-subtitle>{{service.category}}</mat-card-subtitle>\n                          </div>\n                        </mat-card-header>\n                        <mat-divider></mat-divider>\n                        <mat-card-content style=\"margin-top: 10px\">\n                          <p>Rs. {{service.price}}.00</p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                          <button mat-button color=\"primary\" style=\"width: 100%;\" (click)=\"goToService(service._id)\">Details</button>\n                        </mat-card-actions>\n                      </mat-card>\n                    </mat-grid-tile>\n                  </mat-grid-list>\n                </div>\n\n                <div *ngIf=\"reqServicesList.length === 0\" style=\"width: 100%; text-align: center; margin: 50px 0;\">\n                  <h4>You have no requested services</h4>\n                </div>\n              </mat-tab>\n            </mat-tab-group>\n          </mat-tab>\n\n          <mat-tab label=\"Bought\">\n            <mat-tab-group>\n              <mat-tab label=\"Items\">\n                <div *ngIf=\"boughtItemsList.length > 0\">\n                  <mat-grid-list cols=\"4\" rowHeight=\"450px\">\n                    <mat-grid-tile *ngFor=\"let item of boughtItemsList\">\n                      <mat-card style=\"margin: 10px; text-align: center\">\n                        <div *ngIf=\"!item.image\">\n                          <img mat-card-image src=\"https://www.jainsusa.com/images/store/landscape/not-available.jpg\" style=\"padding: 5px\">\n                        </div>\n\n                        <div *ngIf=\"item.image\">\n                          <!--<img mat-card-image [src]=\"'http://localhost:3000/images/' + item.image\" style=\"padding: 5px\">-->\n                          <img mat-card-image [src]=\"'images/' + item.image\" style=\"padding: 5px\">\n                        </div>\n                        <mat-card-header>\n                          <div style=\"width: 100%; margin-left: -15px\">\n                            <mat-card-title><strong>{{item.name}}</strong></mat-card-title>\n                            <mat-card-subtitle>{{item.category}}</mat-card-subtitle>\n                          </div>\n                        </mat-card-header>\n                        <mat-divider></mat-divider>\n                        <mat-card-content style=\"margin-top: 10px\">\n                          <p>Rs. {{item.price}}.00</p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                          <button mat-button color=\"primary\" style=\"width: 100%;\" (click)=\"goToItem(item._id)\">Details</button>\n                        </mat-card-actions>\n                      </mat-card>\n                    </mat-grid-tile>\n                  </mat-grid-list>\n                </div>\n\n                <div *ngIf=\"boughtItemsList.length === 0\" style=\"width: 100%; text-align: center; margin: 50px 0;\">\n                  <h4>You have no bought items</h4>\n                </div>\n              </mat-tab>\n\n              <mat-tab label=\"Services\">\n                <div *ngIf=\"boughtItemsList.length > 0\">\n                  <mat-grid-list cols=\"4\" rowHeight=\"400px\">\n                    <mat-grid-tile *ngFor=\"let service of this.boughtServicesList\">\n                      <mat-card style=\"margin: 10px; text-align: center\">\n                        <div *ngIf=\"!service.image\">\n                          <img mat-card-image src=\"https://www.jainsusa.com/images/store/landscape/not-available.jpg\" style=\"padding: 5px\">\n                        </div>\n\n                        <div *ngIf=\"service.image\">\n                          <!--<img mat-card-image [src]=\"'http://localhost:3000/images/' + service.image\" style=\"padding: 5px\">-->\n                          <img mat-card-image [src]=\"'images/' + service.image\" style=\"padding: 5px\">\n                        </div>\n                        <mat-card-header>\n                          <div style=\"width: 100%; margin-left: -15px\">\n                            <mat-card-title><strong>{{service.name}}</strong></mat-card-title>\n                            <mat-card-subtitle>{{service.category}}</mat-card-subtitle>\n                          </div>\n                        </mat-card-header>\n                        <mat-divider></mat-divider>\n                        <mat-card-content style=\"margin-top: 10px\">\n                          <p>Rs. {{service.price}}.00</p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                          <button mat-button color=\"primary\" style=\"width: 100%;\" (click)=\"goToService(service._id)\">Details</button>\n                        </mat-card-actions>\n                      </mat-card>\n                    </mat-grid-tile>\n                  </mat-grid-list>\n                </div>\n\n                <div *ngIf=\"boughtItemsList.length === 0\" style=\"width: 100%; text-align: center; margin: 50px 0;\">\n                  <h4>You have no bought services</h4>\n                </div>\n              </mat-tab>\n            </mat-tab-group>\n          </mat-tab>\n\n          <mat-tab label=\"Reviews\">\n            <div *ngIf=\"reviews.length > 0\">\n              <div *ngFor=\"let review of reviews\">\n                <mat-card>\n                  <mat-card-title *ngIf=\"review.item.type === 'item'\"><a href=\"/items/{{review.item.id}}\">{{review.item.name}}</a></mat-card-title>\n                  <mat-card-title *ngIf=\"review.item.type === 'service'\"><a href=\"/services/{{review.item.id}}\">{{review.item.name}}</a></mat-card-title>\n\n                  <mat-card-subtitle>{{review.customer.username}}</mat-card-subtitle>\n                  <mat-card-content>\n                    <p>Rating: <strong>{{review.rating}}</strong>/5</p>\n\n                    <mat-card style=\"margin-bottom: 15px\">\n                      <h5><strong>Review</strong></h5>\n                      <hr>\n                      <p>{{review.review}}</p>\n                    </mat-card>\n\n                    <button mat-raised-button color=\"primary\" (click)=\"editReview(review)\">Edit</button>\n                    <button mat-raised-button color=\"warn\" (click)=\"deleteReview(review)\">Delete</button>\n                  </mat-card-content>\n                </mat-card>\n                <mat-divider></mat-divider>\n              </div>\n            </div>\n\n            <div *ngIf=\"reviews.length === 0\" style=\"width: 100%; text-align: center; margin: 50px 0;\">\n              <h4>You haven't added any reviews yet</h4>\n            </div>\n          </mat-tab>\n        </div>\n\n        <div *ngIf=\"user.userType === 'seller'\">\n          <mat-tab label=\"Selling Items\">\n            <div *ngIf=\"sellingItemsList.length > 0\">\n              <mat-grid-list cols=\"4\" rowHeight=\"450px\">\n                <mat-grid-tile *ngFor=\"let item of sellingItemsList\">\n                  <mat-card style=\"margin: 10px; text-align: center\">\n                    <div *ngIf=\"!item.image\">\n                      <img mat-card-image src=\"https://www.jainsusa.com/images/store/landscape/not-available.jpg\" style=\"padding: 5px\">\n                    </div>\n\n                    <div *ngIf=\"item.image\">\n                      <!--<img mat-card-image [src]=\"'http://localhost:3000/images/' + item.image\" style=\"padding: 5px\">-->\n                      <img mat-card-image [src]=\"'images/' + item.image\" style=\"padding: 5px\">\n                    </div>\n                    <mat-card-header>\n                      <div style=\"width: 100%; margin-left: -15px\">\n                        <mat-card-title><strong>{{item.name}}</strong></mat-card-title>\n                        <mat-card-subtitle>{{item.category}}</mat-card-subtitle>\n                      </div>\n                    </mat-card-header>\n                    <mat-divider></mat-divider>\n                    <mat-card-content style=\"margin-top: 10px\">\n                      <p>Rs. {{item.price}}.00</p>\n                    </mat-card-content>\n                    <mat-card-actions>\n                      <button mat-button color=\"primary\" style=\"width: 100%;\" (click)=\"goToItem(item._id)\">Details</button>\n                    </mat-card-actions>\n                  </mat-card>\n                </mat-grid-tile>\n              </mat-grid-list>\n            </div>\n\n            <div *ngIf=\"sellingItemsList.length === 0\" style=\"width: 100%; text-align: center; margin: 50px 0;\">\n              <h4>You haven't added any items for sale yet</h4>\n            </div>\n          </mat-tab>\n\n          <mat-tab label=\"Selling Services\">\n            <div *ngIf=\"sellingServicesList.length > 0\">\n              <mat-grid-list cols=\"4\" rowHeight=\"400px\">\n                <mat-grid-tile *ngFor=\"let service of sellingServicesList\">\n                  <mat-card style=\"margin: 10px; text-align: center\">\n                    <div *ngIf=\"!service.image\">\n                      <img mat-card-image src=\"https://www.jainsusa.com/images/store/landscape/not-available.jpg\" style=\"padding: 5px\">\n                    </div>\n\n                    <div *ngIf=\"service.image\">\n                      <!--<img mat-card-image [src]=\"'http://localhost:3000/images/' + service.image\" style=\"padding: 5px\">-->\n                      <img mat-card-image [src]=\"'images/' + service.image\" style=\"padding: 5px\">\n                    </div>\n                    <mat-card-header>\n                      <div style=\"width: 100%; margin-left: -15px\">\n                        <mat-card-title><strong>{{service.name}}</strong></mat-card-title>\n                        <mat-card-subtitle>{{service.category}}</mat-card-subtitle>\n                      </div>\n                    </mat-card-header>\n                    <mat-divider></mat-divider>\n                    <mat-card-content style=\"margin-top: 10px\">\n                      <p>Rs. {{service.price}}.00</p>\n                    </mat-card-content>\n                    <mat-card-actions>\n                      <button mat-button color=\"primary\" style=\"width: 100%;\" (click)=\"goToService(service._id)\">Details</button>\n                    </mat-card-actions>\n                  </mat-card>\n                </mat-grid-tile>\n              </mat-grid-list>\n            </div>\n\n            <div *ngIf=\"sellingServicesList.length === 0\" style=\"width: 100%; text-align: center; margin: 50px 0;\">\n              <h4>You haven't added any services for sale yet</h4>\n            </div>\n          </mat-tab>\n        </div>\n      </mat-tab-group>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_auth_service__ = __webpack_require__("../../../../../src/app/services/authenticate/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_items_item_service__ = __webpack_require__("../../../../../src/app/services/items/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_reviews_review_service__ = __webpack_require__("../../../../../src/app/services/reviews/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_review_delete_confirm_review_delete_component__ = __webpack_require__("../../../../../src/app/components/users/profile/confirm-review-delete/confirm-review-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_review_edit_review_component__ = __webpack_require__("../../../../../src/app/components/users/profile/edit-review/edit-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_image_image_service__ = __webpack_require__("../../../../../src/app/services/image/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_notifications_notifications_service__ = __webpack_require__("../../../../../src/app/services/notifications/notifications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, itemService, reviewService, imageService, notificationsService, flashMessagesService, router, dialog) {
        this.authService = authService;
        this.itemService = itemService;
        this.reviewService = reviewService;
        this.imageService = imageService;
        this.notificationsService = notificationsService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.dialog = dialog;
        this.sellingItemsList = [];
        this.sellingServicesList = [];
        this.favItemsList = [];
        this.favServicesList = [];
        this.boughtItemsList = [];
        this.boughtServicesList = [];
        this.reqItemsList = [];
        this.reqServicesList = [];
        this.reviews = [];
        this.showImageButtons = false;
        this.showUploadForm = false;
        this.showEditForm = false;
        this.newNotifications = false;
        this.newNotNum = 0;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile()
            .subscribe(function (profile) {
            _this.user = profile.user;
            if (_this.user.avgRating) {
                _this.user.avgRating = (Math.round(_this.user.avgRating * 100)) / 100;
            }
            _this.notificationsService.getUnreadNum(localStorage.getItem('user_id'))
                .subscribe(function (data) {
                if (data.success) {
                    if (data.num > 0) {
                        _this.newNotifications = true;
                        _this.newNotNum = data.num;
                    }
                }
                else {
                    _this.flashMessagesService.show('Unable to retrieve notifications. ' + data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                }
            });
            if (_this.user.image) {
                _this.imageUrl = 'http://localhost:3000/images/' + _this.user.image;
            }
            if (_this.user.userType === 'seller') {
                _this.user.sellingItems.forEach(function (item) {
                    _this.itemService.getItem(item)
                        .subscribe(function (data) {
                        _this.sellingItemsList.push(data.item);
                    });
                });
                _this.user.sellingServices.forEach(function (service) {
                    _this.itemService.getService(service)
                        .subscribe(function (data) {
                        _this.sellingServicesList.push(data.service);
                    });
                });
            }
            else if (_this.user.userType === 'customer') {
                _this.user.favItems.forEach(function (item) {
                    _this.itemService.getItem(item)
                        .subscribe(function (data) {
                        _this.favItemsList.push(data.item);
                    });
                });
                _this.user.favServices.forEach(function (service) {
                    _this.itemService.getService(service)
                        .subscribe(function (data) {
                        _this.favServicesList.push(data.service);
                    });
                });
                _this.user.boughtItems.forEach(function (item) {
                    _this.itemService.getItem(item)
                        .subscribe(function (data) {
                        _this.boughtItemsList.push(data.item);
                    });
                });
                _this.user.boughtServices.forEach(function (service) {
                    _this.itemService.getService(service)
                        .subscribe(function (data) {
                        _this.boughtServicesList.push(data.service);
                    });
                });
                _this.user.reqItems.forEach(function (item) {
                    _this.itemService.getItem(item)
                        .subscribe(function (data) {
                        _this.reqItemsList.push(data.item);
                    });
                });
                _this.user.reqServices.forEach(function (service) {
                    _this.itemService.getService(service)
                        .subscribe(function (data) {
                        _this.reqServicesList.push(data.service);
                    });
                });
                _this.user.reviews.forEach(function (review) {
                    _this.reviewService.getReview(review, 'any', 'any')
                        .subscribe(function (data) {
                        _this.reviews.push(data.review);
                    });
                });
            }
        }, function (error) {
            console.log(error);
            return false;
        });
    };
    ProfileComponent.prototype.goToItem = function (itemId) {
        this.router.navigate(['/items/' + itemId]);
    };
    ProfileComponent.prototype.goToService = function (serviceId) {
        this.router.navigate(['/services/' + serviceId]);
    };
    ProfileComponent.prototype.editReview = function (review) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__edit_review_edit_review_component__["a" /* EditReviewDialog */], {
            width: '600px',
            data: {
                review: review
            }
        });
        dialogRef.afterClosed()
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('The review and rating were successfully edited', { cssClass: 'alert-success', timeout: 5000 });
                window.location.reload();
            }
            else {
                if (data.msg) {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                }
            }
        });
    };
    ProfileComponent.prototype.deleteReview = function (review) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__confirm_review_delete_confirm_review_delete_component__["a" /* ConfirmReviewDeleteDialog */], {
            width: '450px',
            data: {
                review: review
            }
        });
        dialogRef.afterClosed()
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('The review was successfully deleted', { cssClass: 'alert-success', timeout: 5000 });
                window.location.reload();
            }
            else {
                if (data.msg) {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                }
            }
        });
    };
    ProfileComponent.prototype.mouseenter = function () {
        this.showImageButtons = true;
    };
    ProfileComponent.prototype.mouseleave = function () {
        this.showImageButtons = false;
    };
    ProfileComponent.prototype.getFiles = function (event) {
        this.files = event.target.files;
    };
    ProfileComponent.prototype.addImage = function () {
        var _this = this;
        if (!this.files) {
            this.flashMessagesService.show("Please select an image to upload", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        else {
            if (this.files.length !== 1) {
                this.flashMessagesService.show("Please select a single image to upload", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
            else {
                this.imageService.uploadImage(this.files[0])
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.imageService.updateInfo(_this.user.userType, _this.user._id)
                            .subscribe(function (data2) {
                            if (data2.success) {
                                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                                window.location.reload();
                                return true;
                            }
                            else {
                                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                                return false;
                            }
                        });
                    }
                    else {
                        _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                        return false;
                    }
                });
            }
        }
    };
    ProfileComponent.prototype.editImage = function () {
        var _this = this;
        if (!this.files) {
            this.flashMessagesService.show("Please select an image to upload", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        else {
            if (this.files.length !== 1) {
                this.flashMessagesService.show("Please select a single image to upload", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
            else {
                this.imageService.deleteImage(this.user.image, this.user.userType, this.user._id)
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.imageService.uploadImage(_this.files[0])
                            .subscribe(function (data) {
                            if (data.success) {
                                _this.imageService.updateInfo(_this.user.userType, _this.user._id)
                                    .subscribe(function (data2) {
                                    if (data2.success) {
                                        _this.flashMessagesService.show("Image successfully updated", { cssClass: 'alert-success', timeout: 5000 });
                                        window.location.reload();
                                        return true;
                                    }
                                    else {
                                        _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                                        return false;
                                    }
                                });
                            }
                            else {
                                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                                return false;
                            }
                        });
                    }
                    else {
                        _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                        return false;
                    }
                });
            }
        }
    };
    ProfileComponent.prototype.deleteImage = function () {
        var _this = this;
        this.imageService.deleteImage(this.user.image, this.user.userType, this.user._id)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                window.location.reload();
                return true;
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        });
    };
    ProfileComponent.prototype.toggleUploadForm = function () {
        this.showUploadForm = !this.showUploadForm;
    };
    ProfileComponent.prototype.toggleEditForm = function () {
        this.showEditForm = !this.showEditForm;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/users/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authenticate_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_items_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_4__services_reviews_review_service__["a" /* ReviewService */],
            __WEBPACK_IMPORTED_MODULE_9__services_image_image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_10__services_notifications_notifications_service__["a" /* NotificationsService */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialog */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reg-form-field {\r\n  width: 90%;\r\n}\r\n\r\n#reg-user {\r\n  /*text-align: center;*/\r\n  /*margin-top: 10px;*/\r\n  width: 50%;\r\n}\r\n\r\nmat-card {\r\n  text-align: center;\r\n  margin: 20px;\r\n  /*width: 50%;*/\r\n}\r\n\r\nform {\r\n  text-align: center\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card>\n    <mat-card-title>Register User</mat-card-title>\n    <mat-card-content>\n      <form (submit)=\"onRegisterSubmit()\">\n        <div>\n          <mat-form-field class=\"reg-form-field\">\n            <input placeholder=\"Name\" matInput type=\"text\" [(ngModel)]=\"name\" name=\"name\" required>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"reg-form-field\">\n            <input placeholder=\"Username\" matInput type=\"text\" [(ngModel)]=\"username\" name=\"username\" required>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"reg-form-field\">\n            <mat-select placeholder=\"User Type\" [(value)]=\"userType\" required>\n              <mat-option value=\"customer\">\n                Customer\n              </mat-option>\n              <mat-option value=\"seller\">\n                Seller\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"reg-form-field\">\n            <input placeholder=\"Email\" matInput type=\"email\" [(ngModel)]=\"email\" name=\"email\" required>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"reg-form-field\">\n            <input type=\"password\" matInput placeholder=\"Password\" [type]=\"hidePass ? 'password' : 'text'\" [(ngModel)]=\"password\" name=\"password\" required>\n            <mat-icon matSuffix (click)=\"hidePass = !hidePass\">{{hidePass ? 'visibility' : 'visibility_off'}}</mat-icon>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"reg-form-field\">\n            <input type=\"password\" matInput placeholder=\"Confirm password\" [type]=\"hideConfPass ? 'password' : 'text'\" [(ngModel)]=\"confPass\" name=\"confPass\" required>\n            <mat-icon matSuffix (click)=\"hideConfPass = !hideConfPass\">{{hideConfPass ? 'visibility' : 'visibility_off'}}</mat-icon>\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"reg-form-field\">\n            <span matPrefix>+94 &nbsp;</span>\n            <input placeholder=\"Telephone number\" matInput type=\"text\" [(ngModel)]=\"telephone\" name=\"telephone\" maxlength=\"9\">\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"reg-form-field\">\n            <span matPrefix>+94 &nbsp;</span>\n            <input placeholder=\"Mobile number\" matInput type=\"text\" [(ngModel)]=\"mobile\" name=\"mobile\" maxlength=\"9\">\n          </mat-form-field>\n        </div>\n\n        <div>\n          <mat-form-field class=\"reg-form-field\">\n            <input placeholder=\"Address\" matInput type=\"text\" [(ngModel)]=\"address\" name=\"address\">\n          </mat-form-field>\n        </div>\n\n        <!--<div>-->\n        <!--<input category=\"file\" ngModel name=\"profPic\" id=\"profPic\">-->\n        <!--</div>-->\n\n        <div>\n          <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n        </div>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_validate_service__ = __webpack_require__("../../../../../src/app/services/validate/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authenticate_auth_service__ = __webpack_require__("../../../../../src/app/services/authenticate/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    // profPic: any;
    function RegisterComponent(validateService, flashMessagesService, authService, router
        // private elementRef: ElementRef
    ) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.hidePass = true;
        this.hideConfPass = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.authService.logout();
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        // let files = this.elementRef.nativeElement.querySelector("#profPic").files;
        // this.profPic = files[0];
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            confPass: this.confPass,
            telephone: this.telephone,
            mobile: this.mobile,
            address: this.address,
            userType: this.userType
            // profPic: this.profPic
        };
        console.log(user);
        if (!this.validateService.validateRegister(user)) {
            this.flashMessagesService.show("Please fill in all necessary fields", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        if (!this.validateService.validateUsername(user.username)) {
            this.flashMessagesService.show("Please enter a valid username", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessagesService.show("Please enter a valid email address", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        if (!this.validateService.validatePassword(user.password, user.confPass)) {
            this.flashMessagesService.show("Password and confirm password do not match", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        if (user.telephone) {
            if (!this.validateService.validatePhone(user.telephone)) {
                this.flashMessagesService.show("Please enter a valid telephone number", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        }
        if (user.mobile) {
            if (!this.validateService.validatePhone(user.mobile)) {
                this.flashMessagesService.show("Please enter a valid mobile number", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            }
        }
        this.authService.registerUser(user)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show("You are registered and can now login.", { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/users/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_authenticate_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]
            // private elementRef: ElementRef
        ])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/view-user/view-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-grid-list {\r\n  margin: 10px;\r\n}\r\n\r\nbutton {\r\n  margin: 5px;\r\n}\r\n\r\n#profInfo {\r\n  position: absolute;\r\n  left: 50px;\r\n}\r\n\r\n.profPic {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.row {\r\n  width: 100%;\r\n  padding: 25px;\r\n}\r\n\r\n.type {\r\n  font-weight: bold;\r\n}\r\n\r\n#editProfile {\r\n  float: right;\r\n  margin: 10px;\r\n}\r\n\r\n#addItem {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\nmat-grid-tile {\r\n  overflow: visible;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/view-user/view-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card style=\"margin: 15px 0\">\n    <div *ngIf=\"user\">\n      <mat-grid-list cols=\"8\">\n        <mat-grid-tile colspan=\"1\">\n          <img *ngIf=\"!user.image\" src=\"https://www.bighandi.com/img/profile-demo.png\" class=\"profPic\">\n          <!--<img *ngIf=\"user.image\" [src]=\"'http://localhost:3000/images/' + user.image\" class=\"profPic\">-->\n          <img *ngIf=\"user.image\" [src]=\"'images/' + user.image\" class=\"profPic\">\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"6\">\n          <div id=\"profInfo\">\n            <h1>{{user.name}}</h1>\n            <mat-divider></mat-divider>\n            <p>{{user.username}}</p>\n            <p>{{user.email}}</p>\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile colspan=\"1\" *ngIf=\"user.avgRating\">\n          <div style=\"width: 100%; height: 100%\">\n            <p>Rating: <span style=\"font-weight: bolder\">{{user.avgRating}}</span>/5</p>\n          </div>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n      <mat-tab-group>\n        <mat-tab label=\"User Info\">\n          <div class=\"row\">\n\n            <div class=\"col-3 type\">\n              Name\n            </div>\n\n            <div class=\"col-9 property\">\n              {{user.name}}\n            </div>\n\n          </div>\n\n          <mat-divider></mat-divider>\n\n          <div class=\"row\">\n\n            <div class=\"col-3 type\">\n              Username\n            </div>\n\n            <div class=\"col-9 property\">\n              {{user.username}}\n            </div>\n\n          </div>\n\n          <mat-divider></mat-divider>\n\n          <div class=\"row\">\n\n            <div class=\"col-3 type\">\n              Email\n            </div>\n\n            <div class=\"col-9 property\">\n              {{user.email}}\n            </div>\n\n          </div>\n\n          <mat-divider *ngIf=\"user.telephone\"></mat-divider>\n\n          <div class=\"row\" *ngIf=\"user.telephone\">\n\n            <div class=\"col-3 type\">\n              Telephone Number\n            </div>\n\n            <div class=\"col-9 property\">\n              +94 {{user.telephone}}\n            </div>\n\n          </div>\n\n          <mat-divider *ngIf=\"user.mobile\"></mat-divider>\n\n          <div class=\"row\" *ngIf=\"user.mobile\">\n\n            <div class=\"col-3 type\">\n              Mobile Number\n            </div>\n\n            <div class=\"col-9 property\">\n              +94 {{user.mobile}}\n            </div>\n\n          </div>\n\n          <mat-divider *ngIf=\"user.address\"></mat-divider>\n\n          <div class=\"row\" *ngIf=\"user.address\">\n\n            <div class=\"col-3 type\">\n              Address\n            </div>\n\n            <div class=\"col-9 property\">\n              {{user.address}}\n            </div>\n\n          </div>\n        </mat-tab>\n\n        <div *ngIf=\"this.user.userType === 'seller'\">\n          <mat-tab label=\"Selling Items\">\n            <mat-grid-list cols=\"4\" rowHeight=\"450px\">\n              <mat-grid-tile *ngFor=\"let item of this.sellingItemsList\">\n                <mat-card style=\"margin: 10px; text-align: center\">\n                  <div *ngIf=\"!item.image\">\n                    <img mat-card-image src=\"https://www.jainsusa.com/images/store/landscape/not-available.jpg\" style=\"padding: 5px\">\n                  </div>\n\n                  <div *ngIf=\"item.image\">\n                    <!--<img mat-card-image [src]=\"'http://localhost:3000/images/' + item.image\" style=\"padding: 5px\">-->\n                    <img mat-card-image [src]=\"'images/' + item.image\" style=\"padding: 5px\">\n                  </div>\n                  <mat-card-header>\n                    <div style=\"width: 100%; margin-left: -15px\">\n                      <mat-card-title><strong>{{item.name}}</strong></mat-card-title>\n                      <mat-card-subtitle>{{item.category}}</mat-card-subtitle>\n                    </div>\n                  </mat-card-header>\n                  <mat-divider></mat-divider>\n                  <mat-card-content style=\"margin-top: 10px\">\n                    <p>Rs. {{item.price}}.00</p>\n                  </mat-card-content>\n                  <mat-card-actions>\n                    <button mat-button color=\"primary\" style=\"width: 100%;\" (click)=\"goToItem(item._id)\">Details</button>\n                  </mat-card-actions>\n                </mat-card>\n              </mat-grid-tile>\n            </mat-grid-list>\n          </mat-tab>\n\n          <mat-tab label=\"Selling Services\">\n            <mat-grid-list cols=\"4\" rowHeight=\"400px\">\n              <mat-grid-tile *ngFor=\"let service of this.sellingServicesList\">\n                <mat-card style=\"margin: 10px; text-align: center\">\n                  <div *ngIf=\"!service.image\">\n                    <img mat-card-image src=\"https://www.jainsusa.com/images/store/landscape/not-available.jpg\" style=\"padding: 5px\">\n                  </div>\n\n                  <div *ngIf=\"service.image\">\n                    <!--<img mat-card-image [src]=\"'http://localhost:3000/images/' + service.image\" style=\"padding: 5px\">-->\n                    <img mat-card-image [src]=\"'images/' + service.image\" style=\"padding: 5px\">\n                  </div>\n                  <mat-card-header>\n                    <div style=\"width: 100%; margin-left: -15px\">\n                      <mat-card-title><strong>{{service.name}}</strong></mat-card-title>\n                      <mat-card-subtitle>{{service.category}}</mat-card-subtitle>\n                    </div>\n                  </mat-card-header>\n                  <mat-divider></mat-divider>\n                  <mat-card-content style=\"margin-top: 10px\">\n                    <p>Rs. {{service.price}}.00</p>\n                  </mat-card-content>\n                  <mat-card-actions>\n                    <button mat-button color=\"primary\" style=\"width: 100%;\" (click)=\"goToService(service._id)\">Details</button>\n                  </mat-card-actions>\n                </mat-card>\n              </mat-grid-tile>\n            </mat-grid-list>\n          </mat-tab>\n        </div>\n      </mat-tab-group>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/view-user/view-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authenticate_auth_service__ = __webpack_require__("../../../../../src/app/services/authenticate/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_items_item_service__ = __webpack_require__("../../../../../src/app/services/items/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewUserComponent = /** @class */ (function () {
    function ViewUserComponent(router, authService, itemService, flashMessagesService) {
        this.router = router;
        this.authService = authService;
        this.itemService = itemService;
        this.flashMessagesService = flashMessagesService;
        this.sellingItemsList = [];
        this.sellingServicesList = [];
        this.routeArray = this.router.url.split("/");
        this.userId = this.routeArray[this.routeArray.length - 1];
        this.userType = this.routeArray[this.routeArray.length - 2];
        this.dataAvailable = false;
        this.loggedUserId = localStorage.getItem("user_id");
        this.loggedUserType = localStorage.getItem("user_type");
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userId === this.loggedUserId && this.userType === this.loggedUserType) {
            this.router.navigate(['/profile']);
        }
        else {
            this.authService.getUser(this.userId, this.userType)
                .subscribe(function (data) {
                if (data.success) {
                    _this.user = data.user;
                    if (_this.userType === 'seller') {
                        if (_this.user.avgRating) {
                            _this.user.avgRating = (Math.round(_this.user.avgRating * 100)) / 100;
                        }
                        _this.user.sellingItems.forEach(function (item) {
                            _this.itemService.getItem(item)
                                .subscribe(function (data) {
                                _this.sellingItemsList.push(data.item);
                            });
                        });
                        _this.user.sellingServices.forEach(function (service) {
                            _this.itemService.getService(service)
                                .subscribe(function (data) {
                                _this.sellingServicesList.push(data.service);
                            });
                        });
                    }
                }
                else {
                    _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                }
            });
        }
    };
    ViewUserComponent.prototype.goToItem = function (itemId) {
        this.router.navigate(['/items/' + itemId]);
    };
    ViewUserComponent.prototype.goToService = function (serviceId) {
        this.router.navigate(['/services/' + serviceId]);
    };
    ViewUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-user',
            template: __webpack_require__("../../../../../src/app/components/users/view-user/view-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/view-user/view-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_authenticate_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_items_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], ViewUserComponent);
    return ViewUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authenticate_auth_service__ = __webpack_require__("../../../../../src/app/services/authenticate/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService, flashMessagesService) {
        this.router = router;
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.flashMessagesService.show("You must be logged in", { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_authenticate_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatProgressSpinnerModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatProgressSpinnerModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/admin/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        // server: String = "http://localhost:3000/";
        this.server = "";
    }
    //get item stats
    AdminService.prototype.getItemStats = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.get(this.server + 'admin/getstats/items', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //get service stats
    AdminService.prototype.getServiceStats = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.get(this.server + 'admin/getstats/services', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //get seller stats
    AdminService.prototype.getSellerStats = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.get(this.server + 'admin/getstats/sellers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //get customer stats
    AdminService.prototype.getCustomerStats = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.get(this.server + 'admin/getstats/customers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //get top rated items. services and sellers
    AdminService.prototype.getTopRated = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.get(this.server + 'admin/getstats/toprated', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //get sign up and item/service adding times
    AdminService.prototype.getTimes = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.get(this.server + 'admin/getstats/times', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //get numbers
    AdminService.prototype.getNumbers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.get(this.server + 'admin/getstats/numbers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //get seller username
    AdminService.prototype.getSellerUsername = function (sellerId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.get(this.server + 'admin/getstats/seller/' + sellerId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "../../../../../src/app/services/authenticate/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // server: String = "http://localhost:3000/";
        this.server = "";
    }
    //register user
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        // console.log(user);
        return this.http.post(this.server + 'users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ;
    //edit user profile data
    AuthService.prototype.editUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        // console.log(user);
        return this.http.post(this.server + 'users/editProf', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //edit user account data
    AuthService.prototype.editUserAcc = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        // console.log(user);
        return this.http.post(this.server + 'users/editAcc', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //compare passwords
    AuthService.prototype.comparePasswords = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        // console.log(user);
        return this.http.post(this.server + 'users/comparePAss', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //authenticate a given user
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.post(this.server + 'users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ;
    //get the profile of a user
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append("Content-Type", "application/json");
        return this.http.get(this.server + 'users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //get a user from the database
    AuthService.prototype.getUser = function (userId, userType) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.get(this.server + 'users/' + userType + '/' + userId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //delete a user
    AuthService.prototype.deleteUser = function (userId, userType) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.delete(this.server + 'users/' + userType + '/' + userId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //store user data in local storage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user_id', user.id);
        localStorage.setItem('user_username', user.username);
        localStorage.setItem('user_type', user.userType);
        this.authToken = token;
        this.user = user;
    };
    ;
    //load the stored token
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    ;
    //check whether a user is logged in
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    //clear the local storage and logout a user
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    ;
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/image/image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
        // server: String = "http://localhost:3000/";
        this.server = "";
    }
    //uploading the image to the database
    ImageService.prototype.uploadImage = function (image) {
        var formData = new FormData();
        formData.append('image', image, image.name);
        return this.http.post(this.server + 'images/upload', formData)
            .map(function (res) { return res.json(); });
    };
    //update the user/item
    ImageService.prototype.updateInfo = function (type, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        // console.log(item);
        return this.http.post(this.server + 'images/info', { type: type, id: id }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //deleting an image from the database
    ImageService.prototype.deleteImage = function (filename, type, id) {
        var query = filename + "|" + type + "|" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.delete(this.server + 'images/' + query, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/items/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
        // server: String = "http://localhost:3000/";
        this.server = "";
    }
    //add a new item for sale
    ItemService.prototype.addItem = function (item) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        // console.log(item);
        return this.http.post(this.server + 'items/', item, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //add a new service for sale
    ItemService.prototype.addService = function (service) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        // console.log(service);
        return this.http.post(this.server + 'services/', service, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //get an item from the database
    ItemService.prototype.getItem = function (itemId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.get(this.server + 'items/' + itemId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //get an service from the database
    ItemService.prototype.getService = function (serviceId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.get(this.server + 'services/' + serviceId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //delete an item from the database
    ItemService.prototype.deleteItem = function (itemId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.delete(this.server + 'items/' + itemId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //delete a service from the database
    ItemService.prototype.deleteService = function (serviceId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.delete(this.server + 'services/' + serviceId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //edit an item in the database
    ItemService.prototype.editItem = function (itemId, item) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.put(this.server + 'items/' + itemId, item, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //edit a service in the database
    ItemService.prototype.editService = function (serviceId, service) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.put(this.server + 'services/' + serviceId, service, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //add an item to favorites
    ItemService.prototype.favItem = function (itemId, userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.post(this.server + 'items/' + itemId + '/favorite', { itemId: itemId, userId: userId }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //remove an item from favorites
    ItemService.prototype.unfavItem = function (itemId, userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.post(this.server + 'items/' + itemId + '/unfavorite', { itemId: itemId, userId: userId }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //add a service to favorites
    ItemService.prototype.favService = function (serviceId, userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.post(this.server + 'services/' + serviceId + '/favorite', { serviceId: serviceId, userId: userId }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //remove a service from favorites
    ItemService.prototype.unfavService = function (serviceId, userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.post(this.server + 'services/' + serviceId + '/unfavorite', { serviceId: serviceId, userId: userId }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "../../../../../src/app/services/notifications/notifications.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsService = /** @class */ (function () {
    function NotificationsService(http) {
        this.http = http;
        // server: String = "http://localhost:3000/";
        this.server = "";
    }
    //get notifications
    NotificationsService.prototype.getNotifications = function (userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.get(this.server + 'notifications/' + userId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NotificationsService.prototype.getUnreadNum = function (userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.get(this.server + 'notifications/unread/' + userId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //check notification
    NotificationsService.prototype.checkNotification = function (notId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.post(this.server + 'notifications/' + notId + '/check', {}, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //delete notification
    NotificationsService.prototype.deleteNotification = function (notId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.delete(this.server + 'notifications/' + notId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NotificationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/requests/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
        // server: String = "http://localhost:3000/";
        this.server = "";
    }
    //new request
    RequestService.prototype.newRequest = function (newReq) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.post(this.server + "requests/", newReq, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //cancel request
    RequestService.prototype.cancelRequest = function (query) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.delete(this.server + "requests/" + query, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //get requests by seller
    RequestService.prototype.getRequstsBySeller = function (sellerId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.get(this.server + "requests/seller/" + sellerId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //accept request
    RequestService.prototype.acceptRequest = function (reqId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.post(this.server + "requests/" + reqId + "/accept", {}, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //decline request
    RequestService.prototype.declineRequest = function (reqId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.post(this.server + "requests/" + reqId + "/decline", {}, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    RequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "../../../../../src/app/services/reviews/review.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewService = /** @class */ (function () {
    function ReviewService(http) {
        this.http = http;
        // server: String = "http://localhost:3000/";
        this.server = "";
    }
    //add a review
    ReviewService.prototype.addReview = function (itemId, itemType, review) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.post(this.server + itemType + 's/' + itemId + '/reviews/', review, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //get a review from the database
    ReviewService.prototype.getReview = function (reviewId, itemId, itemType) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.get(this.server + itemType + 's/' + itemId + '/reviews/' + reviewId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //delete a review
    ReviewService.prototype.deleteReview = function (reviewId, itemId, itemType) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.delete(this.server + itemType + 's/' + itemId + '/reviews/' + reviewId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //edit a review
    ReviewService.prototype.editReview = function (reviewId, itemId, itemType, editedReview) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.put(this.server + itemType + 's/' + itemId + '/reviews/' + reviewId, editedReview, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ReviewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ReviewService);
    return ReviewService;
}());



/***/ }),

/***/ "../../../../../src/app/services/search/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        // server: String = "http://localhost:3000/";
        this.server = "";
    }
    //quick search for an item
    SearchService.prototype.search = function (query) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.server + 'search/' + query, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined || user.confPass == undefined || user.userType == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService.prototype.validateUsername = function (username) {
        var re = /^[-\w\.\$@\*\!]{1,30}$/;
        return re.test(String(username));
    };
    ValidateService.prototype.validatePassword = function (password, confPass) {
        if (password !== confPass) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatePhone = function (number) {
        var re = /^([0-9]){9}$/;
        return re.test(String(number));
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username == undefined || user.password == undefined || user.userType == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateItem = function (item) {
        if (item.name == undefined || item.price == undefined || item.isAvailable == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateService = function (service) {
        if (service.name == undefined || service.price == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateItemSeller = function (sellerID) {
        if (!sellerID) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatePrice = function (price) {
        var re = /^\d+$/;
        return re.test(String(price));
    };
    ValidateService.prototype.validateTime = function (time) {
        var re = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        return re.test(String(time));
    };
    ValidateService.prototype.validateTimeGap = function (start, end) {
        var startNum = Number(start.split(":").join(""));
        var endNum = Number(end.split(":").join(""));
        if (endNum < startNum) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatePriceRange = function (lowerPrice, upperPrice) {
        if (lowerPrice > upperPrice) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/assets/WallpaperStudio10-73456.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "WallpaperStudio10-73456.51cec4e8262429128611.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map