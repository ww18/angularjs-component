

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.Market',
  'myApp.myProfile',
  'myApp.version',
  'service.data',
  'myApp.view1',
  'myApp.view2'
]).
config(['$routeProvider', function($routeProvider) {
      $routeProvider
          .when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
          })
          .when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
          })
          .otherwise({redirectTo: '/view1'});
}]);
