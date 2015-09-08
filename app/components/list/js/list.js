/**
 * Created by phoebe on 15/9/7.
 */
angular.module("list",[])
.directive('list', listDirective);


function listDirective(){
    return {
        restrict: "EA",
        templateUrl:"components/list/template/list.html",
        scope: {
            data: '='
        },
        link: function(scope, element, attrs){


        },
        controller:function(){

        }
    }
}