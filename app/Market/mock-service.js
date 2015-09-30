/**
 * Created by phoebe on 9/29/15.
 */
angular.module("service.data",[])
    .factory('marketDataService',["$http",'$q',function($http, $q){
        var factory={};
        factory.getItemData = function(){
            var defer = $q.defer();

            $http.get('Market/data.json').success(function (res) {
                console.log(res);
                defer.resolve(res);
            });
            return defer.promise;
        }

        return factory;
    }])