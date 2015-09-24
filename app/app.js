

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
            templateUrl: 'market/market.html',
            controller: 'market'
          })
          .when('/myProfile', {
            templateUrl: 'my-profile/my-profile.html',
            controller: 'myProfile'
          })
          .otherwise({redirectTo: '/market'});
}]);
