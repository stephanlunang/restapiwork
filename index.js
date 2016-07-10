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
var roott = "http://jsonplaceholder.typicode.com/posts"
var roottoo = "http://jsonplaceholder.typicode.com/posts/1"


app.controller("myCtrl", function($scope, $http) {
    $http({
        method : "GET",
        url : roottoo
    }).then(function(response){
        console.log(response.data.userId);
        $scope.myData = response.data.userId;
    });
});


app.controller("myPoster", function($scope, $http){
    $http({
        method : "POST",
        url : roott,
        data : {
            userId : "Blacklister",
            country : "Merica",
            funnsies : "Guns"
        }
    }).then(function(response){
        console.log("woot!");
        console.log(response);
    })
})