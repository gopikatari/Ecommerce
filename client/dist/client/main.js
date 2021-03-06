(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/oCP":
/*!*****************************************!*\
  !*** ./src/app/effects/root.effects.ts ***!
  \*****************************************/
/*! exports provided: RootEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootEffects", function() { return RootEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");



class RootEffects {
    constructor(actions$) {
        this.actions$ = actions$;
    }
}
RootEffects.ɵfac = function RootEffects_Factory(t) { return new (t || RootEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"])); };
RootEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RootEffects, factory: RootEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspace\Angular_Online_Evening_2020\brains-kart-angular\client\src\main.ts */"zUnb");


/***/ }),

/***/ "38Tt":
/*!***********************************************!*\
  !*** ./src/app/users/actions/user.actions.ts ***!
  \***********************************************/
/*! exports provided: registerUser, registerUserSuccess, registerUserFailure, loginUser, loginUserSuccess, loginUserFailure, updateAddress, updateAddressSuccess, updateAddressFailure, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUserSuccess", function() { return registerUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUserFailure", function() { return registerUserFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUserSuccess", function() { return loginUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUserFailure", function() { return loginUserFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAddress", function() { return updateAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAddressSuccess", function() { return updateAddressSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAddressFailure", function() { return updateAddressFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// Register a User
const registerUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Register User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const registerUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Register User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const registerUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Register User Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Login a User
const loginUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Login User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Login User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Login User Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Update Address
const updateAddress = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Update Address', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateAddressSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Update Address Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateAddressFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Update Address Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Logout a User
const logoutUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Logout User');


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
    production: false,
    apiURL: '',
    stripe_publishable_key: 'pk_test_51Gp6XPGiODtWn5F0vtxvFvIwcU5cOQfH2ltufOmqQBXYEw5SGaWrg9uBP90Kl2CJaGFIrpFP79jQvDwM43vfjFuJ0097fvqDzq'
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

/***/ "I7aM":
/*!******************************************************!*\
  !*** ./src/app/products/reducers/product.reducer.ts ***!
  \******************************************************/
/*! exports provided: productFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productFeatureKey", function() { return productFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_product_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/product.actions */ "lzi2");


const productFeatureKey = 'product';
const initialState = {
    loading: false,
    products: [],
    product: {
        _id: '',
        name: '',
        brand: '',
        image: '',
        price: 0,
        qty: 0,
        category: '',
        description: '',
        usage: ''
    },
    errorMessage: '',
    result: ''
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, 
// Upload a product
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["uploadProduct"], (state, { product }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["uploadProductSuccess"], (state, { result, product }) => {
    return Object.assign(Object.assign({}, state), { loading: false, result: result });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["uploadProductFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Get Men's Collection
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getMenCollection"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getMenCollectionSuccess"], (state, { products }) => {
    return Object.assign(Object.assign({}, state), { loading: false, products: products });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getMenCollectionFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Get Women's Collection
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getWomenCollection"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getWomenCollectionSuccess"], (state, { products }) => {
    return Object.assign(Object.assign({}, state), { loading: false, products: products });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getWomenCollectionFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Get Kid's Collection
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getKidsCollection"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getKidsCollectionSuccess"], (state, { products }) => {
    return Object.assign(Object.assign({}, state), { loading: false, products: products });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getKidsCollectionFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Get a Single Product
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getProduct"], (state, { productId }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getProductSuccess"], (state, { product }) => {
    return Object.assign(Object.assign({}, state), { loading: false, product: product });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getProductFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}));


/***/ }),

/***/ "IGZg":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _products_reducers_product_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products/reducers/product.reducer */ "I7aM");
/* harmony import */ var _orders_reducers_order_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders/reducers/order.reducer */ "RVPP");
/* harmony import */ var _users_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/reducers/user.reducer */ "x2SL");




const reducers = {
    [_products_reducers_product_reducer__WEBPACK_IMPORTED_MODULE_1__["productFeatureKey"]]: _products_reducers_product_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    [_orders_reducers_order_reducer__WEBPACK_IMPORTED_MODULE_2__["orderFeatureKey"]]: _orders_reducers_order_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    [_users_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__["userFeatureKey"]]: _users_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "IQPI":
/*!*******************************************************!*\
  !*** ./src/app/root/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _users_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../users/services/user.service */ "zLM3");



