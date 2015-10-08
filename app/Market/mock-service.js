/**
 * Created by phoebe on 9/29/15.
 */
angular.module("service.data",[])
    .factory('marketDataService',["$http",'$q',function($http, $q){
        var factory={};
        factory.getItemData = function(pageNum){
            var defer = $q.defer();
            var url = 'Market/data'+ pageNum + '.json';
            $http.get(url).success(function (res) {
                console.log(res);
                defer.resolve(res);
            });
            return defer.promise;
        }

        return factory;
    }])