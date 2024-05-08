const express = require ('express');
const locationController = require ('../Controller/location');
const mealtypeController = require ('../Controller/mealtype');
const userController = require ('../Controller/user');
const restaurantController = require ('../Controller/restaurant');
const menuController = require ('../Controller/menu');

const route = express.Router();

route.get('/location', locationController.getLocation);
route.get('/menu1', menuController.getMenu);
route.get('/menu/:resId', menuController.getMenuByRestaurantId);
route.get('/restaurant', restaurantController.getRestaurant);
route.get('/rest/:_id', restaurantController.getRestaurantById);
route.get('/restaurants/:locId', restaurantController.getRestaurantByLocationId);
route.get('/mealtype', mealtypeController.getMealType);
route.get('/mealtype1/:id', restaurantController.getMealTypeByCityName);
route.get('/meal/:mealId', mealtypeController.getMealtypeById);
route.post('/signup', userController.postSignUp);
route.post('/login', userController.postLogin);

route.post('/filter', restaurantController.filteredRestaurant);

module.exports = route