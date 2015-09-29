

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.market',
  'myApp.myProfile',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
      $routeProvider
          .when('/market', {
            templateUrl: 'Market/Market.html',
            controller: 'Market'
          })
          .when('/myProfile', {
            templateUrl: 'my-profile/my-profile.html',
            controller: 'myProfile'
          })
          .otherwise({redirectTo: '/market'});
}]);
