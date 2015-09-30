/**
 * Created by phoebe on 15/9/7.
 */
'use strict';

angular.module('myApp.myProfile', [])
    .controller('myProfile', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.profile = {
            "name": "wenwen",
            "myBlogNum": 30
        };
        $rootScope.selectedMenu = 'myProfile';
    }]);