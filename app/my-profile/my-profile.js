/**
 * Created by phoebe on 15/9/7.
 */
'use strict';

angular.module('myApp.myProfile', [])
    .controller('myProfile', ['$scope',function($scope) {
        $scope.profile = {
            "name": "wenwen",
            "myBlogNum": 30
        };
    }]);