class AuthInterceptor {
    constructor(userService) {
        this.userService = userService;
    }
    intercept(request, next) {
        let tokenizedRequest = request.clone({
            setHeaders: {
                'Authorization': `Bearer ${this.userService.getToken()}`
            }
        });
        return next.handle(tokenizedRequest);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_users_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _users_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "JKHU":
/*!***********************************************!*\
  !*** ./src/app/users/effects/user.effects.ts ***!
  \***********************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/user.actions */ "38Tt");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "zLM3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










class UserEffects {
    constructor(actions$, userService, router) {
        this.actions$ = actions$;
        this.userService = userService;
        this.router = router;
        // Registration is success -> redirect to Login Page
        this.registerUserSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["registerUserSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.router.navigate(['/users/login'])));
        // Login is success -> redirect to home Page
        this.loginUserSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["loginUserSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.router.navigate(['/'])));
    }
    registerUser() {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["registerUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.userService.registerUser(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(({ result }) => _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["registerUserSuccess"]({ result })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["registerUserFailure"]({ error }))))));
    }
    loginUser() {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["loginUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.userService.loginUser(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(({ result, token, user }) => _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["loginUserSuccess"]({ result, token, user })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["loginUserFailure"]({ error }))))));
    }
    updateAddress() {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["updateAddress"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.userService.updateAddress(action.address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(({ result, user }) => _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["updateAddressSuccess"]({ result, user })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["updateAddressFailure"]({ error }))))));
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
UserEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "registerUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "loginUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "updateAddress", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], UserEffects.prototype, "registerUserSuccess$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], UserEffects.prototype, "loginUserSuccess$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { registerUser: [], loginUser: [], updateAddress: [], registerUserSuccess$: [], loginUserSuccess$: [] }); })();


/***/ }),

/***/ "QiYn":
/*!**************************************************!*\
  !*** ./src/app/orders/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class OrderService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    sendCartItems(cartItems) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/order/send-cart`;
        return this.httpClient.post(dataURL, cartItems).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // get all the placed orders list
    getAllOrders() {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/order/all`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client Error
            errorMessage = `Error : ${error.error.message}`;
        }
        else {
            // server error
            errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "RVPP":
/*!**************************************************!*\
  !*** ./src/app/orders/reducers/order.reducer.ts ***!
  \**************************************************/
/*! exports provided: orderFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderFeatureKey", function() { return orderFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_order_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/order.actions */ "abVj");


