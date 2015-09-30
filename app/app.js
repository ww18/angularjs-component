

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.Market',
  'myApp.myProfile',
  'myApp.version',
  'service.data'
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
