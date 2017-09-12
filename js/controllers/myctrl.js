stylistApp.controller('makeupCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.styleData = data
	})
}]);

stylistApp.controller('hairCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.styleData = data
	})
}]);

// angular.module('stylistApp.myctrl', ['$scope', '$http', function($scope, $http) {
// 	$http.get('js/data.json').success(function(data) {
// 		$scope.styleData = data
// 	})
// }]);