const orderFeatureKey = 'order';
const initialState = {
    cartItems: [],
    loading: false,
    errorMessage: '',
    orders: []
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, 
// Add to Cart
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["addToCart"], (state, { product, selectedQty }) => {
    let selectedProduct = Object.assign(Object.assign({}, product), { qty: selectedQty });
    let existingProduct = state.cartItems.find((cartItem) => cartItem._id === product._id);
    if (existingProduct) {
        return state;
    }
    return Object.assign(Object.assign({}, state), { cartItems: [...state.cartItems, selectedProduct] });
}), 
// Increase Cart Item Qty
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["incrCartItemQty"], (state, { product }) => {
    let updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem._id === product._id) {
            return Object.assign(Object.assign({}, cartItem), { qty: cartItem.qty + 1 });
        }
        return cartItem;
    });
    return Object.assign(Object.assign({}, state), { cartItems: [...updatedCartItems] });
}), 
// Decrease Cart Item Qty
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["decrCartItemQty"], (state, { product }) => {
    let updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem._id === product._id) {
            return Object.assign(Object.assign({}, cartItem), { qty: (cartItem.qty - 1 > 0) ? cartItem.qty - 1 : 1 });
        }
        return cartItem;
    });
    return Object.assign(Object.assign({}, state), { cartItems: [...updatedCartItems] });
}), 
// Delete a Cart Item
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["deleteCartItem"], (state, { product }) => {
    let remainingCartItems = state.cartItems.filter((cartItem) => {
        return cartItem._id !== product._id;
    });
    return Object.assign(Object.assign({}, state), { cartItems: [...remainingCartItems] });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["sendCartItems"], (state, { cartItems }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["sendCartItemsSuccess"], (state, { msg }) => {
    return Object.assign(Object.assign({}, state), { loading: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["sendCartItemsFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// get all the orders
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["getAllOrders"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["getAllOrdersSuccess"], (state, { orders }) => {
    return Object.assign(Object.assign({}, state), { loading: false, orders: orders });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["getAllOrdersFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}));


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
/* harmony import */ var _root_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root/components/navbar/navbar.component */ "hlyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_root_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _root_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/components/navbar/navbar.component */ "hlyh");
/* harmony import */ var _root_components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./root/components/home/home.component */ "vg3d");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers */ "IGZg");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _effects_root_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./effects/root.effects */ "/oCP");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _products_effects_product_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products/effects/product.effects */ "Za8q");
/* harmony import */ var _orders_effects_order_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./orders/effects/order.effects */ "oG+y");
/* harmony import */ var _users_effects_user_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./users/effects/user.effects */ "JKHU");
/* harmony import */ var _root_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./root/interceptors/auth.interceptor */ "IQPI");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
            useClass: _root_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_8__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_8__["metaReducers"] }),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument() : [],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forRoot([_effects_root_effects__WEBPACK_IMPORTED_MODULE_12__["RootEffects"], _products_effects_product_effects__WEBPACK_IMPORTED_MODULE_14__["ProductEffects"], _orders_effects_order_effects__WEBPACK_IMPORTED_MODULE_15__["OrderEffects"], _users_effects_user_effects__WEBPACK_IMPORTED_MODULE_16__["UserEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _root_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _root_components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _root_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _root_components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_8__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_8__["metaReducers"] }),
                    !_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument() : [],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forRoot([_effects_root_effects__WEBPACK_IMPORTED_MODULE_12__["RootEffects"], _products_effects_product_effects__WEBPACK_IMPORTED_MODULE_14__["ProductEffects"], _orders_effects_order_effects__WEBPACK_IMPORTED_MODULE_15__["OrderEffects"], _users_effects_user_effects__WEBPACK_IMPORTED_MODULE_16__["UserEffects"]])
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
                        useClass: _root_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Za8q":
/*!*****************************************************!*\
  !*** ./src/app/products/effects/product.effects.ts ***!
  \*****************************************************/
/*! exports provided: ProductEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEffects", function() { return ProductEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _actions_product_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/product.actions */ "lzi2");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/product.service */ "czkf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










class ProductEffects {
    constructor(actions$, productService, router) {
        this.actions$ = actions$;
        this.productService = productService;
        this.router = router;
        // if upload is success, redirect to home page
        this.uploadProductSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["uploadProductSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.router.navigate(['/'])));
    }
    uploadProduct() {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["uploadProduct"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.productService.uploadProduct(action.product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(({ result, product }) => _actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["uploadProductSuccess"]({ result, product })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["uploadProductFailure"]({ error }))))));
    }
    getMenCollection() {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getMenCollection"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => this.productService.getMenCollection().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((products) => _actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getMenCollectionSuccess"]({ products })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getMenCollectionFailure"]({ error }))))));
    }
    getWomenCollection() {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getWomenCollection"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => this.productService.getWomenCollection().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((products) => _actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getWomenCollectionSuccess"]({ products })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getWomenCollectionFailure"]({ error }))))));
    }
    getKidsCollection() {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getKidsCollection"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => this.productService.getKidsCollection().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((products) => _actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getKidsCollectionSuccess"]({ products })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getKidsCollectionFailure"]({ error }))))));
    }
    getProduct() {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getProduct"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => this.productService.getProduct(action.productId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((product) => _actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getProductSuccess"]({ product })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getProductFailure"]({ error }))))));
    }
}
ProductEffects.ɵfac = function ProductEffects_Factory(t) { return new (t || ProductEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
ProductEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductEffects, factory: ProductEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ProductEffects.prototype, "uploadProduct", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ProductEffects.prototype, "getMenCollection", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ProductEffects.prototype, "getWomenCollection", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ProductEffects.prototype, "getKidsCollection", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ProductEffects.prototype, "getProduct", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], ProductEffects.prototype, "uploadProductSuccess$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { uploadProduct: [], getMenCollection: [], getWomenCollection: [], getKidsCollection: [], getProduct: [], uploadProductSuccess$: [] }); })();


/***/ }),

