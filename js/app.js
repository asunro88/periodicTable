var app = angular.module('elementsApp',["ngRoute"]);


app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/homeView.html',
			controller: 'indexController'
		})

		.when('/table', {
			templateUrl: 'views/table.html',
			controller: 'tableController'
		})	

		.when("/decades", {
			templateUrl: "views/bandsDecade.html",
			controller: "bandsController"
		})

		.when('/bands/name/:name', {
			templateUrl: 'views/bandsName.html',
			controller: 'nameController'
		})

		.otherwise({
			redirectTo: '/'
		})
}]);

//Controlador Pagina Principal
app.controller('indexController',['$scope','$http', function($scope,$http) {
	$scope.appTittle = 'Periodic Table'
}]);

//Controlador para elementos
app.controller('tableController',['$scope','$http', function($scope,$http){ 
    $http.get("js/elements.json").success(function(data) {
        $scope.elements = data;
    });
}]);


//Controlador para bandas por nombre
app.controller('nameController',['$scope','$http', function($scope,$http, $routeParams){
	$scope.name = $routeParams.name;  
    $http.get("js/elements.json").success(function(data) {
        $scope.bands = data;
    });
}]);


















/*app.directive('parallax', [function () {
	return {
		templateUrl: 'views/parallax.html'
	};
}])*/