/// <reference path="../../typings/tsd.d.ts" />

let app = angular.module('quiz-app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'partials/main',
			controller  : 'mainCtrl' 
		})
		.when('/users', {
			templateUrl : 'partials/users',
			controller  : 'usersCtrl' 
		})
		.when('/user', {
			templateUrl : 'partials/user',
			controller  : 'userCtrl' 
		});
});

app.controller('mainCtrl', function($scope, $http) {
	$scope.title = "Wel Come";
});

app.controller('usersCtrl', function($scope) {
	$scope.title = "Users";
});

app.controller('userCtrl', function($scope) {
	$scope.title = "User";
});