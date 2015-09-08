

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.myBlog',
  'myApp.myProfile',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
      $routeProvider
          .when('/myBlog', {
            templateUrl: 'my-blog/my-blog.html',
            controller: 'myBlog'
          })
          .when('/myProfile', {
            templateUrl: 'my-profile/my-profile.html',
            controller: 'myProfile'
          })
          .otherwise({redirectTo: '/myBlog'});
}]);
