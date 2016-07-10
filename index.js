/*function Hello($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            $scope.greeting = data;
        });
}

function Sample($scope, $http){
	$http.get('http://www.w3schools.com/angular/customers.php').
	success(function(data){
		$scope.myData = data.records;
	});
}*/



var app = angular.module('myApp', []);
//var root = "http://www.w3schools.com/angular/welcome.htm"
var root = "http://jsonplaceholder.typicode.com/posts/1"

app.controller("myCtrl", function($scope, $http) {
    $http({
        method : "GET",
        url : root
    }).then(function(response){
        console.log(response.data.userId);
        $scope.myData = response.data.userId;
    });
});