/***/ "abVj":
/*!*************************************************!*\
  !*** ./src/app/orders/actions/order.actions.ts ***!
  \*************************************************/
/*! exports provided: addToCart, incrCartItemQty, decrCartItemQty, deleteCartItem, sendCartItems, sendCartItemsSuccess, sendCartItemsFailure, getAllOrders, getAllOrdersSuccess, getAllOrdersFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrCartItemQty", function() { return incrCartItemQty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrCartItemQty", function() { return decrCartItemQty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCartItem", function() { return deleteCartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCartItems", function() { return sendCartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCartItemsSuccess", function() { return sendCartItemsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCartItemsFailure", function() { return sendCartItemsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllOrders", function() { return getAllOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllOrdersSuccess", function() { return getAllOrdersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllOrdersFailure", function() { return getAllOrdersFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// Add to Cart
const addToCart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Add to Cart', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Increase the Cart Item Qty
const incrCartItemQty = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Increase Cart Item Qty', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Decrease the Cart Item Qty
const decrCartItemQty = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Decrease Cart Item Qty', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// delete an item from the cart
const deleteCartItem = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Delete Cart Item', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// send cart Items to express server
const sendCartItems = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Send Cart Items', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const sendCartItemsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Send Cart Items Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const sendCartItemsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Send Cart Items Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
//Get All Orders
const getAllOrders = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Get All Orders');
const getAllOrdersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Get All Orders Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getAllOrdersFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Get All Orders Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "czkf":
/*!******************************************************!*\
  !*** ./src/app/products/services/product.service.ts ***!
  \******************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // upload product
    uploadProduct(product) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/product/upload`;
        return this.httpClient.post(dataURL, product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // get Men's Collection
    getMenCollection() {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/product/men`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // get Women's Collection
    getWomenCollection() {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/product/women`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // get Kids's Collection
    getKidsCollection() {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/product/kids`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // get a single Product
    getProduct(productId) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/product/${productId}`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client Error
            errorMessage = `Error : ${error.error.message}`;
        }
        else {
            // server error
            errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "hlyh":
/*!************************************************************!*\
  !*** ./src/app/root/components/navbar/navbar.component.ts ***!
  \************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _orders_reducers_order_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../orders/reducers/order.reducer */ "RVPP");
