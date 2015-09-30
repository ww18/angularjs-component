/**
 * Created by phoebe on 15/9/7.
 */
'use strict';

angular.module('myApp.Market', [])
    .controller('Market', ['$scope', '$rootScope', 'marketDataService',function($scope, $rootScope, marketDataService) {
        //get data across the marketDataService
        marketDataService.getItemData()
            .then(function(res){
                $scope.items  = res;
            });
        $rootScope.selectedMenu = 'market';
    }]);

