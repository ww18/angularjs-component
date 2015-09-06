/**
 * Created by phoebe on 8/30/2015.
 */
angular.module("cards",['material.core'])
    .directive("cards",cardsDirective)
    .controller("cardsContrl", cardsContrl)
    .factory("cardsService", cardsService);

function cardsDirective(){
    return {
        restrict: "EA",
        scope:{},
        controller:function(){
            this.change = function(){
                alert(1);
            }
        },
        templateUrl:"components/cards/template/cards.html",
        link: function(scope, element, attrs){
            scope.data = 'change the content';

        }
    }
}

function cardsContrl($scope, $element, $attrs){
    function change(text){
        var defaultV = "change the content once";
        if(text){
            defaultV = text;
        }
        $scope.data = defaultV;
    }
}

function cardsService(){
    var id = '';
    return {
        change: function(str){
            id = str;
        }
    };

    //console.log($scope);
}