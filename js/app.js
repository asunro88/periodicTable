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

		.when('/tabla', {
			templateUrl: 'views/tabla.html',
			controller: 'tablaController'
		})

		.when('/elements', {
			templateUrl: 'views/elements.html',
			controller: 'elementsController'
		})	

		.when("/compounds", {
			templateUrl: "views/compounds.html",
			controller: "compController"
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

//Controlador para tabla
app.controller('tablaController',['$scope','$http', function($scope,$http){ 
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


//Controlador para elementos por simbolo
app.controller('smallController',['$scope','$http', function($scope,$http, $routeParams){
	$scope.small = $routeParams.small;  
    $http.get("js/compounds.json").success(function(data) {
        $scope.compounds = data;
    });
}]);


















/*app.directive('parallax', [function () {
	return {
		templateUrl: 'views/parallax.html'
	};
}])*/