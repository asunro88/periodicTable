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

		.when('/elements', {
			templateUrl: 'views/elements.html',
			controller: 'elementsController'
		})	

		.when("/compounds", {
			templateUrl: "views/compounds.html",
			controller: "compController"
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

//Controlador para tabla
app.controller('tableController',['$scope','$http', function($scope,$http){ 
    $http.get("js/elements.json").success(function(data) {
        $scope.elements = data;
    });
}]);

//Controlador para elementos
app.controller('elementsController',['$scope','$http', function($scope,$http){ 
    $http.get("js/elements.json").success(function(data) {
        $scope.elements = data;
    });
}]);

//Controlador para compuestos
app.controller('compController',['$scope','$http', function($scope,$http){ 
    $http.get("js/compounds.json").success(function(data) {
        $scope.compounds = data;
    });
}]);


//Controlador para elementos por nombre
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