/* harmony import */ var _users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../users/actions/user.actions */ "38Tt");
/* harmony import */ var _users_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../users/services/user.service */ "zLM3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function NavbarComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.getUser().avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getUser().name, " ");
} }
function NavbarComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_26_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.clickLogOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(store, userService, router) {
        this.store = store;
        this.userService = userService;
        this.router = router;
        this.cartItems = [];
    }
    ngOnInit() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_orders_reducers_order_reducer__WEBPACK_IMPORTED_MODULE_2__["orderFeatureKey"])).subscribe((state) => {
            this.cartItems = state.cartItems;
        });
    }
    isAdmin() {
        return this.userService.isAdminUser();
    }
    getUser() {
        return this.userService.getUserInfo();
    }
    isLoggedIn() {
        return this.userService.isLoggedIn();
    }
    clickLogOut() {
        // dispatch logout action
        this.store.dispatch(_users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["logoutUser"]());
        // redirect to home Page
        this.router.navigate(['/']);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 29, vars: 6, consts: [[1, "navbar", "navbar-dark", "bg-dark", "navbar-expand-sm"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["src", "../../../../assets/img/brand.PNG", "alt", "", "width", "120", "height", "30"], [1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "/products/men", 1, "nav-link"], ["routerLink", "/products/women", 1, "nav-link"], ["routerLink", "/products/kids", 1, "nav-link"], ["class", "nav-item", 4, "ngIf"], ["routerLink", "/orders/cart", 1, "nav-link"], [1, "fa", "fa-shopping-cart"], [1, "badge", "badge-success", "badge-pill"], ["routerLink", "/orders/order-list", 1, "nav-link"], [1, "navbar-nav", "ml-auto"], ["routerLink", "/products/upload", 1, "nav-link"], ["routerLink", "/users/profile", 1, "nav-link"], ["alt", "", "width", "25", "height", "25", 1, "rounded-circle", 3, "src"], ["routerLink", "/users/register", 1, "nav-link", 3, "click"], [1, "fa", "fa-sign-out-alt", "text-muted"], ["routerLink", "/users/login", 1, "nav-link"], [1, "fa", "fa-sign-in-alt", "text-muted"], ["routerLink", "/users/register", 1, "nav-link"], [1, "fa", "fa-user-cog", "text-muted"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Men's Wear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Women's Wear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Kid's Wear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_li_15_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NavbarComponent_li_25_Template, 4, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NavbarComponent_li_26_Template, 4, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NavbarComponent_li_27_Template, 4, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, NavbarComponent_li_28_Template, 4, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn() && ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cartItems.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _users_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "lzi2":
/*!*****************************************************!*\
  !*** ./src/app/products/actions/product.actions.ts ***!
  \*****************************************************/
/*! exports provided: uploadProduct, uploadProductSuccess, uploadProductFailure, getMenCollection, getMenCollectionSuccess, getMenCollectionFailure, getWomenCollection, getWomenCollectionSuccess, getWomenCollectionFailure, getKidsCollection, getKidsCollectionSuccess, getKidsCollectionFailure, getProduct, getProductSuccess, getProductFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadProduct", function() { return uploadProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadProductSuccess", function() { return uploadProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadProductFailure", function() { return uploadProductFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenCollection", function() { return getMenCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenCollectionSuccess", function() { return getMenCollectionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenCollectionFailure", function() { return getMenCollectionFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWomenCollection", function() { return getWomenCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWomenCollectionSuccess", function() { return getWomenCollectionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWomenCollectionFailure", function() { return getWomenCollectionFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKidsCollection", function() { return getKidsCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKidsCollectionSuccess", function() { return getKidsCollectionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKidsCollectionFailure", function() { return getKidsCollectionFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSuccess", function() { return getProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductFailure", function() { return getProductFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// Upload a Product
const uploadProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] Upload Product', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const uploadProductSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] Upload Product Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const uploadProductFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] Upload Product Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Get Men's Collection
const getMenCollection = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Product] get Men's Collection");
const getMenCollectionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Product] Get Men's Collection Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getMenCollectionFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Product] Get Men's Collection Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Get Women's Collection
const getWomenCollection = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Product] get Women's Collection");
const getWomenCollectionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Product] Get Women's Collection Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getWomenCollectionFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Product] Get Women's Collection Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Get Kids Collection
const getKidsCollection = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Product] get Kids Collection");
const getKidsCollectionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Product] Get Kids Collection Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getKidsCollectionFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Product] Get Kids Collection Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Get Single Product
const getProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Product] get Product Collection", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getProductSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Product] Get Product Collection Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getProductFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Product] Get Product Collection Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "oG+y":
/*!*************************************************!*\
  !*** ./src/app/orders/effects/order.effects.ts ***!
  \*************************************************/
/*! exports provided: OrderEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEffects", function() { return OrderEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _actions_order_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/order.actions */ "abVj");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/order.service */ "QiYn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










class OrderEffects {
    constructor(actions$, orderService, router) {
        this.actions$ = actions$;
        this.orderService = orderService;
        this.router = router;
        // if send Cart Items is success, redirect to checkout page
        this.sendCartItemsSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["sendCartItemsSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.router.navigate(['/orders/checkout'])));
    }
    sendCartItems() {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["sendCartItems"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.orderService.sendCartItems(action.cartItems).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(({ msg }) => _actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["sendCartItemsSuccess"]({ msg })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["sendCartItemsFailure"]({ error }))))));
    }
    getAllOrders() {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["getAllOrders"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => this.orderService.getAllOrders().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(({ orders }) => _actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["getAllOrdersSuccess"]({ orders })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["getAllOrdersFailure"]({ error }))))));
    }
}
OrderEffects.ɵfac = function OrderEffects_Factory(t) { return new (t || OrderEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
OrderEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderEffects, factory: OrderEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], OrderEffects.prototype, "sendCartItems", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], OrderEffects.prototype, "getAllOrders", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], OrderEffects.prototype, "sendCartItemsSuccess$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { sendCartItems: [], getAllOrders: [], sendCartItemsSuccess$: [] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _root_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root/components/home/home.component */ "vg3d");





