/**
 * Created by phoebe on 15/9/7.
 */
'use strict';

angular.module('myApp.Market', [])
    .controller('Market', ['$scope', '$rootScope','$q', 'marketDataService',function($scope, $rootScope, $q, marketDataService) {
        //get data across the marketDataService
        $scope.items = [];
        var pageNum = 1,lastPage = false;
        loadMore();
        $rootScope.selectedMenu = 'market';
        //$scope.$watch(function () {
        //    return $window.scrollY;
        //}, function (scrollY) {
        //    console.log(scrollY);
        //    /* logic */
        //});
        $('section').bind("scroll", function(e) {
            //console.log(e.target.scrollTop);
            var defer = $q.defer();
            if(checkIfReachButtom(e) && !lastPage){
                loadMore(defer);
            }
            //checkIfReachButtom(e);
            //$scope.visible = false;
        });

        function loadMore(){
            marketDataService.getItemData(pageNum)
                .then(function(res){
                    if(!res.pageEnd){
                        for(var i in res.items){
                            $scope.items.push(res.items[i]);
                        }
                        pageNum++;
                    }else{
                        lastPage = true;
                        return;
                    }
                });
        }

        function checkIfReachButtom(e){
            var winW = $(window).width();
            var liW = $('.list li').eq(0).width();
            var liH = $('.list li').eq(0).height();
            var rowN = Math.floor(winW/liW);
            var colN = Math.floor($('li').length/rowN);
            var scrollTop = e.target.scrollTop;
            var containH = $(e.target).height();
            var contentH = liH * colN;
            if(contentH < containH + scrollTop){
                return true;
            }
        }
    }]);

