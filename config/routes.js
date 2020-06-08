/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/index' },
  'GET /pages/contact': { view: 'pages/contact' },

  //DashboardController
  'GET /pages/vegRestaurants': 'DashboardController.vegRestaurants',
  'GET /pages/nonvegRestaurants': 'DashboardController.nonvegRestaurants',
  'post /pages/restaurantDetails/:rName': 'DashboardController.restaurantDetails',
  'post /pages/availableItems/:rName': 'DashboardController.availableItems',
  '/logout': 'DashboardController.logout',
  
  //RestaurantController
  'GET /pages/restaurantRegister': 'RestaurantController.restaurantRegister',
  'post /rCreate': 'RestaurantController.rCreate',
  'GET /pages/restaurantLogin': 'RestaurantController.restaurantLogin',
  'post /rLoginCheck': 'RestaurantController.rLoginCheck',

  //CustomerController
  'GET /pages/customerRegister': 'CustomerController.customerRegister',
  'post /cCreate': 'CustomerController.cCreate',
  'GET /pages/customerLogin': 'CustomerController.customerLogin',
  'post /cLoginCheck': 'CustomerController.cLoginCheck',

  //ItemsController
  'GET /pages/addItems': 'ItemsController.addItems',
  'post /iAdd': 'ItemsController.iAdd',
  'post /aiDelete/:id': 'ItemsController.aiDelete',
  
  //CartController
  'post /iAddToCart/:id': 'CartController.iAddToCart',
  'GET /pages/shopping-cart': 'CartController.shoppingCart',
  'post /iDelete/:id': 'CartController.iDelete',

  //OrdersController
  'post /pages/checkOut/:custName': 'OrdersController.checkOut',
  'post /createOrder': 'OrdersController.createOrder',
  'GET /pages/viewOrders': 'OrdersController.viewOrders',
  'post /oDelivered/:id': 'OrdersController.oDelivered',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