const routes = [
    { path: '', component: _root_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'products',
        loadChildren: () => __webpack_require__.e(/*! import() | products-products-module */ "products-products-module").then(__webpack_require__.bind(null, /*! ./products/products.module */ "WLUK")).then(m => m.ProductsModule) },
    { path: 'orders',
        loadChildren: () => __webpack_require__.e(/*! import() | orders-orders-module */ "orders-orders-module").then(__webpack_require__.bind(null, /*! ./orders/orders.module */ "h9W5")).then(m => m.OrdersModule) },
    { path: 'users',
        loadChildren: () => __webpack_require__.e(/*! import() | users-users-module */ "users-users-module").then(__webpack_require__.bind(null, /*! ./users/users.module */ "zrcO")).then(m => m.UsersModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vg3d":
/*!********************************************************!*\
  !*** ./src/app/root/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 0, consts: [[1, "landing-page"], [1, "wrapper"], [1, "text-brains", "d-flex", "flex-column", "text-center", "align-items-center", "justify-content-center", "h-100"], [1, "display-3", "animated", "zoomIn"], [1, "lead", "px-3", "animated", "zoomInLeft"], [1, "btn", "btn-brains", "btn-sm", "animated", "zoomInRight"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "An Online Shopping App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam assumenda autem debitis distinctio dolorum enim est eum exercitationem, expedita itaque, magnam nobis pariatur perferendis quasi ratione repellat sed tenetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "x2SL":
/*!************************************************!*\
  !*** ./src/app/users/reducers/user.reducer.ts ***!
  \************************************************/
/*! exports provided: userFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFeatureKey", function() { return userFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user.actions */ "38Tt");


const userFeatureKey = 'user';
const initialState = {
    loading: false,
    errorMessage: '',
    user: {},
    token: '',
    isAuthenticated: false
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, 
// Register a User
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["registerUser"], (state, { user }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["registerUserSuccess"], (state, { result }) => {
    return Object.assign(Object.assign({}, state), { loading: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["registerUserFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// login User
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["loginUser"], (state, { user }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["loginUserSuccess"], (state, { result, token, user }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    return Object.assign(Object.assign({}, state), { loading: false, user: user, token: token, isAuthenticated: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["loginUserFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// update address
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["updateAddress"], (state, { address }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["updateAddressSuccess"], (state, { result, user }) => {
    localStorage.setItem('user', JSON.stringify(user));
    return Object.assign(Object.assign({}, state), { loading: false, user: user });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["updateAddressFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["logoutUser"], (state) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return Object.assign(Object.assign({}, state), { user: {}, token: '', isAuthenticated: false });
}));


/***/ }),

/***/ "zLM3":
/*!************************************************!*\
  !*** ./src/app/users/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // register a user
    registerUser(user) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/user/register`;
        return this.httpClient.post(dataURL, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // login a user
    loginUser(user) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/user/login`;
        return this.httpClient.post(dataURL, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // update / create  an address
    updateAddress(address) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/user/address`;
        return this.httpClient.post(dataURL, address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client Error
            errorMessage = `Error : ${error.error.message}`;
        }
        else {
            // server error
            errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
    // isLoggedIn
    isLoggedIn() {
        return !!localStorage.getItem('token');
    }
    // get token
    getToken() {
        if (localStorage.getItem('token')) {
            return localStorage.getItem('token');
        }
        else {
            return "";
        }
    }
    // get UserInfo
    getUserInfo() {
        return JSON.parse(localStorage.getItem('user'));
    }
    // isAdmin
    isAdminUser() {
        let user = this.getUserInfo();
        if (user) {
            return user.isAdmin;
        }
        else {
            return false;
        }
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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