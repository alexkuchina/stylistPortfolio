var stylistApp = angular.module("stylistApp", ['ngRoute']);

// var app= angular.module('stylistApp',['ngRoute','stylistApp.myctrl']);

stylistApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'template/home.html',
		})
		.when('/makeup', {
			templateUrl: 'template/makeup.html',
			controller: 'makeupCtrl'
		})
		.when('/hair', {
			templateUrl: 'template/hair.html',
			controller: 'hairCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);






































