/**
 * Created by phoebe on 15/9/7.
 */
'use strict';

angular.module('myApp.Market', [])
    .controller('Market', ['$scope',function($scope) {
        $scope.profile = {
            "name": "wenwen",
            "myBlogNum": 30
        };
    }]);